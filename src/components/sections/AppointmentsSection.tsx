import AppointmentForm from "../AppointmentForm";

export default function AppointmentsSection() {
	return (
		<section id="appointments" className="bg-brand-navy py-16 lg:py-20">
			<div className="w-full max-w-6xl mx-auto px-8">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					{/* Left Column - Info */}
					<div className="scroll-animate">
						<h2 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-wider">
							SCHEDULE YOUR CONSULTATION
						</h2>
						<hr className="w-24 border-white/40 mb-6" />
						<p className="text-xl text-white/80 font-light leading-relaxed mb-10">
							Ready to begin your journey to optimal oral health?
							Book your personalized consultation today.
						</p>

						<div className="space-y-6">
							<div className="flex items-center space-x-4">
								<div className="w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center">
									<svg
										className="w-6 h-6 text-white"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={1.5}
											d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
										/>
									</svg>
								</div>
								<div>
									<p className="font-medium text-white tracking-wide">
										PHONE
									</p>
									<p className="text-white/70">
										+91 86606 03183
									</p>
								</div>
							</div>

							<div className="flex items-center space-x-4">
								<div className="w-12 h-12 bg-brand-green rounded-full flex items-center justify-center">
									<svg
										className="w-6 h-6 text-white"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={1.5}
											d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
										/>
									</svg>
								</div>
								<div>
									<p className="font-medium text-white tracking-wide">
										HOURS
									</p>
									<p className="text-white/70">
										Monday - Saturday: 10:15 AM - 9:30 PM
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* Right Column - Form */}
					<div className="bg-white rounded-xl p-8 shadow-xl scroll-animate">
						<AppointmentForm />
					</div>
				</div>
			</div>
		</section>
	);
}
