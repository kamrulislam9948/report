import { Component, ElementRef, ViewChild } from '@angular/core';
import { PdfService } from 'src/service/pdf.service';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private pdfService: PdfService) {}

  generatePdfContent(): any {
    // Replace this with the actual content of your PDF report
    return 'This is your PDF report content.';
  }

  generatePdf(): void {
    const pdfContent = this.generatePdfContent();
    this.pdfService.generatePdf(pdfContent);
  }

  downloadPdf(): void {
    const pdfContent = this.generatePdfContent();
    const pdf = new jsPDF();
    pdf.text(pdfContent, 10, 10);
    this.pdfService.downloadPdf(pdf);
  }

  printPdf(): void {
    const pdfContent = this.generatePdfContent();
    const pdf = new jsPDF();
    pdf.text(pdfContent, 10, 10);
    this.pdfService.printPdf(pdf);
  }
}
