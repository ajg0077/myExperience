export const generateWorkDays = (startDate, endDate) => {
  const diff = Math.floor(endDate.getTime() - startDate.getTime());
  const day = 1000 * 60 * 60 * 24;

  const days = Math.floor(diff / day);
  const months = Math.floor(days / 31);
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  const yearsTxt =
    years > 0 ? years + " year" + (years > 1 ? "s, " : ", ") : "";
  const monthsTxt =
    remainingMonths > 0
      ? remainingMonths + " month" + (remainingMonths > 1 ? "s" : "")
      : "";
  var message = yearsTxt;
  message += monthsTxt;

  return message;
};

const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const generateDateMonth = (date) => {
  return monthNames[date.getMonth()] + " " + date.getFullYear();
};
