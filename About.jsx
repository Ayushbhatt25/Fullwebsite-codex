import React, { useEffect, useState, useRef } from "react";
import { FaLightbulb, FaShieldAlt, FaUserCog, FaChartLine } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { hover, motion } from "framer-motion";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Link } from "react-router-dom";

import "./About.css";
import blog3 from "../Assets/blog3.jpeg";
import s1 from "../Assets/s1.jpg";
import s2 from "../Assets/s2.jpg";
import s3 from "../Assets/s3.jpg";
import re from "../Assets/re.jpg";
import gr from "../Assets/gr.jpg";
import ex from "../Assets/ex.jpg";
import inn from "../Assets/inn.jpg";
import m1 from "../Assets/m1.png";
import digital from "../Assets/digital.png";
import app1 from "../Assets/app1.png";
import on from "../Assets/on.png";
import uiux from "../Assets/uiux.png";
import web1 from "../Assets/web1.jpeg";



gsap.registerPlugin(ScrollTrigger);


export default function Hero() {

const sectionRef = useRef(null);
const [count1, setCount1] = useState(0);
const [count2, setCount2] = useState(0);
const [count3, setCount3] = useState(0);

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

        animateCounter(setCount1, 120);
        animateCounter(setCount2, 95);
        animateCounter(setCount3, 24);

        observer.disconnect(); // run only once
      }
    },
    { threshold: 0.5 }
  );

  if (sectionRef.current) {
    observer.observe(sectionRef.current);
  }

}, []);


  const [progress, setProgress] = useState({
    card1: 0,
    card2: 0,
    card3: 0,
  });

  const scrollRef = useRef(null);
  const mm = gsap.matchMedia();

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -320,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 320,
      behavior: "smooth",
    });
  };

  
 const containerRef = useRef(null);
  const box1Ref = useRef(null);
  const box2Ref = useRef(null);
  const box3Ref = useRef(null);
  const box4Ref = useRef(null);
  const box5Ref = useRef(null);

  useEffect(() => {
    const interval1 = setInterval(() => {
      setProgress((prev) => {
        if (prev.card1 >= 95) {
          clearInterval(interval1);
          return prev;
        }
        return { ...prev, card1: prev.card1 + 1 };
      });
    }, 50);

    const interval2 = setInterval(() => {
      setProgress((prev) => {
        if (prev.card2 >= 85) {
          clearInterval(interval2);
          return prev;
        }
        return { ...prev, card2: prev.card2 + 1 };
      });
    }, 60);

    const interval3 = setInterval(() => {
      setProgress((prev) => {
        if (prev.card3 >= 88) {
          clearInterval(interval3);
          return prev;
        }
        return { ...prev, card3: prev.card3 + 1 };
      });
    }, 70);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
    };
  }, []);

  useEffect(() => {
    if (
      !containerRef.current ||
      !box1Ref.current ||
      !box2Ref.current ||
      !box3Ref.current ||
      !box4Ref.current ||
      !box5Ref.current
    )
      return;


    gsap.to(box3Ref.current, {
      height: "600px",        
      width: "300%",          
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",     
        end: "bottom 0%",      
        scrub: true,
        markers: false,       
        invalidateOnRefresh: true,
      },
    });

    gsap.to([box4Ref.current, box5Ref.current], {
      height: "700px",        
      opacity: -0.5,
      x:500,          
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 2%",
        end: "bottom 60%",
        
        scrub: true,
        markers: false,
        invalidateOnRefresh: true,
      },
    });
    gsap.to([box1Ref.current, box2Ref.current], {
      height: "700px", 
      opacity: -0.5,
      x:-500,           
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 2%",
        end: "bottom 60%",
        
        scrub: true,
        markers: false,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);



  const [isHeroVisible, setIsHeroVisible] = useState(false);

  useEffect(() => {
    const heroElement = document.getElementById("hero");
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

  
  const features = [
    {
      icon:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.70" stroke="currentColor" class="size-8">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
</svg>
,
      title: "Affordable & Scalable",
      text: "We offer flexible packages suitable for businesses of all sizes.",
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-9">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
</svg>
 ,
      title: "Commitment to Excellence",
      text: "Quality, precision, and performance in everything we do.",
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-8">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
</svg>
 ,
      title: "24/7 Support",
      text: "Our dedicated support team is always here to assist you with any challenges.",
    },
  ];


  const cardStyle = {
  minWidth: "300px",
  height: "400px",
  // boxShadow: "0px 18px 60px rgba(105, 203, 200, 0.18)",
  borderRadius: "10px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  transition: "0.3s",
  cursor: "pointer",
};

  const services = [
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10" color="#ef4444">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
</svg>
,
    title: "Web Development",
    description: "Modern responsive websites for businesses.",
    button:"Explore",
    backgroundImage: `${ web1 }`,
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10" color="#ef4444">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
</svg>
,
    title: "UI UX Design",
    description: "User-centered design for better experience.",
    button:"Explore",
    backgroundImage: `${ uiux }`,
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10" color="#ef4444">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
</svg>
,
    title: "App Development",
    description: "Powerful mobile applications.",
    button:"Explore",
    backgroundImage: `${ app1 }`,
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10" color="#ef4444">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
</svg>
,
    title: "Digital Marketing",
    description: "Grow your brand with smart marketing.",
    button:"Explore",
    backgroundImage: `${ digital }`,
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10" color="#ef4444">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
</svg>
,
    title: "Online Courses",
    description: "Learn in-demand skills with structured, industry-relevant programs.",
    button:"explore",
    backgroundImage: `${ on }`,
  },
];


  return (
    <>
      <div className="primary-box">
        <nav className={`mini-navbar ${isHeroVisible ? "hidden" : ""}`}>
          <div className="nav-links">
            <button className="nav-btn">Home</button>
            <button className="nav-btn">Services</button>
            <button className="nav-btn"
            ><Link to="/Privacy"
            style={{
              textDecoration:'none',
              color:'#fff',
            }}>Privacy</Link></button>
            <button className="nav-btn"><Link to="/Fullstack"
            style={{
              textDecoration:'none',
              color:'#fff',
            }}>Career</Link></button>
            <button className="nav-btn">FAQs</button>
          </div>
        </nav>

        <div id="hero" style={{ backgroundImage: `url(${blog3})`,
            height:'600px' }}>
          <div className="overlay"></div>

          <div className="hero-content">
            <motion.h1
              className="title"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              viewport={{ once: true }}
            >
              About CodeXConquer
            </motion.h1>

            <motion.p
              className="text"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
              viewport={{ once: true }}
            >
              Your trusted technology solutions provider specializing in app
              development, digital marketing, and web development services for
              businesses of all sizes.
            </motion.p>

            <motion.a
              href="https://codexconquer.com/contact/"
              className="btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 2.3 }}
              viewport={{ once: true }}
            >
              Get in Touch
            </motion.a>
          </div>
        </div>
      </div>


      <div
      ref={containerRef}
      className="box-container"
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        position:'relative',
        overflowX: 'hidden',
        
      }}
    >
      <div
        ref={box1Ref}
        className="box1"
        style={{
          height: "500px",
          width: "300px",
          backgroundImage: `linear-gradient(135deg, rgba(239,68,68,0.6), rgba(59,130,246,0.6)), url(${re})`,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
          borderTopRightRadius: "10px",
          borderBottomRightRadius:"10px"
        }}
      ></div>

      <div
        ref={box2Ref}
        className="box2"
        style={{
          height: "550px",
          width: "300px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
          borderRadius: "25px",
        }}
      >
        <motion.div
          className="box2-child"
          style={{
    height: "250px",
    width: "250px",
    borderRadius: "10px",
    alignContent: "center",
    justifyItems: "center",
    backgroundImage: `linear-gradient(135deg, rgba(239,68,68,0.6), rgba(59,130,246,0.6)), url(${inn})`,   
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  }}
  whileHover={{ scale: 1.05 }}
        >
          <FaLightbulb
          style={{
            height:'100px',
            width:'50px',
            color:'#ef4444',
            zIndex: 2

          }} />
          <h3
          style={{ 
          zIndex: 2, 
          fontFamily: 'Space Grotesk',
          }}>Innovation</h3>
        </motion.div>
  <motion.div
  className="box2-child"
  style={{
    height: "250px",
    width: "250px",
    borderRadius: "10px",
    alignContent: "center",
    justifyItems: "center",
    backgroundImage: `linear-gradient(135deg, rgba(239,68,68,0.6), rgba(59,130,246,0.6)), url(${re})`,   
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "white"
  }}
  whileHover={{ scale: 1.05 }}
>
  <FaShieldAlt
    style={{
      height: "100px",
      width: "50px",
      color: "#ef4444",
      zIndex: 2
    }}
  />

  <h3 style={{ 
    zIndex: 2,
    fontFamily: 'Space Grotesk',
    }}>Reliability</h3>
</motion.div>
      </div>

      <div
  ref={box3Ref}
  className="box3"
  style={{
    height: "550px",
    width: "300px",
    // backgroundImage:"radial-gradient(circle at 0 0, #ef44442e, #0000 55%), radial-gradient(circle at 100% 100%, #38bdf82e, #0000 55%)",
    borderRadius: "10px",
    border: "1px solid #ef4444",
    boxShadow: 'rgba(15, 23, 42, 0.18) 0px 18px 60px',
    overflow: "hidden",
    position: "relative",
  }}
>
       <motion.div
            className="story-card"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            style={{
              textAlign:'center',
              marginTop:'80px'
            }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Our Story
            </motion.h1>

            <motion.p
              className="subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              How we started and our journey to becoming a leading technology
              solutions provider.
            </motion.p>

            <motion.p
              className="description"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              At CodeXConquer, we believe technology should simplify challenges
              and drive growth. We have helped hundreds of brands across
              e-commerce, education, healthcare, and fintech build innovative,
              secure, and results-driven solutions. We combine creativity,
              technical expertise, and strategy to deliver high-performing,
              visually appealing solutions. We prioritize transparency, client
              satisfaction, and long-term partnerships to achieve client goals.
            </motion.p>

            <motion.a
              href="https://codexconquer.com/services/"
              className="btn-primary"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(5, 94, 210, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              viewport={{ once: true }}
            >
              Get Services
              <span className="btn-arrow">→</span>
            </motion.a>
          </motion.div>
      </div>

      <div
        ref={box4Ref}
        className="box4"
        style={{
          height: "550px",
          width: "300px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
          borderRadius: "25px",
          alignContent:'center',
          justifyItems:'center'
        }}
      >
      <motion.div
  className="box4-child"
  style={{
    height: "250px",
    width: "250px",
    borderRadius: "10px",
    alignContent: "center",
    justifyItems: "center",
    backgroundImage: `linear-gradient(135deg, rgba(239,68,68,0.6), rgba(59,130,246,0.6)), url(${ex})`,   
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "white"
  }}
  whileHover={{ scale: 1.05 }}
>
<FaUserCog 
style={{
      height: "100px",
      width: "50px",
      color: "#ef4444",
      zIndex: 2
    }}/>
          <h3
          style={{ 
          zIndex: 2,
          fontFamily: 'Space Grotesk', 
          }}>Expertise</h3>
</motion.div>
        <motion.div
          className="box4-child"
          style={{
    height: "250px",
    width: "250px",
    borderRadius: "10px",
    alignContent: "center",
    justifyItems: "center",
    backgroundImage: `linear-gradient(135deg, rgba(239,68,68,0.6), rgba(59,130,246,0.6)), url(${gr})`,   
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "white"
  }}
  whileHover={{ scale: 1.05 }}
        >
          <FaChartLine style={{
      height: "100px",
      width: "50px",
      color: "#ef4444",
      zIndex: 2
    }} />
          <h3
          style={{ 
          zIndex: 2,
          fontFamily: 'Space Grotesk',
          }}>Growth</h3>
        </motion.div>
      </div>

      <div
        ref={box5Ref}
        className="box5"
        style={{
          height: "500px",
          width: "300px",
          backgroundImage: `linear-gradient(135deg, rgba(239,68,68,0.6), rgba(59,130,246,0.6)), url(${gr})`,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
          borderTopLeftRadius: "10px",
          borderBottomLeftRadius:"10px"
        }}
      ></div>
    </div>


    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        backgroundColor: "#fff",
        boxShadow: "0px 18px 60px rgba(15, 23, 42, 0.18)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "60px 0",
        gap: "50px",
        overflow:'hidden'
      }}
    >

      {/* Title */}
      <div style={{ textAlign: "center",}}>
        <h2 style={{ 
          fontFamily: 'Space Grotesk',
          fontSize: "clamp(0.8rem,1.5vw,1rem)", 
          fontWeight:'bold', 
          color:'#ef4444',
          letterSpacing:'0.2rem' 
          }}>OUR SERVICES</h2>
        <p style={{ 
          fontFamily: 'Space Grotesk',
          fontSize: "clamp(1.8rem,4vw,3rem)", 
          fontWeight:'bold', 
          }}>Explore everything we offer to elevate your business.</p>
      </div>

      {/* Slider */}
      <div
  style={{
    position: "relative",
    width: "80%",
  }}
>

  {/* Left Arrow */}
  <button
    onClick={scrollLeft}
    style={{
      height: "200px",
      width: "200px",
      position: "absolute",
      left: "-270px",
      top: "50%",
      transform: "translateY(-50%)",
      background: "#ef4444",
      color: "#fff",
      border: "none",
      padding: "40px",
      borderRadius: "50%",
      cursor: "pointer",
      fontSize: "18px",
      overflow: "hidden"
    }}
  >
    <FaArrowLeft style={{ justifySelf:'flex-end', }}/>
  </button>

  {/* Cards Container */}
  <div
    ref={scrollRef}
    style={{
      display: "flex",
      gap: "30px",
      overflowX: "auto",
      scrollBehavior: "smooth",
      padding: "20px"
    }}
    className="services-scroll"
  >

    {services.map((service, index) => (
      <div
        key={index}
        className="service-card"
        style={{
          ...cardStyle,
          backgroundImage: `url(${service.backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          overflow: "hidden"
        }}

        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-10px)";
        }}

        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >

        {/* Overlay */}
        <div className="card-overlay">

          <div
            style={{
              height: "50px",
              width: "50px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "3px solid #ef4444",
              borderRadius: "10px"
            }}
          >
            {service.icon}
          </div>

          <h3
            style={{
              margin: "10px",
              fontFamily: "'Space Grotesk', sans-serif",
              color: "#fff"
            }}
          >
            {service.title}
          </h3>

          <p
            style={{
              padding: "0 20px",
              textAlign: "center",
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "1.05rem",
              color: "#fff"
            }}
          >
            {service.description}
          </p>

          <button
            style={{
              height: "30px",
              width: "100px",
              border: "2px solid #ef4444",
              borderRadius: "25px",
              color: "#ef4444",
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "1.05rem",
              fontWeight: "bold",
              background: "#fff"
            }}
          >
            {service.button}
          </button>

        </div>

      </div>
    ))}

  </div>

  {/* Right Arrow */}
  <button
    onClick={scrollRight}
    style={{
      height: "200px",
      width: "200px",
      position: "absolute",
      right: "-270px",
      top: "50%",
      transform: "translateY(-50%)",
      background: "#ef4444",
      color: "#fff",
      border: "none",
      padding: "40px",
      borderRadius: "50%",
      cursor: "pointer",
      fontSize: "18px"
    }}
  >
    <FaArrowRight />
  </button>

</div>

      {/* Hide Scrollbar */}
      <style>
        {`
        .services-scroll::-webkit-scrollbar {
          display: none;
        }
        `}
      </style>

    </div>

      <motion.div
        className="why-choose-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1>WHY CHOOSE CODEXCONQUER</h1>
        </motion.div>
        <motion.div
          className="section-header-description"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p style={{fontFamily: 'Space Grotesk',}}>Your Preferred Technology Partner</p>
        </motion.div>

        <div className="feature-grid">
          <motion.div
            className="feature-card"
            whileHover={{ y: -15 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="card-image">
              <img src={s1} alt="Experienced Team" />
              <div className="image-overlay" />
            </div>
            <div className="card-content">
              <h3>Experienced Team</h3>
              <p>
                Our developers, marketers, and designers bring years of industry
                experience to the table.
              </p>
              <div className="progress-container">
                <div className="progress-header">
                  <span className="progress-percentage">{progress.card1}%</span>
                </div>
                <div className="progress-bar">
                  <motion.div
                    className="progress-fill"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress.card1}%` }}
                    transition={{ duration: 1 }}
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="feature-card"
            whileHover={{ y: -15 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="card-image">
              <img src={s2} alt="Customer-Centric Approach" />
              <div className="image-overlay" />
            </div>
            <div className="card-content">
              <h3>Customer-Centric Approach</h3>
              <p>
                We listen, understand, and tailor solutions that fit your
                business goals.
              </p>
              <div className="progress-container">
                <div className="progress-header">
                  <span className="progress-percentage">{progress.card2}%</span>
                </div>
                <div className="progress-bar">
                  <motion.div
                    className="progress-fill"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress.card2}%` }}
                    transition={{ duration: 1 }}
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="feature-card"
            whileHover={{ y: -15 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="card-image">
              <img src={s3} alt="Cutting-Edge Technology" />
              <div className="image-overlay" />
            </div>
            <div className="card-content">
              <h3>Cutting-Edge Technology</h3>
              <p>
                We stay ahead of trends to ensure your digital solutions are
                modern and future ready.
              </p>
              <div className="progress-container">
                <div className="progress-header">
                  <span className="progress-percentage">{progress.card3}%</span>
                </div>
                <div className="progress-bar">
                  <motion.div
                    className="progress-fill"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress.card3}%` }}
                    transition={{ duration: 1 }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.section
      ref={sectionRef}
    style={{
    padding: "clamp(3rem,6vw,6rem) 1rem",
    background: "#1b1c35",
    position: "relative",
    overflow: "hidden",
  }}
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>

  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
      gap: "clamp(2rem,5vw,4rem)",
      alignItems: "center",
    }}>
    <div>
      <motion.span
        style={{
          background: "#f5e0ff",
          color: "#ef4444",
          padding: "6px 14px",
          borderRadius: "50px",
          fontWeight: 600,
          fontSize: "14px",
          display: "inline-block",
          fontFamily: "Space Grotesk",
        }}
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        OVER 100+ CLIENTS
      </motion.span>

      <motion.h2
        style={{
          fontSize: "clamp(1.8rem,4vw,3rem)",
          fontWeight: "bold",
          color: "#f5f0e8",
          fontFamily: "Space Grotesk",
          lineHeight: 1.3,
          marginBottom: "20px",
        }}
      >
        Discover What Makes Us The Preferred Technology Partner
      </motion.h2>

      <motion.div
        className="feature-image"
        style={{ marginBottom: "30px" }}
      >
        <img
          src={m1}
          alt="Feature"
          style={{
            width: "100%",
            maxWidth: "100%",
            borderRadius: "12px",
          }}
        />
      </motion.div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
          width: "100%",
          maxWidth: "500px",
          color: "white",
          marginLeft: "clamp(0px,4vw,40px)",
        }}
      >
        <div>
          <h3
            style={{
              fontSize: "clamp(22px,3vw,30px)",
              color: "white",
              fontFamily: "Space Grotesk",
              fontWeight: "bold",
            }}
          >
            {count1}+
          </h3>
          <p
            style={{
              fontSize: "15px",
              color: "#9ca3af",
              fontFamily: "Space Grotesk",
            }}
          >
            Projects
          </p>
        </div>

        <div>
          <h3
            style={{
              fontSize: "clamp(22px,3vw,30px)",
              color: "white",
              fontFamily: "Space Grotesk",
              fontWeight: "bold",
            }}
          >
            {count2}%
          </h3>
          <p
            style={{
              fontSize: "15px",
              color: "#9ca3af",
              fontFamily: "Space Grotesk",
            }}
          >
            Client Success
          </p>
        </div>

        <div>
          <h3
            style={{
              fontSize: "clamp(22px,3vw,30px)",
              color: "white",
              fontFamily: "Space Grotesk",
              fontWeight: "bold",
            }}
          >
            {count3}/7
          </h3>
          <p
            style={{
              fontSize: "15px",
              color: "#9ca3af",
              fontFamily: "Space Grotesk",
            }}
          >
            Support
          </p>
        </div>
      </div>
    </div>


    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      {features.map((item, index) => (
        <motion.div
          key={index}
          whileHover={{
            y: -8,
            scale: 1.02,
          }}
          style={{
            display: "flex",
            gap: "16px",
            background: "#fff",
            backdropFilter: "blur(5px)",
            padding: "clamp(16px,2vw,22px)",
            borderRadius: "14px",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div
            style={{
              color: "#ef4444",
            }}
          >
            {item.icon}
          </div>

          <div>
            <h4
              style={{
                color: "#ef4444",
                marginBottom: "6px",
                fontSize: "clamp(18px,2vw,24px)",
                fontWeight: "bold",
                fontFamily: "Space Grotesk",
              }}
            >
              {item.title}
            </h4>

            <p
              style={{
                color: "black",
                fontSize: "clamp(0.95rem,1.5vw,1.2rem)",
                lineHeight: "1.5",
                fontFamily: "Space Grotesk",
              }}
            >
              {item.text}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</motion.section>

      <div className="header">
        <h2>OUR VISION & MISSION</h2>
        <p className="subhead">Guiding principles that drive everything we do.</p>

        <div className="cards-grid">
          <div className="card vision">
            <div className="card-number">1</div>
            <h3>Our Vision</h3>
            <p className="card-description">
              To empower businesses by transforming innovative ideas into
              seamless digital experiences that drive growth.
            </p>
            <ul className="feature-list">
              <li>
                <span className="check-icon">✓</span> Digital Transformation
              </li>
              <li>
                <span className="check-icon">✓</span> Business Growth
              </li>
              <li>
                <span className="check-icon">✓</span> Seamless Experience
              </li>
            </ul>
          </div>

          <div className="card mission">
            <div className="card-number">2</div>
            <h3>Our Mission</h3>
            <p className="card-description">
              To deliver high quality digital solutions that help businesses
              grow, stay competitive, & succeed in a rapidly changing world.
            </p>
            <ul className="feature-list">
              <li>
                <span className="check-icon">✓</span> Quality Digital Solutions
              </li>
              <li>
                <span className="check-icon">✓</span> Business Efficiency
              </li>
              <li>
                <span className="check-icon">✓</span> Customer Focus
              </li>
            </ul>
          </div>
        </div>

        <motion.a
          href="https://codexconquer.com/contactus/"
          className="btn-second"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 25px rgba(5, 94, 210, 0.3)",
          }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          viewport={{ once: true }}
        
        >
          GET IN TOUCH TODAY
          <span className="btn-arrow">→</span>
        </motion.a>
      </div>
    </>
  );
}
