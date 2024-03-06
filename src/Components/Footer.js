import React from "react";
import { useMediaQuery } from "@mui/material";

const Footer = () => {
  const isSmallScreen = useMediaQuery("(max-width: 625px)");
  return (
    <section className="footerMain">
      <div className="footer-m1">
        <div>
          <h4>SERVICES</h4>
          <ul className="footer-m1-list">
            <a
              href="https://spanidea.com/in/embedded-software-engineering/"
              target="_blank"
              style={{ textDecoration: "none", color: "white" }}
            >
              <li>Embedded Software Engineering</li>
            </a>
            <a
              href="https://spanidea.com/in/hardware-vlsi-engineering/"
              target="_blank"
              style={{ textDecoration: "none", color: "white" }}
            >
              <li>Hardware & VLSI Engineering</li>
            </a>
            <a
              href="https://spanidea.com/in/software-product-engineering/"
              target="_blank"
              style={{ textDecoration: "none", color: "white" }}
            >
              <li>Software Product Engineering</li>
            </a>
            <a
              href="https://spanidea.com/in/internet-of-things-iot/"
              target="_blank"
              style={{ textDecoration: "none", color: "white" }}
            >
              <li>Internet of Things</li>
            </a>
            <a
              href="https://spanidea.com/in/5g-services/"
              target="_blank"
              style={{ textDecoration: "none", color: "white" }}
            >
              <li>5G Services</li>
            </a>
            <a
              href="https://spanidea.com/in/networking-and-wi-fi/"
              target="_blank"
              style={{ textDecoration: "none", color: "white" }}
            >
              <li>Networking & Wi-Fi</li>
            </a>
            <a
              href="https://spanidea.com/in/application-services/"
              target="_blank"
              style={{ textDecoration: "none", color: "white" }}
            >
              <li>Application Services</li>
            </a>
            <a
              href="https://spanidea.com/in/cloud-computing/"
              target="_blank"
              style={{ textDecoration: "none", color: "white" }}
            >
              <li>Cloud Computing</li>
            </a>
            <a
              href="https://spanidea.com/in/devops/"
              target="_blank"
              style={{ textDecoration: "none", color: "white" }}
            >
              <li>DevOps</li>
            </a>
            <a
              href="https://spanidea.com/in/analytics-data-science-ai/"
              target="_blank"
              style={{ textDecoration: "none", color: "white" }}
            >
              <li>Analytics, Data Science & AI</li>
            </a>
            <a
              href="https://spanidea.com/in/qa-testing/"
              target="_blank"
              style={{ textDecoration: "none", color: "white" }}
            >
              <li>QA & Testing</li>
            </a>
          </ul>
        </div>
        <div>
          <h4>INDUSTRIES</h4>
          <ul className="footer-m1-list">
            <a
              href="https://spanidea.com/in/automotive/"
              target="_blank"
              style={{ textDecoration: "none", color: "white" }}
            >
              <li>Automotive</li>
            </a>
            <a
              href="https://spanidea.com/in/consumer-electronics/"
              target="_blank"
              style={{ textDecoration: "none", color: "white" }}
            >
              <li>Consumer Electronics</li>
            </a>
            <a
              href="https://spanidea.com/in/hi-tech/"
              target="_blank"
              style={{ textDecoration: "none", color: "white" }}
            >
              <li>Hi-Tech</li>
            </a>
            <a
              href="https://spanidea.com/in/health-care-and-life-sciences/"
              target="_blank"
              style={{ textDecoration: "none", color: "white" }}
            >
              <li>Healthcare & Life Sciences</li>
            </a>
            <a
              href="https://spanidea.com/in/retail/"
              target="_blank"
              style={{ textDecoration: "none", color: "white" }}
            >
              <li>Retail</li>
            </a>
            <a
              href="https://spanidea.com/in/banking-financial-services-insurance/"
              target="_blank"
              style={{ textDecoration: "none", color: "white" }}
            >
              <li>Banking, Financial Services & Insurance</li>
            </a>
            <a
              href="https://spanidea.com/in/communications-media-technology/"
              target="_blank"
              style={{ textDecoration: "none", color: "white" }}
            >
              <li>Communications, Media & Technology</li>
            </a>
            <a
              href="https://spanidea.com/in/manufacturing-and-industrial/"
              target="_blank"
              style={{ textDecoration: "none", color: "white" }}
            >
              <li>Manufacturing and Industrial</li>
            </a>
            <a
              href="https://spanidea.com/in/clean-energy-utility-sector/"
              target="_blank"
              style={{ textDecoration: "none", color: "white" }}
            >
              <li>Clean Energy & Utility Sector</li>
            </a>
          </ul>
        </div>
        <div>
          <h4>SOLUTIONS</h4>
          <ul className="footer-m1-list">
            <a
              href="https://spanidea.com/in/uconnect/"
              target="_blank"
              style={{ textDecoration: "none", color: "white" }}
            >
              <li>UConnect</li>
            </a>
            <a
              href="https://spanidea.com/in/umanage/"
              target="_blank"
              style={{ textDecoration: "none", color: "white" }}
            >
              <li>Umanage</li>
            </a>
            <a
              href="https://spanidea.com/in/andsf/"
              target="_blank"
              style={{ textDecoration: "none", color: "white" }}
            >
              <li>ANDSF</li>
            </a>
            <a
              href="https://spanidea.com/in/ucwmp/"
              target="_blank"
              style={{ textDecoration: "none", color: "white" }}
            >
              <li>UCWMP</li>
            </a>
            <a
              href="https://spanidea.com/in/silrtos-2-3/"
              target="_blank"
              style={{ textDecoration: "none", color: "white" }}
            >
              <li>silRTOS</li>
            </a>
          </ul>
        </div>
        <div>
          <h4>ABOUT US</h4>
          <ul className="footer-m1-list">
            <a
              href="https://spanidea.com/in/about-us/#overview"
              target="_blank"
              style={{ textDecoration: "none", color: "white" }}
            >
              <li>Overview</li>
            </a>
            <a
              href="https://spanidea.com/in/about-us/#Awards&certifications"
              target="_blank"
              style={{ textDecoration: "none", color: "white" }}
            >
              <li>Awards & Certifications</li>
            </a>
            <a
              href="https://careers.spanidea.com/"
              target="_blank"
              style={{ textDecoration: "none", color: "white" }}
            >
              <li>Careers</li>
            </a>
            <a
              href="https://spanidea.com/in/leadership/"
              target="_blank"
              style={{ textDecoration: "none", color: "white" }}
            >
              <li>Leadership</li>
            </a>
            <a
              href="https://spanidea.com/in/contact-us/#locations"
              target="_blank"
              style={{ textDecoration: "none", color: "white" }}
            >
              <li>Locations</li>
            </a>
          </ul>
        </div>
      </div>
      <div className="footer-m2">
        <div>
          <img src="/footer1.png" className="footer-m2-img" />
        </div>
        <div>
          <img src="/footer2.png" className="footer-m2-img" />
        </div>
        <div>
          <img src={!isSmallScreen ? "/footer3.webp" : '/footer3.png'} style={{ paddingTop: "10px" }} 
          className={isSmallScreen ? "footer-m2-img2" : ""}/>
        </div>
        <div>
          <img src="/footer4.png" className="footer-m2-img" />
        </div>
        <div>
          <img src="/footer5.png" className="footer-m2-img" />
        </div>
      </div>
      <div className="footer-m3">
        <hr className="footer-m3-line"></hr>
      </div>
      <div className="footer-m4">
        <div>
          <img src="/spanIdeaLogo.webp" className="spanIdeaLogoFooter" />
        </div>
        <div className="footer-m4-icons">
          <a
            href="https://www.facebook.com/SpanIdeaSystemsPvtLtd"
            target="_blank"
          >
            <img src="/facebook.png" />
          </a>
          <a href="https://twitter.com/SpanIdeaSystems/" target="_blank">
            <img src="/twitter.png" />
          </a>
          <a
            href="https://www.linkedin.com/company/spanidea-systems"
            target="_blank"
          >
            <img src="/linkedin.png" />
          </a>
          <a href="https://www.instagram.com/spanideasystems/" target="_blank">
            <img src="/instagram.png" />
          </a>
          <a href="https://www.youtube.com/@spanideasystem" target="_blank">
            <img src="/youtube.png" />
          </a>
        </div>
        <div className="footer-m4-text">
          <div>©{new Date().getFullYear()}. SpanIdea. All Rights Reserved.</div>
          <a
            href="https://spanidea.com/in/terms-conditions/"
            target="_blank"
            style={{ textDecoration: "none", color: "white" }}
          >
            <div>Terms & Conductions</div>
          </a>
          <a
            href="https://spanidea.com/in/privacy-policy/"
            target="_blank"
            style={{ textDecoration: "none", color: "white" }}
          >
            <div>Privacy Policy</div>
          </a>
          <a
            href="https://spanidea.com/in/cookies-policy/"
            target="_blank"
            style={{ textDecoration: "none", color: "white" }}
          >
            <div>Cookie Policy</div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
