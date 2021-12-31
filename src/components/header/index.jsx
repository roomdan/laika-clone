import { Button, Input, TextField } from "@mui/material";
import "./style.scss";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import ShieldIcon from "@mui/icons-material/Shield";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";

import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import SelectList from "../select/select";

export default function Header() {
  const { register, handleSubmit, resetField } = useForm();
  const [search, setSearh] = useState("");
  const [viewAddAdres, setViewAddAdres] = useState("none");
  const [viewAccount, setViewAccount] = useState("none");
  const [movilMenu, setMovilMenu] = useState("none");

  useEffect(() => {
    if (document.body.clientWidth < 920) {
      setMovilMenu("none");
    }
  }, []);

  const openAdres = () => {
    viewAddAdres === "none" ? setViewAddAdres("flex") : setViewAddAdres("none");
  };
  const openAccount = () => {
    viewAccount === "none" ? setViewAccount("flex") : setViewAccount("none");
  };

  if (viewAccount === "flex") {
    setTimeout(openAccount, 10000);
  }

  return (
    <header
      onClick={() => {
        if (viewAccount === "flex") {
          openAccount();
        }
      }}
      className="header"
    >
      <div className="local-inf">
        <div className="resum-inf">
          <span className="item-rsm">
            <ShieldIcon sx={{ height: 18 }} />
            <p>Compras seguras online</p>
          </span>
          <span className="item-rsm">
            <CreditScoreIcon sx={{ height: 18 }} />
            <p>Pago contra entrega</p>
          </span>
          <span className="item-rsm">
            <LocalShippingIcon sx={{ height: 18 }} />
            <p>Entregas el mismo dia</p>
          </span>
        </div>
        <div className="social-inf">
          <span className="social-items">
            <p role={"link"}>Llamanos al 3009108496</p>
          </span>
          <span className="social-items">
            <p role={"link"}>Excribenos</p>
            <YouTubeIcon sx={{ height: 30, ml: "1rem" }} />
            <FacebookIcon sx={{ height: 30, ml: "1rem" }} />
            <InstagramIcon sx={{ height: 30, ml: "1rem" }} />
          </span>
        </div>
      </div>
      <nav>
        <div className="nav-bar-laika">
          <span className="logo">
            <Link to={"/"}>
              <img
                alt="laika"
                src="https://laika.com.co/assets/home/LaikaMascotas.svg"
              />
            </Link>
          </span>
          <div>
            <form
              className="search-p"
              onChange={handleSubmit((e) => setSearh(e))}
            >
              <button
                onClick={() => {
                  movilMenu === "none"
                    ? setMovilMenu("flex")
                    : setMovilMenu("none");
                }}
                type="button"
                className="hmg-movil-btn"
              >
                <MenuIcon sx={{ color: "white" }} />
              </button>
              <label className="search-box">
                <SearchIcon sx={{ width: "5%", cursor: "pointer" }} />
                <Input
                  {...register("onSearch")}
                  placeholder="¿Qué necesita tu mascota?"
                  sx={{ width: "90%" }}
                  type="text"
                ></Input>
                <CloseIcon
                  onClick={() => {
                    resetField("onSearch");
                  }}
                  sx={{ width: "5%", cursor: "pointer" }}
                />
              </label>
            </form>
          </div>
          <div className="options">
            <div className="options-items">
              <Button onClick={openAdres} className="btn-Wout">
                Agregar dirección
                <ExpandMoreIcon />
              </Button>
              <div className="create-acount">
                <Button onClick={openAccount} className="btn-Wout-acc">
                  Crear Cuenta
                  <ExpandMoreIcon />
                </Button>
                <div style={{ display: viewAccount }} className="form-comp">
                  <Button className="login-bnt">Iniciar Sesion</Button>
                  <div>¿Eres nuevo Cliente</div>
                  <Button className="create-bnt">Crear Cuenta</Button>
                </div>
              </div>
              <Button className="btn-Wout-shop">
                <ShoppingBasketIcon />
                <span className="num-prodc">0</span>
              </Button>
            </div>
          </div>
          <div className="options-movil">
            <div style={{ display: movilMenu }} className="options-items">
              <Button onClick={openAdres} className="btn-Wout">
                <MapsHomeWorkIcon />
                <ExpandMoreIcon />
              </Button>
              <div className="create-acount">
                <Button onClick={openAccount} className="btn-Wout-acc">
                  <AccountCircleIcon />
                  <ExpandMoreIcon />
                </Button>
                <div style={{ display: viewAccount }} className="form-comp">
                  <Button className="login-bnt">Iniciar Sesion</Button>
                  <div>¿Eres nuevo Cliente</div>
                  <Button className="create-bnt">Crear Cuenta</Button>
                </div>
              </div>
              <Button className="btn-Wout-shop">
                <ShoppingBasketIcon />
                <span className="num-prodc">0</span>
              </Button>
            </div>
          </div>
        </div>
      </nav>
      <div className="menu-opts">
        <div className="left-sect">
          <div className="menu-item">
            <img
              src="https://laika.com.co/assets/home/dog_mc.svg"
              alt="perro"
            />
            <Button className="item-btn">
              Perro
              <ExpandMoreIcon />
            </Button>
          </div>
          <div className="menu-item">
            <img
              src="https://laika.com.co/assets/home/cat_mc_s.svg"
              alt="gato"
            />
            <Button className="item-btn">
              Gato
              <ExpandMoreIcon />
            </Button>
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
      <div style={{ display: viewAddAdres }} className="add-adres">
        <div onClick={openAdres} className="close-area"></div>
        <div className="box-content">
          <span>
            <h2>Agregar dirección</h2>
            <p>
              Ingresa tu dirección para mostrarte los productos disponibles en
              tu área
            </p>
          </span>
          <form className="add-new">
            <SelectList
              className="type-add"
              items={[{ value: "Bogotá", name: "Bogotá" }]}
              label={"Selecciona tu ciudad"}
            />
            <SelectList
              className="type-add"
              items={[
                { value: "Calle", name: "Calle" },
                { value: "Carrera", name: "Carrera" },
              ]}
              label={"Dirección"}
            />
            <div className="address-points">
              <TextField id="filled-basic" label="" variant="filled" /> #
              <TextField id="filled-basic" label="" variant="filled" />-
              <TextField id="filled-basic" label="" variant="filled" />
            </div>
            <TextField
              className="type-add"
              label="Apto / Piso / Casa"
              variant="filled"
            />
          </form>
          <Button className="handle-btn">Agregar Dirección</Button>
        </div>
        <div onClick={openAdres} className="close-area"></div>
      </div>
    </header>
  );
}
