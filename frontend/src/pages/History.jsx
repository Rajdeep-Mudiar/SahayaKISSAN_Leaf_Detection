import { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./History.css";

const API_BASE_URL = "http://localhost:5000/api-sensor";

export default function History() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetchHistoryData();
  }, []);

  const fetchHistoryData = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/sensor-history`);
      if (!response.ok) throw new Error("Failed to fetch history");

      const history = await response.json();

      // Format data for charts
      const formatted = history.reverse().map((d, idx) => ({
        ...d,
        id: idx,
        time: new Date(d.timestamp).toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
        date: new Date(d.timestamp).toLocaleDateString(),
      }));

      setData(formatted);
      setLoading(false);
      setError(null);
    } catch (err) {
      console.error("Error fetching history:", err);
      setError("Failed to load history data");
      setLoading(false);
    }
  };

  const getStatistics = () => {
    if (data.length === 0) return {};

    const temps = data.map((d) => d.temperature);
    const humidities = data.map((d) => d.humidity);
    const moistures = data.map((d) => d.soil_moisture);

    return {
      tempAvg: (temps.reduce((a, b) => a + b, 0) / temps.length).toFixed(2),
      tempMax: Math.max(...temps).toFixed(2),
      tempMin: Math.min(...temps).toFixed(2),
      humidityAvg: (
        humidities.reduce((a, b) => a + b, 0) / humidities.length
      ).toFixed(2),
      humidityMax: Math.max(...humidities).toFixed(2),
      humidityMin: Math.min(...humidities).toFixed(2),
      moistureAvg: (
        moistures.reduce((a, b) => a + b, 0) / moistures.length
      ).toFixed(2),
      moistureMax: Math.max(...moistures).toFixed(2),
      moistureMin: Math.min(...moistures).toFixed(2),
    };
  };

  const stats = getStatistics();

  return (
    <div className="history-container">
      {/* Header */}
      <header className="history-header">
        <div className="header-content">
          <p className="header-eyebrow">Data Analysis</p>
          <h1 className="header-title">
            Sensor History
            <span className="live-indicator">● Live</span>
          </h1>
          <p className="header-subtitle">
            Track sensor readings over time • Analyze trends and patterns
          </p>
        </div>
      </header>

      {loading && (
        <div style={{ textAlign: "center", padding: "60px", color: "#a5d6a7" }}>
          <h2>Loading history data...</h2>
        </div>
      )}

      {error && (
        <div style={{ textAlign: "center", padding: "60px", color: "#ff9999" }}>
          <h2>{error}</h2>
          <button onClick={fetchHistoryData} className="retry-btn">
            Retry
          </button>
        </div>
      )}

      {!loading && !error && data.length > 0 && (
        <>
          {/* Statistics Cards */}
          <section className="stats-section">
            <div className="stats-grid">
              {/* Temperature Stats */}
              <div className="stat-card temp-stat">
                <div className="stat-icon">🌡️</div>
                <div className="stat-content">
                  <h3>Temperature</h3>
                  <div className="stat-values">
                    <div className="stat-value">
                      <span className="label">Avg:</span>
                      <span className="value">{stats.tempAvg}°C</span>
                    </div>
                    <div className="stat-value">
                      <span className="label">Max:</span>
                      <span className="value">{stats.tempMax}°C</span>
                    </div>
                    <div className="stat-value">
                      <span className="label">Min:</span>
                      <span className="value">{stats.tempMin}°C</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Humidity Stats */}
              <div className="stat-card humidity-stat">
                <div className="stat-icon">💧</div>
                <div className="stat-content">
                  <h3>Humidity</h3>
                  <div className="stat-values">
                    <div className="stat-value">
                      <span className="label">Avg:</span>
                      <span className="value">{stats.humidityAvg}%</span>
                    </div>
                    <div className="stat-value">
                      <span className="label">Max:</span>
                      <span className="value">{stats.humidityMax}%</span>
                    </div>
                    <div className="stat-value">
                      <span className="label">Min:</span>
                      <span className="value">{stats.humidityMin}%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Soil Moisture Stats */}
              <div className="stat-card moisture-stat">
                <div className="stat-icon">🌱</div>
                <div className="stat-content">
                  <h3>Soil Moisture</h3>
                  <div className="stat-values">
                    <div className="stat-value">
                      <span className="label">Avg:</span>
                      <span className="value">{stats.moistureAvg}</span>
                    </div>
                    <div className="stat-value">
                      <span className="label">Max:</span>
                      <span className="value">{stats.moistureMax}</span>
                    </div>
                    <div className="stat-value">
                      <span className="label">Min:</span>
                      <span className="value">{stats.moistureMin}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Charts Section */}
          <section className="charts-section">
            {/* Temperature Chart */}
            <div className="chart-card">
              <div className="chart-header">
                <h3>Temperature Trend</h3>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="rgba(126, 227, 156, 0.2)"
                  />
                  <XAxis dataKey="time" stroke="#7ee39c" />
                  <YAxis stroke="#7ee39c" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(10, 15, 12, 0.8)",
                      border: "1px solid #7ee39c",
                      borderRadius: "8px",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="temperature"
                    stroke="#ff9966"
                    strokeWidth={2}
                    dot={false}
                    isAnimationActive={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Humidity Chart */}
            <div className="chart-card">
              <div className="chart-header">
                <h3>Humidity Trend</h3>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="rgba(126, 227, 156, 0.2)"
                  />
                  <XAxis dataKey="time" stroke="#7ee39c" />
                  <YAxis stroke="#7ee39c" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(10, 15, 12, 0.8)",
                      border: "1px solid #7ee39c",
                      borderRadius: "8px",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="humidity"
                    stroke="#6eb5ff"
                    strokeWidth={2}
                    dot={false}
                    isAnimationActive={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Soil Moisture Chart */}
            <div className="chart-card">
              <div className="chart-header">
                <h3>Soil Moisture Trend</h3>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="rgba(126, 227, 156, 0.2)"
                  />
                  <XAxis dataKey="time" stroke="#7ee39c" />
                  <YAxis stroke="#7ee39c" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(10, 15, 12, 0.8)",
                      border: "1px solid #7ee39c",
                      borderRadius: "8px",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="soil_moisture"
                    stroke="#a5d6a7"
                    strokeWidth={2}
                    dot={false}
                    isAnimationActive={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* All Parameters Chart */}
            <div className="chart-card full-width">
              <div className="chart-header">
                <h3>All Parameters Comparison</h3>
              </div>
              <ResponsiveContainer width="100%" height={350}>
                <LineChart data={data}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="rgba(126, 227, 156, 0.2)"
                  />
                  <XAxis dataKey="time" stroke="#7ee39c" />
                  <YAxis stroke="#7ee39c" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(10, 15, 12, 0.8)",
                      border: "1px solid #7ee39c",
                      borderRadius: "8px",
                    }}
                  />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="temperature"
                    stroke="#ff9966"
                    name="Temperature (°C)"
                    strokeWidth={2}
                    dot={false}
                    isAnimationActive={false}
                  />
                  <Line
                    type="monotone"
                    dataKey="humidity"
                    stroke="#6eb5ff"
                    name="Humidity (%)"
                    strokeWidth={2}
                    dot={false}
                    isAnimationActive={false}
                  />
                  <Line
                    type="monotone"
                    dataKey="soil_moisture"
                    stroke="#a5d6a7"
                    name="Soil Moisture"
                    strokeWidth={2}
                    dot={false}
                    isAnimationActive={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </section>

          {/* Refresh Button */}
          <div style={{ textAlign: "center", padding: "40px 20px" }}>
            <button onClick={fetchHistoryData} className="refresh-btn">
              🔄 Refresh Data
            </button>
          </div>
        </>
      )}

      {!loading && !error && data.length === 0 && (
        <div style={{ textAlign: "center", padding: "60px", color: "#a5d6a7" }}>
          <h2>No data available</h2>
          <p>Start collecting sensor data to see history</p>
        </div>
      )}
    </div>
  );
}
