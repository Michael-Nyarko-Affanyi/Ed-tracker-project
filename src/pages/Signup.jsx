import React from 'react'
import Input from '../components/Input ';
import icon from '../assets/Logo.png'
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { userSchema } from '../Validations/UserValidation'

const Signup = () => {

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
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
        },
        validationSchema: userSchema,
        // onSubmit,
      });

  return (
    <div className="w-full  flex justify-center items-center ">
      <div className="">
        <img src={icon} alt="" className="ml-[200px]" />
        <div className="shadow-lg bg-[white] w-[626px] flex flex-col justify-center items-center pt-[4px] pb-[55px] text-[#101828]">
          <div className="">
            <h2 className="text-[34px] font-normal mb-[15px] text-center">
              Create Your Account{" "}
            </h2>
            <p className="mb-[20px] text-[21.52px] text-center">
              Get Started For Free By Signing Up Now.
            </p>
            <div className=" flex flex-col justify-center items-center">
              <h1 className="font-bold text-[rgba(12,60,76,0.81)] text-[22px] mb-[35.22px] text-center">
                SIGN UP
              </h1>

              <form onSubmit={handleSubmit} autoComplete="off">
                <Input
                  label="First Name*"
                  type="firstName"
                  name="firstName"
                  value={values.firstName}
                  handleChange={handleChange}
                  placeholder="Enter your firstName "
                  onBlur={handleBlur}
                  error={errors.firstName}
                  touch={touched.firstName}
                />
                <Input
                  label="Last Name*"
                  type="lastName"
                  name="lastName"
                  value={values.lastName}
                  handleChange={handleChange}
                  placeholder="Enter your lastName "
                  onBlur={handleBlur}
                  error={errors.lastName}
                  touch={touched.lastName}
                />
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
                <Input
                  label="Confirm Password*"
                  type="Password"
                  name="confirmPassword"
                  value={values.confirmPassword}
                  handleChange={handleChange}
                  placeholder="Repeat password "
                  onBlur={handleBlur}
                  error={errors.confirmPassword}
                  touch={touched.confirmPassword}
                />

                <div className="mt-[46px]  h-[42px] text-center  ">
                  <button
                    type="submit"
                    className=" h-[42px] w-[268px] rounded-lg bg-[#0c3c4cce] font-normal text-white text-[17px] mb-[16px]"
                  >
                    Signup
                  </button>
                  <p>
                    Already have an account?
                    <Link to="/login" className="text-[#0000ffb3]">
                      LogIn
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

export default Signup