import { Link } from 'react-router-dom'
const defaultRegex = new RegExp(/(@\[.*?\]\(.*?\))/i)

export const wrapTags = (text, plainText = false, regex = defaultRegex) => {
  const textArray = text.split(regex)
  return textArray.map((str) => {
    if (regex.test(str)) {
      const character = `@${str.substring(
        str.indexOf('[') + 1,
        str.indexOf(']'),
      )}`
      if (plainText) return character
      return (
        <Link to={`/${character}`} className="tag">
          {character}
        </Link>
      )
    }
    return str
  })
}
