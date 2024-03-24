import React from 'react';
import { OrganizationChart } from 'primereact/organizationchart';
import EmployeeNode from '../employee-node/employee-node.component';
import EmployeeForm from '../add-employee/add-employee.component';
import EditEmployeeForm from '../edit-employee/edit-employee.component';
import './org-chart.styles.scss';

function OrgChart () {
    const { data, 
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
    } = EmployeeNode();
    
    return (
        <>
        <OrganizationChart value={data} nodeTemplate={nodeTemplate} />
        {showAddForm && 
          <EmployeeForm 
            onAddEmployee={onAddEmployee} 
            onCancel={() => setShowAddForm(false)} 
            data={data} 
            findHighestId={findHighestId} 
          />}
        {showEditForm && 
        <EditEmployeeForm 
          employee={editingEmployee} 
          setEditingEmployee={setEditingEmployee}
          onEditEmployee={handleEditEmployee} // Pass handleEditEmployee as onEditEmployee
          onCancelEdit={() => {
            setEditingEmployee(null); 
            setShowEditForm(false);
          }} 
          />
        }
        </>
    );
}

export default OrgChart;
