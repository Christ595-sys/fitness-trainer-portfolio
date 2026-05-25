function BackgroundEffects() {
  return (
    <>
      <div style={styles.glow1}></div>
      <div style={styles.glow2}></div>
      <div style={styles.glow3}></div>
    </>
  )
}

const styles = {
  glow1: {
    position: "fixed",
    width: "350px",
    height: "350px",

    background: "#ff4c29",

    borderRadius: "50%",

    filter: "blur(180px)",

    opacity: 0.12,

    top: "-100px",
    left: "-100px",

    zIndex: -1,

    animation: "floating 8s ease-in-out infinite",
  },

  glow2: {
    position: "fixed",
    width: "350px",
    height: "350px",

    background: "#8b5cf6",

    borderRadius: "50%",

    filter: "blur(180px)",

    opacity: 0.12,

    bottom: "-100px",
    right: "-100px",

    zIndex: -1,

    animation: "floating 10s ease-in-out infinite",
  },

  glow3: {
    position: "fixed",
    width: "250px",
    height: "250px",

    background: "#ff4c29",

    borderRadius: "50%",

    filter: "blur(150px)",

    opacity: 0.08,

    top: "40%",
    left: "50%",

    transform: "translate(-50%, -50%)",

    zIndex: -1,

    animation: "floating 12s ease-in-out infinite",
  },
}

export default BackgroundEffects