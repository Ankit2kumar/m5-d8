import PdfPrinter from 'pdfmake';

export const generatePDFStream = (data) => {
	const fonts = {
		Roboto: {
			normal: 'Helvetica',
			bold: 'Helvetica-Bold',
			italics: 'Helvetica-Oblique',
			bolditalics: 'Helvetica-BoldOblique',
		},
	};

	const printer = new PdfPrinter(fonts);

	const docDefinition = {
		content: [' Lets assume Some TEXT here...'],
	};

	// const options = {
	// 	// ...
	// };

	const pdfReadableStream = printer.createPdfKitDocument(
		docDefinition
		// options
	);
	pdfReadableStream.end();

	return pdfReadableStream;
};
