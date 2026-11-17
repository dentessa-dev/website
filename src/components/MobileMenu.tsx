"use client";

import { useEffect, useState } from "react";

export default function MobileMenu() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => setIsOpen(!isOpen);
	const closeMenu = () => setIsOpen(false);

	useEffect(() => {
		if (!isOpen) {
			return;
		}

		const handleScroll = () => {
			closeMenu();
		};

		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [isOpen]);

	return (
		<div className="md:hidden flex items-center gap-2">
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
				href="https://wa.me/917406261890"
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
			<a
				href="https://www.linkedin.com/in/dr-daksh-mutreja-597571a8/"
				target="_blank"
				rel="noreferrer"
				aria-label="Dr. Daksh Mutreja on LinkedIn"
				className="h-11 w-11 rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/20 hover:border-white/30 transition-colors flex items-center justify-center shadow-sm"
			>
				<svg
					className="h-5 w-5"
					viewBox="0 0 24 24"
					fill="currentColor"
					aria-hidden="true"
				>
					<path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.27V1.73C24 .77 23.2 0 22.23 0z" />
				</svg>
			</a>
			{/* Hamburger Button */}
			<button
				onClick={toggleMenu}
				className="h-11 w-11 rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/20 hover:border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 transition-colors flex items-center justify-center"
				aria-label="Toggle menu"
			>
				<svg
					className="h-6 w-6"
					stroke="currentColor"
					fill="none"
					viewBox="0 0 24 24"
				>
					{isOpen ? (
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M6 18L18 6M6 6l12 12"
						/>
					) : (
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M4 6h16M4 12h16M4 18h16"
						/>
					)}
				</svg>
			</button>

			{/* Mobile Menu */}
			{isOpen && (
				<>
					{/* Backdrop overlay */}
					<div
						className="fixed inset-0 top-24 bg-black/30 backdrop-blur-sm z-40"
						onClick={closeMenu}
					/>
					<div className="fixed top-24 left-0 right-0 bg-brand-navy border-t border-brand-blue/30 shadow-lg z-50">
						<div className="py-4 px-4 space-y-1">
							<a
								href="#about"
								className="block px-4 py-3 text-white hover:text-brand-blue font-medium tracking-wide"
								onClick={closeMenu}
							>
								ABOUT
							</a>
							<a
								href="#services"
								className="block px-4 py-3 text-white hover:text-brand-blue font-medium tracking-wide"
								onClick={closeMenu}
							>
								SERVICES
							</a>
							<a
								href="#technology"
								className="block px-4 py-3 text-white hover:text-brand-blue font-medium tracking-wide"
								onClick={closeMenu}
							>
								TECHNOLOGY
							</a>
							<a
								href="#appointments"
								className="block px-4 py-3 text-white hover:text-brand-blue font-medium tracking-wide"
								onClick={closeMenu}
							>
								APPOINTMENTS
							</a>
							<a
								href="#reviews"
								className="block px-4 py-3 text-white hover:text-brand-blue font-medium tracking-wide"
								onClick={closeMenu}
							>
								REVIEWS
							</a>
							<a
								href="#contact"
								className="block px-4 py-3 text-white hover:text-brand-blue font-medium tracking-wide"
								onClick={closeMenu}
							>
								CONTACT
							</a>
							<a
								href="#appointments"
								className="block mx-4 mt-4 bg-brand-green text-white text-center py-3 rounded font-medium tracking-wide"
								onClick={closeMenu}
							>
								BOOK NOW
							</a>
						</div>
					</div>
				</>
			)}
		</div>
	);
}
