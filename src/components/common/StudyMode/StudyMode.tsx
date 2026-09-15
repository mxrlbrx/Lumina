import { DevIcon } from '../icons/DevIcon';
import { LangIcon } from '../icons/LangIcon';
import './_studyMode.scss';

type StudyModeProps = {
	activeMode: 'lang' | 'dev';
	onChange: (mode: 'lang' | 'dev') => void;
};

export function StudyMode({ activeMode, onChange }: StudyModeProps) {
	return (
		<div className="study-mode">
			<div
				className={`study-mode__card study-mode__card--lang ${activeMode === 'lang' ? 'is-active' : ''}`}
				onClick={() => onChange('lang')}
			>
				<div className="study-mode__icon-wrapper">
					<LangIcon />
				</div>
				<p className="study-mode__description">Languages</p>
			</div>

			<div
				className={`study-mode__card study-mode__card--dev ${activeMode === 'dev' ? 'is-active' : ''}`}
				onClick={() => onChange('dev')}
			>
				<div className="study-mode__icon-wrapper">
					<DevIcon />
				</div>
				<p className="study-mode__description">Development</p>
			</div>
		</div>
	);
}
