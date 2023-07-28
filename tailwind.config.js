/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				"primary-main": "#301e4e",
				light: "#1F1235",
				"secondary-main": "#ff6e6c",
				gray: "rgba(255, 255, 255, 0.44)",
			},
			fontFamily: {
				"mobile-body-2": "'Source Sans Pro'",
				"mobile-body-1": "'Noto Sans'",
				"destop-h4": "'Playfair Display'",
			},
		},
	},
	corePlugins: {
		preflight: false,
	},
};
