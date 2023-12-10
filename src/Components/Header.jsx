import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div>
          <Link className="text-light" href = "https://github.com/Acolyte03">
            <h1 className="m-0">Aeryk Andrews</h1>
          </Link>
        </div>
        <div>
          
        </div>
      </div>
   );
};

export { Header as default };
