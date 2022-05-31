import "../styles/userpage.css";

import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUser } from "../utils";
import profilePic from "../img/steve-gary-smol.png"

const Userpage = ({ user }) => {
  const { target } = useParams(); //this is params for finding the user based on URL, might need renaming
  const fullUrl = window.location.href;
  const [profile, setProfile] = useState(""); //card state starts as null.
  useEffect(() => {
    getUser(target, setProfile);
  }, []); //basic state changing try/catch to try and get basic data

  return (
    <div className="userPage_container">
      <div className="spacer"></div>
      <h2 className="userPage_header">{target}'s profile</h2>
      <img className="stevegary_profile_pic" src={profilePic} alt="Steve Gary" />
      {user === target && <p>Your sharable URL is: {fullUrl}</p>}

      {/* {profile ? (
                    profile.socialLinks.map(link=><a key={link.socialName} target='_blank' rel="noreferrer" href={link.url} className="userPage_SocialLink">{link.socialName}</a>)
                ):(
                    "This user has not set up a profile yet!" 
                )} */}
      {/* conditional rendering so an unset profile doesn't try to render a profile */}
      {
        <div>
          {profile &&
            profile.socialLinks &&
            profile.socialLinks &&
            profile.socialLinks.map((item, i) => {
              console.log(item);
              return (
                <a
                  key={i}
                  className="userProfile_link-mobile-a"
                  href={`http://${item.url}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="userProfile_link-mobile-display">
                    <p>{item.socialName}</p>
                  </div>
                </a>
              );
            })}
        </div>
      }
      {user === target && (
        <Link className="userPage_edit" to={"/UserProfile"}>
          Edit your profile
        </Link>
      )}
    </div>
  );
};

export default Userpage;
