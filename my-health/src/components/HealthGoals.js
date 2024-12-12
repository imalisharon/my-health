import { useState } from 'react';

const HealthGoals = () => {
  const [goal, setGoal] = useState('');
  const [target, setTarget] = useState(0);
  const [currentProgress, setCurrentProgress] = useState(0);

  return (
    <div>
      <h3>Health Goals</h3>
      <input placeholder="Goal" value={goal} onChange={(e) => setGoal(e.target.value)} />
      <input type="number" placeholder="Target" value={target} onChange={(e) => setTarget(e.target.value)} />
      <input type="number" placeholder="Progress" value={currentProgress} onChange={(e) => setCurrentProgress(e.target.value)} />
      <div>
        Progress: {(currentProgress / target) * 100}%
      </div>
    </div>
  );
};

export default HealthGoals;
