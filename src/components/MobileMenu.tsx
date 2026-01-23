"use client";

import { useState } from "react";

export default function MobileMenu() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => setIsOpen(!isOpen);
	const closeMenu = () => setIsOpen(false);

	return (
		<div className="md:hidden">
			{/* Hamburger Button */}
			<button
				onClick={toggleMenu}
				className="p-2 rounded-md text-white/90 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50"
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
						<a href="#about" className="block px-4 py-3 text-white hover:text-brand-blue font-medium tracking-wide" onClick={closeMenu}>
							ABOUT
						</a>
						<a href="#services" className="block px-4 py-3 text-white hover:text-brand-blue font-medium tracking-wide" onClick={closeMenu}>
							SERVICES
						</a>
						<a href="#technology" className="block px-4 py-3 text-white hover:text-brand-blue font-medium tracking-wide" onClick={closeMenu}>
							TECHNOLOGY
						</a>
						<a href="#appointments" className="block px-4 py-3 text-white hover:text-brand-blue font-medium tracking-wide" onClick={closeMenu}>
							APPOINTMENTS
						</a>
						<a href="#reviews" className="block px-4 py-3 text-white hover:text-brand-blue font-medium tracking-wide" onClick={closeMenu}>
							REVIEWS
						</a>
						<a href="#contact" className="block px-4 py-3 text-white hover:text-brand-blue font-medium tracking-wide" onClick={closeMenu}>
							CONTACT
						</a>
						<a href="#appointments" className="block mx-4 mt-4 bg-brand-green text-white text-center py-3 rounded font-medium tracking-wide" onClick={closeMenu}>
							BOOK NOW
						</a>
					</div>
				</div>
				</>
			)}
		</div>
	);
}
