import './_bgGlow.scss';

export function BgGlowLang() {
	return (
		<svg
			className="bg-glow bg-glow__lang"
			width="350"
			height="380"
			viewBox="0 0 351 380"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g filter="url(#filter0_f_627_15)">
				<circle cx="161" cy="190" r="110" fill="var(--main-orange)" fillOpacity="0.14902" />
			</g>
			<defs>
				<filter
					id="filter0_f_627_15"
					x="-29"
					y="0"
					width="380"
					height="380"
					filterUnits="userSpaceOnUse"
					colorInterpolationFilters="sRGB"
				>
					<feFlood floodOpacity="0" result="BackgroundImageFix" />
					<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
					<feGaussianBlur stdDeviation="40" result="effect1_foregroundBlur_627_15" />
				</filter>
			</defs>
		</svg>
	);
}
