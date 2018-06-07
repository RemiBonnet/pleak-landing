import React from 'react'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import { BetaRegistrationStyle } from './style.js'
import { ButtonStyle } from '../Button/style.js'

const url = process.env.REACT_APP_SECRET

const BetaRegistration = () => {
  let email
  const submit = (onValidated) => {
    email &&
    email.value.indexOf('@') > -1 &&
    onValidated({
      EMAIL: email.value
    })
    window.analytics.track("subscribed_newsletter", {
      email: email.value,
    })
  }

  const keyPress = (e, cb) => {
    if(e.keyCode === 13 || e.charCode === 13) {
      submit(formData => cb(formData))
    }
  }

  return (
    <BetaRegistrationStyle>
      <MailchimpSubscribe
        url={url}
        render={({ subscribe, status }) => (
          <div>
            <div className="Input">
              <input
                ref={node => (email = node)}
                type="email"
                onKeyPress={(e) => keyPress(e, formData => subscribe(formData))}
                placeholder="Enter your email address" 
              />
              <ButtonStyle
                onClick={() => submit(formData => subscribe(formData))}
              >
                Send request
              </ButtonStyle>
            </div>
            <div className="Msg">
              { status === 'error' &&
                <div className="Msg__error">
                  Please enter a valid email
                </div>
              }
              { status === 'success' &&
                <div className="Msg__success">
                  <span role="img" aria-label="success">✅</span> Thank you, you'll be contacted soon about our closed beta launch.
                </div>
              }
            </div>
          </div>
        )}
      />
    </BetaRegistrationStyle>
  )
}

export default BetaRegistration
