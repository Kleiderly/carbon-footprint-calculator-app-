import { useState } from "react";
import axios from "axios";
import './css/Admin.css';


const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const forgotPasswordHandler = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        " /api/auth/forgotpassword",
        { email },
        config
      );

      setSuccess(data.data);
    } catch (error) {
      setError(error.response.data.error);
      setEmail("");
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div className="admin-wrapper">
      <form
        onSubmit={forgotPasswordHandler}
      >
        <h3>Password Recovery</h3>
        {error && <span >{error}</span>}
        {success && <span >{success}</span>}
        <div>
          <p className="admin-forgotpassword">
            Please enter the email address you registered your account with, and we
            will send you a reset password confirmation to this email.
          </p>
          <label htmlFor="email">Email: </label>
          <input
            cmassName="light-pink"
            type="email"
            required
            id="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">
          SEND EMAIL
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;