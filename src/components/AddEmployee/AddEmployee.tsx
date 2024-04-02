import React, { ChangeEvent, FormEvent, useState } from "react";
import placeholderImage from "../../assets/avatar-placeholder.jpg";
import {
  Modal,
  Form,
  FormInput,
  FormImageInput,
  FormButton,
  CancelButton,
} from "./AddEmployee.styles";

interface Node {
  name: string;
  expanded: boolean;
  data: {
    avatar: string;
    title: string;
  };
  children?: Node[];
}

interface EmployeeFormProps {
  onAddEmployee: (node: Node) => void;
  onCancel: () => void;
}

const EmployeeForm: React.FC<EmployeeFormProps> = ({ onAddEmployee, onCancel }) => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState<string | null>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onAddEmployee({
      name: name,
      expanded: true,
      data: {
        avatar: image || placeholderImage,
        title: title,
      },
      children: [],
    });
    // Reset form fields after submission
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
          <FormImageInput type="file" onChange={handleImageChange} />
          <FormButton type="submit">Add employee</FormButton>
          <CancelButton type="button" onClick={onCancel}>
            Cancel
          </CancelButton>
        </Form>
      </div>
    </Modal>
  );
}

export default EmployeeForm;
