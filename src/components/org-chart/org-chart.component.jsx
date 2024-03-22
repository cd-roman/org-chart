import React from 'react';
import { OrganizationChart } from 'primereact/organizationchart';
import EmployeeNode from '../employee-node/employee-node.component';
import EmployeeForm from '../add-employee/add-employee.component';
import './org-chart.styles.scss';

function OrgChart () {
    const { data, nodeTemplate, showForm, onAddEmployee, setShowForm } = EmployeeNode();
    
    return (
        <>
        <OrganizationChart value={data} nodeTemplate={nodeTemplate} />
        {showForm && <EmployeeForm onAddEmployee={onAddEmployee} onCancel={() => setShowForm(false)} />}
        </>
    );
}

export default OrgChart;