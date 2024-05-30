import { BlogsCards } from "../../Components/BlogsCards";
import { CardsCarousel } from "../../Components/CardsCarousel";
import { FAQ } from "../../Components/FAQ";
import { FeedBackModal } from "../../Components/FeedbackModal";
import { Footer } from "../../Components/Footer";
import { Header } from "../../Components/Header";
import { ServicesBanner } from "../../Components/ServicesBanner";
import { ServicesImageBanner } from "../../Components/ServicesImageBanner";
import Testimonials from "../../Components/Testimonials";
// import { ToastContainer, toast } from "react-toastify";

export const AcademicServices1 = () => {
    const handleContextMenu = (event) => {
        event.preventDefault();
      };
  return (
    <>
    <div onContextMenu={handleContextMenu}>
    {/* <ToastContainer /> */}
    <Header />
      <main >
        <ServicesImageBanner
          subtitle="Quality"
          title="Academic Writing"
          desc1="When your audience needs engaging and informative content, you need to ensure your writing ensure their standars."
          desc2="Our academic writers excel at producing content that meets the highest scholarly criteria, akin to top-tier academic journals and publications."
          bgImgUrl="/images/content-web1.jpg"
        />
        {/* Sample Business Articles
         */}
        <div className="info-section overflow-hidden mt-5">
          <div className="text-section text-center mt-5">
            <h2>Academic Writing Services</h2>
          </div>
        </div>

        <ServicesBanner
          subtitle=""
          title="Professional Essay Writing Services"
          desc="We offer a wide range of writing services including essays tailored to meet your academic needs. Our team of expert writers is dedicated to delivering high-quality essays that align with your specific requirements and academic standards."
          className="col-lg-4"
          col_1_title="Custom Essays"
          col_1_des="Get professionally written essays tailored to your specific requirements and audience preferences."
          col_2_title="Research Support"
          col_2_desc="Receive comprehensive research support to enhance your essay writing and academic performance."
          col_3_title="Editing and Proofreading"
          col_3_desc="Access meticulous editing and proofreading services to refine your essays and ensure academic excellence."
          imgUrl="/images/Executive Speeches.jpg"
        />

        {/* grant proposals */}
        <div className="container-services p-5 mt-4">
          <div className="row">
            <div className="col-lg-6">
              <img src="/images/academic1.jpg" alt="Professional Research Paper Services" width="580px" />
            </div>
            <div className="col-lg-6">
              {/* <p>Reliable</p> */}
              <h3>Professional Research Paper Services</h3>
              <p>
                We offer a wide range of writing services including research
                papers tailored to meet your academic needs. Our team of expert
                writers is dedicated to delivering high-quality research papers
                that align with your specific requirements and academic
                standards.
              </p>
              <div className="row">
                <div className="col-lg-4">
                  <h5>Custom Research Papers</h5>
                  <p>
                    Get professionally written research papers tailored to your
                    specific requirements and academic standards.
                  </p>
                </div>
                <div className="col-lg-4">
                  <h5>Literature Review</h5>
                  <p>
                    Receive comprehensive literature review reports to support
                    your research paper and demonstrate the existing body of
                    knowledge.
                  </p>
                </div>
                <div className="col-lg-4">
                  <h5>Data Analysis</h5>
                  <p>
                    Access meticulously conducted data analysis to strengthen
                    your research papers and contribute valuable insights.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Annual Reports */}
        <ServicesBanner
          title="Professional Thesis Writing Services"
          desc="We offer a wide range of writing services including thesis writing tailored to meet your informational needs. Our team of expert writers is dedicated to delivering high-quality white papers that provide valuable insights and align with your specific objectives."
          className="col-lg-4"
          col_1_title="Custom Thesis"
          col_1_des="Get professionally written theses tailored to your specific requirements and academic standards."
          col_2_title="Research Methodology"
          col_2_desc="Receive comprehensive research methodology support to strengthen your thesis and ensure academic rigor."
          col_3_title="Statistical Analysis"
          col_3_desc="Access meticulously conducted statistical analysis to enhance the credibility and validity of your thesis."
          imgUrl="/images/academic10.jpg"
        />

        {/* Streamlined Content Solution */}
        <div className="content-solution mt-5">
          <div className="container text-center">
            <h3>Streamlined Content Solution</h3>
            <div className="row">
              <div className="col-lg-4 text-start column">
                <div className="card text-start border-none">
                  <div className="card-body">
                    <i className="fa-solid fa-arrow-up-right-from-square" />
                    <h4>Scalability</h4>
                    <p>
                      Our managed service was designed to grow with you. No
                      matter how much content you need, industry-leading quality
                      is always the primary focus.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 text-start column">
                <div className="card text-start">
                  <div className="card-body">
                    <i className="fa-solid fa-envelope" />
                    <h4>Deliverability</h4>
                    <p>
                      No project is too big for us to take on. Whenever you need
                      your content, we’ll be there to deliver it. We’ll work
                      within any timeframe to meet your needs.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 text-start column">
                <div className="card text-start">
                  <div className="card-body">
                    <i className="fa-regular fa-calendar" />
                    <h4>Consistency</h4>
                    <p>
                      We hand-select writers for your project based on industry
                      experience and project fit, so you can bank on a
                      consistent stream of high-quality content.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Info Section card */}
        <BlogsCards display="d-none" />
        {/* Feedback Section */}
        <FeedBackModal />
        {/* Carasoual */}
        <div className="row mx-auto mt-4">
          <div className="col-lg-12 text-center">
            <h3>Unlock Your Writing Potential</h3>
            <p>
              Explore a range of writing guides and resources to enhance your
              skills.
            </p>
          </div>
        </div>
        <CardsCarousel />
        {/* testimonial section */}
        <Testimonials />
        {/* faqs */}
        <FAQ />
      </main>
      <Footer />

    </div>
     
    </>
  );
};
