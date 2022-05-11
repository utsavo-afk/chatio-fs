import { extendTheme } from '@chakra-ui/react';

const theme = {
	config: {
		initialColorMode: 'dark',
		useSystemColorMode: true,
	},
	styles: {
		global: {
			body: {
				margin: 0,
				'font-family':
					"-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', sans-serif",
				'-webkit-font-smoothing': 'antialiased',
				'-moz-osx-font-smoothing': 'grayscale',
			},
			code: {
				'font-family':
					"source-code-pro, Menlo, Monaco, Consolas, 'Courier new', monospace",
			},
		},
	},
};

export default extendTheme(theme);
