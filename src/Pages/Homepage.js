import React, { useEffect } from "react";
import Homecard from "../Components/Homecard";
import HomeCooperateCard from "../Components/HomeCooperateCard";
import OpportunityCard from "../Components/OpportunityCard";
import { Link } from "react-router-dom";
import BenefitCard from "../Components/BenefitCard";

const Homepage = () => {
  useEffect(() => {
    document.title = "Home Page | Carrer Portal";
  }, []);
  
  return (
    <section className="homepageSection">
      <div className="homepageMain">
        <div className="homepageFontMain">
          <div className="homepageFont-m1">
            Unleash Your Creativity in the Tech Industry
          </div>
          <div className="homepageFont-m2">
            At Spanidea, we are a leading technology company dedicated to
            pushing the boundaries of what's possible. We believe that the power
            of technology can transform businesses, industries, and the world
            around us. As we continue to grow and expand, we are actively
            seeking top-notch talent to join our dynamic team.
          </div>
          <Link to="/authPage/jobdetails/openposition" className="linkClass">
            <div className="searchOpenButton">
              <p className="searchOpenButtonText">Search Open Roles</p>
            </div>
          </Link>
        </div>
        <div>
          <img src="/heroImage.webp" alt="heroImage" className="heroImage" />
        </div>
      </div>
      <div className="trendingJobSection">
        <div className="trendingJobMain">
          <div className="trendingJobMainFont">
            <div className="trendingJobMainFont-m1">Trending jobs with us</div>
            <div className="trendingJobMainFont-m2">
              Browse through the tops jobs
            </div>
          </div>
          <div className="trendingJobSectionGrid">
            <Homecard />
            <Homecard />
            <Homecard />
            <Homecard />
            <Homecard />
            <Homecard />
          </div>
        </div>
      </div>
      <div className="CorporateValueSection">
        <div className="CorporateValueFont-m1">Corporate Value</div>
        <div>
          <HomeCooperateCard
            description={
              "Driving forward-thinking solutions that shape the future of technology."
            }
            imgSrc={"/block1.webp"}
            title={"Innovation"}
            inverse={false}
          />
          <HomeCooperateCard
            description={
              "Placing customers at the heart of our software solutions and services."
            }
            imgSrc={"/block2.webp"}
            title={"Customer-centricity"}
            inverse={true}
          />
          <HomeCooperateCard
            description={
              "Embracing growth, learning, and innovation to stay ahead in a dynamic industry."
            }
            imgSrc={"/block3.webp"}
            title={"Continuous Improvement"}
            inverse={false}
          />
          <HomeCooperateCard
            description={
              "Delivering exceptional software services with meticulous attention to detail."
            }
            imgSrc={"/block4.webp"}
            title={"Quality"}
            inverse={true}
          />
          <HomeCooperateCard
            description={
              "Upholding ethical standards and building trust with clients and partners."
            }
            imgSrc={"/block6.webp"}
            title={"Integrity"}
            inverse={false}
          />
        </div>
      </div>
      <div className="benefitSection">
        <div className="benefitFont">Benefits</div>
        <div className="benefitFont-m2">
          At Spanidea, we believe in harnessing the power of technology to
          create exceptional online experiences for businesses. By joining our
          team, you’ll enjoy a wide range of benefits that contribute to your
          professional growth, work-life balance, and overall job satisfaction.
        </div>
        <div className="benefitSectionGrid">
          <BenefitCard src={"/benefit1.png"} title={"Health & Insurance"} />
          <BenefitCard src={"/benefit2.png"} title={"Growth & Development"} />
          <BenefitCard src={"/benefit3.png"} title={"Balanced lifestyle"} />
          <BenefitCard src={"/benefit4.png"} title={"Competitive pay"} />
          <BenefitCard src={"/benefit5.png"} title={"Rewarded"} />
          <BenefitCard src={"/benefit6.png"} title={"Recognized"} />
        </div>
      </div>
      <div className="opportunitieSection">
        <div className="opportunitieFont">
          Explore Opportunities for every stage of your career
        </div>
        <div className="opportunitieSectionGrid">
          <OpportunityCard title={"Experienced Hires"} Imgsrc={"/opp1.webp"} />
          <OpportunityCard title={"Students"} Imgsrc={"/opp2.webp"} />
          <OpportunityCard
            title={"Additional opportunities"}
            Imgsrc={"/opp3.webp"}
          />
        </div>
      </div>
      <div className="testimonialSection">
        <div>
          <img src="/Stars.png" />
        </div>
        <div className="testimonialFont">
          “This app has made my job hunting process so much easier! I can apply
          to jobs with just a few clicks.”
        </div>
        <div className="testimonialProfile">
          <div className="testBox"></div>
          <div>
            <div className="testimonialFont-m1">John D.</div>
            <div className="testimonialFont-m2">Software Developer</div>
          </div>
        </div>
      </div>
      <div className="effortlesSection">
        <div className="effortlesFont-m1">
          Effortless job applications at your fingertips
        </div>
        <div className="effortlesFont-m2">
          Start applying to your dream job now. No login required
        </div>
        <div className="effortlesButtonArea">
          <Link to="/authPage/jobdetails/openposition" className="linkClass">
            <div className="effortlesButton">
              <div className="effortlesFont-m3">Search Open Roles</div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
