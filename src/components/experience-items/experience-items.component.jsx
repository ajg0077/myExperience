const ExperienceItems = ({ experienceItems }) => {
  return (
    <div>
      <ul className="list-group list-group-flush">
        {experienceItems.map((item) => (
          <li key={Math.random()} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceItems;
