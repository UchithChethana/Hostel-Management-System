import { useState } from "react";
import './AdminRegister.css'
import { useNavigate } from "react-router-dom";

function ManagerSignUp() {
    const [order, setOrder] = useState({
        username: "",
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleOnChange = (e) => {
        const { value, name } = e.target;
        setOrder((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const validate = () => {
        const newErrors = {};
        if (!order.username.trim()) {
            newErrors.username = "Username is required";
        }
        if (!order.email) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(order.email)) {
            newErrors.email = "Email address is invalid";
        }
        if (!order.password) {
            newErrors.password = "Password is required";
        } else if (order.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
        }
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        try {
            const res = await fetch('http://localhost:8020/add_manager', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(order),
            });

            const data = await res.json();

            if (res.ok && data.success) {
                alert("Account created successfully");
                navigate('/');

                const emailResponse = await fetch('/api/auth/manager_send_email', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email: order.email }),
                });

                const emailData = await emailResponse.json();

                if (emailResponse.ok && emailData.success) {
                    console.log("Thank you email sent to:", order.email);
                }
            } else {
                throw new Error(data.message || 'Failed to create account');
            }
        } catch (error) {
            console.log('Something went wrong!', error.message);
        }
    };

    return (
        <div id="package-body">
            <div className="add-order">
                <div id="package-form">
                    <h2><b>Registration Form</b></h2>
                    <form onSubmit={handleSubmit}>
    <label>Username:</label>
    <input
        type="text"
        id="username"
        name="username"
        value={order.username}
        onChange={handleOnChange}
    />
    {errors.username && <p className="error">{errors.username}</p>}

    <label>Email:</label>
    <input
        type="text"
        id="email"
        name="email"
        value={order.email}
        onChange={handleOnChange}
    />
    {errors.email && <p className="error">{errors.email}</p>}

    <label>Password:</label>
    <input
        type="text"
        id="password"
        name="password"
        value={order.password}
        onChange={handleOnChange}
    />
    {errors.password && <p className="error">{errors.password}</p>}

    <button type="submit">Register</button>
</form>

                    <br />
                </div>
            </div>
        </div>
    );
}

export default ManagerSignUp;
