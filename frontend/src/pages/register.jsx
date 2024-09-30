import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../styles/login.css"
import { Link } from 'react-router-dom';
import Login from './login';
const Register = () => {
  return (
    <>
  <div className="container mx-auto px-4 py-12 flex flex-col items-center justify-center h-screen container1">
    <div className="w-full max-w-md bg-white rounded shadow-md p-6 md:flex md:flex-col md:justify-center md:items-center">
      <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
        <li className="nav-item" role="presentation">
          <a
            className="nav nav-link "
            id="tab-login"
            data-mdb-pill-init

            href="/"
            role="tab"
            aria-controls="pills-login"
            aria-selected="true"
          >
            Login
          </a>
        </li>

        <li className="nav-item" role="presentation">
          <a
            className="nav-link active"
            id="tab-register"
            data-mdb-pill-init
            href="/Register"
            role="tab"
            aria-controls="pills-register"
            aria-selected="false"
          >
            Register
          </a>
        </li>

      </ul>

      <div className="tab-content p-4"> {/* Added p-4 for padding */}
        <div
          className="tab-pane fade show active"
          id="pills-login"
          role="tabpanel"
          aria-labelledby="tab-login"
        >
          <form className="mb-9">
            <div className="form-outline mb-4">
              <label className="text-center" for="loginName">Email</label>
              <input type="email" id="loginName" className="form-control" />
            </div>

            <div className="form-outline mb-4">
              <label className="text-center" for="loginPassword">Password</label>
              <input type="password" id="loginPassword" className="form-control" />
            </div>

            <button type="submit" className="btn btn-primary btn-block mb-4">
              Sign in
            </button>

            <div className="text-center">

              <p>
              Not a member? <Link to="/Register">Register</Link>
              </p>
            </div>
          </form>
        </div>

        <div
          className="tab-pane fade"
          id="pills-register"
          role="tabpanel"
          aria-labelledby="tab-register"
        >
          <form>
            <div className="text-center mb-3">
              <p>Sign up with:</p>
              <button

                data-mdb-ripple-init
                type="button"
                className="btn btn-secondary btn-floating mx-1"
              >
                <i className="fab fa-facebook-f"></i>
              </button>

              <button
                data-mdb-ripple-init
                type="button"
                className="btn btn-secondary btn-floating mx-1"
              >
                <i className="fab fa-google"></i>
              </button>

              <button
                data-mdb-ripple-init
                type="button"
                className="btn btn-secondary btn-floating mx-1"
              >
                <i className="fab fa-twitter"></i>
              </button>

              <button
                data-mdb-ripple-init
                type="button"
                className="btn btn-secondary btn-floating mx-1"
              >
                <i className="fab fa-github"></i>
              </button>
            </div>

            <p className="text-center">or:</p>


            <div className="form-outline mb-4">
              <input type="text" id="registerName" className="form-control" />
              <label className="form-label" for="registerName">Name</label>
            </div>

            <div className="form-outline mb-4">
              <input type="text" id="registerUsername" className="form-control" />
              <label className="form-label" for="registerUsername">Username</label>
            </div>

            <div className="form-outline mb-4">
              <input type="email" id="registerEmail" className="form-control" />
              <label className="form-label" for="registerEmail">Email</label>
            </div>

            <div className="form-outline mb-4">
              <input type="password" id="registerPassword" className="form-control" />
              <label className="form-label" for="registerPassword">Password</label>
            </div>

            <div className="form-outline mb-4">
              <input
                type="password"
                id="registerRepeatPassword"
                className="form-control"
              />
              <label className="form-label" for="registerRepeatPassword">
                Repeat password
              </label>
            </div>

            <div className="form-check d-flex justify-content-center mb-4">
              <input
                className="form-check-input me-2"
                type="checkbox"
                value=""
                id="registerCheck"
                checked
                aria-describedby="registerCheckHelpText"
              />

            </div>

            <button

              data-mdb-ripple-init
              type="submit"
              className="btn btn-primary btn-block mb-3"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</>
  )
}

export default Register
