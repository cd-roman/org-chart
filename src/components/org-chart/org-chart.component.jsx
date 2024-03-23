import React from 'react';
import { OrganizationChart } from 'primereact/organizationchart';
import EmployeeNode from '../employee-node/employee-node.component';
import EmployeeForm from '../add-employee/add-employee.component';
import EditEmployeeForm from '../edit-employee/edit-employee.component';
import './org-chart.styles.scss';

function OrgChart () {
    const { data, nodeTemplate, showAddForm, onAddEmployee, setShowAddForm, findHighestId, editingEmployee, setEditingEmployee, showEditForm,
        setShowEditForm,
        handleCancelEdit, 
        onEditEmployee,
    } = EmployeeNode();

    class ErrorBoundary extends React.Component {
        componentDidCatch(error, info) {
          console.log(error, info);
        }
      
        render() {
          return this.props.children; 
        }
    }
    
    return (
        <>
        <OrganizationChart value={data} nodeTemplate={nodeTemplate} />
        {showAddForm && <EmployeeForm onAddEmployee={onAddEmployee} onCancel={() => setShowAddForm(false)} data={data} findHighestId={findHighestId} />}
        <ErrorBoundary>
        {showEditForm && 
  <EditEmployeeForm 
    employee={editingEmployee} 
    setEditingEmployee={setEditingEmployee}
    onEditEmployee={(updatedEmployee) => {
      setEditingEmployee(null); 
      setShowEditForm(false); 
      onEditEmployee(updatedEmployee);
    }} 
    onCancelEdit={() => {
      setEditingEmployee(null); 
      setShowEditForm(false);
    }} 
  />
}
        </ErrorBoundary>
        </>
    );
}

export default OrgChart;