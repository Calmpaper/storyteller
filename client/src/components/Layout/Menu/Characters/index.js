import { useState, useContext } from 'react'
import { CharactersContext } from 'context'
import Character from './Character'

const Characters = ({ hideMenu }) => {
  const [show, setShow] = useState(true)
  const { characters } = useContext(CharactersContext)

  return (
    <div className="open2-copy">
      <div className="div-block-827 nou" onClick={() => setShow(!show)}>
        <div className="text-block-199 allcaps">characters</div>
        <img
          src="https://uploads-ssl.webflow.com/5f9235924878501c92cf0d4c/5f9235924878503aa3cf0f50_Icon_-_Arrow%402x.png"
          width={8}
          alt=""
          className="image-285"
          style={show ? { transform: 'rotate(180deg)' } : {}}
        />
      </div>
      {show && (
        <>
          {characters.map((character) => (
            <Character
              key={character.slug}
              character={character}
              hideMenu={hideMenu}
            />
          ))}
        </>
      )}
    </div>
  )
}
export default Characters
