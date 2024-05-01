
const Home = ({ profile }) => {
    const { firstName, middleName, lastName, role, linkedInUrl, githubUrl } =
        profile;
    return (
        <div>
            <section id="hero" class="d-flex flex-column justify-content-center">
                <div class="container" data-aos="zoom-in" data-aos-delay="100">
                    <h1>{firstName} {middleName} {lastName}</h1>
                    <p>I'm a {role}</p>
                    <div class="social-links">
                        <a href={githubUrl} target="_blank" class="github" rel="noreferrer"><i class="bx bxl-github"></i></a>
                        <a href={linkedInUrl} target="_blank" class="linkedin" rel="noreferrer"><i class="bx bxl-linkedin"></i></a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
