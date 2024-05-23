import { BlogsCards } from "../../Components/BlogsCards";
import { FAQ } from "../../Components/FAQ";
import { Footer } from "../../Components/Footer";
import { Header } from "../../Components/Header";
import Testimonials from "../../Components/Testimonials";
import "./Blogs.css";

export const Blogs = () => {
  return (
    <>
      <Header />
      <main>
        <>
          <div className="banner-section">
            <div className="image-section px-5">
              <div className="col-lg-12 column1 text-light">
                <p>Quality</p>
                <h1>Explore Our Range of Services</h1>
                <p>
                  Crafting compelling content across diverse genres. Offering
                  tailored solutions for various writing needs.
                </p>
                <p>
                  From academic essays to persuasive sales copy, we've got you
                  covered.
                </p>
                <div className="button-section">
                  <button className="text-light px-3 py-2 rounded-5 button1">
                    Learn More
                  </button>
                  <a href="contact Us.html">
                    <button className="text-light px-3 py-2 rounded-5 button2">
                      Contact Us
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* information section */}
          <div className="info-section overflow-hidden mt-5">
            <div className="text-section">
              <div className="row px-5">
                <div className="col-lg-12 px-5 mt-4 text-center">
                  {/* <p>Quality</p> */}
                  <h1>Blogs</h1>
                  <p>
                    In the vast landscape of writing, mastering various styles
                    and techniques is key to success across different domains.
                    Whether it's in the business arena, where clarity and
                    professionalism reign supreme, or in the technical realm,
                    where complex information must be made understandable,
                    honing your skills is essential. Learn the art of crafting
                    effective emails, reports, and business pitches that leave a
                    lasting impression, alongside strategies for creating
                    user-friendly technical documentation and manuals. Delve
                    into the world of content writing, where engaging headlines
                    and blog posts are paramount, and discover the power of
                    visual content in captivating audiences. And in academia,
                    where precision and rigor are paramount, explore the
                    intricacies of researching, outlining, and structuring
                    academic papers, while maintaining integrity through proper
                    citation and evidence incorporation. Across these diverse
                    disciplines, the principles of clear communication, audience
                    engagement, and meticulous attention to detail remain
                    constant, guiding writers toward excellence in their craft.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <BlogsCards />
        </>
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </>
  );
};
