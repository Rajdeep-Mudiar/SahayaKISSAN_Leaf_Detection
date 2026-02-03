import { useEffect, useRef } from "react";
import "./Page3.css";
export default function Page3() {
  const blisterRef = useRef(null);
  const rustRef = useRef(null);
  const brownRef = useRef(null);
  const timingRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    });

    [blisterRef, rustRef, brownRef, timingRef].forEach(ref => {
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
            <p className="hero-eyebrow">Advisory Engine • Field Intelligence</p>
            <h1 className="hero-title">
              PAGE 3 — Advisory Engine Layer<br />
              <span>(What the App Tells Farmers)</span>
            </h1>
            <p className="hero-subtitle">
              Actionable steps, optimized timing, and simple treatments tailored to real-time
              field conditions.
            </p>
          </div>
        </section>

        <div className="page-layout">
          <div className="page-left">
            {/* Blister Blight Advisory */}
            <section ref={blisterRef} className="content-section">
              <div className="section-header">
                <h2 className="section-title">🍃 1. Blister Blight Advisory</h2>
                <p className="section-subtitle">Highest risk during humid, rainy spells.</p>
              </div>
              <div className="advisory-grid">
                <div className="advisory-card why-card">
                  <h3>🔍 Why it happens</h3>
                  <ul className="reason-list">
                    <li>High humidity</li>
                    <li>Rainy weather</li>
                    <li>Attacks young shoots (most valuable part)</li>
                  </ul>
                </div>
                <div className="advisory-card urgent-card">
                  <h3>🚨 Early Stage — Do within 24 hrs</h3>
                  <ul className="urgent-list">
                    <li>✂️ Pluck infected young leaves</li>
                    <li>❌ Do NOT leave in field → burn/bury</li>
                  </ul>
                </div>
                <div className="advisory-card treatment-card">
                  <h3>💊 Treatment</h3>
                  <table className="mini-table">
                    <thead>
                      <tr><th>Type</th><th>Solution</th></tr>
                    </thead>
                    <tbody>
                      <tr><td>Chemical</td><td>Copper oxychloride / Hexaconazole</td></tr>
                      <tr><td>Low-cost</td><td>1% Bordeaux mixture</td></tr>
                    </tbody>
                  </table>
                  <p className="treatment-note">Spray Timing: Early morning or evening<br />Repeat: After 7–10 days</p>
                </div>
                <div className="advisory-card prevention-card">
                  <h3>🌱 Prevention</h3>
                  <ul className="prevention-list">
                    <li>Prune dense bushes → better airflow</li>
                    <li>Avoid overhead irrigation</li>
                    <li>Maintain regular plucking cycle</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Red Rust Advisory */}
            <section ref={rustRef} className="content-section">
              <div className="section-header">
                <h2 className="section-title">🍂 2. Red Rust Advisory</h2>
                <p className="section-subtitle">Often driven by weak nutrition and shade stress.</p>
              </div>
              <div className="advisory-grid">
                <div className="advisory-card why-card">
                  <h3>🔍 Cause</h3>
                  <ul className="reason-list">
                    <li>Poor soil nutrition</li>
                    <li>Weak plants</li>
                    <li>Shade stress</li>
                  </ul>
                </div>
                <div className="advisory-card urgent-card">
                  <h3>🚨 Immediate</h3>
                  <ul className="urgent-list">
                    <li>Remove heavily infected leaves</li>
                    <li>Improve soil nutrition</li>
                  </ul>
                </div>
                <div className="advisory-card treatment-card">
                  <h3>💊 Treatment</h3>
                  <table className="mini-table">
                    <thead>
                      <tr><th>Type</th><th>Solution</th></tr>
                    </thead>
                    <tbody>
                      <tr><td>Fungicide</td><td>Copper-based spray</td></tr>
                      <tr><td>Low-cost</td><td>1% Bordeaux mixture</td></tr>
                    </tbody>
                  </table>
                  <p className="treatment-note">Spray Interval: Every 15 days</p>
                </div>
                <div className="advisory-card prevention-card">
                  <h3>🌿 Long-Term Fix</h3>
                  <ul className="prevention-list">
                    <li>Add compost / organic manure</li>
                    <li>Balanced NPK fertilizer</li>
                    <li>Proper shade regulation</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Brown Blight Advisory */}
            <section ref={brownRef} className="content-section">
              <div className="section-header">
                <h2 className="section-title">🍁 3. Brown Blight Advisory</h2>
                <p className="section-subtitle">Fungal spread accelerates with moisture.</p>
              </div>
              <div className="advisory-grid">
                <div className="advisory-card why-card">
                  <h3>🔍 Cause</h3>
                  <ul className="reason-list">
                    <li>Fungal infection</li>
                    <li>Moist conditions</li>
                  </ul>
                </div>
                <div className="advisory-card urgent-card">
                  <h3>🚨 Immediate</h3>
                  <ul className="urgent-list">
                    <li>Remove affected leaves</li>
                    <li>Avoid water stagnation</li>
                  </ul>
                </div>
                <div className="advisory-card treatment-card">
                  <h3>💊 Treatment</h3>
                  <table className="mini-table">
                    <thead>
                      <tr><th>Type</th><th>Solution</th></tr>
                    </thead>
                    <tbody>
                      <tr><td>Fungicide</td><td>Carbendazim / Mancozeb</td></tr>
                      <tr><td>Low-cost</td><td>Neem-based bio-fungicide (mild stage)</td></tr>
                    </tbody>
                  </table>
                  <p className="treatment-note">Repeat: Every 10–14 days</p>
                </div>
              </div>
            </section>

            {/* Smart Timing Logic */}
            <section ref={timingRef} className="content-section">
              <div className="section-header">
                <h2 className="section-title">⏰ Smart Timing Logic (AI + Weather)</h2>
                <p className="section-subtitle">Choose the right spray window with live conditions.</p>
              </div>
              <div className="table-container">
                <table className="timing-table">
                  <thead>
                    <tr>
                      <th>Condition</th>
                      <th>Advisory Logic</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>High humidity</td>
                      <td>Increase spray frequency</td>
                    </tr>
                    <tr>
                      <td>Rain forecast</td>
                      <td>Spray AFTER rain</td>
                    </tr>
                    <tr>
                      <td>Early stage</td>
                      <td>Use low-cost bio options</td>
                    </tr>
                    <tr>
                      <td>Severe stage</td>
                      <td>Use chemical fungicide</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>

          <aside className="page-right">
            <div className="gallery-card">
              <h3>Field Snapshots</h3>
              <p>Quick visuals for growers — health, moisture, and canopy cues.</p>
            </div>

            <div className="image-grid">
              <figure className="image-tile">
                <img
                  src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=600&auto=format&fit=crop"
                  alt="Lush green tea plantation"
                />
                <figcaption>Healthy canopy</figcaption>
              </figure>
              <figure className="image-tile">
                <img
                  src="https://images.unsplash.com/photo-1446071103084-c257b5f70672?q=80&w=600&auto=format&fit=crop"
                  alt="Morning dew on leaves"
                />
                <figcaption>Morning dew</figcaption>
              </figure>
              <figure className="image-tile">
                <img
                  src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=600&auto=format&fit=crop"
                  alt="Tea leaves closeup"
                />
                <figcaption>Leaf texture</figcaption>
              </figure>
              <figure className="image-tile">
                <img
                  src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=600&auto=format&fit=crop"
                  alt="Sunlight over farm rows"
                />
                <figcaption>Sunlight window</figcaption>
              </figure>
              <figure className="image-tile">
                <img
                  src="https://images.unsplash.com/photo-1452274381522-521513015433?q=80&w=600&auto=format&fit=crop"
                  alt="Soil and compost"
                />
                <figcaption>Soil nutrition</figcaption>
              </figure>
              <figure className="image-tile">
                <img
                  src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=600&auto=format&fit=crop"
                  alt="Rainy field"
                />
                <figcaption>Rain alert</figcaption>
              </figure>
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}