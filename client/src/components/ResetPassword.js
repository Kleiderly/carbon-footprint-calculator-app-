import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './css/Admin.css';
import './css/vivify.min.css';

const ResetPassword = ({ match }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");



  const resetPasswordHandler = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (password !== confirmPassword) {
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        setError("");
      }, 5000);
      return setError("Passwords don't match");
    }

    try {
      const { data } = await axios.put(
        `/api/auth/resetpassword/${match.params.resetToken}`,
        {
          password,
        },
        config
      );

      console.log(data);
      setSuccess(data.data);
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div className="admin-wrapper vivify fadeIn">
      <form
        onSubmit={resetPasswordHandler}
      >
        <h3>Reset Password</h3>
        {error && <span className="errorHandler" >{error} </span>}
        {success && (
          <span>
            {success} <Link to="/adminpage/login">Login</Link>
          </span>
        )}
        <div>
          <label htmlFor="password">New Password: </label>
          <input
            type="password"
            required
            id="password"
            className="light-pink"
            placeholder="Enter new password"
            autoComplete="true"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div >
          <label htmlFor="confirmpassword">Confirm New Password: </label>
          <input
            type="password"
            required
            id="confirmpassword"
            className="light-pink"
            placeholder="Confirm new password"
            autoComplete="true"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="submit" >
          RESET PASSWORD
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;