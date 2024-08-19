import React, { useRef, useState } from 'react'
import styles from './style.module.css'
import { useForm } from 'react-hook-form';
import PhoneInput from "react-phone-input-2";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";


const AddTableDepartments = () => {

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

  const CreateCompany = async (data) => {
    console.log(data);
  };


  return (
    <div className="bg-bg-tables rounded-xl p-[15px] flex flex-col">
      <div className="flex items-center justify-between">
        <div className="text-[16px] font-semibold text-color-text">
        Add Departments
        </div>
        <div className="flex gap-4">
          <button className={styles.formBtnSubmit}>Submit</button>
          <button className={styles.formBtnCancel}>Cancel</button>
        </div>
      </div>
      <div className="mt-5">
        <form
          onSubmit={handleSubmit(CreateCompany)}
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
                placeholder="Department Name"
              />
              <input
                {...register("email", { required: "Email is required", pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'Invalid email address' } })}
                className={styles.formInput}
                type="email"
                name="email"
                id="email"
                placeholder="Department Email"
              />
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
              {...register("responsiblePerson", { required: "Responsible person is required" })}
                id="responsiblePerson"
                name="responsiblePerson"
                className={styles.formInput}
                type="text"
                placeholder="Responsible person"
              />
            </div>
          </div>
          <div>
            <textarea
              {...register("description", { required: "Description is required" })}
              id="description"
              name="description"
              type="text"
              placeholder="Description"
              className={styles.formTextArea}
            ></textarea>
          </div>
          <div className="bg-[#eeeeee] h-[120px] flex justify-center items-center">
            <div
              onClick={handleButtonClick}
              className="flex flex-col gap-3 justify-center items-center cursor-pointer"
            >
              <AddAPhotoIcon
                className="text-[#777777]"
                sx={{ fontSize: "40px" }}
              />
              <p className="text-[#545454] font-bold text-[20px]">
                Click to upload
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddTableDepartments