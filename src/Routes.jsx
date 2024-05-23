import React from "react";

import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { BusinessWriting } from "./Pages/Business/BusinessWriting";
import { ContentWriting } from "./Pages/Content/ContentWriting";
import {ContactUs} from "./Pages/ContactUs"
import {About} from "./Pages/About"
import { ClassofServe } from "./Pages/ClassServe";
import { HowItWorks } from "./Pages/HowItWorks";
import { HonorCode } from "./Pages/HonorCode";
import { Blogs } from "./Pages/Blogs";
import { AcademicWriting } from "./Pages/Academic/AcademicWriting";
import { FAQS } from "./Pages/FAQS";
import { SignIn } from "./Pages/Account/SignIn";
import { SignUp } from "./Pages/Account/SignUp";



const ProjectRoutes = () => {
  return (
    <>
      <React.Suspense fallback={<>Loading...</>}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="BusinessWriting" element={<BusinessWriting />} />
            <Route path="ContentWriting" element={<ContentWriting />} />
            <Route path="AcademicWriting" element={<AcademicWriting />} />
            <Route path="ContactUs" element={<ContactUs />} />
            <Route path="About" element={<About />} />
            <Route path="ClassOfServe" element={<ClassofServe />} />
            <Route path="HowItWorks" element={<HowItWorks />} />
            <Route path="HonorCode" element={<HonorCode />} />
            <Route path="Blogs" element={<Blogs />} />
            <Route path="Faq's" element={<FAQS />} />
            <Route path="SignIn" element={<SignIn />} />
            <Route path="SignUp" element={<SignUp />} />
          </Routes>
        </Router>
      </React.Suspense>
    </>
  );
};

export default ProjectRoutes;
