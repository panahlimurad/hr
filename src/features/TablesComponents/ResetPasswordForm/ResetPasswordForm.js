import React, { useEffect, useState } from 'react'
import styles from './style.module.css'
import { motion } from "framer-motion";
import ReCAPTCHA from 'react-google-recaptcha'
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { ForgotPasswordApi, OtpExpire, ResetPasswordApi } from '../../services/api';
import { useForm } from 'react-hook-form';
import notify from '../../utils/Functions/Toastify/toastify';
import Cookies from "js-cookie"; 
import ButtonSpinner from '../../shared/SmallComponents/ButtonSpinner/ButtonSpinner';


const ResetPasswordForm = () => {

  const navigate = useNavigate();
  const [] = useState(false);
  const [otpEmail, setOtpEmail] = useState(null);
  const [captchaValue, setCaptchaValue] = useState(null);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();


  const [showPassword, setShowPassword] = useState(false);
  // const [isConfirmPassword, setIsConfirmPassword] = useState(false);
  const [expiryTime, setExpiryTime] = useState(null);


  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };


  const mutate = useMutation((data) => ResetPasswordApi(data), {
    onSuccess: (response) => {
      notify(response?.data?.message, "success");
      reset();
      console.log(response);
      navigate("/auth");
    },
    onError: (error) => {
      console.log(error);
      let errorMessage = "Something went wrong";

      if (error?.response?.data?.data?.password) {
        errorMessage = error?.response?.data?.data?.password[0];
      } else {
        errorMessage = error?.response?.data?.message;
      }

      notify(errorMessage, "error");
      reset();
    },
  });

  const mutateSendOtpAgain = useMutation((data) => ForgotPasswordApi(data), {
    onSuccess: (response) => {
      notify(response?.data?.message, "success");
      navigate("/auth/reset-password");
      otpExpire.mutate({ email: otpEmail });
    },
    onError: (error) => {
      if (error) {
        notify(error?.response?.data?.message, "error");
        reset();
      }
    },
  });

  const sendOtpAgain = () => {
    const dataOtp = { email: otpEmail };
    mutateSendOtpAgain.mutate(dataOtp);
  };

  const otpExpire = useMutation((data) => OtpExpire(data), {
    onSuccess: (response) => {
      setExpiryTime(response?.data?.otp_expires_in);
    },
    onError: (error) => {
      if (error) {
        notify(error?.response?.data?.message, "error");
      }
    },
  });

  useEffect(() => {
    const email = Cookies.get("email");
    setOtpEmail(email);
    if (email) {
      otpExpire.mutate({ email });
    }
  }, []);

  useEffect(() => {
    if (expiryTime !== null && expiryTime > 0) {
      const interval = setInterval(() => {
        setExpiryTime((prevtime) => (prevtime > 0 ? prevtime - 1 : 0));
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [expiryTime]);

  const formatTime = (second) => {
    const minutes = Math.floor(second / 60);
    const seconds = Math.floor(second % 60);
    return `${minutes < 10 ? `0${minutes}` : minutes}:${
      seconds < 10 ? `0${seconds}` : seconds
    }`;
  };

  const sendPasswordReset = (data) => {
    if (!captchaValue) {
      notify("Please complete the CAPTCHA", "error");
      return;
    }
    const requestData = { ...data, email: otpEmail };
    mutate.mutate(requestData);
  };

  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 0.9,
      delay: 0.5,
      ease: [0, 0.71, 0.2, 1.01]
    }}
    className={styles.container}>
        <div className={styles.nav}>
        <ul className="ml-8">
          <li className={styles.btnSign}>
            <Link className={styles.link}>
              Reset Password
            </Link>
          </li>
        </ul>
            <p className='text-[#ffff] mt-5 pl-11'>
             OTP sent to {otpEmail}
            </p>
      </div>
        <form className={styles.formSignActive} onSubmit={handleSubmit(sendPasswordReset)}>
          <label className={styles.labelForm} htmlFor="enail">
            Email
          </label>
          <input
            className={`${styles.formStyling} ${errors.email ? styles.shake:""} `}
            {...register("email", { required: "Email is required", pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'Invalid email address' } })}
            type="email"
            name="email"
            placeholder=""
            id="email"
            />
            <label className={styles.labelForm} htmlFor="enail">
            OTP
          </label>
          <input
            className={`${styles.formStyling} ${errors.otp ? styles.shake:""} `}
            {...register("otp", { required: "OTP is required", pattern: { value: /^[0-9]{6}$/i, message: 'Invalid OTP' }})}
            type="number"
            name="otp"
            placeholder=""
            id="otp"
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
            className="relative top-[-46px] left-[90%] cursor-pointer"
            sx={{ color: "white" }}
          />
        ) : (
          <VisibilityOffIcon
            onClick={toggleShowPassword}
            className="relative top-[-46px] left-[90%] cursor-pointer"
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
            className="relative top-[-46px] left-[90%] cursor-pointer"
            sx={{ color: "white" }}
          />
        ) : (
          <VisibilityOffIcon
            onClick={toggleShowConfirmPassword}
            className="relative top-[-46px] left-[90%] cursor-pointer"
            sx={{ color: "white" }}
          />
        )}
            <br/>
            <div>
            <ReCAPTCHA
            className="flex justify-center mt-5"
            sitekey="6LevjB0qAAAAAH6UG2XsS1Eb0_4XSNHmgtaJRfH_"
            onChange={handleCaptchaChange}
            />
            </div>
          <div className={styles.btnAnimate}>
            <button disabled={mutate.isLoading} type="submit" className={styles.btnSignIn}>
              {mutate.isLoading ? <ButtonSpinner/> : "Send Password Reset Link"}
            </button>
          </div>
          {expiryTime !== null && (
            <div className="text-center text-[#ffff]">
              {expiryTime === 0 ? (
                "Otp password has expired, please resend"
              ) : (
                <p>OTP expires in: {formatTime(expiryTime)}</p>
              )}
            </div>
          )}
          {!mutateSendOtpAgain.isLoading && (
            <p
              onClick={sendOtpAgain}
              className="mt-1 w-full text-center cursor-pointer hover:bg-[#1259ff] rounded-2xl px-3 py-1 text-[15px] text-[#1f74ec] transition duration-300 hover:bg-colorDefault hover:text-white"
            >
              Send OTP again
            </p>
          )}
        </form>
            </motion.div>
  )
}

export default ResetPasswordForm