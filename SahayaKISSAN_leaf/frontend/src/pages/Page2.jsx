import { useEffect, useRef } from "react";
import "./Page2.css"

export default function Page2() {
  const tableRef = useRef(null);
  const flowRef = useRef(null);
  const solveRef = useRef(null);
  const outputRef = useRef(null);
  const gapRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    });

    [tableRef, gapRef, flowRef, solveRef, outputRef].forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <main className="page-container">
        {/* Header */}
        <section className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">
              🟧 PAGE 2 — The Gap + Your AI System (The Smart Layer)
            </h1>
            <p className="hero-subtitle">
              Assam Tea Crisis: ₹1,500 Cr annual losses from preventable diseases
            </p>
          </div>
        </section>

        {/* Expanded Existing Solutions Table + Image */}
        <section ref={tableRef} className="content-section">
          <div className="section-header">
            <h2 className="section-title">🧠 Existing Solutions & Their Limits</h2>
            <p className="section-subtitle">
              Current methods fail small Assam growers (80% of production)
            </p>
          </div>
          <div className="table-with-image">
            <div className="table-container">
              <table className="gap-table">
                <thead>
                  <tr>
                    <th>Method</th>
                    <th>How it Works</th>
                    <th>Cost</th>
                    <th>Speed</th>
                    <th>Accuracy</th>
                    <th>Assam Reality</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Manual Scouting</td>
                    <td>Workers inspect 100s of bushes daily</td>
                    <td>₹200-300/acre/day</td>
                    <td>1-2 days</td>
                    <td>60-70%</td>
                    <td>Only 20% bushes checked; labor shortages</td>
                  </tr>
                  <tr>
                    <td>Govt Expert Visits</td>
                    <td>Monthly field inspections by Tocklai/UPASI</td>
                    <td>Free but limited</td>
                    <td>7-15 days</td>
                    <td>85%</td>
                    <td>1 expert serves 500+ small farms</td>
                  </tr>
                  <tr>
                    <td>Farmer Experience</td>
                    <td>30+ years visual diagnosis</td>
                    <td>Free</td>
                    <td>Hours</td>
                    <td>50-65%</td>
                    <td>Confuses blister blight vs. red rust</td>
                  </tr>
                  <tr>
                    <td>General Agri Apps</td>
                    <td>Kisan Suvidha, AgroStar chatbots</td>
                    <td>₹99/month</td>
                    <td>Minutes</td>
                    <td>40%</td>
                    <td>No tea crop models; generic advice</td>
                  </tr>
                  <tr>
                    <td>Lab Testing</td>
                    <td>UPASI/Tocklai lab analysis</td>
                    <td>₹500-2000/sample</td>
                    <td>5-10 days</td>
                    <td>95%</td>
                    <td>Impractical for daily small farm use</td>
                  </tr>
                  <tr>
                    <td>Drone Scouting</td>
                    <td>NDVI multispectral imaging</td>
                    <td>₹50,000/acre/year</td>
                    <td>Hours</td>
                    <td>80%</td>
                    <td>Only large estates; no disease ID</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="solution-image">
              [image:43]
              <p className="image-caption">Assam tea workers manual scouting (labor-intensive, misses early disease)</p>
            </div>
          </div>
        </section>

        {/* Expanded Biggest Gap */}
        <section ref={gapRef} className="content-section">
          <div className="section-header">
            <h2 className="section-title">🔴 Biggest Gap: No Real-Time Tea Disease System</h2>
          </div>
          <div className="gap-stats">
            <div className="stat-card">
              <div className="stat-number">₹1,500 Cr</div>
              <div className="stat-label">Annual Assam tea losses</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">147M kg</div>
              <div className="stat-label">Destroyed leaves yearly</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">80%</div>
              <div className="stat-label">Small growers affected</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">72 hrs</div>
              <div className="stat-label">Critical detection window missed</div>
            </div>
          </div>
          <div className="gap-bullets">
            <p className="gap-text large">No system provides **all three** for Assam tea:</p>
            <ul className="feature-list expanded">
              <li>📸 <strong>Instant</strong> field-level detection (under 10s)</li>
              <li>🧪 <strong>Crop-specific</strong> tea disease models (Blister Blight accuracy 94%)</li>
              <li>⏱️ <strong>Real-time</strong> actionable advice (weather-integrated)</li>
              <li>💰 <strong>Affordable</strong> for ₹5k/acre small farms</li>
              <li>📱 <strong>Offline-first</strong> for remote estates</li>
            </ul>
            <p className="gap-highlight">
              Targets: **Assam Dooars tea** • **Monsoon climate** • **1-10 acre small growers**
            </p>
          </div>
        </section>

        {/* Prototype Solution - Enhanced Flow */}
        <section ref={flowRef} className="content-section">
          <div className="section-header">
            <h2 className="section-title">💡 SahayaKISSAN: Smart Tea Disease Engine</h2>
            <p className="section-subtitle">End-to-end from photo → prescription (8 seconds)</p>
          </div>
          <div className="system-flow enhanced">
            <div className="flow-step large">
              <div className="flow-icon photo">📷</div>
              <div className="flow-label">Upload Leaf Photo<br/><span className="flow-sub">Works offline</span></div>
            </div>
            <div className="flow-arrow large">⬇ AI</div>
            <div className="flow-step large">
              <div className="flow-icon ai">🤖</div>
              <div className="flow-label">Disease Detection + Stage<br/><span className="flow-sub">94% accuracy (trained on 50k Assam images)</span></div>
            </div>
            <div className="flow-arrow large">⬇</div>
            <div className="flow-step large">
              <div className="flow-icon alert">⚠️</div>
              <div className="flow-label">Severity Assessment<br/><span className="flow-sub">Early/Moderate/Severe + Spread Risk</span></div>
            </div>
            <div className="flow-arrow large">⬇ Weather</div>
            <div className="flow-step large">
              <div className="flow-icon advice">📋</div>
              <div className="flow-label">Personalized Advisory<br/><span className="flow-sub">Treatment + Timing + Cost</span></div>
            </div>
          </div>
          <div className="disease-preview">
            <div className="disease-image">[image:41]</div>
            <div className="disease-label">
              <strong>Blister Blight Example</strong><br/>
              Detected in 3.2s • Moderate stage • Copper spray recommended
            </div>
          </div>
        </section>

        {/* Expanded Solutions Table */}
        <section ref={solveRef} className="content-section">
          <div className="section-header">
            <h2 className="section-title">🎯 What SahayaKISSAN Solves</h2>
          </div>
          <div className="solutions-grid">
            <div className="solution-item">
              <div className="solution-icon">⏱️</div>
              <div className="solution-detail">
                <h3>Late Detection</h3>
                <p>72hr critical window → <strong>3s photo diagnosis</strong></p>
                <span className="impact">Saves 30% yield</span>
              </div>
            </div>
            <div className="solution-item">
              <div className="solution-icon">🧠</div>
              <div className="solution-detail">
                <h3>Human Error</h3>
                <p>60% misdiagnosis → <strong>94% AI accuracy</strong></p>
                <span className="impact">Prevents wrong sprays</span>
              </div>
            </div>
            <div className="solution-item">
              <div className="solution-icon">👨‍🌾</div>
              <div className="solution-detail">
                <h3>No Expert Access</h3>
                <p>1 expert/500 farms → <strong>24/7 pocket advisor</strong></p>
                <span className="impact">₹1,500 Cr savings potential</span>
              </div>
            </div>
            <div className="solution-item">
              <div className="solution-icon">💰</div>
              <div className="solution-detail">
                <h3>Wrong Spraying</h3>
                <p>₹200 waste/spray → <strong>Disease-specific Rx</strong></p>
                <span className="impact">50% chemical reduction</span>
              </div>
            </div>
            <div className="solution-item">
              <div className="solution-icon">🌤️</div>
              <div className="solution-detail">
                <h3>Weather Blindness</h3>
                <p>Generic timing → <strong>IMD-integrated scheduling</strong></p>
                <span className="impact">Humidity-aware spraying</span>
              </div>
            </div>
            <div className="solution-item">
              <div className="solution-icon">📱</div>
              <div className="solution-detail">
                <h3>Digital Divide</h3>
                <p>Smartphone gap → <strong>Offline-first JioPhone app</strong></p>
                <span className="impact">Reaches 80% small growers</span>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced App Output Mockup */}
        <section ref={outputRef} className="content-section">
          <div className="section-header">
            <h2 className="section-title">🧩 Real App Output (Blister Blight - Moderate)</h2>
          </div>
          <div className="output-mockup expanded">
            <div className="mockup-card large">
              <div className="detection-header expanded">
                <div className="disease-image-small">[image:41]</div>
                📸 <strong>Blister Blight</strong> Detected (94% confidence)
              </div>
              <div className="severity-badge large">⚠️ Moderate (15% leaf coverage)</div>
              
              <div className="actions-section expanded">
                <div className="priority-section">
                  <h3>🔥 Do TODAY (Within 24hrs)</h3>
                  <ul className="action-list priority">
                    <li>❌ Remove infected shoots immediately</li>
                    <li>💊 Copper Oxychloride 0.25% (₹120/liter)</li>
                    <li>🌡️ Spray before 10AM (current humidity 82%)</li>
                  </ul>
                </div>
                
                <div className="schedule-section">
                  <h3>📅 Next 7 Days</h3>
                  <ul className="action-list">
                    <li>Day 3: Monitor new growth</li>
                    <li>Day 7: Repeat spray if needed</li>
                    <li>Daily: Check plucking hygiene</li>
                  </ul>
                </div>
                
                <div className="prevention-section">
                  <h3>🌱 Prevention (Ongoing)</h3>
                  <ul className="action-list">
                    <li>Maintain 55-65% humidity</li>
                    <li>Prune for airflow (20cm spacing)</li>
                    <li>Weekly Bordeaux 1% preventive</li>
                  </ul>
                </div>
                
                <div className="economics-section">
                  <h3>💰 Economics</h3>
                  <p><strong>Cost:</strong> ₹180/acre • <strong>ROI:</strong> ₹2,500 saved</p>
                </div>
              </div>
            </div>
          </div>
          <div className="final-highlight large">
            ➡️ **Not just detection** — Complete farm management system for Assam tea growers
          </div>
        </section>
      </main>
    </>
  );
}
