import { Footer } from "../../Components/Footer";
import { Header } from "../../Components/Header";
import "./HowItWorks.css"
export const HowItWorks = () => {
  return (
    <>
    <Header />
      <div className="main-container text-light">
        <div className="text-container d-flex justify-content-center align-items-center flex-column">
          <h1>Serve Biznes</h1>
          <p>
            Our company works in the most professional manner. Our goal is to
            help students across the world.
          </p>
        </div>
      </div>
      <div className="cards-section">
        <div className="row px-5 g-0">
          {/* card 01 */}
          <div className="col-lg-3 overflow-hidden">
            <div className="card rounded-4 mt-2" style={{ width: "17rem" }}>
              <div className="card-body">
                <div className="card-image mt-2">
                  <i className="fa-solid fa-box" />
                  <i className="fa-solid fa-circle-chevron-right" />
                </div>
                <div className="text-section mt-3">
                  <h5 className="card-title">Register Your Account</h5>
                  <p className="card-subtitle text-muted">
                    A customer who wants to enjoy our academic writing service
                    has to first create an account with us. Users can register
                    with their Google/Facebook account.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* card 02 */}
          <div className="col-lg-3">
            <div className="card rounded-4 mt-2" style={{ width: "17rem" }}>
              <div className="card-body">
                <div className="card-image mt-2">
                  <i className="fa-solid fa-suitcase" />
                  <i className="fa-solid fa-circle-chevron-right" />
                </div>
                <div className="text-section mt-3">
                  <h5 className="card-title">Select the Service</h5>
                  <p className="card-subtitle text-muted">
                    Once the account has been created, you have to select the
                    writing service that you want to order from us. Class of MBA
                    offers 10+ writing services.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* card 03 */}
          <div className="col-lg-3">
            <div className="card rounded-4 mt-2" style={{ width: "17rem" }}>
              <div className="card-body">
                <div className="card-image mt-2">
                  <i className="fa-solid fa-map-location-dot" />
                  <i className="fa-solid fa-circle-chevron-right" />
                </div>
                <div className="text-section mt-3">
                  <h5 className="card-title">Fill in the Order Form</h5>
                  <p className="card-subtitle text-muted">
                    After selecting the service, you would have to complete the
                    order form with all the required information which helps our
                    experts complete your papers.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* card 04 */}
          <div className="col-lg-3">
            <div className="card rounded-4 mt-2" style={{ width: "17rem" }}>
              <div className="card-body">
                <div className="card-image mt-2">
                  <i className="fa-solid fa-circle-dollar-to-slot" />
                  <i className="fa-solid fa-check" />
                </div>
                <div className="text-section mt-3">
                  <h5 className="card-title">Pay the Order Fee</h5>
                  <p className="card-subtitle text-muted">
                    On the basis of information, you add in the order form, our
                    calculator would generate the order fee. To order process,
                    you have to pay in advance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* How it Works? */}
      <div className="container-work overflow-hidden mt-5">
        <div className="text text-center">
          <h3>How it Works?</h3>
        </div>
        <div className="row mx-4">
          <div className="col-lg-6 d-flex align-items-center justify-content-center">
            <img src="/images/OrderDetails.webp" alt="" />
          </div>
          <div className="col-lg-6 p-5">
            <h1 className="text-secondary">01</h1>
            <h4>Add Information in the Order Form</h4>
            <p>
              The most important stage is filling the order form with
              information. In the order form you have to give as much
              information as you can so that our expert can write the paper
              according to your requirements. You need to clearly specify the
              title/topic, number of pages, word count, deadline, writing style,
              referencing style and other important data. s
            </p>
          </div>
        </div>
      </div>
      {/* Make a Deposit to Initiate the Order */}
      <div className="container-work overflow-hidden mt-5">
        <div className="row mx-4">
          <div className="col-lg-6 p-5">
            <h1 className="text-secondary">02</h1>
            <h4>Make a Deposit to Initiate the Order</h4>
            <p>
              The order fee would be automatically created on the basis of your
              requirements. You need to pay the order fee in advance as our
              experts are paid in advance so that they can get all the resources
              which would help them complete the order on time. You can pay the
              order fee via debit/credit card or other secure payment gateways.
            </p>
          </div>
          <div className="col-lg-6 d-flex align-items-center justify-content-center">
            <img src="/images/MakePayment.webp" alt="" />
          </div>
        </div>
      </div>
      {/* Track Progress of Paper */}
      <div className="container-work overflow-hidden mt-5">
        <div className="row mx-4">
          <div className="col-lg-6 d-flex align-items-center justify-content-center">
            <img src="/images/TrackProgress.webp" alt="" />
          </div>
          <div className="col-lg-6 p-5">
            <h1 className="text-secondary">03</h1>
            <h4>Track Progress of Paper</h4>
            <p>
              Once you make the payment, our team would assign a writer/tutor
              for your order and the work would start right away. If you want to
              check the progress of the paper or pass on any additional
              information related to the order you can get in touch with the
              customer support team. The support team is available 24/7 to
              answer your queries.
            </p>
          </div>
        </div>
      </div>
      {/* Get Your Paper & Ask for Revision */}
      <div className="container-work overflow-hidden mt-5">
        <div className="row mx-4">
          <div className="col-lg-6 p-5">
            <h1 className="text-secondary">04</h1>
            <h4>Get Your Paper &amp; Ask for Revision</h4>
            <p>
              The final paper would be delivered to you before the given
              deadline after the approval of the quality assurance department.
              The QA would check the paper for all kinds of human errors,
              plagiarism or missing requirements. Still if they have missed
              anything and you have found a flaw in the final paper, you are
              allowed to ask for free revisions.
            </p>
          </div>
          <div className="col-lg-6 d-flex align-items-center justify-content-center">
            <img src="/images/TrackProgress.webp" alt="" />
          </div>
        </div>
      </div>
      {/* hired */}
      <div className="container-hired mx-5 rounded-4 mb-5">
        <div className="row overflow-hidden">
          <div className="col-lg-8 d-flex justify-content-center align-items-start text-light flex-column px-5">
            <h2>Never Hired a Professional Online?</h2>
            <p>
              A recent surveys suggests that at least 76% students acquire
              professional help online. So, give it your first try. We promise
              not to disappoint you at all.
            </p>
            <a href="contact Us.html">
              <button className="px-3 py-2 rounded-3">
                <i className="fa-solid fa-box" /> Order Now
              </button>
            </a>
          </div>
          <div className="col-lg-4">
            <img src="/images/hired.png" alt="" height="350px" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
