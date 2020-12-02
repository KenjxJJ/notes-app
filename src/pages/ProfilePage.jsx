import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import {ThemeContext} from "../contexts/ThemeContext";
import AppTheme from "../Colors";


const ProfilePage = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const { providerId }  = user.providerData[0];
  
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];


  return (
    <>
    <div className="container-fluid" style={{
       backgroundColor: `${currentTheme.backgroundColor}`,
       color: `${currentTheme.textColor}` }}>
      <section className="profile pt-4 pl-2" >
        <header className="profile-header">
          <h1>Profile</h1>
        </header>
        <main className="profile-details">
          <div className="profile-img">
            <img
              className="profile-img"
              src={user.photoURL ||`https://picsum.photos/100` }
              
              alt={user.displayName}
            />
          </div>
          <div className="pt-3 profile-other-info">
            <p className="mb-4"> <span className="font-weight-bold">Name</span> : {user.displayName}</p>
            <p className="mb-4"><span className="font-weight-bold">Email</span> : {user.email}</p>
            <p><span className="font-weight-bold" >Account Type</span> : {providerId}</p>

          </div>
        </main>
      </section>
      </div>
    </>
  );
};

export default ProfilePage;
