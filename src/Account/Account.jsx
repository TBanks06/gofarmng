import React from "react";
import "./Account.css";

function Account() {
  return (
    <>
      <h4>Account Settings</h4>

      <form>
        <div>
          <label htmlFor="text">Full Name</label>

          <input
            id="text"
            type="text"
            name="name"
            placeholder="Enter your Full Name"
            required
            className="account-input"
          />
        </div>

        <div>
          <label htmlFor="text">Email</label>

          <input
            id="email"
            type="text"
            name="email"
            placeholder="Enter your Email"
            required
            className="account-input"
          />
        </div>
        <div>
          <label htmlFor="text">Current Password</label>

          <input
            id="pass"
            type="text"
            name="pass"
            placeholder="Enter your Old password"
            required
            className="account-input"
          />
        </div>

        <div>
          <label htmlFor="text">New Password</label>

          <input
            id="text"
            type="text"
            name="name"
            placeholder="Enter your New password"
            required
            className="account-input"
          />
        </div>

        <div>
          <label htmlFor="text">Confirm Password</label>

          <input
            id="text"
            type="text"
            name="name"
            placeholder="Confirm Password"
            required
            className="account-input"
          />
        </div>
      </form>
    </>
  );
}

export default Account;
