import "./App.css";
import Nav from "./components/nav/nav.component";
import Home from "./components/home/home.component";
import { profile } from "./data/profile";
import { pageConfig } from "./data/config";
import About from "./components/about/about.component";

import Skills from "./components/skills/skills.component";
import Portfolio from "./components/portfolio/portfolio.component";
import Services from "./components/services/services.component";
import Testimonials from "./components/testimonials/testimonials.component";
import Contact from "./components/contact/contact.component";
import Facts from "./components/facts/facts.component";
import Resume from "./components/resume/resume.component";
import Footer from "./components/footer/footer.component";
import Certification from "./components/certification/certification.component";
import Clients from "./components/clients/clients.component";
import './style.css'

function App() {
  const profileData = profile;
  const { homeEnabled, aboutEnabled, factsEnabled, skillsEnabled, resumeEnabled, portfolioEnabled, servicesEnabled, certificationEnabled, clientsEnabled, testimonialEnabled, contactEnabled, footerEnabled, resume } =
    pageConfig;
  return (

    <div>
      <Nav pageConfig={pageConfig} />
      {(homeEnabled) ? <Home profile={profileData} /> : ""}
      <main id="main">
        {(aboutEnabled) ? <About profile={profileData} /> : ""}
        {(factsEnabled) ? <Facts /> : ""}
        {(skillsEnabled) ? <Skills /> : ""}
        {(resumeEnabled) ? <Resume resumeConfig={resume} /> : ""}
        {(portfolioEnabled) ? <Portfolio /> : ""}
        {(servicesEnabled) ? <Services /> : ""}
        {(testimonialEnabled) ? <Testimonials /> : ""}
        {(certificationEnabled) ? <Certification /> : ""}
        {(clientsEnabled) ? <Clients /> : ""}
        {(contactEnabled) ? <Contact /> : ""}
        {(footerEnabled) ? <Footer profile={profileData} /> : ""}
      </main>
    </div>
  );
}

export default App;
