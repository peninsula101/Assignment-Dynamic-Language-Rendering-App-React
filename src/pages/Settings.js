
import React from 'react';

const Settings = ({ setLanguage }) => {
  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);  
  };

  return (
    <div className="settings-page">
      <h1>Settings</h1>
      <label htmlFor="language">Select Language: </label>
      <select id="language" onChange={handleLanguageChange}>
        <option value="en">English</option>
        <option value="fr">French</option>
        <option value="de">German</option>
        <option value="ru">Russian</option>
        <option value="es">Spanish</option>
        <option value="zh">Chinese</option>
      </select>
    </div>
  );
};

export default Settings;
