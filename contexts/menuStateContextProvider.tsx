'use client';

import React, { createContext, useState, useMemo } from 'react';

interface MenuProps {
	isMenuOpen: boolean;
	setIsMenuOpen: (value: boolean) => void;
}

const MenuStateContext = createContext<MenuProps>({
	isMenuOpen: false,
	setIsMenuOpen: () => { },
});

interface Props {
	children: React.ReactNode;
}

const MenuStateContextProvider = ({ children }: Props) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const value = useMemo(
		() => ({
			isMenuOpen,
			setIsMenuOpen,
		}),
		[isMenuOpen]
	);

	return <MenuStateContext.Provider value={value}>{children}</MenuStateContext.Provider>;
};

export { MenuStateContext, MenuStateContextProvider };
