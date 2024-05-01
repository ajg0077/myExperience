import { generateDateMonth } from "../../../utils/datesUtil";

const ResumeItem = ({ experience }) => {
    return (
        <div class="resume-item">
            <h4>{experience.title}</h4>
            <h5>{generateDateMonth(experience.startDate)}  - {(null != experience.endDate) ? generateDateMonth(experience.endDate) : "Present"}</h5>
            <p><em>{experience.company} </em></p>
            <ul>
                {experience.experienceItems.map((item) => (
                    <li key={Math.random()} >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ResumeItem;