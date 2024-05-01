import ResumeItem from "./resume-item/resume-item.component";
import { experiences } from "../../data/exp_edu";

const Resume = () => {
    const experiencesList = experiences;

    return (
        <div>
            <section id="resume" class="resume">
                <div class="container" data-aos="fade-up">

                    <div class="section-title">
                        <h2>Resume</h2>
                    </div>
                    <h3 class="resume-title">Professional Experience</h3>
                    {experiencesList.map((experience) => (
                        <ResumeItem key={experience.id} experience={experience} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Resume;
