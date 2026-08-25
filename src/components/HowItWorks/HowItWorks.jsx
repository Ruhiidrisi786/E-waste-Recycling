import { useLayoutEffect, useRef } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Box,
  Factory,
  Recycle,
  Truck,
  Cpu,
} from "lucide-react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./HowItWorks.css";

gsap.registerPlugin(ScrollTrigger);

const processSteps = [
  {
    number: "01",
    label: "COLLECTION",
    title: "Responsible Collection",
    description:
      "E-waste is collected responsibly from homes, businesses and authorized collection points.",
    icon: Box,
  },
  {
    number: "02",
    label: "SORTING",
    title: "Careful Sorting",
    description:
      "Devices are separated into material and component categories for safe handling.",
    icon: Recycle,
  },
  {
    number: "03",
    label: "TRANSPORT",
    title: "Safe Transportation",
    description:
      "Sorted e-waste is securely transported to our recycling facility.",
    icon: Truck,
  },
  {
    number: "04",
    label: "PROCESSING",
    title: "Advanced Recycling",
    description:
      "Specialized processes recover valuable materials through responsible recycling.",
    icon: Factory,
  },
  {
    number: "05",
    label: "NEW RESOURCES",
    title: "Resource Recovery",
    description:
      "Recovered materials return to the production cycle instead of becoming waste.",
    icon: Cpu,
  },
];

function HowItWorks() {
  const sectionRef = useRef(null);
  const sceneRef = useRef(null);
  const progressRef = useRef(null);
  const cardsRef = useRef([]);
  const dotsRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current;
      const dots = dotsRef.current;

      /* ===============================
         INITIAL STATES
      =============================== */

      gsap.set(cards, {
        opacity: 0.35,
        y: 35,
        scale: 0.97,
      });

      gsap.set(dots, {
        scale: 0.75,
        opacity: 0.45,
      });

      gsap.set(sceneRef.current, {
        y: 20,
        scale: 0.96,
      });

      /* ===============================
         MAIN SCROLL TIMELINE
      =============================== */

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=2400",
          scrub: 1.2,
          pin: true,
          anticipatePin: 1,
        },
      });

      /* Scene movement */

      timeline.to(
        sceneRef.current,
        {
          y: -25,
          scale: 1,
          duration: 1,
          ease: "none",
        },
        0,
      );

      /* Progress line */

      timeline.to(
        progressRef.current,
        {
          height: "100%",
          duration: 5,
          ease: "none",
        },
        0,
      );

      /* Each step */

      cards.forEach((card, index) => {
        const dot = dots[index];

        timeline
          .to(
            card,
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.6,
              ease: "power2.out",
            },
            index * 1,
          )
          .to(
            dot,
            {
              scale: 1.2,
              opacity: 1,
              duration: 0.25,
              ease: "power2.out",
            },
            index * 1,
          )
          .to(
            dot,
            {
              scale: 1,
              duration: 0.3,
            },
            index * 1 + 0.25,
          );
      });

      /* Floating scene */

      gsap.to(".how-floating-device", {
        y: -15,
        rotate: 4,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".how-floating-leaf", {
        y: -10,
        rotate: 8,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="how-section" id="how-it-works">
      <div className="how-background-grid" />

      <div className="container how-container">
        {/* ===============================
            HEADER
        =============================== */}

        <div className="how-header">
          <div className="how-eyebrow">
            <span className="how-eyebrow-dot" />
            HOW IT WORKS
          </div>

          <div className="how-heading-row">
            <h2>
              From old electronics <span>to new possibilities.</span>
            </h2>

            <p>
              Every device has a story beyond its first life. Our process helps
              recover useful resources while reducing the impact of electronic
              waste.
            </p>
          </div>
        </div>

        {/* ===============================
            STORY
        =============================== */}

        <div className="process-story">
          {/* LEFT VISUAL */}

          <div ref={sceneRef} className="how-scene">
            <div className="how-scene-glow" />

            <img
              src="/images/how-it-works-scene.png"
              alt="Binbay Recycling team collecting electronic waste"
              className="how-scene-image"
            />

            <div className="how-floating-device">♻</div>

            <div className="how-floating-leaf">✦</div>
          </div>

          {/* ===============================
              TIMELINE
          =============================== */}

          <div className="process-timeline">
            <div className="timeline-track">
              <div ref={progressRef} className="timeline-progress" />
            </div>

            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  ref={(element) => {
                    cardsRef.current[index] = element;
                  }}
                  className="process-item"
                >
                  <div
                    ref={(element) => {
                      dotsRef.current[index] = element;
                    }}
                    className="timeline-dot"
                  >
                    <span />
                  </div>

                  <div className="process-number">{step.number}</div>

                  <div className="process-icon">
                    <Icon size={21} strokeWidth={1.7} />
                  </div>

                  <div className="process-content">
                    <span className="process-small">{step.label}</span>

                    <h3>{step.title}</h3>

                    <p>{step.description}</p>
                  </div>

                  <ArrowUpRight className="process-arrow" size={19} />
                </article>
              );
            })}
          </div>
        </div>

        {/* ===============================
            BOTTOM CTA
        =============================== */}

        <div className="how-bottom">
          <div className="how-bottom-text">
            <span>THE CIRCULAR JOURNEY</span>

            <strong>Waste doesn't have to be the end.</strong>
          </div>

          <a href="#contact" className="how-cta">
            Start Recycling
            <ArrowUpRight size={17} />
          </a>
        </div>

        <div className="how-scroll-hint">
          <ArrowDown size={15} />
          KEEP EXPLORING
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
