import { useState, useEffect, useRef } from 'react'
import { MentionsInput, Mention } from 'react-mentions'
import classNames from './mentions.module.css'

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

const App = () => {
  const [value, setValue] = useState('')
  const [data, setData] = useState(users)
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
    ].filter((i) => i.display.toLowerCase().indexOf(newMention) > -1)
  }

  return (
    <div className="App">
      <MentionsInput
        value={value}
        onChange={(e) => setValue(e.target.value)}
        ref={textareaRef}
        className="mentions"
        classNames={classNames}
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
          trigger="#"
          data={getData}
          renderSuggestion={renderSuggestion}
          displayTransform={(id, display) => `#${display}`}
          appendSpaceOnAdd
          className={classNames.mentions__mention}
        />
      </MentionsInput>
    </div>
  )
}

export default App
