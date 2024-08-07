import React, { useState } from "react";
import styles from "./style.module.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { Register } from "../../services/api";
import notify from "../../utils/Functions/Toastify/toastify";
import ButtonSpinner from "../../shared/SmallComponents/ButtonSpinner/ButtonSpinner";

const RegisterForm = ({ checked, toogleCheckBox }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  const mutation = useMutation((data) => Register(data), {
    onSuccess: (response) => {
      notify("Successfully Registered", "success");
      reset();
      // navigate("/login"); 
      toogleCheckBox();
      console.log("okey", response);
    },
    onError: (error) => {
      let errorMessage = "Something went wrong";

      if (error?.response?.data?.data?.email) {
        errorMessage = error?.response?.data?.data?.email[0];
      } else {
        errorMessage = error?.response?.data?.data?.password[0];
      }
      notify(errorMessage, "error");
      setValue("password", "");
      setValue("password_confirmation", "");
    },
  });

  
  const CreateAccount = async (data) => {
    mutation.mutate(data);
  };
  
  return (
      <form
        onSubmit={handleSubmit(CreateAccount)}
        className={`${
          checked ? styles.formSignupActive : styles.formSignupInactive
        }`}
      >
        <label className={styles.labelForm} htmlFor="name">
          Name
        </label>
        <input
          className={`${styles.formStyling} ${errors.name ? styles.shake:""} `}
          {...register("name", {
            required: "Name is required",
          })}
          type="text"
          id="name"
          name="name"
          placeholder=""
        />
        <label className={styles.labelForm} htmlFor="lastname">
          Last Name
        </label>
        <input
          className={`${styles.formStyling} ${errors.lastname ? styles.shake:""} `}
          {...register("lastname", {
            required: "Last Name is required",
          })}
          type="text"
          id="lastname"
          name="lastname"
          placeholder=""
        />
        <label className={styles.labelForm} htmlFor="email">
          Email
        </label>
        <input
          className={`${styles.formStyling} ${errors.email ? styles.shake:""} `}
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Invalid email address",
            },
          })}
          type="email"
          id="email"
          name="email"
          placeholder=""
        />
        <label className={styles.labelForm} htmlFor="password">
          Password
        </label>
        <input
          className={`${styles.formStyling} ${errors.password ? styles.shake:""} `}
          {...register("password", {
            required: "Password is required",
          })}
          type={showPassword ? "text" : "password"}
          name="password"
          id="password"
          placeholder=""
        />
        {showPassword ? (
          <VisibilityIcon
            onClick={toggleShowPassword}
            className="relative top-[-50px] left-[90%] cursor-pointer"
            sx={{ color: "white" }}
          />
        ) : (
          <VisibilityOffIcon
            onClick={toggleShowPassword}
            className="relative top-[-50px] left-[90%] cursor-pointer"
            sx={{ color: "white" }}
          />
        )}
        <label className={styles.labelForm} htmlFor="password_confirmation">
          Confirmation Password
        </label>
        <input
          className={`${styles.formStyling} ${errors.password_confirmation ? styles.shake:""} `}
          {...register("password_confirmation", {
            required: "Password confirmation is required",
          })}
          type={showConfirmPassword ? "text" : "password"}
          name="password_confirmation"
          id="password_confirmation"
          placeholder=""
        />
        {showConfirmPassword ? (
          <VisibilityIcon
            onClick={toggleShowConfirmPassword}
            className="relative top-[-50px] left-[90%] cursor-pointer"
            sx={{ color: "white" }}
          />
        ) : (
          <VisibilityOffIcon
            onClick={toggleShowConfirmPassword}
            className="relative top-[-50px] left-[90%] cursor-pointer"
            sx={{ color: "white" }}
          />
        )}
        <button
          disabled={mutation.isLoading}
          type="submit"
          className={styles.btnSignup}
        >
          {mutation.isLoading ? <ButtonSpinner /> : "Sign Up"}
        
        </button>
      </form>
  );
};

export default RegisterForm;
