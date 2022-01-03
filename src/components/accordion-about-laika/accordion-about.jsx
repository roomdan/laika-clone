import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";
import { Button, FormControl, TextField } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Checkbox from "@mui/material/Checkbox";

export default function AboutMovilAccordion() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div style={{ width: "100%" }}>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        sx={{ width: "100%" }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: "100%", flexShrink: 0 }}>
            ACERCA DE LAIKA
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="action-go">
            <Link to={"/"}>Sobre Laika</Link>
            <Link to={"/"}>Servicios</Link>
            <Link to={"/"}>Trabaja con nosotros</Link>
            <Link to={"/"}>Blog</Link>
            <Link to={"/"}>Terminos y condiciones</Link>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        sx={{ width: "100%" }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: "100%", flexShrink: 0 }}>
            LINKS DE INTERÉS
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="action-go">
            <Link to={"/"}>Preguntas frecuentes</Link>
            <Link to={"/"}>Como comprar en Laika</Link>
            <Link to={"/"}>Politica de Privacidad</Link>
            <Link to={"/"}>Contáctenos</Link>
            <Link to={"/"}>Políticas de entrega</Link>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        sx={{ width: "100%" }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: "100%", flexShrink: 0 }}>
            INFORMACIÓN
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="action-go">
            <Link to={"/"}>Teléfono: 3009108496</Link>
            <Link to={"/"}>servicioclientes@laika.com.co</Link>
            <Link to={"/"}>Bogotá D.C., Colombia</Link>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
        sx={{ width: "100%" }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: "100%", flexShrink: 0 }}>
            SUSCRIBETE
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="action-go">
            <p>Recibe noticias y promociones al instante.</p>
            <FormControl className="subscribe-form">
              <label className="input-send">
                <TextField id="outlined-basic" sx={{ pl: "0.2rem" }} />
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
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
