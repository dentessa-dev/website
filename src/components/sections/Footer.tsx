export default function Footer() {
	return (
		<footer className="bg-brand-navy text-white py-16">
			<div className="max-w-6xl mx-auto px-8">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-12">
					<div>
						<h3 className="text-3xl font-light tracking-wider font-display mb-6">
							<span className="text-brand-blue">DENT</span>
							<span className="text-brand-green">ESSA</span>
						</h3>
						<p className="text-gray-300 mb-6 font-light leading-relaxed">
							Precision-driven care to restore your smile with
							confidence, comfort, and long-lasting results.
						</p>
						<div className="flex space-x-4">
							<a
								href="https://www.facebook.com/WorldImplantCenter"
								className="text-gray-400 hover:text-brand-blue transition-colors"
								aria-label="Facebook"
							>
								<svg
									className="w-6 h-6"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
								</svg>
							</a>
							<a
								href="https://www.instagram.com/world.implant.center/"
								className="text-gray-400 hover:text-pink-400 transition-colors"
								aria-label="Instagram"
							>
								<svg
									className="w-6 h-6"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-2.297 0-4.163-1.866-4.163-4.163S6.152 8.662 8.449 8.662s4.163 1.866 4.163 4.163-1.866 4.163-4.163 4.163z" />
								</svg>
							</a>
							<a
								href="https://www.linkedin.com/in/dr-daksh-mutreja-597571a8/"
								className="text-gray-400 hover:text-brand-blue transition-colors"
								aria-label="LinkedIn"
							>
								<svg
									className="w-6 h-6"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
								</svg>
							</a>
						</div>
					</div>

					<div>
						<h4 className="text-xl font-light mb-6 tracking-wider">
							QUICK LINKS
						</h4>
						<ul className="space-y-3">
							<li>
								<a
									href="#about"
									className="text-gray-300 hover:text-white transition-colors font-light"
								>
									About Us
								</a>
							</li>
							<li>
								<a
									href="#services"
									className="text-gray-300 hover:text-white transition-colors font-light"
								>
									Implant Specialities
								</a>
							</li>
							<li>
								<a
									href="#technology"
									className="text-gray-300 hover:text-white transition-colors font-light"
								>
									AI Driven Precision
								</a>
							</li>
							<li>
								<a
									href="#appointments"
									className="text-gray-300 hover:text-white transition-colors font-light"
								>
									Book Appointment
								</a>
							</li>
							<li>
								<a
									href="#contact"
									className="text-gray-300 hover:text-white transition-colors font-light"
								>
									Contact Us
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h4 className="text-xl font-light mb-6 tracking-wider">
							SPECIALITIES
						</h4>
						<ul className="space-y-3 text-gray-300 font-light">
							<li>Single Implants</li>
							<li>All-on-X Solutions</li>
							<li>Zygomatic Implants</li>
							<li>Full-Mouth Restoration</li>
							<li>Bone Grafting</li>
							<li>Immediate Loading</li>
						</ul>
					</div>

					<div>
						<h4 className="text-xl font-light mb-6 tracking-wider">
							CONTACT INFO
						</h4>
						<div className="text-gray-300 space-y-4 font-light leading-relaxed">
							<div>
								<p className="text-white font-medium mb-1">
									ADDRESS
								</p>
								<p className="text-sm">
									1/4, Basement, BHEL Layout Main Road,
									Rajarajeshwari Nagar, Bangalore - 98
								</p>
							</div>
							<div>
								<p className="text-white font-medium mb-1">
									CONTACT
								</p>
								<p className="text-sm">+91 86606 03183</p>
								<p className="text-sm">+91 86187 44043</p>
								<p className="text-sm">
									worldimplantcenter@gmail.com
								</p>
							</div>
							<div>
								<a
									href="tel:+918660603183"
									className="inline-block bg-brand-blue hover:bg-brand-blue/90 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors"
								>
									CALL NOW
								</a>
							</div>
						</div>
					</div>
				</div>

				<div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
					<p className="font-light tracking-wide">
						&copy; 2026 DENTESSA DENTAL CLINIC. ALL RIGHTS RESERVED.
					</p>
					<p className="text-sm mt-2">
						Care, Inventiveness & Precision.
					</p>
				</div>
			</div>
		</footer>
	);
}
