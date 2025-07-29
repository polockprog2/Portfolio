import React from "react";
import { useFadeInOnScroll } from "../utils/animations";

const projects = [
	{
		name: "Corporate Calendar System",
		description:
			"React.js + Django-based team calendar and task manager with MySQL.",
		link: "https://github.com/polockprog2/Corporate-Calendar",
		icon: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=80&q=80",
	},
	{
		name: "QA Automation",
		description:
			"Automated end-to-end testing suite for web applications using Selenium and Cypress.",
		link: "https://github.com/polockprog2/QA-Automation-testing-using-Selenium-tool",
		icon: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=80&q=80",
	},
	{
		name: "RestGuy Management",
		description:
			"A modern restaurant management platform for reservations, orders, and analytics.",
		link: "https://github.com/polockprog2/RestGuyManagement",
		icon: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=80&q=80",
	},
	{
		name: "Recipe Classification (ML)",
		description:
			"Machine learning project for classifying recipes from ingredients.",
		link: "https://github.com/polockprog2/Recipe-Classification-from-ingredients-Machine-Learning-",
		icon: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=80&q=80",
	},
	{
		name: "Lung Cancer Detection (CNN)",
		description:
			"Deep learning project for lung cancer detection using CNN.",
		link: "https://github.com/polockprog2/Lung-Cancer-Detection-using-CNN-model-Machine-Learning",
		icon: "https://images.unsplash.com/photo-1511849047134-c1e0bdfb8dce?auto=format&fit=crop&w=80&q=80",
	},
];

const RecentProjects = () => {
	const fadeRef = useFadeInOnScroll();
	return (
		<section className="mt-16" ref={fadeRef}>
			<div className="mb-10 text-center">
				<h2 className="text-4xl md:text-5xl font-extrabold text-cyan-400 mb-2 tracking-tight">
					Recent Projects
				</h2>
				<p className="text-gray-400 text-lg max-w-2xl mx-auto">
					Explore some of my latest work in web, automation, and machine
					learning. Click any card to view the code on GitHub.
				</p>
			</div>
			<div className="flex flex-col gap-6">
				{projects.map((p, idx) => (
					<a
						key={idx}
						href={p.link}
						target="_blank"
						rel="noopener noreferrer"
						className="group bg-[#181513] hover:bg-cyan-950/60 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-cyan-900/40 hover:border-cyan-400 flex flex-row items-center hover:-translate-y-1 focus:ring-2 focus:ring-cyan-400 outline-none"
						title={`View ${p.name} on GitHub`}
						tabIndex={0}
					>
						<div className="w-20 h-20 rounded-xl overflow-hidden shadow-lg mr-6 border-2 border-cyan-700 group-hover:border-cyan-400 group-hover:scale-105 transition-transform duration-200 bg-[#23201c] flex-shrink-0">
							<img
								src={p.icon}
								alt={p.name}
								className="w-full h-full object-cover"
							/>
						</div>
						<div className="flex-1 flex flex-col justify-center">
							<div className="text-lg font-bold text-cyan-200 mb-1 group-hover:text-cyan-400 transition-colors duration-200">
								{p.name}
							</div>
							<div className="text-sm text-gray-300 mb-2">
								{p.description}
							</div>
							<span className="inline-flex items-center gap-1 text-cyan-400 font-semibold text-sm group-hover:underline mt-1">
								View on GitHub
								<svg
									width="18"
									height="18"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									className="inline-block"
								>
									<path d="M5 12l7-7M12 5h-7v7" />
								</svg>
							</span>
						</div>
					</a>
				))}
			</div>
		</section>
	);
};

export default RecentProjects;
