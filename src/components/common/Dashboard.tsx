import { Link, Outlet } from "react-router-dom";

function Dashboard() {
	return (
		<div className="flex h-screen w-screen">
			<div className="flex flex-col justify-between border-e bg-white w-72 fixed h-full">
				<div className="px-4 py-6">
					<ul className="mt-6 space-y-1">
						<li>
							<Link
								to="/portal-static-ts/"
								className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
							>
								General
							</Link>
						</li>

						<li>
							<details className="group [&_summary::-webkit-details-marker]:hidden">
								<summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
									<span className="text-sm font-medium"> Documents </span>

									<span className="shrink-0 transition duration-300 group-open:-rotate-180">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-5 w-5"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												fillRule="evenodd"
												d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
												clipRule="evenodd"
											/>
										</svg>
									</span>
								</summary>

								<ul className="mt-2 space-y-1 px-4">
									<li>
										<Link
											to="/portal-static-ts/documents/proposal"
											className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
										>
											Proposal
										</Link>
									</li>

									<li>
										<Link
											to="/portal-static-ts/documents/srs"
											className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
										>
											SRS
										</Link>
									</li>
								</ul>
							</details>
						</li>
						<li>
							<Link
								to="/portal-static-ts/team"
								className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
							>
								Team
							</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className="w-full ml-72">
				<Outlet />
			</div>
		</div>
	);
}

export default Dashboard;
