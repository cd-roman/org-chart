import html2canvas from "html2canvas";
import jsPDF from "jspdf";

// This function converts an image to Base64
const convertImageToBase64 = (img, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.onload = function () {
    const reader = new FileReader();
    reader.onloadend = function () {
      callback(reader.result);
    };
    reader.readAsDataURL(xhr.response);
  };
  xhr.open("GET", img.src);
  xhr.responseType = "blob";
  xhr.send();
};

const convertAllImagesToBase64 = (container, callback) => {
  const images = container.getElementsByTagName("img");
  let imagesToLoad = images.length;

  if (imagesToLoad === 0) {
    callback(); // If there are no images, immediately invoke the callback
    return;
  }

  Array.from(images).forEach((img) => {
    convertImageToBase64(img, (base64) => {
      img.src = base64;
      imagesToLoad -= 1;
      if (imagesToLoad === 0) {
        callback(); // Invoke the callback when all images are converted
      }
    });
  });
};

export const downloadOrgChartAsPDF = async (resetZoom, setZoom) => {
  const orgChartElement = document.querySelector(".p-organizationchart-table");

  // Save the current zoom level and reset to initial state
  const currentZoom = resetZoom();

  // First convert all images within the org chart to Base64
  convertAllImagesToBase64(orgChartElement, async () => {
    // Once conversion is done, capture the chart using html2canvas
    const canvas = await html2canvas(orgChartElement, {
      useCORS: true,
      allowTaint: true,
    });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF({
      orientation: "landscape",
    });

    // Restore the zoom level
    setZoom(currentZoom);

    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("OrgChart.pdf");
  });
};

export const downloadOrgChartAsImage = async (resetZoom, setZoom) => {
  const orgChartElement = document.querySelector(".p-organizationchart-table"); // Specify the exact container

  // Save the current zoom level and reset to initial state
  const currentZoom = resetZoom();

  // First convert all images within the org chart to Base64
  convertAllImagesToBase64(orgChartElement, async () => {
    // Once conversion is done, capture the chart using html2canvas
    const canvas = await html2canvas(orgChartElement, {
      useCORS: true,
      allowTaint: true,
    });

    // Restore the zoom level
    setZoom(currentZoom);

    const image = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    const link = document.createElement("a");
    link.download = "OrgChart.png";
    link.href = image;
    link.click();
  });
};
