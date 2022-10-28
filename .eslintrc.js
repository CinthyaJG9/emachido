module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		'plugin:react/recommended',
		'standard-with-typescript',
		'plugin:jsx-a11y/recommended',
		'plugin:react-hooks/recommended',
		'plugin:prettier/recommended',
	],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: './tsconfig.json',
	},
	plugins: [
		'react',
		'prettier',
		'react-hooks',
		'jsx-a11y',
		'@typescript-eslint',
	],
	rules: {
		'prettier/prettier': 'error',
	},
};
