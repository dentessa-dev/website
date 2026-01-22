import Image from "next/image";
import MobileMenu from "../components/MobileMenu";
import AppointmentForm from "../components/AppointmentForm";
import { brotliDecompress } from "zlib";

export default function Home() {
	return (
		<main className="min-h-screen bg-white">
			{/* Hero Section - Full Screen */}
			<section className="min-h-screen bg-gradient-to-br from-slate-400 via-slate-300 to-blue-200 flex items-center justify-center relative">
				{/* Navigation */}
				<nav className="absolute top-0 w-full z-50 pt-2">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<div className="flex justify-between items-center h-16">
							<div className="shrink-0">
								<h1 className="text-xl font-light text-white tracking-wider pt-2 drop-shadow-lg">
									DENTESSA
								</h1>
							</div>
							<div className="hidden md:block">
								<div className="ml-10 flex items-baseline space-x-8">
									<a
										href="#about"
										className="text-white/90 hover:text-white px-3 py-2 pt-4 text-sm font-light tracking-wide transition-colors drop-shadow-md"
									>
										ABOUT
									</a>
									<a
										href="#services"
										className="text-white/90 hover:text-white px-3 py-2 pt-4 text-sm font-light tracking-wide transition-colors drop-shadow-md"
									>
										SERVICES
									</a>
									<a
										href="#appointments"
										className="text-white/90 hover:text-white px-3 py-2 pt-4 text-sm font-light tracking-wide transition-colors drop-shadow-md"
									>
										APPOINTMENTS
									</a>
									<a
										href="#reviews"
										className="text-white/90 hover:text-white px-3 py-2 pt-4 text-sm font-light tracking-wide transition-colors drop-shadow-md"
									>
										REVIEWS
									</a>
									<a
										href="#contact"
										className="text-white/90 hover:text-white px-3 py-2 pt-4 text-sm font-light tracking-wide transition-colors drop-shadow-md"
									>
										CONTACT
									</a>
								</div>
							</div>
							<MobileMenu />
						</div>
					</div>
				</nav>

				{/* Background Pattern or Image */}
				<div className="absolute inset-0 opacity-20">
					<div className="absolute top-20 left-20 w-32 h-32 bg-white/30 rounded-full blur-2xl"></div>
					<div className="absolute top-40 right-32 w-48 h-48 bg-white/20 rounded-full blur-3xl"></div>
					<div className="absolute bottom-32 left-1/3 w-64 h-64 bg-white/25 rounded-full blur-3xl"></div>
					<div className="absolute bottom-20 right-20 w-40 h-40 bg-white/30 rounded-full blur-2xl"></div>
				</div>

				<div className="text-center z-10">
					<h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-light tracking-wider mb-8">
						DENTESSA DENTAL CLINIC
					</h1>
					<div className="w-full max-w-2xl mx-auto">
						<hr className="border-white/60 mb-6" />
						<p className="text-white text-lg md:text-xl lg:text-2xl font-light tracking-wider">
							EXCEPTIONAL CARE WITH A BREAKTHROUGH SMILE
						</p>
						<hr className="border-white/60 mt-6" />
					</div>
				</div>

				{/* Scroll indicator */}
				<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
					<svg
						className="w-6 h-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M19 14l-7 7m0 0l-7-7m7 7V3"
						/>
					</svg>
				</div>
			</section>

			{/* About Section - Full Screen */}
			<section
				id="about"
				className="min-h-screen bg-linear-to-b from-gray-800 to-gray-900 text-white flex items-center"
			>
				<div className="w-full">
					<div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
						{/* Left side - Doctor Image */}
						<div className="bg-linear-to-br from-gray-700 to-gray-800 flex items-center justify-center p-8 lg:p-12">
							<div className="relative w-full max-w-md">
								<div className="aspect-[3/4] bg-linear-to-b from-gray-600 to-gray-700 rounded-lg shadow-2xl flex items-center justify-center overflow-hidden border border-gray-600">
									<div className="text-center text-gray-300 p-8">
										<div className="w-32 h-32 bg-gray-500 rounded-full mx-auto mb-4 flex items-center justify-center">
											<span className="text-4xl text-gray-300">
												<img
													src="https://media.licdn.com/dms/image/v2/D5603AQFVjy4Lc4a8NA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1699522182410?e=1770854400&v=beta&t=dsp1GqQZjYNZSYK89dmXV6mGaUuSSi6fGqhRiVy5T5s"
													alt="Dr. Daksh"
													className="w-48 rounded-2xl object-cover shadow-lg transition duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl"
												/>
											</span>
										</div>
										<p className="text-lg font-light tracking-wide">
											Dr. Daksh Mutreja
										</p>
									</div>
								</div>
							</div>
						</div>

						{/* Right side - Doctor Information */}
						<div className="flex items-center justify-center p-8 lg:p-12">
							<div className="max-w-lg">
								<h2 className="text-4xl md:text-5xl font-light text-white mb-4 tracking-wider">
									DR. DAKSH MUTREJA, MDS
								</h2>
								<p className="text-lg text-gray-300 italic mb-8 font-light tracking-wide">
									Oral Medicine & Radiology Specialist |
									Implantologist
								</p>

								<hr className="border-gray-600 mb-8" />

								<div className="space-y-4 text-gray-300 leading-relaxed font-light">
									<p>
										• MDS in Oral Medicine and Radiology -
										Rajarajeswari Dental College, Bangalore
									</p>
									<p>
										• Certificate Course in Implantology -
										RGUHS
									</p>
									<p>
										• Advanced training in Zygomatic and
										Pterygoid Implants
									</p>
									<p>
										• Specialist in ALL-ON-X, Sinus Lift,
										and Ridge Augmentation
									</p>
									<p>
										• Over 8+ years of clinical experience
										in comprehensive dental care
									</p>
									<p>
										• Expert in Oral Diagnosis, Root Canals,
										Periodontics, and Restorations
									</p>
									<p>
										• Volunteer work: Placed 70+ implants
										for underprivileged patients
									</p>
									<p>
										• Scientific Writer with expertise in
										Medical Communications
									</p>
								</div>

								<hr className="border-gray-600 mt-8 mb-6" />
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Services Section */}
			<section
				id="services"
				className="min-h-screen bg-linear-to-br from-slate-50 to-gray-100 flex items-center"
			>
				<div className="w-full max-w-6xl mx-auto px-8 py-16">
					<div className="text-center mb-20">
						<h2 className="text-4xl md:text-6xl font-light text-gray-800 mb-8 tracking-wider">
							OUR EXPERTISE
						</h2>
						<hr className="w-32 border-gray-400 mx-auto mb-12" />
					</div>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-5xl mx-auto">
						<div className="text-center group">
							<div className="mb-8 opacity-60 group-hover:opacity-100 transition-opacity">
								<div className="w-16 h-16 bg-linear-to-br from-slate-300 to-gray-400 rounded-full mx-auto mb-6 flex items-center justify-center">
									<span className="text-2xl text-white">
										🦷
									</span>
								</div>
							</div>
							<h3 className="text-2xl font-light text-gray-800 mb-6 tracking-wider">
								GENERAL DENTISTRY
							</h3>
							<p className="text-gray-600 leading-loose font-light">
								Comprehensive oral health care including routine
								cleanings, preventive treatments, and
								restorative procedures to maintain your dental
								wellness.
							</p>
						</div>
						<div className="text-center group">
							<div className="mb-8 opacity-60 group-hover:opacity-100 transition-opacity">
								<div className="w-16 h-16 bg-linear-to-br from-slate-300 to-gray-400 rounded-full mx-auto mb-6 flex items-center justify-center">
									<span className="text-2xl text-white">
										✨
									</span>
								</div>
							</div>
							<h3 className="text-2xl font-light text-gray-800 mb-6 tracking-wider">
								COSMETIC DENTISTRY
							</h3>
							<p className="text-gray-600 leading-loose font-light">
								Transform your smile with professional
								whitening, porcelain veneers, and aesthetic
								treatments designed to enhance your natural
								beauty.
							</p>
						</div>
						<div className="text-center group">
							<div className="mb-8 opacity-60 group-hover:opacity-100 transition-opacity">
								<div className="w-16 h-16 bg-linear-to-br from-slate-300 to-gray-400 rounded-full mx-auto mb-6 flex items-center justify-center">
									<span className="text-2xl text-white">
										🔧
									</span>
								</div>
							</div>
							<h3 className="text-2xl font-light text-gray-800 mb-6 tracking-wider">
								RESTORATIVE CARE
							</h3>
							<p className="text-gray-600 leading-loose font-light">
								Advanced treatments including dental implants,
								crowns, and bridges to restore both function and
								aesthetics to your smile.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Appointments Section */}
			<section
				id="appointments"
				className="min-h-screen bg-linear-to-br from-amber-50 to-stone-100 flex items-center"
			>
				<div className="w-full max-w-6xl mx-auto px-8 py-16">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
						{/* Left Column - Header */}
						<div>
							<h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-8 tracking-wider">
								SCHEDULE YOUR CONSULTATION
							</h2>
							<hr className="w-24 border-gray-400 mb-8" />
							<p className="text-xl text-gray-600 font-light leading-relaxed mb-12">
								Ready to begin your journey to optimal oral
								health? Book your personalized consultation
								today.
							</p>

							<div className="space-y-8">
								<div className="flex items-center space-x-4">
									<div className="w-12 h-12 bg-linear-to-br from-amber-200 to-stone-300 rounded-full flex items-center justify-center">
										<span className="text-white text-xl">
											📞
										</span>
									</div>
									<div>
										<p className="font-medium text-gray-800 tracking-wide">
											PHONE
										</p>
										<p className="text-gray-600">
											+91 86606 03183
										</p>
									</div>
								</div>

								<div className="flex items-center space-x-4">
									<div className="w-12 h-12 bg-linear-to-br from-amber-200 to-stone-300 rounded-full flex items-center justify-center">
										<span className="text-white text-xl">
											🕒
										</span>
									</div>
									<div>
										<p className="font-medium text-gray-800 tracking-wide">
											HOURS
										</p>
										<p className="text-gray-600">
											Monday - Saturday: 10:15 AM - 9:30
											PM
										</p>
									</div>
								</div>
							</div>
						</div>

						{/* Right Column - Form */}
						<div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-xl">
							<AppointmentForm />
						</div>
					</div>
				</div>
			</section>

			{/* Reviews Section */}
			<section
				id="reviews"
				className="min-h-screen bg-white flex items-center"
			>
				<div className="w-full max-w-6xl mx-auto px-8 py-16">
					<div className="text-center mb-20">
						<h2 className="text-4xl md:text-6xl font-light text-gray-800 mb-8 tracking-wider">
							PATIENT TESTIMONIALS
						</h2>
						<hr className="w-32 border-gray-400 mx-auto mb-12" />
						<p className="text-xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
							Discover what our patients are saying about their
							experience at Dentessa Dental Clinic
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{[
							{
								name: "Abhishek Kumar",
								rating: 5,
								text: "I went to Dentessa on a friends' recommendation and shared my concern related to trusting dentists as I met few and couldn't trust anyone because everyone was saying different things. Doctors at Dentessa checked thoroughly and explained each and everything in detail which helped me to take better care of my teeth. I got filing done here, after filling also they followed up multiple times and until I was feeling completely fine they gave full support.",
								date: "a week ago",
							},
							{
								name: "Manjula KB",
								rating: 5,
								text: "Very good experience. Had multiple dental treatments done. Was having a good feel. Doctor and the staff at the clinic are very helpful and are very cooperative. Fixing appointments & treatment schedules are a cake walk. We recommend this dentist for all ages off people. Best & most flexible & economic place.",
								date: "5 months ago",
							},
							{
								name: "Chaithra DS",
								rating: 5,
								text: "Dr. Daksh is an exceptionally skilled clinician with remarkable diagnostic efficiency and attention to detail. His ability to assess and plan treatments with accuracy ensures the best outcomes for his patients. He maintains a calm and reassuring approach, making even complex procedures feel comfortable and well-managed.",
								date: "3 months ago",
							},
							{
								name: "Ranjitha R",
								rating: 5,
								text: "I got my root canal done, crown and fillings done. Dr. Daksh and Dr. Prasurjya was really great and they got Zirconia crown ready by a day and were really accommodating. I am happy and grateful. Would definitely recommend this place.",
								date: "3 weeks ago",
							},
							{
								name: "Meera Chitragar",
								rating: 5,
								text: "Dr.Daksh M is an experienced dentist and surgeon. Recently I visited the clinic for root canal treatment (RCT). I am very thankful to Dr Daksh as he took lot of care with lot of patience and treated me well. He is sincere and committed in treating the patients.",
								date: "2 months ago",
							},
							{
								name: "Mamta Kumari",
								rating: 5,
								text: "Visited the doctor to get Root canal done. Professional and courteous staff. Doctor is warm and friendly.",
								date: "2 months ago",
							},
						].map((review, index) => (
							<div
								key={index}
								className="bg-gray-50/50 rounded-lg p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
							>
								<div className="flex items-center mb-6">
									<div className="flex text-amber-400 text-sm">
										{[...Array(review.rating)].map(
											(_, i) => (
												<span key={i}>⭐</span>
											),
										)}
									</div>
									<span className="text-gray-400 text-xs ml-3 tracking-wide">
										{review.date.toUpperCase()}
									</span>
								</div>
								<p className="text-gray-600 mb-6 leading-relaxed font-light italic">
									"{review.text}"
								</p>
								<p className="font-medium text-gray-800 tracking-wide">
									— {review.name}
								</p>
							</div>
						))}
					</div>

					<div className="text-center mt-16">
						<p className="text-gray-500 mb-6 font-light tracking-wide">
							LEAVE US A REVIEW ON
						</p>
						<div className="flex justify-center space-x-8">
							<a
								href="https://www.google.com/search?hl=en-IN&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOVLiLLcllup_tXGivgpVHIclZFkN_mDKi-Vtl3LACeAi_zFaP0Cpvx6dJ3livqYM0aveOZ1_RI12jLstFyVOkKT1-dTffJU8XV1u1XxqkakNlT5MK_VQ99E2uRkOGoo2M0ZtAFY%3D&q=Dentessa-Dental+Clinic+And+Implant+Center+Reviews&sa=X&aic=0#lrd=0x3bae3ef7561a799d:0xacd5e2e44617c5e0,3,,,,"
								className="text-gray-600 hover:text-gray-800 font-light tracking-wider transition-colors"
							>
								GOOGLE REVIEWS
							</a>
						</div>
					</div>
				</div>
			</section>

			{/* Location & Map Section */}
			<section
				id="contact"
				className="min-h-screen bg-linear-to-br from-slate-100 to-gray-200 flex items-center"
			>
				<div className="w-full max-w-6xl mx-auto px-8 py-16">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
						{/* Left Column - Location Info */}
						<div>
							<h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-8 tracking-wider">
								VISIT OUR CLINIC
							</h2>
							<hr className="w-24 border-gray-400 mb-8" />
							<p className="text-xl text-gray-600 font-light leading-relaxed mb-12">
								Conveniently located in the heart of BANGALORE,
								our modern clinic provides a comfortable
								environment for all your dental needs.
							</p>
							<div className="space-y-8">
								<div>
									<h4 className="text-lg font-medium text-gray-800 mb-3 tracking-wider">
										ADDRESS
									</h4>
									<p className="text-gray-600 font-light leading-relaxed">
										1/4, Basement, BHEL Layout Main Road,
										Rajarajeshwari Nagar, Bangalore - 98,
										Landmark: RR Nagar Temple, Bangalore
									</p>
								</div>
								<div>
									<h4 className="text-lg font-medium text-gray-800 mb-3 tracking-wider">
										CONTACT
									</h4>
									<p className="text-gray-600 font-light">
										Phone: +91 86606 03183
									</p>
								</div>
								<div>
									<h4 className="text-lg font-medium text-gray-800 mb-3 tracking-wider">
										OFFICE HOURS
									</h4>
									<div className="text-gray-600 font-light leading-relaxed">
										<p>
											Monday - Saturday: 10:15 AM - 9:30
											PM
										</p>

										<p>Sunday: Closed</p>
									</div>
								</div>
								<div>
									<h4 className="text-lg font-medium text-gray-800 mb-3 tracking-wider">
										PARKING
									</h4>
									<p className="text-gray-600 font-light leading-relaxed">
										Complimentary parking available in our
										building's secure parking garage. Street
										parking is also available.
									</p>
								</div>
							</div>
						</div>

						{/* Right Column - Map */}
						<div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-xl">
							<h3 className="text-2xl font-light text-gray-800 mb-6 tracking-wider text-center">
								FIND US
							</h3>
							<div className="rounded-lg overflow-hidden shadow-md">
								<iframe
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.4076!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ2JzI5LjYiTiAxMjLCsDI1JzA5LjgiVw!5e0!3m2!1sen!2sus!4v1642000000000!5m2!1sen!2sus"
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
									className="inline-flex items-center text-gray-600 hover:text-gray-800 font-light text-sm transition-colors tracking-wider"
								>
									<span className="mr-2">🗺️</span>
									OPEN IN GOOGLE MAPS FOR DIRECTIONS
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
											d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
										/>
									</svg>
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-linear-to-b from-gray-800 to-gray-900 text-white py-16">
				<div className="max-w-6xl mx-auto px-8">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
						<div>
							<h3 className="text-3xl font-light mb-6 tracking-wider">
								DENTESSA
							</h3>
							<p className="text-gray-300 mb-6 font-light leading-relaxed">
								Your trusted partner in dental health. Providing
								exceptional care with a personal touch for over
								12 years.
							</p>
							<div className="flex space-x-6">
								<a
									href="https://www.linkedin.com/in/dr-daksh-mutreja-597571a8/"
									className="text-gray-400 hover:text-white transition-colors font-light tracking-wide"
								>
									LINKEDIN
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
										About
									</a>
								</li>
								<li>
									<a
										href="#services"
										className="text-gray-300 hover:text-white transition-colors font-light"
									>
										Services
									</a>
								</li>
								<li>
									<a
										href="#appointments"
										className="text-gray-300 hover:text-white transition-colors font-light"
									>
										Appointments
									</a>
								</li>
								<li>
									<a
										href="#reviews"
										className="text-gray-300 hover:text-white transition-colors font-light"
									>
										Reviews
									</a>
								</li>
								<li>
									<a
										href="#contact"
										className="text-gray-300 hover:text-white transition-colors font-light"
									>
										Contact
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h4 className="text-xl font-light mb-6 tracking-wider">
								CONTACT INFO
							</h4>
							<div className="text-gray-300 space-y-3 font-light leading-relaxed">
								<p>
									1/4, Basement, BHEL Layout Main Road,
									Rajarajeshwari Nagar, Bangalore - 98,
									Landmark: RR Nagar Temple, Bangalore
									<br />
									San Francisco, CA 94105
								</p>
								<p>+91 86606 03183</p>
								<p className="pt-3"></p>
							</div>
						</div>
					</div>
					<div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
						<p className="font-light tracking-wide">
							&copy; 2026 DENTESSA DENTAL CLINIC. ALL RIGHTS
							RESERVED.
						</p>
					</div>
				</div>
			</footer>
		</main>
	);
}
