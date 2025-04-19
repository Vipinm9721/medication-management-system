// ReminderPopup.js
import React from 'react';
import Modal from 'react-modal';
import './ReminderPopup.css';

Modal.setAppElement('#root');

const ReminderPopup = ({ isOpen, onClose, onSnooze, onTaken, onMissed }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Reminder"
      className="reminder-modal"
      overlayClassName="reminder-overlay"
    >
      <h2>⏰ Medication Reminder</h2>
      <p>It's time to take your scheduled dose.</p>

      <div className="popup-buttons">
        <button className="btn taken" onClick={onTaken}>Mark as Taken</button>
        <button className="btn missed" onClick={onMissed}>Missed</button>
        <button className="btn snooze" onClick={onSnooze}>Snooze</button>
      </div>
    </Modal>
  );
};

export default ReminderPopup;
