import { useState } from "react";
import axios from "axios";
import './css/Admin.css';
import './css/vivify.min.css';

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
    <div className="admin-wrapper vivify fadeIn">

      <form onSubmit={forgotPasswordHandler}>
        <h3>Password Recovery</h3>
        {error && <span >{error}</span>}
        {success && <span >{success}</span>}

        <div className="admin-recover-wrap">
          <p className="admin-forgotpassword">
            Please enter the email address you registered your account with,
            and we will send you instructions to reset your password.
          </p>
          <label htmlFor="email">Email: </label>
          <input
            className="light-pink"
            type="email"
            required
            id="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      <div className="admin-pw-recovery-button-wrap">
        <button className="admin-form-button" type="submit">
          SEND EMAIL
        </button>
      </div>
      </form>
    </div>
  );
};

export default ForgotPassword;