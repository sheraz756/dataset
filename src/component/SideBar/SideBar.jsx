import React, { useState } from 'react';
import styles from './SideBar.module.css';
import { useNavigate } from 'react-router-dom';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

const SideBar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false); // State to track sidebar open/close

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const channel = async () => {
    navigate('/myChannel');
  };

  const Home = async () => {
    navigate('/');
  };

  const Calender = async () => {
    navigate('/calender');
  };

  return (
    <div>
      <div className={styles.clientChannel2Child} />
      <div className={`${styles.rectangleParent} ${isOpen ? styles.open : ''}`} id="sidebar">
        <div className={styles.groupChild} />
        <div className={styles.dashboardParent}>
          <div className={styles.dashboard} onClick={Home}>Dashboard</div>
          <div className={styles.hotels}>Hotels</div>
          <div className={styles.bookings}>Bookings</div>
          <div className={styles.channels} onClick={channel}>Channels</div>
          <div className={styles.calendar} onClick={Calender}>Calendar</div>
          <div className={styles.reports}>Reports</div>
          <div className={styles.settings}>Settings</div>
        </div>
        <img className={styles.groupItem} alt="" src="/group-66.svg" />
        <img className={styles.groupInner} alt="" src="/group-79.svg" />
        <img className={styles.groupIcon} alt="" src="/group.svg" />
        <img className={styles.groupIcon1} alt="" src="/group1.svg" />
        <button className={styles.sidebarToggle} onClick={toggleSidebar}>
          {isOpen ? 'Close Sidebar' : 'Open Sidebar'}
        </button>
      </div>
      <div className={styles.groupParent}>
        <div className={styles.vectorParent}>
          <img className={styles.vectorIcon} alt="" src="/vector.svg" />
          <img className={styles.ellipseIcon} alt="" src="/ellipse-2.svg" />
          <div className={styles.div}>2</div>
        </div>
        <div className={styles.vectorGroup}>
          <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
          <img className={styles.ellipseIcon} alt="" src="/ellipse-2.svg" />
          <div className={styles.div}>2</div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;