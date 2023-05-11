import ProfileDescription from "./profile-description/profile-description.component";
import ProfileTitle from "./profile-title/profile-title.component";

import profile from "../../data/profile";

const Profile = () => {
  const profileData = profile;
  return (
    <div>
      <ProfileTitle profile={profileData} />
      <ProfileDescription description={profile.profileDesc} />
    </div>
  );
};

export default Profile;
