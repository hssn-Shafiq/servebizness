import React, { useEffect } from 'react';
import AOSInitializer from '../../AOSInitializer';
import { Footer } from "../../Components/Footer"
import { Header } from "../../Components/Header"
import { Team } from '../../Components/Team';
import Testimonials from '../../Components/Testimonials';
import "./ClassOfServe.css";

export const ClassofServe = () => {

    return (
        <>
            <Header />
            <>
                <div className="banner-section d-flex align-items-center" data-aos="fade-up">
                    <div className="container text-center text-light">
                        <h2>Striving for Quality Service and 100% Customer Satisfaction!</h2>
                        <p>
                            We are a renowned and credible writing service that helps clients
                            globally with business writing, content writing, and academic writing
                            needs.
                        </p>
                    </div>
                </div>
                {/* cards section */}
                <div className="cards text-center container-gap">
                    <h3 data-aos="fade-up">Our Unbeatable Writing Services</h3>
                    <p data-aos="fade-up">
                        No matter what kind of service you order, our team is here to help you get
                        the most accurate solutions. Here are some of the services we offer!
                    </p>
                    <div className="row px-5 g-0 mt-4">
                        {/* card 01 */}
                        <div className="col-lg-3 overflow-hidden" data-aos="zoom-in">
                            <div className="card rounded-4 mt-2" style={{ width: "17rem", height: 280 }}>
                                <div className="card-body">
                                    <div className="card-image mt-2">
                                        <i className="fa-solid fa-briefcase" />
                                        <i className="fa-solid fa-circle-chevron-right" />
                                    </div>
                                    <div className="text-section mt-3">
                                        <h5 className="card-title">Business Writing</h5>
                                        <p className="card-subtitle text-muted">
                                            Need professional business documents? Our experts provide
                                            top-notch business writing services including reports,
                                            proposals, and more.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* card 02 */}
                        <div className="col-lg-3" data-aos="zoom-in" data-aos-delay="100">
                            <div className="card rounded-4 mt-2" style={{ width: "17rem", height: 280 }}>
                                <div className="card-body">
                                    <div className="card-image mt-2">
                                        <i className="fa-solid fa-pen-fancy" />
                                        <i className="fa-solid fa-circle-chevron-right" />
                                    </div>
                                    <div className="text-section mt-3">
                                        <h5 className="card-title">Content Writing</h5>
                                        <p className="card-subtitle text-muted">
                                            Boost your online presence with our engaging and SEO-friendly
                                            content writing services tailored to your needs.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* card 03 */}
                        <div className="col-lg-3" data-aos="zoom-in" data-aos-delay="200">
                            <div className="card rounded-4 mt-2" style={{ width: "17rem", height: 280 }}>
                                <div className="card-body">
                                    <div className="card-image mt-2">
                                        <i className="fa-solid fa-book" />
                                        <i className="fa-solid fa-circle-chevron-right" />
                                    </div>
                                    <div className="text-section mt-3">
                                        <h5 className="card-title">Academic Writing</h5>
                                        <p className="card-subtitle text-muted">
                                            Struggling with academic papers? Our skilled writers can help
                                            you with essays, research papers, dissertations, and more across
                                            various disciplines.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* card 04 */}
                        <div className="col-lg-3" data-aos="zoom-in" data-aos-delay="300">
                            <div className="card rounded-4 mt-2" style={{ width: "17rem", height: 280 }}>
                                <div className="card-body">
                                    <div className="card-image mt-2">
                                        <i className="fa-solid fa-file-pen" />
                                        <i className="fa-solid fa-circle-chevron-right" />
                                    </div>
                                    <div className="text-section mt-3">
                                        <h5 className="card-title">Editing and Proofreading</h5>
                                        <p className="card-subtitle text-muted">
                                            Ensure your documents are error-free and polished with our
                                            expert editing and proofreading services.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Offer */}
                <div className="offer-section container-gap" data-aos="fade-up">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <h3>What Guarantees Do We Offer?</h3>
                                <p>
                                    <i className="fa-solid fa-circle-check" /> Our company covers all
                                    aspects of professional writing. We offer guarantees that are
                                    unmatched in the industry.
                                </p>
                                <p>
                                    <i className="fa-solid fa-circle-check" /> We guarantee original
                                    content tailored to your specific requirements.
                                </p>
                                <p>
                                    <i className="fa-solid fa-circle-check" /> Our support team
                                    guarantees 24/7 assistance to all clients and prospects.
                                </p>
                                <p>
                                    <i className="fa-solid fa-circle-check" /> We guarantee on-time
                                    delivery of all orders. Our writers are committed to meeting
                                    deadlines.
                                </p>
                                <p>
                                    <i className="fa-solid fa-circle-check" /> We guarantee work from
                                    professional writers and editors, not freelancers.
                                </p>
                                <p>
                                    <i className="fa-solid fa-circle-check" /> We guarantee free
                                    revisions if you are not satisfied with the final submission.
                                </p>
                            </div>
                            <div className="col-lg-6">
                                <img
                                    src="/images/image of second section.jpg"
                                    alt="Our Guarantees"
                                    height="450px"
                                    data-aos="fade-left"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <img
                                src="/images/annual1.jpg"
                                alt="Our Services"
                                height="350px"
                                data-aos="fade-right"
                            />
                        </div>
                        <div className="col-lg-6">
                            <h3 data-aos="fade-left">Why Choose Our Writing Services?</h3>
                            <p data-aos="fade-left">
                                We are a renowned and highly professional writing service dedicated to
                                assisting clients worldwide in completing their business, content, and
                                academic writing tasks on time.
                            </p>
                            <div className="row">
                                <div className="col-lg-6 d-flex" data-aos="fade-up" data-aos-delay="100">
                                    <div className="image">
                                        <img
                                            src="/images/ExcusiveWorkload.png"
                                            alt="Subject Experts"
                                            height="30px"
                                        />
                                    </div>
                                    <div className="text-section px-1">
                                        <h6>Availability of Subject Experts</h6>
                                        <p>
                                            We have over 200 writers and subject experts on board, capable
                                            of handling all types of writing projects and research papers
                                            with ease.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6 d-flex" data-aos="fade-up" data-aos-delay="200">
                                    <div className="image">
                                        <img
                                            src="/images/LackofSkills.png"
                                            alt="Competitive Rates"
                                            height="30px"
                                        />
                                    </div>
                                    <div className="text-section px-1">
                                        <h6>Market Competitive Rates</h6>
                                        <p>
                                            We offer some of the most competitive rates in the industry,
                                            providing high-quality writing services that are affordable and
                                            budget-friendly.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6 d-flex" data-aos="fade-up" data-aos-delay="300">
                                    <div className="image">
                                        <img
                                            src="/images/DeadlinePressure.png"
                                            alt="Meet Deadlines"
                                            height="30px"
                                        />
                                    </div>
                                    <div className="text-section px-1">
                                        <h6>Ability to Meet Short Deadlines</h6>
                                        <p>
                                            Our writers are rigorously trained to handle complex orders
                                            efficiently, ensuring your projects are completed and delivered
                                            on time.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6 d-flex" data-aos="fade-up" data-aos-delay="400">
                                    <div className="image">
                                        <img
                                            src="/images/WantHighGrades.png"
                                            alt="Original Papers"
                                            height="30px"
                                        />
                                    </div>
                                    <div className="text-section px-1">
                                        <h6>Original & Well-Researched Papers</h6>
                                        <p>
                                            We guarantee original content for every order. Each paper is
                                            created from scratch with thorough research and proper
                                            references.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Counter */}
                <div className="container-counter container-gap">
                    <div className="row text-center py-5 text-light" style={{ width: "100%" }} data-aos="fade-up">
                        <div className="col-lg-3">
                            <h1>20K+</h1>
                            <p>Orders Completed</p>
                        </div>
                        <div className="col-lg-3">
                            <h1>100</h1>
                            <p>Writers Online</p>
                        </div>
                        <div className="col-lg-3">
                            <h1>4.8</h1>
                            <p>Avg. Customer Rating</p>
                        </div>
                        <div className="col-lg-3">
                            <h1>4.8</h1>
                            <p>Avg. Writer Rating</p>
                        </div>
                    </div>
                </div>
                {/* meet our team */}
                <div className="container px-5">
                    <Team />
                    <Testimonials />
                </div>
                {/* hired */}
                <div className="container-hired mx-5 rounded-4 mb-5">
                    <div className="row overflow-hidden">
                        <div className="col-lg-8 d-flex justify-content-center align-items-start text-light flex-column px-5" data-aos="fade-right">
                            <h2>Never Hired a Professional Online?</h2>
                            <p>
                                A recent surveys suggests that at least 76% students acquire
                                professional help online. So, give it your first try. We promise not
                                to disappoint you at all.
                            </p>
                            <a href="contact Us.html">
                                <button className="px-3 py-2 rounded-3">
                                    <i className="fa-solid fa-box" /> Order Now
                                </button>
                            </a>
                        </div>
                        <div className="col-lg-4" data-aos="fade-left">
                            <img src="/images/hired.png" alt="" height="350px" />
                        </div>
                    </div>
                </div>
            </>
            <Footer />
        </>
    )
}
