import logo from "./logo.svg";
import "./App.css";
import ExperienceCards from "./components/experience-cards/experience-cards.component";
import TotalExperience from "./components/total-experience/total-experience.component";
import Profile from "./components/profile/profile.component";

function App() {
  return (
    <div className="container">
      <Profile />
      <TotalExperience />
      <ExperienceCards />
    </div>
  );
}

export default App;
