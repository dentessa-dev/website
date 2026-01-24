"use client";

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function AppointmentForm() {
	useEffect(() => {
		(async function () {
			const cal = await getCalApi({ namespace: "30min" });
			cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
		})();
	}, []);

	return (
		<div className="text-center">
			<h3 className="text-2xl font-light text-gray-800 mb-8 tracking-wider">
				BOOK YOUR APPOINTMENT
			</h3>

			<button
				data-cal-namespace="30min"
				data-cal-link="likhil-n-maiya-5xfdoi/asf"
				data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
				className="w-full py-4 px-8 bg-brand-green hover:bg-brand-green/90 text-white font-light tracking-wider transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105"
			>
				BOOK APPOINTMENT
			</button>
		</div>
	);
}
