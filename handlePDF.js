handlePDF = () => {
  let height = document.getElementById("pdf").height;

  if (height == 0) {
    document.getElementById("handlePDFButton").textContent = "Hide PDF";
    document.getElementById("pdf").height = 1200;
  } else {
    document.getElementById("handlePDFButton").textContent = "Show PDF";
    document.getElementById("pdf").height = 0;
  }
};
