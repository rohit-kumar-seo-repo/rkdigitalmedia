/** @type {import('postcss-load-config').Config} */
const config = {
  // This standalone admin app uses plain CSS, not Tailwind.
  // Keep it isolated from the website's root PostCSS/Tailwind configuration.
  plugins: {
    autoprefixer: {},
  },
};
export default config;
