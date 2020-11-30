import { useState } from 'react'
import { Link } from 'react-router-dom'
import AddButton from './AddButton'
import Timeline from './Timeline'
import Characters from './Characters'
import Others from './Others'

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false)
  const hideMenu = () => setShowMenu(false)

  return (
    <>
      <div className="div-block-780 ewgew-copy hdaf">
        <a
          className="kerou w-inline-block"
          data-ix="new-interaction-30"
          onClick={() => setShowMenu(!showMenu)}
        >
          <img
            src="https://uploads-ssl.webflow.com/5f9235924878501c92cf0d4c/5f92388efd248b2fedccb3a8_layout-5%20(2).svg"
            width={36}
            alt=""
            className="image-288"
          />
        </a>
      </div>

      <div
        className="leftbar"
        data-ix="new-interaction-18"
        style={{ display: showMenu ? 'flex' : 'none' }}
      >
        <div className="div-block-889">
          <a
            className="kerou fsc w-inline-block"
            data-ix="new-interaction-19"
            onClick={() => setShowMenu(!showMenu)}
          >
            <img
              src="https://uploads-ssl.webflow.com/5f9235924878501c92cf0d4c/5f92388efd248b2fedccb3a8_layout-5%20(2).svg"
              width={26}
              alt=""
              className="image-288"
            />
            <div className="text-block-212 eg">Close</div>
          </a>

          <AddButton />

          <Link to="/" className="kerou fsc w-inline-block">
            <img
              src="https://uploads-ssl.webflow.com/5f9235924878501c92cf0d4c/5f9775b15e34700578e4980a_repeat.svg"
              width={36}
              alt=""
              className="image-288"
            />
            <div className="text-block-212">Home</div>
          </Link>
        </div>
        <Timeline hideMenu={hideMenu} />
        <Characters hideMenu={hideMenu} />
        <Others hideMenu={hideMenu} />
      </div>
    </>
  )
}

export default Menu
