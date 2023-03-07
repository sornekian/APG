import { useState } from 'react';
import { signUp } from '../../utilities/users-service';
import './SignUpForm.css';

export default function SignUpForm({ setUser }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirm: '',
    phone: '',
    address: '',
    birthdate: '',
    lineOfWork: '',
    currentPosition: '',
    companyName: '',
    undergraduateUniversity: '',
    undergraduateMajor: '',
    degreeCompletionYear: '',
    error: ''
  })

  function handleChange(evt) {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
      error: ''
    })
  }

  async function handleSubmit(evt) {
    evt.preventDefault()
    try {
      const formDataCopy = { ...formData }
      delete formDataCopy.error
      delete formDataCopy.confirm
      const user = await signUp(formDataCopy)
      setUser(user)
    } catch {
      setFormData({
        ...formData,
        error: 'Sign Up Failed - Please Complete the Form'
      })
    }
  }

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit}>
        <label>Full Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        <label>Password</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        <label>Confirm Password</label>
        <input type="password" name="confirm" value={formData.confirm} onChange={handleChange} required />
        <label>Phone Number</label>
        <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
        <label>Home Address</label>
        <input type="text" name="address" value={formData.address} onChange={handleChange} required />
        <label>Date of Birth</label>
        <input type="date" name="birthdate" value={formData.birthdate} onChange={handleChange} required />
        <label>Line of Work</label>
        <input type="text" name="lineOfWork" value={formData.lineOfWork} onChange={handleChange} required />
        <label>Current Position</label>
        <input type="text" name="currentPosition" value={formData.currentPosition} onChange={handleChange} required />
        <label>Company Name</label>
        <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} required />
        <label>Undergraduate University</label>
        <input type="text" name="undergraduateUniversity" value={formData.undergraduateUniversity} onChange={handleChange} required />
        <label>Undergraduate Major</label>
        <input type="text" name="undergraduateMajor" value={formData.undergraduateMajor} onChange={handleChange} required />
        <label>Degree Completion Year</label>
        <input type="text" name="degreeCompletionYear" value={formData.degreeCompletionYear} onChange={handleChange} required />
        <button type="submit">SIGN UP</button>
      </form>
      <p className="error-message">&nbsp;{formData.error}</p>
    </div>
  )
}
