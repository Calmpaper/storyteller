import { useContext, useState } from 'react'
import { UserContext } from 'context'
import { useQuery, useMutation } from 'urql'
import { getStoriesQuery, createStoryMutation } from 'api'
import { useHistory } from 'react-router-dom'
import slugify from 'slugify'
import StoryItem from './StoryItem'

const Home = () => {
  const { user } = useContext(UserContext)
  const { push } = useHistory()
  const [value, setValue] = useState('')

  const [{ data: { stories = [] } = {}, fetching, error }] = useQuery({
    query: getStoriesQuery,
    variables: { userEmail: user.email },
  })

  const [, createStory] = useMutation(createStoryMutation)

  if (fetching) return <div>loading...</div>
  if (error) return <p>Oh no... {error.message}</p>

  return (
    <div className="div-block-861-copy">
      <div className="form-block w-form">
        <div id="email-form">
          <div className="tab raf show-copy">
            {stories.map((story) => (
              <StoryItem story={story} key={story.id} />
            ))}
            <div className="_9cl">
              <div className="text-block-199-copy">All Stories</div>
            </div>
            <input
              type="text"
              className="text-field-2 sh w-input"
              maxLength={256}
              name="field-2"
              data-name="Field 2"
              data-ix="new-interaction-32"
              placeholder="Type title then press enter e.g. The Monkey's Paw "
              id="field-2"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={async (e) => {
                if (e.key === 'Enter') {
                  e.preventDefault()
                  const slug = slugify(value)
                  await createStory({
                    userEmail: user.email,
                    title: value,
                    slug,
                  })
                  push(`/${slug}`)
                  setValue('')
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
