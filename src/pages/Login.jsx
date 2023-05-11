import React from 'react'
import  Input  from "../components/Input ";
import icon from "../assets/Logo.png"
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { loginSchema } from '../Validations/UserLogin';

const Login = () => {

    const {
        values,
        errors,
        touched,
        isSubmitting,
        handleBlur,
        handleChange,
        handleSubmit,
      } = useFormik({
        initialValues: {
          email: "",
          password: "",
        },
        validationSchema: loginSchema,
        // onSubmit,
      });



  return (
    <div className="w-full h-full flex justify-center items-center bg-blue-50">
    <div className="">
    <img src={icon} alt="" className=" mt-6 ml-[200px]" />
      <div className="bg-[white] shadow-lg w-[626px] flex flex-col justify-center items-center pt-[48px] pb-[55px] text-[#101828]">
        <div className="">
          <div className=" flex flex-col justify-center items-center ">
            <h1 className="font-bold text-[rgba(12,60,76,0.81)] text-[26px] mb-[35.22px] text-center">
              Login
            </h1>
            <form onSubmit={handleSubmit} autoComplete="off">
              <Input
                label="Email Address*"
                type="email"
                name="email"
                value={values.email}
                handleChange={handleChange}
                placeholder="Enter your email "
                onBlur={handleBlur}
                error={errors.email}
                touch={touched.email}
              />
              <Input
                label="Password*"
                type="password"
                name="password"
                value={values.password}
                handleChange={handleChange}
                placeholder="Enter your password "
                onBlur={handleBlur}
                error={errors.password}
                touch={touched.password}
              />

              <Link to="" className="text-[#0000ffb3] ml-[210px] ">
                Forgot password?
              </Link>
              <div className="mt-[46px]  h-[42px] text-center  ">
                <button
                  type="submit"
                  className=" h-[42px] w-[268px] rounded-lg bg-blue-600 font-normal text-white text-[17px] mb-[16px]  "
                >
                 Login
                </button>
                <p>
                  Don’t have an account?
                  <Link to="/signUp" className="text-[#0000ffb3]">
                    SignUp
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Login