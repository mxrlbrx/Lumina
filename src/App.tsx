import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { Onboarding } from './pages/Onboarding/Onboarding';

export function App() {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route path="/" element={<Onboarding />} />
			</Route>
		</Routes>
	);
}
