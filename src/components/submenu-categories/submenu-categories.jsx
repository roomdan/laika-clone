import ParkIcon from "@mui/icons-material/Park";
import PetsIcon from "@mui/icons-material/Pets";
import IcecreamIcon from "@mui/icons-material/Icecream";
import MedicationIcon from "@mui/icons-material/Medication";
import BathroomIcon from "@mui/icons-material/Bathroom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

import "./submenu-categories.scss";

export default function SubMenuCategories() {
  return (
    <div className="menu-opts">
      <div className="left-sect">
        <div className="menu-item">
          <img src="https://laika.com.co/assets/home/dog_mc.svg" alt="perro" />
          <Button className="item-btn">
            Perro
            <ExpandMoreIcon />
          </Button>
          <div className="categories-opt-menu-dog">
            <div className="block-category-first">
              <div className="name-block">
                <ParkIcon className="name-block-icon" />
                Navidad
              </div>
              <div className="block-items">
                {[
                  "Para Comer",
                  "para jugar",
                  "para consentir",
                  "para morder",
                  "para pasear",
                  "para vetir",
                  "temporada",
                ].map((e) => (
                  <Link className="items-categories" key={e} to={"/"}>
                    {e}
                  </Link>
                ))}
                <Link className="items-categories" to={"/"}>
                  ver mas
                </Link>
              </div>
            </div>
            <div className="block-category-first">
              <div className="name-block">
                <PetsIcon className="name-block-icon" />
                Alimento
              </div>
              <div className="block-items">
                {["Concentrado", "Humedo", "dietas naturales"].map((e) => (
                  <Link className="items-categories" key={e} to={"/"}>
                    {e}
                  </Link>
                ))}
                <Link className="items-categories" to={"/"}>
                  ver mas
                </Link>
              </div>
            </div>
            <div className="block-category-first">
              <div className="name-block">
                <IcecreamIcon className="name-block-icon" />
                Snacks
              </div>
              <div className="block-items">
                {[
                  "Brownies y otros",
                  "Tortas y celebracion",
                  "huesos y carnaza",
                  "galletas y snacks",
                ].map((e) => (
                  <Link className="items-categories" key={e} to={"/"}>
                    {e}
                  </Link>
                ))}
                <Link className="items-categories" to={"/"}>
                  ver mas
                </Link>
              </div>
            </div>
            <div className="block-category-first">
              <div className="name-block">
                <MedicationIcon className="name-block-icon" />
                Farmapet
              </div>
              <div className="block-items">
                {[
                  "Antiparasitarios",
                  "Suplementos",
                  "Analgésicos",
                  "Antibacterianos",
                  "Antibioticos",
                  "Antiinflamatorios",
                  "Antipulgas y garrapatas",
                ].map((e) => (
                  <Link className="items-categories" key={e} to={"/"}>
                    {e}
                  </Link>
                ))}
                <Link className="items-categories" to={"/"}>
                  ver mas
                </Link>
              </div>
            </div>
            <div className="block-category-first">
              <div className="name-block">
                <BathroomIcon className="name-block-icon" />
                Cuidado e Higiene
              </div>
              <div className="block-items">
                {[
                  "Higiene",
                  "Cepillos",
                  "Corta uñas",
                  "Cuidado hogar",
                  "Cuidado oral",
                  "Protector Vehiculos",
                  "Residuos de mascotas",
                ].map((e) => (
                  <Link className="items-categories" key={e} to={"/"}>
                    {e}
                  </Link>
                ))}
                <Link className="items-categories" to={"/"}>
                  ver mas
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="menu-item">
          <img src="https://laika.com.co/assets/home/cat_mc_s.svg" alt="gato" />
          <Button className="item-btn">
            Gato
            <ExpandMoreIcon />
          </Button>
          <div className="categories-opt-menu-cat">
            <div className="block-category-first">
              <div className="name-block">
                <ParkIcon className="name-block-icon" />
                Navidad
              </div>
              <div className="block-items">
                {[
                  "Para Comer",
                  "para jugar",
                  "para consentir",
                  "para morder",
                  "para pasear",
                  "para vestir",
                  "temporada",
                ].map((e) => (
                  <Link className="items-categories" key={e} to={"/"}>
                    {e}
                  </Link>
                ))}
                <Link className="items-categories" to={"/"}>
                  ver mas
                </Link>
              </div>
            </div>
            <div className="block-category-first">
              <div className="name-block">
                <PetsIcon className="name-block-icon" />
                Alimento
              </div>
              <div className="block-items">
                {["Concentrado", "Humedo", "dietas naturales"].map((e) => (
                  <Link className="items-categories" key={e} to={"/"}>
                    {e}
                  </Link>
                ))}
                <Link className="items-categories" to={"/"}>
                  ver mas
                </Link>
              </div>
            </div>
            <div className="block-category-first">
              <div className="name-block">
                <BathroomIcon className="name-block-icon" />
                Arenas
              </div>
              <div className="block-items">
                {["Arenas"].map((e) => (
                  <Link className="items-categories" key={e} to={"/"}>
                    {e}
                  </Link>
                ))}
                <Link className="items-categories" to={"/"}>
                  ver mas
                </Link>
              </div>
            </div>
            <div className="block-category-first">
              <div className="name-block">
                <IcecreamIcon className="name-block-icon" />
                Snacks
              </div>
              <div className="block-items">
                {["Brownies y otros", "galletas y snacks"].map((e) => (
                  <Link className="items-categories" key={e} to={"/"}>
                    {e}
                  </Link>
                ))}
                <Link className="items-categories" to={"/"}>
                  ver mas
                </Link>
              </div>
            </div>
            <div className="block-category-first">
              <div className="name-block">
                <MedicationIcon className="name-block-icon" />
                Farmapet
              </div>
              <div className="block-items">
                {[
                  "Antiparasitarios",
                  "Suplementos",
                  "Analgésicos",
                  "Antibacterianos",
                  "Antibioticos",
                  "Antiinflamatorios",
                  "Antipulgas y garrapatas",
                ].map((e) => (
                  <Link className="items-categories" key={e} to={"/"}>
                    {e}
                  </Link>
                ))}
                <Link className="items-categories" to={"/"}>
                  ver mas
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="menu-item">
          <Button className="item-btn">
            Servicios
            <ExpandMoreIcon />
          </Button>
        </div>
        <div className="menu-item">
          <p>Promociones</p>
        </div>
        <div className="menu-item">
          <p>Blog</p>
        </div>
      </div>
      <div className="left-sect">
        <Link to="/">
          <img
            src="https://laika.com.co/assets/laika_vetcare/membership_logo.png"
            alt="laika"
          />
        </Link>
      </div>
    </div>
  );
}
