"use client";

import { useEffect } from "react";

export function useScrollAnimation() {
	useEffect(() => {
		const observerOptions = {
			threshold: 0.1,
			rootMargin: "0px 0px -50px 0px",
		};

		const animateCounter = (element: Element) => {
			const target = parseInt(element.getAttribute("data-target") || "0");
			const suffix = element.getAttribute("data-suffix") || "+";
			const steps = 80;
			const increment = target / steps;
			let current = 0;

			const updateCounter = () => {
				current += increment;
				if (current >= target) {
					current = target;
					if (element.textContent?.includes("%")) {
						element.textContent = `${Math.round(current)}%`;
					} else {
						element.textContent = `${Math.round(current)}${suffix}`;
					}
				} else {
					if (element.textContent?.includes("%")) {
						element.textContent = `${Math.round(current)}%`;
					} else {
						element.textContent = `${Math.round(current)}${suffix}`;
					}
					requestAnimationFrame(updateCounter);
				}
			};

			updateCounter();
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					if (entry.target.classList.contains("scroll-animate")) {
						entry.target.classList.add("animate-slide-up");
						entry.target.classList.remove("opacity-0", "translate-y-8");
					}

					if (entry.target.classList.contains("counter-animate")) {
						animateCounter(entry.target);
						observer.unobserve(entry.target);
					}
				}
			});
		}, observerOptions);

		const animatedElements = document.querySelectorAll(".scroll-animate");
		animatedElements.forEach((el) => observer.observe(el));

		const counterElements = document.querySelectorAll(".counter-animate");
		counterElements.forEach((el) => observer.observe(el));

		return () => observer.disconnect();
	}, []);
}
