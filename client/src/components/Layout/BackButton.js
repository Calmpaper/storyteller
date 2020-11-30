/* eslint-disable jsx-a11y/anchor-is-valid */
import { useHistory } from 'react-router-dom'

const BackButton = () => {
  const { goBack } = useHistory()

  return (
    <div className="div-block-780 ewgew-copy hdaf">
      <a
        className="kerou w-inline-block"
        data-ix="new-interaction-30"
        onClick={goBack}
      >
        <img
          src="https://uploads-ssl.webflow.com/5f9235924878501c92cf0d4c/5f92777dea1d97b23ec59aa8_chevron-left.svg"
          width={36}
          alt=""
          className="image-288"
        />
      </a>
    </div>
  )
}

export default BackButton
