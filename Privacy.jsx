import React from "react";
import { useEffect, useState } from "react";
import pp from "../Assets/pp.jpeg";
import { motion } from "framer-motion";

export default function Privacy() {
  const [activeIndex, setActiveIndex] = useState(null);

  const accordionData = [
    {
      title: "1. Introduction",
      content:
        "This Privacy Policy describes how CodexConquer (“we,” “us,” or “our”) collects, uses, and shares your personal information when you use our services or interact with our website.",
    },
    {
      title: "2. Information We Collect",
      content: (
        <>
          <p className="text-gray-700 mb-4">
            We may collect the following types of information:
          </p>

          <h5 className="text-2xl font-semibold text-gray-800 mb-2">
            Personal Information
          </h5>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
            <li>
              Name and contact details (email address, phone number, etc.)
            </li>
            <li>Billing and payment information</li>
            <li>Account credentials</li>
            <li>Demographic information</li>
          </ul>

          <h5 className="text-2xl font-semibold text-gray-800 mb-2">
            Technical Information
          </h5>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
            <li>IP address and device information</li>
            <li>Browser type and version</li>
            <li>Pages visited and time spent on our website</li>
            <li>Cookies and tracking data</li>
          </ul>

          <h5 className="text-2xl font-semibold text-gray-800 mb-2">
            Usage Data
          </h5>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Information about how you use our services</li>
            <li>Preferences and feedback</li>
            <li>Course progress and completion data</li>
          </ul>
        </>
      ),
    },
    {
      title: "3. How We Use Information",
      content: (
        <>
          <p className="text-gray-700 mb-2">
            We use your information for the following purposes:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>To provide and maintain our services</li>
            <li>To process your transactions and send related information</li>
            <li>
              To personalize your experience with our online courses and other
              services
            </li>
            <li>
              To communicate with you about updates, security alerts, and
              support messages
            </li>
            <li>
              To improve our website, SMM services, web development offerings,
              and app development solutions
            </li>
            <li>To detect and prevent fraud and abuse</li>
          </ul>
        </>
      ),
    },
    {
      title: "4. Sharing of Information",
      content: (
        <>
          <p className="text-gray-700 mb-2">
            We may share your information with:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
            <li>Service providers who assist in our operations</li>
            <li>
              Business partners in connection with the services we provide
            </li>
            <li>
              Legal authorities when required by law or to protect our rights
            </li>
            <li>Other parties with your consent</li>
          </ul>
          <p className="text-gray-700 font-medium">
            We never sell your personal information to third parties.
          </p>
        </>
      ),
    },
    {
      title: "5. Cookies & Tracking",
      content: (
        <>
          <p className="text-gray-700 mb-2">
            We use cookies and similar tracking technologies to track activity
            on our website and store certain information. Cookies are files with
            a small amount of data that may include an anonymous unique
            identifier.
          </p>
          <p className="text-gray-700">
            You can instruct your browser to refuse all cookies or to indicate
            when a cookie is being sent. However, if you do not accept cookies,
            you may not be able to use some portions of our service.
          </p>
        </>
      ),
    },
    {
      title: "6. Data Security",
      content: (
        <>
          <p className="text-gray-700 mb-2">
            We implement appropriate security measures to protect your personal
            information from unauthorized access, alteration, disclosure, or
            destruction. These include internal reviews of our data collection,
            storage, and processing practices and security measures, as well as
            physical security measures to guard against unauthorized access to
            systems.
          </p>
          <p className="text-gray-700">
            Despite these measures, no method of transmission over the Internet
            or electronic storage is 100% secure, so we cannot guarantee
            absolute security.
          </p>
        </>
      ),
    },
    {
      title: "7. Your Rights",
      content: (
        <>
          <p className="text-gray-700 mb-2">
            Depending on your location, you may have the following rights
            regarding your personal information:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
            <li>Access and receive a copy of your personal data</li>
            <li>Rectify inaccurate personal information</li>
            <li>Request erasure of your personal data</li>
            <li>Object to processing of your personal data</li>
            <li>Data portability</li>
            <li>Withdraw consent at any time</li>
          </ul>
          <p className="text-gray-700">
            To exercise these rights, please contact us using the information
            provided in the Contact Us section.
          </p>
        </>
      ),
    },
    {
      title: "8. Third-Party Links",
      content: (
        <>
          <p className="text-gray-700 mb-2">
            Our website may contain links to other sites that are not operated
            by us. If you click on a third-party link, you will be directed to
            that third party’s site. We strongly advise you to review the
            Privacy Policy of every site you visit.
          </p>
          <p className="text-gray-700">
            We have no control over and assume no responsibility for the
            content, privacy policies, or practices of any third-party sites or
            services.
          </p>
        </>
      ),
    },
    {
      title: "9. Children's Privacy",
      content: (
        <>
          <p className="text-gray-700 mb-2">
            Our services are not intended for use by children under the age of
            13. We do not knowingly collect personally identifiable information
            from children under 13. If you become aware that a child has
            provided us with personal information, please contact us
            immediately.
          </p>
          <p className="text-gray-700">
            If we become aware that we have collected personal information from
            children without verification of parental consent, we take steps to
            remove that information from our servers.
          </p>
        </>
      ),
    },
    {
      title: "10. Policy Updates",
      content: (
        <>
          <p className="text-gray-700 mb-2">
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page
            and updating the “Last updated” date.
          </p>
          <p className="text-gray-700">
            You are advised to review this Privacy Policy periodically for any
            changes. Changes to this Privacy Policy are effective when they are
            posted on this page.
          </p>
        </>
      ),
    },
    {
      title: "11. Contact Us",
      content: (
        <>
          <p className="text-gray-700 mb-2">
            If you have any questions about this Privacy Policy, please contact us:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
            <li>By email: info@codexconquer.com</li>
            <li>By phone: Direct Call (+91 – 7330722274), WhatsApp (+44 – 7448579136)</li>
            <li>By visiting our website: www.codexconquer.com/contactus/</li>
          </ul>
          
        </>
      ),
    },
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <div
        className="hero "
        style={{
          backgroundImage: `url(${pp})`,
          width: "100%",
          height: "500px",
        }}>
        <motion.h1
          className="title"
          style={{
            position: 'relative',
            zIndex:'1',
            textAlign: 'center',
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize:'100px',
            top: '50%',
          }}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}>
          Privacy & Policy
        </motion.h1>
      </div>

      <div className="min-h-screen mt-4  py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mt-5 border mb-4 mx-auto">
          <div className="bg-white  overflow-hidden">
            <div className="p-8 md:p-12">

              <div className="flex  m-4">

                {/* <div className="sm:h-45 lg:h-28 w-1 mt-5"></div> */}

                <div style={{
                  fontFamily:'inter, sans-serif',
                  fontSize:'1.1rem',
                }}>
                <p className=" text-black leading-relaxed mt-3 ">
                  At <b>CodexConquer</b>, we are committed to protecting your privacy
                  and ensuring the security of your personal information.
                </p>
                <p className=" text-black leading-relaxed ">
                This Privacy Policy explains how we collect, use, and
                safeguard your data when you use our services, including
                </p>  
                <p className=" text-black leading-relaxed ">  
                  <b>SMM SERVICES, WEB DEVELOPMENT, APP DEVELOPMENT, and ONLINE
                  COURSES.
                  </b>
                </p>
                </div>
              </div>
              <hr/>

              <div className="mt-4 mb-4  pt-6">
                <div 
                style={{
                  background: '#FCE6E6',
                  margin:'20px',
                  padding:'25px',
                  borderLeft: '4px solid #DC3545',
                  // borderTop: '4px solid #DC3545',
                }}>
                  
                  <div 
                  style={{
                    display:'flex',


                  }}
                  >
                  <div className="flex">
                    <div style={{
                      height:'30px',
                      width:'30px',
                      borderRadius:'50%',
                      backgroundColor:'#DC3545',
                      textAlign:'center',
                      fontSize:'bold',
                      color:'white'
                    }}>
                      <h4
                      style={{
                        margin:'1px'
                      }}
                      >!</h4>
                    </div>
                  <h2 
                  style={{
                    fontFamily:'Inter, Sans-serif',
                    color:'#DC3545',
                    fontSize:'1.3rem',
                    fontWeight:'600',
                    marginLeft:'15px',
                    marginTop:'3px'
                  }}>
                    Recruitment Fraud & Impersonation
                  </h2>
                  </div>
                  </div>

                  <h5
                  style={{
                    fontFamily:'Inter, Sans-serif',
                    color:'black',
                    fontSize:'1rem',
                    fontWeight:'bold',
                    marginTop:'30px'
                  }}
                   >
                    Legal Warning Against Fake Job Advertisements
                  </h5>
                  <p>
                    Any individual, group, or third-party entity found{" "}
                    <b>
                      fraudulently posting job advertisements using the
                      Company’s name, logo, brand identity, or impersonating
                      Company representatives
                    </b>{" "}
                    with the intent to mislead or misguide candidates—will be
                    dealt with <b>strictly under applicable laws</b>.
                    <br/>
                    This includes, but is not limited to:
                  </p>
                  <ul className="list-disc">
                    <li>
                      Posting <b>fake job openings</b> on social media, websites,
                      messaging platforms, or emails
                    </li>
                  </ul>  
                  <h5 style={{
                    fontFamily:'Inter, Sans-serif',
                    color:'black',
                    fontSize:'1rem',
                    fontWeight:'bold',
                    
                  }}>
                      Redirecting candidates to third-party websites or links
                  </h5>
                  <ul className="list-disc">
                    
                    <li>
                      Demanding <b>money, registration fees, security deposits,
                      commissions, gifts, or any form of favoured services</b> in
                      exchange for jobs, interviews, or offers
                    </li>
                    <li>
                      Misrepresenting employment terms, salaries, or recruitment
                      processes
                    </li>
                  </ul>
                  <h5 style={{
                    fontFamily:'Inter, Sans-serif',
                    color:'black',
                    fontSize:'1rem',
                    fontWeight:'bold',
                  }}>
                    Legal Consequences
                  </h5>
                  <li className="list-none">
                    Such fraudulent activities shall be treated as <b>criminal
                    offenses</b>, including cheating, impersonation, identity theft,
                    and cyber fraud. If found guilty, the offender(s) shall be
                    liable for:
                  </li>
                  <ul className="list-disc">
                    <li>
                      <b>Financial penalties ranging from ₹2,00,000 (Two Lakhs) to
                      ₹5,00,000 (Five Lakhs)</b>
                    </li>
                    <li><b>Legal action and criminal prosecution</b>
                    </li>
                    <li>
                      <b>Imprisonment of up to 5 (five) years</b>, as per applicable
                      laws
                    </li>
                  </ul>
                  <p>
                    The Company <b>does not charge any fees at any stage of its
                    recruitment process</b> and does not authorize any third party
                    to collect money or favors on its behalf.
                  </p>
                
                  <h5 style={{
                    fontFamily:'Inter, Sans-serif',
                    color:'black',
                    fontSize:'1rem',
                    fontWeight:'bold',
                  }}>
                    Public Advisory
                  </h5>
                  <p>
                    Candidates are advised to verify all job-related
                    communications only through the Company’s <b>official website,
                    verified email domains, and authorized channels</b>. Any
                    suspicious activity should be reported immediately.
                    <br/>
                    The Company reserves the <b>right to initiate civil and
                    criminal proceedings without prior notice</b> against anyone
                    involved in such fraudulent acts.
                  </p>
                
                </div>
              
              </div>
              <hr/>
              
              <div className="max-w-6xl mx-auto mb-4 mt-4 space-y-3 line-clamp-5">
                {accordionData.map((item, index) => (
                  <div key={index} className="border overflow-hidden rounded mb-2">
                    <button
                      onClick={() => handleToggle(index)}
                      className="w-full flex justify-between items-center px-3 py-3 text-left  hover:bg-red-100 transition ">
                      <span className="font-bold text-gray-700 text-md">
                        {item.title}
                      </span>
                      <span className="text-xl">
                        {activeIndex === index ? "-" : "+"}
                      </span>
                    </button>

                    <div
                      className={`px-3 overflow-hidden transition-all duration-300 ${
                        activeIndex === index ? "max-h-auto py-4" : "max-h-0"
                      }`}>
                      <p className="text-gray-600">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}