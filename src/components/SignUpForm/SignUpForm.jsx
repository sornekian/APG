import { useState } from 'react';
import { signUp } from '../../utilities/users-service';
import './SignUpForm.css';
import { useNavigate } from "react-router-dom";


export default function SignUpForm({ setUser }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  })

  function handleChange(evt) {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
      error: ''
    })
  }

  const navigate = useNavigate();
  async function handleSubmit(evt) {
    evt.preventDefault()
    try {
      const formDataCopy = { ...formData }
      delete formDataCopy.error
      delete formDataCopy.confirm
      const user = await signUp(formDataCopy)
      setUser(user)
      navigate("/");
    } catch {
      setFormData({
        ...formData,
        error: 'Sign Up Failed - Please Try Again!'
      })
    }
  }

  return (
    <div className="signup-container">
      <h2>Sign Up to Become a Member!</h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        <label>Password</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        <label>Confirm Password</label>
        <input type="password" name="confirm" value={formData.confirm} onChange={handleChange} required />
        <button type="submit">SIGN UP</button>
      </form>
      <div className="member-benefits">
        <h5>Membership benefits</h5>
        <p>180+ Professional Members and Young Professionals</p>
        <p>Professional Networking</p>
        <p>Social Networking</p>
        <p>Annual “Membership Directory”</p>
        <p>Newsletters</p>
        <p>Complimentary Events | Exclusive Members-Only Events</p>
        <p>Reduced Rates on Events Open to General Public</p>
        <p>Lifelong Friendships</p>
      </div>
      <p className="error-message">&nbsp;{formData.error}</p>
    </div>
  )
}
