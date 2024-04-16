'use client';

import { ContextProvider } from '@/contexts/contextProvider';

interface ProvidersProps {
	children: React.ReactNode;
}

const Providers = ({ children }: ProvidersProps) => (
	<ContextProvider>{children}</ContextProvider>
);

export default Providers;
