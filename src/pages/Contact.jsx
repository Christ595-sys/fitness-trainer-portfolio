import { motion } from "framer-motion"
import trainerData from "../data/trainerData"

function Contact() {
  return (
    <section id="contact" style={styles.section}>
      <div style={styles.glow1}></div>
      <div style={styles.glow2}></div>

      <motion.div
        style={styles.container}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* LEFT SIDE */}
        <div style={styles.left}>
          <p style={styles.tag}>
            {trainerData.contact.tag}
          </p>

          <h2 style={styles.heading}>
            {trainerData.contact.headingStart}
            <span style={styles.gradientText}>
              {" "}
              {trainerData.contact.headingHighlight}
            </span>
          </h2>

          <p style={styles.description}>
            {trainerData.contact.description}
          </p>

          <div style={styles.contactCards}>
            <div style={styles.contactCard}>
              <span style={styles.icon}>📧</span>

              <div>
                <h4>Email</h4>
                <p>{trainerData.email}</p>
              </div>
            </div>

            <div style={styles.contactCard}>
              <span style={styles.icon}>📱</span>

              <div>
                <h4>WhatsApp</h4>
                <p>+{trainerData.phone}</p>
              </div>
            </div>

            <div style={styles.contactCard}>
              <span style={styles.icon}>📍</span>

              <div>
                <h4>Location</h4>
                <p>{trainerData.location}</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <form style={styles.form}>
          <input
            type="text"
            placeholder="Your Name"
            style={styles.input}
          />

          <input
            type="email"
            placeholder="Your Email"
            style={styles.input}
          />

          <textarea
            placeholder="Tell us about your goals..."
            style={styles.textarea}
          />

          <button style={styles.button}>
            {trainerData.contact.buttonText}
          </button>
        </form>
      </motion.div>
    </section>
  )
}

const styles = {
  section: {
    position: "relative",
    padding: "140px 20px",
    background: "#050505",
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

  left: {
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
    marginBottom: "40px",
    fontSize: "1.05rem",
    maxWidth: "600px",
  },

  contactCards: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },

  contactCard: {
    display: "flex",
    alignItems: "center",
    gap: "18px",
    padding: "20px",
    borderRadius: "20px",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.08)",
    backdropFilter: "blur(10px)",
    boxShadow: "0 0 25px rgba(255,76,41,0.08)",
  },

  icon: {
    fontSize: "1.8rem",
  },

  form: {
    flex: 1,
    minWidth: "300px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    padding: "40px",
    borderRadius: "30px",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.08)",
    backdropFilter: "blur(12px)",
    boxShadow: "0 0 35px rgba(255,76,41,0.1)",
  },

  input: {
    width: "100%",
    padding: "18px 20px",
    borderRadius: "16px",
    border: "1px solid rgba(255,255,255,0.08)",
    background: "rgba(255,255,255,0.04)",
    color: "white",
    outline: "none",
    fontSize: "1rem",
  },

  textarea: {
    width: "100%",
    minHeight: "160px",
    padding: "18px 20px",
    borderRadius: "16px",
    border: "1px solid rgba(255,255,255,0.08)",
    background: "rgba(255,255,255,0.04)",
    color: "white",
    outline: "none",
    resize: "none",
    fontSize: "1rem",
  },

  button: {
    padding: "16px",
    borderRadius: "40px",
    border: "none",
    background:
      "linear-gradient(45deg, #ff4c29, #8b5cf6)",
    color: "white",
    fontWeight: "700",
    fontSize: "1rem",
    cursor: "pointer",
    boxShadow:
      "0 0 25px rgba(255,76,41,0.3)",
  },
}

export default Contact