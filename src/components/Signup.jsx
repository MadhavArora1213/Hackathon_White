import React from 'react';
import { useForm } from 'react-hook-form';
import { FaUser, FaBirthdayCake, FaEnvelope, FaPhone, FaLock, FaIdCard, FaUpload } from 'react-icons/fa';

function Signup() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
 
    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className='w-screen h-auto flex items-center justify-center mt-3'>
            <form 
                onSubmit={handleSubmit(onSubmit)} 
                className="w-[90%] md:w-[75vw] bg-[#fff] p-6 py-10 neon-border rounded-lg flex flex-col gap-6 shadow-lg"
            >
                <h2 className="text-center text-2xl font-bold mb-6">New User Registration</h2>

                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex flex-col w-full">
                        <label className="  flex items-center gap-2">
                            <FaUser className="" /> Full Name
                        </label>
                        <input
                            type="text"
                            {...register('fullName', { required: "Full name is required" })}
                            className="w-full p-2 rounded-md bg-[#fff]  border-2 border-black shadow-2xl"
                        />
                        {errors.fullName && <span className="text-red-500 text-sm">{errors.fullName.message}</span>}
                    </div>

                    <div className="flex flex-col w-full">
                        <label className=" flex items-center gap-2">
                            <FaBirthdayCake className="" /> Date of Birth
                        </label>
                        <input
                            type="date"
                            {...register('dob', { required: "Date of birth is required" })}
                            className="w-full p-2 rounded-md bg-[#fff] border-2 border-black shadow-2xl"
                        />
                        {errors.dob && <span className="text-red-500 text-sm">{errors.dob.message}</span>}
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex flex-col w-full">
                        <label className=" flex items-center gap-2">
                            <FaEnvelope className="" /> Email
                        </label>
                        <input
                            type="email"
                            {...register('email', { 
                                required: "Email is required", 
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                    message: "Invalid email address"
                                }
                            })}
                            className="w-full p-2 rounded-md bg-[#fff]  border-2 border-black shadow-2xl"
                        />
                        {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                    </div>

                    <div className="flex flex-col w-full">
                        <label className=" flex items-center gap-2">
                            <FaPhone className="" /> Mobile Number
                        </label>
                        <input
                            type="tel"
                            {...register('mobile', { 
                                required: "Mobile number is required",
                                pattern: {
                                    value: /^[0-9]{10}$/,
                                    message: "Invalid mobile number"
                                }
                            })}
                            className="w-full p-2 rounded-md bg-[#fff]  border-2 border-black shadow-2xl"
                        />
                        {errors.mobile && <span className="text-red-500 text-sm">{errors.mobile.message}</span>}
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex flex-col w-full">
                        <label className="  flex items-center gap-2">
                            <FaLock className="" /> Password
                        </label>
                        <input
                            type="password"
                            {...register('password', { 
                                required: "Password is required", 
                                minLength: {
                                    value: 6,
                                    message: "Password must be at least 6 characters"
                                }
                            })}
                            className="w-full p-2 rounded-md bg-[#fff]  border-2 border-black shadow-2xl"
                        />
                        {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
                    </div>

                    <div className="flex flex-col w-full">
                        <label className="  flex items-center gap-2">
                            <FaLock className="" /> Confirm Password
                        </label>
                        <input
                            type="password"
                            {...register('confirmPassword', { 
                                required: "Confirm Password is required", 
                                validate: (value) => value === watch('password') || "Passwords do not match"
                            })}
                            className="w-full p-2 rounded-md bg-[#fff]  border-2 border-black shadow-2xl"
                        />
                        {errors.confirmPassword && <span className="text-red-500 text-sm">{errors.confirmPassword.message}</span>}
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex flex-col w-full">
                        <label className="  flex items-center gap-2">
                            <FaIdCard className="" /> Identification Number
                        </label>
                        <input
                            type="text"
                            {...register('idNumber', { required: "Identification number is required" })}
                            className="w-full p-2 rounded-md bg-[#fff]  border-2 border-black shadow-2xl"
                        />
                        {errors.idNumber && <span className="text-red-500 text-sm">{errors.idNumber.message}</span>}
                    </div>

                    <div className="flex flex-col w-full">
                        <label className="  flex items-center gap-2">
                            <FaUpload className="" /> Upload Profile Picture
                        </label>
                        <input
                            type="file"
                            {...register('profilePic', { required: "Profile picture is required" })}
                            className="w-full p-2 rounded-md bg-[#fff]  border-2 border-black shadow-2xl"
                        />
                        {errors.profilePic && <span className="text-red-500 text-sm">{errors.profilePic.message}</span>}
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex flex-col w-full">
                        <label className="  flex items-center gap-2">
                            <FaUpload className="" /> Upload ID Proof
                        </label>
                        <input
                            type="file"
                            {...register('idProof', { required: "ID proof is required" })}
                            className="w-full p-2 rounded-md bg-[#fff]  border-2 border-black shadow-2xl"
                        />
                        {errors.idProof && <span className="text-red-500 text-sm">{errors.idProof.message}</span>}
                    </div>

                    <div className="flex flex-col w-full">
                        <label className="  flex items-center gap-2">
                            <FaUpload className="" /> Upload Academic Records
                        </label>
                        <input
                            type="file"
                            {...register('academicRecords', { required: "Academic records are required" })}
                            className="w-full p-2 rounded-md bg-[#fff] border-2 border-black shadow-2xl"
                        />
                        {errors.academicRecords && <span className="text-red-500 text-sm">{errors.academicRecords.message}</span>}
                    </div>
                </div>

                <div className="flex flex-col">
                    <button type="submit" className="w-full p-3 mt-4 bg-[#03AED2] text-white font-bold rounded-md hover:bg-[#68D2E8] transition-all">
                        Register
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Signup;
