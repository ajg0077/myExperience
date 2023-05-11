import { generateWorkDays } from "../../utils/datesUtil";
import ExperienceDate from "./experience-date/experience-date.component";

import "./experience-title.component.css";

const ExperienceTitle = ({ experience }) => {
  const { startDate, endDate } = experience;
  var workDays = generateWorkDays(startDate, endDate);

  return (
    <div>
      <div className="row">
        <div className="col-sm-8">
          <h5 className="card-title">{experience.title}</h5>
        </div>
        <div className="col-sm-4">
          <h6 className="card-title yrs-exp">
            <ExperienceDate
              startDate={experience.startDate}
              endDate={experience.endDate}
            />{" "}
          </h6>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-8">
          <h6 className="card-subtitle mb-2 text-muted">
            {experience.company}
          </h6>
        </div>
        <div className="col-sm-4">
          <h6 className="card-subtitle yrs-exp text-muted">{workDays}</h6>
        </div>
      </div>
    </div>
  );
};

export default ExperienceTitle;
