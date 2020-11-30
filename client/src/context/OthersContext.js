import { createContext, useState } from 'react'
import slugify from 'slugify'

const OthersContext = createContext()

const initialOthers = [
  {
    name: 'Dragons',
    slug: 'Dragons',
    traits: [
      {
        key: 'Age',
        value: '1028',
      },
    ],
    timeline: [
      {
        title: '3000 years B.C. @[Dragons](Dragons) came to the earth',
        content: '',
      },
      {
        title: '1000 years B.C. @[Dragons](Dragons) died',
        content: '',
      },
    ],
  },
  {
    name: 'Guilds',
    slug: 'Guilds',
    traits: [
      {
        key: 'Area',
        value: 'Underground',
      },
    ],
    timeline: [
      {
        title: '@[Guilds](Guilds) operate secretly as a hidden society',
        content: '',
      },
    ],
  },
  {
    name: 'Headers',
    slug: 'Healers',
    traits: [
      {
        key: 'Side',
        value: 'Goodies',
      },
    ],
    timeline: [
      {
        title: 'Everyone welcomes @[Healers](Healers)',
        content: '',
      },
    ],
  },
]

const OthersProvider = ({ children }) => {
  const [others, setOthers] = useState(initialOthers)

  const getOther = (otherSlug) => others.find((i) => i.slug === otherSlug)

  // const addOther = (otherName) => {
  //   setOthers((oldOthers) => [
  //     ...oldOthers,
  //     {
  //       title: otherName,
  //       slug: slugify(otherName),
  //       timeline: [],
  //     },
  //   ])
  // }

  const addOtherTrait = (otherSlug, trait) => {
    setOthers((oldOthers) =>
      oldOthers.map((other) => {
        if (other.slug === otherSlug)
          return {
            ...other,
            traits: [...other.traits, trait],
          }

        return other
      }),
    )
  }

  return (
    <OthersContext.Provider
      value={{
        others,
        setOthers,
        getOther,
        // addOther,
        addOtherTrait,
      }}
    >
      {children}
    </OthersContext.Provider>
  )
}

export { OthersProvider as default, OthersContext }
