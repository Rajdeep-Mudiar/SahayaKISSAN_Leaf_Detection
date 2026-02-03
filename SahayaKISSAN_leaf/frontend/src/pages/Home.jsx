import React from 'react';
import {
  BarChart3,
  PieChart,
  AlertTriangle,
  Target,
  Users,
  Leaf,
  Droplets,
  TrendingDown
} from 'lucide-react';
import { Bar, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import './Home.css'; // Optional additional styles

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

const Home = () => {
  // Yield Loss Chart Data
  const yieldData = {
    labels: ['Pests & Diseases', 'Climate Impact', 'Other'],
    datasets: [{
      label: 'Annual Loss (Million Kg)',
      data: [147, 50, 30],
      backgroundColor: ['#e74c3c', '#f39c12', '#95a5a6'],
      borderColor: ['#c0392b', '#d68910', '#7f8c8d'],
      borderWidth: 2,
    }],
  };

  const yieldOptions = {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: { y: { beginAtZero: true } },
  };

  // Detection Chart Data
  const detectionData = {
    labels: ['Early Detection', 'Late Detection', 'No Detection'],
    datasets: [{
      data: [80, 15, 5],
      backgroundColor: ['#27ae60', '#f39c12', '#e74c3c'],
      borderWidth: 0,
    }],
  };

  return (
    <div className="agri-container">
      {/* Header */}
      <div className="agri-header">
        <h1>
          <Leaf className="inline-block mr-3" size={48} />
          Assam Tea Crisis: Why 147M Kg Harvests Vanish Yearly
        </h1>
        <p className="text-xl opacity-95">Why Assam Tea Farmers Desperately Need This Solution</p>
      </div>

      {/* Core Problems */}
      <div className="agri-section">
        <h2 className="text-4xl font-bold mb-8 flex items-center gap-4">
          <AlertTriangle size={40} className="text-red-500" />
           Core Problem in Tea Fields (Assam)
        </h2>

        <div className="problem-grid">
          <div className="problem-card">
            <h4 className="text-2xl font-semibold text-red-700 mb-4">❌ 1. Late Disease Detection</h4>
            <p>
              Farmers act only after visible damage. By then: infection spreads, 
              leaf quality drops, yield crashes. <strong>Damage irreversible.</strong><br/><br/>
              <em>147M kg annual losses[web:14]</em>
            </p>
          </div>

          <div className="problem-card">
            <h4 className="text-2xl font-semibold text-red-700 mb-4">❌ 2. Manual Scouting Fails</h4>
            <table className="agri-table">
              <thead>
                <tr><th>Issue</th><th>Impact</th></tr>
              </thead>
              <tbody>
                <tr><td>Labor Shortage</td><td>Cannot check every bush</td></tr>
                <tr><td>Human Error</td><td>Similar early symptoms</td></tr>
                <tr><td>Scale</td><td>1000s bushes/farmer</td></tr>
              </tbody>
            </table>
          </div>

          <div className="problem-card">
            <h4 className="text-2xl font-semibold text-red-700 mb-4">❌ 3. No Expert Access</h4>
            <p>
              Rely on: Neighbors, input sellers, guesswork → 
              <strong>Wrong diagnosis + pesticides = crop damage + money loss</strong>[web:19]
            </p>
          </div>
        </div>
      </div>

      {/* Why Matters */}
      <div className="agri-section">
        <h2 className="text-4xl font-bold mb-8 flex items-center gap-4">
          <Target size={40} className="text-green-600" />
          🎯 Why This Matters
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-green-50 rounded-xl border-l-6 border-yellow-500">
            <h3 className="text-2xl mb-3 flex items-center gap-2">
              <TrendingDown size={28} />
              🌱 Income Loss
            </h3>
            <p>10-20% yield drop = huge hit for smallholders</p>
          </div>
          <div className="p-6 bg-green-50 rounded-xl border-l-6 border-orange-500">
            <h3 className="text-2xl mb-3 flex items-center gap-2">
              <Droplets size={28} />
              💸 Chemical Waste
            </h3>
            <p>Broad-spectrum overuse pollutes soil/water</p>
          </div>
          <div className="p-6 bg-green-50 rounded-xl border-l-6 border-blue-500">
            <h3 className="text-2xl mb-3">⏳ Fast Spread</h3>
            <p>Assam humidity: 1 patch → whole field in 1 week</p>
          </div>
        </div>
      </div>

      {/* Comparison */}
      <div className="agri-section">
        <h2 className="text-4xl font-bold mb-8 flex items-center gap-4">
          <Users size={40} className="text-purple-600" />
          🧑‍🌾 Small Growers Vulnerable
        </h2>
        <table className="agri-table w-full">
          <thead>
            <tr><th></th><th>Big Estates</th><th>Small Growers</th></tr>
          </thead>
          <tbody>
            <tr><td>Monitoring</td><td>Supervisors + Labs</td><td>Guesswork</td></tr>
            <tr><td>Diagnostics</td><td>Experts</td><td>No access</td></tr>
            <tr><td>Production</td><td>-</td><td>50% Assam tea[web:16]</td></tr>
          </tbody>
        </table>
      </div>

      {/* Graphs */}
      <div className="agri-section">
        <h2 className="text-4xl font-bold mb-8 flex items-center gap-4">
          📊 Impact Visualized
        </h2>
        <div className="charts-grid">
          <div className="chart-card">
            <h3 className="text-2xl text-center mb-6">Annual Tea Losses</h3>
            <Bar data={yieldData} options={yieldOptions} />
          </div>
          <div className="chart-card">
            <h3 className="text-2xl text-center mb-6">Detection Impact</h3>
            <Doughnut data={detectionData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
