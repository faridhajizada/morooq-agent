import { useRef, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './AddEmployer.module.scss';
import { useCreateUserMutation } from '../../../api/userApi';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
function AddEmployer() {
  const [createUser, { isLoading, isError }] = useCreateUserMutation();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    department: '',
    gender: '',
    position: '',
    firstName: '',
    lastName: '',
    fatherName: '',
    phoneNumber1: '',
    phoneNumber2: '',
    birthdate: new Date(), // Updated to null to indicate no default value
    password: '',
  });

  const [customErr, setCustomErr] = useState('');

  function regexChecker(inputType, inputValue) {
    let regexSchema = '';

    switch (inputType) {
      case 'email':
        regexSchema = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
        break;
      case 'username':
        regexSchema = /^[a-zA-Z0-9]+$/;
        break;
      case 'department':
      case 'gender':
      case 'position':
      case 'firstName':
      case 'lastName':
      case 'fatherName':
        regexSchema = /^.+$/;
        break;
      case 'phonenumber1':
      case 'phonenumber2':
        regexSchema = /^d{10}$/;
        break;
      case 'password':
        regexSchema =
          /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d.!@#$%^&*()-_=+{};:,<.>?]{8,}$/;
        break;
      default:
        return false;
    }
    if (!regexSchema.test(inputValue)) {
      setCustomErr(`${inputType} is not a valid`);
    } else {
      setCustomErr('');
    }
    return regexSchema.test(inputValue);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDateChange = (date) => {
    if (date) {
      const currentYear = new Date().getFullYear();
      const year = date.getFullYear();
      const age = currentYear - year;
      if (age < 18) {
        setCustomErr('underage');
        return;
      }
      console.log(date);
      const formattedDate = date.toISOString().slice(0, 10);

      setFormData({
        ...formData,
        birthdate: formattedDate + 'T08:22:23.127Z',
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isCorrect = false;
    for (const [key, value] of Object.entries(formData)) {
      isCorrect = regexChecker(key, value);
    }

    if (!isCorrect) {
      console.log('asdfghjk');
      return;
    }

    console.log(formData);
    try {
      console.log('🚀 ~ createEmployee ~ formData:', formData);
      const response = createUser(formData);
      console.log('Update successful:', response);
    } catch (error) {
      console.error('Update failed:', error);
    }
    setFormData({
      username: '',
      email: '',
      department: '',
      gender: '',
      position: '',
      firstName: '',
      lastName: '',
      fatherName: '',
      phoneNumber1: '',
      phoneNumber2: '',
      birthdate: new Date(), // Updated to null to indicate no default value
      password: '',
    });
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label>Department</label>
        <select
          name="department"
          value={formData.department}
          onChange={handleChange}
          required
        >
          <option value="">Select Department</option>
          <option value="IT">IT</option>
          <option value="HR">HR</option>
          <option value="Finance">Finance</option>
          {/* Add other department options */}
        </select>
      </div>

      <div className={styles.formGroup}>
        <label>Gender</label>
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          {/* Add other gender options */}
        </select>
      </div>

      <div className={styles.formGroup}>
        <label>Position</label>
        <select
          name="position"
          value={formData.position}
          onChange={handleChange}
          required
        >
          <option value="">Select Position</option>
          <option value="Manager">Manager</option>
          <option value="Employee">Employee</option>
          {/* Add other position options */}
        </select>
      </div>
      <div className={styles.formGroup}>
        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label>Father's Name</label>
        <input
          type="text"
          name="fatherName"
          value={formData.fatherName}
          onChange={handleChange}
        />
      </div>
      <div className={styles.formGroup}>
        <label>Phone Number 1</label>
        <input
          type="tel"
          name="phoneNumber1"
          value={formData.phoneNumber1}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label>Phone Number 2</label>
        <input
          type="tel"
          name="phoneNumber2"
          value={formData.phoneNumber2}
          onChange={handleChange}
        />
      </div>
      <div className={styles.Sample}>
        <div className={styles.Sample_header}>
          <h1>birthdate</h1>
        </div>
        <div className={styles.Sample__container}>
          <div className={styles.Sample__container__content}>
            <Calendar onChange={handleDateChange} value={formData.birthdate} />
          </div>
        </div>
      </div>
      <div className={styles.formGroup}>
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <p style={{ color: 'red', fontSize: '36px' }}> {customErr}</p>
      <button type="submit">Submit</button>
    </form>
  );
}
export default AddEmployer;
