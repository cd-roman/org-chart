import React, { useState, useEffect, useRef } from "react";
import { OrganizationChart } from "primereact/organizationchart";
import useEmployeeNode from "../EmployeeNode/useEmployeeNode";
import useZoomAndPan from "../../hooks/useZoomAndPan";
import EmployeeForm from "../AddEmployee/AddEmployee";
import EditEmployeeForm from "../EditEmployeeForm/EditEmployeeForm";
import OrgChartControls from "../OrgChartControls/OrgChartControls";
import Spinner from "../Spinner/Spinner";
import {
  downloadOrgChartAsPDF,
  downloadOrgChartAsImage,
} from "../../utils/orgChartDownloadUtils";
import "./OrgChart.styles.scss";
import { OrgChartWorkspace, OrgChartContainer, StyledOrgChart } from "./OrgChart.styles";

const OrgChart: React.FC = () => {
  const orgChartRef = useRef<HTMLDivElement>(null); // Create a ref for the organization chart
  const { zoomIn, zoomOut, setZoom, resetZoom } = useZoomAndPan(orgChartRef);
  const [isChartVisible, setIsChartVisible] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsChartVisible(true);
    }, 200);

    return () => clearTimeout(timeoutId);
  }, []);

  const {
    data,
    nodeTemplate,
    showAddForm,
    onAddEmployee,
    setShowAddForm,
    editingEmployee,
    showEditForm,
    setShowEditForm,
    handleEditEmployee,
  } = useEmployeeNode();

  return (
    <OrgChartWorkspace>
      <OrgChartControls
        onDownloadPDF={() => downloadOrgChartAsPDF(resetZoom, setZoom)}
        onDownloadImage={() => downloadOrgChartAsImage(resetZoom, setZoom)}
        onZoomIn={zoomIn}
        onZoomOut={zoomOut}
      />
      <OrgChartContainer ref={orgChartRef}>
        {data.length > 0 && isChartVisible ? (
          <StyledOrgChart>
            <OrganizationChart
              value={data}
              nodeTemplate={nodeTemplate}
              className={isChartVisible ? "orgchart-visible" : "orgchart-hidden"}
            />
          </StyledOrgChart>
        ) : (
          <Spinner />
        )}
      </OrgChartContainer>
      {showAddForm && (
        <EmployeeForm
          onAddEmployee={onAddEmployee}
          onCancel={() => setShowAddForm(false)}
        />
      )}
      {showEditForm && editingEmployee && (
        <EditEmployeeForm
          employee={editingEmployee}
          onEditEmployee={handleEditEmployee}
          onCancelEdit={() => {
            setShowEditForm(false);
          }}
        />
      )}
    </OrgChartWorkspace>
  );
}

export default OrgChart;