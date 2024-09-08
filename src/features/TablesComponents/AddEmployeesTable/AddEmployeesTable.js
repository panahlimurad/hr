import React, { useRef, useState } from "react";
import styles from "./style.module.css";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { useForm } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import BasicDatePicker from "../../shared/SmallComponents/DataPicker/DataPicker";
import Tags from "../../shared/SmallComponents/AutoComplete/AutoComplete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const AddEmployeesTable = () => {
  const fileInputRef = useRef();
  const [preview, setPreview] = useState(null);
  const [openEducation, setOpenEducation] = useState(false);
  const [openExperience , setOpenExperience] = useState(false)

  const handleOpenExperience = () => {
    setOpenExperience(!openExperience);
  };

  const handleOpenEducation = () => {
    setOpenEducation(!openEducation);
  };

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
          Add Employees
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
              <input
                {...register("address", { required: "Address is required" })}
                className={styles.formInput}
                id="address"
                name="address"
                type="text"
                placeholder="Address"
              />
              <BasicDatePicker width="100%" label="Date of Joining" />
              <div>
                <select
                  id="underline_select"
                  className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                >
                  <option selected>Choose a Position</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
              <div className="bg-[#f0f2f8] rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <div className="text-[16px] font-semibold text-color-text">
                    Education
                  </div>
                  {openEducation ? (
                    <RemoveIcon
                      sx={{ cursor: "pointer" }}
                      onClick={handleOpenEducation}
                    />
                  ) : (
                    <AddIcon
                      sx={{ cursor: "pointer" }}
                      onClick={handleOpenEducation}
                    />
                  )}
                </div>

                  <div
                    className={`flex flex-col gap-2 ${styles.transitionContainer} ${
                      openEducation ? `${styles.open}` : ""
                    }`}
                  >
                    <div className="flex justify-between">
                      <BasicDatePicker
                        width={"20%"}
                        label={"Date of joining"}
                      />
                      <BasicDatePicker width={"20%"} label={"Date of end"} />
                    </div>

                    <input
                      {...register("education", {
                        required: "Address is required",
                      })}
                      className={styles.formInput}
                      id="education"
                      name="education"
                      type="text"
                      placeholder="Education"
                    />
                  </div>
              </div>
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
              <BasicDatePicker width={"100%"} label={"Date of Birth"} />
              <Tags />
              <input
                {...register("salary", { required: "Salary is required" })}
                id="Salary"
                name="Salary"
                className={styles.formInput}
                type="text"
                placeholder="Salary"
              />
              <div className="flex flex-col gap-2 mt-6">
                <div className="flex justify-between items-center">
                  <div>Gender</div>
                  <div className="flex justify-center items-center">
                    <input
                      id="gender-male"
                      type="radio"
                      value="male"
                      name="gender-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="gender-male"
                      className="ms-2 mr-6 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Male
                    </label>
                    <input
                      id="gender-female"
                      type="radio"
                      value="female"
                      name="gender-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="gender-female"
                      className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Female
                    </label>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>Marital Status</div>
                  <div className="flex justify-center items-center">
                    <input
                      id="marital-married"
                      type="radio"
                      value="married"
                      name="marital-status-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="marital-married"
                      className="ms-2 mr-6 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Married
                    </label>
                    <input
                      id="marital-unmarried"
                      type="radio"
                      value="unmarried"
                      name="marital-status-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="marital-unmarried"
                      className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Unmarried
                    </label>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>Military Service</div>
                  <div className="flex justify-center items-center">
                    <input
                      id="military-service-true"
                      type="radio"
                      value="military-service-true"
                      name="military-service-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="military-service-true"
                      className="ms-2 mr-6 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Yes
                    </label>
                    <input
                      id="military-service-false"
                      type="radio"
                      value="unmarmilitary-service-false"
                      name="military-service-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="military-service-false"
                      className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      No
                    </label>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>Work Type</div>
                  <div className="flex justify-center items-center">
                    <input
                      id="work-type-hybrid"
                      type="radio"
                      value="hybrid"
                      name="work-type-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="work-type-hybrid"
                      className="ms-2 mr-6 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Hybrid
                    </label>

                    <input
                      id="work-type-fulltime"
                      type="radio"
                      value="fulltime"
                      name="work-type-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="work-type-fulltime"
                      className="ms-2 mr-6 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Fulltime
                    </label>

                    <input
                      id="work-type-remote"
                      type="radio"
                      value="remote"
                      name="work-type-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="work-type-remote"
                      className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Remote
                    </label>
                  </div>
                </div>
              </div>
              <div className="bg-[#f0f2f8] rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <div className="text-[16px] font-semibold text-color-text">
                    Experience
                  </div>
                  {openExperience ? (
                    <RemoveIcon
                      sx={{ cursor: "pointer" }}
                      onClick={handleOpenExperience}
                    />
                  ) : (
                    <AddIcon
                      sx={{ cursor: "pointer" }}
                      onClick={handleOpenExperience}
                    />
                  )}
                </div>

                  <div
                    className={`flex flex-col gap-2 ${styles.transitionContainer} ${
                      openExperience ? `${styles.open}` : ""
                    }`}
                  >
                    <div className="flex justify-between">
                      <BasicDatePicker
                        width={"20%"}
                        label={"Date of joining"}
                      />
                      <BasicDatePicker width={"20%"} label={"Date of end"} />
                    </div>

                    <input
                      {...register("experience", {
                        required: "Address is required",
                      })}
                      className={styles.formInput}
                      id="experience"
                      name="experience"
                      type="text"
                      placeholder="Experience"
                    />
                  </div>
              </div>
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
  );
};

export default AddEmployeesTable;
