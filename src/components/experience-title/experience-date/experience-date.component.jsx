import { generateDateMonth } from "../../../utils/datesUtil";

const ExperienceDate = ({ startDate, endDate }) => {
  const sDateStr = generateDateMonth(startDate);
  const eDateStr = generateDateMonth(endDate);
  return (
    <div>
      {sDateStr} - {eDateStr}
    </div>
  );
};

export default ExperienceDate;
