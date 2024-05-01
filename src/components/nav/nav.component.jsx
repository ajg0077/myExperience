
const Nav = ({ pageConfig }) => {
    const { homeEnabled, aboutEnabled, factsEnabled, skillsEnabled, resumeEnabled, certificationEnabled, portfolioEnabled, servicesEnabled, clientsEnabled, testimonialEnabled, contactEnabled, footerEnabled, resume } =
        pageConfig;
    return (
        <div>
            <i class="bi bi-list mobile-nav-toggle d-lg-none"></i>
            <header id="header" class="d-flex flex-column justify-content-center">

                <nav id="navbar" class="navbar nav-menu">
                    <ul>
                        {(homeEnabled) ? <li><a href="#hero" class="nav-link scrollto"><i class="bx bx-home"></i> <span>Home</span></a></li> : ""}
                        {(aboutEnabled) ? <li><a href="#about" class="nav-link scrollto"><i class="bx bx-user"></i> <span>About</span></a></li> : ""}
                        {(skillsEnabled) ? <li><a href="#skills" ><i class="bx bx-brain"></i> <span>Skills</span></a></li> : ""}
                        {(resumeEnabled) ? <li><a href="#resume" class="nav-link scrollto"><i class="bx bx-file-blank"></i> <span>Resume</span></a></li> : ""}
                        {(certificationEnabled) ? <li><a href="#certification" ><i class="bx bx-certification"></i> <span>Certifications And Accreditations</span></a></li> : ""}
                        {(portfolioEnabled) ? <li><a href="#portfolio" class="nav-link scrollto"><i class="bx bx-book-content"></i> <span>Portfolio</span></a></li> : ""}
                        {(servicesEnabled) ? <li><a href="#services" class="nav-link scrollto"><i class="bx bx-server"></i> <span>Services</span></a></li> : ""}
                        {(clientsEnabled) ? <li><a href="#clients" ><i class="bx bx-link"></i> <span>Clients</span></a></li> : ""}
                        {(contactEnabled) ? <li><a href="#contact" class="nav-link scrollto"><i class="bx bx-envelope"></i> <span>Contact</span></a></li> : ""}
                    </ul>
                </nav>

            </header>
        </div>
    );
};

export default Nav;
