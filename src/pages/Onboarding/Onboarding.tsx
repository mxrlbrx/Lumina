import { useState } from 'react';
import { StartButton } from '../../components/common/StartButton/StartButton';
import { StudyMode } from '../../components/common/StudyMode/StudyMode';
import './_onboarding.scss';

export function Onboarding() {
	const [activeMode, setActiveMode] = useState<'lang' | 'dev'>('lang');
	return (
		<div className="onboarding">
			<StudyMode activeMode={activeMode} onChange={setActiveMode} />
			<div className="onboarding__content">
				<h1 className="onboarding__head">Lumina</h1>

				<p className="onboarding__description">
					Master languages. Master code. Train your brain with neural spaced repetition
				</p>
			</div>

			<StartButton />
		</div>
	);
}
