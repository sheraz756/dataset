import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import Modal from 'react-modal';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import styles from './Calendar.module.css';
import Header from '../../component/Header/Header';
import SideBar from '../../component/SideBar/SideBar';

const localizer = momentLocalizer(moment);

const events = [
  {
    id: 1,
    title: 'Event 1',
    start: new Date(2023, 4, 10),
    end: new Date(2023, 4, 10),
  },
  {
    id: 2,
    title: 'Event 2',
    start: new Date(2023, 4, 15),
    end: new Date(2023, 4, 15),
  },
];

const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [calendarHeight, setCalendarHeight] = useState(0);

  useEffect(() => {
    Modal.setAppElement('#root');
    calculateCalendarHeight();
    window.addEventListener('resize', calculateCalendarHeight);
    return () => {
      window.removeEventListener('resize', calculateCalendarHeight);
    };
  }, []);

  const calculateCalendarHeight = () => {
    const sidebarWidth = 200; // Adjust with your sidebar width
    const headerHeight = 200; // Adjust with your header height
    const windowHeight = window.innerHeight;
    const calendarHeight = windowHeight - headerHeight;
    setCalendarHeight(calendarHeight);
  };

  const openModal = (event) => {
    setSelectedEvent(event);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedEvent(null);
  };

  const handleUpdateEvent = () => {
    console.log('Update event clicked');
  };

  const handleDeleteEvent = () => {
    console.log('Delete event clicked');
  };

  const EventModal = () => {
    return (
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Event Details"
        className={styles.modal}
        overlayClassName={styles.overlay}
      >
        {selectedEvent && (
          <div>
            <h2>{selectedEvent.title}</h2>
            <p>Start: {selectedEvent.start.toString()}</p>
            <p>End: {selectedEvent.end.toString()}</p>
            <button onClick={handleUpdateEvent}>Update</button>
            <button onClick={handleDeleteEvent}>Delete</button>
          </div>
        )}
        <button className={styles.closeButton} onClick={closeModal}>
          Close
        </button>
      </Modal>
    );
  };

  return (
    <div>
      <Header />
      <SideBar />
      <div className={styles.wrapper}>
       
        <div className={styles.calendarContainer}>
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            selectable
            onSelectEvent={openModal}
            style={{ height: calendarHeight }}
          />
        </div>
      </div>
      <EventModal />
    </div>
  );
};

export default App;
