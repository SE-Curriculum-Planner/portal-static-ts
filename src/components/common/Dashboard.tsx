import { Outlet } from "react-router-dom";

function Dashboard() {
	return (
		<div className="flex h-screen w-screen">
			<div className="flex flex-col justify-between border-e bg-white w-72">
				<div className="px-4 py-6">
					<ul className="mt-6 space-y-1">
						<li>
							<a
								href=""
								className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
							>
								General
							</a>
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
										<a
											href=""
											className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
										>
											Proposal
										</a>
									</li>

									<li>
										<a
											href=""
											className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
										>
											SRS
										</a>
									</li>
								</ul>
							</details>
						</li>
						<li>
							<a
								href=""
								className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
							>
								Team
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="ml-2 w-full">
				<Outlet />
			</div>
		</div>
	);
}

export default Dashboard;
