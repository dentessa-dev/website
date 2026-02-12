const reviews = [
	{
		name: "Abhishek Kumar",
		rating: 5,
		text: "I went to Dentessa on a friends' recommendation and shared my concern related to trusting dentists as I met few and couldn't trust anyone because everyone was saying different things. Doctors at Dentessa checked thoroughly and explained each and everything in detail which helped me to take better care of my teeth. I got filing done here, after filling also they followed up multiple times and until I was feeling completely fine they gave full support.",
		date: "a week ago",
		treatment: "Dental Filling",
	},
	{
		name: "Priya Sharma",
		rating: 5,
		text: "AI precision and expert care made my full-mouth implant feel natural. The technology they use is incredible and Dr. Daksh explained every step. Highly recommend their professional team!",
		date: "2 weeks ago",
		treatment: "Full-Mouth Implants",
	},
	{
		name: "Rajesh Patel",
		rating: 5,
		text: "I had lost hope after multiple dental failures, but Dentessa truly gave me back my smile. The All-on-4 procedure was life-changing and the results exceeded my expectations.",
		date: "1 month ago",
		treatment: "All-on-4 Implants",
	},
	{
		name: "Manjula KB",
		rating: 5,
		text: "Very good experience. Had multiple dental treatments done. Was having a good feel. Doctor and the staff at the clinic are very helpful and are very cooperative. Fixing appointments & treatment schedules are a cake walk. We recommend this dentist for all ages off people. Best & most flexible & economic place.",
		date: "5 months ago",
		treatment: "Multiple Treatments",
	},
	{
		name: "Chaithra DS",
		rating: 5,
		text: "Dr. Daksh is an exceptionally skilled clinician with remarkable diagnostic efficiency and attention to detail. His ability to assess and plan treatments with accuracy ensures the best outcomes for his patients. He maintains a calm and reassuring approach, making even complex procedures feel comfortable and well-managed.",
		date: "3 months ago",
		treatment: "Complex Case",
	},
	{
		name: "Arjun Menon",
		rating: 5,
		text: "The doctors handled my complex zygomatic implant case smoothly. From start to finish, I felt safe and well-informed. The AI-guided surgery was precise and recovery was faster than expected.",
		date: "6 weeks ago",
		treatment: "Zygomatic Implants",
	},
];

function StarRating({ rating }: { rating: number }) {
	return (
		<div className="flex text-brand-blue text-sm space-x-1">
			{[...Array(rating)].map((_, i) => (
				<svg
					key={i}
					className="w-4 h-4 fill-current"
					viewBox="0 0 24 24"
				>
					<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
				</svg>
			))}
		</div>
	);
}

export default function ReviewsSection() {
	return (
		<section id="reviews" className="bg-white py-16 lg:py-20">
			<div className="w-full max-w-6xl mx-auto px-8 py-16">
				<div className="text-center mb-20 scroll-animate">
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
					{reviews.map((review, index) => (
						<div
							key={index}
							className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 scroll-animate"
						>
							<div className="flex items-center justify-between mb-6">
								<StarRating rating={review.rating} />
								<span className="text-xs bg-brand-blue/10 text-brand-blue px-3 py-1 rounded-full font-medium">
									{review.treatment}
								</span>
							</div>
							<p className="text-gray-600 mb-6 leading-relaxed font-light italic">
								&quot;{review.text}&quot;
							</p>
							<div className="flex items-center justify-between">
								<p className="font-medium text-gray-800 tracking-wide">
									— {review.name}
								</p>
								<span className="text-gray-400 text-xs tracking-wide">
									{review.date.toUpperCase()}
								</span>
							</div>
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
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-600 hover:text-brand-blue font-light tracking-wider transition-colors"
						>
							GOOGLE REVIEWS
						</a>
						<span className="text-gray-400">|</span>
						<a
							href="https://www.practo.com/bangalore/clinic/m-s-dental-care-2-konanakunte-1"
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-600 hover:text-brand-blue font-light tracking-wider transition-colors"
						>
							PRACTO REVIEWS
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
