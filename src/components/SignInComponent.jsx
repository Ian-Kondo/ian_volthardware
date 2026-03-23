
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignInComponent = () => {
    let [email, updateEmail] = useState("");
    let [password, updatePassword] = useState("");

    let [loading, updateLoading] = useState("");
    let [success, updateSuccess] = useState("");
    let [error, updateError] = useState("");

    //use useNavigate hook to navigate to home component
    let navigator = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        updateError("");
        updateSuccess("");
        updateLoading(" Please wait ...");
        try {
            // create form data
            const user_data = new FormData()
            user_data.append("email", email)
            user_data.append("password", password)
            //get response from server after sending data
            const response = await axios.post(
                "https://iank.alwaysdata.net/api/signin",
                user_data
            );
            console.log(response);
            if (response.data.user) {
                updateSuccess(response.data.message)
                updateLoading("")
                //to save user data after log in

                //reroute to homepage
                navigator("/")
            } else {
                updateError(response.data.message)
                updateLoading("")
            }

        } catch (error) {
            updateError(error.message)
            updateLoading("")
        }

    }
    return (
        <div className="row justify-content-center mt-4">

            <div className="col-md-6 card shadow p-4">
                <h2>Sign In</h2>
                <h5 className="text-warning">{loading}</h5>
                <h5 className="text-danger">{error}</h5>
                <h5 className="text success">{success}</h5>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter Email"
                        required
                        onChange={(e) => {
                            updateEmail(e.target.value);
                        }}
                        value={email}
                    />
                    <br />

                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter Password"
                        required
                        onChange={(e) => {
                            updatePassword(e.target.value);
                        }}
                        value={password}
                    />
                    <br />

                    <button className="btn btn-dark my-3">Sign In</button> <br />

                    <Link to="/signup">Don't have an account? Sign up</Link>
                </form>
            </div>

        </div>
    );
}

export default SignInComponent;