import { DevIcon } from '../icons/DevIcon';
import { LangIcon } from '../icons/LangIcon';
import './_studyMode.scss';

export function StudyMode() {
	return (
		<div className="study-mode">
			<div className="study-mode__card study-mode__card--lang">
				<div className="study-mode__icon-wrapper">
					<LangIcon />
				</div>
				<p className="study-mode__description">Languages</p>
			</div>

			<div className="study-mode__card study-mode__card--dev">
				<div className="study-mode__icon-wrapper">
					<DevIcon />
				</div>
				<p className="study-mode__description">Development</p>
			</div>
		</div>
	);
}
