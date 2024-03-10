import { Injectable } from '@angular/core';
import { jsPDF } from 'jspdf';

@Injectable({
  providedIn: 'root',
})
export class PdfService {


  generatePdf(content: string): void {
    const pdf = new jsPDF();
    pdf.text(content, 10, 10);
    this.downloadPdf(pdf);
  }

  public downloadPdf(pdf: jsPDF): void {
    // Use type 'any' for 'output' and 'save' methods
    const pdfOutput: any = pdf.output();
    pdf.save('report.pdf');
  }

  printPdf(pdf: jsPDF): void {
    // Use type 'any' for 'output' method
    const pdfOutput: any = pdf.output();
    pdf.autoPrint();
    window.open(pdfOutput, '_blank');
  }
}
