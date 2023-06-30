import React from 'react';

import './UserInfoButtons.scss';

const UserInfoButtons = () => {
  return (
    <div className="buttons__block">
      <a
        href="#"
        className="buttons__button blue"
      >
        Partner program
      </a>
      <a
        href="#"
        className="buttons__button gray"
      >
        About program
      </a>
    </div>
  );
};

export default UserInfoButtons;
