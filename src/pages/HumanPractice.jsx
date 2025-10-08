import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { motion } from "framer-motion";
import "./HumanPractice.css"; // 🌈 Ensure your CSS file is imported

// 🌌 Background Animation (No changes needed here)
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
          modes: { repulse: { distance: 100, duration: 0.4 } },
        },
        particles: {
          color: { value: "#06b6d4" },
          links: {
            color: "#0891b2",
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: { default: "bounce" },
            random: true,
            speed: 1,
            straight: false,
          },
          number: { density: { enable: true, area: 800 }, value: 50 },
          opacity: { value: 0.3 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 3 } },
        },
        detectRetina: true,
      }}
      className="bg-particles"
    />
  );
}

// 🧍 Person Card (No changes needed here)
function PersonCard({ img, name, text }) {
  return (
    <div className="person-card">
      <img src={img} alt={name} className="person-image" />
      <div className="person-info">
        <h3 className="person-name">{name}</h3>
        <blockquote className="person-quote">
          <p>"{text}"</p>
        </blockquote>
      </div>
    </div>
  );
}

// 🏡 Main Component
export default function HumanPractices() {
  // ✅ Updated Mentor data from your document
  const mentors = [
    {
      img: "https://i.pravatar.cc/150?img=11",
      name: "Dr. Anup Kale",
      text: "Pivotal in silico aptamer design and developing an optical sensing methodology for quantitative detection.",
    },
    {
      img: "https://i.pravatar.cc/150?img=12",
      name: "Dr. Shilpa Chapadgaonkar",
      text: "Instrumental in understanding aptamer interactions and ensuring specificity to fentanyl and its analogues.",
    },
  ];

  // ✅ Updated Stakeholder data from your document
  const stakeholders = [
    {
      img: "https://i.pravatar.cc/150?img=1",
      name: "Mr. Ashutosh Prachand (IP Expert)",
      text: "Highlighted the importance of protecting ideas early and navigating IP strategically for innovation.",
    },
    {
      img: "https://i.pravatar.cc/150?img=2",
      name: "Dr. Shivnarayan (Clinical Psychologist)",
      text: "Emphasized that non-invasive tools can build trust, improve patient acceptance, and enable empathetic care.",
    },
    {
      img: "https://i.pravatar.cc/150?img=3",
      name: "Practicing Anesthesiologist",
      text: "Validated the need for a non-invasive, real-time monitoring tool to fill gaps in current clinical practice.",
    },
    {
      img: "https://i.pravatar.cc/150?img=4",
      name: "Muktanand Rehab Centre",
      text: "Provided ground-level insights on commonly abused opioids and ideal diagnostic tool requirements.",
    },
    {
      img: "https://i.pravatar.cc/150?img=5",
      name: "Dr. Shreeram Joglekar (Innovator)",
      text: "Advised on balancing scientific depth with practicality, scalability, and sustainability for real-world impact.",
    },
    {
      img: "https://i.pravatar.cc/150?img=6",
      name: "Adaptiv Podcast Collaboration",
      text: "Demystified intellectual property for young innovators, empowering them to translate ideas into impact.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 90 } },
  };

  return (
    <div className="page-container">
      <BackgroundAnimation />

      <div className="content-wrapper">
        {/* 🟦 Hero Section */}
        <div className="hero-section">
          <div className="hero-card">
            <h1 className="hero-title">Integrated Human Practices</h1>
            <p className="hero-text">
              Transforming our Opio-Rx biosensor from a laboratory concept to a human-centered solution through systematic stakeholder engagement and iterative feedback.
            </p>
          </div>
        </div>

        {/* ✅ New Section: Overview */}
        <section className="text-section">
          <p>
            The Opio-Rx project exemplifies how comprehensive stakeholder engagement can transform a purely technological endeavor into a human-centered solution addressing real-world challenges in synthetic opioid detection. Through systematic stakeholder mapping and iterative feedback integration, our biosensor evolved from a laboratory concept to a clinically-relevant diagnostic tool designed for collaborative patient care.
          </p>
        </section>

        {/* ✅ New Section: Framework Image */}
        <section className="framework-section">
            <h2 className="section-title">Opio-Rx Framework Integration</h2>
            {/* ⚠️ IMPORTANT: Replace this src with the actual path to your image */}
            <img 
                src="image_436790.png" 
                alt="Opio-Rx Framework Integration Diagram" 
                className="framework-image" 
            />
            <p className="caption">
                A continuous feedback loop connects all stages of our project development, ensuring stakeholder insights guide every step.
            </p>
        </section>


        {/* 👨‍🏫 Mentor Section */}
        <section>
          <h2 className="section-title">Our Mentors</h2>
          <motion.div
            className="grid-mentors"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {mentors.map((mentor, i) => (
              <motion.div key={i} variants={cardVariants}>
                <PersonCard {...mentor} />
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* 🧑‍💼 Stakeholder Section */}
        <section>
          <h2 className="section-title">Stakeholder Insights</h2>
          <motion.div
            className="grid-stakeholders"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {stakeholders.map((s, i) => (
              <motion.div key={i} variants={cardVariants}>
                <PersonCard {...s} />
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ✅ New Section: Project Evolution */}
        <section className="text-section">
          <h2 className="section-title">Project Evolution & Societal Interaction</h2>
          <h3>How the project affects society and how society influences the project</h3>
          <p>
            The Opio-Rx project is designed to positively affect society by addressing the synthetic opioid crisis with a rapid, non-invasive, and accessible diagnostic tool. Conversely, society fundamentally influenced the project's direction. Insights from psychologists, clinicians, and rehab specialists transformed the project from a purely technological endeavor into a human-centered solution, with a primary focus on a non-invasive saliva-based platform.
          </p>
          <h3>How ethical considerations and stakeholder input guide the project</h3>
          <p>
             Ethical considerations, guided by stakeholder input, were central to the project's purpose, design, and experimental protocols.
          </p>
          <ul>
            <li><b>Purpose:</b> The goal shifted from simple "detection" to "collaborative intervention," emphasizing trust, confidentiality, and patient support.</li>
            <li><b>Design:</b> The biosensor's design was dictated by clinical needs for a non-invasive, rapid (&lt;15 minutes), affordable, and easy-to-use tool.</li>
            <li><b>Experiments:</b> Laboratory experiments for aptamer specificity were directly informed by the clinical need to accurately detect relevant opioids like fentanyl and morphine.</li>
          </ul>
        </section>

      </div>
    </div>
  );
}