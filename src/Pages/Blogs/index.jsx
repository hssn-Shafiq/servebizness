import { FAQ } from "../../Components/FAQ"
import { Footer } from "../../Components/Footer"
import { Header } from "../../Components/Header"
import Testimonials from "../../Components/Testimonials"
import "./Blogs.css"

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
          Crafting compelling content across diverse genres. Offering tailored
          solutions for various writing needs.
        </p>
        <p>
          From academic essays to persuasive sales copy, we've got you covered.
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
            In the vast landscape of writing, mastering various styles and
            techniques is key to success across different domains. Whether it's
            in the business arena, where clarity and professionalism reign
            supreme, or in the technical realm, where complex information must
            be made understandable, honing your skills is essential. Learn the
            art of crafting effective emails, reports, and business pitches that
            leave a lasting impression, alongside strategies for creating
            user-friendly technical documentation and manuals. Delve into the
            world of content writing, where engaging headlines and blog posts
            are paramount, and discover the power of visual content in
            captivating audiences. And in academia, where precision and rigor
            are paramount, explore the intricacies of researching, outlining,
            and structuring academic papers, while maintaining integrity through
            proper citation and evidence incorporation. Across these diverse
            disciplines, the principles of clear communication, audience
            engagement, and meticulous attention to detail remain constant,
            guiding writers toward excellence in their craft.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div className="blog-cards">
    <div className="container">
      <div className="card">
        <div className="card__header">
          <a href="/about">
            <img
              src="https://source.unsplash.com/600x400/?computer"
              alt="card__image"
              className="card__image"
              width={600}
            />
          </a>
        </div>
        <div className="card__body">
          <a href="/about">
            <span className="tag tag-blue">Business Writing</span>
          </a>
          <a href="/about">
            <h4>Mastering Business Writing</h4>
          </a>
          <p>
            In today's competitive business world, mastering the art of
            effective communication through writing is essential for success.
          </p>
        </div>
        <div className="card__footer">
          <div className="user">
            <img
              src="https://i.pravatar.cc/40?img=1"
              alt="user__image"
              className="user__image"
            />
            <div className="user__info">
              <h5>Jane Doe</h5>
              <small>2h ago</small>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card__header">
          <a href="/about">
            <img
              src="/images/blog card-1.jpg"
              alt="card__image"
              className="card__image"
              width={600}
            />
          </a>
        </div>
        <div className="card__body">
          <a href="/about">
            <span className="tag tag-brown">Content Writing</span>
          </a>
          <a href="/about">
            <h4>Crafting Compelling Content</h4>
          </a>
          <p>
            Crafting compelling content is essential in today's digital
            landscape. To succeed in content writing, focus on creating engaging
            content that resonates with your audience.
          </p>
        </div>
        <div className="card__footer">
          <div className="user">
            <img
              src="https://i.pravatar.cc/40?img=2"
              alt="user__image"
              className="user__image"
            />
            <div className="user__info">
              <h5>Jony Doe</h5>
              <small>Yesterday</small>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card__header">
          <a href="/about">
            <img
              src="/images/blog card-2.jpg"
              alt="card__image"
              className="card__image"
              width={600}
            />
          </a>
        </div>
        <div className="card__body">
          <a href="/about">
            <span className="tag tag-red">Academic Writing</span>
          </a>
          <a href="/about">
            <h4>Excelling in Academic Writing</h4>
          </a>
          <p>
            Academic writing demands precision, clarity, and adherence to
            scholarly standards. To excel in this field, grasp the conventions
            of academic writing, including formatting styles like APA, MLA, or
            Chicago, and uphold principles of academic integrity.
          </p>
        </div>
        <div className="card__footer">
          <div className="user">
            <img
              src="https://i.pravatar.cc/40?img=3"
              alt="user__image"
              className="user__image"
            />
            <div className="user__info">
              <h5>John Doe</h5>
              <small>2d ago</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>
<Testimonials />
<FAQ />
        </main>
        <Footer />
        </>
    )
}