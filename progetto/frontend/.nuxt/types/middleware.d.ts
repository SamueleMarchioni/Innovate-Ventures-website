import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/Users/samuele.marchioni/Desktop/u/progetto/frontend/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}