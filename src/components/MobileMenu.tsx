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
				<div className="absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-white/30 shadow-lg">
					<div className="py-2">
						<a
							href="#about"
							className="block px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-gray-900 font-light tracking-wide"
							onClick={closeMenu}
						>
							ABOUT
						</a>
						<a
							href="#services"
							className="block px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-gray-900 font-light tracking-wide"
							onClick={closeMenu}
						>
							SERVICES
						</a>
						<a
							href="#appointments"
							className="block px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-gray-900 font-light tracking-wide"
							onClick={closeMenu}
						>
							APPOINTMENTS
						</a>
						<a
							href="#reviews"
							className="block px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-gray-900 font-light tracking-wide"
							onClick={closeMenu}
						>
							REVIEWS
						</a>
						<a
							href="#contact"
							className="block px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-gray-900 font-light tracking-wide"
							onClick={closeMenu}
						>
							CONTACT
						</a>
					</div>
				</div>
			)}
		</div>
	);
}
