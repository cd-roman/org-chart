import React, { useState, useEffect, useRef, Suspense } from "react";
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
import { OrgChartWorkspace, OrgChartContainer, StyledOrgChart, ResponsiveMessageContainer, ResponsiveMessage } from "./OrgChart.styles";

const LazyOrgChart = React.lazy(() => import('./OrganizationChartWrapper'));

const OrgChart: React.FC = () => {
  const orgChartRef = useRef<HTMLDivElement>(null); // Create a ref for the organization chart
  const { zoomIn, zoomOut, setZoom, resetZoom, handleCenterClick } = useZoomAndPan(orgChartRef);
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
    <>
      <OrgChartWorkspace>
        <OrgChartControls
          onDownloadPDF={() => downloadOrgChartAsPDF(resetZoom, setZoom)}
          onDownloadImage={() => downloadOrgChartAsImage(resetZoom, setZoom)}
          onZoomIn={zoomIn}
          onZoomOut={zoomOut}
          onCenterClick={handleCenterClick}
        />
        <OrgChartContainer ref={orgChartRef}>
          {data.length > 0 && isChartVisible ? (
            <StyledOrgChart>
              <Suspense fallback={<Spinner />}>
                <LazyOrgChart value={data}
                nodeTemplate={nodeTemplate}/>
              </Suspense>
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
      <ResponsiveMessageContainer>
        <ResponsiveMessage>
          This org chart app is not supported on mobile devices. 
          For the best experience, please view it on a larger screen with a width of at least 1000px.
        </ResponsiveMessage>
      </ResponsiveMessageContainer>
    </>
  );
}

export default OrgChart;