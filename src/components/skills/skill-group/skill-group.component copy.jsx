import TechItem from "./tech-item/tech-item.component copy";
import "./skill-group.css"

const SkillGroup = ({ group }) => {
    return (
        <div class="col-lg-6">
            <h4 className="skills__subtitle">{group.name}</h4>

            <div >
                {group.tech.map((techItem) => (
                    <TechItem key={techItem} tech={techItem} />
                ))}
            </div>
        </div>
    );
};

export default SkillGroup;
