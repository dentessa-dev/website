export default function ContactSection() {
	return (
		<section id="contact" className="min-h-screen bg-brand-navy flex items-center">
			<div className="w-full max-w-6xl mx-auto px-8 py-16">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
					{/* Left Column - Info */}
					<div className="scroll-animate">
						<h2 className="text-4xl md:text-5xl font-light text-white mb-8 tracking-wider">
							VISIT OUR CLINIC
						</h2>
						<hr className="w-24 border-white/40 mb-8" />
						<p className="text-xl text-white/80 font-light leading-relaxed mb-12">
							Conveniently located in the heart of BANGALORE, our modern clinic provides a comfortable environment for all your dental needs.
						</p>
						<div className="space-y-8">
							<div>
								<h4 className="text-lg font-medium text-white mb-3 tracking-wider">ADDRESS</h4>
								<p className="text-white/70 font-light leading-relaxed">
									1/4, Basement, BHEL Layout Main Road, Rajarajeshwari Nagar, Bangalore - 98, Landmark: RR Nagar Temple, Bangalore
								</p>
							</div>
							<div>
								<h4 className="text-lg font-medium text-white mb-3 tracking-wider">CONTACT</h4>
								<p className="text-white/70 font-light">Phone: +91 86606 03183</p>
							</div>
							<div>
								<h4 className="text-lg font-medium text-white mb-3 tracking-wider">OFFICE HOURS</h4>
								<div className="text-white/70 font-light leading-relaxed">
									<p>Monday - Saturday: 10:15 AM - 9:30 PM</p>
									<p>Sunday: Closed</p>
								</div>
							</div>
							<div>
								<h4 className="text-lg font-medium text-white mb-3 tracking-wider">PARKING</h4>
								<p className="text-white/70 font-light leading-relaxed">
									Complimentary parking available in our building&apos;s secure parking garage. Street parking is also available.
								</p>
							</div>
						</div>
					</div>

					{/* Right Column - Map */}
					<div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 scroll-animate">
						<h3 className="text-2xl font-light text-white mb-6 tracking-wider text-center">
							FIND US
						</h3>
						<div className="rounded-lg overflow-hidden shadow-md">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.6799!2d77.5089!3d12.9267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3ef7561a799d%3A0xacd5e2e44617c5e0!2sDentessa-Dental%20Clinic%20And%20Implant%20Center!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
								width="100%"
								height="350"
								style={{ border: 0 }}
								allowFullScreen={true}
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
								title="Dentessa Dental Clinic Location"
							></iframe>
						</div>
						<div className="mt-6 text-center">
							<a
								href="https://maps.app.goo.gl/PP9zcicJ99gQ1iid8"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center text-white/70 hover:text-white font-light text-sm transition-colors tracking-wider"
							>
								<svg className="w-5 h-5 mr-2 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
								</svg>
								OPEN IN GOOGLE MAPS FOR DIRECTIONS
								<svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
								</svg>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
