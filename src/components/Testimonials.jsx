import { motion } from "framer-motion"
import trainerData from "../data/trainerData"

function Testimonials() {
  return (
    <section id="testimonials" style={styles.section}>
      <div style={styles.glow1}></div>
      <div style={styles.glow2}></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p style={styles.tag}>CLIENT REVIEWS</p>

        <h2 style={styles.heading}>
          What Clients
          <span style={styles.gradientText}>
            {" "}Say About Us
          </span>
        </h2>

        <p style={styles.subheading}>
          Real stories from clients who transformed their
          bodies, mindset, and confidence.
        </p>
      </motion.div>

      <div style={styles.container}>
        {trainerData.testimonials.map((review, index) => (
          <motion.div
            key={index}
            style={styles.card}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{
              y: -12,
              scale: 1.03,
              boxShadow:
                "0 0 40px rgba(255,76,41,0.18)",
            }}
            viewport={{ once: true }}
          >
            <div style={styles.stars}>
              ★★★★★
            </div>

            <p style={styles.text}>
              "{review.text}"
            </p>

            <div style={styles.line}></div>

            <h4 style={styles.name}>
              {review.name}
            </h4>

            <p style={styles.role}>
              {review.role}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

const styles = {
  section: {
    position: "relative",
    padding: "120px 20px",
    background: "#0a0a0a",
    overflow: "hidden",
    textAlign: "center",
  },

  glow1: {
    position: "absolute",
    width: "280px",
    height: "280px",
    background: "#ff4c29",
    filter: "blur(150px)",
    opacity: 0.12,
    top: "50px",
    left: "-120px",
  },

  glow2: {
    position: "absolute",
    width: "280px",
    height: "280px",
    background: "#8b5cf6",
    filter: "blur(150px)",
    opacity: 0.12,
    bottom: "0",
    right: "-120px",
  },

  tag: {
    color: "#ff4c29",
    letterSpacing: "3px",
    marginBottom: "20px",
    fontWeight: "600",
    position: "relative",
    zIndex: 2,
  },

  heading: {
    fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
    marginBottom: "20px",
    position: "relative",
    zIndex: 2,
  },

  gradientText: {
    background:
      "linear-gradient(45deg, #ff4c29, #8b5cf6)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  subheading: {
    color: "#b3b3b3",
    maxWidth: "700px",
    margin: "0 auto 70px",
    lineHeight: 1.8,
    fontSize: "1.1rem",
    position: "relative",
    zIndex: 2,
  },

  container: {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    flexWrap: "wrap",
    position: "relative",
    zIndex: 2,
  },

  card: {
    width: "100%",
    maxWidth: "360px",
    padding: "40px 30px",
    borderRadius: "24px",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.08)",
    backdropFilter: "blur(12px)",
    boxShadow: "0 0 30px rgba(255,76,41,0.08)",
    transition: "0.3s",
  },

  stars: {
    fontSize: "1.3rem",
    marginBottom: "25px",
    background:
      "linear-gradient(45deg, #ff4c29, #8b5cf6)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  text: {
    color: "#d1d1d1",
    lineHeight: 1.9,
    marginBottom: "30px",
    fontSize: "1rem",
  },

  line: {
    width: "60px",
    height: "2px",
    margin: "0 auto 25px",
    background:
      "linear-gradient(45deg, #ff4c29, #8b5cf6)",
  },

  name: {
    fontSize: "1.2rem",
    marginBottom: "8px",
  },

  role: {
    color: "#999",
    fontSize: "0.95rem",
  },
}

export default Testimonials