import Image from "next/image";

const services = [
	{
		title: "Single Implants",
		description:
			"Individual tooth replacement with natural-looking crowns.",
		image: "/single_implants.jpg",
	},
	{
		title: "All-on-X",
		description: "Full arch restoration with just 4-6 implants.",
		image: "/all_on_x.jpg",
	},
	{
		title: "Zygomatic and Pterygoid Implants",
		description: "Advanced solution for severe bone loss cases.",
		image: "/zygomatic_and_pterygoid_implants.jpg",
	},
	{
		title: "Bone Grafting and sinus lift",
		description: "Building strong foundations for successful implants.",
		image: "/bone_grafting_and_sinus_lift.jpg",
	},
	{
		title: "Immediate Loading",
		description: "Same-day implants and temporary teeth.",
		image: "/immediate_loading.jpg",
	},
	{
		title: "Guided Surgery",
		description: "AI-powered precision for optimal placement.",
		image: "/guided_surgery.jpg",
	},
];

export default function ServicesSection() {
	return (
		<section id="services" className="py-12 lg:py-20 bg-brand-navy">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
					{/* Left - Header */}
					<div className="scroll-animate">
						<p className="text-brand-blue text-sm font-semibold tracking-widest uppercase mb-4">
							Our Services
						</p>
						<h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
							Implant Specialities
						</h2>
						<p className="text-white/70 text-lg leading-relaxed">
							From single tooth replacement to complete oral
							rehabilitation — advanced solutions tailored to your
							needs.
						</p>
					</div>

					{/* Right - Services Grid */}
					<div className="grid grid-cols-2 gap-4 lg:gap-6 scroll-animate">
						{services.map((service, index) => (
							<div
								key={index}
								className="overflow-hidden bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
							>
								<Image
									src={service.image}
									alt={`${service.title} dental service`}
									width={600}
									height={360}
									className="h-28 w-full object-cover lg:h-36"
								/>
								<div className="p-4 lg:p-6">
									<h3 className="font-semibold text-white text-sm lg:text-base mb-2">
										{service.title}
									</h3>
									<p className="text-white/60 text-xs lg:text-sm leading-relaxed">
										{service.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
