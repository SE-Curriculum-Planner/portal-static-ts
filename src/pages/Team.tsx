import axios from "axios";
import { useEffect, useState } from "react";

function Team() {
	const [members, setMembers] = useState<Member[]>([]);
	useEffect(() => {
		axios.get("/portal-static-ts/data/team.json").then((data) => {
			setMembers(data.data.team["7gods"]);
		});
	}, []);
	console.log(members);

	return (
		<div className="w-full p-10">
			<div className="flex justify-center items-center gap-2 mb-2 flex-col">
				<h2 className="text-slate-900 font-extrabold text-xl sm:text-2xl lg:text-3xl tracking-tight">
					Team
				</h2>
				<div className="mt-12 grid grid-cols-2 gap-2 text-left w-full">
					{members.map((member) => (
						<article className="rounded-xl border border-gray-700 bg-gray-800 p-4">
							<div className="flex items-center gap-4">
								<img
									alt="Developer"
									src="https://images.unsplash.com/photo-1614644147724-2d4785d69962?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
									className="h-16 w-16 rounded-full object-cover"
								/>

								<div>
									<div className="flex gap-2 items-center">
										<h3 className="text-lg font-medium text-white">
											{member.name_en}
										</h3>
										{member.roles.core.map((role) => (
											<span className="whitespace-nowrap rounded-full bg-purple-100 px-1.5 text-sm text-purple-700">
												{role}
											</span>
										))}
									</div>
									<h5 className="text-sm font-medium text-white">
										{member.student_code}
									</h5>

									<div className="flow-root">
										<ul className="-m-1 flex flex-wrap">
											<li className="p-1 leading-none">
												<a
													href={`https://github.com/${member.contacts.github}`}
													className="text-xs font-medium text-gray-300"
												>
													{" "}
													GitHub{" "}
												</a>
											</li>

											<li className="p-1 leading-none">
												<a
													href={`mailto:${member.contacts.email}`}
													className="text-xs font-medium text-gray-300"
												>
													{" "}
													Email{" "}
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>

							<div className="mt-4">
								<strong className="font-medium text-white">
									Qualification
								</strong>

								<p className="mt-1 text-xs font-medium text-gray-300">
									{member.qualification}
								</p>
							</div>
						</article>
					))}
				</div>
			</div>
		</div>
	);
}

export default Team;
