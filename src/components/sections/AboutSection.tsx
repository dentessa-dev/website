export default function AboutSection() {
	return (
		<section id="about" className="py-12 lg:py-20 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

					{/* Image - Shows second on mobile, first on desktop */}
					<div className="order-2 lg:order-1 scroll-animate">
						<div className="relative mx-4 lg:mx-0">
							<img
								src="https://media.licdn.com/dms/image/v2/D5603AQFVjy4Lc4a8NA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1699522182410?e=1770854400&v=beta&t=dsp1GqQZjYNZSYK89dmXV6mGaUuSSi6fGqhRiVy5T5s"
								alt="Dr. Daksh Mutreja"
								className="w-full aspect-[3/4] lg:aspect-[4/5] object-cover object-center"
							/>
							{/* Accent border - hidden on mobile */}
							<div className="hidden lg:block absolute -bottom-4 -right-4 w-full h-full border-2 border-brand-blue -z-10"></div>
						</div>
					</div>

					{/* Content - Shows first on mobile, second on desktop */}
					<div className="order-1 lg:order-2 scroll-animate">
						<p className="text-brand-blue text-sm font-semibold tracking-widest uppercase mb-4">
							Meet Your Doctor
						</p>

						<h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy leading-tight mb-4">
							Dr. Daksh Mutreja
						</h2>

						<p className="text-brand-green font-semibold text-lg mb-6">
							MDS, Oral Medicine & Radiology | Specialist Implantologist
						</p>

						<p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-6 lg:mb-8">
							With over 8 years of clinical experience, Dr. Daksh specializes in advanced dental implant procedures, bringing precision and care to every patient.
						</p>

						{/* Credentials */}
						<div className="space-y-3">
							<div className="flex items-start gap-3">
								<span className="w-2 h-2 bg-brand-blue rounded-full mt-2 shrink-0"></span>
								<span className="text-gray-700 text-sm lg:text-base">MDS in Oral Medicine and Radiology - Rajarajeswari Dental College, Bangalore</span>
							</div>
							<div className="flex items-start gap-3">
								<span className="w-2 h-2 bg-brand-blue rounded-full mt-2 shrink-0"></span>
								<span className="text-gray-700 text-sm lg:text-base">Certificate Course in Implantology - RGUHS</span>
							</div>
							<div className="flex items-start gap-3">
								<span className="w-2 h-2 bg-brand-green rounded-full mt-2 shrink-0"></span>
								<span className="text-gray-700 text-sm lg:text-base">Advanced training in Zygomatic and Pterygoid Implants</span>
							</div>
							<div className="flex items-start gap-3">
								<span className="w-2 h-2 bg-brand-green rounded-full mt-2 shrink-0"></span>
								<span className="text-gray-700 text-sm lg:text-base">Specialist in ALL-ON-X, Sinus Lift, and Ridge Augmentation</span>
							</div>
							<div className="flex items-start gap-3">
								<span className="w-2 h-2 bg-brand-blue rounded-full mt-2 shrink-0"></span>
								<span className="text-gray-700 text-sm lg:text-base">70+ implants placed for underprivileged patients (volunteer work)</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
