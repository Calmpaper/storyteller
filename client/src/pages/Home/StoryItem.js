import { Link } from 'react-router-dom'

const StoryItem = ({ story }) => (
  <Link
    to={`/${story.slug}`}
    className="div-block-784 kcalm-copy w-inline-block"
    data-ix="new-interaction-31"
  >
    <div className="_141 mkm">
      <div className="bluh vnl">
        {story.title}
        <br />
      </div>
      <img
        src="https://uploads-ssl.webflow.com/5f9235924878501c92cf0d4c/5f93b4c8d0040f37676df303_arrow-right.svg"
        loading="lazy"
        width={18}
        alt=""
        className="image-296"
      />
    </div>
    <img
      src="https://uploads-ssl.webflow.com/5f9235924878501c92cf0d4c/5f937dd4b68ed767e8aefbfc_trash%20(1).svg"
      loading="lazy"
      width={26}
      alt=""
      className="_3dot"
      style={{ display: 'none' }}
    />
  </Link>
)

export default StoryItem
