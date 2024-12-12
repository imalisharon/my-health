import { useState } from 'react';

const UserProfile = () => {
  const [profile, setProfile] = useState({
    name: '',
    age: '',
    height: '',
    weight: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value
    });
  };

  const handleSubmit = () => {
    // Save the data to localStorage, Firebase, or a backend API
    localStorage.setItem('userProfile', JSON.stringify(profile));
    alert('Profile saved!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" onChange={handleChange} placeholder="Name" value={profile.name} />
      <input name="age" onChange={handleChange} placeholder="Age" value={profile.age} />
      <input name="height" onChange={handleChange} placeholder="Height" value={profile.height} />
      <input name="weight" onChange={handleChange} placeholder="Weight" value={profile.weight} />
      <button type="submit">Save Profile</button>
    </form>
  );
};

export default UserProfile;
