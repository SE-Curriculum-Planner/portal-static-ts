import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

function Proposal() {
	const [numPages, setNumPages] = useState<number>(0);
	const [pageNumber, setPageNumber] = useState(1);
	function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
		setNumPages(numPages);
		setPageNumber(1);
	}

	const onPrevPage = () => {
		setPageNumber((prev) => (prev <= 1 ? 1 : prev - 1));
	};

	const onNextPage = () => {
		setPageNumber((prev) => (prev >= numPages ? numPages : prev + 1));
	};
	return (
		<div className="w-full mt-10">
			<div className="flex justify-center items-end gap-2 mb-2">
				<h2 className="text-slate-900 font-extrabold text-xl sm:text-2xl lg:text-3xl tracking-tight">
					Proposal Document
				</h2>
				<a
					href="https://se-curriculum-planner.github.io/portal-static-ts/files/proposal.pdf"
					target="_blank"
				>
					link
				</a>
			</div>

			<Document
				file="/portal-static-ts/files/proposal.pdf"
				className="w-full flex justify-center"
				onLoadSuccess={onDocumentLoadSuccess}
			>
				<Page
					pageNumber={pageNumber}
					scale={1}
					className="border-black border-2"
				/>
			</Document>

			<div className="flex justify-center gap-2 items-center mt-2">
				<button onClick={onPrevPage}>Prev</button>
				<p>
					Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
				</p>
				<button onClick={onNextPage}>Next</button>
			</div>
		</div>
	);
}

export default Proposal;
