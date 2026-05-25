import { useState, useEffect } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import trainerData from "../data/trainerData"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900)

  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 900
      setIsMobile(mobile)

      if (!mobile) {
        setMenuOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const closeMenu = () => {
    setMenuOpen(false)
  }

  const scrollToSection = (id) => {
    closeMenu()

    if (location.pathname !== "/") {
      navigate("/")

      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
        })
      }, 150)
    } else {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      })
    }
  }

  return (
    <>
      <nav style={styles.nav}>
        <Link to="/" style={styles.logo} onClick={closeMenu}>
          {trainerData.brandName}
        </Link>

        {!isMobile && (
          <div style={styles.links}>
            <Link to="/" style={styles.link}>
              Home
            </Link>

            <button
              style={styles.linkButton}
              onClick={() => scrollToSection("programs")}
            >
              Programs
            </button>

            <button
              style={styles.linkButton}
              onClick={() => scrollToSection("transformations")}
            >
              Results
            </button>

            <button
              style={styles.linkButton}
              onClick={() => scrollToSection("pricing")}
            >
              Pricing
            </button>

            <button
              style={styles.linkButton}
              onClick={() => scrollToSection("about")}
            >
              About
            </button>

            <button
              style={styles.linkButton}
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </button>

            <Link to="/clients" style={styles.link}>
              Clients
            </Link>

            <Link to="/reviews" style={styles.link}>
              Reviews
            </Link>
          </div>
        )}

        {isMobile && (
          <button
            type="button"
            style={styles.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        )}
      </nav>

      {isMobile && menuOpen && (
        <motion.div
          style={styles.mobileLinks}
          initial={{ y: -10 }}
          animate={{ y: 0 }}
          transition={{
            duration: 0.18,
            ease: "easeOut",
          }}
        >
          <Link to="/" style={styles.link} onClick={closeMenu}>
            Home
          </Link>

          <button
            style={styles.linkButton}
            onClick={() => scrollToSection("programs")}
          >
            Programs
          </button>

          <button
            style={styles.linkButton}
            onClick={() => scrollToSection("transformations")}
          >
            Results
          </button>

          <button
            style={styles.linkButton}
            onClick={() => scrollToSection("pricing")}
          >
            Pricing
          </button>

          <button
            style={styles.linkButton}
            onClick={() => scrollToSection("about")}
          >
            About
          </button>

          <button
            style={styles.linkButton}
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </button>

          <Link to="/clients" style={styles.link} onClick={closeMenu}>
            Clients
          </Link>

          <Link to="/reviews" style={styles.link} onClick={closeMenu}>
            Reviews
          </Link>
        </motion.div>
      )}

      <style>
        {`
          a,
          button {
            position: relative;
            transition: 0.25s;
          }

          a::after,
          button::after {
            content: "";
            position: absolute;
            width: 0%;
            height: 2px;
            left: 0;
            bottom: -4px;
            background: #ff4c29;
            transition: 0.25s;
          }

          a:hover::after,
          button:hover::after {
            width: 100%;
          }

          a:hover,
          button:hover {
            color: #ff4c29 !important;
          }
        `}
      </style>
    </>
  )
}

const styles = {
  nav: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 30px",
    background: "rgba(0,0,0,0.7)",
    backdropFilter: "blur(10px)",
    zIndex: 1000,
  },

  logo: {
    textDecoration: "none",
    color: "#ff4c29",
    fontSize: "1.6rem",
    fontWeight: "bold",
    letterSpacing: "1px",
  },

  links: {
    display: "flex",
    gap: "22px",
    alignItems: "center",
  },

  mobileLinks: {
    position: "fixed",
    top: "78px",
    left: 0,
    width: "100%",
    background: "#111",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "25px",
    padding: "30px 0",
    boxShadow: "0 8px 15px rgba(0,0,0,0.35)",
    zIndex: 999,
  },

  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "0.95rem",
    fontWeight: "500",
    background: "transparent",
    border: "none",
    cursor: "pointer",
  },

  linkButton: {
    textDecoration: "none",
    color: "white",
    fontSize: "0.95rem",
    fontWeight: "500",
    background: "transparent",
    border: "none",
    cursor: "pointer",
    fontFamily: "inherit",
  },

  hamburger: {
    color: "white",
    fontSize: "2rem",
    cursor: "pointer",
    background: "transparent",
    border: "none",
  },
}

export default Navbar