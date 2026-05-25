import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa"

import trainerData from "../data/trainerData"

function Footer() {
  const whatsappLink = `https://wa.me/${trainerData.phone}?text=${encodeURIComponent(
    trainerData.whatsappMessage
  )}`

  return (
    <footer style={styles.footer}>
      <div style={styles.glow}></div>

      <div style={styles.container}>
        <div style={styles.brand}>
          <h2 style={styles.logo}>
            {trainerData.brandName}
          </h2>

          <p style={styles.text}>
            {trainerData.footer?.text ||
              "Premium fitness coaching for real transformations, strength, and confidence."}
          </p>
        </div>

        <div style={styles.links}>
          <a href="#" style={styles.link}>Home</a>
          <a href="#programs" style={styles.link}>Programs</a>
          <a href="#pricing" style={styles.link}>Pricing</a>
          <a href="#contact" style={styles.link}>Contact</a>
        </div>

        <div style={styles.right}>
          <div style={styles.socials}>
            <a
              href={trainerData.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.socialIcon}
            >
              <FaFacebookF color="#1877F2" />
            </a>

            <a
              href={trainerData.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.socialIcon}
            >
              <FaInstagram color="#E4405F" />
            </a>

            <a
              href={trainerData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.socialIcon}
            >
              <FaLinkedinIn color="#0A66C2" />
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.socialIcon}
            >
              <FaWhatsapp color="#25D366" />
            </a>
          </div>

          <p style={styles.copy}>
            © 2026 {trainerData.brandName}. All rights reserved.
          </p>

          <p style={styles.made}>
            {trainerData.footer?.designerText ||
              "Designed by Chris Sabbak"}
          </p>
        </div>
      </div>
    </footer>
  )
}

const styles = {
  footer: {
    position: "relative",
    padding: "60px 20px",
    background: "#050505",
    borderTop: "1px solid rgba(255,255,255,0.08)",
    overflow: "hidden",
  },

  glow: {
    position: "absolute",
    width: "250px",
    height: "250px",
    background: "#8b5cf6",
    filter: "blur(140px)",
    opacity: 0.12,
    bottom: "-100px",
    left: "50%",
    transform: "translateX(-50%)",
  },

  container: {
    position: "relative",
    zIndex: 2,
    maxWidth: "1300px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "40px",
    flexWrap: "wrap",
    textAlign: "center",
  },

  brand: {
    flex: 1,
    minWidth: "260px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  logo: {
    color: "#ff4c29",
    fontSize: "1.8rem",
    marginBottom: "15px",
  },

  text: {
    color: "#b3b3b3",
    maxWidth: "320px",
    lineHeight: 1.8,
  },

  links: {
    flex: 1,
    minWidth: "260px",
    display: "flex",
    justifyContent: "center",
    gap: "25px",
    flexWrap: "wrap",
  },

  link: {
    textDecoration: "none",
    color: "#b3b3b3",
    fontWeight: "500",
    transition: "0.3s",
  },

  right: {
    flex: 1,
    minWidth: "260px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "18px",
  },

  socials: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    flexWrap: "wrap",
  },

  socialIcon: {
    width: "45px",
    height: "45px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "none",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.08)",
    fontSize: "1.2rem",
    backdropFilter: "blur(10px)",
    transition: "0.3s",
  },

  copy: {
    color: "#b3b3b3",
    textAlign: "center",
  },

  made: {
    background: "linear-gradient(45deg, #ff4c29, #8b5cf6)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontWeight: "700",
    textAlign: "center",
  },
}

export default Footer