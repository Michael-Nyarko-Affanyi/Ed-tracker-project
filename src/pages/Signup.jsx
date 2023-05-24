import React from 'react';
import icon from '../assets/Logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { userSchema } from '../Validations/UserValidation';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import app from '../Firebase';
import Input from '../components/Input ';
import { updateProfile } from 'firebase/auth';


const Signup = () => {

  const auth = getAuth();
  
  const navigate = useNavigate()

  const onSubmit = async ()=> {
    
      try {
        await createUserWithEmailAndPassword(auth, values.email, values.password);
        const currentUser = auth.currentUser;
        if (currentUser) {
          await updateProfile(currentUser, {
            displayName: `${values.firstName} ${values.lastName}`,
          });
        }
        ;
        navigate("/login");
      } catch (err) {
        alert(err.message);
        
      }
  
  };
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting
  } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: userSchema,
    onSubmit,
  });
  return (
    <div className="w-full flex justify-center items-center ">
      <div className="">
        <div className="mt-7 shadow-lg  w-[626px] flex flex-col justify-center items-center pt-[4px] pb-[55px] text-[#101828] bg-white">
          <div className="">
            <div className=" flex flex-col justify-center items-center">
              <img src={icon} alt="" className="" />
              <h1 className="font-bold text-[rgba(12,60,76,0.81)] text-[22px] mb-[35.22px] text-center">
                SIGN UP
              </h1>
              <form onSubmit={handleSubmit} autoComplete="off">
                <Input
                  label="First Name*"
                  type="text"
                  name="firstName"
                  value={values.firstName}
                  handleChange={handleChange}
                  placeholder="Enter your Firstname"
                  onBlur={handleBlur}
                  error={errors.firstName}
                  touch={touched.firstName}
                />
                <Input
                  label="Last Name*"
                  type="text"
                  name="lastName"
                  value={values.lastName}
                  handleChange={handleChange}
                  placeholder="Enter your Lastname"
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
                  placeholder="Enter your Email"
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
                  placeholder="Enter your Password"
                  onBlur={handleBlur}
                  error={errors.password}
                  touch={touched.password}
                />
                <Input
                  label="Confirm Password*"
                  type="password"
                  name="confirmPassword"
                  value={values.confirmPassword}
                  handleChange={handleChange}
                  placeholder="Repeat Password"
                  onBlur={handleBlur}
                  error={errors.confirmPassword}
                  touch={touched.confirmPassword}
                />
                <div className="mt-[46px]  h-[42px] text-center  ">
                  <button
                    type="submit"
                    className=" h-[42px] w-[268px] rounded-lg bg-blue-600  font-normal text-white text-[17px] mb-[16px]"
                    // disabled={isSubmitting}
                  >
                    Signup
                  </button>
                  <p>
                    Already have an account?
                    <Link to="/login" className="text-[#0000ffb3]">
                      Login
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;