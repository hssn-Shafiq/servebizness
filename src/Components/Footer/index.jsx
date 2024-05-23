export const Footer = () => {
  return (
    <>
   <footer>
  <section className="footer">
    <div className="footer-row">
      <div className="footer-col">
        <img
          src="/images/Serve Biznes logo png.png"
          alt=""
          height="100px"
          className="mb-3"
        />
        <h4>Newsletter</h4>
        <p>
          Subscribe to our newsletter for a weekly dose of news, updates,
          helpful tips, and exclusive offers.
        </p>
        <form action="#">
          <input type="text" placeholder="Your email" required="" />
          <button type="submit">SUBSCRIBE</button>
        </form>
      </div>
      <div className="footer-col">
        <ul className="links">
          <li className="text-light">
            <h5>Info</h5>
          </li>
          <li>
            <a href="index.html">Serve Biznes</a>
          </li>
          <li>
            <a href="contact Us.html">Contact Us</a>
          </li>
          <li>
            <a href="Business_writing/BusinessWriting.html">Business Writing</a>
          </li>
          <li>
            <a href="Content writing/ContentWriting.html">Content Writing</a>
          </li>
          <li>
            <a href="Academic Writing/AcademicWriting.html">Academic Writing</a>
          </li>
        </ul>
      </div>
      <div className="footer-col">
        <ul className="links">
          <li className="text-light">
            <h5>Pages</h5>
          </li>
          <li>
            <a href="ClassOfServe.html">About Serve Biznes</a>
          </li>
          <li>
            <a href="HowItWorks.html">How it Works</a>
          </li>
          <li>
            <a href="HonorCode.html">Honor Code</a>
          </li>
          <li>
            <a href="Blogs.html">Blogs</a>
          </li>
          <li>
            <a href="FAQs.html">FAQs</a>
          </li>
        </ul>
      </div>
      <div className="footer-col">
        <div className="icons">
          <i className="fa-brands fa-facebook-f" />
          <i className="fa-brands fa-twitter" />
          <i className="fa-brands fa-linkedin" />
          <i className="fa-brands fa-github" />
        </div>
      </div>
    </div>
  </section>
</footer>

    </>
  );
};
