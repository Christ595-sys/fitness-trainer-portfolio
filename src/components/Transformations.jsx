import { motion } from "framer-motion"
import trainerData from "../data/trainerData"

function Transformations() {
  return (
    <section id="transformations" style={styles.section}>
      <div style={styles.glow1}></div>
      <div style={styles.glow2}></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p style={styles.tag}>CLIENT RESULTS</p>

        <h2 style={styles.heading}>
          Real People.
          <span style={styles.gradientText}>
            {" "}Real Transformations
          </span>
        </h2>

        <p style={styles.subheading}>
          Every transformation is built through discipline,
          consistency, and personalized coaching strategies.
        </p>
      </motion.div>

      <div style={styles.container}>
        {trainerData.transformations.map((client, index) => (
          <motion.div
            key={index}
            style={styles.card}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{
              y: -12,
              scale: 1.02,
              boxShadow:
                "0 0 40px rgba(255,76,41,0.18)",
            }}
            viewport={{ once: true }}
          >
            <div style={styles.images}>
              <div style={styles.imageBox}>
                <img
                  src={client.before}
                  alt="before transformation"
                  style={styles.image}
                />

                <span style={styles.label}>
                  BEFORE
                </span>
              </div>

              <div style={styles.imageBox}>
                <img
                  src={client.after}
                  alt="after transformation"
                  style={styles.image}
                />

                <span style={styles.label}>
                  AFTER
                </span>
              </div>
            </div>

            <div style={styles.resultBox}>
              {client.result}
            </div>
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
    background: "#0d0d0d",
    overflow: "hidden",
    textAlign: "center",
  },

  glow1: {
    position: "absolute",
    width: "300px",
    height: "300px",
    background: "#ff4c29",
    filter: "blur(150px)",
    opacity: 0.12,
    top: "0",
    left: "-100px",
  },

  glow2: {
    position: "absolute",
    width: "300px",
    height: "300px",
    background: "#8b5cf6",
    filter: "blur(150px)",
    opacity: 0.12,
    bottom: "0",
    right: "-100px",
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
    maxWidth: "380px",
    padding: "25px",
    borderRadius: "24px",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.08)",
    backdropFilter: "blur(12px)",
    boxShadow: "0 0 30px rgba(255,76,41,0.08)",
  },

  images: {
    display: "flex",
    gap: "15px",
    justifyContent: "center",
    flexWrap: "wrap",
  },

  imageBox: {
    position: "relative",
  },

  image: {
    width: "150px",
    height: "260px",
    objectFit: "cover",
    borderRadius: "18px",
  },

  label: {
    position: "absolute",
    bottom: "10px",
    left: "50%",
    transform: "translateX(-50%)",
    background: "rgba(0,0,0,0.7)",
    padding: "6px 12px",
    borderRadius: "20px",
    fontSize: "0.8rem",
    fontWeight: "600",
  },

  resultBox: {
    marginTop: "25px",
    display: "inline-block",
    padding: "12px 24px",
    borderRadius: "30px",
    background:
      "linear-gradient(45deg, #ff4c29, #8b5cf6)",
    fontWeight: "700",
    boxShadow:
      "0 0 20px rgba(255,76,41,0.3)",
  },
}

export default Transformations