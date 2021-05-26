import express from 'express';
import { pipeline } from 'stream';
import { generatePDFStream } from '../lib/pdf.js';

const blogsRouter = express.Router();

// import { getBlogs } from '../lib/fs-tools.js';

blogsRouter.get('/pdfDownload', async (req, res, next) => {
	try {
		const source = generatePDFStream();
		const destination = res;
		res.setHeader('Content-Disposition', 'attachment; filename=read.pdf');
		pipeline(source, destination, (err) => next(err));
	} catch (error) {
		next(error);
	}
});
export default blogsRouter;
