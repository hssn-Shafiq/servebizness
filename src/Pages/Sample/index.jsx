import { FAQ } from "../../Components/FAQ";
import { Footer } from "../../Components/Footer";
import { Header } from "../../Components/Header";
import "./sample.css"
export const Sample = () => {
  return (
    <>
      <Header />
      <main>
        <div className="sample-section d-flex align-items-center justify-content-center text-center text-light">
          <div className="text-container">
            <p>Empowering</p>
            <h1>Welcome to Our Sample Page</h1>
            <p>
              Explore our high-quality academic writing services and unlock your
              potential with expert assistance.
            </p>
            <div className="button-section mt-3">
              <button className="px-3 py-2 btn btn-outline-dark border-2 rounded-5 button1">
                Learn more
              </button>
              <button className="px-3 py-2 btn btn-outline-dark border-2 rounded-5 button2">
                Sign Up
              </button>
            </div>
          </div>
        </div>
        {/* select info */}
        <div className="container">
          <div className="row">
            <div className="col-lg-4 select_option">
              <div className="mb-3 catgeroy mt-4">
                {/* <label for="" class="form-label">City</label> */}
                <select className="form-select form-select-lg" name="" id="">
                  <option value={1}>Choose the Academic Paper type</option>
                  <option value={2}>Assignment</option>
                  <option value={3}>Business Plan</option>
                  <option value={4}>Case Study</option>
                  <option value={5}>Cource Work</option>
                  <option value={6}>Dissertation</option>
                  <option value={7}>Essay</option>
                </select>
              </div>
            </div>
            <div className="col-lg-8 select_option_2">
              <div className="input-group mb-3 mt-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="basic-addon2"
                />
                <div className="input-group-append">
                  <button
                    className="btn bg-primary rounded-0 text-light"
                    type="button"
                  >
                    <i className="fas fa-search" />
                  </button>
                </div>
              </div>
            </div>
            {/* card */}
            <div className="row">
              <div className="col-lg-4">
                <div className="row d-flex flex-column">
                  <div className="">
                    <div className="card text-start">
                      <div className="card-body">
                        <h4 className="card-title">A</h4>
                        <p className="card-text d-flex justify-content-between">
                          <span> Accounting </span>
                          <span> 104 </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="card text-start">
                      <div className="card-body">
                        <h4 className="card-title">B</h4>
                        <p className="card-text d-flex justify-content-between">
                          <span> Business </span>
                          <span> 989 </span>
                        </p>
                        <p className="card-text d-flex justify-content-between">
                          <span> Business Environment </span>
                          <span> 700 </span>
                        </p>
                        <p className="card-text d-flex justify-content-between">
                          <span> Business Law </span>
                          <span> 12 </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="card text-start">
                      <div className="card-body">
                        <h4 className="card-title">C</h4>
                        <p className="card-text d-flex justify-content-between">
                          <span> Case Study </span>
                          <span> 104 </span>
                        </p>
                        <p className="card-text d-flex justify-content-between">
                          <span> Communication </span>
                          <span> 3 </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="card text-start">
                      <div className="card-body">
                        <h4 className="card-title">E</h4>
                        <p className="card-text d-flex justify-content-between">
                          <span> Education </span>
                          <span> 23 </span>
                        </p>
                        <p className="card-text d-flex justify-content-between">
                          <span> Engineering </span>
                          <span> 3 </span>
                        </p>
                        <p className="card-text d-flex justify-content-between">
                          <span> Economics </span>
                          <span> 45 </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* second card */}
              <div className="col-lg-4">
                <div className="row d-flex flex-column">
                  <div className="">
                    <div className="card text-start">
                      <div className="card-body">
                        <h4 className="card-title">F</h4>
                        <p className="card-text d-flex justify-content-between">
                          <span> Finance </span>
                          <span> 21 </span>
                        </p>
                        <p className="card-text d-flex justify-content-between">
                          <span> Food </span>
                          <span> 19 </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="card text-start">
                      <div className="card-body">
                        <h4 className="card-title">G</h4>
                        <p className="card-text d-flex justify-content-between">
                          <span> General Studies </span>
                          <span> 989 </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="card text-start">
                      <div className="card-body">
                        <h4 className="card-title">H</h4>
                        <p className="card-text d-flex justify-content-between">
                          <span> Health </span>
                          <span> 460 </span>
                        </p>
                        <p className="card-text d-flex justify-content-between">
                          <span> Health &amp; Social Care </span>
                          <span> 3 </span>
                        </p>
                        <p className="card-text d-flex justify-content-between">
                          <span> Human Resource Management </span>
                          <span> 81 </span>
                        </p>
                        <p className="card-text d-flex justify-content-between">
                          <span> Hospitality </span>
                          <span> 567 </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="card text-start">
                      <div className="card-body">
                        <h4 className="card-title">I</h4>
                        <p className="card-text d-flex justify-content-between">
                          <span> Information System </span>
                          <span> 321 </span>
                        </p>
                        <p className="card-text d-flex justify-content-between">
                          <span> Information Technology </span>
                          <span> 108 </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Third card  */}
              <div className="col-lg-4">
                <div className="row d-flex flex-column">
                  <div className="">
                    <div className="card text-start">
                      <div className="card-body">
                        <h4 className="card-title">N</h4>
                        <p className="card-text d-flex justify-content-between">
                          <span> Nursing </span>
                          <span> 435 </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="card text-start">
                      <div className="card-body">
                        <h4 className="card-title">P</h4>
                        <p className="card-text d-flex justify-content-between">
                          <span> Physical Eduction </span>
                          <span> 1 </span>
                        </p>
                        <p className="card-text d-flex justify-content-between">
                          <span> Planning </span>
                          <span> 19 </span>
                        </p>
                        <p className="card-text d-flex justify-content-between">
                          <span> Politics </span>
                          <span> 43 </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="card text-start">
                      <div className="card-body">
                        <h4 className="card-title">R</h4>
                        <p className="card-text d-flex justify-content-between">
                          <span> Religion </span>
                          <span> 539 </span>
                        </p>
                        <p className="card-text d-flex justify-content-between">
                          <span> Research Methodolgy </span>
                          <span> 190 </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="card text-start">
                      <div className="card-body">
                        <h4 className="card-title">S</h4>
                        <p className="card-text d-flex justify-content-between">
                          <span> Sciences </span>
                          <span> 321 </span>
                        </p>
                        <p className="card-text d-flex justify-content-between">
                          <span> Social Policy </span>
                          <span> 108 </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-12 main_content_text">
              <h2>Free Assignment Samples To Drive Students Towards Success</h2>
              <p>
                We are a reputable online writing assistance provider with
                significant expertise in academic writing. We know that
                tailor-made papers boost students' academic performance. So even
                though we oppose plagiarism and cheating, we think students
                would improve as writers if they used writing services
                correctly. If you do not believe us, you can check out our
                example of an assignment. It is because you will learn how to
                structure and organize a document appropriately.
              </p>
              <p>
                University students will succeed with their assignments, term
                papers, and any other coursework by knowing how to research,
                format, proofread and cite their tasks and sources correctly.
                They can learn this from free assignment samples.
              </p>
              <p>
                We provide guidance, assignment assistance, and access to our
                writer's extraordinary research abilities. In addition, you have
                a fantastic opportunity to view free samples of assignments on
                our website. The assignment example for University you receive
                from us can be used in various ways, including as a source of
                ideas, details, or prose.
              </p>
              <p />
              <h2>
                Enhance your Writing Skills With Assignment Examples Provided By
                Our Experts | Know How?
              </h2>
              <p>
                Global Assignment Help offers assignment samples of various
                subjects to help students improve their academic performance.
                Our experts offer their suggestions and advice to students after
                in-depth research. However, free sample of assignment play an
                important role in improving students' writing skills here's how:
              </p>
              <ul>
                <p>
                  They are Written by Experts:A professional's approach to
                  academic writing and a student's approach differs
                  significantly from another. A professional's sample
                  assignments have extensive knowledge of the subject. They know
                  how to approach an assignment while avoiding any
                  complications. A skilled writer's example assignments adhere
                  to every detail and prevent improper formatting. They can set
                  any format quickly because they are familiar with it inside
                  and out. Students frequently mix up different forms because
                  there are so many of them. But they can avoid this if they
                  refer to assignment examples from our website. A professional
                  writer is an exception to this rule.
                </p>
              </ul>
              <ul>
                <p>
                  Knowledge of Theoretical and Practical Aspects: Students
                  should always read the best college assignment samples, why?
                  This is because frequently they do not comprehend the purpose
                  of writing a submission. One can only write a document worthy
                  of an A grade if they have a thorough knowledge of the subject
                  and know how to differentiate between theoretical and
                  practical components in their writing. This knowledge can be
                  achieved just by reading some easy university assignment
                  examples written by experts. It gets much simpler to
                  comprehend how to compose articles based on theory and why
                  when you acquire quality college assignment sample.
                  Furthermore, because you will be expanding on notions, a
                  theoretical paper will have a different tone and writing
                  style.
                </p>
              </ul>
              <p>
                You'll have opportunities to enhance writing after understanding
                the techniques used in example assignment to handle a specific
                college task. But then, it's time to improve your college or
                university performance. Then, you can be a student who
                efficiently completes all their tasks and university assignments
                on time, writes every report, essay, thesis, dissertation, and
                coursework, and is generally educated about most themes and
                topics.
              </p>
            </div>
          </div>
        </div>
        {/* testimonial section */}
        <div className="testimonial-section d-flex align-item-center justify-content-center mt-5">
          <div className="content-wrapper">
            <h1>Our Reviews</h1>
            <div className="blue-line" />
            <div className="wrapper-for-arrows">
              <div style={{ opacity: 0 }} className="chicken" />
              <div id="reviewWrap" className="review-wrap">
                <div id="imgDiv" className="" />
                <div id="personName" />
                <div id="profession" />
                <div id="description" />
              </div>
              <div id="surpriseMeBtn" className="surprise-me-btn">
                Surprise me
              </div>
              <div className="left-arrow-wrap arrow-wrap">
                <div className="arrow" id="leftArrow" />
              </div>
              <div className="right-arrow-wrap arrow-wrap">
                <div className="arrow" id="rightArrow" />
              </div>
            </div>
          </div>
        </div>
        {/* faqs */}
        <div className="container-faqs">
          <div className="container">
            <h2 className="text-center">FAQs</h2>
            <p className="text-center mb-5">
              Find answers to common questions about our services, ordering
              process, and guarantees.
            </p>
            <div className="accordion">
              <div className="accordion-item p-1">
                <button id="accordion-button-1" aria-expanded="false">
                  <span className="accordion-title">
                    What types of writing services do you offer?{" "}
                  </span>
                  <span className="icon" aria-hidden="true" />
                </button>
                <div className="accordion-content">
                  <p>
                    We specialize in a wide range of writing services, including
                    business reports, technical documentation, academic essays,
                    research papers, thesis writing, and much more. Whether you
                    need content for your business, assistance with technical
                    manuals, or support with academic assignments, we've got you
                    covered.
                  </p>
                </div>
              </div>
              <div className="accordion-item p-1">
                <button id="accordion-button-2" aria-expanded="false">
                  <span className="accordion-title">
                    How do you ensure the quality of the writing?{" "}
                  </span>
                  <span className="icon" aria-hidden="true" />
                </button>
                <div className="accordion-content">
                  <p>
                    Quality is our top priority. We have a stringent quality
                    assurance process in place, which includes thorough editing
                    and proofreading by experienced professionals. Additionally,
                    we employ plagiarism detection tools to ensure that all
                    content is original and meets the highest standards of
                    excellence.
                  </p>
                </div>
              </div>
              <div className="accordion-item p-1">
                <button id="accordion-button-3" aria-expanded="false">
                  <span className="accordion-title">
                    What is your turnaround time for completing writing
                    projects?{" "}
                  </span>
                  <span className="icon" aria-hidden="true" />
                </button>
                <div className="accordion-content">
                  <p>
                    Turnaround times vary depending on the scope and complexity
                    of the project. However, we strive to deliver high-quality
                    work within the agreed-upon deadlines. We also offer
                    expedited services for urgent projects, ensuring that you
                    receive your content when you need it.
                  </p>
                </div>
              </div>
              <div className="accordion-item p-1">
                <button id="accordion-button-4" aria-expanded="false">
                  <span className="accordion-title">
                    How do I place an order for writing services?{" "}
                  </span>
                  <span className="icon" aria-hidden="true" />
                </button>
                <div className="accordion-content">
                  <p>
                    Placing an order is simple and straightforward. You can get
                    started by filling out our online order form, providing
                    details about your project requirements, deadlines, and any
                    specific instructions. Once we receive your request, we'll
                    promptly review it and assign a qualified writer to your
                    project.
                  </p>
                </div>
              </div>
              <div className="accordion-item p-1">
                <button id="accordion-button-5" aria-expanded="false">
                  <span className="accordion-title">
                    Who are your writers, and what are their qualifications?{" "}
                  </span>
                  <span className="icon" aria-hidden="true" />
                </button>
                <div className="accordion-content">
                  <p>
                    Our writing team consists of highly skilled professionals
                    with diverse backgrounds and expertise in various fields.
                    Each writer undergoes a rigorous selection process and holds
                    advanced degrees in their respective disciplines, ensuring
                    that your projects are handled by knowledgeable experts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <FAQ />
      <Footer />
    </>
  );
};
