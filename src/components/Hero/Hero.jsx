import { ArrowUpRight, Recycle, ShieldCheck, Leaf } from "lucide-react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero-section" id="home">
      {/* Background */}
      <div className="hero-grid"></div>
      <div className="hero-glow hero-glow-one"></div>
      <div className="hero-glow hero-glow-two"></div>

      <div className="container hero-container">
        <div className="row align-items-center">
          {/* =========================
              LEFT CONTENT
          ========================= */}

          <div className="col-lg-6">
            <div className="hero-content">
              <div className="hero-eyebrow">
                <span className="eyebrow-icon">
                  <Recycle size={14} />
                </span>

                <span>E-WASTE RECYCLING</span>

                <span className="eyebrow-line"></span>
              </div>

              <h1 className="hero-title">
                Giving
                <span> E-Waste </span>a New Purpose.
              </h1>

              <p className="hero-description">
                Responsible e-waste recycling that helps recover valuable
                resources, reduce environmental impact, and move towards a more
                sustainable future.
              </p>

              <div className="hero-actions">
                <a href="#contact" className="hero-primary-btn">
                  Schedule a Pickup
                  <ArrowUpRight size={18} />
                </a>

                <a href="#how-it-works" className="hero-secondary-btn">
                  <span className="play-circle">→</span>
                  Explore Our Process
                </a>
              </div>

              {/* Trust points */}

              <div className="hero-trust">
                <div className="trust-item">
                  <ShieldCheck size={18} />
                  <span>Responsible Recycling</span>
                </div>

                <div className="trust-item">
                  <Leaf size={18} />
                  <span>Environment Focused</span>
                </div>
              </div>
            </div>
          </div>

          {/* =========================
              RIGHT VISUAL
          ========================= */}

          <div className="col-lg-6">
            <div className="hero-visual">
              {/* Main circle */}

              <div className="recycle-orbit orbit-one"></div>
              <div className="recycle-orbit orbit-two"></div>
              <div className="recycle-orbit orbit-three"></div>

              {/* Center */}

              <div className="hero-center">
                <div className="center-glow"></div>

                <div className="center-icon">
                  <Recycle size={68} strokeWidth={1.4} />
                </div>

                <span>RECYCLE</span>
              </div>

              {/* Floating electronics */}

              <div className="floating-device device-phone">
                <div className="phone-screen"></div>
                <div className="phone-camera"></div>
              </div>

              <div className="floating-device device-chip">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="floating-device device-laptop">
                <div className="laptop-screen">
                  <span></span>
                </div>
                <div className="laptop-base"></div>
              </div>

              <div className="floating-wire">
                <span></span>
                <span></span>
              </div>

              {/* Small labels */}

              <div className="visual-label label-one">
                <span></span>
                E-WASTE
              </div>

              <div className="visual-label label-two">
                RESOURCE
                <strong>RECOVERY</strong>
              </div>

              <div className="visual-label label-three">
                <span></span>
                CIRCULAR FUTURE
              </div>
            </div>
          </div>
        </div>

        {/* =========================
            BOTTOM STATS
        ========================= */}

        <div className="hero-bottom">
          <div className="hero-stat">
            <strong>3,770</strong>
            <span>MT/A Recycling Capacity</span>
          </div>

          <div className="hero-stat">
            <strong>01</strong>
            <span>Responsible Process</span>
          </div>

          <div className="hero-stat">
            <strong>∞</strong>
            <span>Resources Recovered</span>
          </div>

          <div className="hero-scroll">
            <span>SCROLL TO EXPLORE</span>
            <div className="scroll-line"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
