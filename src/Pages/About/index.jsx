import { Footer } from "../../Components/Footer"
import { Header } from "../../Components/Header"
import "./about.css"

export const About = () => {

    return (
        <>
        <Header />
<main>
  <div className="banner-section d-flex align-items-center justify-content-center text-center text-light">
    <div className="text-container">
      <p>Empowering</p>
      <h1>Unlock Your Potential</h1>
      <p>
        We believe in providing high-quality academic writing services to help
        students succeed.
      </p>
      <div className="button-section mt-3">
        <button className="px-3 py-2 btn btn-outline-dark border-2 rounded-5 button1">
          Learn more
        </button>
        <a href="register.html">
          <button className="px-3 py-2 btn btn-outline-dark border-2 rounded-5 button2">
            Sign Up
          </button>
        </a>
      </div>
    </div>
  </div>
  {/* information section */}
  <div className="info-section p-5 mt-3">
    <div className="text text-center">
      <h2>Delivering Excellence in Academic</h2>
      <h2>Writing Services for Students Worldwide</h2>
      <p className="px-5">
        At Serve Biznes, we have a rich company history, backed by years of
        experience in providing top-notch academic writing services. Our team of
        experts is dedicated to helping students excel in their studies by
        delivering high-quality reports, case studies, essays, theses,
        proposals, and more. With our expertise, you can trust us to meet your
        academic writing needs with precision and professionalism.
      </p>
    </div>
  </div>
  {/* image with text */}
  <div className="container-fluid container-image-text overflow-hidden">
    <div className="row p-5 d-flex align-items-center justify-content-center ">
      <div className="col-lg-6">
        <h2>
          Providing Unmatched Academic Writing Services to Help Students Succeed
        </h2>
        <p>
          Our company offers a wide range of academic writing services,
          including reports, case studies, essays, thesis, proposals, and more.
          With our expert writers and commitment to quality, we ensure that
          students receive top-notch work that meets their academic needs.
        </p>
      </div>
      <div className="col-lg-6 object-fit-cover">
        <img src="/images/image text.jpg" alt="" height="370px" />
      </div>
    </div>
  </div>
  {/* meet our team */}
  <div className="container-fluid container-team px-5">


    <div className="hiring-section mt-5">
      <h1>We are hiring!</h1>
      <p>
        We're actively seeking talented individuals to join our team and help us
        reach new heights!
      </p>
      <button className="px-3 py-2 btn btn-outline-dark border-2 rounded-5">
        Open Position
      </button>
    </div>
  </div>
</main>
<Footer />
        </>
    )
}