import { Outlet } from 'react-router-dom';
import './_layout.scss';

export function Layout() {
	return (
		<div className="layout">
			<Outlet />
		</div>
	);
}
