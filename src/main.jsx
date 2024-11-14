import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BlogPostProvider } from './context/BlogPostContext';
import './scss/main.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BlogPostProvider>
			<App />
		</BlogPostProvider>
	</React.StrictMode>,
);
