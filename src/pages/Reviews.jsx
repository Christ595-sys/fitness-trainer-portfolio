import { useState } from "react"
import { motion } from "framer-motion"
import trainerData from "../data/trainerData"

function Reviews() {
  const [reviews, setReviews] = useState(
    trainerData.testimonials.map((review) => ({
      ...review,
      stars: 5,
    }))
  )

  const [form, setForm] = useState({
    name: "",
    stars: 5,
    text: "",
  })

  const addReview = (e) => {
    e.preventDefault()

    if (!form.name || !form.text) return

    setReviews([
      ...reviews,
      {
        name: form.name,
        role: "Client Review",
        stars: form.stars,
        text: form.text,
      },
    ])

    setForm({
      name: "",
      stars: 5,
      text: "",
    })
  }

  return (
    <section style={styles.page}>
      <div style={styles.glow1}></div>
      <div style={styles.glow2}></div>

      <motion.div
        style={styles.header}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <p style={styles.tag}>CLIENT REVIEWS</p>

        <h1 style={styles.heading}>
          Share Your
          <span style={styles.gradientText}> Experience</span>
        </h1>

      
      </motion.div>

      <motion.form
        style={styles.formCard}
        onSubmit={addReview}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h2 style={styles.formTitle}>Add Testimonial</h2>

        <input
          placeholder="Your Name"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
          style={styles.input}
        />

        <div style={styles.starsInput}>
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() =>
                setForm({ ...form, stars: star })
              }
              style={{
                ...styles.starButton,
                color: star <= form.stars ? "#ff4c29" : "#555",
              }}
            >
              ★
            </button>
          ))}
        </div>

        <textarea
          placeholder="Write your review..."
          value={form.text}
          onChange={(e) =>
            setForm({ ...form, text: e.target.value })
          }
          style={styles.textarea}
        />

        <button type="submit" style={styles.submitButton}>
          Submit Review
        </button>
      </motion.form>

      <div style={styles.grid}>
        {reviews.map((review, index) => (
          <motion.div
            key={index}
            style={styles.card}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            whileHover={{
              y: -12,
              scale: 1.03,
              boxShadow: "0 0 40px rgba(255,76,41,0.18)",
            }}
          >
            <div style={styles.stars}>
              {"★".repeat(review.stars)}
            </div>

            <p style={styles.text}>"{review.text}"</p>

            <div style={styles.line}></div>

            <h4 style={styles.name}>{review.name}</h4>

            <p style={styles.role}>{review.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

const styles = {
  page: {
    position: "relative",
    minHeight: "100vh",
    padding: "150px 20px 100px",
    background: "#0a0a0a",
    overflow: "hidden",
  },

  glow1: {
    position: "absolute",
    width: "300px",
    height: "300px",
    background: "#ff4c29",
    filter: "blur(150px)",
    opacity: 0.12,
    top: "80px",
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

  header: {
    position: "relative",
    zIndex: 2,
    textAlign: "center",
    marginBottom: "60px",
  },

  tag: {
    color: "#ff4c29",
    letterSpacing: "3px",
    fontWeight: "600",
    marginBottom: "20px",
  },

  heading: {
    fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
    marginBottom: "20px",
  },

  gradientText: {
    background: "linear-gradient(45deg, #ff4c29, #8b5cf6)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  subheading: {
    color: "#b3b3b3",
    maxWidth: "700px",
    margin: "0 auto",
    lineHeight: 1.8,
  },

  formCard: {
    position: "relative",
    zIndex: 2,
    maxWidth: "550px",
    margin: "0 auto 70px",
    padding: "40px",
    borderRadius: "28px",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.08)",
    backdropFilter: "blur(12px)",
    boxShadow: "0 0 35px rgba(255,76,41,0.1)",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },

  formTitle: {
    textAlign: "center",
    marginBottom: "10px",
  },

  input: {
    padding: "18px 20px",
    borderRadius: "16px",
    border: "1px solid rgba(255,255,255,0.08)",
    background: "rgba(255,255,255,0.04)",
    color: "white",
    outline: "none",
    fontSize: "1rem",
  },

  textarea: {
    minHeight: "140px",
    padding: "18px 20px",
    borderRadius: "16px",
    border: "1px solid rgba(255,255,255,0.08)",
    background: "rgba(255,255,255,0.04)",
    color: "white",
    outline: "none",
    resize: "none",
    fontSize: "1rem",
  },

  starsInput: {
    display: "flex",
    justifyContent: "center",
    gap: "8px",
  },

  starButton: {
    background: "transparent",
    border: "none",
    fontSize: "2rem",
    cursor: "pointer",
    transition: "0.2s",
  },

  submitButton: {
    padding: "16px",
    borderRadius: "40px",
    border: "none",
    background: "linear-gradient(45deg, #ff4c29, #8b5cf6)",
    color: "white",
    fontWeight: "700",
    fontSize: "1rem",
    cursor: "pointer",
    boxShadow: "0 0 25px rgba(255,76,41,0.3)",
  },

  grid: {
    position: "relative",
    zIndex: 2,
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    flexWrap: "wrap",
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
    textAlign: "center",
  },

  stars: {
    fontSize: "1.3rem",
    marginBottom: "25px",
    color: "#ff4c29",
  },

  text: {
    color: "#d1d1d1",
    lineHeight: 1.9,
    marginBottom: "30px",
  },

  line: {
    width: "60px",
    height: "2px",
    margin: "0 auto 25px",
    background: "linear-gradient(45deg, #ff4c29, #8b5cf6)",
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

export default Reviews