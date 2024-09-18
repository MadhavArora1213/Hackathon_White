import React from 'react';
import { useForm } from 'react-hook-form';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className='w-screen h-[87.7vh] flex items-center justify-center px-4'>
            <form 
                onSubmit={handleSubmit(onSubmit)} 
                className="w-full max-w-md bg-[#fff] p-8 neon-border rounded-lg shadow-lg"
            >
                <h2 className="text-center text-2xl font-bold  mb-6">Login</h2>
                <div className="mb-4 flex items-center">
                    <FaUser className=" mr-2" />
                    <div className="flex-1">
                        <label className="block ">Name</label>
                        <input
                            type="text"
                            {...register('name', { required: true })}
                            className="w-full p-2 rounded-md bg-[#fff] shadow-2xl border-2 border-black"
                        />
                        {errors.name && <span className="text-red-500 text-sm">Name is required</span>}
                    </div>
                </div>
                <div className="mb-4 flex items-center">
                    <FaEnvelope className="border-solid mr-2" />
                    <div className="flex-1">
                        <label className="block ">Email</label>
                        <input
                            type="email"
                            {...register('email', { 
                                required: "Email is required", 
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                    message: "Invalid email address"
                                }
                            })}
                            className="w-full p-2 rounded-md bg-[#fff] shadow-2xl border-2 border-black"
                        />
                        {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                    </div>
                </div>
                <div className="mb-4 flex items-center">
                    <FaLock className=" mr-2" />
                    <div className="flex-1">
                        <label className="block ">Password</label>
                        <input
                            type="password"
                            {...register('password', { 
                                required: "Password is required", 
                                minLength: {
                                    value: 6,
                                    message: "Password must be at least 6 characters"
                                }
                            })}
                            className="w-full p-2 rounded-md bg-[#fff] shadow-2xl border-2 border-black"
                        />
                        {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
                    </div>
                </div>
                <button 
                    type="submit" 
                    className="w-full p-3 mt-4 font-bold text-white bg-[#03AED2] rounded-md hover:bg-[#68D2E8] transition-all"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Login;

