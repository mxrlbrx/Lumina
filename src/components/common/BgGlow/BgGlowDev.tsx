import './_bgGlow.scss';
export function BgGlowDev() {
	return (
		<svg
			className="bg-glow bg-glow__dev"
			width="350"
			height="380"
			viewBox="0 0 351 380"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g filter="url(#filter0_f_627_14)">
				<circle cx="190" cy="190" r="110" fill="#9D00FF" fillOpacity="0.14902" />
			</g>
			<defs>
				<filter
					id="filter0_f_627_14"
					x="0"
					y="0"
					width="380"
					height="380"
					filterUnits="userSpaceOnUse"
					colorInterpolationFilters="sRGB"
				>
					<feFlood floodOpacity="0" result="BackgroundImageFix" />
					<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
					<feGaussianBlur stdDeviation="40" result="effect1_foregroundBlur_627_14" />
				</filter>
			</defs>
		</svg>
	);
}
