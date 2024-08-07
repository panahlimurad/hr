import React, { useState } from "react";
import styles from "./style.module.css";
import { Link } from "react-router-dom";
import RegisterForm from "../RegisterForm/RegisterForm";
import LoginForm from "../LoginForm/LoginForm";

const AccountForm = () => {
  const [checked, setChecked] = useState(false);

  const toggleCheckbox = () => {
    setChecked(!checked);

  };

  return (
    <div className={!checked ? styles.container : styles.containerSignUp}>
      <div className={styles.nav}>
        <ul className="ml-8">
          <li
            className={`${styles.btnSign} ${
              checked ? styles.btnSignInactive : styles.btnSignActive
            }`}
          >
            <Link onClick={toggleCheckbox} className={styles.link}>
              Sign in
            </Link>
          </li>
          <li
            className={`${styles.btnSign} ${
              !checked ? styles.btnSignInactive : styles.btnSignActive
            }`}
          >
            <Link onClick={toggleCheckbox} className={styles.link}>
              Sign up
            </Link>
          </li>
        </ul>
      </div>
      <div className="relative">
        {checked ? (
            <RegisterForm checked={checked} toogleCheckBox={toggleCheckbox}/>
        ) : (
            <LoginForm checked={checked} />
        )}
      </div>
    </div>
  );
};

export default AccountForm;
