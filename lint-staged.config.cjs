module.exports = {
  '*{js,jsx,ts,tsx,md,mdx,html,css,json,astro}': 'pnpm prettier',
  '*.{js,jsx,ts,tsx}': ['pnpm lint', () => 'pnpm tsc'],
}
