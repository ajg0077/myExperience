const Footer = ({ profile }) => {
    const { firstName, middleName, lastName, githubUrl, linkedInUrl } =
        profile;
    return (
        <div>
            <footer id="footer">
                <div class="container">
                    <h3>{firstName} {middleName} {lastName}</h3>
                    <div class="social-links">
                        <a href={linkedInUrl} target="_blank" class="linkedin" rel="noreferrer"><i class="bx bxl-linkedin"></i></a>
                        <a href={githubUrl} target="_blank" class="github" rel="noreferrer"><i class="bx bxl-github"></i></a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
