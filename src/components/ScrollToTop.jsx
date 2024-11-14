import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
	const { pathname } = useLocation();

	useEffect(() => {
		if (!pathname.startsWith('/events/')) {
			window.scrollTo(0, 0);
		}
	}, [pathname]);

	return;
};

export default ScrollToTop;
