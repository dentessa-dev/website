const technologies = [
	{
		title: "AI TREATMENT PLANNING",
		description: "Advanced algorithms analyze bone density, nerve pathways, and optimal positioning for precise implant placement.",
		stat: "95%",
		statLabel: "SUCCESS RATE",
	},
	{
		title: "QUICK LOADING PROTOCOLS",
		description: "Revolutionary techniques allow same-day implant and temporary restoration placement, minimizing downtime.",
		stat: "24HR",
		statLabel: "SAME DAY",
	},
	{
		title: "3D DIAGNOSTICS",
		description: "State-of-the-art CBCT scanning and intraoral scanners provide detailed models for predictable outcomes.",
		stat: "3D",
		statLabel: "IMAGING",
	},
];

export default function TechnologySection() {
	return (
		<section id="technology" className="bg-white py-16 lg:py-20">
			<div className="w-full max-w-6xl mx-auto px-8">
				{/* Header */}
				<div className="text-center mb-12 scroll-animate">
					<h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6 tracking-wide">
						AI DRIVEN PRECISION
					</h2>
					<hr className="w-32 border-gray-300 mx-auto mb-6" />
					<p className="text-xl text-gray-600 font-light leading-relaxed max-w-2xl mx-auto">
						Cutting-edge technology meets expert craftsmanship for optimal results
					</p>
				</div>

				{/* Technology Grid */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 scroll-animate">
					{technologies.map((tech, index) => (
						<div key={index} className="bg-gray-50 rounded-xl p-8 border border-gray-200 text-center hover:shadow-lg transition-shadow duration-300">
							<div className={`w-20 h-20 ${index % 2 === 0 ? 'bg-brand-blue' : 'bg-brand-green'} rounded-full flex items-center justify-center mx-auto mb-6`}>
								<span className="text-2xl font-light text-white">{tech.stat}</span>
							</div>
							<div className="text-xs text-gray-500 tracking-wide mb-4">{tech.statLabel}</div>
							<h3 className="text-lg font-medium tracking-wide mb-4 text-gray-800">
								{tech.title}
							</h3>
							<p className="text-gray-600 text-sm leading-relaxed font-light">
								{tech.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
