import { motion } from "framer-motion"

const clients = [
  {
    id: 1,
    name: "John Smith",
    email: "john@example.com",
    phone: "+961 71 123 456",
    plan: "Pro Plan",
    startDate: "2026-05-01",
    lastPayment: "2026-05-01",
    nextPayment: "2026-06-01",
    status: "Active",
    goal: "Weight Loss",
  },

  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah@example.com",
    phone: "+961 70 555 444",
    plan: "Elite Plan",
    startDate: "2026-05-15",
    lastPayment: "2026-05-15",
    nextPayment: "2026-06-15",
    status: "Active",
    goal: "Muscle Gain",
  },

  {
    id: 3,
    name: "Michael Roberts",
    email: "michael@example.com",
    phone: "+961 76 888 999",
    plan: "Starter Plan",
    startDate: "2026-05-20",
    lastPayment: "2026-05-20",
    nextPayment: "2026-06-20",
    status: "Active",
    goal: "Body Recomposition",
  },
]

function Clients() {
  return (
    <section style={styles.page}>
      <div style={styles.glow1}></div>
      <div style={styles.glow2}></div>

      <motion.div
        style={styles.header}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <p style={styles.tag}>CLIENT MANAGEMENT</p>

        <h1 style={styles.heading}>
          Active
          <span style={styles.gradientText}> Clients</span>
        </h1>

        
      </motion.div>

      <div style={styles.grid}>
        {clients.map((client, index) => (
          <motion.div
            key={client.id}
            style={styles.card}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{
              y: -12,
              scale: 1.03,
              boxShadow: "0 0 40px rgba(255,76,41,0.18)",
            }}
          >
            <h2 style={styles.name}>{client.name}</h2>

            <div style={styles.line}></div>

            <p><strong>Email:</strong> {client.email}</p>
            <p><strong>Phone:</strong> {client.phone}</p>
            <p><strong>Plan:</strong> {client.plan}</p>
            <p><strong>Goal:</strong> {client.goal}</p>
            <p><strong>Start Date:</strong> {client.startDate}</p>
            <p><strong>Paid Date:</strong> {client.lastPayment}</p>
            <p><strong>Next Due Date:</strong> {client.nextPayment}</p>

            <span style={styles.status}>{client.status}</span>
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
    marginBottom: "70px",
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
    maxWidth: "370px",
    padding: "35px 30px",
    borderRadius: "24px",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.08)",
    backdropFilter: "blur(12px)",
    boxShadow: "0 0 30px rgba(255,76,41,0.08)",
    color: "#d1d1d1",
    lineHeight: 1.9,
  },

  name: {
    color: "white",
    fontSize: "1.6rem",
    marginBottom: "20px",
  },

  line: {
    width: "60px",
    height: "2px",
    marginBottom: "25px",
    background: "linear-gradient(45deg, #ff4c29, #8b5cf6)",
  },

  status: {
    display: "inline-block",
    marginTop: "25px",
    padding: "8px 18px",
    borderRadius: "30px",
    background: "rgba(37,211,102,0.12)",
    color: "#25D366",
    fontWeight: "700",
  },
}

export default Clients