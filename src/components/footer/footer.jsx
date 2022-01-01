import "./footer.scss";
import LockIcon from "@mui/icons-material/Lock";
import ShieldIcon from "@mui/icons-material/Shield";
import { payMethods } from "../../util/responses/paymethods.response";
import { DownloadApp } from "../../util/responses/app.response";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="app-info">
        <span className="continer-inf-footer pay-methods">
          <div className="head-pay-methods">
            <div className="pay-message">Pago 100% seguro </div>
            <div className="lock-icon">
              <LockIcon className="secure-icon" />
              <div className="ssl">SSL</div>
            </div>
          </div>
          <div className="app-certified">
            Este certificado garantiza la seguridad de todas tus conexiones
            mediante cifrado.
          </div>
          <div className="pay-methods-icons">
            {payMethods.map((method) => (
              <div key={method.id} className="icon-pay">
                <img src={method.img} alt={method.alt} />
              </div>
            ))}
          </div>
        </span>
        <span className="continer-inf-footer protecttion-inf">
          <ShieldIcon className="shield-icon" />
          <div className="shield-ms">Protección segura 24/7</div>
        </span>
        <div className="continer-inf-footer downl-app">
          {DownloadApp.map((app) => (
            <Link className="go-downolad-app" key={app.id} to={"/"}>
              <img src={app.img} alt={app.alt} />
            </Link>
          ))}
        </div>
      </div>
      <div className="app-info">
        <div className="end-app-info">
          <div className="company-data">
            <a href="https://www.sic.gov.co">https://www.sic.gov.co</a>
            <b>/ Proyecto E S.A.S. /</b>
            <p>/ NIT: 901.110.407 -4/</p>
            <p>
              <b>Dirección de notificación judicial:</b> Cra 68G No. 74B - 56,
              Bogotá DC
            </p>
          </div>
          <div className="company-data">
            <b>Teléfono:</b> 300 9108496
            <b>/ Correo electrónico para notificación judicial:</b>
            <a href="mailto:contabilidad@laika.com.co">
              contabilidad@laika.com.co
            </a>
          </div>
        </div>
      </div>
      <div className="end-page">
        Copyright © 2021 LAIKA - Derechos reservados
      </div>
    </footer>
  );
}
