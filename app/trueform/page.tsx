'use client';

import Head from 'next/head';

export default function TrueFormPage() {
  const handleAppStoreClick = async () => {
    window.location.href = 'https://apps.apple.com/app/apple-store/id6745799401?ct=web&mt=8';
  };

  return (
    <>
      <Head>
        <meta name="apple-itunes-app" content="app-id=6745799401" />
      </Head>

      <div className="trueform-landing">
        <style jsx global>{`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          .trueform-landing {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            background: #000;
            color: #fff;
            min-height: 100vh;
            overflow-x: hidden;
          }

          .hero {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 40px 20px;
            text-align: center;
            position: relative;
            background: radial-gradient(ellipse at 50% 0%, rgba(0, 100, 255, 0.15) 0%, transparent 50%),
                        radial-gradient(ellipse at 80% 50%, rgba(120, 0, 255, 0.1) 0%, transparent 40%),
                        #000;
            overflow: hidden;
          }

          .hero-bg-phone {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: auto;
            height: 95%;
            max-height: 900px;
            opacity: 0.35;
            pointer-events: none;
            z-index: 0;
          }

          .hero > *:not(.hero-bg-phone) {
            position: relative;
            z-index: 1;
          }

          .badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            padding: 8px 16px;
            border-radius: 100px;
            font-size: 14px;
            font-weight: 500;
            margin-bottom: 32px;
            backdrop-filter: blur(10px);
          }

          .badge-dot {
            width: 8px;
            height: 8px;
            background: #00ff88;
            border-radius: 50%;
            animation: pulse 2s infinite;
          }

          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }

          .main-title {
            font-size: clamp(40px, 8vw, 72px);
            font-weight: 800;
            line-height: 1.1;
            margin-bottom: 24px;
            background: linear-gradient(135deg, #fff 0%, #fff 50%, rgba(255,255,255,0.7) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .highlight {
            background: linear-gradient(135deg, #0066ff 0%, #00ccff 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .subtitle {
            font-size: clamp(18px, 3vw, 24px);
            color: rgba(255, 255, 255, 0.7);
            max-width: 600px;
            margin: 0 auto 40px;
            line-height: 1.6;
          }

          .cta-buttons {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 16px;
          }

          .app-store-btn {
            display: inline-block;
            background: none;
            border: none;
            padding: 0;
            cursor: pointer;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .app-store-btn:hover {
            transform: scale(1.05);
            box-shadow: 0 20px 40px rgba(0, 102, 255, 0.3);
          }

          .app-store-btn img {
            height: 54px;
          }

          .rating {
            display: flex;
            align-items: center;
            gap: 8px;
            color: rgba(255, 255, 255, 0.6);
            font-size: 14px;
          }

          .stars {
            color: #ffd700;
            letter-spacing: 2px;
          }

          .app-preview {
            padding: 80px 20px;
            background: linear-gradient(180deg, #000 0%, #0a0a0a 50%, #000 100%);
            overflow: hidden;
          }

          .preview-container {
            max-width: 1400px;
            margin: 0 auto;
          }

          .preview-grid {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 40px;
            align-items: center;
            justify-items: center;
          }

          .preview-item {
            position: relative;
            transition: transform 0.4s ease;
          }

          .preview-item:hover {
            transform: translateY(-10px);
          }

          .preview-item img {
            width: 100%;
            max-width: 400px;
            height: auto;
            border-radius: 24px;
            box-shadow: 0 30px 60px rgba(0, 102, 255, 0.15),
                        0 10px 30px rgba(0, 0, 0, 0.5);
          }

          .preview-item.featured img {
            max-width: 500px;
          }

          .preview-caption {
            text-align: center;
            margin-top: 20px;
            font-size: 16px;
            color: rgba(255, 255, 255, 0.7);
            font-weight: 500;
          }

          .features {
            padding: 100px 20px;
            background: linear-gradient(180deg, #000 0%, #0a0a0a 100%);
          }

          .container {
            max-width: 1200px;
            margin: 0 auto;
          }

          .section-title {
            text-align: center;
            font-size: clamp(32px, 5vw, 48px);
            font-weight: 700;
            margin-bottom: 60px;
          }

          .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 24px;
          }

          .feature-card {
            background: linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 24px;
            padding: 32px;
            transition: transform 0.3s ease, border-color 0.3s ease;
          }

          .feature-card:hover {
            transform: translateY(-4px);
            border-color: rgba(0, 102, 255, 0.5);
          }

          .feature-card h3 {
            font-size: 20px;
            font-weight: 600;
            margin-bottom: 12px;
          }

          .feature-card p {
            color: rgba(255, 255, 255, 0.6);
            line-height: 1.6;
            font-size: 15px;
          }

          .how-it-works {
            padding: 100px 20px;
            background: #000;
          }

          .steps {
            display: flex;
            flex-direction: column;
            gap: 40px;
            max-width: 800px;
            margin: 0 auto;
          }

          .step {
            display: flex;
            gap: 24px;
            align-items: flex-start;
          }

          .step-number {
            width: 48px;
            height: 48px;
            min-width: 48px;
            background: linear-gradient(135deg, #0066ff 0%, #0044cc 100%);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
            font-weight: 700;
          }

          .step-content h3 {
            font-size: 20px;
            font-weight: 600;
            margin-bottom: 8px;
          }

          .step-content p {
            color: rgba(255, 255, 255, 0.6);
            line-height: 1.6;
          }

          .social-proof {
            padding: 80px 20px;
            background: linear-gradient(180deg, #0a0a0a 0%, #000 100%);
            text-align: center;
          }

          .stats {
            display: flex;
            justify-content: center;
            gap: 60px;
            flex-wrap: wrap;
          }

          .stat {
            text-align: center;
          }

          .stat-number {
            font-size: clamp(36px, 6vw, 56px);
            font-weight: 800;
            background: linear-gradient(135deg, #0066ff 0%, #00ccff 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .stat-label {
            color: rgba(255, 255, 255, 0.6);
            font-size: 14px;
            margin-top: 8px;
          }

          .final-cta {
            padding: 100px 20px;
            text-align: center;
            background: radial-gradient(ellipse at 50% 100%, rgba(0, 100, 255, 0.15) 0%, transparent 50%),
                        #000;
          }

          .final-cta h2 {
            font-size: clamp(28px, 5vw, 40px);
            font-weight: 700;
            margin-bottom: 16px;
          }

          .final-cta p {
            color: rgba(255, 255, 255, 0.6);
            margin-bottom: 32px;
            font-size: 18px;
          }

          footer {
            padding: 40px 20px;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            text-align: center;
          }

          .footer-links {
            display: flex;
            justify-content: center;
            gap: 32px;
            margin-bottom: 24px;
            flex-wrap: wrap;
          }

          .footer-links a {
            color: rgba(255, 255, 255, 0.6);
            text-decoration: none;
            font-size: 14px;
            transition: color 0.3s ease;
          }

          .footer-links a:hover {
            color: #fff;
          }

          .copyright {
            color: rgba(255, 255, 255, 0.4);
            font-size: 13px;
          }

          @media (max-width: 768px) {
            .preview-grid {
              grid-template-columns: 1fr;
              gap: 32px;
            }

            .preview-item img,
            .preview-item.featured img {
              width: 280px;
              height: 280px;
              object-fit: contain;
              max-width: none;
            }

            .hero-bg-phone {
              opacity: 0.12;
            }
          }

          @media (max-width: 640px) {
            .hero {
              padding: 60px 20px;
            }

            .features-grid {
              grid-template-columns: 1fr;
            }

            .stats {
              gap: 40px;
            }

            .step {
              flex-direction: column;
              text-align: center;
              align-items: center;
            }
          }
        `}</style>

        {/* Hero Section */}
        <section className="hero">
          <img src="/trueform/images/hero-phone.png" alt="" className="hero-bg-phone" aria-hidden="true" />

          <div className="badge">
            <span className="badge-dot"></span>
            AI-Powered Fitness
          </div>

          <h1 className="main-title">Scan Your Body.<br /><span className="highlight">Transform Your Life.</span></h1>

          <p className="subtitle">
            Get instant AI body analysis, personalized workout plans, and track your transformation with the most advanced fitness app.
          </p>

          <div className="cta-buttons">
            <img
              src="/trueform/images/app-store-badge.svg"
              alt="Download on the App Store"
              className="app-store-btn"
              onClick={handleAppStoreClick}
              style={{ cursor: 'pointer', height: '54px' }}
            />
            <div className="rating">
              <span className="stars">★★★★★</span>
              <span>Loved by thousands</span>
            </div>
          </div>
        </section>

        {/* App Preview Section */}
        <section className="app-preview">
          <div className="preview-container">
            <h2 className="section-title">See It In Action</h2>
            <div className="preview-grid">
              <div className="preview-item">
                <img src="/trueform/images/515shots_so-min.png" alt="TrueForm AI Dashboard" />
                <p className="preview-caption">Track Your Progress</p>
              </div>
              <div className="preview-item featured">
                <img src="/trueform/images/172_1x_shots_so-min.png" alt="TrueForm AI Analysis" />
                <p className="preview-caption">AI Body Analysis</p>
              </div>
              <div className="preview-item">
                <img src="/trueform/images/440shots_so-min.png" alt="TrueForm AI Metrics" />
                <p className="preview-caption">Detailed Metrics</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features">
          <div className="container">
            <h2 className="section-title">Everything You Need to Transform</h2>

            <div className="features-grid">
              <div className="feature-card">
                <h3>AI Body Scanner</h3>
                <p>Snap a photo and get instant detailed analysis of your physique. Ratings for chest, back, arms, abs, legs and more.</p>
              </div>

              <div className="feature-card">
                <h3>TrueForm Score</h3>
                <p>Get your personalized score from 0 to 100 based on muscle development, symmetry, and proportions.</p>
              </div>

              <div className="feature-card">
                <h3>Custom Workout Plans</h3>
                <p>AI generates personalized training programs based on your body analysis and goals. Home or gym.</p>
              </div>

              <div className="feature-card">
                <h3>Progress Tracking</h3>
                <p>Track your transformation over time with scan comparisons and visual progress charts.</p>
              </div>

              <div className="feature-card">
                <h3>AI Coach</h3>
                <p>Get real-time guidance and recommendations that adapt as you progress on your fitness journey.</p>
              </div>

              <div className="feature-card">
                <h3>Train with Friends</h3>
                <p>Connect with friends, share progress, and motivate each other to stay consistent.</p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="how-it-works">
          <div className="container">
            <h2 className="section-title">How It Works</h2>

            <div className="steps">
              <div className="step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3>Scan Your Body</h3>
                  <p>Take a photo using your iPhone camera. Our AI analyzes your physique in seconds.</p>
                </div>
              </div>

              <div className="step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3>Get Your Analysis</h3>
                  <p>Receive detailed ratings for each muscle group, symmetry analysis, and your TrueForm score.</p>
                </div>
              </div>

              <div className="step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3>Follow Your Plan</h3>
                  <p>Get a personalized workout plan targeting your weak points and optimizing your strengths.</p>
                </div>
              </div>

              <div className="step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h3>Track & Transform</h3>
                  <p>Log workouts, scan regularly, and watch your transformation unfold over time.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="social-proof">
          <div className="container">
            <div className="stats">
              <div className="stat">
                <div className="stat-number">50K+</div>
                <div className="stat-label">Body Scans</div>
              </div>
              <div className="stat">
                <div className="stat-number">10K+</div>
                <div className="stat-label">Active Users</div>
              </div>
              <div className="stat">
                <div className="stat-number">4.8</div>
                <div className="stat-label">App Store Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="final-cta">
          <h2>Ready to Transform?</h2>
          <p>Download TrueForm AI and start your journey today.</p>
          <img
            src="/trueform/images/app-store-badge.svg"
            alt="Download on the App Store"
            className="app-store-btn"
            onClick={handleAppStoreClick}
            style={{ cursor: 'pointer', height: '54px' }}
          />
        </section>

        {/* Footer */}
        <footer>
          <div className="footer-links">
            <a href="https://bruscan.github.io/trueform-legal/">Privacy Policy</a>
            <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/">Terms of Service</a>
            <a href="mailto:kontakt@bataksolutions.se">Contact</a>
          </div>
          <p className="copyright">© 2025 Batak Solutions AB. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}
