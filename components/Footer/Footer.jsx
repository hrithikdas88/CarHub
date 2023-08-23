import Image from "next/image";
import Link from "next/link";
import "./Footer.scss";
import { footerLinks } from "@/constants";

const Footer = () => {
  return (
    <footer className="footermain">
      <div className="footertop">
        <div className="footertopmain">
          <Image
            src="/logo.svg"
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
          <p className="footerpara">Carhub 2023 All rights reserved</p>
        </div>
        <div className="footer__links">
          {footerLinks.map((link) => (
            <div key={link.title} className="footer__link">
              <h3 className="font-bold">{link.title}</h3>
              <div className="linkmain">
                {link.links.map((item) => (
                  <Link key={item.title} href={item.url} className="linked">
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="footerbottom">
        <p>@2023 Carhub All rights reserved</p>
        <div className="footercopyright">
          <Link
            href="/"
            className="linked"
            style={{ textDecoration: "none", color: "grey" }}
          >
            Privacy & Policy
          </Link>
          <Link
            href="/"
            className="linked"
            style={{ textDecoration: "none", color: "grey" }}
          >
            Terms & Condition
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
