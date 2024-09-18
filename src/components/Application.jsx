import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  FaUser,
  FaBirthdayCake,
  FaEnvelope,
  FaPhone,
  FaLock,
  FaIdCard,
  FaUpload,
  FaSchool,
  FaPiggyBank,
} from "react-icons/fa";

function ApplicationForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [currentSection, setCurrentSection] = useState(1);

  const onSubmit = (data) => {
    console.log(data);
  };

  const nextSection = () => {
    if (currentSection < 3) setCurrentSection(currentSection + 1);
  };

  const previousSection = () => {
    if (currentSection > 1) setCurrentSection(currentSection - 1);
  };

  return (
    <div className="w-screen h-auto flex items-center justify-center mt-3">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[90%] md:w-[75vw] bg-[#ff] p-6 py-10 neon-border rounded-lg flex flex-col gap-6"
      >
        <h2 className="text-center text-2xl font-bold  mb-6">
          Application Form
        </h2>

        {currentSection === 1 && (
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <FaUser className="" />
              Personal Info
            </h3>

            <div className="flex flex-col gap-4">
              {/* Student Name */}
              <h4 className="text-xl font-bold  mb-4">Student's</h4>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex flex-col w-full">
                  <label className="font-bold">First Name</label>
                  <input
                    type="text"
                    {...register("firstName", {
                      required: "First name is required",
                    })}
                    className="w-full p-2 rounded-md bg-[#fff] border-2 border-black shadow-2xl"
                  />
                  {errors.firstName && (
                    <span className="text-red-500 text-sm">
                      {errors.firstName.message}
                    </span>
                  )}
                </div>
                <div className="flex flex-col w-full">
                  <label className="font-bold">Middle Name</label>
                  <input
                    type="text"
                    {...register("middleName")}
                    className="w-full p-2 rounded-md bg-[#fff] border-2 border-black shadow-2xl"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label className="font-bold">Last Name</label>
                  <input
                    type="text"
                    {...register("lastName", {
                      required: "Last name is required",
                    })}
                    className="w-full p-2 rounded-md bg-[#fff] border-2 border-black shadow-2xl"
                  />
                  {errors.lastName && (
                    <span className="text-red-500 text-sm">
                      {errors.lastName.message}
                    </span>
                  )}
                </div>
              </div>

              {/* DOB, Mobile, Email */}
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex flex-col w-full">
                  <label className=" flex items-center gap-2 font-bold">
                    <FaBirthdayCake className=" " />
                    Date of Birth<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    {...register("dob", {
                      required: "Date of birth is required",
                    })}
                    className="w-full p-2 rounded-md bg-[#fff] border-2 border-black  shadow-2xl"
                  />
                  {errors.dob && (
                    <span className="text-red-500 text-sm">
                      {errors.dob.message}
                    </span>
                  )}
                </div>
                <div className="flex flex-col w-full">
                  <label className="font-bold">Mobile Number</label>
                  <input
                    type="tel"
                    {...register("mobile", {
                      required: "Mobile number is required",
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: "Invalid mobile number",
                      },
                    })}
                    className="w-full p-2 rounded-md bg-[#fff] border-2 border-black  shadow-2xl"
                  />
                  {errors.mobile && (
                    <span className="text-red-500 text-sm">
                      {errors.mobile.message}
                    </span>
                  )}
                </div>
                <div className="flex flex-col w-full">
                  <label className="font-bold">Email</label>
                  <input
                    type="email"
                    {...register("email", { required: "Email is required" })}
                    className="w-full p-2 rounded-md bg-[#fff] border-2 border-black shadow-2xl"
                  />
                  {errors.email && (
                    <span className="text-red-500 text-sm">
                      {errors.email.message}
                    </span>
                  )}
                </div>
              </div>

              {/* Category, Gender, Address */}
              <div className="flex flex-col md:flex-row gap-4">
                {/* Gender (Radio Buttons) */}
                <div className="flex flex-col w-full">
                  <label className="font-bold">Gender</label>
                  <div className="flex gap-4">
                    <div>
                      <input
                        type="radio"
                        {...register("gender", {
                          required: "Gender is required",
                        })}
                        value="male"
                      />
                      <label className=" ml-2">Male</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        {...register("gender", {
                          required: "Gender is required",
                        })}
                        value="female"
                      />
                      <label className=" ml-2">Female</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        {...register("gender", {
                          required: "Gender is required",
                        })}
                        value="others"
                      />
                      <label className=" ml-2">Others</label>
                    </div>
                  </div>
                  {errors.gender && (
                    <span className="text-red-500 text-sm">
                      {errors.gender.message}
                    </span>
                  )}
                </div>

                {/*category (Radio button) */}
                <div className="flex flex-col w-full">
                  <label className="font-bold">Category</label>
                  <select
                    className="border-2 border-black shadow-2xl  rounded-md p-2 mt-2"
                    {...register("category", {
                      required: "Category is required",
                    })}
                  >
                    <option value="">Select Category</option>
                    <option value="ST">ST</option>
                    <option value="SC">SC</option>
                    <option value="OBC">OBC</option>
                    <option value="GENERAL">GENERAL</option>
                  </select>
                  {errors.category && (
                    <span className="text-red-500 text-sm">
                      {errors.category.message}
                    </span>
                  )}
                </div>

                <div className="flex flex-col w-full">
                  <label className="font-bold">Permanent Address</label>
                  <textarea
                    {...register("address", {
                      required: "Address is required",
                    })}
                    className="w-full p-2 rounded-md bg-[#fff] border-2 border-black shadow-2xl"
                  ></textarea>
                  {errors.address && (
                    <span className="text-red-500 text-sm">
                      {errors.address.message}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-xl font-bold  mb-4">Father's</h4>
              <div>
                {/* Father's Name */}
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex flex-col w-full">
                    <label className="font-bold">First Name</label>
                    <input
                      type="text"
                      {...register("firstName", {
                        required: "First name is required",
                      })}
                      className="w-full p-2 rounded-md bg-[#fff] border-2 border-black  shadow-2xl"
                    />
                    {errors.firstName && (
                      <span className="text-red-500 text-sm">
                        {errors.firstName.message}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col w-full">
                    <label className="font-bold">Middle Name</label>
                    <input
                      type="text"
                      {...register("middleName")}
                      className="w-full p-2 rounded-md bg-[#fff] border-2 border-black  shadow-2xl"
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <label className="font-bold">Last Name</label>
                    <input
                      type="text"
                      {...register("lastName", {
                        required: "Last name is required",
                      })}
                      className="w-full p-2 rounded-md bg-[#fff] border-2 border-black  shadow-2xl"
                    />
                    {errors.lastName && (
                      <span className="text-red-500 text-sm">
                        {errors.lastName.message}
                      </span>
                    )}
                  </div>
                </div>

                {/* Mobile, Email */}
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex flex-col w-full">
                    <label className="font-bold">Mobile Number</label>
                    <input
                      type="tel"
                      {...register("mobile", {
                        required: "Mobile number is required",
                        pattern: {
                          value: /^[0-9]{10}$/,
                          message: "Invalid mobile number",
                        },
                      })}
                      className="w-full p-2 rounded-md bg-[#fff] border-2 border-black  shadow-2xl "
                    />
                    {errors.mobile && (
                      <span className="text-red-500 text-sm">
                        {errors.mobile.message}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col w-full">
                    <label className="font-bold">Email</label>
                    <input
                      type="email"
                      {...register("email", { required: "Email is required" })}
                      className="w-full p-2 rounded-md bg-[#fff] border-2 border-black shadow-2xl"
                    />
                    {errors.email && (
                      <span className="text-red-500 text-sm">
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col w-full">
                    <label className="font-bold">Occupation</label>
                    <select
                      {...register("Occupation", {
                        required: "Occupation is required",
                      })}
                      className="w-full p-2 rounded-md bg-[#fff] border-2 border-black shadow-2xl"
                    >
                      <option value="font-bold">-- Select an Occupation --</option>
                      <option value="Government Employee">
                        Government Employee
                      </option>
                      <option value="Private Sector Employee">
                        Private Sector Employee
                      </option>
                      <option value="Self-Employed">Self-Employed</option>
                      <option value="Student">Student</option>
                      <option value="Farmer">Farmer</option>
                      <option value="Retired">Retired</option>
                      <option value="Unemployed">Unemployed</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.Occupation && (
                      <span className="text-red-500 text-sm">
                        {errors.Occupation.message}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-xl font-bold  mb-4">Mother's</h4>
              <div>
                {/* Mother's Name */}
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex flex-col w-full">
                    <label className="font-bold">First Name</label>
                    <input
                      type="text"
                      {...register("firstName", {
                        required: "First name is required",
                      })}
                      className="w-full p-2 rounded-md bg-[#fff] border-2 border-black shadow-2xl"
                    />
                    {errors.firstName && (
                      <span className="text-red-500 text-sm">
                        {errors.firstName.message}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col w-full">
                    <label className="font-bold">Middle Name</label>
                    <input
                      type="text"
                      {...register("middleName")}
                      className="w-full p-2 rounded-md bg-[#fff] border-2 border-black  shadow-2xl"
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <label className="font-bold">Last Name</label>
                    <input
                      type="text"
                      {...register("lastName", {
                        required: "Last name is required",
                      })}
                      className="w-full p-2 rounded-md bg-[#fff] border-2 border-black  shadow-2xl"
                    />
                    {errors.lastName && (
                      <span className="text-red-500 text-sm">
                        {errors.lastName.message}
                      </span>
                    )}
                  </div>
                </div>

                {/* Mobile, Email */}
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex flex-col w-full">
                    <label className="font-bold">Mobile Number</label>
                    <input
                      type="tel"
                      {...register("mobile", {
                        required: "Mobile number is required",
                        pattern: {
                          value: /^[0-9]{10}$/,
                          message: "Invalid mobile number",
                        },
                      })}
                      className="w-full p-2 rounded-md bg-[#fff] border-2 border-black  shadow-2xl "
                    />
                    {errors.mobile && (
                      <span className="text-red-500 text-sm">
                        {errors.mobile.message}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col w-full">
                    <label className="font-bold">Email</label>
                    <input
                      type="email"
                      {...register("email", { required: "Email is required" })}
                      className="w-full p-2 rounded-md bg-[#fff] border-2 border-black shadow-2xl"
                    />
                    {errors.email && (
                      <span className="text-red-500 text-sm">
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col w-full">
                    <label className="font-bold">Occupation</label>
                    <select
                      {...register("Occupation", {
                        required: "Occupation is required",
                      })}
                      className="w-full p-2 rounded-md bg-[#fff] border-2 border-black  shadow-2xl "
                    >
                      <option value="font-bold">-- Select an Occupation --</option>
                      <option value="Government Employee">
                        Government Employee
                      </option>
                      <option value="Private Sector Employee">
                        Private Sector Employee
                      </option>
                      <option value="Self-Employed">Self-Employed</option>
                      <option value="Student">Student</option>
                      <option value="Farmer">Farmer</option>
                      <option value="Retired">Retired</option>
                      <option value="Unemployed">Unemployed</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.Occupation && (
                      <span className="text-red-500 text-sm">
                        {errors.Occupation.message}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {currentSection === 2 && (
          <div>
            <h3 className="text-xl font-bold  mb-4">Education Info</h3>

            <div className="flex flex-col gap-4">
              {/* 10th Class Info */}
              <h4 className="text-xl font-bold  mb-4 flex items-center gap-2">
                <FaSchool className="font-bold" />
                Matriculation Detail(10th)
              </h4>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex flex-col w-full">
                  <label className="font-bold">Roll Number</label>
                  <input
                    type="text"
                    {...register("rollNo10", {
                      required: "Roll number is required",
                    })}
                    className="w-full p-2 rounded-md bg-[#fff] border-2 border-black  shadow-2xl"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label className="font-bold">Percentage</label>
                  <input
                    type="text"
                    {...register("percentage10", {
                      required: "Percentage is required",
                    })}
                    className="w-full p-2 rounded-md bg-[#fff] border-2 border-black  shadow-2xl"
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex flex-col w-full">
                  <label className="font-bold">Education Board</label>
                  <input
                    type="text"
                    {...register("board10", {
                      required: "Education board is required",
                    })}
                    className="w-full p-2 rounded-md bg-[#fff] border-2 border-black  shadow-2xl"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label className="font-bold">School Name</label>
                  <input
                    type="text"
                    {...register("school10", {
                      required: "School name is required",
                    })}
                    className="w-full p-2 rounded-md bg-[#fff] border-2 border-black  shadow-2xl "
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label className="font-bold">Passing Year</label>
                  <input
                    type="text"
                    {...register("passingYear10", {
                      required: "Passing year is required",
                    })}
                    className="w-full p-2 rounded-md bg-[#fff] border-2 border-black  shadow-2xl"
                  />
                </div>
              </div>

              {/* 12th Class Info */}
              <h4 className="text-xl font-bold  mb-4 flex items-center gap-2">
                <FaSchool className="font-bold" />
                Post-Matriculation Details(12th)
              </h4>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex flex-col w-full">
                  <label className="font-bold">Roll Number</label>
                  <input
                    type="text"
                    {...register("rollNo12", {
                      required: "Roll number is required",
                    })}
                    className="w-full p-2 rounded-md bg-[#fff] border-2 border-black  shadow-2xl"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label className="font-bold">Percentage</label>
                  <input
                    type="text"
                    {...register("percentage12", {
                      required: "Percentage is required",
                    })}
                    className="w-full p-2 rounded-md bg-[#fff] border-2 border-black  shadow-2xl"
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex flex-col w-full">
                  <label className="font-bold">Education Board</label>
                  <input
                    type="text"
                    {...register("board12", {
                      required: "Education board is required",
                    })}
                    className="w-full p-2 rounded-md bg-[#fff] border-2 border-black  shadow-2xl "
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label className="font-bold">School Name</label>
                  <input
                    type="text"
                    {...register("school12", {
                      required: "School name is required",
                    })}
                    className="w-full p-2 rounded-md bg-[#fff] border-2 border-black  shadow-2xl "
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label className="font-bold">Passing Year</label>
                  <input
                    type="text"
                    {...register("passingYear12", {
                      required: "Passing year is required",
                    })}
                    className="w-full p-2 rounded-md bg-[#fff] border-2 border-black  shadow-2xl"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label className="font-bold">Field of Study in 12th</label>
                  <input
                    type="text"
                    {...register("field12", {
                      required: "Field of study is required",
                    })}
                    className="w-full p-2 rounded-md bg-[#fff] border-2 border-black  shadow-2xl "
                  />
                </div>
              </div>

              {/* Diploma Info (if applicable) */}
              <h4 className="text-xl font-bold  mb-4 flex items-center gap-2">
                <FaSchool className="" />
                Diploma Details
              </h4>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex flex-col w-full">
                  <label className="font-bold">Diploma in Field</label>
                  <input
                    type="text"
                    {...register("diplomaField")}
                    className="w-full p-2 rounded-md bg-[#fff] border-2 border-black  shadow-2xl"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label className="font-bold">Institution Name</label>
                  <input
                    type="text"
                    {...register("diplomaInstitution")}
                    className="w-full p-2 rounded-md bg-[#fff] border-2 border-black  shadow-2xl"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label className="font-bold">Marks</label>
                  <input
                    type="text"
                    {...register("diplomaMarks")}
                    className="w-full p-2 rounded-md bg-[#fff] border-2 border-black shadow-2xl"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label className="font-bold">Roll Number</label>
                  <input
                    type="text"
                    {...register("diplomaRollNo")}
                    className="w-full p-2 rounded-md bg-[#fff] border-2 border-black  shadow-2xl"
                  />
                </div>
              </div>

              {/* Document Upload Section */}
              <h4 className="text-xl font-bold  mb-4">Document Upload</h4>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col w-full">
                  <label className=" flex items-center gap-2 font-bold">
                    <FaUpload className="font-bold" /> 10th Marksheet Upload{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="file"
                    {...register("marksheet10", { required: "" })}
                    className="w-full p-2 rounded-md bg-[#fff] border-2 border-black  shadow-2xl"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label className=" flex items-center gap-2 font-bold">
                    <FaUpload className="font-bold" /> 12th Marksheet Upload{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="file"
                    {...register("marksheet12", { required: "" })}
                    className="w-full p-2 rounded-md bg-[#fff] border-2 border-black  shadow-2xl"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label className=" flex items-center gap-2 font-bold">
                    <FaUpload className="font-bold" /> Diploma{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="file"
                    {...register("marksheetDiploma")}
                    className="w-full p-2 rounded-md bg-[#fff] border-2 border-black  shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {currentSection === 3 && (
          <div>
            <div className="flex flex-col gap-4">
              {/* Document Uploads Section */}
              <h4 className="text-xl font-bold  mb-4">Documents Upload</h4>

              {/* Aadhar Card Info */}
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex flex-col w-full">
                  <label className="font-bold">
                    Aadhar Card Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    {...register("aadharNumber", { required: "" })}
                    className="w-full p-2 rounded-md bg-[#fff] border-2 border-black shadow-2xl"
                  />
                  {errors.aadharNumber && (
                    <span className="text-red-500 text-sm">
                      {errors.aadharNumber.message}
                    </span>
                  )}
                </div>
                <div className="flex flex-col w-full">
                  <label className=" flex items-center gap-2">
                    <FaUpload className="" /> Aadhar Upload{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="file"
                    {...register("aadharUpload", { required: "" })}
                    className="w-full p-2 rounded-md bg-[#fff]  border-2 border-black shadow-2xl"
                  />
                  {errors.aadharUpload && (
                    <span className="text-red-500 text-sm">
                      {errors.aadharUpload.message}
                    </span>
                  )}
                </div>
              </div>

              {/* Resident Certificate Info */}
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex flex-col w-full">
                  <label className="font-bold">
                    Resident Certificate Unique No.{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    {...register("residentCertNumber", { required: "" })}
                    className="w-full p-2 rounded-md bg-[#fff] border-2 border-black shadow-2xl"
                  />
                  {errors.residentCertNumber && (
                    <span className="text-red-500 text-sm">
                      {errors.residentCertNumber.message}
                    </span>
                  )}
                </div>
                <div className="flex flex-col w-full">
                  <label className=" flex items-center gap-2">
                    <FaUpload className="" /> Resident Certificate Upload{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="file"
                    {...register("residentCertUpload", { required: "" })}
                    className="w-full p-2 rounded-md bg-[#fff]  border-2 border-black shadow-2xl"
                  />
                  {errors.residentCertUpload && (
                    <span className="text-red-500 text-sm">
                      {errors.residentCertUpload.message}
                    </span>
                  )}
                </div>
              </div>

              {/* Category Certificate Info */}
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex flex-col w-full">
                  <label className="font-bold">
                    Category Certificate Unique No.{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    {...register("categoryCertNumber", { required: "" })}
                    className="w-full p-2 rounded-md bg-[#fff] border-2 border-black shadow-2xl"
                  />
                  {errors.categoryCertNumber && (
                    <span className="text-red-500 text-sm">
                      {errors.categoryCertNumber.message}
                    </span>
                  )}
                </div>
                <div className="flex flex-col w-full">
                  <label className=" flex items-center gap-2 font-bold">
                    <FaUpload className="" /> Category Certificate Upload{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="file"
                    {...register("categoryCertUpload", { required: "" })}
                    className="w-full p-2 rounded-md bg-[#fff]  border-2 border-black shadow-2xl"
                  />
                  {errors.categoryCertUpload && (
                    <span className="text-red-500 text-sm">
                      {errors.categoryCertUpload.message}
                    </span>
                  )}
                </div>
              </div>

              {/* Family Income Certificate Info */}
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex flex-col w-full">
                  <label className="font-bold">
                    Family Income Certificate Unique No.{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    {...register("incomeCertNumber", { required: "" })}
                    className="w-full p-2 rounded-md bg-[#fff] border-2 border-black shadow-2xl"
                  />
                  {errors.incomeCertNumber && (
                    <span className="text-red-500 text-sm">
                      {errors.incomeCertNumber.message}
                    </span>
                  )}
                </div>
                <div className="flex flex-col w-full">
                  <label className=" flex items-center gap-2 font-bold">
                    <FaUpload className="" /> Family Income Certificate Upload{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="file"
                    {...register("incomeCertUpload", { required: "" })}
                    className="w-full p-2 rounded-md bg-[#fff]  border-2 border-black shadow-2xl"
                  />
                  {errors.incomeCertUpload && (
                    <span className="text-red-500 text-sm">
                      {errors.incomeCertUpload.message}
                    </span>
                  )}
                </div>
              </div>

              {/* Passport Size Photo and Signature Upload */}
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex flex-col w-full">
                  <label className=" flex items-center gap-2 font-bold">
                    <FaUpload className="" /> Passport Size Photo Upload{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="file"
                    {...register("photoUpload", { required: "" })}
                    className="w-full p-2 rounded-md bg-[#fff]  border-2 border-black shadow-2xl"
                  />
                  {errors.photoUpload && (
                    <span className="text-red-500 text-sm">
                      {errors.photoUpload.message}
                    </span>
                  )}
                </div>
                <div className="flex flex-col w-full">
                  <label className=" flex items-center gap-2 font-bold">
                    <FaUpload className="" /> Signature Upload{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="file"
                    {...register("signatureUpload", { required: "" })}
                    className="w-full p-2 rounded-md bg-[#fff]  border-2 border-black shadow-2xl"
                  />
                  {errors.signatureUpload && (
                    <span className="text-red-500 text-sm">
                      {errors.signatureUpload.message}
                    </span>
                  )}
                </div>
              </div>

              {/* Bank Details Section */}
              <h4 className="text-xl font-bold  mb-4 flex items-center gap-2">
                <FaPiggyBank className="" />
                Bank Details
              </h4>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex flex-col w-full">
                  <label className="font-bold">
                    Bank Account Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    {...register("bankAccountNumber", { required: "" })}
                    className="w-full p-2 rounded-md bg-[#fff] border-2 border-black shadow-2xl"
                  />
                  {errors.bankAccountNumber && (
                    <span className="text-red-500 text-sm">
                      {errors.bankAccountNumber.message}
                    </span>
                  )}
                </div>
                <div className="flex flex-col w-full">
                  <label className="font-bold">
                    IFSC Code <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    {...register("bankIFSC", { required: "" })}
                    className="w-full p-2 rounded-md bg-[#fff] border-2 border-black shadow-2xl"
                  />
                  {errors.bankIFSC && (
                    <span className="text-red-500 text-sm">
                      {errors.bankIFSC.message}
                    </span>
                  )}
                </div>
                <div className="flex flex-col w-full">
                  <label className="font-bold">
                    Bank Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    {...register("bankName", { required: "" })}
                    className="w-full p-2 rounded-md bg-[#fff] border-2 border-black shadow-2xl"
                  />
                  {errors.bankName && (
                    <span className="text-red-500 text-sm">
                      {errors.bankName.message}
                    </span>
                  )}
                </div>
                <div className="flex flex-col w-full">
                  <label className=" flex items-center gap-2 font-bold">
                    <FaUpload className="" /> Bank Copy Detail Page Upload{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="file"
                    {...register("bankCopyUpload", { required: "" })}
                    className="w-full p-2 rounded-md bg-[#fff]  border-2 border-black shadow-2xl"
                  />
                  {errors.bankCopyUpload && (
                    <span className="text-red-500 text-sm">
                      {errors.bankCopyUpload.message}
                    </span>
                  )}
                </div>
              </div>

              {/* Declaration Section */}
              <div className="flex items-start gap-2 mt-4">
                <input
                  type="checkbox"
                  {...register("declaration", { required: "" })}
                  className="rounded-md bg-[#fff]  border-2 border-black shadow-2xl"
                />
                <label className="">
                  I hereby declare that the information provided is true and
                  correct to the best of my knowledge and belief.{" "}
                  <span className="text-red-500">*</span>
                </label>
                {errors.declaration && (
                  <span className="text-red-500 text-sm">
                    {errors.declaration.message}
                  </span>
                )}
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-between mt-6">
          <button
            type="button"
            onClick={previousSection}
            className="bg-gray-600  text-white font-bold p-3 rounded-md hover:bg-gray-800"
            disabled={currentSection === 1}
          >
            Previous
          </button>
          {currentSection < 3 ? (
            <button
              type="button"
              onClick={nextSection}
              className="bg-[#03AED2] text-white font-bold p-3 rounded-md hover:bg-[#68D2E8] "
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="bg-green-600 text-white font-bold p-3 rounded-md hover:bg-green-800"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default ApplicationForm;
