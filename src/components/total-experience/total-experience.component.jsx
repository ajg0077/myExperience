import { generateWorkDays } from "../../utils/datesUtil";
import experiences from "../../data/experiences";
import { config, totalWorkSplit } from "../../data/config";

const TotalExperience = () => {
  const experienceList = experiences;
  const { totalWorkExpEnabled, releventExpEnabled, industryExpEnabled } =
    config;

  const expSplit = totalWorkSplit();
  const totalExp = totalWorkExpEnabled
    ? generateWorkDays(
        experienceList[experienceList.length - 1].startDate,
        experienceList[0].endDate
      )
    : "";
  const relevantExp = releventExpEnabled
    ? generateWorkDays(
        experienceList[experienceList.length - 2].startDate,
        experienceList[0].endDate
      )
    : "";
  const industryExp = industryExpEnabled
    ? generateWorkDays(
        experienceList[experienceList.length - 4].startDate,
        experienceList[0].endDate
      )
    : "";
  return (
    <div className="row mb-3 mt-3">
      {totalWorkExpEnabled ? (
        <div className={`col-sm-${expSplit}`}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Total Experience</h5>
              <p className="card-text">{totalExp}</p>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {releventExpEnabled ? (
        <div class={`col-sm-${expSplit}`}>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Relevent Experience</h5>
              <p class="card-text">{relevantExp}</p>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {industryExpEnabled ? (
        <div class={`col-sm-${expSplit}`}>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Work Experience</h5>
              <p class="card-text">{industryExp}</p>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default TotalExperience;
