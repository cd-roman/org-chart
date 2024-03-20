import React, { useState } from 'react';
import placeholderImage from '../../assets/avatar-placeholder.jpg';

function EmployeeForm({ onAddEmployee }) {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddEmployee({
      label: name,
      data: {
        avatar: image || placeholderImage,
        position: position
      },
      children: []
    });
    setName('');
    setPosition('');
    setImage(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Position"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
      />
      <input
        type="file"
        onChange={handleImageChange}
      />
      <button type="submit">Add Employee</button>
    </form>
  );
}

export default EmployeeForm;