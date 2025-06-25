import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{vue,js,ts}',
    './src/components/**/*.{vue,js,ts}',
    './src/layouts/**/*.{vue,js,ts}',
    './src/app.vue'
  ],
  theme: {
    extend: {},
  },
}

export default config
