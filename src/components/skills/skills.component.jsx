import './skills.css';
import { skills } from '../../data/profile';
import SkillGroup from './skill-group/skill-group.component copy';

const Skills = () => {
    return (
        <div>
            <section id="skills" class="skills section-bg">
                <div class="container" data-aos="fade-up">

                    <div class="section-title">
                        <h2>Skills</h2>
                    </div>

                    <div class="row skills-content">

                        {skills.map((skillgroup) => (
                            < SkillGroup key={skillgroup.id} group={skillgroup} />
                        ))}


                    </div>
                </div>
            </section>

        </div>
    );
};

export default Skills;
