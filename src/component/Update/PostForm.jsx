import React, { useState } from 'react';
import axios from 'axios';
import styles from './PostForm.module.css';

const PostForm = () => {
  const [formData, setFormData] = useState({
    hotelId: '',
    HotelRoomTypeId: '',
    NoOfRoom: '',
    DmcRoomName: null,
    MinimumRate: '',
    RackRate: '',
    MaxExtrabeds: 0,
    MaxOccupancy: '',
    MaxAdultsOccupancy: '',
    MaxChildrenOccupancy: '',
    StandardRoomCaptionId: '',
    RoomStyleId: null,
    HotelRoomTypeViews: [],
    DmcRoomId: null,
    RoomInventoryTypeId: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8000/post-api', formData)
      .then((response) => {
        console.log(response.data);
        // Handle success
      })
      .catch((error) => {
        console.error(error);
        // Handle error
      });
  };

  return (
    
    <div className={styles.formContainer}>
      <h2 className={styles.formTitle}>Update Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Render input fields dynamically */}
        {Object.keys(formData).map((key) => (
          <div className={styles.formField} key={key}>
            <label htmlFor={key} className={styles.label}>
              {key}:
            </label>
            {typeof formData[key] === 'boolean' ? (
              <input
                type="checkbox"
                name={key}
                checked={formData[key]}
                onChange={handleChange}
              />
            ) : (
              <input
                type="text"
                name={key}
                value={formData[key]}
                onChange={handleChange}
                className={styles.input}
              />
            )}
          </div>
        ))}
        <button type="submit" className={styles.submitButton}>
          Update
        </button>
      </form>
    </div>
  );
};

export default PostForm;
