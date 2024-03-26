import React, { useState } from "react";
import placeholderImage from "../../assets/avatar-placeholder.jpg";
import { Modal, Form, FormInput, FormButton } from "./AddEmployee.styles";

function EmployeeForm({ onAddEmployee, onCancel, findHighestId, data }) {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
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
    const id = Number(findHighestId(data)) + 1;
    console.log("New Employee ID:", id);
    onAddEmployee({
      name: name,
      expanded: true,
      data: {
        avatar: image || placeholderImage,
        title: title,
        id,
      },
      children: [],
    });
    setName("");
    setTitle("");
    setImage(null);
  };

  return (
    <Modal>
      <div className="modal-content">
        <Form onSubmit={handleSubmit}>
          <FormInput
            type="text"
            placeholder="Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <FormInput
            type="text"
            placeholder="Title"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <FormInput type="file" onChange={handleImageChange} />
          <FormButton type="submit">Add employee</FormButton>
          <FormButton type="button" onClick={onCancel}>
            Cancel
          </FormButton>
        </Form>
      </div>
    </Modal>
  );
}

export default EmployeeForm;
