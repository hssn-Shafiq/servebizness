import React from "react";
import { Header } from "../../Components/Header";
import { IntroText } from "../../Components/IntroText";
import { ServicesBanner } from "../../Components/ServicesBanner";
import { AboutBanner } from "../../Components/AboutBanner";
import { DeliveringExcellence } from "../../Components/DeliveringExcellenceText";
import { StreamProcess } from "../../Components/StreamProcess";
import { WritingServices } from "../../Components/WritingServices";
import Testimonials from "../../Components/Testimonials";
import { Calculator } from "../../Components/Calculator";
import { GetStarted } from "../../Components/GetStarted";
import { FAQ } from "../../Components/FAQ";
import { Footer } from "../../Components/Footer";
import { ServicesCollapsed } from "../../Components/ServicesCollapsed";
import { Contact } from "../../Components/Contact";
import AOSInitializer from "../../AOSInitializer";
import ServicesAnimation from "../../services.json"
import Lottie from "lottie-react";
export const Home = () => {
  return (
    <>
      <Header />
      <main>
      <IntroText 
      subtitle={""}
      title="Unlock Our Success with Our Services"
      desc="Get professional help with your writing needs and achieve top result."
      
      />
        <div className="container-main px-5">
          <div className="row">
            <div className="col-lg-6" data-aos="fade-left">
              <div className="container-image overflow-hidden mt-5">
                {/* <img
                  src="/images/content5.jpg"
                  alt="Serve Biznes about services "
                  height="800px"
                  width="550px"
                  className="text-center"
                /> */}
              <Lottie animationData={ServicesAnimation} />
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-right">
            <h1 className="text-center">Pick the best plan for you</h1>
        <div className="form-section d-flex align-items-center justify-content-center mt-4" data-aos="fade-up">
          <Calculator />
        </div>
            </div>
          </div>
        </div>
          <ServicesBanner 
          subtitle="Reliable"
          title="Services for different niches"
          desc="We offer a wide range of writing services including business writing, content writing, and academic writing. Our team of expert writers is dedicated to delivering high-quality work that meets your business needs."
          col_1_title="Business Writing"
          col_1_des="Get professionally written essays tailored to your specific requirements."
          col_2_title="Content Writing"
          col_2_desc="Get professionally written essays tailored to your specific requirements."
          col_3_title="Academic Writing"
          col_3_desc="Access meticulously researched and thorough reports tailored to bolster your academic pursuits"
          className="col-lg-4"
          imgUrl="/images/computer-1343393_1280.jpg"
          />
        <AboutBanner />
        <DeliveringExcellence />
        <StreamProcess />
        {/* <WritingServices /> */}
        <Testimonials />
        <ServicesCollapsed />
        <GetStarted />
        <div className="project-showcase overflow-hidden">
          <div className="row p-5">
            <div className="col-lg-4" data-aos="zoom-in-up">
              <div className="card">
                <img
                  className="card-img-top"
                  src="/images/02.jpg"
                  alt="Card cap"
                />
              </div>
            </div>
            <div className="col-lg-4" data-aos="zoom-in-up">
              <div className="card">
                <img
                  className="card-img-top"
                  src="/images/01.jpg"
                  alt="Card cap"
                />
              </div>
            </div>
            <div className="col-lg-4" data-aos="zoom-in-up">
              <div className="card">
                <img
                  className="card-img-top"
                  src="/images/03.jpg"
                  alt="Card cap"
                />
              </div>
            </div>
          </div>
        </div>
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
};
