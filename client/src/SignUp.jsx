import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './SignUp.css'; // Import custom CSS for SignUp component

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/register', { name, email, password })
            .then(result => {
                console.log(result.data);
                navigate('/login');
            })
            .catch(err => console.log(err));
    };

    return (
        <div className='signup-container'>
            <div className='signup-form'>
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            placeholder='Enter Name'
                            autoComplete='off'
                            name='name'
                            className='form-control'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
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
                    <button type='submit' className='btn btn-success w-100'>Register</button>
                </form>
                <p className='mt-3'>Already have an account? <Link to='/login'>Login</Link></p>
            </div>
        </div>
    );
};

export default SignUp;
