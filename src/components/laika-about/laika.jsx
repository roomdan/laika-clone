import { Link } from "react-router-dom";
import "./laika.scss";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Button, FormControl, Input } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Checkbox from "@mui/material/Checkbox";
import AboutMovilAccordion from "../accordion-about-laika/accordion-about";

export default function LaikaAbout() {
  return (
    <div className="about-info">
      <div className="content-about-info">
        <img src="https://laika.com.co/assets/LAIKA.png" alt="laika-img" />
        <p>Síguenos en:</p>
        <div className="social-media">
          <Link to={"/"}>
            <YouTubeIcon className="icon" />
          </Link>
          <Link to={"/"}>
            <InstagramIcon className="icon" />
          </Link>
          <Link to={"/"}>
            <FacebookIcon className="icon" />
          </Link>
        </div>
      </div>
      <div className="action-about">
        <h2>ACERCA DE LAIKA</h2>
        <div className="action-go">
          <Link to={"/"}>Sobre Laika</Link>
          <Link to={"/"}>Servicios</Link>
          <Link to={"/"}>Trabaja con nosotros</Link>
          <Link to={"/"}>Blog</Link>
          <Link to={"/"}>Terminos y condiciones</Link>
        </div>
      </div>
      <div className="action-about">
        <h2>LINKS DE INTERÉS</h2>
        <div className="action-go">
          <Link to={"/"}>Preguntas frecuentes</Link>
          <Link to={"/"}>Como comprar en Laika</Link>
          <Link to={"/"}>Politica de Privacidad</Link>
          <Link to={"/"}>Contáctenos</Link>
          <Link to={"/"}>Políticas de entrega</Link>
        </div>
      </div>
      <div className="action-about">
        <h2>INFORMACIÓN</h2>
        <div className="action-go">
          <Link to={"/"}>Teléfono: 3009108496</Link>
          <Link to={"/"}>servicioclientes@laika.com.co</Link>
          <Link to={"/"}>Bogotá D.C., Colombia</Link>
        </div>
      </div>
      <div className="action-about">
        <h2>SUSCRIBETE</h2>
        <div className="action-go">
          <p>Recibe noticias y promociones al instante.</p>
          <FormControl className="subscribe-form">
            <label className="input-send">
              <Input sx={{ pl: "0.2rem" }} />
              <Button>
                <NavigateNextIcon />
              </Button>
            </label>
            <label className="check-send">
              <Checkbox />
              <p>He leído y acepto las políticas de privacidad.</p>
            </label>
          </FormControl>
        </div>
      </div>
      <div className="action-about-movil">
        <AboutMovilAccordion />
      </div>
    </div>
  );
}
