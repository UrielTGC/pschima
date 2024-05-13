const form = document.getElementById('rentalForm');
const courts = document.getElementById('courts');
const pdfOutput = document.getElementById('pdfOutput');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const name = data.get('name');
  const email = data.get('email');
  const selectedCourts = Array.from(courts.selectedOptions).map(option => option.value);

  // Generate the invoice data based on the form data
  const invoiceData = {
    name,
    email,
    courts: selectedCourts,
    // Add more data as needed
  };

  // Generate the PDF using the invoice data
  generatePDF(invoiceData);
});

document.getElementById('generatePDF').addEventListener('click', () => {
  const invoiceData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    courts: ['court1', 'court2'],
    // Add more data as needed
  };
  generatePDF(invoiceData);
});

function generatePDF(invoiceData) {
  // Generate the PDF using the invoice data
  // You can use a library like jsPDF or html2pdf.js to generate the PDF
  // Here's an example using html2pdf.js:
  const opt = {
    margin: 1,
    filename: 'invoice.pdf',
    image: {type: 'jpeg', quality: 0.98},
    html2canvas: {scale: 2},
    jsPDF: {unit: 'in', format: 'letter', orientation: 'portrait'}
  };

  html2pdf().set(opt).from(document.getElementById('invoiceTemplate')).set(invoiceData).save();
}