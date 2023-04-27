import React from 'react';
import './Logos.css';

function Logos() {
  return (
    <div className="logos">
      <div className="logo">
        <img src="./images/aeroplane-logo.png" alt="Aeroplane Logo" />
        <p>10</p>
        <p>Flights</p>
      </div>
      <div className="logo">
        <img src="./images/inbox-logo.png" alt="Inbox Logo" />
        <p>5</p>
        <p>New Messages</p>
      </div>
      <div className="logo">
        <img src="./images/contact-logo.png" alt="Contact Logo" />
        <p>3</p>
        <p>New Contacts</p>
      </div>
    </div>
  );
}

export default Logos;
