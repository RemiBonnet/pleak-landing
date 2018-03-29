import React from 'react'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import { NewsletterStyle } from './style.js'

const url = process.env.REACT_APP_SECRET

const Newsletter = () => {

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

  return (
    <div className="Container">
      <NewsletterStyle>
        <MailchimpSubscribe
          url={url}
          render={({ subscribe, status }) => (
            <div>
              { !(status === 'success') &&
                <div className="Input">
                  <input
                    ref={node => (email = node)}
                    type="email"
                    placeholder="Enter your email address" 
                  />
                  <button onClick={() => submit(formData => subscribe(formData))}>
                    Submit
                  </button>
                </div>
              }
              <div className="Msg">
                { status === 'error' &&
                  <div className="Msg__error">
                    Please enter a valid email
                  </div>
                }
                { status === 'success' &&
                  <div className="Msg__success">
                    <span role="img" aria-label="success">✅</span> Thank you, you'll be contacted soon about our closed beta launch
                  </div>
                }
              </div>
            </div>
          )}
        />
      </NewsletterStyle>
    </div>
  )
}

export default Newsletter
