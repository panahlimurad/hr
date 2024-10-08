import React, { useState } from 'react'
import styles from './style.module.css'
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { Login } from '../../services/api';
import notify from '../../utils/Functions/Toastify/toastify';
import Cookies from "js-cookie";
import { Link, useNavigate } from 'react-router-dom';
import ButtonSpinner from '../../shared/SmallComponents/ButtonSpinner/ButtonSpinner';
import ReCAPTCHA from 'react-google-recaptcha'


const LoginForm = ({checked}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [attempts, setAttempts]= useState(0)
  const [captchaValue, setCaptchaValue] = useState(null);
  const navigate = useNavigate()

  const toggleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
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


  const mutateLogin = useMutation((data) => Login(data), {
    onSuccess: (response) => {
      console.log(response);
      notify(response?.data?.message, "success");
      reset();
      if (rememberMe) {
        Cookies.set("token", response?.data?.token, {
          expires: 7,
        });
      }
      navigate("/");
      console.log("okey", response);
    },
    onError: (error) => {
      console.log(error.response.data.login_attempts);
      setAttempts(error?.response?.data?.login_attempts)
      let errorMessage;
      
      if (error?.response?.data?.message) {
        errorMessage = error?.response?.data?.message;
      }else if(error?.response?.data?.data?.password[0]){
        errorMessage = error?.response?.data?.data?.password
      }else{
        errorMessage = "Something went wrong"
      }
      notify(errorMessage, "error");
      setValue("password", "");
    },
  });


  const LoginUser = async (data) => {
    if (attempts >= 5 && !captchaValue) {
      notify("Please complete the CAPTCHA", "error");
      return;
    }
    mutateLogin.mutate(data);
  };

  return (
       <form
          onSubmit={handleSubmit(LoginUser)}
          className={`${
            checked ? styles.formSignInActive : styles.formSignActive
          }`}
        >
          <label className={styles.labelForm} htmlFor="enail">
            Email
          </label>
          <input
            className={`${styles.formStyling} ${errors.email ? styles.shake:""} `}
            {...register("email", { required: "Email is required", pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'Invalid email address' } })}
            type="email"
            name="email"
            id="email"
            placeholder=""
          />
          <label className={styles.labelForm} htmlFor="password">
            Password
          </label>
          <div className='relative'>
          <input
            className={`${styles.formStyling} ${errors.password ? styles.shake:""} `}
            {...register("password", { required: "Password is required" })}
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            placeholder=""
          />
          {showPassword ? (
            <VisibilityIcon
              onClick={toggleShowPassword}
              className="absolute top-[5px] right-3 cursor-pointer"
              sx={{ color: "white" }}
            />
          ) : (
            <VisibilityOffIcon
              onClick={toggleShowPassword}
              className="absolute top-[5px] right-3 cursor-pointer"
              sx={{ color: "white" }}
            />
          )}

          </div>
          <input onClick={toggleRememberMe} type="checkbox"
           {...register("remember")}
           name="remember"
           id="checkbox"
           placeholder=""
          />
          <label className={styles.labelForm} htmlFor="checkbox">
            <span className={styles.ui}></span>Keep me signed in
          </label>
          {attempts >= 5 && 
          <ReCAPTCHA
          className="flex justify-center mt-5"
          sitekey="6LevjB0qAAAAAH6UG2XsS1Eb0_4XSNHmgtaJRfH_"
          onChange={handleCaptchaChange}
          />
          }
          <div className={styles.btnAnimate}>
            <button disabled={mutateLogin.isLoading} type="submit" className={styles.btnSignIn}>
              {mutateLogin.isLoading ? <ButtonSpinner/> : "Sign In"}
            </button>
          </div>
          <div className={styles.forgot}>
            <Link to={"forgot-password"} className={styles.for}>Forgot your password?</Link>
          </div>
        </form>
  )
}

export default LoginForm