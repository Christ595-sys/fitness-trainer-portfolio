import { motion } from "framer-motion"
import trainerData from "../data/trainerData"

function About() {
  return (
    <section id="about" style={styles.section}>
      <div style={styles.glow1}></div>
      <div style={styles.glow2}></div>

      <div style={styles.mobileHeader} className="mobile-about-header">
        <p style={styles.tag}>{trainerData.about.tag}</p>

        <h2 style={styles.heading}>
          {trainerData.about.headingStart}
          <span style={styles.gradientText}>
            {" "}
            {trainerData.about.headingHighlight}
          </span>
        </h2>
      </div>

      <div style={styles.container}>
        <motion.div
          style={styles.imageContainer}
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div style={styles.imageGlow}></div>

          <img
            src={trainerData.images.about}
            alt={trainerData.name}
            style={styles.image}
          />
        </motion.div>

        <motion.div
          style={styles.content}
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div style={styles.desktopHeader} className="desktop-about-header">
            <p style={styles.tag}>{trainerData.about.tag}</p>

            <h2 style={styles.heading}>
              {trainerData.about.headingStart}
              <span style={styles.gradientText}>
                {" "}
                {trainerData.about.headingHighlight}
              </span>
            </h2>
          </div>

          {trainerData.about.paragraphs.map((paragraph, index) => (
            <p key={index} style={styles.description}>
              {paragraph}
            </p>
          ))}

          <div style={styles.stats}>
            {trainerData.about.stats.map((stat, index) => (
              <div key={index} style={styles.statCard}>
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>

          <div style={styles.buttonWrapper}>
            <a href="#pricing" style={styles.button}>
              {trainerData.about.buttonText}
            </a>
          </div>
        </motion.div>
      </div>

      <style>
        {`
          @media (max-width: 768px) {
            .desktop-about-header {
              display: none !important;
            }

            .mobile-about-header {
              display: block !important;
              text-align: center;
              margin-bottom: 40px;
              position: relative;
              z-index: 2;
            }

            #about {
              text-align: center;
            }
          }

          @media (min-width: 769px) {
            .mobile-about-header {
              display: none !important;
            }

            .desktop-about-header {
              display: block !important;
            }
          }
        `}
      </style>
    </section>
  )
}

const styles = {
  section: {
    position: "relative",
    padding: "90px 20px",
    background: "#0a0a0a",
    overflow: "hidden",
  },

  glow1: {
    position: "absolute",
    width: "320px",
    height: "320px",
    background: "#ff4c29",
    filter: "blur(160px)",
    opacity: 0.12,
    top: "0",
    left: "-120px",
  },

  glow2: {
    position: "absolute",
    width: "320px",
    height: "320px",
    background: "#8b5cf6",
    filter: "blur(160px)",
    opacity: 0.12,
    bottom: "0",
    right: "-120px",
  },

  mobileHeader: {
    display: "none",
  },

  desktopHeader: {
    display: "block",
  },

  container: {
    position: "relative",
    zIndex: 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "80px",
    maxWidth: "1300px",
    margin: "0 auto",
    flexWrap: "wrap",
  },

  imageContainer: {
    position: "relative",
    flex: 1,
    minWidth: "300px",
    display: "flex",
    justifyContent: "center",
  },

  imageGlow: {
    position: "absolute",
    width: "350px",
    height: "350px",
    background: "linear-gradient(45deg, #ff4c29, #8b5cf6)",
    borderRadius: "50%",
    filter: "blur(120px)",
    opacity: 0.25,
    zIndex: -1,
  },

  image: {
    width: "100%",
    maxWidth: "450px",
    borderRadius: "30px",
    objectFit: "cover",
    border: "1px solid rgba(255,255,255,0.1)",
    boxShadow: "0 0 40px rgba(255,76,41,0.15)",
  },

  content: {
    flex: 1,
    minWidth: "300px",
  },

  tag: {
    color: "#ff4c29",
    letterSpacing: "3px",
    marginBottom: "20px",
    fontWeight: "600",
  },

  heading: {
    fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
    lineHeight: 1.1,
    marginBottom: "30px",
  },

  gradientText: {
    background: "linear-gradient(45deg, #ff4c29, #8b5cf6)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  description: {
    color: "#b3b3b3",
    lineHeight: 1.9,
    marginBottom: "20px",
    fontSize: "1.05rem",
  },

  stats: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
    marginTop: "40px",
    marginBottom: "40px",
  },

  statCard: {
    flex: 1,
    minWidth: "120px",
    padding: "25px",
    borderRadius: "20px",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.08)",
    backdropFilter: "blur(10px)",
    textAlign: "center",
    boxShadow: "0 0 25px rgba(255,76,41,0.08)",
  },

  buttonWrapper: {
    display: "flex",
    justifyContent: "center",
  },

  button: {
    display: "inline-block",
    textDecoration: "none",
    padding: "16px 34px",
    borderRadius: "40px",
    background: "linear-gradient(45deg, #ff4c29, #8b5cf6)",
    color: "white",
    fontWeight: "700",
    boxShadow: "0 0 25px rgba(255,76,41,0.3)",
  },
}

export default About