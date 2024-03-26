import React from "react";
import { OrganizationChart } from "primereact/organizationchart";
import useEmployeeNode from "../EmployeeNode/useEmployeeNode";
import EmployeeForm from "../AddEmployee/AddEmployee";
import EditEmployeeForm from "../EditEmployeeForm/EditEmployeeForm";
import "./OrgChart.styles.scss";

function OrgChart() {
  const {
    data,
    nodeTemplate,
    showAddForm,
    onAddEmployee,
    setShowAddForm,
    findHighestId,
    editingEmployee,
    setEditingEmployee,
    showEditForm,
    setShowEditForm,
    handleEditEmployee,
  } = useEmployeeNode();

  return (
    <>
      <OrganizationChart value={data} nodeTemplate={nodeTemplate} />
      {showAddForm && (
        <EmployeeForm
          onAddEmployee={onAddEmployee}
          onCancel={() => setShowAddForm(false)}
          data={data}
          findHighestId={findHighestId}
        />
      )}
      {showEditForm && (
        <EditEmployeeForm
          employee={editingEmployee}
          setEditingEmployee={setEditingEmployee}
          onEditEmployee={handleEditEmployee} // Pass handleEditEmployee as onEditEmployee
          onCancelEdit={() => {
            setEditingEmployee(null);
            setShowEditForm(false);
          }}
        />
      )}
    </>
  );
}

export default OrgChart;
