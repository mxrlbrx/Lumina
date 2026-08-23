import type React from 'react';
import './_layout.scss';

export function Layout({ children }: { children: React.ReactNode }) {
	return <div className="layout"> {children} </div>;
}
