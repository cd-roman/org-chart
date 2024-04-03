import html2canvas from "html2canvas";
import jsPDF from "jspdf";

// This function converts an image to Base64
const convertImageToBase64 = (
  img: HTMLImageElement,
  callback: (result: string | ArrayBuffer | null) => void
): void => {
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

const convertAllImagesToBase64 = (
  container: HTMLElement,
  callback: () => void
): void => {
  const images = container.getElementsByTagName("img");
  let imagesToLoad = images.length;

  if (imagesToLoad === 0) {
    callback(); // If there are no images, immediately invoke the callback
    return;
  }

  Array.from(images).forEach((img) => {
    convertImageToBase64(img, (base64) => {
      img.src = base64 as string;
      imagesToLoad -= 1;
      if (imagesToLoad === 0) {
        callback(); // Invoke the callback when all images are converted
      }
    });
  });
};

export const downloadOrgChartAsPDF = async (
  resetZoom: () => number,
  setZoom: (newScale: number) => void
): Promise<void> => {
  const orgChartElement = document.querySelector(
    ".p-organizationchart-table"
  ) as HTMLElement;

  if (!orgChartElement) {
    return;
  }

  // Save the current zoom level and reset to initial state
  const currentZoom = resetZoom();

  // First convert all images within the org chart to Base64
  convertAllImagesToBase64(orgChartElement, async () => {
    // Once conversion is done, capture the chart using html2canvas
    const canvas = await html2canvas(orgChartElement, {
      useCORS: true,
      allowTaint: true,
    });
    const imgData = canvas.toDataURL("image/jpeg", 1);

    // Restore the zoom level
    setZoom(currentZoom);

    // Determine the orientation based on the aspect ratio of the orgChartElement
    const orientation =
      orgChartElement.offsetWidth > orgChartElement.offsetHeight
        ? "landscape"
        : "portrait";

    // Create a new jsPDF instance
    const pdf = new jsPDF(orientation, undefined, "a4");

    // Calculate the width and height that maintains the aspect ratio of the original image
    const aspectRatio = canvas.width / canvas.height;
    let pdfWidth = pdf.internal.pageSize.getWidth();
    let pdfHeight = pdf.internal.pageSize.getHeight();
    if (pdfWidth / aspectRatio > pdfHeight) {
      pdfWidth = pdfHeight * aspectRatio;
    } else {
      pdfHeight = pdfWidth / aspectRatio;
    }

    // Add the image to the PDF
    pdf.addImage(imgData, "JPEG", 0, 0, pdfWidth, pdfHeight);

    // Save the PDF
    pdf.save("OrgChart.pdf");
  });
};

export const downloadOrgChartAsImage = async (
  resetZoom: () => number,
  setZoom: (newScale: number) => void
): Promise<void> => {
  const orgChartElement = document.querySelector(
    ".p-organizationchart-table"
  ) as HTMLElement;

  if (!orgChartElement) {
    return;
  }

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
      .toDataURL("image/jpeg", 1)
      .replace("image/jpeg", "image/octet-stream");
    const link = document.createElement("a");
    link.download = "OrgChart.jpeg";
    link.href = image;
    link.click();
  });
};
