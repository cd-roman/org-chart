import React, { useState, ChangeEvent, FormEvent } from "react";
import {
  EditModal,
  EditForm,
  EditFormInput,
  FormImageInput,
  EditFormButton,
  CancelButton,
  ImageContainer,
} from "./EditEmployeeForm.styles";

interface Employee {
  name: string;
  data: {
    title: string;
    avatar: string;
  };
}

interface EditEmployeeFormProps {
  employee: Employee;
  onEditEmployee: (employee: Employee) => void;
  onCancelEdit: () => void;
}

const EditEmployeeForm: React.FC<EditEmployeeFormProps> = ({ employee, onEditEmployee, onCancelEdit }) => {
  const [name, setName] = useState(employee.name || "");
  const [title, setTitle] = useState(employee.data.title || "");
  const [image, setImage] = useState(employee.data.avatar || "");

const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files && e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e: ProgressEvent<FileReader>) => {
      if (e.target?.result) {
        setImage(e.target.result as string);
      }
    };
    reader.readAsDataURL(file);
  }
};

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
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
          <FormImageInput
            name="avatar"
            type="file"
            onChange={handleImageChange}
          />
          <EditFormButton type="submit">Save</EditFormButton>
          <CancelButton type="button" onClick={onCancelEdit}>
            Cancel
          </CancelButton>
        </EditForm>
      </div>
    </EditModal>
  );
}

export default EditEmployeeForm;