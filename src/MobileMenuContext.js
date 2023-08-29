import React, { createContext, useContext, useState } from "react";

// Create a context for the mobile menu state
const MobileMenuContext = createContext();

// Create a custom hook to access the mobile menu context
export function useMobileMenu() {
	return useContext(MobileMenuContext);
}

// Provide the context at the top level of your application
export function MobileMenuProvider({ children }) {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	// Toggle the mobile menu state
	function toggleMobileMenu() {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	}

	return (
		<MobileMenuContext.Provider value={{ isMobileMenuOpen, toggleMobileMenu }}>
			{children}
		</MobileMenuContext.Provider>
	);
}
