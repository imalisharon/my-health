import { useState } from 'react';

const HealthTracker = () => {
  const [waterIntake, setWaterIntake] = useState(0);
  const [steps, setSteps] = useState(0);
  const [sleepHours, setSleepHours] = useState(0);

  const handleSave = () => {
    const healthData = { waterIntake, steps, sleepHours };
    localStorage.setItem('dailyHealth', JSON.stringify(healthData));
    alert('Health data saved!');
  };

  return (
    <div>
      <h3>Health Tracker</h3>
      <input type="number" placeholder="Water Intake (L)" value={waterIntake} onChange={(e) => setWaterIntake(e.target.value)} />
      <input type="number" placeholder="Steps" value={steps} onChange={(e) => setSteps(e.target.value)} />
      <input type="number" placeholder="Sleep Hours" value={sleepHours} onChange={(e) => setSleepHours(e.target.value)} />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default HealthTracker;
