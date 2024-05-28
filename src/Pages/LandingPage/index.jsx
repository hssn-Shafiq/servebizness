import { Header } from "../../Components/Header";
import "./landingpage.css"
export const LandingPage = () => {
  return (
    <>
    <Header justify_content="justify-content-end" display="d-none" />
      <main>
        <div className="main-banner d-flex align-items-center justify-content-center flex-column">
          <div className="button-container">
            <a href="/home">
              <button className="px-3  py-2  rounded-5">
                Business Writing
              </button>
            </a>
            <a href="/home">
              <button className="px-3  py-2  rounded-5">Content Writing</button>
            </a>
            <a href="/home">
              <button className="px-3  py-2  rounded-5">
                Academic Writing
              </button>
            </a>
          </div>
        </div>
      </main>
    </>
  );
};
