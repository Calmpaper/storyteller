import { Link } from 'react-router-dom'

const Character = ({ character, hideMenu }) => {
  return (
    <Link
      to={`/@${character.slug}`}
      className="avablock w-inline-block"
      data-ix="new-interaction-31"
      onClick={hideMenu}
    >
      <div className="div-block-886">
        <div className="text-block-209">{character.name}</div>
        <div className="div-block-887">
          <img
            src="https://uploads-ssl.webflow.com/5f9235924878501c92cf0d4c/5f923592487850716fcf0f89_edit-2.svg"
            width={15}
            alt=""
            className="image-286"
          />
        </div>
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
}
export default Character
