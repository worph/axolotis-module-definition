import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  splitting: false,
  treeshake: true,
  sourcemap: true,
  clean: true,
  dts:true,
  minify:true,
  format: ['cjs', 'esm'],
})
