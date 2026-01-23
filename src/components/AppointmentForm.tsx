"use client";

import { useState } from "react";

export default function AppointmentForm() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		service: "",
		message: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitMessage, setSubmitMessage] = useState("");

	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
		>,
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		setSubmitMessage("");

		// Simulate form submission
		setTimeout(() => {
			setIsSubmitting(false);
			setSubmitMessage(
				"Thank you! Your appointment request has been submitted. We'll contact you within 24 hours to confirm your appointment.",
			);
			setFormData({
				name: "",
				email: "",
				phone: "",
				service: "",
				message: "",
			});
		}, 1000);
	};

	return (
		<div>
			<h3 className="text-2xl font-light text-gray-800 mb-8 tracking-wider">
				REQUEST APPOINTMENT
			</h3>

			{submitMessage && (
				<div className="mb-8 p-6 bg-green-50/50 border border-green-200 rounded-lg">
					<p className="text-green-700 text-sm font-light">
						{submitMessage}
					</p>
				</div>
			)}

			<form onSubmit={handleSubmit} className="space-y-6">
				<div>
					<input
						type="text"
						id="name"
						name="name"
						value={formData.name}
						onChange={handleChange}
						required
						className="w-full bg-transparent border-0 border-b border-gray-300 py-3 px-0 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-brand-blue transition-colors font-light"
						placeholder="Full Name"
					/>
				</div>

				<div>
					<input
						type="email"
						id="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						required
						className="w-full bg-transparent border-0 border-b border-gray-300 py-3 px-0 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-brand-blue transition-colors font-light"
						placeholder="Email Address"
					/>
				</div>

				<div>
					<input
						type="tel"
						id="phone"
						name="phone"
						value={formData.phone}
						onChange={handleChange}
						required
						className="w-full bg-transparent border-0 border-b border-gray-300 py-3 px-0 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-brand-blue transition-colors font-light"
						placeholder="Phone Number"
					/>
				</div>

				<div>
					<select
						id="service"
						name="service"
						value={formData.service}
						onChange={handleChange}
						required
						className="w-full bg-transparent border-0 border-b border-gray-300 py-3 px-0 text-gray-800 focus:outline-none focus:border-brand-blue transition-colors font-light appearance-none"
					>
						<option value="" className="text-gray-400">
							Select a service
						</option>
						<option value="cleaning">Routine Cleaning</option>
						<option value="consultation">Consultation</option>
						<option value="filling">Filling</option>
						<option value="cosmetic">Cosmetic Consultation</option>
						<option value="orthodontics">Orthodontics</option>
						<option value="emergency">Emergency</option>
						<option value="other">Other</option>
					</select>
				</div>

				<div>
					<textarea
						id="message"
						name="message"
						value={formData.message}
						onChange={handleChange}
						rows={4}
						className="w-full bg-transparent border-0 border-b border-gray-300 py-3 px-0 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-brand-blue transition-colors resize-none font-light"
						placeholder="Additional information or questions (optional)"
					></textarea>
				</div>

				<button
					type="submit"
					disabled={isSubmitting}
					className={`w-full py-3 px-8 font-light tracking-wider transition-colors ${
						isSubmitting
							? "bg-gray-400 text-white cursor-not-allowed"
							: "bg-brand-green hover:bg-brand-green/90 text-white"
					}`}
				>
					{isSubmitting ? "SUBMITTING..." : "REQUEST APPOINTMENT"}
				</button>
			</form>
		</div>
	);
}
