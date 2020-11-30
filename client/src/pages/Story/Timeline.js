import { useState, useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import { UserContext } from 'context'
import { useQuery, useMutation } from 'urql'
import { getStoryQuery, createEventMutation } from 'api'
import TimelineItem from 'components/TimelineItem'
import MentionInput from 'components/MentionInput'

const StoryTimeline = () => {
  const { user } = useContext(UserContext)
  const { story: storySlug } = useParams()
  const [value, setValue] = useState('')

  const [{ data: { story } = {}, fetching, error }] = useQuery({
    query: getStoryQuery,
    variables: { authorEmail: user.email, slug: storySlug },
  })
  const [, createEvent] = useMutation(createEventMutation)

  if (fetching) return <div>loading...</div>
  if (error) return <p>Oh no... {error.message}</p>

  return (
    <div className="div-block-861-copy">
      <div className="form-block w-form">
        <form id="email-form" name="email-form" data-name="Email Form">
          <input
            type="text"
            className="text-field w-input"
            maxLength={256}
            name="name"
            data-name="Name"
            placeholder="Chapter 1"
            id="name"
            value={story.title}
          />
          <div className="tab raf show-copy">
            <div className="_9cl dov">
              <div className="text-block-199-copy">Timeline</div>
              <Link
                to={`/${story.slug}/write`}
                className="_141 mkm w-inline-block"
              >
                <div className="bluh vnl">
                  Write from timeline
                  <br />
                </div>
                <img
                  src="https://uploads-ssl.webflow.com/5f9235924878501c92cf0d4c/5f93b4c8d0040f37676df303_arrow-right.svg"
                  loading="lazy"
                  width={18}
                  alt=""
                  className="image-296"
                />
              </Link>
            </div>
            {story.chapters[0].events.map((event, index) => (
              <TimelineItem item={event} number={index + 1} key={event.id} />
            ))}

            <div className="div-block-887 ms">
              <MentionInput
                value={value}
                setValue={setValue}
                onAdd={() => {
                  const regex = new RegExp(/(@\[.*?\]\(.*?\))/gi)

                  let characters = (value.match(regex) || []).map((str) => {
                    const character = `${str.substring(
                      str.indexOf('[') + 1,
                      str.indexOf(']'),
                    )}`
                    return character
                  })

                  createEvent({
                    title: value,
                    chapterId: story.chapters[0].id,
                    characters: (characters || []).map((character) => ({
                      where: {
                        // id: null,
                        authorEmail_slug: {
                          authorEmail: user.email,
                          slug: character,
                        },
                      },
                      create: {
                        name: character,
                        slug: character,
                        author: {
                          connect: {
                            email: user.email,
                          },
                        },
                      },
                    })),
                  })
                  setValue('')
                }}
              />
              {/*
              <input
                type="text"
                className="text-field-2 sh w-input"
                maxLength={256}
                name="field-2"
                data-name="Field 2"
                data-ix="new-interaction-32"
                placeholder="Add a new event and press enter"
                id="field-2"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault()
                    addTimelineItem(story.slug, value)
                    setValue('')
                  }
                }}
              />
              */}
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default StoryTimeline
