import { color, motion, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import star from "../Assets/star.png";

import o1 from "../Assets/o1.png";
import o2 from "../Assets/o2.webp";
import o5 from "../Assets/o5.png";
import o8 from "../Assets/o8.jpeg";
import o9 from "../Assets/o9.jpeg";
import digital from "../Assets/digital.png";
import ve from "../Assets/ve.png";
import web1 from "../Assets/web1.jpg";
import uiux from "../Assets/uiux.png";
import sme from "../Assets/sme.jpeg";

export default function Onlinecourse() {
  gsap.to("#star", {
    rotate: "+=360",
    duration: 7,
    repeat: -1,
    ease: "none",
  });

  const rippleStyle = (delay) => ({
    position: "absolute",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    background: "gray",
    animation: "rippleEffect 3s infinite",
    animationDelay: delay,
  });

  const navTabs = [
    "Digital Marketing",
    "Video Editing",
    "Full Stack Development",
    "Graphics Designing",
    "UIUX Designing",
  ];

  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.2 });
    tl.fromTo(
      titleRef.current,
      { y: 80, opacity: 0, skewY: 4 },
      { y: 0, opacity: 1, skewY: 0, duration: 1.1, ease: "expo.out" },
    ).fromTo(
      subtitleRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, ease: "expo.out" },
      "-=0.7",
    );
  }, []);

  const items = [
    "Digital Marketing",
    "Video Editing",
    "Full Stack Development",
    "UI/UX Design",
    "Graphics Designing",
    "SEO & Analytics",
    "Content Creation",
  ];
  const repeated = [...items, ...items, ...items];

  const courses = [
    {
      id: 1,
      tag: "01 — Marketing",
      title: "Digital Marketing",
      subtitle: "Basic & Advanced",
      desc: "Learn social media marketing, SEO, and analytics to build brand presence and grow online visibility.",
      accent: "#ef4444",
      highlights: [
        { icon: "📣", label: "Social Media Platforms" },
        { icon: "📈", label: "Content & Trends" },
        { icon: "🔍", label: "SEO & Google Ranking" },
        { icon: "📊", label: "Analytics Tools" },
      ],
      link: "https://codexconquer.com/digitalmarketingcourse/",
      backgroundImage: `${digital}`,
    },
    {
      id: 2,
      tag: "02 — Creative",
      title: "Video Editing",
      subtitle: "Professional Course",
      desc: "Master professional video editing tools and workflows for YouTube, Instagram, and Short-form content.",
      accent: "#7c65a9",
      highlights: [
        { icon: "🎬", label: "Editing Software" },
        { icon: "✂️", label: "Editing Skills" },
        { icon: "📱", label: "Platform Based Editing" },
        { icon: "🎞️", label: "Post Production" },
      ],
      link: "https://codexconquer.com/videoeditingcourse/",
      backgroundImage: `${ve}`,
    },
    {
      id: 3,
      tag: "03 — Engineering",
      title: "Full Stack Dev",
      subtitle: "Development Course",
      desc: "Learn to build full web applications from front-end to back-end with industry-ready skills.",
      accent: "#58b580",
      highlights: [
        { icon: "🌐", label: "Frontend (React, HTML/CSS)" },
        { icon: "⚙️", label: "Backend (Node, Express)" },
        { icon: "🗄️", label: "Databases (SQL, MongoDB)" },
        { icon: "🚀", label: "Deployment & DevOps" },
      ],
      link: "https://codexconquer.com/fullstackdevelopmentcourse/",
      backgroundImage: `${web1}`,
    },
    {
      id: 4,
      tag: "04 — Design",
      title: "UI/UX Design",
      subtitle: "Design Course",
      desc: "Craft intuitive and user-centered experiences using modern UI/UX design principles.",
      accent: "#243748",
      highlights: [
        { icon: "🎨", label: "UI Design" },
        { icon: "🧠", label: "UX Principles" },
        { icon: "📐", label: "Wireframing" },
        { icon: "✏️", label: "Prototyping" },
      ],
      link: "https://codexconquer.com/uiuxdesigncourse/",
      backgroundImage: `${uiux}`,
    },
    {
      id: 5,
      tag: "05 — Design",
      title: "Graphics Design",
      subtitle: "Design Course",
      desc: "Create visually engaging graphics using modern design principles.",
      accent: "#145277",
      highlights: [
        { icon: "✨", label: "Visual Design" },
        { icon: "💎", label: "Branding" },
        { icon: "📐", label: "Layout" },
        { icon: "🔤", label: "Typography" },
      ],
      link: "https://codexconquer.com/graphicsdesigncourse/",
      backgroundImage: `${sme}`,
    },
  ];

  const wrapperRef = useRef(null);
  const panelsRef = useRef([]);

  useEffect(() => {
    const panels = panelsRef.current.filter(Boolean);
    if (!panels.length) return;

    gsap.set(panels, { yPercent: 100 });
    gsap.set(panels[0], { yPercent: 0 });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: "top top",
        end: "+=" + panels.length * 100 + "%",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    panels.forEach((panel, i) => {
      if (i !== 0) {
        timeline.to(panel, {
          yPercent: 0,
          duration: 1,
          ease: "power2.out",
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const setPanelRef = (el, index) => {
    panelsRef.current[index] = el;
  };

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  useEffect(() => {
    gsap.fromTo(
      ref.current,
      { opacity: 0, scale: 0.96 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "expo.out",
        scrollTrigger: { trigger: ref.current, start: "top 85%" },
      },
    );
  }, []);

  return (
    <>
      <div className="primary-container">
        <motion.div
          id="content-hero"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "90vh",
            width: "100%",
            gap: "clamp(20px, 8vw, 215px)",
            flexWrap: "wrap",
            backgroundImage: `url(${o1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
            padding: "clamp(1rem, 5vw, 3rem)",
            overflow: "hidden",
          }}>
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0, 0.18, 0.8] }}
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
          {/* left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{
              flex: "1 1 300px",
              maxWidth: "650px",
            }}>
            <div
              style={{
                position: "relative",
                maxWidth: "650px",
              }}>
              <h1
                style={{
                  fontFamily: "Space Grotesk",
                  fontSize: "clamp(1rem, 6vw, 3.5rem)",
                  fontWeight: "700",
                  color: "#fff",
                  lineHeight: "1.2",
                  marginBottom: "20px",
                }}>
                <span
                  style={{
                    color: "#fff",
                    fontSize: "clamp(2rem, 6vw, 4.5rem)",
                    fontStyle: "italic",
                  }}>
                  ONLINE{" "}
                </span>
                <span
                  style={{
                    color: "#ef4444",
                    fontSize: "clamp(2rem, 6vw, 4.5rem)",
                    fontStyle: "italic",
                  }}>
                  COURSES
                </span>
                <br />
                for Skill Growth & Career Success <br />
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                style={{
                  fontFamily: "Space Grotesk",
                  fontSize: "clamp(0.9rem, 3vw, 1.1rem)",
                  color: "#fff",
                  maxWidth: "500px",
                  marginBottom: "30px",
                  lineHeight: "1.6",
                }}>
                We deliver high-quality, industry-relevant courses designed to
                build skills, enhance knowledge, and support career growth
                through practical learning and expert guidance.
              </motion.p>
              <motion.div
                className="hero-btn"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                style={{
                  display: "flex",
                  gap: "55px",
                  flexWrap: "wrap",
                }}>
                <motion.a
                  href="https://codexconquer.com/contactus/"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  style={{
                    padding: "12px 28px",
                    backgroundColor: "#ef4444",
                    color: "#fff",
                    borderRadius: "8px",
                    textDecoration: "none",
                    fontWeight: "600",
                    display: "inline-block",
                    cursor: "pointer",
                  }}>
                  START LEARNING
                </motion.a>

                <motion.div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                  <div
                    style={{
                      position: "relative",
                      width: "50px",
                      height: "50px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}>
                    {/* Play Button */}
                    <motion.a
                      href="#"
                      whileHover={{
                        backgroundColor: "#ef4444",
                        color: "#fff",
                      }}
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        background: "#fff",
                        color: "#ef4444",
                        fontSize: "24px",
                        border: "4px solid #ef4444",
                        cursor: "pointer",
                        zIndex: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        textDecoration: "none",
                      }}>
                      ▶
                    </motion.a>

                    {/* Ripples */}
                    {/* <span style={rippleStyle("0s")}></span> */}
                    <span style={rippleStyle("0.6s")}></span>
                    {/* <span style={rippleStyle("1.2s")}></span> */}

                    {/* Keyframes (must be added manually) */}
                    <style>
                      {`@keyframes rippleEffect {
                        0% {
                        transform: scale(1);
                        opacity: 0.8;
                        }
                        100% {
                        transform: scale(1.5);
                        opacity: 0;
                        }
                    }
                    `}
                    </style>
                  </div>

                  <motion.a
                    href="https://www.youtube.com/watch?v=wcciNQ4TyqQ"
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    style={{
                      padding: "12px 20px",
                      color: "#fff",
                      borderRadius: "8px",
                      textDecoration: "none",
                      fontWeight: "600",
                      display: "inline-block",
                      cursor: "pointer",
                    }}>
                    Watch Video
                  </motion.a>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* hero image */}
          <motion.div
            id="hero-image-container"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            style={{
              flex: "1 1 400px",
              maxWidth: "620px",
              aspectRatio: "620 / 530",
              borderRadius: "0px 0px 0px 0px",
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "relative",
              overflow: "hidden",
              //   borderLeft: "10px solid #ef4444",
            }}>
            <motion.div
              className="hero-image"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              style={{
                width: "calc(79% - 10px)",
                height: "calc(100% - 30px)",
                borderRadius: "0px 0px 0px 0px",
                backgroundImage: `url(${o2})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "absolute",
                overflow: "hidden",
                marginLeft: "40px",
                top: "15px",
              }}
            />
            <div
              style={{
                width: "calc(30% - 10px)",
                height: "calc(20% - 30px)",
                borderRadius: "0px 0px 0px 0px",
                backgroundImage: `url(${o5})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "absolute",
                overflow: "hidden",
                marginLeft: "200px",
                top: "82%",
              }}></div>
          </motion.div>

          {/* star animated (only one) */}
          <motion.div
            className="png"
            style={{
              height: "clamp(60px, 10vw, 100px)",
              width: "clamp(60px, 10vw, 100px)",
              position: "absolute",
              backgroundImage: `url(${star})`,
              backgroundSize: "cover",
              top: "20px",
              right: "20px",
              pointerEvents: "none",
              zIndex: 10,
            }}
            animate={{
              y: [0, -15, 0],
              rotate: [0, 10, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <div
            id="star"
            style={{
              height: "clamp(60px, 10vw, 100px)",
              width: "clamp(60px, 10vw, 100px)",
              position: "absolute",
              backgroundImage: `url(${star})`,
              backgroundSize: "cover",
            }}></div>
        </motion.div>

        {/* Body Content */}
        <section
          style={{
            minHeight: "60vh",
            background:
              "linear-gradient(160deg, #FFFDF7 0%, #F5F0E8 50%, #EDE4D0 100%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "100px 24px 60px",
            position: "relative",
            overflow: "hidden",
          }}>
          {/* Noise texture overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              opacity: 0.035,
              pointerEvents: "none",
            }}
          />

          {/* Decorative grid */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          {/* Floating orbs */}
          {[
            { x: "10%", y: "20%", color: "#FF5C35", size: 300 },
            { x: "75%", y: "60%", color: "#7C5CFC", size: 250 },
            { x: "50%", y: "80%", color: "#00C2B8", size: 200 },
          ].map((orb, i) => (
            <motion.div
              key={i}
              style={{
                position: "absolute",
                left: orb.x,
                top: orb.y,
                width: orb.size,
                height: orb.size,
                borderRadius: "50%",
                background: orb.color,
                filter: "blur(120px)",
                opacity: 0.12,
              }}
              animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.16, 0.1] }}
              transition={{
                duration: 6 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}

          <div
            style={{
              position: "relative",
              zIndex: 2,
              textAlign: "center",
              maxWidth: 800,
            }}>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{
                padding: "6px 18px",
                color: "#ef4444",
                fontSize: "clamp(0.8rem,2vw,1rem)",
                fontFamily: "Space Grotesk",
                letterSpacing: "0.2rem",
                marginBottom: 28,
              }}>
              ONLINE COURSES
            </motion.div>

            <div ref={titleRef} style={{ overflow: "hidden" }}>
              <h1
                style={{
                  fontFamily: "'Clash Display', Space Grotesk",
                  fontSize: "clamp(42px, 7vw, 90px)",
                  fontWeight: 700,
                  color: "#333",
                  lineHeight: 1.0,
                  margin: "0 0 20px",
                  letterSpacing: "-0.03em",
                }}>
                Explore Our
                <br />
                <span
                  style={{
                    WebkitTextStroke: "2px #ef4444",
                    color: "transparent",
                    fontStyle: "italic",
                  }}>
                  Online Courses
                </span>
              </h1>
            </div>

            <p
              ref={subtitleRef}
              style={{
                color: "#333",
                fontSize: "clamp(15px, 2vw, 18px)",
                fontFamily: "Space Grotesk",
                maxWidth: 520,
                margin: "0 auto 40px",
                lineHeight: 1.7,
              }}>
              Learn in-demand skills with structured, industry-relevant programs
              designed by professionals.
            </p>

            {/* Tab Pills */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 10,
                justifyContent: "center",
              }}>
              {navTabs.map((tab, i) => (
                <motion.button
                  key={tab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.01, duration: 0.2 }}
                  whileHover={{ scale: 1.05, background: "#fff" }}
                  whileTap={{ scale: 0.9 }}
                  style={{
                    padding: "8px 20px",
                    borderRadius: 100,
                    border: "1px solid #ef4444",
                    background: "rgba(255,255,255,0.06)",
                    color: "#ef4444",
                    fontSize: 12,
                    fontFamily: "Space Grotesk",
                    cursor: "pointer",
                    letterSpacing: "0.02em",
                  }}>
                  {tab}
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* TICKER*/}
        <div
          style={{
            overflow: "hidden",
            padding: "20px 0",
            background: "#ef4444",
            borderBottom: "1px solid #ef4444",
          }}>
          <motion.div
            animate={{ x: ["0%", "-33.33%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            style={{ display: "flex", gap: 60, whiteSpace: "nowrap" }}>
            {repeated.map((item, i) => (
              <span
                key={i}
                style={{
                  fontFamily: "Space Grotesk",
                  fontSize: 12,
                  letterSpacing: "0.15em",
                  color: "#fff",
                  textTransform: "uppercase",
                  display: "flex",
                  alignItems: "center",
                  gap: 60,
                }}>
                {item}
                <span style={{ color: "#fff", fontSize: 25 }}>◆</span>
              </span>
            ))}
          </motion.div>
        </div>

        {/* Body2 content */}

        <motion.div
          initial="hidden"
          animate="show"
          style={{
            width: "100%",
            fontFamily: "'Space Grotesk', sans-serif",
            padding: "clamp(30px, 5vw, 60px)",
            backgroundSize: "cover",
            position: "relative",
            overflow: "hidden",
          }}>
          {/* Animated radial gradient background (from original) */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse at 50% 50%, #7C5CFC22, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          {/* Heading Section */}
          <motion.p
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "clamp(0.9rem, 3vw, 1.2rem)",
              color: "#ef4444",
              letterSpacing: "0.1rem",
              gap: "10px",
              fontFamily: "'Space Grotesk', sans-serif",
            }}>
            <div
              style={{
                width: "50px",
                height: "1px",
                backgroundColor: "#ef4444",
              }}
            />
            OUR COURSES
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{
              fontSize: "clamp(1.8rem, 5vw, 2.8rem)",
              fontWeight: "bold",
              color: "#333",
              fontFamily: "'Space Grotesk', sans-serif",
            }}>
            Master In-Demand Skills
          </motion.p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              color: "rgba(255,255,255,0.7)",
              marginBottom: "3rem",
            }}>
            <p
              style={{
                fontFamily: "Space Grotesk",
                fontSize: "clamp(1rem, 4vw, 1.2rem)",
                maxWidth: "1000px",
                color: "#333",
              }}>
              Industry-ready programs designed to launch your career in tech,
              creative, and business fields.
            </p>
          </div>

          {/* Panels Container */}
          <div
            ref={wrapperRef}
            style={{
              width: "100%",
              // height: "700px",
              position: "relative",
            }}>
            <div
              style={{
                height: "min(550px, 85vh)",
                width: "100%",
                position: "relative",
                overflow: "hidden",
                marginTop: "2rem",
                borderTopRightRadius: "100px",
                borderBottomLeftRadius: "100px",
              }}>
              {courses.map((course, idx) => (
                <div
                  key={course.id}
                  ref={(el) => setPanelRef(el, idx)}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    height: "100%",
                    width: "100%",
                    background: `linear-gradient(${course.accent}, transparent 100%),url(${o8})`,
                    backgroundSize: "cover",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "clamp(30px, 5vw, 100px)",
                    borderTopRightRadius: "100px",
                    borderBottomLeftRadius: "100px",
                    padding: "clamp(20px, 4vw, 40px)",
                    flexWrap: "wrap",
                    overflowY: "auto",
                    boxShadow: `0 20px 40px -20px ${course.accent}80`,
                  }}>
                  {/* Left side: Course details */}
                  <div
                    style={{
                      fontSize: "1.2rem",
                      width: "min(550px, 100%)",
                      color: "#fff",
                      textAlign: "left",
                    }}>
                    <p
                      style={{
                        fontSize: "clamp(0.8rem, 2vw, 1rem)",
                        fontFamily: "Space Grotesk",
                        letterSpacing: "0.1em",
                        color: "#fff",
                        textTransform: "uppercase",
                        marginBottom: "0.75rem",
                      }}>
                      {course.tag}
                    </p>
                    <p
                      style={{
                        fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                        fontFamily: "Space Grotesk",
                        fontWeight: "bold",
                        marginBottom: "0.25rem",
                        lineHeight: 1.2,
                      }}>
                      {course.title}
                    </p>
                    <p
                      style={{
                        fontSize: "clamp(1rem, 2vw, 1.2rem)",
                        color: "#fff",
                        marginBottom: "1.5rem",
                        fontFamily: "Space Grotesk",
                      }}>
                      {course.subtitle}
                    </p>
                    <p
                      style={{
                        fontFamily: "Space Grotesk",
                        fontSize: "clamp(0.9rem, 2vw, 1rem)",
                        lineHeight: 1.6,
                        marginBottom: "2rem",
                        color: "#fff",
                      }}>
                      {course.desc}
                    </p>

                    {/* Highlights Grid */}
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns:
                          "repeat(auto-fit, minmax(180px, 1fr))",
                        gap: "1rem",
                        marginBottom: "2rem",
                      }}>
                      {course.highlights.map((item, i) => (
                        <div
                          key={i}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                            background: "rgba(255,255,255,0.09)",
                            padding: "8px 16px",
                            borderRadius: "40px",
                            backdropFilter: "blur(20px)",
                            fontSize: "0.9rem",
                          }}>
                          <span style={{ fontSize: "1.3rem" }}>
                            {item.icon}
                          </span>
                          <span style={{ fontFamily: "Space Grotesk" }}>
                            {item.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    <a
                      href={course.link}
                      style={{
                        display: "inline-block",
                        padding: "10px 28px",
                        background: course.accent,
                        color: "#fff",
                        borderRadius: "40px",
                        textDecoration: "none",
                        fontWeight: 600,
                        fontFamily: "Space Grotesk",
                        fontSize: "0.9rem",
                        transition: "transform 0.2s, box-shadow 0.2s",
                        boxShadow: `0 4px 12px ${course.accent}60`,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.02)";
                        e.currentTarget.style.boxShadow = `0 8px 20px ${course.accent}80`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                        e.currentTarget.style.boxShadow = `0 4px 12px ${course.accent}60`;
                      }}>
                      Explore Course →
                    </a>
                  </div>

                  {/* Right side: Visual / Icon representation */}
                  <div
                    style={{
                      height: "min(300px, 50vw)",
                      width: "min(400px, 80%)",
                      backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7)),url(${course.backgroundImage})`,
                      backgroundSize: "cover",
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                      gap: "1rem",
                      backdropFilter: "blur(8px)",
                      border: `1px solid ${course.accent}40`,
                    }}></div>
                </div>
              ))}
            </div>

            {/* Optional bottom CTA (retained from original) */}
            <div
              style={{
                textAlign: "center",
                marginTop: "4rem",
                display: "flex",
                gap: "1rem",
                justifyContent: "center",
                flexWrap: "wrap",
              }}>
              <a
                href="#"
                style={{
                  padding: "12px 32px",
                  borderRadius: 100,
                  background: "#ef4444",
                  color: "#fff",
                  fontFamily: "Space Grotesk",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  textDecoration: "none",
                  transition: "0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.02)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }>
                Explore All Courses
              </a>
              <a
                href="https://codexconquer.com/contactus/"
                style={{
                  padding: "12px 32px",
                  borderRadius: 100,
                  border: "1px solid #ef4444",
                  color: "#ef4444",
                  fontFamily: "Space Grotesk",
                  fontWeight: 500,
                  fontSize: "0.9rem",
                  textDecoration: "none",
                  transition: "0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = "#ef4444")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = "#ef4444")
                }>
                Contact Us
              </a>
            </div>
          </div>
        </motion.div>

        {/*LAST Content*/}

        <div
          ref={ref}
          style={{
            marginLeft: "60px",
            marginRight: "60px",
            marginBottom: "60px",
            padding: "60px",
            backgroundImage: `linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.5)),url(${o9})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderTopRightRadius: "100px",
            borderBottomLeftRadius: "100px",
            borderBottom: "1px solid rgba(124,92,252,0.2)",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}>
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.18, 0.1] }}
            transition={{ duration: 8, repeat: Infinity }}
            style={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
            }}
          />

          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse at 50% 50%, #7C5CFC22, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              fontFamily: "Space Grotesk",
              fontSize: "1rem",
              letterSpacing: "0.2em",
              color: "#ef4444",
              textTransform: "uppercase",
              margin: "0 0 16px",
            }}>
            Start Today
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{
              fontFamily: "'Space Grotesk",
              fontSize: "clamp(32px, 5vw, 64px)",
              fontWeight: 700,
              color: "#fff",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              margin: "0 0 20px",
            }}>
            Ready to Build
            <br />
            <span style={{ color: "#ef4444", fontFamily: "Space Grotesk" }}>
              Your Future?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{
              color: "rgba(255,255,255,0.7)",
              fontFamily: "Space Grotesk",
              fontSize: "1rem",
              maxWidth: 440,
              margin: "0 auto 40px",
              lineHeight: 1.7,
            }}>
            We believe great careers are built through learning, collaboration,
            and real-world impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            style={{
              display: "flex",
              gap: 16,
              justifyContent: "center",
              flexWrap: "wrap",
            }}>
            <motion.a
              href="#"
              whileHover={{ scale: 1.04, boxShadow: "0 0 32px #7C5CFC66" }}
              whileTap={{ scale: 0.97 }}
              style={{
                padding: "14px 36px",
                borderRadius: 100,
                background: "#ef4444",
                color: "#fff",
                fontFamily: "Space Grotesk",
                fontWeight: 600,
                fontSize: "1rem",
                textDecoration: "none",
                display: "inline-block",
              }}>
              Explore All Courses
            </motion.a>
            <motion.a
              href="https://codexconquer.com/contactus/"
              whileHover={{ scale: 1.04, borderColor: "#ef4444" }}
              whileTap={{ scale: 0.97 }}
              style={{
                padding: "14px 36px",
                borderRadius: 100,
                border: "1px solid #ef4444",
                color: "#ef4444",
                fontFamily: "Space Grotesk",
                fontWeight: 500,
                fontSize: "1rem",
                textDecoration: "none",
                display: "inline-block",
              }}>
              Contact Us
            </motion.a>
          </motion.div>
        </div>
      </div>
    </>
  );
}
