import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import samplePDF from '../assets/outreach_detail.pdf'; 
import rubiscoPDF from '../assets/Rubisco X iGEM_FINAL.pdf'; // your PDF file
import '../pages/Outreach.css';

// Images
import rustomjee1 from "../assets/rustomjee1.jpg";
import rustomjee2 from "../assets/rustomjee2.jpg";
import rustomjee3 from "../assets/rustomjee3.jpg";
import bioquest1 from "../assets/bioquest1.jpg";
import bioquest2 from "../assets/bioquest2.jpg";
import nsrtc1 from "../assets/nsrtc1.jpg";
import nsrtc2 from "../assets/nsrtc2.jpg";
import aiim1 from "../assets/aiim1.jpg";
import aiim2 from "../assets/aiim2.jpg";
import aiim3 from "../assets/aiim3.jpg";
import rular from "../assets/rular.jpg";
import rular2 from "../assets/rular2.jpg";
import rular3 from "../assets/rular3.jpg";
import pledge1 from "../assets/pledge1.jpg";
import pledge2 from "../assets/pledge2.jpg";
import pledge3 from "../assets/pledge3.jpg";
import pledge4 from "../assets/pledge4.jpg";
import cellularmsc1 from "../assets/cellularmsc1.jpg";
import cellularmsc2 from "../assets/cellularmsc2.jpg";
import cellularmsc3 from "../assets/cellularmsc3.jpg";
import computationalworkshop1 from "../assets/computationalworkshop.jpg";
import computationalworkshop2 from "../assets/computationalworkshop2.jpg";
import computationalworkshop3 from "../assets/Computational Workshop Final.png";
import yale1 from "../assets/yale1.png";
import yale2 from "../assets/yale2.png";
import rubisco from "../assets/image.png";
import drug_awareness from "../assets/drug_awarenesss.mp4";
import drug_awareness2 from "../assets/drug_awareness2.mp4";
import headerBackground from "../assets/header-background.jpg";
import poster1 from "../assets/31august1.jpg";
import poster2 from "../assets/31august2.jpg";



function BackgroundAnimation() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: { color: { value: "#f9fafb" } },
        fpsLimit: 60,
        interactivity: {
          events: { onHover: { enable: true, mode: "repulse" }, resize: true },
          modes: { repulse: { distance: 120, duration: 0.4 } },
        },
        particles: {
          color: { value: "#06b6d4" },
          links: { color: "#0891b2", distance: 150, enable: true, opacity: 0.2, width: 1 },
          move: { enable: true, speed: 1, outModes: { default: "bounce" } },
          number: { density: { enable: true, area: 800 }, value: 45 },
          opacity: { value: 0.3 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 3 } },
        },
        detectRetina: true,
      }}
    />
  );
}

export default function Outreach() {
  const timelineRef = useRef(null);
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (timelineRef.current) {
        const rect = timelineRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const scrollPosition = Math.min(rect.height, Math.max(0, windowHeight - rect.top));
        setLineHeight(scrollPosition);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const data = [
  {
  id: "drug-awareness",
  side: "left",
  title: "Drug Awareness Campaign",
  date: "June 26, 2025",
  location: "MIT World Peace University, Pune",
  content:
    "Our team led a campaign during Drug Awareness Day to spark conversations on drug abuse, peer pressure, and support systems.",
  images: [], // leave empty since video replaces it
  videoMain: drug_awareness2, // 👈 replaces images
  decorativeVideo: drug_awareness, // 👈 replaces decorative image
  testimonial:
    "“This session truly helped students open up about sensitive issues — we’re glad it made an impact.” — Faculty, MIT-WPU",
},
    {
      id: "rustomjee",
      side: "right",
      title: "Inspiring Future Biologists in Mumbai",
      date: "July 11, 2025",
      location: "Rustomjee Cambridge International School, Mumbai",
      content:
        "An interactive session with over 250 Class 8 students, covering complex concepts like synthetic biology and genetic engineering.",
      images: [rustomjee1, rustomjee2, rustomjee3],
      testimonial:
        "“The students were deeply engaged — it’s inspiring to see such enthusiasm for science!” — Faculty, Rustomjee School",
      decorativeImage: rustomjee2
    },
    {
      id: "bioquest",
      side: "left",
      title: "BioQuest 2025: National SynBio Challenge",
      date: "July 13, 2025",
      location: "IIT Bombay, Mumbai",
      content:
        "In collaboration with iGEM IIT Bombay, we launched BioQuest'25 — the first national SynBio competition for Grades 9–10.",
      images: [bioquest1, bioquest2],
      testimonial:
        "“A great initiative blending competition with creativity — we hope to continue this annually.” — Judge, IIT Bombay",
      decorativeImage: bioquest1
    },
    {
      id: "nsrtc",
      side: "right",
      title: "iGEM MIT-WPU at NSRTC 2025",
      date: "July 18–20, 2025",
      location: "MIT World Peace University, Pune",
      content:
        "Our team attended the three-day National Symposium on Recent Trends in Research and presented two posters.",
      images: [nsrtc1, nsrtc2],
      testimonial:
        "“Your poster on biosensing sparked engaging discussions with our research community.” — NSRTC Jury Member",
      decorativeImage: nsrtc1
    },
    {
      id: "aiim",
      side: "left",
      title: "All India iGEM Meet (AIIM) 2025",
      date: "July 25–27, 2025",
      location: "Institute of Chemical Technology (ICT), Mumbai",
      content:
        "Our team joined 14 premier institutes for AIIM 2025 with biosafety workshops and expert talks.",
      images: [aiim1, aiim2, aiim3],
      testimonial:
        "“The collaboration spirit across iGEM teams was inspiring and fruitful.” — Organizer, AIIM 2025",
      decorativeImage: aiim1
    },
    {
      id: "rural-outreach",
      side: "right",
      title: "Rural Outreach at Shri Shivaji Vidyalaya",
      date: "August 11, 2025",
      location: "Shel Pimplegaon, Alandi",
      content:
        "We conducted a Marathi-language outreach session for 10th-grade students at a government school.",
      images: [rular2, rular3, rular],
      testimonial:
        "“Delivering such complex topics in Marathi made a huge difference — students related instantly.” — Principal, Shri Shivaji Vidyalaya",
      decorativeImage: rular2
    },
     {
      id: "international-awareness",
      side: "left",
      title: "International Overdose Awareness Day: A Student Initiative",
      date: "August 31, 2025",
      location: "Pune and Mumbai",
      content:
        "Awareness of harmful effects of drug use in teenagers and young adults through creative expression.",
      images: [poster2],
      testimonial:
        "“Delivering such complex topics in Marathi made a huge difference — students related instantly.” — Principal, Shri Shivaji Vidyalaya",
      decorativeImage: poster1
    },
    {
      id: "pledge-campaign",
      side: "right",
      title: "‘Say Yes to Life, No to Drugs’ Pledge Campaign",
      date: "September 10, 2025",
      location: "Online and Social Media",
      content:
        "We participated in the MyGov India pledge campaign with a social media drive using real statistics.",
      images: [pledge1, pledge2, pledge3, pledge4],
      testimonial:
        "“It was encouraging to see students take leadership in supporting nationwide health pledges.” — MyGov Official",
      decorativeImage: pledge3
    },
     {
      id: "awareness-in-marathi",
      side: "left",
      title: "Hacking Gene Expression with Epigenetic Tools: A Collaborative Science Communication Initiative in Marathi",
      date: "September 18, 2025",
      location: "Online",
      content:
        "The collaboration made advanced concepts in genetics, epigenetics, and synthetic biology accessible to a Marathi-speaking audience, promoting inclusive science communication. It raised awareness about gene regulation, therapeutic applications, and ethics while linking the team’s iGEM work to the Sustainable Development Goals (SDGs).",
      images: [rular2, rular3, rular],
      testimonial:
        "“Delivering such complex topics in Marathi made a huge difference — students related instantly.” — Principal, Shri Shivaji Vidyalaya",
      decorativeImage: rular2
    },
    
    {
      id: "compbio-workshop",
      side: "right",
      title: "National Workshop on Computational Biology",
      date: "September 24, 2025",
      location: "Hybrid — MIT World Peace University",
      content:
        "We hosted a hybrid workshop on Computational Biology focused on Protein–Drug Interaction.",
      images: [computationalworkshop1, computationalworkshop2, computationalworkshop3],
      testimonial:
        "“This was my first exposure to molecular docking — it was insightful and engaging!” — Participant, Workshop 2025",
      decorativeImage: computationalworkshop3
    },
    {
      id: "gpcr-teaching",
      side: "left",
      title: "GPCR Signaling in MSc Synthetic Biology Teaching",
      date: "September 24, 2025",
      location: "MIT World Peace University, Pune",
      content:
        "During MSc Synthetic Biology teaching, our team introduced GPCR signaling and opioid receptor interactions.",
      images: [cellularmsc1, cellularmsc2, cellularmsc3],
      testimonial:
        "“Connecting research concepts with teaching created an impactful learning experience.” — MSc Student, MIT-WPU",
      decorativeImage: cellularmsc2
    },
    {
      id: "yale",
      side: "right",
      title: "Expert Talk on Synthetic Biology – A Milestone International Collaboration Between iGEM MIT-WPU and iGEM Yale",
      date: "July 27, 2025",
      location: "Online",
      content:
        "Synthetic biology awareness to biology undergraduate students. Students had the rare opportunity to interact with an international scientist.",
      images: [yale2, yale1 ],
      testimonial:
        "“Connecting research concepts with teaching created an impactful learning experience.” — MSc Student, MIT-WPU",
      decorativeImage: yale1
    },
    {
      id: "rubisco",
      side: "left",
      title: "Next gen therapeutics: Bioengineering at the Molecular Scale,  iGEM MIT-WPU x Rubisco Collaboration",
      date: "August 28-September 2, 2025",
      location: "Online",
      content:
        "The initiative raised awareness about the opioid crisis while inspiring students to explore bioengineering solutions, blending scientific creativity with community engagement.",
      images: [rubisco],
      testimonial:
        "“Connecting research concepts with teaching created an impactful learning experience.” — MSc Student, MIT-WPU",
      pdfFile: rubiscoPDF,
 
      
    }
  ];
  
  return (
    <div className="outreach-container bg-gray-50 min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <BackgroundAnimation />
      </div>
      <div className="relative z-10">
        {/* Header */}
        <div
  className="relative py-16 text-center shadow-md mb-12"
  style={{
    backgroundImage: `url(${headerBackground})`, // import your image
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  {/* Gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-cyan-500 opacity-70"></div>

  {/* Text content */}
  <div className="relative z-10">
    <h1 className="text-4xl font-bold tracking-wide text-white">
      Education
    </h1>
    <p className="text-sm md:text-base mt-2 opacity-90 text-white">
      “Knowledge shared is knowledge squared“
    </p>
  </div>
</div>


        {/* Timeline */}
        <div className="max-w-6xl mx-auto py-10 px-4 relative">
          <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-1">
            <div className="bg-gray-200 rounded-full h-full"></div>
            <div
              className="bg-gradient-to-b from-cyan-400 to-cyan-600 rounded-full absolute top-0 transition-all duration-300"
              style={{ height: `${lineHeight}px`, width: "4px" }}
            ></div>
          </div>

          <div ref={timelineRef} className="space-y-20 relative">
            {data.map((event, index) => (
              <TimelineCard key={index} {...event} />
            ))}
          </div>
        </div>
<div className="section-divider"> <span>Science for Society: Our Educational Impact</span> </div>
        {/* PDF Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1 }}
          className="pdf-section max-w-6xl mx-auto my-20 p-6 bg-white rounded-2xl shadow-lg"
        >
          <h2 className="text-3xl font-bold text-center mb-6">
            "Our journey in detail"
          </h2>

          <div
            style={{
              height: "600px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              overflow: "auto",
            }}
          >
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
              <Viewer fileUrl={samplePDF} />
            </Worker>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// ============================ TIMELINE CARD ============================
function TimelineCard({
  side,
  title,
  date,
  location,
  content,
  images,
  testimonial,
  decorativeImage,
  pdfFile,
  videoFile,
  videoMain,
  decorativeVideo,
}) {
  const controls = useAnimation();
  const [currentImage, setCurrentImage] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) controls.start("visible");
    });
    if (ref.current) observer.observe(ref.current);
    return () => ref.current && observer.unobserve(ref.current);
  }, [controls]);

  useEffect(() => {
    if (images && images.length > 1) {
      const timer = setTimeout(
        () => setCurrentImage((prev) => (prev + 1) % images.length),
        4000
      );
      return () => clearTimeout(timer);
    }
  }, [currentImage, images]);

  const variants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={`flex flex-col md:flex-row items-center ${
        side === "left" ? "md:flex-row-reverse" : ""
      } gap-8 relative`}
    >
      {/* Decorative Media (Left/Right Side) */}
      <div className="hidden md:block md:w-1/3">
        {decorativeVideo ? (
          <video
            src={decorativeVideo}
            autoPlay
            loop
            muted
            playsInline
            className="rounded-2xl shadow-lg object-cover w-full h-[650px] hover:scale-105 transition-transform duration-500"
          />
        ) : pdfFile ? (
          <div
            className="rounded-xl overflow-hidden border-2 border-cyan-400 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white"
            style={{ height: "700px" }}
          >
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
              <Viewer fileUrl={pdfFile} />
            </Worker>
          </div>
        ) : decorativeImage ? (
          <img
            src={decorativeImage}
            alt="Decor"
            className="rounded-2xl shadow-lg object-contain w-full h-full transition-transform duration-500 hover:scale-105"
            style={{ maxHeight: "450px" }}
          />
        ) : null}
      </div>

      {/* Line */}
      <div className="absolute left-1/2 top-1/2 w-8 h-1 bg-cyan-400 rounded-full transform -translate-x-1/2"></div>

      {/* Content Section */}
      <motion.div
        className="md:w-2/3 bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
        whileHover={{ y: -5 }}
      >
        <div className="absolute top-0 left-0 w-2 bg-gradient-to-b from-cyan-400 to-cyan-600 h-full rounded-l-2xl"></div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-xs text-gray-500 mb-4">
          🗓️ {date} &nbsp; • &nbsp; 📍 {location}
        </p>
        <p className="text-gray-600 text-sm mb-4">{content}</p>

        {/* If videoMain exists → show video instead of images */}
        {videoMain ? (
          <video
            src={videoMain}
            controls
            muted
            loop
            className="rounded-xl shadow-md w-full h-[400px] object-cover"
          />
        ) : images && images.length > 0 ? (
          <div className="relative w-full h-56 rounded-lg overflow-hidden">
            <AnimatePresence>
              <motion.img
                key={currentImage}
                src={images[currentImage]}
                alt={title}
                className="absolute w-full h-full object-cover rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              />
            </AnimatePresence>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-2.5 h-2.5 rounded-full ${
                    currentImage === index ? "bg-white" : "bg-white/50"
                  }`}
                ></button>
              ))}
            </div>
          </div>
        ) : null}

        {/* Testimonial */}
        {testimonial && (
          <div className="mt-5 bg-cyan-50 border-l-4 border-cyan-400 p-3 rounded-md">
            <p className="italic text-gray-700 text-sm leading-relaxed">
              {testimonial}
            </p>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}