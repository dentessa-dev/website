export default function AboutSection() {
	return (
		<section id="about" className="py-12 lg:py-20 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
					{/* Image - Shows second on mobile, first on desktop */}
					<div className="order-2 lg:order-1 scroll-animate">
						<div className="relative mx-4 lg:mx-0">
							<img
								src="/daksh.png"
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
							MDS, Oral Medicine & Radiology | PG certificate
							course in implantology, Karnataka
						</p>

						<p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-6 lg:mb-8">
							With over 11 years of clinical experience, Dr. Daksh
							specializes in advanced dental implant procedures,
							bringing precision and care to every patient.
						</p>

						{/* Credentials */}
						<div className="space-y-3">
							<div className="flex items-start gap-3">
								<span className="w-2 h-2 bg-brand-blue rounded-full mt-2 shrink-0"></span>
								<span className="text-gray-700 text-sm lg:text-base">
									BDS from the reputed Govt. Dental College
									and Research Institute, Bangalore
								</span>
							</div>
							<div className="flex items-start gap-3">
								<span className="w-2 h-2 bg-brand-blue rounded-full mt-2 shrink-0"></span>
								<span className="text-gray-700 text-sm lg:text-base">
									MDS in Oral Medicine and Radiology -
									Rajarajeswari Dental College, Bangalore
								</span>
							</div>
							<div className="flex items-start gap-3">
								<span className="w-2 h-2 bg-brand-blue rounded-full mt-2 shrink-0"></span>
								<span className="text-gray-700 text-sm lg:text-base">
									Certificate Course in Implantology - RGUHS
								</span>
							</div>
							<div className="flex items-start gap-3">
								<span className="w-2 h-2 bg-brand-blue rounded-full mt-2 shrink-0"></span>
								<span className="text-gray-700 text-sm lg:text-base">
									Experienced clinician with over 11+years in
									dentistry with expertise in handling
									diagnosis, root canals, crowns, extractions,
									TMJ pain, minor oral surgery, esthetic
									dentistry, smile designing, prosthetic
									rehabilitation, complete dentures, pediatric
									and geriatric dentistry and all general
									dentistry procedures and their
									complications.
								</span>
							</div>
							<div className="flex items-start gap-3">
								<span className="w-2 h-2 bg-brand-blue rounded-full mt-2 shrink-0"></span>
								<span className="text-gray-700 text-sm lg:text-base">
									Specialised in simple/endosseous implants
									and specialised in zygomatic and pterygoid
									implants with brands like Israeli brands
									like Noris, Adin, MIS and South Korean
									brands like Osstem, Dentium, Dio and global
									brands like Straumann and Nobel.
								</span>
							</div>
							<div className="flex items-start gap-3">
								<span className="w-2 h-2 bg-brand-blue rounded-full mt-2 shrink-0"></span>
								<span className="text-gray-700 text-sm lg:text-base">
									Specialist in ALL-ON-X, Sinus Lift, and
									Ridge Augmentation
								</span>
							</div>
							<div className="flex items-start gap-3">
								<span className="w-2 h-2 bg-brand-blue rounded-full mt-2 shrink-0"></span>
								<span className="text-gray-700 text-sm lg:text-base">
									500+ implants in total and 70+ implants
									placed for underprivileged patients
									(volunteer work Acharya Tulsi jain
									charitable trust )
								</span>
							</div>

							<div className="flex items-start gap-3">
								<span className="w-2 h-2 bg-brand-blue rounded-full mt-2 shrink-0"></span>
								<span className="text-gray-700 text-sm lg:text-base">
									10+ clinics (Acura Dental care,
									Padmanabhanagar and MS Dental Nest,
									Konanakunte cross; to name a few), as a
									visiting dental implantologist
								</span>
							</div>

							<div className="flex items-start gap-3">
								<span className="w-2 h-2 bg-brand-blue rounded-full mt-2 shrink-0"></span>
								<span className="text-gray-700 text-sm lg:text-base">
									Visiting assistant professor in department
									of Oral Medicine and Radiology at Sri
									Hasanamba Dental College and Hospital
								</span>
							</div>

							<div className="flex items-start gap-3">
								<span className="w-2 h-2 bg-brand-blue rounded-full mt-2 shrink-0"></span>
								<span className="text-gray-700 text-sm lg:text-base">
									Ex scientific writer for esteemed
									organisations like Sanofi and Indegene
								</span>
							</div>

							<div className="flex items-start gap-3">
								<span className="w-2 h-2 bg-brand-blue rounded-full mt-2 shrink-0"></span>
								<span className="text-gray-700 text-sm lg:text-base">
									4+ publications in various global journals
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
