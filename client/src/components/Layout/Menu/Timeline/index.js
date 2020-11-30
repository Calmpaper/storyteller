import { useState } from 'react'

const Timeline = () => {
  const [show, setShow] = useState(true)

  return (
    <div className="open2-copy">
      <div className="div-block-827 nou" onClick={() => setShow(!show)}>
        <div className="text-block-199 allcaps">timeline</div>
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
          <a
            aria-current="page"
            className="avablock w-inline-block w--current"
            data-ix="new-interaction-31"
          >
            <div className="div-block-878 up">
              <div>SB</div>
            </div>
            <div className="div-block-886">
              <div className="text-block-209">Chapter 1</div>
              <div className="div-block-887">
                <div className="text-block-211">5 events</div>
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
          </a>
        </>
      )}
    </div>
  )
}

export default Timeline
