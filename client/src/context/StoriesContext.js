import { createContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import slugify from 'slugify'

const StoriesContext = createContext()

const initialStories = [
  {
    title: 'Sample story',
    slug: 'Sample-story',
    timeline: [
      {
        title: '@[Beth](Beth) is living the life',
        content: '',
      },
      {
        title: 'But @[Beth](Beth) wants her purse back from @[James](James)',
        content: '',
      },
      {
        title: '@[Beth](Beth) visits New York',
        content: '',
      },
      {
        title: '@[Beth](Beth) gets her purse back.',
        content: '',
      },
      {
        title: '@[Beth](Beth) lost her purse again to #Dragons.',
        content: '',
      },
    ],
  },
]

const StoriesProvider = ({ children }) => {
  const [stories, setStories] = useState(initialStories)
  const { push } = useHistory()

  const getStory = (storySlug) => stories.find((i) => i.slug === storySlug)

  const addStory = (storyName) => {
    setStories((oldStories) => [
      ...oldStories,
      {
        title: storyName,
        slug: slugify(storyName),
        timeline: [],
      },
    ])
    push(`/${slugify(storyName)}`)
  }

  const addTimelineItem = (storySlug, item) => {
    setStories((oldStories) =>
      oldStories.map((story) => {
        if (story.slug === storySlug)
          return {
            ...story,
            timeline: [
              ...story.timeline,
              {
                title: item,
                content: '',
              },
            ],
          }

        return story
      }),
    )
  }

  return (
    <StoriesContext.Provider
      value={{
        stories,
        setStories,
        getStory,
        addStory,
        addTimelineItem,
      }}
    >
      {children}
    </StoriesContext.Provider>
  )
}

export { StoriesProvider as default, StoriesContext }
