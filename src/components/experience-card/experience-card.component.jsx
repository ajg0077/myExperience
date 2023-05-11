import ExperienceItems from "../experience-items/experience-items.component";
import ExperienceTitle from "../experience-title/experience-title.component";

const ExperienceCard = ({ experience }) => {
  return (
    <div className=" mb-3">
      <div className="card ">
        <div className="card-body">
          <ExperienceTitle experience={experience} />

          <ExperienceItems experienceItems={experience.experienceItems} />
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
