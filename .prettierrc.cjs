/** @type {import('prettier').Config} */
module.exports = {
  printWidth: 100,
  semi: false,
  singleQuote: true,
  trailingComma: 'all', // 'all' é mais consistente que 'es5' com TypeScript
  tabWidth: 2,
  useTabs: false,
  bracketSpacing: true,
  arrowParens: 'always',
  jsxSingleQuote: false,
  proseWrap: 'preserve',
  endOfLine: 'auto',
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindFunctions: ['tv'],
}
