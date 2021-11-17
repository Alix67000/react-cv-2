import React from "react";
import "./User.css";

const User = () => {
  return (
    <div className="user">
      <img className="user__avatar" src="./images/ali.jpg" alt="" />
      <h1 className="user__name">Ali AHMADI</h1>
      <div className="user__profession">Développeur web</div>
      <div className="user__infos">
        <p className="user__info">
          <i className="fas fa-home"></i>13 Rue des enfants 67200 Strasbourg
        </p>
        <p className="user__info">
          <i class="fas fa-phone-volume"></i>06 25 69 32 10
        </p>
        <p className="user__info">
          <i class="fas fa-envelope"></i>omidquester@gmail.com
        </p>
        <p className="user__info">
          <i class="fas fa-calendar-day"></i>Date de naissance : 16 04 2000
        </p>
        <p className="user__info">
          <i class="fas fa-map-marker-alt"></i>Lieu de naissance : Strasbourg
        </p>
      </div>
    </div>
  );
};

export default User;
