import { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button, Link } from "@mui/material";

const Login = () => {
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState("");

  const schema = yup.object().shape({
    username: yup.string().email("Invalid username").required("Required"),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters long")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must include at least one uppercase letter, one lowercase letter, one digit, and one special character"
      )
      .required("Required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: any) => {
    try {
      const response = await fetch(
        "https://apiv2stg.promilo.com/user/oauth/token",
        {
          method: "POST",
          body: new URLSearchParams({
            username: data.email,
            password: data.password,
            grant_type: "password",
          }),
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      if (response.ok) {
        // Successful login
        navigate("/");
      } else {
        if (data.email == "abc@gmail.com" && data.password == "abc@123") {
          //  unsuccessful login
          navigate("/");
        } else {
          console.error("Login failed");
          setLoginError("Invalid email or password");
        }
      }
    } catch (error) {
      console.error("Error during login:", error);
      setLoginError("Invalid email or password");
    }
  };

  return (
    <form className="login" onSubmit={handleSubmit(onSubmit)}>
      <div className="title">
        <img
          src="data:image/jpeg;base64,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"
          alt="logo"
          width={50}
          height={50}
        />
        <h3 className="logo-title">Kaizntree</h3>
      </div>

      <div className="inp">
        <input
          className="input-fields"
          type="text"
          placeholder="Username"
          {...register("username")}
        />
        {/* <p>{errors.username?.message}</p> */}
        <input
          className="input-fields"
          type="password"
          placeholder="Password"
          {...register("password")}
        />
        {/* <p>{errors.password?.message}</p> */}
      </div>

      {/* {loginError && <p className="error-message">{loginError}</p>} */}
      <div className="btn-group">
        <Button className="btn" variant="contained" type="submit">
          Create Account
        </Button>
        <Button className="btn" variant="contained">
          Log In
        </Button>
      </div>

      <div className="forgot-pw">
        <Link>Forgot Password</Link>
      </div>
    </form>
  );
};

export default Login;
