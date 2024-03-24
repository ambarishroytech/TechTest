import React from "react";
import './Cards.css';    
import ProfileCard from "./ProfileCard/ProfileCard";


const Cards = ({profiles}) => {
  return (
    <div className='wrapper-card-container'>
      {profiles.map((profile, index) => (
        <div className='wrapper-card' key={index}>
          <ProfileCard
            title={profile.title}
            logo={profile.logo}
            handle={profile.handle}
            description={profile.description}
          />
        </div>
      ))}
    </div>
  );
}

export default Cards;