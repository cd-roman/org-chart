import React, { useState } from "react";
import {
  EditModal,
  EditForm,
  EditFormInput,
  EditFormButton,
  ImageContainer,
} from "./edit-employee.styles";

function EditEmployeeForm({ employee, onEditEmployee, onCancelEdit }) {
  const [name, setName] = useState(employee.name || "");
  const [title, setTitle] = useState(employee.data.title || "");
  const [image, setImage] = useState(employee.data.avatar || "");

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
    onEditEmployee({
      ...employee,
      name: name,
      data: {
        ...employee.data,
        avatar: image,
        title: title,
      },
    });
    onCancelEdit();
  };

  return (
    <EditModal>
      <div className="modal-content">
        <EditForm onSubmit={handleSubmit}>
          <ImageContainer>
            <img src={image} alt={name} />
          </ImageContainer>
          <EditFormInput
            name="name"
            type="text"
            placeholder="Name"
            autoComplete="off"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <EditFormInput
            name="title"
            type="text"
            placeholder="Title"
            autoComplete="off"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <EditFormInput
            name="avatar"
            type="file"
            onChange={handleImageChange}
          />
          <EditFormButton type="submit">Save</EditFormButton>
          <EditFormButton type="button" onClick={onCancelEdit}>
            Cancel
          </EditFormButton>
        </EditForm>
      </div>
    </EditModal>
  );
}

export default EditEmployeeForm;
