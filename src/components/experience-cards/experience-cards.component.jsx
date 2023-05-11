import experiences from "../../data/experiences";
import ExperienceCard from "../experience-card/experience-card.component";

const ExperienceCards = () => {
  const experiencesList = experiences;
  return (
    <div>
      {experiencesList.map((experience) => (
        <ExperienceCard key={experience.id} experience={experience} />
      ))}
    </div>
  );
};

export default ExperienceCards;
