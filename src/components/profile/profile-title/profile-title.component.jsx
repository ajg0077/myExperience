const ProfileTitle = ({ profile }) => {
  const { firstName, middleName, lastName, phoneNumber, dob, address, email } =
    profile;
  return (
    <div className="card text-center mb-3 mt-3">
      <div className="card-body">
        <h1 className="card-title">
          {firstName.toUpperCase()} {middleName.toUpperCase()}{" "}
          {lastName.toUpperCase()}
        </h1>
        <h5 className="card-text">
          <div className="row">
            <div className="col-sm-4">{phoneNumber}</div>
            <div className="col-sm-4">{email}</div>

            <div className="col-sm-4">{dob}</div>
          </div>
        </h5>
      </div>
    </div>
  );
};

export default ProfileTitle;
