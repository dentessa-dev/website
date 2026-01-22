"use client";

import Image from "next/image";
import React from "react";
import MobileMenu from "../components/MobileMenu";
import AppointmentForm from "../components/AppointmentForm";
import { brotliDecompress } from "zlib";

// Scroll animation hook with counter functionality
function useScrollAnimation() {
	React.useEffect(() => {
		const observerOptions = {
			threshold: 0.1,
			rootMargin: "0px 0px -50px 0px",
		};

		// Function to animate counters
		const animateCounter = (element: Element) => {
			const target = parseInt(element.getAttribute("data-target") || "0");
			const duration = 3500; // 3.5 seconds (slower)
			const steps = 80; // More steps for smoother animation
			const increment = target / steps;
			let current = 0;

			const updateCounter = () => {
				current += increment;
				if (current >= target) {
					current = target;
					// Format the final number
					if (element.textContent?.includes("%")) {
						element.textContent = `${Math.round(current)}%`;
					} else {
						element.textContent = `${Math.round(current)}+`;
					}
				} else {
					// Format the current number
					if (element.textContent?.includes("%")) {
						element.textContent = `${Math.round(current)}%`;
					} else {
						element.textContent = `${Math.round(current)}+`;
					}
					requestAnimationFrame(updateCounter);
				}
			};

			// Start the animation
			updateCounter();
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					// Handle scroll animations
					if (entry.target.classList.contains("scroll-animate")) {
						entry.target.classList.add("animate-slide-up");
						entry.target.classList.remove(
							"opacity-0",
							"translate-y-8",
						);
					}

					// Handle counter animations
					if (entry.target.classList.contains("counter-animate")) {
						animateCounter(entry.target);
						observer.unobserve(entry.target); // Only animate once
					}
				}
			});
		}, observerOptions);

		// Observe scroll animated elements
		const animatedElements = document.querySelectorAll(".scroll-animate");
		animatedElements.forEach((el) => observer.observe(el));

		// Observe counter elements
		const counterElements = document.querySelectorAll(".counter-animate");
		counterElements.forEach((el) => observer.observe(el));

		return () => observer.disconnect();
	}, []);
}

export default function Home() {
	useScrollAnimation();

	return (
		<main className="min-h-screen bg-gray-50">
			{/* Custom CSS for animations */}
			<style jsx global>{`
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
			`}</style>
			{/* Hero Section - Full Screen */}
			<section className="min-h-screen bg-linear-to-br from-blue-900 via-blue-800 to-indigo-900 flex items-center justify-center relative overflow-hidden border-b border-blue-700/20">
				{/* Enhanced Background Pattern */}
				<div className="absolute inset-0">
					{/* Gradient overlay for better text readability */}
					<div className="absolute inset-0 bg-linear-to-br from-blue-900/80 via-blue-800/70 to-indigo-900/80"></div>

					{/* Animated geometric patterns */}
					<div className="absolute inset-0 opacity-10">
						<div className="absolute top-20 left-20 w-24 h-24 border-2 border-white rounded-full animate-float"></div>
						<div className="absolute top-40 right-32 w-32 h-32 border border-blue-200 rounded-full animate-float-delayed"></div>
						<div className="absolute bottom-32 left-1/3 w-20 h-20 border-2 border-white rounded-full animate-float"></div>
						<div className="absolute bottom-20 right-20 w-28 h-28 border border-blue-200 rounded-full animate-float-delayed"></div>
						<div className="absolute top-1/2 left-10 w-16 h-16 border border-white rounded-full animate-float"></div>
						<div className="absolute top-3/4 right-10 w-12 h-12 border-2 border-blue-200 rounded-full animate-float-delayed"></div>
					</div>

					{/* Additional depth with blurred circles */}
					<div className="absolute inset-0 opacity-20">
						<div className="absolute top-32 left-32 w-48 h-48 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
						<div className="absolute bottom-40 right-40 w-64 h-64 bg-blue-300/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
						<div className="absolute top-2/3 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse delay-500"></div>
					</div>
				</div>

				{/* Navigation */}
				<nav className="absolute top-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/10">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<div className="flex justify-between items-center h-20">
							<div className="shrink-0">
								<h1 className="text-2xl font-semibold text-white tracking-tight drop-shadow-lg">
									DENTESSA
								</h1>
							</div>
							<div className="hidden md:block">
								<div className="ml-10 flex items-baseline space-x-8">
									<a
										href="#about"
										className="text-white/90 hover:text-white px-3 py-2 text-sm font-medium tracking-wide transition-colors drop-shadow-sm"
									>
										ABOUT
									</a>
									<a
										href="#services"
										className="text-white/90 hover:text-white px-3 py-2 text-sm font-medium tracking-wide transition-colors drop-shadow-sm"
									>
										SERVICES
									</a>
									<a
										href="#technology"
										className="text-white/90 hover:text-white px-3 py-2 text-sm font-medium tracking-wide transition-colors drop-shadow-sm"
									>
										TECHNOLOGY
									</a>
									<a
										href="#appointments"
										className="text-white/90 hover:text-white px-3 py-2 text-sm font-medium tracking-wide transition-colors drop-shadow-sm"
									>
										APPOINTMENTS
									</a>
									<a
										href="#reviews"
										className="text-white/90 hover:text-white px-3 py-2 text-sm font-medium tracking-wide transition-colors drop-shadow-sm"
									>
										REVIEWS
									</a>
									<a
										href="#contact"
										className="text-white/90 hover:text-white px-3 py-2 text-sm font-medium tracking-wide transition-colors drop-shadow-sm"
									>
										CONTACT
									</a>
								</div>
							</div>
							<div className="hidden md:block">
								<a
									href="#appointments"
									className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30 px-6 py-2 rounded-md font-medium text-sm transition-all duration-300 drop-shadow-sm"
								>
									BOOK NOW
								</a>
							</div>
							<MobileMenu />
						</div>
					</div>
				</nav>

				{/* 3D Tooth Render */}
				<div className="absolute top-32 right-20 hidden lg:block animate-float z-10">
					<div className="relative transform rotate-12">
						<div className="text-6xl filter drop-shadow-2xl">
							🦷
						</div>
						<div className="absolute -inset-4 bg-white/20 rounded-full blur-xl animate-pulse"></div>
					</div>
				</div>

				{/* Main Content with enhanced styling */}
				<div className="text-center z-20 relative px-4">
					{/* Animated badge */}
					<div className="mb-8 inline-block scroll-animate">
						<div className="bg-white/20 backdrop-blur-md rounded-full px-6 py-2 border border-white/30">
							<span className="text-white text-sm font-medium tracking-wider drop-shadow-sm">
								BANGALORE'S PREMIER DENTAL CLINIC
							</span>
						</div>
					</div>

					<h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-light tracking-wider mb-8 drop-shadow-2xl scroll-animate">
						CARE, PRECISION & INNOVATION
					</h1>

					<div className="w-full max-w-4xl mx-auto scroll-animate">
						<hr className="border-white/60 mb-6" />
						<p className="text-white text-lg md:text-xl lg:text-2xl font-light tracking-wider mb-4 drop-shadow-lg">
							THE LEADING FACILITY FOR CUTTING-EDGE DENTAL
							IMPLANTS
						</p>
						<p className="text-white/90 text-sm md:text-base font-light tracking-wide mb-6 max-w-2xl mx-auto drop-shadow-sm">
							From quick loading to intricate full-mouth
							restorations • Advanced AI technology • Skilled
							implantologists • Precision-driven care
						</p>
						<hr className="border-white/60 mb-8" />

						{/* CTA Buttons */}
						<div className="flex flex-col sm:flex-row gap-4 justify-center items-center scroll-animate">
							<a
								href="#appointments"
								className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-3 rounded-full font-medium tracking-wider transition-all duration-300 hover:bg-white/30 hover:scale-105 hover:shadow-xl drop-shadow-sm"
							>
								BOOK CONSULTATION
							</a>
							<a
								href="#about"
								className="bg-transparent border-2 border-white/70 text-white px-8 py-3 rounded-full font-medium tracking-wider transition-all duration-300 hover:bg-white/10 hover:border-white hover:scale-105 drop-shadow-sm"
							>
								MEET DR. DAKSH
							</a>
						</div>

						{/* Stats */}
						<div className="mt-12 grid grid-cols-3 gap-8 max-w-md mx-auto scroll-animate">
							<div className="text-center">
								<div className="text-2xl font-light text-white mb-1 drop-shadow-lg">
									12+
								</div>
								<div className="text-xs text-white/80 tracking-wide drop-shadow-sm">
									YEARS EXP
								</div>
							</div>
							<div className="text-center border-l border-r border-white/40 px-4">
								<div className="text-2xl font-light text-white mb-1 drop-shadow-lg">
									70+
								</div>
								<div className="text-xs text-white/80 tracking-wide drop-shadow-sm">
									IMPLANTS
								</div>
							</div>
							<div className="text-center">
								<div className="text-2xl font-light text-white mb-1 drop-shadow-lg">
									500+
								</div>
								<div className="text-xs text-white/80 tracking-wide drop-shadow-sm">
									PATIENTS
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Enhanced Scroll indicator */}
				<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce z-20 scroll-animate">
					<div className="flex flex-col items-center">
						<span className="text-xs font-medium tracking-wider mb-2 opacity-90 drop-shadow-sm">
							SCROLL
						</span>
						<svg
							className="w-6 h-6 animate-bounce drop-shadow-sm"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={1.5}
								d="M19 14l-7 7m0 0l-7-7m7 7V3"
							/>
						</svg>
					</div>
				</div>

				{/* Enhanced floating particles */}
				<div className="absolute inset-0 overflow-hidden z-10">
					<div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white/60 rounded-full animate-ping delay-1000"></div>
					<div className="absolute top-3/4 left-3/4 w-1 h-1 bg-white/60 rounded-full animate-ping delay-2000"></div>
					<div className="absolute top-1/2 left-1/6 w-2 h-2 bg-white/50 rounded-full animate-ping delay-1500"></div>
					<div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-white/70 rounded-full animate-ping delay-2500"></div>
				</div>
			</section>

			{/* About Section - Full Screen */}
			<section
				id="about"
				className="min-h-screen bg-white text-gray-800 flex items-center"
			>
				<div className="w-full">
					<div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
						{/* Left side - Full Screen Doctor Image */}
						<div className="relative bg-gray-50 min-h-screen overflow-hidden">
							{/* Full screen background image */}
							<div className="absolute inset-0">
								<img
									src="https://media.licdn.com/dms/image/v2/D5603AQFVjy4Lc4a8NA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1699522182410?e=1770854400&v=beta&t=dsp1GqQZjYNZSYK89dmXV6mGaUuSSi6fGqhRiVy5T5s"
									alt="Dr. Daksh Mutreja"
									className="w-full h-full object-cover object-center"
								/>
								{/* Subtle overlay for better text readability */}
								<div className="absolute inset-0 bg-linear-to-r from-black/20 via-transparent to-black/30"></div>
								<div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent"></div>
							</div>

							{/* Name overlay at bottom */}
							<div className="absolute bottom-8 left-8 right-8 z-10 scroll-animate">
								<div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20">
									<h3 className="text-2xl font-medium text-gray-800 mb-2 tracking-wide">
										Dr. Daksh Mutreja
									</h3>
									<p className="text-blue-600 font-medium text-lg">
										MDS, Oral Medicine & Radiology
									</p>
									<p className="text-gray-600 text-sm mt-1">
										Specialist Implantologist
									</p>
								</div>
							</div>

							{/* Decorative elements */}
							<div className="absolute top-8 right-8 w-16 h-16 border-2 border-white/30 rounded-full animate-float"></div>
							<div className="absolute top-1/3 left-8 w-12 h-12 border border-white/40 rounded-full animate-float-delayed"></div>
						</div>

						{/* Right side - Doctor Information */}
						<div className="flex items-center justify-center p-8 lg:p-12 bg-white">
							<div className="max-w-lg scroll-animate">
								<h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-4 tracking-wide">
									DR. DAKSH MUTREJA, MDS
								</h2>
								<p className="text-lg text-blue-600 italic mb-8 font-medium tracking-wide">
									Oral Medicine & Radiology Specialist |
									Implantologist
								</p>

								<hr className="border-gray-200 mb-8" />

								<div className="space-y-4 text-gray-600 leading-relaxed font-normal scroll-animate">
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

								<hr className="border-gray-200 mt-8 mb-6" />
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Services Section */}
			<section
				id="services"
				className="min-h-screen bg-gray-50 flex items-center"
			>
				<div className="w-full max-w-7xl mx-auto px-8 py-16">
					<div className="text-center mb-20 scroll-animate">
						<h2 className="text-4xl md:text-6xl font-light text-gray-800 mb-8 tracking-wide">
							IMPLANT SPECIALITIES
						</h2>
						<hr className="w-32 border-gray-300 mx-auto mb-12" />
						<p className="text-xl text-gray-600 font-normal max-w-3xl mx-auto leading-relaxed">
							Advanced dental implant solutions from single tooth
							replacement to complete oral rehabilitation
						</p>
					</div>

					{/* Main Services Grid */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
						<div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 scroll-animate">
							<div className="w-20 h-20 bg-blue-50 rounded-full mx-auto mb-6 flex items-center justify-center border border-blue-100">
								<span className="text-3xl">🦷</span>
							</div>
							<h3 className="text-2xl font-medium text-gray-800 mb-4 tracking-wide text-center">
								SINGLE IMPLANTS
							</h3>
							<p className="text-gray-600 leading-relaxed font-normal text-center mb-6">
								Replace individual missing teeth with crowns.
							</p>
							<ul className="space-y-2 text-sm text-gray-600 font-normal">
								<li>• Immediate loading available</li>
								<li>• Bone preservation techniques</li>
								<li>• Custom abutment design</li>
								<li>• 10-year warranty</li>
							</ul>
						</div>

						<div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 scroll-animate">
							<div className="w-20 h-20 bg-green-50 rounded-full mx-auto mb-6 flex items-center justify-center border border-green-100">
								<span className="text-3xl">🔄</span>
							</div>
							<h3 className="text-2xl font-medium text-gray-800 mb-4 tracking-wide text-center">
								ALL-ON-X
							</h3>
							<p className="text-gray-600 leading-relaxed font-normal text-center mb-6">
								Complete arch restoration using strategic
								implant placement for full-mouth rehabilitation.
							</p>
							<ul className="space-y-2 text-sm text-gray-600 font-normal">
								<li>• All-on-4 & All-on-6 options</li>
								<li>• Same-day teeth possible</li>
								<li>• Minimal bone grafting</li>
								<li>• Lifetime support</li>
							</ul>
						</div>

						<div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 scroll-animate">
							<div className="w-20 h-20 bg-purple-50 rounded-full mx-auto mb-6 flex items-center justify-center border border-purple-100">
								<span className="text-3xl">🧬</span>
							</div>
							<h3 className="text-2xl font-medium text-gray-800 mb-4 tracking-wide text-center">
								ZYGOMATIC IMPLANTS
							</h3>
							<p className="text-gray-600 leading-relaxed font-normal text-center mb-6">
								Advanced solution for severe bone loss using
								zygoma bone for implant anchorage.
							</p>
							<ul className="space-y-2 text-sm text-gray-600 font-normal">
								<li>• No bone grafting required</li>
								<li>• Immediate function</li>
								<li>• Complex case specialist</li>
								<li>• 3D surgical planning</li>
							</ul>
						</div>

						<div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 scroll-animate">
							<div className="w-20 h-20 bg-orange-50 rounded-full mx-auto mb-6 flex items-center justify-center border border-orange-100">
								<span className="text-3xl">🏗️</span>
							</div>
							<h3 className="text-2xl font-medium text-gray-800 mb-4 tracking-wide text-center">
								BONE GRAFTING
							</h3>
							<p className="text-gray-600 leading-relaxed font-normal text-center mb-6">
								Advanced bone regeneration techniques to create
								optimal foundation for implants.
							</p>
							<ul className="space-y-2 text-sm text-gray-600 font-normal">
								<li>• Sinus lift procedures</li>
								<li>• Ridge augmentation</li>
								<li>• Autologous & synthetic grafts</li>
								<li>• Guided bone regeneration</li>
							</ul>
						</div>

						<div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 scroll-animate">
							<div className="w-20 h-20 bg-teal-50 rounded-full mx-auto mb-6 flex items-center justify-center border border-teal-100">
								<span className="text-3xl">⚡</span>
							</div>
							<h3 className="text-2xl font-medium text-gray-800 mb-4 tracking-wide text-center">
								IMMEDIATE LOADING
							</h3>
							<p className="text-gray-600 leading-relaxed font-normal text-center mb-6">
								Get your implants and temporary teeth in a
								single visit with quick loading protocols.
							</p>
							<ul className="space-y-2 text-sm text-gray-600 font-normal">
								<li>• Same-day teeth delivery</li>
								<li>• Reduced treatment time</li>
								<li>• Minimal downtime</li>
								<li>• Advanced stability testing</li>
							</ul>
						</div>

						<div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 scroll-animate">
							<div className="w-20 h-20 bg-red-50 rounded-full mx-auto mb-6 flex items-center justify-center border border-red-100">
								<span className="text-3xl">🎯</span>
							</div>
							<h3 className="text-2xl font-medium text-gray-800 mb-4 tracking-wide text-center">
								GUIDED SURGERY
							</h3>
							<p className="text-gray-600 leading-relaxed font-normal text-center mb-6">
								Computer-guided implant placement for maximum
								precision and minimal invasiveness.
							</p>
							<ul className="space-y-2 text-sm text-gray-600 font-normal">
								<li>• 3D surgical guides</li>
								<li>• Flapless procedures</li>
								<li>• Reduced surgery time</li>
								<li>• Predictable outcomes</li>
							</ul>
						</div>
					</div>

					{/* Call to Action Box - Enhanced like Hero Section */}
					<div className="relative bg-linear-to-br from-blue-900 via-blue-800 to-indigo-900 rounded-2xl overflow-hidden scroll-animate">
						{/* Enhanced Background Pattern - Similar to Hero */}
						<div className="absolute inset-0">
							{/* Gradient overlay for better text readability */}
							<div className="absolute inset-0 bg-linear-to-br from-blue-900/80 via-blue-800/70 to-indigo-900/80 rounded-2xl"></div>

							{/* Animated geometric patterns */}
							<div className="absolute inset-0 opacity-10">
								<div className="absolute top-6 left-6 w-16 h-16 border border-white rounded-full animate-float"></div>
								<div className="absolute top-8 right-8 w-20 h-20 border border-blue-200 rounded-full animate-float-delayed"></div>
								<div className="absolute bottom-6 left-1/3 w-12 h-12 border border-white rounded-full animate-float"></div>
								<div className="absolute bottom-4 right-6 w-18 h-18 border border-blue-200 rounded-full animate-float-delayed"></div>
							</div>

							{/* Additional depth with blurred circles */}
							<div className="absolute inset-0 opacity-20">
								<div className="absolute top-8 left-8 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
								<div className="absolute bottom-8 right-8 w-40 h-40 bg-blue-300/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
								<div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/10 rounded-full blur-lg animate-pulse delay-500"></div>
							</div>

							{/* Enhanced floating particles */}
							<div className="absolute inset-0 overflow-hidden">
								<div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white/60 rounded-full animate-ping delay-1000"></div>
								<div className="absolute top-3/4 left-3/4 w-1 h-1 bg-white/60 rounded-full animate-ping delay-2000"></div>
								<div className="absolute top-1/2 left-1/6 w-2 h-2 bg-white/50 rounded-full animate-ping delay-1500"></div>
								<div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-white/70 rounded-full animate-ping delay-2500"></div>
							</div>
						</div>

						{/* 3D Floating Tooth Icon */}
						<div className="absolute top-8 right-8 hidden md:block animate-float z-10">
							<div className="relative transform rotate-12">
								<div className="text-4xl filter drop-shadow-2xl opacity-80">
									🦷
								</div>
								<div className="absolute -inset-2 bg-white/20 rounded-full blur-lg animate-pulse"></div>
							</div>
						</div>

						{/* Main Content */}
						<div className="relative z-20 p-12 text-center text-white">
							{/* Animated badge */}
							<div className="mb-6 inline-block">
								<div className="bg-white/20 backdrop-blur-md rounded-full px-6 py-2 border border-white/30">
									<span className="text-white text-sm font-medium tracking-wider drop-shadow-sm">
										TRANSFORM YOUR SMILE TODAY
									</span>
								</div>
							</div>

							<h3 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wider mb-6 drop-shadow-2xl">
								RESTORE YOUR SMILE WITH CONFIDENCE
							</h3>

							<div className="w-full max-w-3xl mx-auto">
								<hr className="border-white/60 mb-6" />
								<p className="text-xl text-white/90 font-light leading-relaxed mb-4 drop-shadow-lg max-w-2xl mx-auto">
									Our expert team combines advanced technology
									with years of experience to deliver
									exceptional results
								</p>
								<p className="text-white/80 text-base font-light tracking-wide mb-8 max-w-xl mx-auto drop-shadow-sm">
									AI-guided precision • Same-day procedures •
									Lifetime warranty • 500+ successful cases
								</p>
								<hr className="border-white/60 mb-8" />

								{/* Enhanced CTA Buttons */}
								<div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
									<a
										href="#appointments"
										className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-3 rounded-full font-medium tracking-wider transition-all duration-300 hover:bg-white/30 hover:scale-105 hover:shadow-xl drop-shadow-sm"
									>
										SCHEDULE CONSULTATION
									</a>
									<a
										href="#technology"
										className="bg-transparent border-2 border-white/70 text-white px-8 py-3 rounded-full font-medium tracking-wider transition-all duration-300 hover:bg-white/10 hover:border-white hover:scale-105 drop-shadow-sm"
									>
										LEARN ABOUT OUR TECHNOLOGY
									</a>
								</div>

								{/* Quick Stats */}
								<div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
									<div className="text-center">
										<div className="text-2xl font-light text-white mb-1 drop-shadow-lg">
											95%
										</div>
										<div className="text-xs text-white/80 tracking-wide drop-shadow-sm">
											SUCCESS RATE
										</div>
									</div>
									<div className="text-center border-l border-r border-white/40 px-4">
										<div className="text-2xl font-light text-white mb-1 drop-shadow-lg">
											24HR
										</div>
										<div className="text-xs text-white/80 tracking-wide drop-shadow-sm">
											QUICK LOADING
										</div>
									</div>
									<div className="text-center">
										<div className="text-2xl font-light text-white mb-1 drop-shadow-lg">
											AI
										</div>
										<div className="text-xs text-white/80 tracking-wide drop-shadow-sm">
											PRECISION
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Technology Section - AI Driven Precision */}
			<section
				id="technology"
				className="min-h-screen bg-white text-gray-800 flex items-center"
			>
				<div className="w-full max-w-6xl mx-auto px-8 py-16">
					<div className="text-center mb-20 scroll-animate">
						<h2 className="text-4xl md:text-6xl font-light text-gray-800 mb-8 tracking-wide">
							AI DRIVEN PRECISION
						</h2>
						<hr className="w-32 border-gray-300 mx-auto mb-12" />
						<p className="text-xl text-gray-600 font-normal max-w-3xl mx-auto leading-relaxed">
							Cutting-edge technology meets expert craftsmanship.
							Our AI-powered systems ensure precision-driven care
							for optimal results.
						</p>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
						{/* Left Column - Technology Features */}
						<div className="space-y-8">
							<div className="bg-blue-50 rounded-lg p-8 border border-blue-100 scroll-animate">
								<div className="flex items-center mb-6">
									<div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-6 border border-blue-200">
										<span className="text-2xl">🧠</span>
									</div>
									<div>
										<h3 className="text-2xl font-medium tracking-wide mb-2 text-gray-800">
											AI TREATMENT PLANNING
										</h3>
										<p className="text-gray-600 font-normal">
											Advanced algorithms for precise
											implant placement
										</p>
									</div>
								</div>
								<p className="text-gray-600 leading-relaxed font-normal">
									Our AI-driven planning software analyzes
									bone density, nerve pathways, and optimal
									positioning to ensure the highest success
									rates for every implant procedure.
								</p>
							</div>

							<div className="bg-green-50 rounded-lg p-8 border border-green-100 scroll-animate">
								<div className="flex items-center mb-6">
									<div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-6 border border-green-200">
										<span className="text-2xl">⚡</span>
									</div>
									<div>
										<h3 className="text-2xl font-medium tracking-wide mb-2 text-gray-800">
											QUICK LOADING PROTOCOLS
										</h3>
										<p className="text-gray-600 font-normal">
											Same-day implant and crown placement
										</p>
									</div>
								</div>
								<p className="text-gray-300 leading-relaxed font-light">
									Revolutionary quick loading techniques allow
									patients to receive implants and temporary
									restorations in a single visit, minimizing
									downtime.
								</p>
							</div>

							<div className="bg-linear-to-r from-orange-900/50 to-red-900/50 backdrop-blur-sm rounded-xl p-8 border border-white/10">
								<div className="flex items-center mb-6">
									<div className="w-16 h-16 bg-linear-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mr-6">
										<span className="text-2xl">🔬</span>
									</div>
									<div>
										<h3 className="text-2xl font-light tracking-wider mb-2">
											ADVANCED DIAGNOSTICS
										</h3>
										<p className="text-gray-300 font-light">
											3D imaging and digital impressions
										</p>
									</div>
								</div>
								<p className="text-gray-300 leading-relaxed font-light">
									State-of-the-art CBCT scanning and intraoral
									scanners provide detailed 3D models for
									precise treatment planning and predictable
									outcomes.
								</p>
							</div>
						</div>

						{/* Right Column - Technology Showcase */}
						<div className="relative">
							<div className="bg-linear-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
								<div className="text-center">
									<div className="w-32 h-32 bg-linear-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-8 flex items-center justify-center">
										<span className="text-5xl">🦷</span>
									</div>
									<h3 className="text-3xl font-light tracking-wider mb-6">
										FULL-MOUTH RESTORATION
									</h3>
									<p className="text-gray-300 leading-relaxed font-light mb-8">
										From single implants to complete oral
										rehabilitation, our advanced techniques
										restore function and aesthetics with
										precision.
									</p>

									<div className="grid grid-cols-2 gap-6 text-center">
										<div className="bg-white/5 rounded-lg p-4">
											<div className="text-3xl font-light text-blue-400 mb-2">
												95%
											</div>
											<div className="text-xs text-gray-400 tracking-wide">
												SUCCESS RATE
											</div>
										</div>
										<div className="bg-white/5 rounded-lg p-4">
											<div className="text-3xl font-light text-green-400 mb-2">
												24HR
											</div>
											<div className="text-xs text-gray-400 tracking-wide">
												QUICK LOADING
											</div>
										</div>
										<div className="bg-white/5 rounded-lg p-4">
											<div className="text-3xl font-light text-purple-400 mb-2">
												AI
											</div>
											<div className="text-xs text-gray-400 tracking-wide">
												PRECISION
											</div>
										</div>
										<div className="bg-white/5 rounded-lg p-4">
											<div className="text-3xl font-light text-orange-400 mb-2">
												3D
											</div>
											<div className="text-xs text-gray-400 tracking-wide">
												IMAGING
											</div>
										</div>
									</div>
								</div>
							</div>

							{/* Floating particles for tech feel */}
							<div className="absolute inset-0 overflow-hidden pointer-events-none">
								<div className="absolute top-10 left-10 w-2 h-2 bg-blue-400/40 rounded-full animate-pulse"></div>
								<div className="absolute top-1/3 right-8 w-1 h-1 bg-purple-400/60 rounded-full animate-ping delay-1000"></div>
								<div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-green-400/30 rounded-full animate-pulse delay-500"></div>
								<div className="absolute bottom-10 right-12 w-1 h-1 bg-orange-400/50 rounded-full animate-ping delay-1500"></div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Advanced Procedures Section */}
			<section className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 flex items-center">
				<div className="w-full max-w-6xl mx-auto px-8 py-16">
					<div className="text-center mb-20 scroll-animate">
						<h2 className="text-4xl md:text-6xl font-light text-gray-800 mb-8 tracking-wider">
							ADVANCED PROCEDURES
						</h2>
						<hr className="w-32 border-gray-400 mx-auto mb-12" />
						<p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
							Cutting-edge treatments for complex cases and
							comprehensive oral rehabilitation
						</p>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
						{/* Full Mouth Restoration */}
						<div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-200 scroll-animate">
							<div className="bg-linear-to-br from-blue-500 to-purple-600 p-8 text-white">
								<div className="flex items-center mb-4">
									<div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-4">
										<span className="text-2xl">🦷</span>
									</div>
									<div>
										<h3 className="text-2xl font-light tracking-wider">
											FULL-MOUTH RESTORATION
										</h3>
										<p className="text-blue-100 font-light">
											Complete oral rehabilitation
										</p>
									</div>
								</div>
								<div className="grid grid-cols-3 gap-4 mt-6">
									<div className="text-center">
										<div className="text-2xl font-light mb-1">
											24HR
										</div>
										<div className="text-xs text-blue-200">
											SAME DAY
										</div>
									</div>
									<div className="text-center">
										<div className="text-2xl font-light mb-1">
											95%
										</div>
										<div className="text-xs text-blue-200">
											SUCCESS
										</div>
									</div>
									<div className="text-center">
										<div className="text-2xl font-light mb-1">
											AI
										</div>
										<div className="text-xs text-blue-200">
											GUIDED
										</div>
									</div>
								</div>
							</div>
							<div className="p-8">
								<p className="text-gray-600 leading-relaxed font-light mb-6">
									Transform your entire smile with
									comprehensive full-mouth implant
									restoration. Our AI-guided approach ensures
									precise placement and optimal aesthetics.
								</p>
								<ul className="space-y-3 text-gray-600 font-light">
									<li className="flex items-center">
										<span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
										All-on-4 and All-on-6 solutions
									</li>
									<li className="flex items-center">
										<span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
										Immediate loading protocols
									</li>
									<li className="flex items-center">
										<span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
										Custom prosthetic design
									</li>
									<li className="flex items-center">
										<span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
										Lifetime maintenance program
									</li>
								</ul>
							</div>
						</div>

						{/* Complex Case Management */}
						<div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-200 scroll-animate">
							<div className="bg-linear-to-br from-green-500 to-teal-600 p-8 text-white">
								<div className="flex items-center mb-4">
									<div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-4">
										<span className="text-2xl">🧬</span>
									</div>
									<div>
										<h3 className="text-2xl font-light tracking-wider">
											COMPLEX CASES
										</h3>
										<p className="text-green-100 font-light">
											Advanced surgical solutions
										</p>
									</div>
								</div>
								<div className="grid grid-cols-3 gap-4 mt-6">
									<div className="text-center">
										<div className="text-2xl font-light mb-1">
											3D
										</div>
										<div className="text-xs text-green-200">
											PLANNING
										</div>
									</div>
									<div className="text-center">
										<div className="text-2xl font-light mb-1">
											NO
										</div>
										<div className="text-xs text-green-200">
											GRAFTING
										</div>
									</div>
									<div className="text-center">
										<div className="text-2xl font-light mb-1">
											SAFE
										</div>
										<div className="text-xs text-green-200">
											SURGERY
										</div>
									</div>
								</div>
							</div>
							<div className="p-8">
								<p className="text-gray-600 leading-relaxed font-light mb-6">
									Specialized treatment for challenging cases
									including severe bone loss, failed implants,
									and complex anatomical considerations.
								</p>
								<ul className="space-y-3 text-gray-600 font-light">
									<li className="flex items-center">
										<span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
										Zygomatic implant expertise
									</li>
									<li className="flex items-center">
										<span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
										Pterygoid implant placement
									</li>
									<li className="flex items-center">
										<span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
										Revision implant surgery
									</li>
									<li className="flex items-center">
										<span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
										Nerve repositioning
									</li>
								</ul>
							</div>
						</div>
					</div>

					{/* Treatment Process Timeline */}
					<div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200 scroll-animate">
						<h3 className="text-3xl font-light text-center mb-12 tracking-wider">
							TREATMENT JOURNEY
						</h3>
						<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
							<div className="text-center">
								<div className="w-16 h-16 bg-linear-to-br from-blue-100 to-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
									<span className="text-2xl">📋</span>
								</div>
								<h4 className="text-lg font-light mb-2 tracking-wide">
									CONSULTATION
								</h4>
								<p className="text-gray-600 text-sm font-light">
									Comprehensive assessment and 3D imaging
								</p>
							</div>
							<div className="text-center">
								<div className="w-16 h-16 bg-linear-to-br from-green-100 to-green-200 rounded-full mx-auto mb-4 flex items-center justify-center">
									<span className="text-2xl">🧠</span>
								</div>
								<h4 className="text-lg font-light mb-2 tracking-wide">
									AI PLANNING
								</h4>
								<p className="text-gray-600 text-sm font-light">
									Precision treatment planning with AI
								</p>
							</div>
							<div className="text-center">
								<div className="w-16 h-16 bg-linear-to-br from-purple-100 to-purple-200 rounded-full mx-auto mb-4 flex items-center justify-center">
									<span className="text-2xl">⚕️</span>
								</div>
								<h4 className="text-lg font-light mb-2 tracking-wide">
									SURGERY
								</h4>
								<p className="text-gray-600 text-sm font-light">
									Minimally invasive guided surgery
								</p>
							</div>
							<div className="text-center">
								<div className="w-16 h-16 bg-linear-to-br from-orange-100 to-orange-200 rounded-full mx-auto mb-4 flex items-center justify-center">
									<span className="text-2xl">😊</span>
								</div>
								<h4 className="text-lg font-light mb-2 tracking-wide">
									RESTORATION
								</h4>
								<p className="text-gray-600 text-sm font-light">
									Final prosthetic and follow-up care
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Statistics Counter Section */}
			<section className="min-h-screen bg-linear-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center">
				<div className="w-full max-w-6xl mx-auto px-8 py-16">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
						{/* Left Side - Animated Counters */}
						<div className="space-y-12 scroll-animate">
							<div className="text-center lg:text-left mb-12">
								<h2 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-wide">
									PROVEN EXCELLENCE
								</h2>
								<hr className="w-32 border-white/40 lg:mx-0 mx-auto mb-6" />
								<p className="text-xl text-white/90 font-light leading-relaxed">
									Numbers that speak for our commitment to
									exceptional dental care
								</p>
							</div>

							{/* Animated Counter Cards */}
							<div className="space-y-8">
								<div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 scroll-animate">
									<div className="flex items-center justify-between">
										<div>
											<div
												className="text-5xl font-light text-white mb-2 counter-animate"
												data-target="500"
											>
												0+
											</div>
											<div className="text-white/80 text-lg font-medium tracking-wide">
												SUCCESSFUL SURGERIES
											</div>
											<div className="text-white/60 text-sm font-light mt-1">
												Complex implant procedures
												completed
											</div>
										</div>
										<div className="w-20 h-20 bg-linear-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center">
											<span className="text-3xl">⚡</span>
										</div>
									</div>
								</div>

								<div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 scroll-animate">
									<div className="flex items-center justify-between">
										<div>
											<div
												className="text-5xl font-light text-white mb-2 counter-animate"
												data-target="99"
											>
												0%
											</div>
											<div className="text-white/80 text-lg font-medium tracking-wide">
												HAPPY PATIENTS
											</div>
											<div className="text-white/60 text-sm font-light mt-1">
												Satisfaction rate from our
												reviews
											</div>
										</div>
										<div className="w-20 h-20 bg-linear-to-br from-green-400 to-emerald-400 rounded-full flex items-center justify-center">
											<span className="text-3xl">😊</span>
										</div>
									</div>
								</div>

								<div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 scroll-animate">
									<div className="flex items-center justify-between">
										<div>
											<div
												className="text-5xl font-light text-white mb-2 counter-animate"
												data-target="12"
											>
												0+
											</div>
											<div className="text-white/80 text-lg font-medium tracking-wide">
												YEARS EXPERIENCE
											</div>
											<div className="text-white/60 text-sm font-light mt-1">
												Dedicated to advanced dental
												care
											</div>
										</div>
										<div className="w-20 h-20 bg-linear-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
											<span className="text-3xl">🎓</span>
										</div>
									</div>
								</div>

								<div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 scroll-animate">
									<div className="flex items-center justify-between">
										<div>
											<div
												className="text-5xl font-light text-white mb-2 counter-animate"
												data-target="70"
											>
												0+
											</div>
											<div className="text-white/80 text-lg font-medium tracking-wide">
												IMPLANTS PLACED
											</div>
											<div className="text-white/60 text-sm font-light mt-1">
												For underprivileged patients
												(volunteer work)
											</div>
										</div>
										<div className="w-20 h-20 bg-linear-to-br from-orange-400 to-red-400 rounded-full flex items-center justify-center">
											<span className="text-3xl">❤️</span>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Right Side - Visual Element */}
						<div className="relative scroll-animate">
							<div className="bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/10">
								<div className="text-center">
									<div className="w-40 h-40 bg-linear-to-br from-blue-400 via-purple-500 to-pink-500 rounded-full mx-auto mb-8 flex items-center justify-center animate-pulse">
										<span className="text-6xl">🏆</span>
									</div>
									<h3 className="text-3xl font-light text-white mb-6 tracking-wide">
										AWARD WINNING CARE
									</h3>
									<p className="text-white/80 text-lg font-light leading-relaxed mb-8">
										Recognized excellence in dental
										implantology and patient satisfaction
									</p>
									<div className="grid grid-cols-2 gap-6">
										<div className="text-center">
											<div className="w-16 h-16 bg-white/10 rounded-full mx-auto mb-3 flex items-center justify-center">
												<span className="text-2xl">
													🔬
												</span>
											</div>
											<div className="text-white/80 text-sm font-medium">
												Advanced Technology
											</div>
										</div>
										<div className="text-center">
											<div className="w-16 h-16 bg-white/10 rounded-full mx-auto mb-3 flex items-center justify-center">
												<span className="text-2xl">
													⭐
												</span>
											</div>
											<div className="text-white/80 text-sm font-medium">
												5-Star Reviews
											</div>
										</div>
									</div>
								</div>
							</div>

							{/* Floating elements for visual appeal */}
							<div className="absolute inset-0 overflow-hidden pointer-events-none">
								<div className="absolute top-10 right-10 w-3 h-3 bg-blue-400/40 rounded-full animate-bounce delay-1000"></div>
								<div className="absolute bottom-16 left-8 w-2 h-2 bg-purple-400/60 rounded-full animate-ping delay-2000"></div>
								<div className="absolute top-1/2 left-4 w-4 h-4 bg-pink-400/30 rounded-full animate-pulse delay-1500"></div>
							</div>
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
						<div className="scroll-animate">
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
						<div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-xl scroll-animate">
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
						{[
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
						].map((review, index) => (
							<div
								key={index}
								className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 scroll-animate"
							>
								<div className="flex items-center justify-between mb-6">
									<div className="flex text-amber-400 text-sm">
										{[...Array(review.rating)].map(
											(_, i) => (
												<span key={i}>⭐</span>
											),
										)}
									</div>
									<span className="text-xs bg-blue-50 text-blue-600 px-3 py-1 rounded-full font-medium">
										{review.treatment}
									</span>
								</div>
								<p className="text-gray-600 mb-6 leading-relaxed font-light italic">
									"{review.text}"
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
						<div className="scroll-animate">
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
						<div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-xl scroll-animate">
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
					<div className="grid grid-cols-1 md:grid-cols-4 gap-12">
						<div>
							<h3 className="text-3xl font-light mb-6 tracking-wider">
								DENTESSA
							</h3>
							<p className="text-gray-300 mb-6 font-light leading-relaxed">
								Precision-driven care to restore your smile with
								confidence, comfort, and long-lasting results.
							</p>
							<div className="flex space-x-4">
								<a
									href="https://www.facebook.com/WorldImplantCenter"
									className="text-gray-400 hover:text-blue-400 transition-colors"
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
									className="text-gray-400 hover:text-blue-400 transition-colors"
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
									<p className="text-sm">
										worldimplantcenter@gmail.com
									</p>
								</div>
								<div>
									<a
										href="tel:+918660603183"
										className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors"
									>
										CALL NOW
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
						<p className="font-light tracking-wide">
							&copy; 2026 DENTESSA DENTAL CLINIC. ALL RIGHTS
							RESERVED.
						</p>
						<p className="text-sm mt-2">
							Care, Inventiveness & Precision.
						</p>
					</div>
				</div>
			</footer>
		</main>
	);
}
