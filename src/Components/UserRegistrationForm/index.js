import React, { useState } from 'react';
import './index.css'

const UserRegistrationForm = ({ onStartGame }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [difficulty, setDifficulty] = useState('Easy');
  const [isFormValid, setIsFormValid] = useState(true);
  const [nameFocused, setNameFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [mobileFocused, setMobileFocused] = useState(false);

  const handleStartClick = () => {
    if (isFormValid) {
      onStartGame({ name, email, mobile, difficulty });
    }
  };

  const handleBlur = (field) => {
    if (!field.trim()) {
      setIsFormValid(false);
    } else {
      setIsFormValid(true);
    }
  };

  return (
    <div className="registration-form">
      <h2>User Registration</h2>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => {
          setName(e.target.value);
        }}
        onBlur={() => {
          setNameFocused(true);
          handleBlur(name);
        }}
      />
      {nameFocused && !name.trim() && <p className="error">Please enter your name.</p>}
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        onBlur={() => {
          setEmailFocused(true);
          handleBlur(email);
        }}
      />
      {emailFocused && !email.trim() && <p className="error">Please enter your email.</p>}
      <input
        type="text"
        placeholder="Mobile Number"
        onChange={(e) => {
          setMobile(e.target.value);
        }}
        onBlur={() => {
          setMobileFocused(true);
          handleBlur(mobile);
        }}
      />
      {mobileFocused && !mobile.trim() && <p className="error">Please enter your mobile number.</p>}
      <select onChange={(e) => setDifficulty(e.target.value)}>
        <option value="Easy">Easy</option>
        <option value="Medium">Medium</option>
        <option value="Hard">Hard</option>
      </select>
      {!isFormValid && <p className="warning">Please fill in all the details.</p>}
      <button onClick={handleStartClick} disabled={!isFormValid}>
        Start Game
      </button>
    </div>
  );
};

export default UserRegistrationForm;
