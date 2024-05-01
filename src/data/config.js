export const config = {
  totalWorkExpEnabled: true,
  releventExpEnabled: true,
  industryExpEnabled: false,
};

export const totalWorkSplit = () => {
  let split = 12;
  let totalEnabled = 0;
  const { totalWorkExpEnabled, releventExpEnabled, industryExpEnabled } =
    config;
  if (totalWorkExpEnabled) totalEnabled += 1;
  if (releventExpEnabled) totalEnabled += 1;
  if (industryExpEnabled) totalEnabled += 1;
  return split / totalEnabled;
};

export const pageConfig = {
  homeEnabled: true,
  aboutEnabled: true,
  factsEnabled: false,
  skillsEnabled: true,
  resumeEnabled: true,
  portfolioEnabled: false,
  certificationEnabled: true,
  clientsEnabled: true,
  servicesEnabled: false,
  testimonialEnabled: false,
  contactEnabled: false,
  footerEnabled: true,
  resume: {
    summaryEnabled: true,
    experienceEnabled: true,
    educationEnabled: true
  }
}