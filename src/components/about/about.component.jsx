import { getAge, generateBirthday } from "../../utils/datesUtil";
import { getTotalExp } from "../../data/exp_edu";
import profileImg from "../../img/profile-img.jpg";
const About = ({ profile }) => {
    const { phoneNumber, website, city, state, dob, email, degree, config, profileDesc } =
        profile;
    const { enableDOB, enableDegree, enableLocation, enableEmail, enableAge, freelanceAvailable, enablePhone } = config;
    return (
        <div>
            <section id="about" class="about">
                <div class="container" data-aos="fade-up">

                    <div class="section-title">
                        <h2>About</h2>
                    </div>

                    <div class="row">
                        <div class="col-lg-4">
                            <img src={profileImg} class="img-fluid" alt="" />
                        </div>
                        <div class="col-lg-8 pt-4 pt-lg-0 content">
                            {/* <h3>UI/UX Designer &amp; Web Developer.</h3> */}
                            <div class="row">
                                <div class="col-lg-6">
                                    <ul>
                                        {(enableDOB) ? <li><i class="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>{generateBirthday(dob)}</span></li> : ""}
                                        {(enableDegree) ? <li><i class="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>{degree}</span></li> : ""}
                                        {(enableLocation) ? <li><i class="bi bi-chevron-right"></i> <strong>City:</strong> <span>{city}, {state}</span></li> : ""}
                                        {(enableEmail) ? <li><i class="bi bi-chevron-right"></i> <strong>Email:</strong> <span>{email}</span></li> : ""}
                                    </ul>
                                </div>
                                <div class="col-lg-6">
                                    <ul>
                                        {(enableAge) ? <li><i class="bi bi-chevron-right"></i> <strong>Age:</strong> <span>{getAge(dob)}</span></li> : ""}
                                        {(enablePhone) ? <li><i class="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>{phoneNumber}</span></li> : ""}
                                        {(freelanceAvailable) ? <li><i class="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li> : ""}
                                        {(website != "") ? <li><i class="bi bi-chevron-right"></i> <strong>Website:</strong> <span>{website}</span></li> : ""}
                                    </ul>
                                </div>
                            </div>
                            <p>
                                {profileDesc.replace("%exp%", getTotalExp().relevantYears)}
                            </p>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default About;
