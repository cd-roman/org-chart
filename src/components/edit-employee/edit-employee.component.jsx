import React, { useState, useEffect } from 'react';
import { EditModal, EditForm, EditFormInput, EditFormButton } from './edit-employee.styles';

function EditEmployeeForm({ employee, onEditEmployee, onCancelEdit }) {
    const [name, setName] = useState(() => employee ? employee.name : '');
    const [title, setTitle] = useState(() => employee ? employee.data.title : '');
    const [image, setImage] = useState(() => employee ? employee.data.avatar : '');
    


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
        console.log({
            ...employee,
            name: name,
            data: {
              ...employee.data,
              avatar: image,
              title: title,
            },
          });
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
            <EditFormInput
                type="text"
                placeholder="Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <EditFormInput
                type="text"
                placeholder="Title"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <EditFormInput
                type="file"
                onChange={handleImageChange}
            />
            <EditFormButton type="submit">Save</EditFormButton>
            <EditFormButton type="button" onClick={onCancelEdit}>Cancel</EditFormButton>
            </EditForm>
        </div>
        </EditModal>
    );
    }

export default EditEmployeeForm;