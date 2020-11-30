import { Link } from 'react-router-dom'
// const mentionRegexp = new RegExp(/((?<!\w)@\w+)/i)
// const regex1 = new RegExp(/((?<!\w)@\w+)/i)
// const regex2 = new RegExp(/(@\[(.*?)\]\((.*?)\))/i)
const regex2 = new RegExp(/(@\[.*?\]\(.*?\))/i)

const wrapTags = (text, regex) => {
  const textArray = text.split(regex)
  return textArray.map((str) => {
    if (regex.test(str)) {
      const character = `@${str.substring(
        str.indexOf('[') + 1,
        str.indexOf(']'),
      )}`
      return (
        <Link to={`/${character}`} className="tag">
          {character}
        </Link>
      )
    }
    return str
  })
}

const TimelineItem = ({ item, number }) => {
  return (
    <div className="div-block-784 kcalm-copy" data-ix="new-interaction-31">
      <div className="_141">
        <div className="bluh">
          {number}. {wrapTags(item.title, regex2)}
        </div>
      </div>
      <img
        src="https://uploads-ssl.webflow.com/5f9235924878501c92cf0d4c/5f92603179e8774ab2188810_more-vertical%20(1).svg"
        loading="lazy"
        width={26}
        alt=""
        className="_3dot"
        style={{ display: 'none' }}
      />
    </div>
  )
}

export default TimelineItem
