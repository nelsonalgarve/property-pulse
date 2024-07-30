import '../assets/styles/globals.css';

export const metadata = {
	title: 'React App',
	description: 'A simple React app with Next.js',
	keywords: ['react', 'next.js', 'app'],
	author: 'Your Name',
	image: '/favicon.png',
	favicon: '/favicon.png',
	ogSiteName: 'React App',
	ogTitle: 'React App',
	ogDescription: 'A simple React app with Next.js',
	ogImage: '/favicon.png',
	ogType: 'website',
	twitterCard: 'summary_large_image',
	twitterSite: '@your_twitter_handle',
	twitterCreator: '@your_twitter_handle',
	twitterTitle: 'React App',
	twitterDescription: 'A simple React app with Next.js',
	twitterImage: '/favicon.png',
};

const MainLayout = ({ children }) => {
	return (
		<html>
			<body>
				<main>{children}</main>
			</body>
		</html>
	);
};

export default MainLayout;
