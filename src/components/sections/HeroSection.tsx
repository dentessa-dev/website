import MobileMenu from "../MobileMenu";

export default function HeroSection() {
	return (
		<section className="min-h-[80vh] bg-brand-navy relative overflow-hidden">
			{/* Navigation */}
			<nav className="absolute top-0 w-full z-50 bg-brand-navy border-b border-brand-blue/30">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between items-center h-24">
						<div className="shrink-0">
							<h1 className="text-3xl md:text-4xl font-semibold tracking-tight font-display">
								<span className="text-brand-blue">DENT</span>
								<span className="text-brand-green">ESSA</span>
							</h1>
						</div>
						<div className="hidden md:block">
							<div className="ml-10 flex items-center space-x-6 lg:space-x-8">
								<a
									href="#about"
									className="text-white/90 hover:text-brand-blue px-3 py-2 text-base font-medium tracking-wide transition-colors"
								>
									ABOUT
								</a>
								<a
									href="#services"
									className="text-white/90 hover:text-brand-blue px-3 py-2 text-base font-medium tracking-wide transition-colors"
								>
									SERVICES
								</a>
								<a
									href="#technology"
									className="text-white/90 hover:text-brand-blue px-3 py-2 text-base font-medium tracking-wide transition-colors"
								>
									TECHNOLOGY
								</a>
								<a
									href="#appointments"
									className="text-white/90 hover:text-brand-blue px-3 py-2 text-base font-medium tracking-wide transition-colors"
								>
									APPOINTMENTS
								</a>
								<a
									href="#reviews"
									className="text-white/90 hover:text-brand-blue px-3 py-2 text-base font-medium tracking-wide transition-colors"
								>
									REVIEWS
								</a>
								<a
									href="#contact"
									className="text-white/90 hover:text-brand-blue px-3 py-2 text-base font-medium tracking-wide transition-colors"
								>
									CONTACT
								</a>
							</div>
						</div>
						<div className="hidden md:flex items-center gap-3 ml-4">
							<a
								href="tel:+917406261890"
								aria-label="Call +91 74062 61890"
								className="h-11 w-11 rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/20 hover:border-white/30 transition-colors flex items-center justify-center shadow-sm"
							>
								<svg
									className="h-5 w-5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={1.7}
										d="M7.25 3.5h2.25a1.5 1.5 0 011.45 1.13l.7 2.45a1.5 1.5 0 01-.43 1.53L10 9.88a13 13 0 004.12 4.12l1.27-1.17a1.5 1.5 0 011.53-.43l2.45.7a1.5 1.5 0 011.13 1.45v2.25A2.25 2.25 0 0118.25 19h-.5C9.95 19 5 14.05 5 7.75v-.5A2.25 2.25 0 017.25 5z"
									/>
								</svg>
							</a>
							<a
								href="https://wa.me/918660603183"
								target="_blank"
								rel="noreferrer"
								aria-label="Chat on WhatsApp"
								className="h-11 w-11 rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/20 hover:border-white/30 transition-colors flex items-center justify-center shadow-sm"
							>
								<svg
									className="h-5 w-5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={1.7}
										d="M20 11.5c0 4.39-3.59 8-8 8-1.08 0-2.11-.21-3.05-.59L4 20l1.09-3.03A8 8 0 1120 11.5z"
									/>
									<circle
										cx="9.25"
										cy="11.5"
										r="0.75"
										fill="currentColor"
										stroke="none"
									/>
									<circle
										cx="12"
										cy="11.5"
										r="0.75"
										fill="currentColor"
										stroke="none"
									/>
									<circle
										cx="14.75"
										cy="11.5"
										r="0.75"
										fill="currentColor"
										stroke="none"
									/>
								</svg>
							</a>
						</div>
						<a
							href="#appointments"
							className="hidden md:block bg-brand-green hover:bg-brand-green/80 text-white px-5 py-2 rounded font-medium text-sm whitespace-nowrap ml-6"
						>
							BOOK NOW
						</a>
						<MobileMenu />
					</div>
				</div>
			</nav>

			{/* Main Content - Two Column Layout */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 min-h-[80vh] flex items-center">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
					{/* Left Column - Content */}
					<div className="scroll-animate">
						<p className="text-brand-blue text-sm font-semibold tracking-widest uppercase mb-4">
							Bangalore&apos;s Premier Dental Clinic
						</p>

						<h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
							Affordability{" "}
							<span className="text-brand-blue">&</span> Painless
							Precision
						</h1>

						<p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
							The leading facility for cutting-edge root canals,
							aligners, braces, crowns bridges, smile designing
							and dental implants. From quick loading implants to
							full-mouth restorations with AI-powered precision.
						</p>

						{/* CTA Buttons */}
						<div className="flex flex-col sm:flex-row gap-4 mb-12">
							<a
								href="#appointments"
								className="bg-brand-green hover:bg-brand-green/80 text-white px-6 py-3 rounded font-medium text-sm tracking-wide transition-colors text-center"
							>
								BOOK CONSULTATION
							</a>
							<a
								href="#about"
								className="border border-white/40 text-white hover:bg-white/10 px-6 py-3 rounded font-medium text-sm tracking-wide transition-colors text-center"
							>
								MEET DR. DAKSH
							</a>
						</div>

						{/* Stats */}
						<div className="flex gap-8 md:gap-12">
							<div>
								<div className="text-3xl md:text-4xl font-bold text-brand-blue">
									11+
								</div>
								<div className="text-sm text-white/60 tracking-wide">
									Years Experience
								</div>
							</div>
							<div>
								<div className="text-3xl md:text-4xl font-bold text-brand-green">
									5000+
								</div>
								<div className="text-sm text-white/60 tracking-wide">
									Happy Patients
								</div>
							</div>
							<div>
								<div className="text-3xl md:text-4xl font-bold text-brand-blue">
									500+
								</div>
								<div className="text-sm text-white/60 tracking-wide">
									Implants Placed
								</div>
							</div>
						</div>
					</div>

					{/* Right Column - Visual */}
					<div className="hidden lg:flex items-center justify-center scroll-animate">
						<div className="relative">
							{/* Main visual element */}
							<div className="w-80 h-80 xl:w-96 xl:h-96 rounded-full bg-gradient-to-br from-brand-blue/20 to-brand-green/20 flex items-center justify-center">
								<div className="w-64 h-64 xl:w-80 xl:h-80 rounded-full bg-gradient-to-br from-brand-blue/30 to-brand-green/30 flex items-center justify-center">
									<span className="text-[120px] xl:text-[150px]">
										🦷
									</span>
								</div>
							</div>

							{/* Accent elements */}
							<div className="absolute -top-4 -right-4 w-20 h-20 bg-brand-green/20 rounded-full"></div>
							<div className="absolute -bottom-8 -left-8 w-32 h-32 bg-brand-blue/20 rounded-full"></div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
