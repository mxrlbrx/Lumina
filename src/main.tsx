import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/default/_main.scss';
import './styles/default/_reset.scss';
import { App } from './App.tsx';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter basename="/Lumina">
			<App />
		</BrowserRouter>
	</StrictMode>,
);
