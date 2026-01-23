const treatmentSteps = [
	{ title: "CONSULTATION", description: "Comprehensive assessment and 3D imaging", color: "brand-blue" },
	{ title: "AI PLANNING", description: "Precision treatment planning with AI", color: "brand-green" },
	{ title: "SURGERY", description: "Minimally invasive guided surgery", color: "brand-blue" },
	{ title: "RESTORATION", description: "Final prosthetic and follow-up care", color: "brand-green" },
];

export default function AdvancedProceduresSection() {
	return (
		<section className="bg-brand-navy py-16 lg:py-20">
			<div className="w-full max-w-6xl mx-auto px-8">
				{/* Header */}
				<div className="text-center mb-12 scroll-animate">
					<h2 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-wider">
						ADVANCED PROCEDURES
					</h2>
					<hr className="w-32 border-white/40 mx-auto mb-6" />
					<p className="text-xl text-white/80 font-light max-w-3xl mx-auto leading-relaxed">
						Cutting-edge treatments for complex cases and comprehensive oral rehabilitation
					</p>
				</div>

				{/* Procedure Cards */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
					{/* Full Mouth Restoration */}
					<div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 scroll-animate">
						<div className="flex items-center mb-6">
							<div className="w-14 h-14 bg-brand-blue rounded-full flex items-center justify-center mr-4">
								<svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
								</svg>
							</div>
							<div>
								<h3 className="text-xl font-light tracking-wider text-white">FULL-MOUTH RESTORATION</h3>
								<p className="text-white/60 text-sm font-light">Complete oral rehabilitation</p>
							</div>
						</div>
						<p className="text-white/70 leading-relaxed font-light mb-6">
							Transform your entire smile with comprehensive full-mouth implant restoration using AI-guided precision.
						</p>
						<div className="grid grid-cols-3 gap-4">
							<div className="text-center">
								<div className="text-2xl font-light text-brand-blue mb-1">24HR</div>
								<div className="text-xs text-white/50">SAME DAY</div>
							</div>
							<div className="text-center">
								<div className="text-2xl font-light text-brand-blue mb-1">95%</div>
								<div className="text-xs text-white/50">SUCCESS</div>
							</div>
							<div className="text-center">
								<div className="text-2xl font-light text-brand-blue mb-1">AI</div>
								<div className="text-xs text-white/50">GUIDED</div>
							</div>
						</div>
					</div>

					{/* Complex Cases */}
					<div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 scroll-animate">
						<div className="flex items-center mb-6">
							<div className="w-14 h-14 bg-brand-green rounded-full flex items-center justify-center mr-4">
								<svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
								</svg>
							</div>
							<div>
								<h3 className="text-xl font-light tracking-wider text-white">COMPLEX CASES</h3>
								<p className="text-white/60 text-sm font-light">Advanced surgical solutions</p>
							</div>
						</div>
						<p className="text-white/70 leading-relaxed font-light mb-6">
							Specialized treatment for challenging cases including severe bone loss and complex anatomical considerations.
						</p>
						<div className="grid grid-cols-3 gap-4">
							<div className="text-center">
								<div className="text-2xl font-light text-brand-green mb-1">3D</div>
								<div className="text-xs text-white/50">PLANNING</div>
							</div>
							<div className="text-center">
								<div className="text-2xl font-light text-brand-green mb-1">NO</div>
								<div className="text-xs text-white/50">GRAFTING</div>
							</div>
							<div className="text-center">
								<div className="text-2xl font-light text-brand-green mb-1">SAFE</div>
								<div className="text-xs text-white/50">SURGERY</div>
							</div>
						</div>
					</div>
				</div>

				{/* Treatment Journey */}
				<div className="bg-white/5 rounded-xl p-8 border border-white/10 scroll-animate">
					<h3 className="text-2xl font-light text-center mb-10 tracking-wider text-white">
						TREATMENT JOURNEY
					</h3>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
						{treatmentSteps.map((step, index) => (
							<div key={index} className="text-center">
								<div className={`w-14 h-14 ${step.color === 'brand-blue' ? 'bg-brand-blue' : 'bg-brand-green'} rounded-full mx-auto mb-3 flex items-center justify-center`}>
									<span className="text-xl font-light text-white">{index + 1}</span>
								</div>
								<h4 className="text-sm font-medium mb-1 tracking-wide text-white">{step.title}</h4>
								<p className="text-white/60 text-xs font-light">{step.description}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
