import { BgGlowDev } from '../../components/common/BgGlow/BgGlowDev';
import { BgGlowLang } from '../../components/common/BgGlow/BgGlowLang';
import { StartButton } from '../../components/common/StartButton/StartButton';
import { StudyMode } from '../../components/common/StudyMode/StudyMode';
import './_onboarding.scss';

export function Onboarding() {
	return (
		<div className="onboarding-container">
			<div className="onboarding-container__glow">
				<StudyMode />
				<BgGlowLang />
				<BgGlowDev />
			</div>
			<h1 className="onboarding-container__head">Lumina</h1>
			<p className="onboarding-container__description">
				Master languages. Master code. Train your brain with neural spaced repetition
			</p>
			<StartButton />
		</div>
	);
}
