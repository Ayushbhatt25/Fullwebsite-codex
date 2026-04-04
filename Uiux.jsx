import { color, motion } from "framer-motion";
import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import star from "../Assets/star.png";

import icon1 from "../Assets/icon1.png";
import icon2 from "../Assets/icon2.png";
import uiuxherobg1 from "../Assets/uiuxherobg1.png";
import uiuxherobg3 from "../Assets/uiuxherobg3.png";
import uiuxbodybg from "../Assets/uiuxbodybg.png";
import uiuxbodybg2 from "../Assets/uiuxbodybg2.png";
import body3 from "../Assets/body3.png";
import shape1 from "../Assets/shape1.png";
import s1 from "../Assets/s1.jpg";
import s2 from "../Assets/s2.jpg";
import s3 from "../Assets/s3.jpg";
import L1 from "../Assets/L1.png";
import L2 from "../Assets/L2.png";
import L3 from "../Assets/L3.png";
import L4 from "../Assets/L4.png";
import L5 from "../Assets/L5.png";
import L6 from "../Assets/L6.png";
import L7 from "../Assets/L7.png";
import L8 from "../Assets/L8.png";
import L9 from "../Assets/L9.png";
import L10 from "../Assets/L10.png";
import L11 from "../Assets/L11.png";
import TL1 from "../Assets/TL1.png";
import TL2 from "../Assets/TL2.svg";
import TL3 from "../Assets/TL3.svg";
import TL4 from "../Assets/TL4.svg";
import TL5 from "../Assets/TL5.svg";
import responsive from "../Assets/responsive.jpg";
import wireframe from "../Assets/wireframe.jpg";
import se3 from "../Assets/se3.jpeg";
import on from "../Assets/on.png";

export default function Uiux() {
  const wrapperRef = React.useRef(null);
  const panelsRef = React.useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const panels = panelsRef.current;

    if (!panels.length) return;

    // set initial positions
    gsap.set(panels, { yPercent: 100 });
    gsap.set(panels[0], { yPercent: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: "top top",
        end: "+=" + panels.length * 100 + "%",
        scrub: 1,
        pin: true,
      },
    });

    panels.forEach((panel, i) => {
      if (i !== 0) {
        tl.to(panel, {
          yPercent: 0,
          duration: 1,
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

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

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
  };

  const [isHeroVisible, setIsHeroVisible] = useState(false);

  useEffect(() => {
    const heroElement = document.getElementById("content-hero");
    const checkHeroVisibility = () => {
      if (heroElement) {
        const rect = heroElement.getBoundingClientRect();
        const isVisible = rect.top <= 200 && rect.bottom >= 0;
        setIsHeroVisible(isVisible);
      }
    };

    window.addEventListener("scroll", checkHeroVisibility);
    checkHeroVisibility();

    return () => window.removeEventListener("scroll", checkHeroVisibility);
  }, []);

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
    @keyframes scroll {
      from { transform: translateX(0); }
      to { transform: translateX(-50%); }
    }
  `;
    document.head.appendChild(style);
  }, []);

  const responsibilities = [
    {
      backgroundImage: `${TL1}`,
      title: "Requirement Understanding",
      desc: "We understand project goals, target users, and design expectations before starting.",
    },
    {
      backgroundImage: `${TL2}`,
      title: "User Flow Planning",
      desc: "We plan clear user journeys to ensure smooth navigation and interaction.",
    },
    {
      backgroundImage: `${TL5}`,
      title: "Wireframing",
      desc: "We create structured layouts to define screen placement and content flow.",
    },
    {
      backgroundImage: `${TL4}`,
      title: "UI Design",
      desc: "We design visually clean and consistent interfaces aligned with the product.",
    },
    {
      backgroundImage: `${TL5}`,
      title: "Review & Refinement",
      desc: "We refine designs based on feedback to improve usability and clarity.",
    },
    {
      backgroundImage: `${TL3}`,
      title: "Final Design Handoff",
      desc: "We deliver finalized design files ready for development implementation.",
    },
  ];

  const sectionRef = useRef(null);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  useEffect(() => {
    const animateCounter = (setCount, end) => {
      let start = 0;
      const duration = 4000;
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
          animateCounter(setCount1, 5);
          animateCounter(setCount2, 10);
          animateCounter(setCount3, 22);

          observer.disconnect(); // run only once
        }
      },
      { threshold: 0.5 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
  }, []);

  return (
    <>
      <div className="primary-container">
        <nav className={`mini-navbar ${isHeroVisible ? "hidden" : ""}`}>
          <div className="nav-links">
            <button className="nav-btn">
              <Link
                to="/Uiux"
                style={{
                  textDecoration: "none",
                  color: "#fff",
                }}>
                Ui/Ux
              </Link>
            </button>
            <button className="nav-btn">
              <Link
                to="/Digitalmarketing"
                style={{
                  textDecoration: "none",
                  color: "#fff",
                }}>
                Digital
              </Link>
            </button>
            <button className="nav-btn">
              <Link
                to="/Fullstack"
                style={{
                  textDecoration: "none",
                  color: "#fff",
                }}>
                Full-stack
              </Link>
            </button>
            <button className="nav-btn">
              <Link
                to="/Videoeditor"
                style={{
                  textDecoration: "none",
                  color: "#fff",
                }}>
                Videoeditor
              </Link>
            </button>
          </div>
        </nav>

        <div
          id="content-hero"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "90vh",
            width: "100%",
            gap: "clamp(20px, 8vw, 215px)",
            flexWrap: "wrap",
            backgroundImage: `url(${uiuxherobg1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
            padding: "clamp(1rem, 5vw, 3rem)",
          }}>
          {/* left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{
              flex: "1 1 300px",
              maxWidth: "600px",
            }}>
            <h1
              style={{
                fontFamily: "Space Grotesk",
                fontSize: "clamp(2rem, 6vw, 4.5rem)",
                fontWeight: "700",
                color: "#111",
                lineHeight: "1.2",
                marginBottom: "20px",
              }}>
              <span style={{ color: "#ef4444" }}>UI/UX Design</span>
              <br />
              for Better User Experience <br />
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{
                fontFamily: "Space Grotesk",
                fontSize: "clamp(0.9rem, 3vw, 1.1rem)",
                color: "#111",
                maxWidth: "500px",
                marginBottom: "30px",
                lineHeight: "1.6",
              }}>
              We design intuitive, user-friendly, and visually clean interfaces
              that improve usability and engagement across web and mobile
              platforms.
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
                CONTACT US
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
                    href="https://www.youtube.com/watch?v=wcciNQ4TyqQ"
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
                    {`
          @keyframes rippleEffect {
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
                    color: "#111",
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
              borderRadius: "200px 0px 0px 290px",
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "relative",
              overflow: "hidden",
              borderLeft: "10px solid #ef4444",
            }}>
            <motion.div
              className="hero-image"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              style={{
                width: "calc(100% - 10px)",
                height: "calc(100% - 30px)",
                borderRadius: "200px 200px 0px 0px",
                backgroundImage: `url(${uiuxherobg3})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "absolute",
                overflow: "hidden",
                marginLeft: "5px",
                top: "15px",
              }}
            />
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
        </div>

        {/* Body Content */}
        <motion.div
          id="content-body"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "clamp(16px, 4vw, 40px)", // smoother spacing
            padding: "clamp(16px, 4vw, 60px)", // better scaling on small screens
          }}>
          <diV
            style={{
              height: "clamp(120px, 20vw, 300px)",
              width: "clamp(120px, 20vw, 300px)",
              backgroundImage: `url(${uiuxbodybg2})`,
              position: "absolute",
              left: "clamp(50%, 80vw, 75%)",
            }}></diV>

          {/* LEFT SIDE */}
          <div
            style={{
              marginLeft: "clamp(10px, 5vw, 50px)",
              height: "clamp(350px, 80vw, 700px)",
              width: "clamp(260px, 85vw, 600px)",
            }}>
            <div
              style={{
                height: "clamp(300px, 70vw, 600px)",
                width: "clamp(260px, 80vw, 500px)",
                right: "clamp(0px, 4vw, 40px)",
                position: "relative",
                backgroundImage: `url(${uiuxbodybg})`,
                backgroundSize: "cover",
                borderTopLeftRadius: "clamp(30px, 8vw, 100px)",
                zIndex: 1,
              }}>
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  height: "100%",
                  width: "100%",
                  background: "rgba(200, 192, 198, 0.7)",
                  borderTopLeftRadius: "clamp(30px, 8vw, 100px)",
                }}></div>

              <div
                style={{
                  position: "absolute",
                  top: "clamp(40px, 10vw, 120px)",
                  left: "clamp(20px, 8vw, 140px)",
                  height: "clamp(300px, 70vw, 600px)",
                  width: "clamp(260px, 80vw, 500px)",
                  border: "clamp(2px, 0.4vw, 3px) solid #ef4444",
                  zIndex: 2,
                }}>
                <div
                  style={{
                    position: "absolute",
                    bottom: "clamp(2%, 5vw, 5%)",
                    right: "clamp(2%, 5vw, 5%)",
                    height: "clamp(300px, 70vw, 600px)",
                    width: "clamp(260px, 85vw, 550px)",
                    backgroundImage: `url(${uiuxbodybg})`,
                    backgroundSize: "cover",
                    borderTopLeftRadius: "clamp(30px, 8vw, 100px)",
                    zIndex: 3,
                  }}></div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              flex: "1",
              flexWrap: "wrap",
              minWidth: "clamp(240px, 50vw, 280px)",
              background: "#fff",
              padding: "clamp(16px, 3vw, 25px)",
              fontFamily: "Space Grotesk",
              marginTop: "clamp(40px, 8vw, 100px)",
            }}>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "clamp(8px, 2vw, 20px)", // optional responsive spacing
              }}>
              <p
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  gap: "clamp(6px, 2vw, 10px)",
                  fontSize: "clamp(0.9rem, 2.5vw, 1.2rem)",
                  fontFamily: "Space Grotesk",
                  color: "#ef4444",
                  letterSpacing: "clamp(0.05rem, 0.2vw, 0.1rem)",
                }}>
                <div
                  style={{
                    width: "clamp(30px, 5vw, 50px)",
                    height: "clamp(1px, 0.2vw, 2px)",
                    backgroundColor: "#ef4444",
                    fontFamily: "Space Grotesk",
                  }}></div>
                ABOUT US
              </p>

              <p
                style={{
                  fontSize: "clamp(1.3rem, 4vw, 2rem)",
                  fontFamily: "Space Grotesk",
                  fontWeight: "bold",
                  color: "#111",
                }}>
                Our UI/UX Design Services
              </p>

              <p
                style={{
                  fontSize: "clamp(0.9rem, 2vw, 1.2rem)",
                  fontFamily: "Space Grotesk",
                  color: "#111",
                  marginBottom: "clamp(16px, 4vw, 40px)",
                }}>
                We provide UI/UX design solutions focused on usability, clarity,
                and consistent user experience across digital platforms.
              </p>
            </div>

            <div
              style={{
                display: "flex",
                flexWrap: window.innerWidth < 760 ? "wrap" : "nowrap",
                alignItems: "center",
                justifyContent: "center",
                gap: "clamp(16px, 5vw, 50px)",
              }}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{
                  duration: 0.2,
                  ease: "easeOut",
                }}
                style={{
                  height: "clamp(230px, 35vw, 280px)",
                  width: "clamp(260px, 45vw, 400px)",
                  flex: "1 1 clamp(260px, 45vw, 400px)",
                  border: "clamp(1px, 0.2vw, 1px) solid gray",
                }}>
                <div
                  style={{
                    display: "flex",
                    height: "clamp(60px, 15vw, 100px)",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "clamp(20px, 8vw, 130px)",
                  }}>
                  <div
                    style={{
                      minHeight: "clamp(40px, 10vw, 50px)",
                      minWidth: "clamp(40px, 10vw, 50px)",
                      backgroundImage: `url(${TL4})`,
                      backgroundSize: "cover",
                    }}></div>
                  <div
                    style={{
                      minHeight: "clamp(60px, 12vw, 80px)",
                      minWidth: "clamp(60px, 12vw, 80px)",
                      backgroundImage: `url(${TL3})`,
                      opacity: "0.4",
                      backgroundSize: "cover",
                    }}></div>
                </div>

                <div
                  style={{
                    paddingLeft: "clamp(10px, 4vw, 20px)",
                    paddingRight: "clamp(10px, 4vw, 20px)",
                  }}>
                  <p
                    style={{
                      fontSize: "clamp(0.95rem, 2vw, 1.2rem)",
                      fontWeight: "bold",
                      marginTop: "clamp(12px, 4vw, 30px)",
                      fontFamily: "Space Grotesk",
                    }}>
                    User Interface (UI) Design
                  </p>
                  <p style={{ fontFamily: "Space Grotesk" }}>
                    Design visually consistent and modern interfaces that align
                    with your brand and improve clarity.
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{
                  duration: 0.2,
                  ease: "easeOut",
                }}
                style={{
                  height: "clamp(230px, 35vw, 280px)",
                  width: "clamp(260px, 45vw, 400px)",
                  flex: "1 1 clamp(260px, 45vw, 400px)",
                  border: "clamp(1px, 0.2vw, 1px) solid gray",
                }}>
                <div
                  style={{
                    display: "flex",
                    height: "clamp(60px, 15vw, 100px)",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "clamp(20px, 8vw, 130px)",
                  }}>
                  <div
                    style={{
                      minHeight: "clamp(40px, 10vw, 50px)",
                      minWidth: "clamp(40px, 10vw, 50px)",
                      backgroundImage: `url(${TL4})`,
                      backgroundSize: "cover",
                    }}></div>
                  <div
                    style={{
                      minHeight: "clamp(60px, 12vw, 80px)",
                      minWidth: "clamp(60px, 12vw, 80px)",
                      backgroundImage: `url(${TL3})`,
                      opacity: "0.4",
                      backgroundSize: "cover",
                    }}></div>
                </div>

                <div
                  style={{
                    paddingLeft: "clamp(10px, 4vw, 20px)",
                    paddingRight: "clamp(10px, 4vw, 20px)",
                  }}>
                  <p
                    style={{
                      fontSize: "clamp(0.95rem, 2vw, 1.2rem)",
                      fontWeight: "bold",
                      marginTop: "clamp(12px, 4vw, 30px)",
                      fontFamily: "Space Grotesk",
                    }}>
                    User Experience (UX) Design
                  </p>
                  <p style={{ fontFamily: "Space Grotesk" }}>
                    Create smooth user journeys with clear navigation and
                    logical user flows.
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.a
              href="https://codexconquer.com/ui-ux-design/#OUR%20SERVICES"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              style={{
                padding: "clamp(8px, 2vw, 12px) clamp(16px, 5vw, 28px)",
                backgroundColor: "#ef4444",
                color: "#fff",
                borderRadius: "clamp(6px, 1.5vw, 8px)",
                textDecoration: "none",
                fontWeight: "600",
                display: "inline-block",
                cursor: "pointer",
                marginTop: "clamp(20px, 6vw, 50px)",
              }}>
              LEARN MORE
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Body2 content */}

        <motion.div
          initial="hidden"
          animate="show"
          variants={containerVariants}
          ref={wrapperRef}
          style={{
            width: "100%",
            fontFamily: "Space Grotesk",
            padding: "clamp(30px, 5vw, 60px)",
          }}>
          <diV
            style={{
              height: "clamp(120px, 20vw, 300px)",
              width: "clamp(120px, 20vw, 300px)",
              backgroundImage: `url(${uiuxbodybg2})`,
              position: "absolute",
              left: "clamp(50%, 80vw, 76%)",
              bottom: "clamp(20%, 50vw, 60%)",
            }}></diV>

          {/* Heading */}
          <motion.p
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "clamp(1rem, 2.5vw, 1.2rem)", // smoother scaling
              color: "#ef4444",
              letterSpacing: "clamp(0.05rem, 0.2vw, 0.1rem)", // responsive spacing
              gap: "clamp(6px, 2vw, 10px)", // responsive gap
              fontFamily: "Space Grotesk",
            }}>
            <div
              style={{
                width: "clamp(30px, 5vw, 50px)",
                height: "clamp(1px, 0.2vw, 2px)",
                backgroundColor: "#ef4444",
                fontFamily: "Space Grotesk",
              }}></div>
            OUR SERVICES
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{
              fontSize: "clamp(1.3rem, 4vw, 2rem)", // smoother scaling
              fontWeight: "bold",
              color: "black",
              marginBottom: "clamp(8px, 3vw, 10px)", // responsive spacing
              fontFamily: "Space Grotesk",
            }}>
            Design Capabilities
          </motion.p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              color: "#111",
            }}>
            <p
              style={{
                fontFamily: "Space Grotesk",
                fontSize: "clamp(0.9rem, 1.5vw, 1.2rem)",
              }}>
              We design intuitive and user-friendly interfaces that improve
              usability and create smooth digital experiences.
              <br />
              Our UI/UX design focuses on clarity, consistency, and
              responsiveness across web and mobile platforms.
            </p>
          </div>

          <div
            style={{
              height: "clamp(300px, 80vw, 500px)",
              width: "100%",
              position: "relative",
              overflow: "hidden",
              alignItems: "center",
              justifyContent: "center",
            }}>
            {/*first div */}
            <div
              ref={(el) => (panelsRef.current[0] = el)}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                height: "clamp(300px, 80vw, 500px)",
                width: "100%",
                background: "lightgray",
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
                gap: "clamp(20px, 5vw, 100px)",
                borderTopRightRadius: "clamp(30px, 8vw, 100px)",
                borderBottomLeftRadius: "clamp(30px, 8vw, 100px)",
              }}>
              <div
                style={{
                  fontSize: "clamp(0.9rem, 1.5vw, 1.2rem)",
                  width: "clamp(260px, 80%, 600px)",
                  color: "#111",
                }}>
                <p
                  style={{
                    fontSize: "clamp(1.3rem, 3vw, 2rem)",
                    fontFamily: "Space Grotesk",
                  }}>
                  Wireframing & Prototyping
                </p>
                <p
                  style={{
                    fontFamily: "Space Grotesk",
                  }}>
                  We create wireframes and prototypes to visualize user flows,
                  test ideas, and build a strong foundation for intuitive and
                  effective digital experiences.
                </p>
              </div>
              <div
                style={{
                  height: "clamp(180px, 30vw, 300px)",
                  width: "clamp(260px, 80vw, 500px)",
                  backgroundSize: "cover",
                  borderRadius: "clamp(20px, 5vw, 50px)",
                  backgroundImage: `url(${wireframe})`,
                }}></div>
            </div>

            {/*second div */}
            <div
              ref={(el) => (panelsRef.current[1] = el)}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                height: "clamp(300px, 80vw, 500px)",
                width: "100%",
                background: "lightskyblue",
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
                gap: "clamp(20px, 6vw, 100px)",
                borderTopRightRadius: "clamp(30px, 8vw, 100px)",
                borderBottomLeftRadius: "clamp(30px, 8vw, 100px)",
              }}>
              <div
                style={{
                  fontSize: "clamp(0.9rem, 1.5vw, 1.2rem)",
                  width: "clamp(260px, 80%, 600px)",
                  color: "#111",
                }}>
                <p
                  style={{
                    fontSize: "clamp(1.3rem, 3vw, 2rem)",
                    fontFamily: "Space Grotesk",
                  }}>
                  Responsive Design
                </p>
                <p
                  style={{
                    fontFamily: "Space Grotesk",
                  }}>
                  Our responsive design approach ensures your website or app
                  delivers a smooth experience on every device. From
                  mobile-first layouts to adaptive components, we create designs
                  that adjust effortlessly to different screen sizes.
                </p>
              </div>
              <div
                style={{
                  height: "clamp(180px, 30vw, 300px)",
                  width: "clamp(260px, 80vw, 500px)",
                  backgroundSize: "cover",
                  borderRadius: "clamp(20px, 5vw, 50px)",
                  backgroundImage: `url(${responsive})`,
                }}></div>
            </div>

            {/*Third div */}
            <div
              ref={(el) => (panelsRef.current[2] = el)}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                height: "clamp(300px, 80vw, 500px)",
                width: "100%",
                background: "salmon",
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
                gap: "clamp(20px, 6vw, 100px)",
                borderTopRightRadius: "clamp(30px, 8vw, 100px)",
                borderBottomLeftRadius: "clamp(30px, 8vw, 100px)",
              }}>
              <div
                style={{
                  fontSize: "clamp(0.9rem, 1.5vw, 1.2rem)",
                  width: "clamp(260px, 80%, 600px)",
                  color: "#111",
                }}>
                <p
                  style={{
                    fontSize: "clamp(1.3rem, 3vw, 2rem)",
                    fontFamily: "Space Grotesk",
                  }}>
                  Usability & Accessibility
                </p>
                <p
                  style={{
                    fontFamily: "Space Grotesk",
                  }}>
                  Our focus is on creating intuitive and inclusive designs that
                  everyone can use effortlessly. From improving navigation flow
                  to ensuring accessibility compliance, we make digital
                  experiences more user-friendly and barrier-free.
                </p>
              </div>
              <div
                style={{
                  height: "clamp(180px, 30vw, 300px)",
                  width: "clamp(260px, 80vw, 500px)",
                  backgroundSize: "cover",
                  borderRadius: "clamp(20px, 5vw, 50px)",
                  backgroundImage: `url(${uiuxbodybg})`,
                }}></div>
            </div>

            {/*Fourth div */}
            <div
              ref={(el) => (panelsRef.current[3] = el)}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                height: "clamp(300px, 80vw, 500px)",
                width: "100%",
                background: "pink",
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
                gap: "clamp(20px, 6vw, 100px)",
                borderTopRightRadius: "clamp(30px, 8vw, 100px)",
                borderBottomLeftRadius: "clamp(30px, 8vw, 100px)",
              }}>
              <div
                style={{
                  fontSize: "clamp(0.9rem, 1.5vw, 1.2rem)",
                  width: "clamp(260px, 80%, 600px)",
                  color: "#111",
                }}>
                <p
                  style={{
                    fontSize: "clamp(1.3rem, 3vw, 2rem)",
                    fontFamily: "Space Grotesk",
                  }}>
                  Design Improvements & Redesign
                </p>
                <p
                  style={{
                    fontFamily: "Space Grotesk",
                  }}>
                  We revamp outdated designs into modern, user-friendly
                  experiences. Through continuous improvements and thoughtful
                  redesign, we make your product more efficient, visually
                  appealing, and aligned with current user expectations.
                </p>
              </div>
              <div
                style={{
                  height: "clamp(180px, 30vw, 300px)",
                  width: "clamp(260px, 80vw, 500px)",
                  backgroundSize: "cover",
                  borderRadius: "clamp(20px, 5vw, 50px)",
                  backgroundImage: `url(${se3})`,
                }}></div>
            </div>
          </div>
        </motion.div>

        {/* Infinite Scrolling Text*/}

        <div
          style={{
            paddingLeft: "clamp(10px, 5vw, 60px)",
            paddingRight: "clamp(10px, 5vw, 60px)",
          }}>
          {/* TOP BAR */}
          <div
            style={{
              display: "flex",
              height: "clamp(40px, 8vw, 50px)",
              width: "100%",
              background: "lightpink",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}>
            <marquee
              direction="right"
              style={{
                fontSize: "clamp(1rem, 3vw, 1.5rem)",
                fontFamily: "Space Grotesk",
                color: "#fff",
              }}>
              YOUR CREATIVE DIGITAL COMPANY
            </marquee>

            <span
              style={{
                display: "flex",
                height: "clamp(40px, 8vw, 50px)",
                width: "clamp(180px, 40vw, 400px)",
                background:
                  "linear-gradient(90deg, rgb(182, 11, 11) 0%, rgb(255, 56, 56) 100%)",
                clipPath: "polygon(15% 0,100% 0, 100% 100%, 0 100%)",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontSize: "clamp(0.5rem, 3vw, 1.5rem)",
                fontWeight: "bold",
                fontFamily: "Space Grotesk",
              }}>
              CODEXCONQURE
            </span>
          </div>

          {/* BOTTOM BAR */}
          <div
            style={{
              display: "flex",
              height: "clamp(40px, 8vw, 50px)",
              width: "100%",
              background: "gray",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              marginTop: "clamp(6px, 2vw, 10px)",
            }}>
            <span
              style={{
                display: "flex",
                height: "clamp(40px, 8vw, 50px)",
                width: "clamp(180px, 40vw, 400px)",
                background:
                  "linear-gradient(90deg, rgb(182, 11, 11) 0%, rgb(255, 56, 56) 100%)",
                clipPath: "polygon(0 0,85% 0, 100% 100%, 0 100%)",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontSize: "clamp(0.5rem, 3vw, 1.5rem)",
                fontWeight: "bold",
                fontFamily: "Space Grotesk",
              }}>
              CODEXCONQURE
            </span>

            <marquee
              direction="left"
              style={{
                fontSize: "clamp(1rem, 3vw, 1.5rem)",
                fontFamily: "Space Grotesk",
                color: "#fff",
              }}>
              YOUR CREATIVE DIGITAL COMPANY
            </marquee>
          </div>
        </div>

        {/* Body3 Content*/}

        {/*LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "clamp(10px, 4vw, 20px)", // ✅ fixed (max can't be 0)
            padding: "clamp(20px, 5vw, 60px)",
          }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              flex: "1",
              minWidth: "clamp(260px, 60vw, 700px)",
              height: "clamp(400px, 90vw, 1000px)",
              backgroundImage: `url(${body3})`,
              backgroundSize: "cover",
              borderRadius: "clamp(6px, 2vw, 10px)",
              padding: "clamp(16px, 3vw, 25px)",
              boxShadow: "0 15px 40px rgba(0,0,0,0.08)",
              fontFamily: "Space Grotesk",
              position: "relative",
            }}>
            <div
              style={{
                height: "clamp(100px, 45vw, 500px)",
                width: "clamp(100px, 44vw, 350px)",
                position: "absolute",
                bottom: "clamp(20%, 50vw, 50%)",
                right: "clamp(5%, 44vw, 50%)",
                background:
                  "linear-gradient(90deg, rgb(182, 11, 11) 0%, rgb(255, 56, 56) 100%)",
                borderTopLeftRadius: "clamp(6px, 2vw, 10px)",
                borderRight: "1px solid #fff",
                borderBottom: "1px solid #fff",
              }}>
              <div
                style={{
                  height: "clamp(50px, 15vw, 180px)",
                  width: "clamp(60px, 17vw, 200px)",
                  backgroundImage: `url(${shape1})`,
                  backgroundSize: "cover",
                  position: "absolute",
                }}></div>

              <div
                style={{
                  height: "clamp(50px, 40vw, 500px)",
                  width: "clamp(200px, 40vw, 350px)",
                  position: "absolute",
                  textAlign: "center",
                  padding: "clamp(20px, 6vw, 60px)",
                  top: "clamp(10%, 10vw, 25%)",
                }}>
                <p
                  style={{
                    color: "#fff",
                    fontSize: "clamp(1rem, 4vw, 2.5rem)",
                    fontFamily: "Space Grotesk",
                    fontWeight: "bold",
                  }}>
                  We are Trusted by more Than 100 clients
                </p>
              </div>
            </div>

            <div
              style={{
                height: "clamp(150px, 45vw, 500px)",
                width: "clamp(100px, 44vw, 350px)",
                position: "absolute",
                top: "clamp(40%, 60vw, 50%)",
                left: "clamp(5%, 50vw, 50%)",
                borderBottomRightRadius: "clamp(6px, 2vw, 10px)",
                borderTop: "1px solid #fff",
                borderLeft: "1px solid #fff",
              }}></div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              flex: "2",
              minWidth: "250px",
              padding: "clamp(20px, 3vw, 30px)",
              boxShadow: "0 15px 40px rgba(0,0,0,0.08)",
              borderRadius: "10px",
              background: "#fff",
            }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "50px",
                gap: "5px",
              }}>
              <p
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "1.2rem",
                  color: "#ef4444",
                  fontFamily: "Space Grotesk",
                  letterSpacing: "0.1rem",
                  gap: "10px",
                }}>
                <div
                  style={{
                    width: "50px",
                    height: "1px",
                    backgroundColor: "#ef4444",
                    borderRadius: "2px",
                  }}
                />
                DESIGN WORKFLOW
              </p>

              <p
                style={{
                  fontSize: "clamp(1.5rem, 5vw, 2rem)",
                  fontWeight: "bold",
                  color: "black",
                  fontFamily: "Space Grotesk",
                }}>
                Our Design Process
              </p>

              <p
                style={{
                  fontFamily: "Space Grotesk",
                  fontSize: "1.2rem",
                }}>
                We follow a structured design process to ensure clarity,
                usability, and consistency across all UI/UX projects.
              </p>

              {responsibilities.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
                    transition: { duration: 0.2 },
                  }}
                  style={{
                    display: "flex",
                    padding: "clamp(15px, 2vw, 20px)",
                    borderRadius: "16px",
                    background: "#fff",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "40px",
                  }}>
                  <div
                    style={{
                      display: "flex",
                      position: "relative",
                      minHeight: "100px",
                      minWidth: "100px",
                      borderRadius: "50%",
                      border: "1px solid gray",
                      alignItems: "center",
                      justifyContent: "center",
                    }}>
                    <div
                      style={{
                        position: "absolute",
                        minHeight: "50px",
                        minWidth: "50px",
                        backgroundImage: `url(${item.backgroundImage})`,
                        backgroundSize: "cover",
                      }}></div>
                  </div>

                  <div>
                    <h5
                      style={{
                        marginBottom: "10px",
                        color: "#333",
                        fontFamily: "Space Grotesk",
                        fontSize: "clamp(1rem, 3vw, 1.2rem)",
                      }}>
                      {item.title}
                    </h5>
                    <p
                      style={{
                        color: "#111",
                        fontSize: "clamp(0.9rem, 2.5vw, 1rem)",
                        fontFamily: "Space Grotesk",
                      }}>
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* infinite scroll*/}

        <div
          style={{
            paddingLeft: "clamp(10px, 5vw, 60px)",
            paddingRight: "clamp(10px, 5vw, 60px)",
          }}>
          <div
            style={{
              display: "flex",
              height: "clamp(60px, 12vw, 100px)",
              width: "100%",
              alignItems: "center",
              overflow: "hidden",
              marginTop: "clamp(6px, 2vw, 10px)",
            }}>
            {/* Left Label */}
            <span
              style={{
                display: "flex",
                height: "clamp(60px, 12vw, 100px)",
                width: "clamp(180px, 50vw, 400px)",
                background:
                  "linear-gradient(90deg, rgb(182, 11, 11) 0%, rgb(255, 56, 56) 100%)",
                clipPath: "polygon(0 0,85% 0, 100% 100%, 0 100%)",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontSize: "clamp(1rem, 3vw, 1.5rem)",
                fontWeight: "bold",
                fontFamily: "Space Grotesk",
              }}>
              OUR CLIENTS
            </span>

            {/* Scrolling Logos */}
            <div
              style={{
                display: "flex",
                overflow: "hidden",
                width: "100%",
                gap: "clamp(8px, 2vw, 20px)", // optional responsive spacing
              }}>
              <div
                style={{
                  display: "flex",
                  gap: "clamp(16px, 5vw, 50px)",
                  animation: "scroll 10s linear infinite",
                  width: "max-content",
                }}>
                {[
                  L1,
                  L2,
                  L3,
                  L4,
                  L5,
                  L6,
                  L1,
                  L7,
                  L8,
                  L9,
                  L10,
                  L11,
                  L1,
                  L2,
                  L3,
                  L4,
                  L5,
                  L6,
                  L1,
                  L10,
                  L11,
                  L7,
                  L1,
                  L7,
                  L8,
                  L9,
                  L10,
                  L11,
                  L1,
                  L2,
                  L3,
                  L4,
                  L5,
                  L6,
                  L1,
                  L10,
                ].map((logo, i) => (
                  <img
                    key={i}
                    src={logo}
                    alt="logo"
                    style={{
                      maxHeight: "100%",
                      maxWidth: "10%",
                      objectFit: "contain",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/*Body4 content */}

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
            width: "100%",
            padding: "clamp(20px, 5vw, 60px)",
          }}>
          <diV
            style={{
              height: "clamp(120px, 20vw, 300px)",
              width: "clamp(120px, 20vw, 300px)",
              backgroundImage: `url(${uiuxbodybg2})`,
              position: "absolute",
              left: "clamp(50%, 80vw, 76%)",
              bottom: "clamp(20%, 50vw, 60%)",
            }}></diV>

          <div>
            <p
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: "1.2rem",
                color: "#ef4444",
                fontFamily: "Space Grotesk",
                letterSpacing: "0.1rem",
                gap: "10px",
              }}>
              <div
                style={{
                  width: "50px",
                  height: "1px",
                  backgroundColor: "#ef4444",
                  borderRadius: "2px",
                }}
              />
              WHY CHOOSE CODEXCONQUER
            </p>

            <p
              style={{
                fontSize: "2rem",
                color: "#111",
                fontFamily: "Space Grotesk",
                fontWeight: "bold",
              }}>
              Designed for users, built for performance
            </p>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              gap: "25px",
              marginTop: "25px",
            }}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -15 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "380px",
                width: "330px",
                border: "1px solid black",
                gap: "20px",
                overflow: "hidden",
                borderRadius: "5px",
                cursor: "pointer",
              }}>
              <div
                style={{
                  height: "300px",
                  width: "330px",
                  overflow: "hidden",
                }}>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{
                    duration: 0.2,
                    ease: "easeOut",
                  }}
                  style={{
                    height: "100%",
                    width: "100%",
                    backgroundImage: `url(${s1})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </div>

              {/* TEXT */}
              <div style={{ fontSize: "1rem", padding: "10px" }}>
                <h3
                  style={{
                    fontSize: "1.2rem",
                    fontFamily: "Space Grotesk",
                    fontWeight: "bold",
                  }}>
                  User-Focused Design
                </h3>
                <p style={{ fontFamily: "Space Grotesk" }}>
                  We design interfaces that are easy to understand and simple
                  for users to navigate.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -15 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "380px",
                width: "330px",
                border: "1px solid black",
                gap: "20px",
                overflow: "hidden",
                borderRadius: "5px",
                cursor: "pointer",
              }}>
              <div
                style={{
                  height: "300px",
                  width: "330px",
                  overflow: "hidden",
                }}>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{
                    duration: 0.2,
                    ease: "easeOut",
                  }}
                  style={{
                    height: "100%",
                    width: "100%",
                    backgroundImage: `url(${s3})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </div>

              {/* TEXT */}
              <div style={{ fontSize: "1rem", padding: "10px" }}>
                <h3
                  style={{
                    fontSize: "1.2rem",
                    fontFamily: "Space Grotesk",
                    fontWeight: "bold",
                  }}>
                  Clean & Consistent Layouts
                </h3>
                <p style={{ fontFamily: "Space Grotesk" }}>
                  Our designs follow a clear structure and consistent visual
                  style across all screens.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -15 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "380px",
                width: "330px",
                border: "1px solid black",

                gap: "20px",
                overflow: "hidden",
                borderRadius: "5px",
                cursor: "pointer",
              }}>
              <div
                style={{
                  height: "300px",
                  width: "330px",
                  overflow: "hidden",
                }}>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{
                    duration: 0.2,
                    ease: "easeOut",
                  }}
                  style={{
                    minHeight: "100%",
                    minWidth: "100%",
                    backgroundImage: `url(${s2})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </div>

              {/* TEXT */}
              <div style={{ fontSize: "1rem", padding: "10px" }}>
                <h3
                  style={{
                    fontSize: "1.2rem",
                    fontFamily: "Space Grotesk",
                    fontWeight: "bold",
                  }}>
                  Responsive Across Devices
                </h3>
                <p
                  style={{ fontFamily: "Space Grotesk", marginBottom: "40px" }}>
                  We ensure designs work smoothly on mobile, tablet, and desktop
                  devices.
                  <br />
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -15 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "380px",
                width: "330px",
                border: "1px solid black",
                gap: "20px",
                overflow: "hidden",
                borderRadius: "5px",
                cursor: "pointer",
              }}>
              <div
                style={{
                  height: "300px",
                  width: "330px",
                  overflow: "hidden",
                }}>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{
                    duration: 0.2,
                    ease: "easeOut",
                  }}
                  style={{
                    height: "100%",
                    width: "100%",
                    backgroundImage: `url(${on})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </div>

              {/* TEXT */}
              <div style={{ fontSize: "1rem", padding: "10px" }}>
                <h3
                  style={{
                    fontSize: "1.2rem",
                    fontFamily: "Space Grotesk",
                    fontWeight: "bold",
                  }}>
                  Development-Ready Designs
                </h3>
                <p style={{ fontFamily: "Space Grotesk" }}>
                  Our UI/UX designs are structured for easy and smooth
                  implementation by developers.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/*last content */}

        <motion.div
          ref={sectionRef}
          style={{
            paddingLeft: "clamp(10px, 5vw, 60px)",
            paddingRight: "clamp(10px, 5vw, 60px)",
          }}>
          <div
            style={{
              display: "flex",
              height: "clamp(80px, 15vw, 150px)",
              width: "100%",
              overflow: "hidden",
              marginTop: "clamp(6px, 2vw, 10px)",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(211, 211, 211, 0.5)",
            }}>
            <span
              style={{
                display: "flex",
                height: "clamp(80px, 15vw, 150px)",
                width: "clamp(80px, 20vw, 200px)",
                background:
                  "linear-gradient(90deg, rgb(182, 11, 11) 0%, rgb(255, 56, 56) 100%)",
                clipPath: "polygon(0 0, 50% 0, 100% 100%, 0 100%)",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontSize: "clamp(1rem, 3vw, 1.5rem)",
                fontWeight: "bold",
                fontFamily: "Space Grotesk",
              }}></span>

            <div
              style={{
                display: "flex",
                height: "clamp(80px, 15vw, 150px)",
                width: "100%",
                gap: "clamp(16px, 5vw, 50px)",
                alignItems: "center",
                justifyContent: "center",
              }}>
              <div
                style={{
                  height: "clamp(20px, 5vw, 35px)",
                  width: "clamp(20px, 5vw, 35px)",
                  background: `url(${icon1})`,
                  backgroundSize: "cover",
                  marginRight: "clamp(10px, 4vw, 50px)",
                }}></div>

              {/* ITEM 1 */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                <h3
                  style={{
                    fontSize: "clamp(16px, 3vw, 40px)",
                    fontFamily: "Space Grotesk",
                    fontWeight: "bold",
                    color: "#444",
                  }}>
                  {count1}K+
                </h3>
                <p
                  style={{
                    fontSize: "clamp(12px, 2.5vw, 25px)",
                    fontFamily: "Space Grotesk",
                    fontWeight: "bold",
                    color: "#444",
                  }}>
                  Successful Project
                </p>
              </div>

              {/* ITEM 2 */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                <h3
                  style={{
                    fontSize: "clamp(16px, 3vw, 40px)",
                    fontFamily: "Space Grotesk",
                    fontWeight: "bold",
                    color: "#444",
                  }}>
                  {count2}K
                </h3>
                <p
                  style={{
                    fontSize: "clamp(12px, 2.5vw, 25px)",
                    fontFamily: "Space Grotesk",
                    fontWeight: "bold",
                    color: "#444",
                  }}>
                  Happy Customers
                </p>
              </div>

              {/* ITEM 3 */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                <h3
                  style={{
                    fontSize: "clamp(16px, 3vw, 40px)",
                    fontFamily: "Space Grotesk",
                    fontWeight: "bold",
                    color: "#444",
                  }}>
                  {count3}+
                </h3>
                <p
                  style={{
                    fontSize: "clamp(12px, 2.5vw, 25px)",
                    fontFamily: "Space Grotesk",
                    fontWeight: "bold",
                    color: "#444",
                  }}>
                  Awards Won
                </p>
              </div>

              <div
                style={{
                  height: "clamp(20px, 5vw, 35px)",
                  width: "clamp(20px, 5vw, 35px)",
                  background: `url(${icon2})`,
                  backgroundSize: "cover",
                  marginLeft: "clamp(10px, 4vw, 50px)",
                }}></div>
            </div>

            <span
              style={{
                display: "flex",
                height: "clamp(80px, 15vw, 150px)",
                width: "clamp(80px, 20vw, 200px)",
                background:
                  "linear-gradient(90deg, rgb(182, 11, 11) 0%, rgb(255, 56, 56) 100%)",
                clipPath: "polygon(50% 0, 100% 0, 100% 100%, 0 100%)",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontSize: "clamp(1rem, 3vw, 1.5rem)",
                fontWeight: "bold",
                fontFamily: "Space Grotesk",
              }}></span>
          </div>
        </motion.div>
      </div>
    </>
  );
}
