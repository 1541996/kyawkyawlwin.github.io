import printHtmlToPDF from "print-html-to-pdf";

const printButton = document.getElementById("print-button");
printButton.addEventListener("click", async (event) => {
  const node = document.getElementById("print-me");
  const pdfOption = {
     jsPDF: {
       unit: 'px',
       format: 'a4',
     },
      spin: false,
      fileName: 'default'
   }

  await printHtmlToPDF.print(node, pdfOption);
});