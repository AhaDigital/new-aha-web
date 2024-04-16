'use client';

import React, { cloneElement, ReactElement, ReactNode } from 'react';
import { MenuStateContextProvider } from './menuStateContextProvider';

interface ProviderComposerProps {
	contexts: ReactElement[];
	children: ReactNode;
}

const ProviderComposer = ({ contexts, children }: ProviderComposerProps): JSX.Element =>
	contexts.reduceRight((kids, parent) => cloneElement(parent, { children: kids }), children) as JSX.Element;

const ContextProvider = ({ children }: { children: ReactNode }): JSX.Element => (
	<ProviderComposer
		contexts={[
			<MenuStateContextProvider key="context-provider-0">{children}</MenuStateContextProvider>,
			// Include other context providers here.
		]}
	>
		{children}
	</ProviderComposer>
);

export { ContextProvider };
