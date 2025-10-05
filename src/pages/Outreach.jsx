import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

// ========= NEW CONTENT VARIABLES (Unchanged) =========
const drugAwarenessContent = `Our team led a campaign during Drug Awareness Day to spark conversations on drug abuse, peer pressure, and support systems. Through student-led interviews with participants and insights from faculty, we created impactful reels and interactive sessions that emphasized empathy, prevention, and the importance of seeking help through initiatives like Nasha Mukti Abhiyan.`;
const rustomjeeSchoolContent = `On July 11, 2025, our team led an interactive session on modern life sciences with over 250 Class 8 students. We covered complex concepts like synthetic biology and genetic engineering using animations, analogies, and quizzes to pique their curiosity. The session also raised awareness about social issues, such as opioid abuse, and highlighted our project on an aptamer-based biosensor.`;
const bioQuestContent = `In collaboration with iGEM IIT Bombay, we launched BioQuest'25, the first national SynBio competition for Grades 9-10. Over 1,500 students registered, and 60 finalists were mentored by both teams to tackle challenges in healthcare, agriculture, and sustainability. The Grand Finale at IIT Bombay was livestreamed to over 2,500 people, inspiring young innovators nationwide.`;
const nsrtcContent = `Our team attended a three-day national conference, presenting two research posters on synthetic biology applications: an aptamer-based biosensor for narcotics and another on metabolic engineering. We received valuable feedback from researchers, solidifying our experimental design and fostering potential collaborations.`;
const aiimContent = `We joined 14 other premier institutes for the All India iGEM Meet (AIIM) 2025 at ICT Mumbai. The event featured workshops on biosafety, expert talks on epigenetics and 3D cultures, and a computational biology workshop. We showcased our project, received feedback from an expert panel, and networked with other teams.`;
const ruralOutreachContent = `To increase science accessibility, our team conducted an outreach program for 10th-grade students at a government Marathi medium school. The entire presentation on genetics, DNA technology, and synthetic biology was delivered in Marathi, focusing on agricultural applications relevant to their backgrounds and dispelling myths about GMOs.`;
const ioadContent = `We celebrated International Overdose Awareness Day with a National-Level Essay and Poster Competition. With over 35 entries, the initiative empowered youth to be change-makers by using creative expression to raise awareness about drug misuse, promote prevention, and address the need for empathy.`;
const pledgeContent = `Our team participated in the MyGov India “Say Yes to Life, No to Drugs” pledge. We ran a social media campaign using a video with statistics to highlight the health effects of drug abuse and prevention methods, encouraging young people to think critically and support the government’s public health efforts.`;
const compBioWorkshopContent = `We hosted a national-level hybrid workshop on Computational Biology, focusing on Protein-Drug Interaction using Biovia Discovery Studio. Participants learned the principles of molecular docking through hands-on experience, stimulating and developing computational biology skills across the country.`;
const gpcrTeachingContent = `In our MSc Synthetic Biology teaching, we explored GPCR signaling and opioid receptor interactions to show how natural signaling pathways can be understood, modeled, and engineered. Interactive teaching helped students connect molecular mechanisms with practical applications like designing synthetic circuits and biosensors.`;


// ✨ New Background Animation Component
function BackgroundAnimation() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const options = {
    background: { color: { value: "#f9fafb" } },
    fpsLimit: 60,
    interactivity: {
      events: { onHover: { enable: true, mode: "repulse" }, resize: true },
      modes: { repulse: { distance: 100, duration: 0.4 } },
    },
    particles: {
      color: { value: "#06b6d4" },
      links: { color: "#0891b2", distance: 150, enable: true, opacity: 0.2, width: 1 },
      move: { direction: "none", enable: true, outModes: { default: "bounce" }, random: true, speed: 1, straight: false },
      number: { density: { enable: true, area: 800 }, value: 50 },
      opacity: { value: 0.3 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  };

  return <Particles id="tsparticles" init={particlesInit} options={options} />;
}

// 📌 Main Outreach Component
export default function Outreach() {
  const timelineRef = useRef(null);
  const [lineHeight, setLineHeight] = useState(0);

  // 🧭 Animate midline on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (timelineRef.current) {
        const rect = timelineRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const scrollPosition = Math.min(
          rect.height,
          Math.max(0, windowHeight - rect.top)
        );
        setLineHeight(scrollPosition);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen relative overflow-hidden">
        {/* ✨ Background is positioned behind all content */}
        <div className="absolute top-0 left-0 w-full h-full z-0">
            <BackgroundAnimation />
        </div>

        {/* All original content is wrapped to be on top of the animation */}
        <div className="relative z-10">
            {/* 🧭 Main Heading Section */}
            <div className="bg-gradient-to-r from-cyan-400 to-cyan-500 text-white py-16 text-center shadow-md mb-10">
                <h1 className="text-3xl md:text-4xl font-bold">
                    Outreach & Education
                </h1>
                <p className="text-sm md:text-base mt-2 opacity-90">
                    Learning • Sharing • Inspiring
                </p>
            </div>

            <div className="max-w-5xl mx-auto py-16 px-4 relative">
                {/* 🧭 Vertical timeline line containers */}
                <div className="absolute left-1/2 top-0 transform -translate-x-1/2 h-full w-1">
                    <div className="w-full bg-gray-200 rounded-full h-full"></div>
                    <div
                        className="w-full bg-cyan-400 rounded-full absolute top-0"
                        style={{ height: `${lineHeight}px` }}
                    ></div>
                </div>

                {/* 📝 Timeline Content */}
                <div ref={timelineRef} className="space-y-16 relative">
                    <TimelineBox
                        side="right"
                        title="Drug Awareness Campaign"
                        date="June 26, 2025"
                        location="MIT World Peace University, Pune"
                        content={drugAwarenessContent}
                        images={[
                            'https://placehold.co/600x400/06b6d4/ffffff?text=Event+Photo+1',
                            'https://placehold.co/600x400/164e63/ffffff?text=Interaction+Session',
                            'https://placehold.co/600x400/67e8f9/000000?text=Student+Interviews'
                        ]}
                    />
                    <TimelineBox
                        side="left"
                        title="Inspiring Future Biologists in Mumbai"
                        date="July 11, 2025"
                        location="Rustomjee Cambridge International School, Mumbai"
                        content={rustomjeeSchoolContent}
                        images={[
                            'https://placehold.co/600x400/06b6d4/ffffff?text=School+Session',
                            'https://placehold.co/600x400/164e63/ffffff?text=Q&A+Time'
                        ]}
                    />
                    <TimelineBox
                        side="right"
                        title="BioQuest 2025: 1st Edition"
                        date="July 13, 2025"
                        location="IIT Bombay, Mumbai"
                        content={bioQuestContent}
                        images={[
                            'https://placehold.co/600x400/06b6d4/ffffff?text=BioQuest+Finale',
                            'https://placehold.co/600x400/164e63/ffffff?text=Mentoring+Session'
                        ]}
                    />
                    <TimelineBox
                        side="left"
                        title="iGEM MIT-WPU at NSRTC 2025"
                        date="July 18-20, 2025"
                        location="MIT World Peace University, Pune"
                        content={nsrtcContent}
                        images={[
                            'https://placehold.co/600x400/06b6d4/ffffff?text=Conference+Poster',
                            'https://placehold.co/600x400/164e63/ffffff?text=Team+Presentation'
                        ]}
                    />
                    <TimelineBox
                        side="right"
                        title="All India iGEM Meet"
                        date="July 25-27, 2025"
                        location="Institute of Chemical Technology, Mumbai"
                        content={aiimContent}
                        images={[
                            'https://placehold.co/600x400/06b6d4/ffffff?text=AIIM+Group+Photo',
                            'https://placehold.co/600x400/164e63/ffffff?text=Networking+Event'
                        ]}
                    />
                    <TimelineBox
                        side="left"
                        title="Rural Outreach at Shri Shivaji Vidyalaya"
                        date="August 11, 2025"
                        location="Shel Pimplegaon, Alandi"
                        content={ruralOutreachContent}
                        images={[
                            'https://placehold.co/600x400/06b6d4/ffffff?text=Marathi+Session',
                            'https://placehold.co/600x400/164e63/ffffff?text=Students+Learning'
                        ]}
                    />
                    <TimelineBox
                        side="right"
                        title="International Overdose Awareness Day"
                        date="August 31, 2025"
                        location="Pune and Mumbai"
                        content={ioadContent}
                        images={[
                            'https://placehold.co/600x400/06b6d4/ffffff?text=Winning+Poster',
                            'https://placehold.co/600x400/164e63/ffffff?text=Essay+Entry'
                        ]}
                    />
                    <TimelineBox
                        side="left"
                        title="Promoting Drug Abuse Awareness (Pledge)"
                        date="September 10, 2025"
                        location="Online"
                        content={pledgeContent}
                        images={[
                            'https://placehold.co/600x400/06b6d4/ffffff?text=Campaign+Art',
                            'https://placehold.co/600x400/164e63/ffffff?text=Social+Media+Post'
                        ]}
                    />
                    <TimelineBox
                        side="right"
                        title="National Workshop on Computational Biology"
                        date="September 24, 2025"
                        location="Hybrid - MIT World Peace University"
                        content={compBioWorkshopContent}
                        images={[
                            'https://placehold.co/600x400/06b6d4/ffffff?text=Workshop+Photo',
                            'https://placehold.co/600x400/164e63/ffffff?text=Docking+Demo'
                        ]}
                    />
                    <TimelineBox
                        side="left"
                        title="GPCR Signaling in MSc Synthetic Biology"
                        date="September 24, 2025"
                        location="MIT World Peace University"
                        content={gpcrTeachingContent}
                        images={[
                            'https://placehold.co/600x400/06b6d4/ffffff?text=Class+Photo',
                            'https://placehold.co/600x400/164e63/ffffff?text=Signaling+Pathway'
                        ]}
                    />
                </div>
            </div>
        </div>
    </div>
  );
}

// 📌 Timeline Box Component
function TimelineBox({ side, title, date, location, content, images }) {
  const controls = useAnimation();
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);
  // ✨ State for the image carousel
  const [currentImage, setCurrentImage] = useState(0);

  // ✨ Auto-play carousel logic
  useEffect(() => {
    if (images && images.length > 1) {
        const timer = setTimeout(() => {
            setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000); // Change image every 4 seconds
        return () => clearTimeout(timer);
    }
  }, [currentImage, images]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
          setIsInView(true);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [controls]);

  const variants = {
    hidden: { opacity: 0, x: side === "left" ? -50 : 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const boxPositionClass = side === "left" ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8";

  return (
    <div ref={ref} className="relative w-full flex flex-col md:flex-row md:items-start">
      {/* 🖼️ Side Decorative Image (Unchanged) */}
      {side === "right" && (
        <div className="hidden md:block w-1/2 pr-8 flex justify-end">
          <img
            src="https://placehold.co/400x300?text=Left+Image"
            alt="Decorative Left"
            className="rounded-lg shadow-md object-cover"
          />
        </div>
      )}

      {/* 📦 Content Box */}
      <motion.div
        initial="hidden"
        animate={controls}
        variants={variants}
        className={`w-full md:w-1/2 ${boxPositionClass}`}
      >
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 w-full">
          <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
          <div className="text-xs text-gray-500 mb-4 space-y-1 border-l-2 border-gray-200 pl-3">
            <p><strong>🗓️ Date:</strong> {date}</p>
            <p><strong>📍 Location:</strong> {location}</p>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">{content}</p>

          {/* ✨ Image Carousel Section replaces the single image */}
          {images && images.length > 0 && (
            <div className="mt-4 relative w-full h-56 overflow-hidden rounded-lg shadow-inner">
                <AnimatePresence>
                    <motion.img
                        key={currentImage}
                        src={images[currentImage]}
                        alt={`${title} event ${currentImage + 1}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className="absolute top-0 left-0 rounded-lg object-cover w-full h-full"
                    />
                </AnimatePresence>
                {/* Carousel Dots */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentImage(index)}
                            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                                currentImage === index ? 'bg-white scale-110' : 'bg-white/50'
                            }`}
                            aria-label={`Go to image ${index + 1}`}
                        ></button>
                    ))}
                </div>
            </div>
          )}
        </div>
      </motion.div>

      {/* 🖼️ Side Decorative Image (Unchanged) */}
      {side === "left" && (
        <div className="hidden md:block w-1/2 pl-8 flex justify-start">
          <img
            src="https://placehold.co/400x300?text=Right+Image"
            alt="Decorative Right"
            className="rounded-lg shadow-md object-cover"
          />
        </div>
      )}
    </div>
  );
}