import { useState, useEffect } from 'react';

const MedicationReminder = () => {
  const [medication, setMedication] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = () => {
    const reminderTime = new Date(time).getTime() - new Date().getTime();
    setTimeout(() => {
      alert(`Time to take your medication: ${medication}`);
    }, reminderTime);
    alert('Reminder set!');
  };

  return (
    <div>
      <input placeholder="Medication" value={medication} onChange={(e) => setMedication(e.target.value)} />
      <input type="datetime-local" value={time} onChange={(e) => setTime(e.target.value)} />
      <button onClick={handleSubmit}>Set Reminder</button>
    </div>
  );
};

export default MedicationReminder;
