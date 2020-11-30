import TextareaAutosize from 'react-textarea-autosize'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from 'urql'
import { getStoryQuery } from 'api'
import { UserContext } from 'context'
import { wrapTags } from 'helpers'

const StoryWrite = () => {
  const { user } = useContext(UserContext)
  const { story: storySlug } = useParams()
  const [{ data: { story } = {}, fetching, error }] = useQuery({
    query: getStoryQuery,
    variables: { authorEmail: user.email, slug: storySlug },
  })

  if (fetching) return <div>loading...</div>
  if (error) return <p>Oh no... {error.message}</p>

  return (
    <div className="div-block-861-copy">
      <div className="form-block w-form">
        <div id="email-form" name="email-form" data-name="Email Form">
          <input
            type="text"
            className="text-field w-input"
            maxLength={256}
            name="name"
            data-name="Name"
            value={story.title}
            id="name"
          />
          {story.chapters[0].events.map((item, index) => (
            <TextareaAutosize
              type="text"
              className="text-field-2 w-input"
              placeholder={`${index + 1}. ${wrapTags(item.title, true).join(
                '',
              )}`}
              autofocus={index === 0}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default StoryWrite
