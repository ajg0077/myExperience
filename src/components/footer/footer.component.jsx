const Footer = ({ profile }) => {
    const { firstName, middleName, lastName, phoneNumber, dob, address, email, githubUrl, linkedInUrl } =
        profile;
    return (
        <div>
            <footer id="footer">
                <div class="container">
                    <h3>{firstName} {middleName} {lastName}</h3>
                    <div class="social-links">
                        <a href={linkedInUrl} class="linkedin"><i class="bx bxl-linkedin"></i></a>
                        <a href={githubUrl} class="github"><i class="bx bxl-github"></i></a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
