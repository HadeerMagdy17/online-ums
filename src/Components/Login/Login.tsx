import React from 'react'

export default function Login() {
  return (
    <div
    id="login"
    className="login-container vh-100 d-flex justify-content-center align-items-center"
  >
    <div className="bg-white rounded p-5 py-5">
      <div className="login-h1 ">
        <h2>User Management System</h2>
      </div>
      <div className="text-center py-3">
        <h4>Sign In</h4>
        <small>Enter your credentials to access your account</small>
      </div>
      <form>
        <div className="mb-1">
          <label className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your username"
           
          />
        </div>
      
        <div className="my-1">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter your password"
           
          />
        </div>
      
        <button className="btn btn-warning sign-btn w-100 text-white mt-3">
          SIGN IN
        </button>
      </form>
    </div>
  </div>
  )
}
