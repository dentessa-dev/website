import Image from "next/image";

const rootCanalServices = [
	{
		title: "Diagnosis",
		description:
			"Comprehensive oral examination and diagnostic procedures for accurate treatment planning.",
		image: "/diagnosis.jpg",
	},
	{
		title: "Root Canals",
		description: "Expert endodontic treatment to save your natural teeth.",
		image: "/root_canals.jpg",
	},
	{
		title: "Crowns",
		description:
			"Custom-made dental crowns for restoration and protection.",
		image: "/crowns.jpg",
	},
	{
		title: "Extractions",
		description: "Gentle tooth removal procedures when necessary.",
		image: "/extractions.jpg",
	},
	{
		title: "TMJ Pain Treatment",
		description: "Specialized care for temporomandibular joint disorders.",
		image: "/tmj_pain_treatment.jpg",
	},
	{
		title: "Minor Oral Surgery",
		description: "Safe and effective minor surgical procedures.",
		image: "/minor_oral_surgery.jpg",
	},
	{
		title: "Esthetic Dentistry & Smile Designing",
		description:
			"Cosmetic treatments and complete smile makeovers to enhance your smile's appearance.",
		image: "/esthetic_dentistry_smile_designing.jpg",
	},
	{
		title: "Intra Oral Scanning",
		description:
			"Fully in-house intra oral scanner with cutting-edge technology to give you the best-fitting crowns and aligners.",
		image: "/intraoral_scanning.jpg",
	},
	{
		title: "Prosthetic Rehabilitation",
		description:
			"Restoration of function and aesthetics with prosthetic devices.",
		image: "/prosthetic_rehabilitation.jpg",
	},
	{
		title: "Complete Dentures",
		description:
			"Full mouth restoration with comfortable, natural-looking dentures.",
		image: "/complete_dentures.jpg",
	},
	{
		title: "Pediatric Dentistry",
		description: "Specialized dental care for children and adolescents.",
		image: "/pediatric_dentistry.jpg",
	},
	{
		title: "Geriatric Dentistry",
		description: "Comprehensive dental care tailored for elderly patients.",
		image: "/geriatric_dentistry.jpg",
	},
];

export default function RootCanalServicesSection() {
	return (
		<section id="root-canal-services" className="py-12 lg:py-20 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
					{/* Left - Header */}
					<div className="scroll-animate">
						<p className="text-brand-blue text-sm font-semibold tracking-widest uppercase mb-4">
							General Dental Services
						</p>
						<h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy leading-tight mb-6">
							Root Canals & General Dentistry
						</h2>
						<p className="text-gray-600 text-lg leading-relaxed">
							Comprehensive dental care with over 12 years of
							clinical experience, handling all general dentistry
							procedures and their complications with expertise.
						</p>
					</div>

					{/* Right - Services Grid */}
					<div className="grid grid-cols-2 gap-4 lg:gap-6 scroll-animate">
						{rootCanalServices.map((service, index) => (
							<div
								key={index}
								className="overflow-hidden bg-brand-navy/5 border border-brand-navy/10 hover:bg-brand-navy/10 transition-colors"
							>
								<Image
									src={service.image}
									alt={`${service.title} dental service`}
									width={600}
									height={360}
									className="h-28 w-full object-cover lg:h-36"
								/>
								<div className="p-4 lg:p-6">
									<h3 className="font-semibold text-brand-navy text-sm lg:text-base mb-2">
										{service.title}
									</h3>
									<p className="text-gray-600 text-xs lg:text-sm leading-relaxed">
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
