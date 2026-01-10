'use client';

import React, { createContext, useContext, useState } from 'react';

export type SectionKey =
	| 'hero'
	| 'zinnia'
	| 'services'
	| 'technologies'
	| 'portfolio'
	| 'about'
	| 'contact';

type SectionContextValue = {
	activeSection: SectionKey;
	setActiveSection: (section: SectionKey) => void;
};

const SectionContext = createContext<SectionContextValue | undefined>(undefined);

export function SectionProvider({ children }: { children: React.ReactNode }) {
	const [activeSection, setActiveSection] = useState<SectionKey>('hero');

	return (
		<SectionContext.Provider value={{ activeSection, setActiveSection }}>
			{children}
		</SectionContext.Provider>
	);
}

export function useSection() {
	const ctx = useContext(SectionContext);
	if (!ctx) throw new Error('useSection must be used within SectionProvider');
	return ctx;
}
