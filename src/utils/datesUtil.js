export const generateWorkDays = (startDate, endDate) => {
  if (null == endDate) {
    endDate = new Date();
  }
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

export const getDiffDays = (date2, date1) => {
  const diffTime = Math.abs(date2 - date1);
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}

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

export const getAge = (dateStr) => {
  return _calculateAge(new Date(dateStr));
}

export const generateBirthday = (date) => {
  var birthday = new Date(date);
  return birthday.getDate() + " " + generateDateMonth(birthday);
}

const _calculateAge = (birthday) => { // birthday is a date
  var ageDifMs = Date.now() - birthday.getTime();
  var ageDate = new Date(ageDifMs); // miliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}