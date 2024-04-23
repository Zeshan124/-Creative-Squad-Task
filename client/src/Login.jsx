import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import custom CSS for Login component

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/login', { email, password });
            if (response.data === "Success") {
                navigate('/home');
            } else {
                setError('Invalid email or password. Please try again.');
            }
        } catch (error) {
            console.log(error);
            setError('An error occurred. Please try again later.');
        }
    };

    return (
        <div className='login-container'>
            <div className='login-form'>
                <h2>Login</h2>
                {error && <p className='text-danger'>{error}</p>} {/* Display error message if error state is set */}
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            placeholder='Enter Email'
                            autoComplete='off'
                            name='email'
                            className='form-control'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            placeholder='Enter Password'
                            autoComplete='off'
                            name='password'
                            className='form-control'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type='submit' className='btn btn-primary w-100'>Login</button>
                </form>
                <p className='mt-3'>Dont have an account? <Link to='/register'>Register</Link></p>
            </div>
        </div>
    );
}

export default Login;
