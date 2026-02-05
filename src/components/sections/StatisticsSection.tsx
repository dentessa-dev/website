const stats = [
	{
		target: 500,
		label: "SUCCESSFUL SURGERIES",
		sublabel: "Complex implant procedures",
		color: "brand-blue",
	},
	{
		target: 11,
		label: "YEARS EXPERIENCE",
		sublabel: "Dedicated dental care",
		color: "brand-green",
	},
	{
		target: 70,
		label: "VOLUNTEER IMPLANTS",
		sublabel: "For underprivileged patients",
		color: "brand-blue",
	},
	{
		target: 5000,
		label: "PATIENTS TREATED",
		sublabel: "Dedicated dental care",
		color: "brand-green",
	},
	{
		label: "MINIMAL WAITING TIME",
		sublabel: "Dedicated dental care",
		color: "brand-green",
	},
	{
		target: 2500,
		label: "ROOT CANALS TREATED",
		sublabel: "Dedicated dental care",
		color: "brand-green",
	},
];

export default function StatisticsSection() {
	return (
		<section className="bg-white py-16 lg:py-20">
			<div className="w-full max-w-6xl mx-auto px-8">
				{/* Header */}
				<div className="text-center mb-12 scroll-animate">
					<h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6 tracking-wide">
						PROVEN EXCELLENCE
					</h2>
					<hr className="w-32 border-gray-300 mx-auto mb-6" />
					<p className="text-xl text-gray-600 font-light leading-relaxed max-w-2xl mx-auto">
						Numbers that speak for our commitment to exceptional
						dental care
					</p>
				</div>

				{/* Stats Grid */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 scroll-animate">
					{stats.map((stat, index) => (
						<div
							key={index}
							className="bg-gray-50 rounded-xl p-8 border border-gray-200 text-center hover:shadow-lg transition-shadow duration-300"
						>
							<div
								className={`w-16 h-16 ${stat.color === "brand-blue" ? "bg-brand-blue" : "bg-brand-green"} rounded-full flex items-center justify-center mx-auto mb-4`}
							>
								<svg
									className="w-8 h-8 text-white"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={1.5}
										d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
							</div>
							<div
								className={`text-4xl font-light ${stat.color === "brand-blue" ? "text-brand-blue" : "text-brand-green"} mb-2 counter-animate`}
								data-target={stat.target}
							>
								0+
							</div>
							<div className="text-gray-800 text-sm font-medium tracking-wide mb-1">
								{stat.label}
							</div>
							<div className="text-gray-500 text-xs font-light">
								{stat.sublabel}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
