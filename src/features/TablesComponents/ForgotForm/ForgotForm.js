import React, { useState } from 'react'
import styles from './style.module.css'
import { useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import { ForgotPasswordApi } from '../../services/api'
import Cookies from "js-cookie"; 
import notify from '../../utils/Functions/Toastify/toastify'
import { Link, useNavigate } from 'react-router-dom'
import ButtonSpinner from '../../shared/SmallComponents/ButtonSpinner/ButtonSpinner'
import { motion } from "framer-motion";
import ReCAPTCHA from 'react-google-recaptcha'


const ForgotForm = () => {


    const {register, handleSubmit, reset, formState:{errors}} = useForm()
    const [captchaValue, setCaptchaValue] = useState(null);
    const navigate = useNavigate()

    const handleCaptchaChange = (value) => {
      setCaptchaValue(value);
    };

    const mutate = useMutation((data) => ForgotPasswordApi(data), {
        onSuccess: (response, variables) => {
          notify(response?.data?.message, "success");
          reset();
          Cookies.set('email', variables.email);
          navigate("/auth/reset-password");
        },
        onError: (error) => {
          if (error) {
            notify(error?.response?.data?.data?.email[0], "error");
            reset()
          }
        },
      });

      const sendPasswordReset = (data) => {
        if (!captchaValue) {
          notify("Please complete the CAPTCHA", "error");
          return;
        }
        mutate.mutate(data);
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
              Forgot Password
            </Link>
          </li>
        </ul>
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
            placeholder="Please enter your email"
            id="email"
            />
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
        </form>
            </motion.div>
  )
}

export default ForgotForm