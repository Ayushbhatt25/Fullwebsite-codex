import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";


import dev from "../Assets/dev.jpeg";
import pp from "../Assets/pp.jpeg";
import ap from "../Assets/ap.png";
import star from "../Assets/star.png";

import ai from "../Assets/ai.jpg";
import fb from "../Assets/fb.jpeg";
import dk from "../Assets/dk.jpeg";
import rd from "../Assets/rd.jpg";
import cbs from "../Assets/cbs.jpeg";
import ps from "../Assets/ps.jpeg";


export default function Fullstack() {

  gsap.to("#star", {
  rotate: "+=360",
  duration: 7,     
  repeat: -1,      
  ease: "none" 
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

  const responsibilities = [
    {
      title: "Frontend Development",
      desc: "Build responsive UI using HTML, CSS, JavaScript & modern frameworks",
    },
    {
      title: "Backend Development",
      desc: "Develop APIs and manage server-side logic",
    },
    {
      title: "Database Management",
      desc: "Design and optimize scalable data storage systems",
    },
    {
      title: "System Integration",
      desc: "Connect frontend with backend for smooth data flow",
    },
    {
      title: "Performance & Security",
      desc: "Ensure speed, scalability, and secure architecture",
    },
    {
      title: "Debugging",
      desc: "Identify and fix issues across the full stack",
    },
    {
      title: "Collaboration",
      desc: "Work with ui/ux designers & product teams",
    },
    {
      title: "Continuous Learning",
      desc: "Stay updated with latest technologies & trends",
    },
  ];

  return (
    <>
      <div className='primary-container'>
        <nav className={`mini-navbar ${isHeroVisible ? "hidden" : ""}`}>
          <div className="nav-links">
            <button className="nav-btn">Home</button>
            <button className="nav-btn">Services</button>
            <button className="nav-btn">
              <Link
                to="/Privacy"
                style={{
                  textDecoration: "none",
                  color: "#fff",
                }}
              >
                Privacy
              </Link>
            </button>
            <button className="nav-btn">
              <Link
                to="/Fullstack"
                style={{
                  textDecoration: "none",
                  color: "#fff",
                }}
              >
                Career
              </Link>
            </button>
            <button className="nav-btn">FAQs</button>
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
            backgroundImage: `url(${pp})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
            padding: "clamp(1rem, 5vw, 3rem)",
          }}
        >
          {/* left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{
              flex: "1 1 300px",
              maxWidth: "600px",
            }}
          >
            <h1
              style={{
                fontFamily: "Space Grotesk",
                fontSize: "clamp(2rem, 6vw, 4.5rem)",
                fontWeight: "700",
                color: "#fff",
                lineHeight: "1.2",
                marginBottom: "20px",
              }}
            >
              We’re <span style={{ color: "#ef4444" }}>Hiring </span>
              <br /> Full Stack <br />
              Developers
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
              }}
            >
              Join our team to build scalable web applications and deliver
              seamless digital experiences. Work with modern technologies, solve
              real-world challenges, and grow your career with us.
            </motion.p>
            <motion.div
              className="hero-btn"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              style={{
                display: "flex",
                gap: "15px",
                flexWrap: "wrap",
              }}
            >
              <motion.a
                href="https://codexconquer.com/job-application/"
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
                }}
              >
                Apply Now
              </motion.a>
              <motion.a
                href="#learn"
                whileHover={{ scale: 1.05, borderColor: "#fff", color: "#fff" }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                style={{
                  padding: "12px 28px",
                  border: "2px solid #ef4444",
                  color: "#ef4444",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontWeight: "600",
                  display: "inline-block",
                  cursor: "pointer",
                }}
              >
                Learn More
              </motion.a>
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
              borderRadius: "200px 0px 0px 350px",
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "relative",
              overflow: "hidden",
              borderLeft: "10px solid #ef4444",
            }}
          >
            <motion.div
              className="hero-image"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              style={{
                width: "calc(100% - 10px)",
                height: "calc(100% - 30px)",
                borderRadius: "200px 200px 0px 0px",
                backgroundImage: `url(${ap})`,
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
          <div id="star"
          style={{
          height: "clamp(60px, 10vw, 100px)",
          width: "clamp(60px, 10vw, 100px)",
          position: 'absolute',
          backgroundImage: `url(${star})`,
          backgroundSize: "cover",}}>

          </div>

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
            borderTop: "2px solid #ef4444",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "clamp(20px, 5vw, 40px)",
            padding: "clamp(20px, 5vw, 60px)",
          }}
        >
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
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
            }}
          >
            <div
              style={{
                width: "100%",
                height: "auto",
                aspectRatio: "16/5",
                backgroundImage: `url(${dev})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                overflow: "hidden",
                borderRadius: "10px 10px 0 0",
                marginBottom: "20px",
              }}
            />

            <p style={{ fontFamily: "Space Grotesk", fontSize: "clamp(0.9rem, 2.5vw, 1rem)" }}>
              <b>CodeXConquer</b> is looking for a skilled and motivated Full Stack Developer
              to build complete, scalable, and high-performance web applications. The ideal
              candidate will work across both front-end and back-end technologies,
              collaborating with designers, product teams, and stakeholders to deliver
              seamless user experiences and robust server-side functionality.
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "50px",
                gap: "5px",
              }}
            >
              <p
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "bold",
                  color: "#ef4444",
                  fontFamily: "Space Grotesk",
                  letterSpacing: "0.1rem",
                  gap: "10px",
                }}
              >
                <div
                  style={{
                    width: "50px",
                    height: "1px",
                    backgroundColor: "#ef4444",
                    borderRadius: "2px",
                  }}
                />
                KEY RESPONSIBILITIES
              </p>

              <p
                style={{
                  fontSize: "clamp(1.5rem, 5vw, 2rem)",
                  fontWeight: "bold",
                  color: "black",
                  fontFamily: "Space Grotesk",
                }}
              >
                Design, develop, and deliver seamless full-stack solutions
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
                    padding: "clamp(15px, 2vw, 20px)",
                    borderRadius: "16px",
                    background: "#fff",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                  }}
                >
                  <h5
                    style={{
                      marginBottom: "10px",
                      color: "#ef4444",
                      fontFamily: "Space Grotesk",
                      fontSize: "clamp(1rem, 3vw, 1.2rem)",
                    }}
                  >
                    {item.title}
                  </h5>
                  <p
                    style={{
                      color: "#111",
                      fontSize: "clamp(0.9rem, 2.5vw, 1rem)",
                      fontFamily: "Space Grotesk",
                    }}
                  >
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              flex: "1",
              minWidth: "280px",
              background: "#fff",
              borderRadius: "10px",
              padding: "clamp(20px, 3vw, 25px)",
              boxShadow: "0 15px 40px rgba(0,0,0,0.08)",
              fontFamily: "Space Grotesk",
              position: "sticky",
              top: "100px",
              alignSelf: "flex-start",
            }}
          >
            <h3
              style={{
                fontSize: "clamp(1.3rem, 4vw, 1.5rem)",
                fontWeight: "600",
                fontFamily: "Space Grotesk",
                color: "#ef4444",
              }}
            >
              Job Summary
            </h3>

            {[,<hr></hr>,
              { label: "Location :", value: "Remote" },
              { label: "Job Title :", value: "Full Stack Developer" },
              { label: "Experience :", value: "2 - 3 Years" },
              { label: "Working Time :", value: "09:00 AM to 06:00 PM" },
            ].map((item, index) => {
              if (index === 0) return item;
              const typedItem = item;
              return (
                <div
                  key={index}
                  style={{
                    marginBottom: "15px",
                    paddingBottom: "10px",
                    borderBottom: "1px solid #ef4444",
                  }}
                >
                  <p
                    style={{
                      fontSize: "clamp(1rem, 3vw, 1.1rem)",
                      color: "#111",
                      fontWeight: "bold",
                      marginBottom: "5px",
                      fontFamily: "Space Grotesk",
                    }}
                  >
                    {typedItem.label}
                  </p>
                  <p
                    style={{
                      fontSize: "clamp(1rem, 3vw, 1.1rem)",
                      color: "#111",
                      fontFamily: "Space Grotesk",
                    }}
                  >
                    {typedItem.value}
                  </p>
                </div>
              );
            })}

            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <motion.a
                href="https://codexconquer.com/job-application/"
                whileHover={{ scale: 1.05, backgroundColor: "#ef4444", color: "#fff" }}
                style={{
                  display:'flex',
                  width: "50%",
                  padding: "12px",
                  border: "1px solid #ef4444",
                  borderRadius: "10px",
                  color: "#ef4444",
                  fontSize: "1rem",
                  fontWeight: "600",
                  cursor: "pointer",
                  background: "#fff",
                  textDecoration:'none',
                  justifyContent:'center'
                }}
              >
                Apply Now
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* last content */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={containerVariants}
          style={{
            width: "100%",
            fontFamily: "Space Grotesk",
            padding: "clamp(30px, 5vw, 60px)",
          }}
        >
          {/* Heading */}
          <motion.p
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "clamp(1rem, 3vw, 1.2rem)",
              color: "#ef4444",
              letterSpacing: "0.1rem",
              gap: "10px",
              fontFamily: "Space Grotesk",
            }}
          >
            <div
              style={{
                width: "50px",
                height: "1px",
                backgroundColor: "#ef4444",
                fontFamily: "Space Grotesk",
              }}
            ></div>
            REQUIREMENT
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{
              fontSize: "clamp(1.5rem, 5vw, 2rem)",
              fontWeight: "bold",
              color: "black",
              marginBottom: "40px",
              fontFamily: "Space Grotesk",
            }}
          >
            The key skills and knowledge required to succeed in this role.
          </motion.p>

          {/* Cards */}
          <motion.div
            variants={containerVariants}
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "clamp(20px, 4vw, 35px)",
              justifyContent: "center",
            }}
          >
            {[
              {
                title: "Frontend Basics",
                desc: "HTML, CSS, and JavaScript fundamentals for building UI.",
                img: `${fb}`,
              },
              {
                title: "Database Knowledge",
                desc: "Understanding of data handling and database systems.",
                img: `${dk}`,
              },
              {
                title: "Responsive Design",
                desc: "Ability to create layouts that adapt to all screen sizes.",
                img: `${rd}`,
              },
              {
                title: "API Integration",
                desc: "Working with APIs and application architecture concepts.",
                img: `${ai}`,
              },
              {
                title: "Cross-browser Support",
                desc: "Ensure compatibility across different browsers.",
                img: `${cbs}`,
              },
              {
                title: "Problem Solving",
                desc: "Strong analytical mindset and eagerness to learn.",
                img: `${ps}`,
              },
              
              
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                  boxShadow: "0 25px 60px rgba(0,0,0,0.15)",
                }}
                style={{
                  flex: "1 1 330px",
                  maxWidth: "400px",
                  borderRadius: "16px",
                  overflow: "hidden",
                  background: "#fff",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                  cursor: "pointer",
                }}
              >
                {/* Image */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  style={{
                    height: "200px",
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${item.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />

                {/* Content */}
                <div style={{ padding: "clamp(15px, 3vw, 18px)" }}>
                  <h4
                    style={{
                      marginBottom: "8px",
                      color: "#ef4444",
                      fontSize: "clamp(1rem, 3vw, 1.2rem)",
                      fontWeight: "600",
                      fontFamily: "Space Grotesk",
                    }}
                  >
                    {item.title}
                  </h4>

                  <p
                    style={{
                      fontSize: "clamp(0.9rem, 2.5vw, 1rem)",
                      color: "#111",
                      lineHeight: "1.5",
                      fontFamily: "Space Grotesk",
                    }}
                  >
                    {item.desc}
                  </p>

                  
                </div>
              </motion.div>
            ))}
            
          </motion.div>
        </motion.div>
        <div style={{
          display:'flex',
          justifyContent:'center',
          marginBottom:'50px',
          

        }}>
          <motion.a
                href="https://codexconquer.com/job-application/"
                whileHover={{ scale: 1.05, backgroundColor: "#ef4444", color: "#fff" }}
                style={{
                  display:'flex',
                  width: "200px",
                  padding: "12px",
                  border: "1px solid #ef4444",
                  borderRadius: "10px",
                  color: "#ef4444",
                  fontSize: "1rem",
                  fontWeight: "600",
                  cursor: "pointer",
                  background: "#fff",
                  textDecoration:'none',
                  justifyContent:'center'

                }}
              >
                Apply Now
              </motion.a>
        </div>
      </div>
      
    </>
  );
}