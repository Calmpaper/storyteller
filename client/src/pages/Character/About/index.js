import { useState, useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import { CharactersContext } from 'context'
import CharacterTrait from './CharacterTrait'

const CharacterAbout = () => {
  const { getCharacter, addCharacterTrait } = useContext(CharactersContext)
  const { character: characterSlug } = useParams()
  const character = getCharacter(characterSlug)
  const [value, setValue] = useState('')

  if (!character) return <div>{`Character ${characterSlug} not found`}</div>

  return (
    <div className="div-block-861-copy">
      <div className="form-block w-form">
        <div>
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
                className="tabdi w--current"
              >
                About
              </Link>
              <Link to={`/@${characterSlug}/timeline`} className="tabdi">
                Timeline
              </Link>
            </div>
            {character.traits.map((trait) => (
              <CharacterTrait key={trait.key} trait={trait} />
            ))}
            <input
              type="text"
              className="text-field-2 sh w-input"
              name="field-2"
              data-name="Field 2"
              placeholder="Type e.g. Gender:Male then press enter"
              id="field-2"
              value={value}
              autoFocus
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault()
                  const colonIndex = value.indexOf(':')
                  const trait = {
                    key: value.substring(0, colonIndex),
                    value: value.substring(colonIndex + 1, value.length),
                  }

                  addCharacterTrait(character.slug, trait)
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

export default CharacterAbout
