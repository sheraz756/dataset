import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PostForm from '../component/Update/PostForm';
import Header from '../component/Header/Header';
import SideBar from '../component/SideBar/SideBar';
import styles from './Table.module.css';
import BookingApi from '../component/BookingApi/BookingApi';

const Table = () => {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [showComponent, setShowComponent] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const getCORSAnywhereData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/get-api`);
        console.log(response.data.Data.RoomList);
        setData1(response.data.Data.RoomList);
      } catch (error) {
        console.error('Error:', error);
      }
      try {
        const response = await axios.post(`http://localhost:8000/hotel-api`, {});
        console.log(response.data.HotelList);
        setData2(response.data.HotelList);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    getCORSAnywhereData();
  }, []);

  useEffect(() => {
    mergeData();
  }, [data2]);

  const mergeData = () => {
    if (data2.length > 0) {
      const item2 = data2[1];
      const updatedData1 = data1.map((item1) => {
        return { ...item1, HotelId: item2.HotelId, HotelStatus: item2.HotelStatus };
      });
      console.log(updatedData1);
      setData1(updatedData1);
    }
  };

  const toggleComponent = () => {
    setShowComponent(!showComponent);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data1.filter((item) =>
    item.HotelRoomTypeId.toString().includes(searchTerm)
  );

  return (
    <div>
      <Header />
      <SideBar />
      <div className={styles.buttonCover}>
        <div className={styles.today}>
          <button className={styles.btnToday}>Today</button>
        </div>
        <div className={styles.yesterday}>
          <button className={styles.btnYesterday}>Yesterday</button>
        </div>
      </div>
      <div className={styles.header}>
        <div>
          <input
            type="search"
            placeholder="Search by HotelRoomTypeId"
            className={styles.search}
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      </div>
      <div className={styles.Genrate}>
        <div>
          <button className={styles.Genrate}>Generate Report</button>
        </div>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Hotel ID</th>
            <th>HotelRoomId</th>
            <th>Channels</th>
            <th>HotelRoomTypeName</th>
            <th>MaxExtrabeds</th>
            <th>MaxOccupancy</th>
            <th>NoOfRoom</th>
            <th>RackRate</th>
            <th>RecStatus</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>
              <td>{item.HotelId ? item.HotelId : '-'}</td>
              <td>{item.HotelRoomTypeId}</td>
              <td>
                <img src="/download.png" alt="hotelName" className={styles.HotelImg} />
              </td>
              <td>{item.HotelRoomTypeName}</td>
              <td>{item.MaxExtrabeds}</td>
              <td>{item.MaxOccupancy}</td>
              <td>{item.NoOfRoom}</td>
              <td>{item.RackRate}</td>
              <td>{item.RecStatus}</td>
              <td>{item.HotelStatus}</td>
              <td>
                <button onClick={toggleComponent} className={styles.updateBtn}>
                  {showComponent ? 'Update' : 'Update'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showComponent && <PostForm />}
      <BookingApi />
    </div>
  );
};

export default Table;
