import { useState, useContext } from 'react'
import { OthersContext } from 'context'
import Other from './Other'

const Others = ({ hideMenu }) => {
  const [show, setShow] = useState(true)
  const { others } = useContext(OthersContext)

  return (
    <div className="open2-copy">
      <div className="div-block-827 nou" onClick={() => setShow(!show)}>
        <div className="text-block-199 allcaps">Others</div>
        <img
          src="https://uploads-ssl.webflow.com/5f9235924878501c92cf0d4c/5f9235924878503aa3cf0f50_Icon_-_Arrow%402x.png"
          width={8}
          alt=""
          className="image-285"
          style={show ? { transform: 'rotate(180deg)' } : {}}
        />
      </div>
      {show && (
        <>
          {others.map((other) => (
            <Other key={other.slug} other={other} hideMenu={hideMenu} />
          ))}
        </>
      )}
    </div>
  )
}

export default Others
