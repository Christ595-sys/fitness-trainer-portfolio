import { FaWhatsapp } from "react-icons/fa";
import trainerData from "../data/trainerData";

function WhatsAppButton() {
  const whatsappLink = `https://wa.me/${trainerData.phone}?text=${encodeURIComponent(
    trainerData.whatsappMessage
  )}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      style={styles.button}
    >
      <FaWhatsapp />
    </a>
  );
}

const styles = {
  button: {
    position: "fixed",
    right: "25px",
    bottom: "25px",
    width: "65px",
    height: "65px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "none",
    background: "#25D366",
    color: "white",
    fontSize: "2rem",
    zIndex: 999,
    boxShadow: "0 0 25px rgba(37,211,102,0.4)",
  },
};

export default WhatsAppButton;