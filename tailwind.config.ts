import flowbite from 'flowbite-react/tailwind';
import flowbitePlugin from 'flowbite/plugin';
/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './node_modules/flowbite-react/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [flowbitePlugin],
};

export default config;
