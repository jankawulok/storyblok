export const storyblokBridge = (
  content = { content: {} },
  events = ['change', 'input'],
  relations = [],
) => {
  if (window) {
    // eslint-disable-next-line
    const instance = new StoryblokBridge({
      resolveRelations: relations,
    })
    instance.on(events, (payload) => {
      content.value = {
        ...payload.story.content,
        _meta: payload.story,
      }
    })
  }
}
