import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  motion,
  useScroll,
  useAnimation,
  useTransform,
  useInView,
  AnimatePresence,
} from "framer-motion";

import {
  FiGlobe,
  FiSmartphone,
  FiTrendingUp,
  FiLayout,
  FiCloud,
  FiCpu,
  FiArrowRight,
} from "react-icons/fi";

import bu from "../Assets/bu.jpg";
import sc from "../Assets/sc.png";
import v from "../Assets/v.jpeg";
import se1 from "../Assets/se1.png";
import se2 from "../Assets/se2.png";
import se3 from "../Assets/se3.jpeg";
import se4 from "../Assets/se4.png";
import mr from "../Assets/mr.png";
import js from "../Assets/js.jpeg";
import al from "../Assets/al.png";
import o1 from "../Assets/o1.png";

const COLORS = {
  bg: "#07090f",
  surface: "#0d1117",
  card: "#111827",
  accent: "#ef4444",
  accentAlt: "#ef4444",
  cyan: "#22d3ee",
  text: "#f1f5f9",
  muted: "#64748b",
  border: "#1e293b",
};

/* ─── Utility: stagger fade-up variants ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
};

/* ─── Noise texture overlay ─── */
const NoiseBg = () => (
  <svg
    style={{
      position: "fixed",
      inset: 0,
      width: "100%",
      height: "100%",
      opacity: 0.035,
      pointerEvents: "none",
      zIndex: 999,
    }}>
    <filter id="noise">
      <feTurbulence
        type="fractalNoise"
        baseFrequency="0.65"
        numOctaves="3"
        stitchTiles="stitch"
      />
      <feColorMatrix type="saturate" values="0" />
    </filter>
    <rect width="100%" height="100%" filter="url(#noise)" />
  </svg>
);

/* ─── Animated counter ─── */
function Counter({ to, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(to / 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= to) {
        setCount(to);
        clearInterval(timer);
      } else setCount(start);
    }, 20);
    return () => clearInterval(timer);
  }, [inView, to]);
  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

/* ─── Floating orb background ─── */
function FloatingOrb({ style }) {
  return (
    <motion.div
      style={{
        position: "absolute",
        borderRadius: "50%",
        filter: "blur(80px)",
        pointerEvents: "none",
        ...style,
      }}
      // animate={{ y: [0, -30, 0], scale: [1, 1.08, 1] }}
      // transition={{ duration: 8 + Math.random() * 4, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

/* ─── Hero ─── */
function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  // GSAP text split animation via inline approach
  const titleRef = useRef(null);
  useEffect(() => {
    if (!titleRef.current) return;
    // We'll handle purely with Framer Motion here since GSAP requires CDN
  }, []);

  const words = [
    "Professional",
    "Digital",
    "Marketing",
    "That",
    "Drives",
    "Growth",
  ];

  return (
    <section
      ref={ref}
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `url(${o1})`,
        backgroundSize: "cover",
        position: "relative",
        overflow: "hidden",
        padding: "0 5%",
      }}>
      <motion.div
        animate={{ scale: [1, 2, 1], opacity: [0, 0.18, 0.8] }}
        transition={{ duration: 5, repeat: Infinity }}
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${o1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          pointerEvents: "none",
          overflow: "hidden",
        }}
      />

      <motion.div
        style={{
          y,
          opacity,
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          maxWidth: 900,
        }}>
        <h1 ref={titleRef} style={{ margin: "0 0 24px", lineHeight: 1.05 }}>
          {words.map((word, i) => (
            <motion.span
              key={word}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              style={{
                display: "inline-block",
                marginRight: "0.35em",
                fontFamily: "Space Grotesk",
                fontSize: "clamp(52px, 8vw, 70px)",
                color: i === 1 || i === 2 ? COLORS.accent : COLORS.text,
                letterSpacing: 2,
              }}>
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          variants={fadeUp}
          custom={7}
          initial="hidden"
          animate="visible"
          style={{
            color: COLORS.muted,
            fontSize: 18,
            fontFamily: "Space Grotesk",
            lineHeight: 1.7,
            maxWidth: 640,
            margin: "0 auto 48px",
          }}>
          CodeXConquer delivers data-driven marketing strategies that increase
          visibility, generate qualified leads, and maximize ROI for businesses
          of all sizes.
        </motion.p>

        <motion.div
          variants={fadeUp}
          custom={8}
          initial="hidden"
          animate="visible"
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
            flexWrap: "wrap",
          }}>
          <motion.a
            href="https://codexconquer.com/contactus/"
            whileHover={{
              scale: 1.05,
              boxShadow: `0 0 40px ${COLORS.accent}55`,
            }}
            whileTap={{ scale: 0.97 }}
            style={{
              background: `linear-gradient(135deg, ${COLORS.accent}, #ef4444)`,
              border: "none",
              borderRadius: 12,
              padding: "16px 36px",
              color: "#fff",
              fontFamily: "Space Grotesk",
              fontWeight: 700,
              fontSize: 15,
              cursor: "pointer",
              letterSpacing: 1,
              textDecoration: "none",
            }}>
            Request a Demo →
          </motion.a>
          <motion.button
            whileHover={{
              scale: 1.05,
              borderColor: COLORS.accent,
              color: "#ef4444",
            }}
            whileTap={{ scale: 0.97 }}
            style={{
              background: "transparent",
              border: `1px solid ${COLORS.border}`,
              borderRadius: 12,
              padding: "16px 36px",
              color: COLORS.text,
              fontFamily: "Space Grotesk",
              fontWeight: 600,
              fontSize: 15,
              cursor: "pointer",
              transition: "all 0.25s",
            }}>
            View Portfolio
          </motion.button>
        </motion.div>

        {/* stats strip */}
        <motion.div
          variants={fadeUp}
          custom={9}
          initial="hidden"
          animate="visible"
          style={{
            display: "flex",
            gap: 48,
            justifyContent: "center",
            marginTop: 25,
            flexWrap: "wrap",
          }}>
          {[
            { val: 500, suffix: "+", label: "Projects Delivered" },
            { val: 240, suffix: "%", label: "Avg. Lead Growth" },
            { val: 30, suffix: "+", label: "Happy Clients" },
          ].map(({ val, suffix, label }) => (
            <div key={label} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontFamily: "Space Grotesk",
                  fontSize: 48,
                  color: "#fff",
                  letterSpacing: 2,
                }}>
                <Counter to={val} suffix={suffix} />
              </div>
              <div
                style={{
                  color: COLORS.muted,
                  fontSize: 13,
                  fontFamily: "Space Grotesk",
                  letterSpacing: 1,
                  textTransform: "uppercase",
                }}>
                {label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ─── Services ─── */
const services = [
  {
    num: "01",
    icon: <FiSmartphone size={50} />,
    title: "Social Media Marketing",
    desc: "Build engagement, trust, and authority across all major platforms with comprehensive social media management.",
    tags: [
      "Content Creation",
      "Community Management",
      "Influencer Collabs",
      "Analytics",
    ],
    color: COLORS.accent,
    link: "https://codexconquer.com/digital-marketing/",
  },
  {
    num: "02",
    icon: <FiLayout size={50} />,
    title: "Paid Advertising",
    desc: "Maximize ROI with targeted campaigns on Google, Facebook, Instagram, LinkedIn reaching your ideal customers.",
    tags: [
      "Campaign Strategy",
      "Audience Targeting",
      "A/B Testing",
      "Conversion Tracking",
    ],
    color: COLORS.cyan,
    link: "https://codexconquer.com/digital-marketing/",
  },
  {
    num: "03",
    icon: <FiTrendingUp size={50} />,
    title: "SEO & Content Marketing",
    desc: "Dominate search rankings with holistic SEO strategies and compelling content that converts.",
    tags: [
      "Keyword Research",
      "On-Page SEO",
      "Content Creation",
      "Link Building",
    ],
    color: "#a78bfa",
    link: "https://codexconquer.com/digital-marketing/",
  },
];

function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="services"
      ref={ref}
      style={{
        padding: "120px 5%",
        position: "relative",
        overflow: "hidden",
      }}>
      <FloatingOrb
        style={{
          width: 500,
          height: 500,
          top: 0,
          right: -200,
          background: `radial-gradient(circle, ${COLORS.cyan}18, transparent 70%)`,
          overflow: "hidden",
        }}
      />

      <motion.div
        variants={fadeUp}
        custom={0}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        style={{
          textAlign: "center",
          marginBottom: 80,
        }}>
        <span
          style={{
            color: COLORS.accent,
            fontFamily: "Space Grotesk",
            fontSize: "1rem",
            letterSpacing: 4,
            textTransform: "uppercase",
          }}>
          SERVICES
        </span>

        <h2
          style={{
            fontFamily: "Space Grotesk",
            fontSize: "clamp(40px, 5vw, 64px)",
            color: COLORS.text,
            margin: "16px 0 0",
            letterSpacing: 2,
          }}>
          Our Digital Marketing Services
        </h2>

        <p
          style={{
            color: COLORS.muted,
            maxWidth: 520,
            margin: "16px auto 0",
            fontFamily: "Space Grotesk",
            lineHeight: 1.7,
          }}>
          Comprehensive solutions designed to increase visibility, generate
          qualified leads, and maximize ROI.
        </p>
      </motion.div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 24,
          maxWidth: 1200,
          margin: "0 auto",
        }}>
        {services.map((s, i) => (
          <motion.a
            href={s.link}
            key={s.num}
            custom={i + 1}
            variants={scaleIn}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            whileHover={{ y: -8, boxShadow: `0 32px 64px ${s.color}22` }}
            style={{
              background: COLORS.card,
              border: `1px solid ${COLORS.border}`,
              borderRadius: 20,
              padding: 36,
              cursor: "pointer",
              transition: "box-shadow 0.3s",
              position: "relative",
              overflow: "hidden",
              textDecoration: "none",
            }}>
            {/* top accent line */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: 3,
                background: `linear-gradient(90deg, ${s.color}, transparent)`,
              }}
            />

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: 20,
              }}>
              <span style={{ fontSize: 40 }}>{s.icon}</span>
              <span
                style={{
                  fontFamily: "Space Grotesk",
                  fontSize: 64,
                  color: s.color,
                  opacity: 0.15,
                  lineHeight: 1,
                }}>
                {s.num}
              </span>
            </div>

            <h3
              style={{
                fontFamily: "Space Grotesk",
                fontWeight: 700,
                fontSize: 22,
                color: COLORS.text,
                margin: "0 0 12px",
              }}>
              {s.title}
            </h3>

            <p
              style={{
                color: COLORS.muted,
                fontSize: 14,
                lineHeight: 1.7,
                margin: "0 0 24px",
                fontFamily: "Space Grotesk",
              }}>
              {s.desc}
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 8,
              }}>
              {s.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    background: `${s.color}15`,
                    border: `1px solid ${s.color}30`,
                    borderRadius: 100,
                    padding: "4px 12px",
                    fontSize: 11,
                    color: s.color,
                    fontFamily: "Space Grotesk",
                    letterSpacing: 0.5,
                  }}>
                  {tag}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

/* ─── Process ─── */
const steps = [
  {
    n: "01",
    title: "Discovery & Analysis",
    desc: "In-depth analysis of your business, competitors, and target audience to uncover opportunities.",
    icon: <FiGlobe size={32} />,
  },
  {
    n: "02",
    title: "Strategy Development",
    desc: "Customized digital marketing strategy tailored to your specific goals and budget.",
    icon: <FiLayout size={32} />,
  },
  {
    n: "03",
    title: "Implementation",
    desc: "Our expert team executes the strategy across all selected channels and platforms.",
    icon: "⚙️",
  },
  {
    n: "04",
    title: "Optimize & Report",
    desc: "Continuous optimization and transparent performance reports with clear ROI metrics.",
    icon: <FiCpu size={32} />,
  },
];

function Process() {
  const [cur, setCur] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = (idx) => setCur((idx + steps.length) % steps.length);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setCur((c) => (c + 1) % steps.length), 2800);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <section
      id="process"
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "120px 5%",
        background: COLORS.surface,
        fontFamily: "Space Grotesk",
        minHeight: "900px",
      }}>
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          marginBottom: 80,
          flexWrap: "wrap",
          gap: 12,
        }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <span
            style={{
              color: COLORS.accent,
              fontFamily: "Space Grotesk",
              fontSize: "1rem",
              letterSpacing: 4,
              textTransform: "uppercase",
            }}>
            WHY CHOOSE US
          </span>
          <h2
            style={{
              fontFamily: "Space Grotesk",
              fontSize: "clamp(40px, 5vw, 64px)",
              color: COLORS.text,
              margin: "16px 0 0",
              letterSpacing: 2,
              textAlign: "center",
            }}>
            Our Strategic Process
          </h2>
          <p
            style={{
              color: COLORS.muted,
              maxWidth: 520,
              margin: "16px auto 0",
              fontFamily: "Space Grotesk",
              lineHeight: 1.7,
            }}>
            We follow a proven methodology to ensure your digital marketing
            success with clear milestones and measurable results.
          </p>
        </div>
      </div>

      {/* Cards track */}
      <div
        style={{
          maxWidth: 1100,
          height: "clamp(300px, 100vh, 350px)",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          border: `1px solid ${COLORS.accent}22`,
          borderRadius: 16,
          overflow: "hidden",
        }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}>
        {steps.map((step, i) => (
          <div
            key={step.n}
            onClick={() => go(i)}
            style={{
              flex: i === cur ? 2.4 : 1,
              padding: "2rem 1.5rem",
              borderRight:
                i < steps.length - 1 ? `1px solid ${COLORS.accent}22` : "none",
              background: `linear-gradient(135deg, ${COLORS.card}, ${COLORS.accent}11)`,
              position: "relative",
              overflow: "hidden",
              cursor: "pointer",
              transition:
                "flex 0.5s cubic-bezier(.77,0,.18,1), background 0.4s",
              minWidth: 0,
              gap: "50px",
            }}>
            {i === cur && (
              <>
                <style>{`
                  @keyframes pulse-ring {
                    0% { transform: scale(1); opacity: 0.7; }
                    100% { transform: scale(2.2); opacity: 0; }
                  }
                  .pr-dot::after {
                    content: '';
                    position: absolute; 
                    inset: 0; 
                    border-radius: 50%;
                    border: 1.5px solid ${COLORS.accent};
                    animation: pulse-ring 1.2s ease-out infinite;
                    
                  }
                `}</style>
                <div
                  className="pr-dot"
                  style={{
                    position: "absolute",
                    top: "2rem",
                    right: "1.5rem",
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: COLORS.accent,
                  }}
                />
              </>
            )}

            {/* Step number */}
            <div
              style={{
                fontSize: "1rem",
                color: COLORS.accent,
                letterSpacing: 3,
                marginBottom: 20,
              }}>
              STEP {step.n}
            </div>

            {/* Icon */}
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: "50%",
                background: `linear-gradient(135deg, ${COLORS.accent}22, ${COLORS.cyan}22)`,
                border: `2px solid ${i === cur ? COLORS.accent + "88" : COLORS.accent + "33"}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 24,
                marginBottom: 20,
                transform: i === cur ? "scale(1.12)" : "scale(1)",
                transition:
                  "transform 0.35s cubic-bezier(.34,1.56,.64,1), border-color 0.3s, box-shadow 0.3s",
                boxShadow: i === cur ? `0 0 24px ${COLORS.accent}33` : "none",
              }}>
              {step.icon}
            </div>

            {/* Title */}
            <h3
              style={{
                fontFamily: "Space Grotesk",
                fontWeight: 700,
                fontSize: "clamp(1rem, 2vw, 1.2rem)",
                color: COLORS.text,
                margin: "0 0 10px",
                whiteSpace: i === cur ? "normal" : "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                transition: "font-size 0.3s",
              }}>
              {step.title}
            </h3>

            {/* Description */}
            <p
              style={{
                color: COLORS.muted,
                fontFamily: "Space Grotesk",
                fontSize: "clamp(13px, 2vw, 14px)",
                lineHeight: 1.7,
                margin: 0,
                maxHeight: i === cur ? 200 : 0,
                overflow: "hidden",
                opacity: i === cur ? 1 : 0,
                transition:
                  "max-height 0.45s cubic-bezier(.77,0,.18,1), opacity 0.3s 0.1s",
              }}>
              {step.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Progress bar */}
      <div
        style={{
          maxWidth: 1100,
          margin: "1.5rem auto 0",
          display: "flex",
          gap: 6,
        }}>
        {steps.map((_, i) => (
          <div
            key={i}
            style={{
              height: 3,
              borderRadius: 2,
              flex: i === cur ? 2.4 : 1,
              background:
                i <= cur
                  ? `linear-gradient(90deg, ${COLORS.accent}, ${COLORS.cyan})`
                  : `${COLORS.accent}22`,
              transition:
                "background 0.4s, flex 0.5s cubic-bezier(.77,0,.18,1)",
            }}
          />
        ))}
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "25px",
          maxWidth: 1100,
          margin: "1rem auto 0",
          fontSize: 12,
          color: COLORS.muted,
          letterSpacing: 2,
        }}>
        CLICK A STEP OR USE ARROWS
        {/* Arrow nav */}
        <div style={{ display: "flex", gap: 5 }}>
          {["←", "→"].map((arrow, ai) => (
            <button
              key={arrow}
              onClick={() => go(cur + (ai === 0 ? -1 : 1))}
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                border: `1px solid ${COLORS.accent}44`,
                background: "transparent",
                color: COLORS.text,
                fontSize: 16,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "border-color 0.2s, background 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = COLORS.accent;
                e.currentTarget.style.background = `${COLORS.accent}22`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = `${COLORS.accent}44`;
                e.currentTarget.style.background = "transparent";
              }}>
              {arrow}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Best Services ─── */

function Bestservices() {
  // Refs for GSAP animations
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  // Framer Motion controls for staggered children
  const controls = useAnimation();

  // Check if section is in view for Framer Motion
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  // Setup GSAP animations on mount
  useEffect(() => {
    // Animate the cards on scroll with GSAP
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 60, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          delay: index * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "bottom 60%",
            toggleActions: "play none none reverse",
          },
        },
      );
    });

    // Parallax effect on background circles
    const circles = gsap.utils.toArray(".bg-circle");
    circles.forEach((circle) => {
      gsap.to(circle, {
        y: -50,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    return () => {
      // Cleanup ScrollTrigger
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Start Framer Motion animation when section comes into view
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // Service data
  const services = [
    {
      id: 1,
      icon: <FiGlobe size={32} />,
      title: "Web Development",
      description:
        "Custom websites and web applications built with cutting-edge frameworks for maximum performance.",
      gradient: "linear-gradient(135deg, #3b82f6, #06b6d4)",
    },
    {
      id: 2,
      icon: <FiSmartphone size={32} />,
      title: "Mobile Apps",
      description:
        "Native and cross-platform mobile solutions that deliver seamless user experiences on iOS and Android.",
      gradient: "linear-gradient(135deg, #a855f7, #ec489a)",
    },
    {
      id: 3,
      icon: <FiTrendingUp size={32} />,
      title: "Digital Marketing",
      description:
        "Data-driven marketing strategies that boost visibility, engagement, and conversion rates.",
      gradient: "linear-gradient(135deg, #f97316, #ef4444)",
    },
    {
      id: 4,
      icon: <FiLayout size={32} />,
      title: "UX/UI Design",
      description:
        "User-centric designs that combine aesthetics with functionality for intuitive interfaces.",
      gradient: "linear-gradient(135deg, #22c55e, #10b981)",
    },
    {
      id: 5,
      icon: <FiCloud size={32} />,
      title: "3D Animation",
      description:
        "Scalable 3D animation solutions designed to deliver high-quality visuals with smooth performance and efficient rendering",
      gradient: "linear-gradient(135deg, #0ea5e9, #6366f1)",
    },
    {
      id: 6,
      icon: <FiCpu size={32} />,
      title: "Branding & Art",
      description:
        "Branding & Art focuses on creating a strong visual identity through creative design, storytelling, and impactful visuals that connect with the audience.",
      gradient: "linear-gradient(135deg, #8b5cf6, #d946ef)",
    },
  ];

  // Variants for Framer Motion container and children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const idRef = useRef(null);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    const animateCounter = (setCount, end) => {
      let start = 0;
      const duration = 2000;
      const incrementTime = duration / end;

      const timer = setInterval(() => {
        start += 1;
        setCount(start);

        if (start >= end) {
          clearInterval(timer);
        }
      }, incrementTime);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateCounter(setCount1, 500);
          animateCounter(setCount2, 30);

          observer.disconnect(); // run only once
        }
      },
      { threshold: 0.5 },
    );

    if (idRef.current) {
      observer.observe(idRef.current);
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        padding: "96px 24px",
        backgroundColor: "#000000",
        overflow: "hidden",
      }}>
      {/* Inline styles for animations and media queries */}
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes pulse {
            0%, 100% {
              opacity: 0.2;
              transform: scale(1);
            }
            50% {
              opacity: 0.3;
              transform: scale(1.05);
            }
          }
          .bg-circle {
            position: absolute;
            border-radius: 50%;
            filter: blur(80px);
            opacity: 0.2;
          }
          @media (max-width: 768px) {
            .services-grid {
              grid-template-columns: 1fr !important;
              gap: 24px !important;
            }
          }
          @media (min-width: 769px) and (max-width: 1024px) {
            .services-grid {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }
          .service-card {
            transition: all 0.3s ease;
          }
          .service-card:hover {
            transform: translateY(-8px) scale(1.02);
            background: rgba(255, 255, 255, 0.1);
            border-color: rgba(255, 255, 255, 0.3);
            box-shadow: 0 20px 40px -12px rgba(139, 92, 246, 0.2);
          }
          .gradient-text {
            background: linear-gradient(135deg, #c084fc, #f472b6, #60a5fa);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
          }
        `}
      </style>

      {/* Decorative background elements */}
      <div
        className="bg-circle"
        style={{
          top: "-80px",
          left: "-80px",
          width: "320px",
          height: "320px",
          background: "#9333ea",
        }}
      />
      <div
        className="bg-circle"
        style={{
          bottom: "-80px",
          right: "-80px",
          width: "320px",
          height: "320px",
          background: "#3b82f6",
        }}
      />
      <div
        className="bg-circle"
        style={{
          top: "50%",
          left: "50%",
          width: "480px",
          height: "480px",
          background: "#4f46e5",
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Grid pattern overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='rgba(255,255,255,0.03)' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 16px",
        }}>
        {/* Section Header with Framer Motion */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          style={{ textAlign: "center", marginBottom: "64px" }}>
          <motion.div
            variants={itemVariants}
            style={{
              display: "inline-flex",
              alignItems: "center",
              marginBottom: "24px",
              fontFamily: "Space Grotesk",
              fontSize: "1rem",
              letterSpacing: 4,
              color: "#ef4444",
            }}>
            BEST SERVICES
          </motion.div>

          <motion.h2
            variants={itemVariants}
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: "bold",
              color: "white",
              marginBottom: "24px",
              lineHeight: 1.2,
              fontFamily: "Space Grotesk",
            }}>
            Delivering smart
            <span
              style={{
                display: "block",
                marginTop: "8px",
                fontFamily: "Space Grotesk",
              }}>
              Digital Solutions That Drive Results
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            style={{
              fontFamily: "Space Grotesk",
              margin: "0 auto",
              lineHeight: 1.6,
              color: COLORS.muted,
              maxWidth: 520,
            }}>
            Transform your business with our cutting-edge technology and
            creative expertise. We combine innovation with strategy to deliver
            measurable outcomes.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div
          className="services-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "32px",
          }}>
          {services.map((service, idx) => (
            <div
              key={service.id}
              ref={(el) => (cardsRef.current[idx] = el)}
              className="service-card"
              style={{
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(8px)",
                borderRadius: "16px",
                padding: "32px",
                border: "1px solid rgba(255,255,255,0.1)",
                transition: "all 0.3s ease",
                cursor: "pointer",
                position: "relative",
              }}>
              {/* Icon container */}
              <div
                style={{
                  background: service.gradient,
                  borderRadius: "12px",
                  padding: "2px",
                  display: "inline-flex",
                  marginBottom: "24px",
                }}>
                <div
                  style={{
                    background: "#000",
                    borderRadius: "10px",
                    padding: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                  <div style={{ color: "white" }}>{service.icon}</div>
                </div>
              </div>

              <h3
                style={{
                  fontFamily: "Space Grotesk",
                  fontSize: "clamp(1rem, 2vw, 1.2rem)",
                  fontWeight: 600,
                  color: "white",
                  marginBottom: "12px",
                  transition: "all 0.3s ease",
                }}
                className="service-card-title">
                {service.title}
              </h3>
              <p
                style={{
                  fontFamily: "Space Grotesk",
                  fontSize: "clamp(13px, 2vw, 14px)",
                  color: "#9ca3af",
                  lineHeight: 1.6,
                  marginBottom: "24px",
                }}>
                {service.description}
              </p>

              <a
                href="https://themexriver.com/wp/haptic-wp/service/single-service/"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  color: "#9ca3af",
                  textDecoration: "none",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#c084fc";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#9ca3af";
                }}>
                Learn more
                <FiArrowRight
                  size={16}
                  style={{ transition: "transform 0.3s ease" }}
                />
              </a>

              {/* Hover gradient border effect */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "16px",
                  background: `linear-gradient(135deg, rgba(139,92,246,0), rgba(236,72,153,0), rgba(59,130,246,0))`,
                  transition: "all 0.5s ease",
                  pointerEvents: "none",
                }}
                className="card-glow"
              />
            </div>
          ))}
        </div>

        <div
          ref={idRef}
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            padding: "clamp(20px, 5vw, 100px)",
            minHeight: "clamp(300px, 50vh, 400px)",
            width: "100%",
            marginTop: "clamp(30px, 6vw, 70px)",
            background: "rgba(255,255,255,0.07)",
            backdropFilter: "blur(8px)",
            borderRadius: "clamp(12px, 2vw, 20px)",
            border: "1px solid rgba(255,255,255,0.1)",
            gap: "clamp(40px, 4vw, 40px)",
          }}>
          {/* LEFT */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "clamp(250px, 30vw, 300px)",
              gap: "clamp(10px, 2vw, 20px)",
            }}>
            {/* BOX 1 */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "clamp(20px, 5vw, 50px)",
              }}>
              <div
                style={{
                  height: "clamp(80px, 10vw, 120px)",
                  width: "clamp(70px, 9vw, 108px)",
                  backgroundImage: `url(${se1})`,
                  backgroundSize: "cover",
                }}
              />
              <div>
                <h3
                  style={{
                    fontSize: "clamp(1.2rem, 2vw, 2rem)",
                    fontWeight: "bold",
                  }}>
                  {count1} +
                </h3>
                <p
                  style={{
                    fontSize: "clamp(0.8rem, 1vw, 1rem)",
                    fontFamily: "Space Grotesk",
                  }}>
                  Sold
                </p>
              </div>
            </div>

            <div
              style={{
                height: "1px",
                width: "100%",
                backgroundColor: "#fff",
              }}
            />

            {/* BOX 2 */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "clamp(20px, 5vw, 50px)",
              }}>
              <div
                style={{
                  height: "clamp(80px, 10vw, 128px)",
                  width: "clamp(70px, 7vw, 108px)",
                  backgroundImage: `url(${se2})`,
                  backgroundSize: "cover",
                }}
              />
              <div>
                <h3
                  style={{
                    fontSize: "clamp(1.2rem, 2vw, 2rem)",
                    fontWeight: "bold",
                  }}>
                  {count2} +
                </h3>
                <p
                  style={{
                    fontSize: "clamp(0.8rem, 1vw, 1rem)",
                    fontFamily: "Space Grotesk",
                  }}>
                  Clients
                </p>
              </div>
            </div>
          </div>

          {/* CENTER */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "clamp(250px, 30vw, 300px)",
              gap: "clamp(15px, 2vw, 25px)",
              justifyContent: "center",
            }}>
            <p
              style={{
                fontSize: "clamp(1.2rem, 3vw, 2.2rem)",
                fontFamily: "Space Grotesk",
              }}>
              Your Digital{" "}
              <span style={{ fontWeight: "bold", color: "#fff" }}>
                Business Growth
              </span>{" "}
              Partner
            </p>

            <motion.a
              href="https://codexconquer.com/contactus/"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              style={{
                width: "clamp(120px, 50%, 180px)",
                padding: "clamp(10px, 1.5vw, 14px) 0",
                borderRadius: "clamp(6px, 1vw, 10px)",
                color: "#fff",
                fontFamily: "Space Grotesk",
                fontWeight: 700,
                fontSize: "clamp(12px, 1vw, 14px)",
                cursor: "pointer",
                letterSpacing: 1,
                background: "#ef4444",
                textDecoration: "none",
                textAlign: "center",
              }}>
              Hire me →
            </motion.a>
          </div>

          {/* RIGHT */}
          <div
            style={{
              display: "flex",
              height: "clamp(200px, 30vw, 300px)",
              width: "clamp(200px, 30vw, 300px)",
              borderRadius: "50%",
              backgroundImage: `url(${se3})`,
              backgroundSize: "cover",
              position: "relative",
            }}>
            <div
              style={{
                position: "absolute",
                height: "clamp(120px, 20vw, 200px)",
                width: "clamp(120px, 20vw, 200px)",
                borderRadius: "50%",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                background: "#fff",
                opacity: 0.8,
              }}>
              <a
                href="https://www.youtube.com/watch?v=Nv7RgGpu6ME"
                style={{
                  position: "absolute",
                  height: "clamp(80px, 15vw, 150px)",
                  width: "clamp(80px, 15vw, 150px)",
                  borderRadius: "50%",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  backgroundImage: `url(${se4})`,
                  backgroundSize: "cover",
                  cursor: "pointer",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Portfolio ─── */
const portfolio = [
  {
    title: "Services Cellplus",
    category: "Google Ads",
    image: `${sc}`,
    color: "#f97316",
    link: "https://servicescellplus.ca/",
  },
  {
    title: "Visa Direct",
    category: "Social Media Marketing",
    image: `${v}`,
    color: "#22d3ee",
    link: "https://visadirect.lk/",
  },
  {
    title: "EL-Broasteria",
    category: "Social Media Marketing",
    image: `${bu}`,
    color: "#a78bfa",
    link: "https://elbroasteria.com/",
  },
];

function Portfolio() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="portfolio" ref={ref} style={{ padding: "120px 5%" }}>
      <motion.div
        variants={fadeUp}
        custom={0}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        style={{ textAlign: "center", marginBottom: 80 }}>
        <span
          style={{
            color: COLORS.accent,
            fontFamily: "Space Grotesk",
            fontSize: "1rem",
            letterSpacing: 4,
            textTransform: "uppercase",
          }}>
          PORTFOLIO
        </span>

        <h2
          style={{
            fontFamily: "Space Grotesk",
            fontSize: "clamp(40px, 5vw, 64px)",
            color: COLORS.text,
            margin: "16px 0 0",
            letterSpacing: 2,
          }}>
          Our Awesome Portfolio
        </h2>
      </motion.div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 24,
          maxWidth: 1100,
          margin: "0 auto",
        }}>
        {portfolio.map((item, i) => (
          <motion.div
            key={item.title}
            custom={i}
            variants={scaleIn}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            whileHover={{ y: -10, scale: 1.02 }}
            style={{
              background: COLORS.card,
              border: `1px solid ${COLORS.border}`,
              borderRadius: 20,
              overflow: "hidden",
              cursor: "pointer",
            }}>
            <div
              style={{
                height: 200,
                background: `linear-gradient(135deg, ${item.color}22, ${COLORS.bg})`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 80,
                position: "relative",
              }}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                onClick={() => window.open(item.link, "_blank")}
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: "cover",
                }}
              />
            </div>

            <div style={{ padding: 24 }}>
              <span
                onClick={() => window.open(item.link, "_blank")}
                style={{
                  background: `${item.color}22`,
                  border: `1px solid ${item.color}44`,
                  borderRadius: 100,
                  padding: "3px 12px",
                  fontSize: 11,
                  color: item.color,
                  fontFamily: "Space Grotesk",
                }}>
                {item.category}
              </span>
              <h3
                onClick={() => window.open(item.link, "_blank")}
                style={{
                  fontFamily: "Space Grotesk",
                  fontWeight: 700,
                  fontSize: 20,
                  color: COLORS.text,
                  margin: "12px 0 0",
                }}>
                {item.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ─── Pricing ─── */
const plans = [
  {
    name: "Starter",
    price: "3,499",
    period: "/mo",
    badge: null,
    desc: "Perfect for small businesses and startups",
    features: [
      "2 Social Media Platforms",
      "12 Posts Per Month",
      "Basic Ad Campaign Setup",
      "Monthly Performance Report",
      "24/7 Call Support",
    ],
    color: COLORS.muted,
    link: "https://codexconquer.com/contactus/",
  },
  {
    name: "Growth",
    price: "6,599",
    period: "/mo",
    badge: "POPULAR",
    desc: "Ideal for growing businesses",
    features: [
      "4 Social Media Platforms",
      "15 Posts Per Month",
      "2 Active Ad Campaigns",
      "Weekly Performance Reports",
      "Priority Support",
      "SEO Setup",
    ],
    color: COLORS.accent,
    link: "https://codexconquer.com/contactus/",
  },
  {
    name: "Premium",
    price: "9,999",
    period: "/mo",
    badge: null,
    desc: "For established brands needing maximum impact",
    features: [
      "6 Social Media Platforms",
      "Daily Posts & Content",
      "5 Active Ad Campaigns",
      "Dedicated Account Manager",
      "Advanced SEO & Analytics",
    ],
    color: COLORS.cyan,
    link: "https://codexconquer.com/contactus/",
  },
];

function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="pricing"
      ref={ref}
      style={{
        padding: "120px 5%",
        background: COLORS.surface,
      }}>
      <motion.div
        variants={fadeUp}
        custom={0}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        style={{
          textAlign: "center",
          marginBottom: 80,
        }}>
        <span
          style={{
            color: COLORS.accent,
            fontFamily: "Space Grotesk",
            fontSize: "1rem",
            letterSpacing: 4,
            textTransform: "uppercase",
          }}>
          PRICING
        </span>

        <h2
          style={{
            fontFamily: "Space Grotesk",
            fontSize: "clamp(40px, 5vw, 64px)",
            color: COLORS.text,
            margin: "16px 0 0",
            letterSpacing: 2,
          }}>
          Transparent Pricing Plans
        </h2>

        <p
          style={{
            color: COLORS.muted,
            maxWidth: 480,
            margin: "16px auto 0",
            fontFamily: "Space Grotesk",
            lineHeight: 1.7,
          }}>
          Choose the plan that fits your business. All plans include a dedicated
          account manager.
        </p>
      </motion.div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 24,
          maxWidth: 1100,
          margin: "0 auto",
        }}>
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            custom={i}
            variants={scaleIn}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            whileHover={{ y: -8, boxShadow: `0 32px 64px ${plan.color}22` }}
            style={{
              background: plan.badge
                ? `linear-gradient(145deg, ${COLORS.card}, ${COLORS.accent}11)`
                : COLORS.card,
              border: plan.badge
                ? `1px solid ${COLORS.accent}55`
                : `1px solid ${COLORS.border}`,
              borderRadius: 20,
              padding: 36,
              position: "relative",
              transition: "box-shadow 0.3s",
            }}>
            {plan.badge && (
              <div
                style={{
                  position: "absolute",
                  top: -12,
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: `linear-gradient(135deg, ${COLORS.accent}, #c2410c)`,
                  borderRadius: 100,
                  padding: "4px 16px",
                  fontSize: 10,
                  color: "#fff",
                  fontFamily: "Space Grotesk",
                  fontWeight: 700,
                  letterSpacing: 2,
                }}>
                ✦ {plan.badge}
              </div>
            )}

            <div style={{ marginBottom: 24 }}>
              <h3
                style={{
                  fontFamily: "Space Grotesk",
                  fontSize: 28,
                  color: plan.color,
                  letterSpacing: 2,
                  margin: "0 0 6px",
                }}>
                {plan.name}
              </h3>

              <p
                style={{
                  color: COLORS.muted,
                  fontSize: 13,
                  fontFamily: "Space Grotesk",
                  margin: 0,
                }}>
                {plan.desc}
              </p>
            </div>

            <div style={{ marginBottom: 28 }}>
              <span
                style={{
                  fontFamily: "Space Grotesk",
                  fontSize: 48,
                  color: COLORS.text,
                  letterSpacing: 1,
                }}>
                ₹{plan.price}
              </span>

              <span
                s
                tyle={{
                  color: COLORS.muted,
                  fontSize: 14,
                  fontFamily: "Space Grotesk",
                }}>
                {plan.period}
              </span>
            </div>

            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px" }}>
              {plan.features.map((f) => (
                <li
                  key={f}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    marginBottom: 12,
                    color: COLORS.text,
                    fontSize: 14,
                    fontFamily: "Space Grotesk",
                  }}>
                  <span style={{ color: plan.color, fontSize: 16 }}>✓</span> {f}
                </li>
              ))}
            </ul>

            <motion.a
              href={plan.link}
              whileHover={{
                scale: 1.04,
                boxShadow: `0 0 28px ${plan.color}44`,
              }}
              whileTap={{ scale: 0.97 }}
              style={{
                width: "100%",
                padding: "14px 80px",
                background: plan.badge
                  ? `linear-gradient(135deg, ${COLORS.accent}, #c2410c)`
                  : "transparent",
                border: plan.badge ? "none" : `1px solid ${plan.color}55`,
                borderRadius: 10,
                color: plan.badge ? "#fff" : plan.color,
                fontFamily: "Space Grotesk",
                fontWeight: 700,
                fontSize: 14,
                cursor: "pointer",
                letterSpacing: 1,
                transition: "box-shadow 0.3s",
                textDecoration: "none",
              }}>
              Get Started →
            </motion.a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ─── Testimonials ─── */
const testimonials = [
  {
    name: "Jessica Smith",
    role: "CEO, TechSolutions Inc.",
    quote:
      "CodexConquer transformed our online presence. Our leads increased by 240% in just 3 months! Their data-driven approach delivered exactly what we needed.",
    image: `${js}`,
  },
  {
    name: "Michael Rodriguez",
    role: "Marketing Director, BrandVibe",
    quote:
      "The team delivered exceptional results with our social media campaigns. ROI exceeded expectations and we've seen sustained growth month after month.",
    image: `${mr}`,
  },
  {
    name: "Amanda Lee",
    role: "Founder, EcoLife Products",
    quote:
      "Their strategic approach to digital marketing helped us dominate our niche. Transparency and regular reporting gave us complete confidence.",
    image: `${al}`,
  },
];

function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setActive((p) => (p + 1) % testimonials.length),
      3000,
    );
    return () => clearInterval(t);
  }, []);

  return (
    <section
      ref={ref}
      style={{
        padding: "120px 5%",
        position: "relative",
        minHeight: "800px",
      }}>
      <FloatingOrb
        style={{
          width: 500,
          height: 500,
          bottom: -100,
          left: -150,
          background: `radial-gradient(circle, ${COLORS.accent}18, transparent 70%)`,
        }}
      />

      <motion.div
        variants={fadeUp}
        custom={0}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        style={{
          textAlign: "center",
          marginBottom: 64,
        }}>
        <span
          style={{
            color: COLORS.accent,
            fontFamily: "Space Grotesk",
            fontSize: "1rem",
            letterSpacing: 4,
            textTransform: "uppercase",
          }}>
          TESTIMONIALS
        </span>

        <h2
          style={{
            fontFamily: "Space Grotesk",
            fontSize: "clamp(40px, 5vw, 64px)",
            color: COLORS.text,
            marginTop: "20px",
            letterSpacing: 2,
          }}>
          What Our Clients Say
        </h2>
      </motion.div>

      <div style={{ maxWidth: 750, margin: "0 auto", position: "relative" }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            style={{
              background: COLORS.card,
              border: `1px solid ${COLORS.border}`,
              borderRadius: 24,
              padding: 48,
              textAlign: "center",
            }}>
            <div style={{ fontSize: 48, marginBottom: 5, opacity: 0.4 }}>"</div>

            <p
              style={{
                color: COLORS.text,
                fontSize: "1.2rem",
                lineHeight: 1.7,
                fontFamily: "Space Groteskf",
                margin: "0 0 32px",
                fontStyle: "italic",
              }}>
              {testimonials[active].quote}
            </p>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 14,
              }}>
              <div
                style={{
                  width: 150,
                  height: 150,
                  borderRadius: "50%",
                  backgroundImage: `url(${testimonials[active].image})`,
                  backgroundSize: "cover",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "Space Grotesk",
                  fontWeight: 700,
                }}></div>

              <div style={{ textAlign: "left" }}>
                <div
                  style={{
                    fontFamily: "Space Grotesk",
                    fontWeight: 700,
                    color: COLORS.text,
                    fontSize: 15,
                  }}>
                  {testimonials[active].name}
                </div>

                <div
                  style={{
                    color: COLORS.muted,
                    fontSize: 13,
                    fontFamily: "Space Grotesk",
                  }}>
                  {testimonials[active].role}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 10,
            marginTop: 24,
          }}>
          {testimonials.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => setActive(i)}
              animate={{
                width: i === active ? 28 : 8,
                background: i === active ? COLORS.accent : COLORS.border,
              }}
              style={{
                height: 8,
                borderRadius: 100,
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA ─── */
function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} style={{ padding: "100px" }}>
      <motion.div
        variants={scaleIn}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        style={{
          maxWidth: "100%",
          margin: "0 auto",
          textAlign: "center",
          background: `linear-gradient(135deg, ${COLORS.card}, ${COLORS.accent}11)`,
          border: `1px solid ${COLORS.accent}33`,
          borderRadius: 28,
          padding: "72px 48px",
          position: "relative",
          overflow: "hidden",
        }}>
        <div
          style={{
            position: "absolute",
            top: -80,
            right: -80,
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${COLORS.accent}22, transparent 70%)`,
          }}
        />

        <div
          style={{
            position: "absolute",
            bottom: -60,
            left: -60,
            width: 240,
            height: 240,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${COLORS.cyan}18, transparent 70%)`,
          }}
        />

        <h2
          style={{
            fontFamily: "Space Grotesk",
            fontSize: "clamp(36px, 5vw, 60px)",
            color: COLORS.text,
            margin: "0 0 16px",
            letterSpacing: 2,
            position: "relative",
          }}>
          Looking for a Digital Growth Partner?
        </h2>

        <p
          style={{
            color: COLORS.muted,
            fontSize: 16,
            fontFamily: "Space Grotesk",
            lineHeight: 1.7,
            margin: "0 auto 40px",
            maxWidth: 480,
            position: "relative",
          }}>
          Let's discuss your goals and craft a marketing strategy that delivers
          real, measurable results.
        </p>
        <motion.a
          href="https://codexconquer.com/contactus/"
          whileHover={{ scale: 1.06, boxShadow: `0 0 50px ${COLORS.accent}66` }}
          whileTap={{ scale: 0.97 }}
          style={{
            background: `linear-gradient(135deg, ${COLORS.accent}, #c2410c)`,
            border: "none",
            borderRadius: 12,
            padding: "18px 48px",
            color: "#fff",
            fontFamily: "Space Grotesk",
            fontWeight: 700,
            fontSize: 16,
            cursor: "pointer",
            letterSpacing: 1,
            position: "relative",
            textDecoration: "none",
          }}>
          Get Started Today →
        </motion.a>
      </motion.div>
    </section>
  );
}

/* ─── Root ─── */
export default function DigitalMarketingPage() {
  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; background: ${COLORS.bg}; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: ${COLORS.bg}; }
        ::-webkit-scrollbar-thumb { background: ${COLORS.accent}; border-radius: 3px; }
      `}</style>

      <NoiseBg />
      <div
        style={{
          background: COLORS.bg,
          minHeight: "100vh",
          color: COLORS.text,
        }}>
        <Hero />
        <Services />
        <Process />
        <Bestservices />
        <Portfolio />
        <Pricing />
        <Testimonials />
        <CTA />
      </div>
    </>
  );
}
