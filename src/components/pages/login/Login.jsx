import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useLoginMutation } from "../../../services/authApi";
import { toast, ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { authToken, authUser, userRole } from "../../../features/authSlice";

const Login = () => {
  const [login, { data, isLoading, isSuccess }] = useLoginMutation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: async (values) => {
      try {
        const result = await login(values).unwrap();
        toast.success(result.message);
      } catch (error) {
        toast.error(error.data.message);
      }
    },
  });

  if (isSuccess) {
    console.log(data);
    dispatch(authUser(data));
    dispatch(authToken(data?.data?.token));
    dispatch(userRole(data?.data?.user_type));
    navigate("/dashboard");
  }

  return (
    <>
      
        <ToastContainer />
      <div className="container">
        {/* <!-- Outer Row --> */}
        <div className="row justify-content-center">
          <div className="col-12 col-md-6">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                {/* <!-- Nested Row within Card Body --> */}
                <div className="row">
                  {/* <div className="col-lg-6 d-none d-lg-block bg-login-image"></div> */}
                  <div className="col">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                      </div>
                    
                      <form
                        className="user"
                        onSubmit={formik.handleSubmit}
                        encType="multipart/form-data"
                      >
                        <div className="form-group">
                          <input
                            type="email"
                            name="email"
                            className="form-control form-control-user"
                            id="exampleInputEmail"
                            aria-describedby="emailHelp"
                            placeholder="Enter Email Address..."
                            onChange={formik.handleChange}
                            value={formik.values.email}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            name="password"
                            className="form-control form-control-user"
                            id="exampleInputPassword"
                            placeholder="Password"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                          />
                        </div>
                        <div className="form-group">
                          <div className="custom-control custom-checkbox small">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheck"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customCheck"
                            >
                              Remember Me
                            </label>
                          </div>
                        </div>
                        <button
                          type="submit"
                          className="btn btn-primary btn-user btn-block"
                        >
                          Login
                        </button>
                        <hr />
                        <Link
                          to=""
                          className="btn btn-google btn-user btn-block text-light bg-danger"
                        >
                          <i className="fab fa-google fa-fw"></i> Login with
                          Google
                        </Link>
                        <Link
                          to=""
                          className="btn btn-facebook btn-user btn-block text-light bg-info"
                        >
                          <i className="fab fa-facebook-f fa-fw"></i> Login with
                          Facebook
                        </Link>
                      </form>
                      <hr />
                      <div className="text-center">
                        <Link className="small" to="forgot-password.html">
                          Forgot Password?
                        </Link>
                      </div>
                      <div className="text-center">
                        <Link className="small" to="/signup">
                          Create an Account!
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
