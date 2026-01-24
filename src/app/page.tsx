"use client";

import { useScrollAnimation } from "../hooks/useScrollAnimation";
import {
	HeroSection,
	AboutSection,
	ServicesSection,
	TechnologySection,
	AdvancedProceduresSection,
	StatisticsSection,
	AppointmentsSection,
	ReviewsSection,
	ContactSection,
	Footer,
} from "../components/sections";

export default function Home() {
	useScrollAnimation();

	return (
		<main className="min-h-screen bg-gray-50">
			{/* Custom CSS for animations */}
			<style>
				{`
					.scroll-animate {
						opacity: 0;
						transform: translateY(30px);
						transition: all 1.2s ease-out;
					}
					.animate-slide-up {
						opacity: 1 !important;
						transform: translateY(0) !important;
					}
					@keyframes float {
						0%,
						100% {
							transform: translateY(0px);
						}
						50% {
							transform: translateY(-10px);
						}
					}
					.animate-float {
						animation: float 10s ease-in-out infinite;
					}
					.animate-float-delayed {
						animation: float 10s ease-in-out infinite;
						animation-delay: 3s;
					}
				`}
			</style>

			<HeroSection />
			<AboutSection />
			<ServicesSection />
			<TechnologySection />
			<AdvancedProceduresSection />
			<StatisticsSection />
			<AppointmentsSection />
			<ReviewsSection />
			<ContactSection />
			<Footer />
		</main>
	);
}
