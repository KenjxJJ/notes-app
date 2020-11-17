import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const ProfilePage = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const { providerId }  = user.providerData[0];

  return (
    <>
      <section className="profile pt-4 pl-2">
        <header className="profile-header">
          <h1>Profile</h1>
        </header>
        <main className="profile-details">
          <div className="profile-img">
            <img
              className="profile-img"
              src={user.photoURL}
              alt={user.displayName}
            />
          </div>
          <div className="profile-other-info">
            <p>Name : {user.displayName}</p>
            <p>Email : {user.email}</p>
            <p>Account Type : {providerId}</p>

          </div>
        </main>
      </section>
    </>
  );
};

export default ProfilePage;
