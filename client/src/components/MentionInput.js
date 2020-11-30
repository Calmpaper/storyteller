import { useState, useContext, useRef } from 'react'
import { CharactersContext, OthersContext } from 'context'
import { MentionsInput, Mention } from 'react-mentions'
import classNames from 'assets/css/mentions.module.css'

const users = [
  {
    id: 'Beth',
    display: 'Beth',
  },
  {
    id: 'James',
    display: 'James',
  },
]

const MentionInput = ({ value, setValue, onAdd }) => {
  // const [value, setValue] = useState('')
  const [data, setData] = useState(users)
  const { characters } = useContext(CharactersContext)
  const { others } = useContext(OthersContext)
  const textareaRef = useRef()

  const renderSuggestion = (
    suggestion,
    search,
    highlightedDisplay,
    index,
    focused,
  ) => (
    <div className={`user ${focused ? 'focused' : ''}`}>
      {highlightedDisplay}
    </div>
  )

  const getData = () => {
    const position = value.length
    const charLastIndex = value.lastIndexOf('@')
    const newMention = value.substring(charLastIndex + 1, position)
    if (newMention === '') {
      return data
    }

    return [
      ...data,
      {
        id: newMention,
        display: newMention,
      },
    ].filter((i) => i.display.indexOf(newMention) > -1)
  }

  return (
    <MentionsInput
      value={value}
      onChange={(e) => setValue(e.target.value)}
      ref={textareaRef}
      className="mentions text-field-2 sh w-input"
      classNames={classNames}
      placeholder="Add a new event and press enter"
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          e.preventDefault()
          onAdd()
        }
      }}
    >
      <Mention
        trigger="@"
        data={getData}
        renderSuggestion={renderSuggestion}
        displayTransform={(id, display) => `@${display}`}
        appendSpaceOnAdd
        className={classNames.mentions__mention}
      />
      <Mention
        trigger="$"
        data={getData}
        renderSuggestion={renderSuggestion}
        displayTransform={(id, display) => `$${display}`}
        appendSpaceOnAdd
        className={classNames.mentions__mention}
      />
    </MentionsInput>
  )
}

export default MentionInput
