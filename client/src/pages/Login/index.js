import { useState, useContext } from 'react'
import { UserContext } from 'context'
import { loginMutation } from 'api'
import { useMutation } from 'urql'

const Login = () => {
  const [value, setValue] = useState('')
  const { login: authorize } = useContext(UserContext)

  const [, login] = useMutation(loginMutation)

  const onLogin = (email) => {
    login({ email })
    authorize(null, email)
  }

  return (
    <div className="div-block-861-copy mo">
      <div className="form-block-copy w-form">
        <form
          id="email-form"
          name="email-form"
          data-name="Email Form"
          className="form"
        >
          <img
            src="https://uploads-ssl.webflow.com/5f9235924878501c92cf0d4c/5f932fe671afa1544955ae11_Group.svg"
            loading="lazy"
            width={108}
            alt=""
            className="image-297"
          />
          <div className="text-field hdie">Login</div>
          <div className="text-block-50-copy">
            What’s your email? We’ll send you a sign-in code
            <br />
          </div>
          <input
            className="div-block-142-copy"
            style={{ outline: 'none' }}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Email"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault()
                onLogin(value)
              }
            }}
          />
          <div className="div-block-868" onClick={() => onLogin(value)}>
            <a className="button-8 newcol2 w-button">Continue</a>
          </div>
          {/*
        <div className="text-block-50-copy moscp">
          or
          <br />
        </div>
        <div className="div-block-868">
          <a href="#" className="button-8 whcb w-inline-block">
            <img
              src="https://uploads-ssl.webflow.com/5f9235924878501c92cf0d4c/5f9235924878508799cf0f52_icons8-google-48.png"
              loading="lazy"
              width={24}
              alt=""
              className="image-295"
            />
            <div>Continue with Google</div>
          </a>
        </div>
        */}
        </form>
      </div>
    </div>
  )
}

export default Login
