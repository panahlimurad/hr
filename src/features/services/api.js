import { instanceAxiosAdmin } from "../helper/instanceAxiosAdmin"

export const Register = async(data)=>{
    try{
        const response = await instanceAxiosAdmin.post("/api/v1/register", data, 
            {
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                },
            }
        )
        return response
    }catch(error){
        throw error
    }
}


export const Login = async(data)=>{
    try{
        const response = await instanceAxiosAdmin.post("/api/v1/login", data,
            {
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                },
            }
        )
        return response
    }catch(error){
        throw error
    }
}


export const ForgotPasswordApi = async(data)=>{
    try{
        const response = await instanceAxiosAdmin.post("/api/v1/send-reset-otp", data)
        return response
    }catch(error){
        throw error
    }
}


export const ResetPasswordApi = async(data)=>{
    try{
        const response = await instanceAxiosAdmin.post("/api/v1/reset-password", data)
        return response
    }catch(error){
        throw error
    }
}


export const OtpExpire = async(data)=>{
    try{
        const response = await instanceAxiosAdmin.post("/api/v1/check-otp-expiry", data)
        return response
    }catch(error){
        throw error
    }
}


