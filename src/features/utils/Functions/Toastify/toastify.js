import { toast } from 'react-toastify';

const notify = (message, type)=>{

    if(type === "success"){
        toast.success(message,{
            position:"top-left", 
            autoClose:1500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            className:"text-[15px]"
          })
    }else if(type === "error"){
        toast.error(message,{
            position:"top-left", 
            autoClose:2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            className:"text-[15px]"
          })
    }

} 

export default notify