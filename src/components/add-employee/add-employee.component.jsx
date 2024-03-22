import React, { useState } from 'react';
import placeholderImage from '../../assets/avatar-placeholder.jpg';

function EmployeeForm({ onAddEmployee }) {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
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
      name: name,
      expanded: true,
      data: {
        avatar: image || placeholderImage,
        title: title
      },
      children: []
    });
    setName('');
    setTitle('');
    setImage(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Title"
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
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