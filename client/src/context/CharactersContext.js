import { createContext, useState } from 'react'
import slugify from 'slugify'

const CharactersContext = createContext()

const initialCharacters = [
  {
    name: 'Beth',
    slug: 'Beth',
    traits: [
      {
        key: 'Age',
        value: '39',
      },
      {
        key: 'Gender',
        value: 'Female',
      },
      {
        key: 'Class',
        value: '#Healers',
      },
      {
        key: 'Hate',
        value: 'Fire and #Dragons',
      },
      {
        key: 'About',
        value:
          'Beth was elder daughter of David Behrs, a college administrator, and Maureen Behrs, a first grade teacher. She has a sister who is six years younger',
      },
    ],
    timeline: [
      {
        title: '@[Beth](Beth) is living the life',
        content: '',
      },
      {
        title: 'But @[Beth](Beth) wants her purse back from @James',
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
  {
    name: 'James',
    slug: 'James',
    traits: [
      {
        key: 'Gender',
        value: 'Male',
      },
    ],
    timeline: [
      {
        title: '@[James](James) was born',
        content: '',
      },
    ],
  },
]

const CharactersProvider = ({ children }) => {
  const [characters, setCharacters] = useState(initialCharacters)

  const getCharacter = (characterSlug) =>
    characters.find((i) => i.slug === characterSlug)

  // const addCharacter = (characterName) => {
  //   setCharacters((oldCharacters) => [
  //     ...oldCharacters,
  //     {
  //       title: characterName,
  //       slug: slugify(characterName),
  //       timeline: [],
  //     },
  //   ])
  // }

  const addCharacterTrait = (characterSlug, trait) => {
    setCharacters((oldCharacters) =>
      oldCharacters.map((character) => {
        if (character.slug === characterSlug)
          return {
            ...character,
            traits: [...character.traits, trait],
          }

        return character
      }),
    )
  }

  return (
    <CharactersContext.Provider
      value={{
        characters,
        setCharacters,
        getCharacter,
        // addCharacter,
        addCharacterTrait,
      }}
    >
      {children}
    </CharactersContext.Provider>
  )
}

export { CharactersProvider as default, CharactersContext }
