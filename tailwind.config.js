/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './node_modules/flowbite/**/*.js',
        './node_modules/flowbite-react/**/*.js',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',

        // Or if using `src` directory:
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    plugins: [require('flowbite/plugin')],
    theme: {},
}
