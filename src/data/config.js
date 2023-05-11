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
  console.log({ totalWorkExpEnabled, releventExpEnabled, industryExpEnabled });
  if (totalWorkExpEnabled) totalEnabled += 1;
  if (releventExpEnabled) totalEnabled += 1;
  if (industryExpEnabled) totalEnabled += 1;
  console.log({ totalEnabled });
  return split / totalEnabled;
};
