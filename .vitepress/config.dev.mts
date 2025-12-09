import { defineConfig } from 'vitepress'
import baseConfig from './config.mts'

// 本地开发配置，覆盖 base 为根路径
export default defineConfig({
  ...baseConfig,
  base: '/'
})
