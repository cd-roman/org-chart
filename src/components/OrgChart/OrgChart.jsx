import React, { useRef } from "react";
import { OrganizationChart } from "primereact/organizationchart";
import useEmployeeNode from "../EmployeeNode/useEmployeeNode";
import useZoomAndPan from "../../hooks/useZoomAndPan";
import EmployeeForm from "../AddEmployee/AddEmployee";
import EditEmployeeForm from "../EditEmployeeForm/EditEmployeeForm";
import ZoomControls from "../ZoomControls/ZoomControls";
import "./OrgChart.styles.scss";

function OrgChart() {
  const orgChartRef = useRef(null); // Create a ref for the organization chart
  const { zoomIn, zoomOut } = useZoomAndPan(orgChartRef);

  const {
    data,
    nodeTemplate,
    showAddForm,
    onAddEmployee,
    setShowAddForm,
    editingEmployee,
    setEditingEmployee,
    showEditForm,
    setShowEditForm,
    handleEditEmployee,
  } = useEmployeeNode();

  return (
    <>
      <ZoomControls onZoomIn={zoomIn} onZoomOut={zoomOut} />
      <div ref={orgChartRef}>
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
