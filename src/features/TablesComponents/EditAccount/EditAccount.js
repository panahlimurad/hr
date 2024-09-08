import React, { useRef, useState } from "react";
import Test from '../../images/usrbig.jpg'
import FileUploadIcon from '@mui/icons-material/FileUpload';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import PhoneInput from "react-phone-input-2";
import BasicDatePicker from "../../shared/SmallComponents/DataPicker/DataPicker";
import styles from "./style.module.css";
import { useForm } from "react-hook-form";

const EditAccount = () => {

    const fileInputRef = useRef();
  const [preview, setPreview] = useState(null);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
      } = useForm();


      const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setPreview(reader.result);
          };
          reader.readAsDataURL(file);
        }
      };

      const handleButtonClick = () => {
        fileInputRef.current.click();
      };

  return (
  <div className="w-full bg-white p-[15px]">
    <div className="flex items-center gap-4 h-[100px] mb-4">
        <div>
    <img class="w-16 h-16 rounded-full" src={Test} alt="Rounded avatar"/>
        </div>
    <div className="flex gap-4">
        <button onClick={handleButtonClick} className={styles.btnFile}>
            <FileUploadIcon sx={{ width: "18px", height: "18px", color: "#568bff" }}/>
            <p className="text-[#568bff] text-sm font-medium">Upload</p>
        </button>
        <button className={styles.btnRemove}>
            <DeleteSweepIcon sx={{ width: "18px", height: "18px", color: "#656f75" }}/>
            <p className="text-[#666a70] text-sm font-medium">Remove</p>
        </button>
    </div>
    </div>
    <form
        //   onSubmit={handleSubmit(CreateCompany)}
          className="flex flex-col gap-6"
        >
          <input
            type="file"
            onChange={handleFileChange}
            accept="image/*"
            ref={fileInputRef}
            className="hidden"
          />
          <div className="flex gap-6">
            <div className="flex flex-col flex-1 gap-10">
              <input
                {...register("name", { required: "Name is required" })}
                className={styles.formInput}
                type="text"
                name="name"
                id="name"
                placeholder="Name"
              />
              <input
                {...register("surname", {
                  required: "surname is required",
                })}
                className={styles.formInput}
                type="text"
                name="surname"
                id="surname"
                placeholder="Surname"
              />
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Invalid email address",
                  },
                })}
                className={styles.formInput}
                type="email"
                name="email"
                id="email"
                placeholder="Email"
              />
              <BasicDatePicker width="100%" label="Date of Joining" />
            </div>
            <div className="flex flex-col flex-1 gap-10">
              <PhoneInput
                inputStyle={{
                  width: "100%",
                  height: "50px",
                  borderBottom: "1px solid #aeaeae",
                  outline: "none",
                }}
                country={"az"}
                inputProps={{
                  name: "phone",
                  required: true,
                  autoFocus: true,
                }}
              />
              <input
                {...register("address", { required: "Address is required" })}
                className={styles.formInput}
                id="address"
                name="address"
                type="text"
                placeholder="Address"
              />
              <BasicDatePicker width={"100%"} label={"Date of Birth"} />
            </div>
          </div>
          <div>
            <textarea
              {...register("description", {
                required: "Description is required",
              })}
              id="description"
              name="description"
              type="text"
              placeholder="Description"
              className={styles.formTextArea}
            ></textarea>
          </div>
          <div className="flex gap-4">
          <button className={styles.formBtnSubmit}>Save</button>
          <button className={styles.formBtnCancel}>Cancel</button>
        </div>
        </form>
  </div>
  );
};

export default EditAccount;
