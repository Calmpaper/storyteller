import { useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import { CharactersContext } from 'context'
import TimelineItem from 'components/TimelineItem'

const CharacterTimeline = () => {
  const { getCharacter } = useContext(CharactersContext)
  const { character: characterSlug } = useParams()
  const character = getCharacter(characterSlug)

  if (!character) return <div>{`Character ${characterSlug} not found`}</div>

  return (
    <div className="div-block-861-copy">
      <div className="form-block w-form">
        <div id="email-form">
          <div className="div-block-923">
            <div className="image-301">
              <img
                src="https://uploads-ssl.webflow.com/5f9235924878501c92cf0d4c/5f977cf723de99bf647bb905_upload.svg"
                loading="lazy"
                width={28}
                alt=""
                className="image-302"
              />
            </div>
            <div className="text-field">{character.name}</div>
          </div>
          <div className="tab raf show-copy">
            <div className="_9cl">
              <Link
                to={`/@${characterSlug}/about`}
                aria-current="page"
                className="tabdi"
              >
                About
              </Link>
              <Link
                to={`/@${characterSlug}/timeline`}
                className="tabdi w--current"
              >
                Timeline
              </Link>
            </div>
            <div
              className="div-block-784 kcalm-copy nohv"
              data-ix="new-interaction-31"
            >
              <div className="div-block-827 nou">
                <div className="text-block-199 allcaps">Chapter 1</div>
                <img
                  src="https://uploads-ssl.webflow.com/5f9235924878501c92cf0d4c/5f9235924878503aa3cf0f50_Icon_-_Arrow%402x.png"
                  width={8}
                  alt=""
                  className="image-285"
                />
              </div>
            </div>
            {character.timeline.map((item, index) => (
              <TimelineItem item={item} number={index + 1} key={item.title} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CharacterTimeline
