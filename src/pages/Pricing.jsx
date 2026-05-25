import { motion } from "framer-motion"
import trainerData from "../data/trainerData"

function Pricing() {
  const whatsappMessage = (planName) =>
    `Hi I want the ${planName} plan`

  return (
    <section id="pricing" style={styles.section}>
      <div style={styles.glow1}></div>
      <div style={styles.glow2}></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p style={styles.tag}>PRICING PLANS</p>

        <h2 style={styles.heading}>
          Choose Your
          <span style={styles.gradientText}>
            {" "}Transformation
          </span>
        </h2>

        <p style={styles.subheading}>
          Flexible coaching plans designed for every level,
          from beginners to elite athletes.
        </p>
      </motion.div>

      <div style={styles.container}>
        {trainerData.plans.map((plan, index) => (
          <motion.div
            key={index}
            style={{
              ...styles.card,
              ...(plan.popular ? styles.popularCard : {}),
            }}
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
            {plan.popular && (
              <div style={styles.badge}>
                MOST POPULAR
              </div>
            )}

            <h3 style={styles.planName}>
              {plan.name}
            </h3>

            <h2 style={styles.price}>
              {plan.price}
              <span style={styles.month}>
                /month
              </span>
            </h2>

            <p style={styles.description}>
              {plan.description}
            </p>

            <div style={styles.features}>
              {plan.features.map((feature, i) => (
                <div key={i} style={styles.feature}>
                  ✔ {feature}
                </div>
              ))}
            </div>

            <a
              href={`https://wa.me/${trainerData.phone}?text=${encodeURIComponent(
                whatsappMessage(plan.name)
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              style={
                plan.popular
                  ? styles.popularBtn
                  : styles.button
              }
            >
              Get Started
            </a>
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
    left: "-120px",
  },

  glow2: {
    position: "absolute",
    width: "300px",
    height: "300px",
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
    padding: "45px 35px",
    borderRadius: "28px",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.08)",
    backdropFilter: "blur(12px)",
    boxShadow: "0 0 30px rgba(255,76,41,0.08)",
    position: "relative",
  },

  popularCard: {
    transform: "scale(1.05)",
    border: "1px solid rgba(255,76,41,0.4)",
    boxShadow:
      "0 0 40px rgba(255,76,41,0.2)",
  },

  badge: {
    position: "absolute",
    top: "-14px",
    left: "50%",
    transform: "translateX(-50%)",
    padding: "8px 18px",
    borderRadius: "30px",
    background:
      "linear-gradient(45deg, #ff4c29, #8b5cf6)",
    fontSize: "0.8rem",
    fontWeight: "700",
  },

  planName: {
    fontSize: "1.8rem",
    marginBottom: "20px",
  },

  price: {
    fontSize: "3rem",
    marginBottom: "20px",
    background:
      "linear-gradient(45deg, #ff4c29, #8b5cf6)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  month: {
    fontSize: "1rem",
    color: "#999",
  },

  description: {
    color: "#b3b3b3",
    lineHeight: 1.8,
    marginBottom: "35px",
  },

  features: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    marginBottom: "40px",
    textAlign: "left",
  },

  feature: {
    color: "#d1d1d1",
  },

  button: {
    display: "inline-block",
    textDecoration: "none",
    padding: "15px 32px",
    borderRadius: "40px",
    border: "1px solid rgba(255,255,255,0.15)",
    background: "rgba(255,255,255,0.05)",
    color: "white",
    fontWeight: "600",
    transition: "0.3s",
    transform: "translateY(0px)",
  },

  popularBtn: {
    display: "inline-block",
    textDecoration: "none",
    padding: "15px 32px",
    borderRadius: "40px",
    background:
      "linear-gradient(45deg, #ff4c29, #8b5cf6)",
    color: "white",
    fontWeight: "700",
    boxShadow:
      "0 0 25px rgba(255,76,41,0.3)",
    transition: "0.3s",
    transform: "translateY(0px)",
  },
}

export default Pricing