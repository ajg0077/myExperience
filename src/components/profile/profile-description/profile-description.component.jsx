const ProfileDescription = ({ description }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">PROFILE</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

export default ProfileDescription;
