import React, { useRef } from "react";
import { OrganizationChart } from "primereact/organizationchart";
import useEmployeeNode from "../EmployeeNode/useEmployeeNode";
import useZoomAndPan from "../../hooks/useZoomAndPan";
import EmployeeForm from "../AddEmployee/AddEmployee";
import EditEmployeeForm from "../EditEmployeeForm/EditEmployeeForm";
import "./OrgChart.styles.scss";

function OrgChart() {
  const orgChartRef = useRef(null); // Create a ref for the organization chart
  useZoomAndPan(orgChartRef);

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
      <div ref={orgChartRef}>
        {" "}
        {/* Apply the ref to a container element */}
        {data.length > 0 ? (
          <OrganizationChart value={data} nodeTemplate={nodeTemplate} />
        ) : (
          <div>Loading organization chart...</div> // Placeholder for loading state
        )}
      </div>
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
          onEditEmployee={handleEditEmployee}
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
