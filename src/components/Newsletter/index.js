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
  }

  return (
    <div className="Container">
      <NewsletterStyle>
        <MailchimpSubscribe
          url={url}
          render={({ subscribe, status }) => (
            <div>
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
              <div className="Msg">
                { status === 'error' &&
                  <div>
                    <span role="img" aria-label="error">
                      ❌
                    </span>
                    <span role="img" aria-label="error">
                      ❌ 
                    </span>
                  </div>
                }
                { status === 'success' &&
                  <div>
                    <span role="img" aria-label="success">
                      🎉
                    </span>
                    <span role="img" aria-label="success">
                      🎉
                    </span>
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
