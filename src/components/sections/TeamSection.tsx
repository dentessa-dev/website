const teamMembers = [
	{
		name: "Dr. Mohammed Salman",
		title: "Periodontist",
		qualifications: "BDS, MDS - Periodontics",
		experience: "13 years experience",
		image: "/salman.jpeg",
		specialties: [
			"TMJ Disorders",
			"Periodontal Treatment",
			"Dental Implants",
			"Major Maxillofacial Surgeries",
			"Minor Oral Surgery",
			"Fracture of Jaws",
			"Benign Tumor Management",
			"Scar Revisions",
			"Facial Lacerations",
			"Cosmetic Repair",
		],
		description:
			"Specialized periodontist with extensive experience in gum disease treatment, dental implants, and oral surgery procedures.",
	},
	{
		name: "Dr. Milana",
		title: "General Dentist",
		qualifications: "BDS",
		experience: "16 years experience",
		image: "/milano.jpeg",
		specialties: [
			"Fixed Prosthodontics",
			"Tooth Reshaping",
			"Laser Dentistry",
			"General Dental Care",
			"Preventive Dentistry",
			"Restorative Dentistry",
		],
		description:
			"Experienced general dentist specializing in prosthodontics, laser dentistry, and comprehensive dental care.",
	},
	{
		name: "Dr. Subash Gotla",
		title: "Orthodontist",
		qualifications: "BDS, MDS - Orthodontics",
		experience: "12 years experience",
		image: "/subhash.jpeg",
		specialties: [
			"Traditional Braces",
			"Invisalign Provider",
			"Digital Corrections",
			"Growth Modifications",
			"Interdisciplinary Treatments",
			"Orthognathic Surgical Cases",
			"Pediatric Orthodontics",
			"Adult Orthodontics",
			"Myofunctional Therapy",
			"Fixed Orthodontics",
		],
		description:
			"Comprehensive orthodontic specialist with 12 years of experience delivering orthodontic care to pediatric and adult patients. Treated more than 3000+ cases of fixed orthodontics and myofunctional therapy. Invisalign certified doctor with expertise in traditional braces, digital corrections, and growth modifications.",
	},
];

export default function TeamSection() {
	return (
		<section id="team" className="py-12 lg:py-20 bg-gray-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<div className="text-center mb-12 lg:mb-16 scroll-animate">
					<p className="text-brand-blue text-sm font-semibold tracking-widest uppercase mb-4">
						Our Team
					</p>
					<h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy leading-tight mb-6">
						Meet Our Experienced Doctors
					</h2>
					<p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
						Our clinic is home to a team of highly qualified dental
						professionals, each bringing years of specialized
						experience to provide you with comprehensive dental
						care.
					</p>
				</div>

				{/* Team Members Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
					{teamMembers.map((member, index) => (
						<div
							key={index}
							className="bg-white border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 scroll-animate"
						>
							{/* Image Section */}
							<div className="flex justify-center pt-8 pb-4">
								<div className="relative w-48 h-48 lg:w-56 lg:h-56">
									<img
										src={member.image}
										alt={member.name}
										className="w-full h-full object-cover object-top rounded-full border-4 border-white shadow-lg"
									/>
									<div className="absolute inset-0 bg-linear-to-t from-brand-navy/10 to-transparent rounded-full"></div>
								</div>
							</div>

							{/* Content Section */}
							<div className="p-6 lg:p-8">
								<div className="mb-4">
									<h3 className="font-display text-2xl lg:text-3xl font-bold text-brand-navy mb-2">
										{member.name}
									</h3>
									<p className="text-brand-blue font-semibold text-lg mb-1">
										{member.title}
									</p>
									<p className="text-brand-green font-medium text-base mb-2">
										{member.qualifications}
									</p>
									<p className="text-gray-500 text-sm">
										{member.experience}
									</p>
								</div>

								<p className="text-gray-600 text-base leading-relaxed mb-6">
									{member.description}
								</p>

								{/* Specialties */}
								<div>
									<h4 className="font-semibold text-brand-navy text-base mb-3">
										Specialties:
									</h4>
									<div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
										{member.specialties
											.slice(0, 6)
											.map((specialty, specIndex) => (
												<div
													key={specIndex}
													className="flex items-start gap-2"
												>
													<span className="w-1.5 h-1.5 bg-brand-blue rounded-full mt-2 shrink-0"></span>
													<span className="text-gray-700 text-sm">
														{specialty}
													</span>
												</div>
											))}
									</div>
									{member.specialties.length > 6 && (
										<p className="text-brand-blue text-sm mt-2 font-medium">
											+{member.specialties.length - 6}{" "}
											more specialties
										</p>
									)}
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Call to Action */}
				<div className="text-center mt-12 lg:mt-16 scroll-animate">
					<p className="text-gray-600 text-lg mb-6">
						Schedule a consultation with any of our experienced
						doctors
					</p>
					<a
						href="#appointments"
						className="inline-flex items-center px-8 py-3 bg-brand-blue text-white font-semibold hover:bg-brand-blue/90 transition-colors"
					>
						Book Appointment
						<svg
							className="ml-2 w-4 h-4"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M9 5l7 7-7 7"
							/>
						</svg>
					</a>
				</div>
			</div>
		</section>
	);
}
