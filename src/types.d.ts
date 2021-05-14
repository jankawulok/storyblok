import { StoryblokCache } from 'storyblok-js-client'

export interface ContentSearchParams {
  token: string
  cacheProvider: string
  cache?: StoryblokCache
  slug?: string,
  params?: any
}
export interface ApiContext {
  client: any
  config: ContentSearchParams
}
export interface Component {
  component: string
}
