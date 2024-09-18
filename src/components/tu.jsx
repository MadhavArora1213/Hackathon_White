import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function ApplicationForm() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
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
            <form onSubmit={handleSubmit(onSubmit)} className="w-[90%] md:w-[75vw] bg-[#111] p-6 py-10 neon-border rounded-lg flex flex-col gap-6">
                <h2 className="text-center text-2xl font-bold text-white mb-6">Application Form</h2>
                
                {currentSection === 1 && (
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">Personal Info</h3>

                        <div className="flex flex-col gap-4">
                            {/* Student Name */}
                            <h4 className="text-xl font-bold text-white mb-4">Student's</h4>
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="flex flex-col w-full">
                                    <label className="text-white">First Name</label>
                                    <input type="text" {...register('firstName', { required: "First name is required" })} className="w-full p-2 rounded-md bg-[#222] text-white" />
                                    {errors.firstName && <span className="text-red-500 text-sm">{errors.firstName.message}</span>}
                                </div>
                                <div className="flex flex-col w-full">
                                    <label className="text-white">Middle Name</label>
                                    <input type="text" {...register('middleName')} className="w-full p-2 rounded-md bg-[#222] text-white" />
                                </div>
                                <div className="flex flex-col w-full">
                                    <label className="text-white">Last Name</label>
                                    <input type="text" {...register('lastName', { required: "Last name is required" })} className="w-full p-2 rounded-md bg-[#222] text-white" />
                                    {errors.lastName && <span className="text-red-500 text-sm">{errors.lastName.message}</span>}
                                </div>
                            </div>

                            {/* DOB, Mobile, Email */}
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="flex flex-col w-full">
                                    <label className="text-white">Date of Birth</label>
                                    <input type="date" {...register('dob', { required: "Date of birth is required" })} className="w-full p-2 rounded-md bg-[#222] text-white" />
                                    {errors.dob && <span className="text-red-500 text-sm">{errors.dob.message}</span>}
                                </div>
                                <div className="flex flex-col w-full">
                                    <label className="text-white">Mobile Number</label>
                                    <input type="tel" {...register('mobile', { required: "Mobile number is required", pattern: { value: /^[0-9]{10}$/, message: "Invalid mobile number" } })} className="w-full p-2 rounded-md bg-[#222] text-white" />
                                    {errors.mobile && <span className="text-red-500 text-sm">{errors.mobile.message}</span>}
                                </div>
                                <div className="flex flex-col w-full">
                                    <label className="text-white">Email</label>
                                    <input type="email" {...register('email', { required: "Email is required" })} className="w-full p-2 rounded-md bg-[#222] text-white" />
                                    {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                                </div>
                            </div>

                            {/* Category, Gender, Address */}
                            <div className="flex flex-col md:flex-row gap-4">
                                {/* Gender (Radio Buttons) */}
                            <div className="flex flex-col w-full">
                                <label className="text-white">Gender</label>
                                <div className="flex gap-4">
                                    <div>
                                        <input type="radio" {...register('gender', { required: "Gender is required" })} value="male" />
                                        <label className="text-white ml-2">Male</label>
                                    </div>
                                    <div>
                                        <input type="radio" {...register('gender', { required: "Gender is required" })} value="female" />
                                        <label className="text-white ml-2">Female</label>
                                    </div>
                                    <div>
                                        <input type="radio" {...register('gender', { required: "Gender is required" })} value="others" />
                                        <label className="text-white ml-2">Others</label>
                                    </div>
                                </div>
                                {errors.gender && <span className="text-red-500 text-sm">{errors.gender.message}</span>}
                            </div>

                            {/*category (Radio button) */}
                            <div className="flex flex-col w-full">
                                <label className="text-white">Category</label>
                                <div className="flex gap-4">
                                <div>
                                    <input type="radio" {...register('category',{required: "Category is required"})}value="ST" />
                                    <label className="text-white ml-2">ST</label>
                                </div>
                                <div>
                                    <input type="radio" {...register('category',{required: "Category is required"})}value="SC" />
                                    <label className="text-white ml-2">SC</label>
                                </div>
                                <div>
                                    <input type="radio" {...register('category',{required: "Category is required"})}value="OBC" />
                                    <label className="text-white ml-2">OBC</label>
                                </div>
                                <div>
                                    <input type="radio" {...register('category',{required: "Category is required"})}value="GENERAL" />
                                    <label className="text-white ml-2">GENERAL</label>
                                </div>
                                </div>
                                {errors.category && <span className="text-red-500 text-sm">{errors.category.message}</span>}
                            </div>
                            <div className="flex flex-col w-full">
                                <label className="text-white">Permanent Address</label>
                                <textarea {...register('address', { required: "Address is required" })} className="w-full p-2 rounded-md bg-[#222] text-white"></textarea>
                                {errors.address && <span className="text-red-500 text-sm">{errors.address.message}</span>}
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                        <h4 className="text-xl font-bold text-white mb-4">Father's</h4>
                          <div>
                            {/* Father's Name */}
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="flex flex-col w-full">
                                    <label className="text-white">First Name</label>
                                    <input type="text" {...register('firstName', { required: "First name is required" })} className="w-full p-2 rounded-md bg-[#222] text-white" />
                                    {errors.firstName && <span className="text-red-500 text-sm">{errors.firstName.message}</span>}
                                </div>
                                <div className="flex flex-col w-full">
                                    <label className="text-white">Middle Name</label>
                                    <input type="text" {...register('middleName')} className="w-full p-2 rounded-md bg-[#222] text-white" />
                                </div>
                                <div className="flex flex-col w-full">
                                    <label className="text-white">Last Name</label>
                                    <input type="text" {...register('lastName', { required: "Last name is required" })} className="w-full p-2 rounded-md bg-[#222] text-white" />
                                    {errors.lastName && <span className="text-red-500 text-sm">{errors.lastName.message}</span>}
                                </div>
                            </div>

                            {/* Mobile, Email */}
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="flex flex-col w-full">
                                    <label className="text-white">Mobile Number</label>
                                    <input type="tel" {...register('mobile', { required: "Mobile number is required", pattern: { value: /^[0-9]{10}$/, message: "Invalid mobile number" } })} className="w-full p-2 rounded-md bg-[#222] text-white" />
                                    {errors.mobile && <span className="text-red-500 text-sm">{errors.mobile.message}</span>}
                                </div>
                                <div className="flex flex-col w-full">
                                    <label className="text-white">Email</label>
                                    <input type="email" {...register('email', { required: "Email is required" })} className="w-full p-2 rounded-md bg-[#222] text-white" />
                                    {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                                </div>
                                <div className="flex flex-col w-full">
                                <label className="text-white">Occupation</label>
                                    <select {...register('Occupation', { required: "Occupation is required" })} className="w-full p-2 rounded-md bg-[#222] text-white">
                                        <option value="">-- Select an Occupation --</option>
                                        <option value="Government Employee">Government Employee</option>
                                        <option value="Private Sector Employee">Private Sector Employee</option>
                                        <option value="Self-Employed">Self-Employed</option>
                                        <option value="Student">Student</option>
                                        <option value="Farmer">Farmer</option>
                                        <option value="Retired">Retired</option>
                                        <option value="Unemployed">Unemployed</option>
                                        <option value="Other">Other</option>
                                    </select>
                                    {errors.Occupation && <span className="text-red-500 text-sm">{errors.Occupation.message}</span>}
                                </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h4 className="text-xl font-bold text-white mb-4">Mother's</h4>
                          <div>
                            {/* Mother's Name */}
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="flex flex-col w-full">
                                    <label className="text-white">First Name</label>
                                    <input type="text" {...register('firstName', { required: "First name is required" })} className="w-full p-2 rounded-md bg-[#222] text-white" />
                                    {errors.firstName && <span className="text-red-500 text-sm">{errors.firstName.message}</span>}
                                </div>
                                <div className="flex flex-col w-full">
                                    <label className="text-white">Middle Name</label>
                                    <input type="text" {...register('middleName')} className="w-full p-2 rounded-md bg-[#222] text-white" />
                                </div>
                                <div className="flex flex-col w-full">
                                    <label className="text-white">Last Name</label>
                                    <input type="text" {...register('lastName', { required: "Last name is required" })} className="w-full p-2 rounded-md bg-[#222] text-white" />
                                    {errors.lastName && <span className="text-red-500 text-sm">{errors.lastName.message}</span>}
                                </div>
                            </div>

                            {/* Mobile, Email */}
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="flex flex-col w-full">
                                    <label className="text-white">Mobile Number</label>
                                    <input type="tel" {...register('mobile', { required: "Mobile number is required", pattern: { value: /^[0-9]{10}$/, message: "Invalid mobile number" } })} className="w-full p-2 rounded-md bg-[#222] text-white" />
                                    {errors.mobile && <span className="text-red-500 text-sm">{errors.mobile.message}</span>}
                                </div>
                                <div className="flex flex-col w-full">
                                    <label className="text-white">Email</label>
                                    <input type="email" {...register('email', { required: "Email is required" })} className="w-full p-2 rounded-md bg-[#222] text-white" />
                                    {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                                </div>
                                <div className="flex flex-col w-full">
                                    <label className="text-white">Occupation</label>
                                    <select {...register('Occupation', { required: "Occupation is required" })} className="w-full p-2 rounded-md bg-[#222] text-white">
                                        <option value="">-- Select an Occupation --</option>
                                        <option value="Government Employee">Government Employee</option>
                                        <option value="Private Sector Employee">Private Sector Employee</option>
                                        <option value="Self-Employed">Self-Employed</option>
                                        <option value="Student">Student</option>
                                        <option value="Farmer">Farmer</option>
                                        <option value="Retired">Retired</option>
                                        <option value="Unemployed">Unemployed</option>
                                        <option value="Other">Other</option>
                                    </select>
                                    {errors.Occupation && <span className="text-red-500 text-sm">{errors.Occupation.message}</span>}
                                </div>
                            </div>
                          </div>
                        </div>
                    </div>
                )}

                {currentSection === 2 && (
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">Education Info</h3>

                        <div className="flex flex-col gap-4">
                            {/* 10th Class Info */}
                            <h4 className="text-xl font-bold text-white mb-4">Matriculation Detail(10th)</h4>
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="flex flex-col w-full">
                                <label className="text-white">Roll Number</label>
                                <input type="text" {...register('rollNo10', { required: "Roll number is required" })} className="w-full p-2 rounded-md bg-[#222] text-white" />
                                </div>
                                <div className="flex flex-col w-full">
                                <label className="text-white">Percentage</label>
                                <input type="text" {...register('percentage10', { required: "Percentage is required" })} className="w-full p-2 rounded-md bg-[#222] text-white" />
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="flex flex-col w-full">
                                <label className="text-white">Education Board</label>
                                <input type="text" {...register('board10', { required: "Education board is required" })} className="w-full p-2 rounded-md bg-[#222] text-white" />
                                </div>
                                <div className="flex flex-col w-full">
                                <label className="text-white">School Name</label>
                                <input type="text" {...register('school10', { required: "School name is required" })} className="w-full p-2 rounded-md bg-[#222] text-white" />
                                </div>
                                <div className="flex flex-col w-full">
                                <label className="text-white">Passing Year</label>
                                <input type="text" {...register('passingYear10', { required: "Passing year is required" })} className="w-full p-2 rounded-md bg-[#222] text-white" />
                                </div>
                            </div>

                            {/* 12th Class Info */}
                            <h4 className="text-xl font-bold text-white mb-4">Post-Matriculation Details(12th)</h4>
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="flex flex-col w-full">
                                <label className="text-white">Roll Number</label>
                                <input type="text" {...register('rollNo12', { required: "Roll number is required" })} className="w-full p-2 rounded-md bg-[#222] text-white" />
                                </div>
                                <div className="flex flex-col w-full">
                                <label className="text-white">Percentage</label>
                                <input type="text" {...register('percentage12', { required: "Percentage is required" })} className="w-full p-2 rounded-md bg-[#222] text-white" />
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="flex flex-col w-full">
                                <label className="text-white">Education Board</label>
                                <input type="text" {...register('board12', { required: "Education board is required" })} className="w-full p-2 rounded-md bg-[#222] text-white" />
                                </div>
                                <div className="flex flex-col w-full">
                                <label className="text-white">School Name</label>
                                <input type="text" {...register('school12', { required: "School name is required" })} className="w-full p-2 rounded-md bg-[#222] text-white" />
                                </div>
                                <div className="flex flex-col w-full">
                                <label className="text-white">Passing Year</label>
                                <input type="text" {...register('passingYear12', { required: "Passing year is required" })} className="w-full p-2 rounded-md bg-[#222] text-white" />
                                </div>
                                <div className="flex flex-col w-full">
                                <label className="text-white">Field of Study in 12th</label>
                                <input type="text" {...register('field12', { required: "Field of study is required" })} className="w-full p-2 rounded-md bg-[#222] text-white" />
                                </div>
                            </div>

                            {/* Diploma Info (if applicable) */}
                            <h4 className="text-xl font-bold text-white mb-4">Diploma Details</h4>
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="flex flex-col w-full">
                                <label className="text-white">Diploma in Field</label>
                                <input type="text" {...register('diplomaField')} className="w-full p-2 rounded-md bg-[#222] text-white" />
                                </div>
                                <div className="flex flex-col w-full">
                                <label className="text-white">Institution Name</label>
                                <input type="text" {...register('diplomaInstitution')} className="w-full p-2 rounded-md bg-[#222] text-white" />
                                </div>
                                <div className="flex flex-col w-full">
                                <label className="text-white">Marks</label>
                                <input type="text" {...register('diplomaMarks')} className="w-full p-2 rounded-md bg-[#222] text-white" />
                                </div>
                                <div className="flex flex-col w-full">
                                <label className="text-white">Roll Number</label>
                                <input type="text" {...register('diplomaRollNo')} className="w-full p-2 rounded-md bg-[#222] text-white" />
                                </div>
                            </div>

                            {/* Document Upload Section */}
                            <h4 className="text-xl font-bold text-white mb-4">Document Upload</h4>
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-col w-full">
                                <label className="text-white">10th Marksheet Upload</label>
                                <input type="file" {...register('marksheet10', { required: "10th Marksheet is required" })} className="w-full p-2 rounded-md bg-[#222] text-white" />
                                </div>
                                <div className="flex flex-col w-full">
                                <label className="text-white">12th Marksheet Upload</label>
                                <input type="file" {...register('marksheet12', { required: "12th Marksheet is required" })} className="w-full p-2 rounded-md bg-[#222] text-white" />
                                </div>
                                <div className="flex flex-col w-full">
                                <label className="text-white">Diploma Marksheet Upload (if applicable)</label>
                                <input type="file" {...register('marksheetDiploma')} className="w-full p-2 rounded-md bg-[#222] text-white" />
                                </div>
                            </div>
                            </div>

                    </div>
                )}

                {currentSection === 3 && (
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">Document Uploads</h3>
                        {/* Document upload sections */}
                        <div className="flex flex-col w-full">
                        <label className="text-white">Aadhar Card Number</label>
                        <input
                        type="text"
                        {...register("aadharNumber", { required: "Aadhar card number is required" })}
                        className="w-full p-2 rounded-md bg-[#222] text-white"
                        />
                        {errors.aadharNumber && <span className="text-red-500 text-sm">{errors.aadharNumber.message}</span>}
                    </div>
                    <div className="flex flex-col w-full">
                        <label className="text-white flex items-center gap-2">
                        <FaUpload className="text-white" /> Aadhar Upload
                        </label>
                        <input
                        type="file"
                        {...register("aadharUpload", { required: "Aadhar upload is required" })}
                        className="w-full p-2 rounded-md bg-[#222] text-white border-none outline-none"
                        />
                        {errors.aadharUpload && <span className="text-red-500 text-sm">{errors.aadharUpload.message}</span>}
                    </div>
                    </div>
                )}

                <div className="flex justify-between mt-6">
                    <button type="button" onClick={previousSection} className="bg-gray-600 text-white p-3 rounded-md hover:bg-gray-800" disabled={currentSection === 1}>Previous</button>
                    {currentSection < 3 ? (
                        <button type="button" onClick={nextSection} className="bg-blue-600 text-white p-3 rounded-md hover:bg-blue-800">Next</button>
                    ) : (
                        <button type="submit" className="bg-green-600 text-white p-3 rounded-md hover:bg-green-800">Submit</button>
                    )}
                </div>
            </form>
        </div>
    );
}

export default ApplicationForm;
