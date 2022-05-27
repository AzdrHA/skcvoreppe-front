import {degrees, PDFDocument, rgb, StandardFonts} from 'pdf-lib';

export async function modifyPdf(text: string = 't') {
  const url = 'https://pdf-lib.js.org/assets/with_update_sections.pdf';
  const existingPdfBytes = await fetch(url).then((res) => res.arrayBuffer());

  const pdfDoc = await PDFDocument.load(existingPdfBytes);
  const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

  const pages = pdfDoc.getPages();
  const firstPage = pages[0];
  const {width, height} = firstPage.getSize();
  firstPage.drawText(text, {
    x: 5,
    y: height / 2 + 300,
    size: 50,
    font: helveticaFont,
    color: rgb(0.95, 0.1, 0.1),
  });

  return await pdfDoc.save();
}
