import React from 'react'
import { FormattedMessage, injectIntl } from 'react-intl'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import { BetaRegistrationStyle } from './style.js'
import { ButtonStyle } from '../Button/style.js'

const url = process.env.REACT_APP_SECRET

const BetaRegistration = (props) => {
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
                placeholder={props.intl.formatMessage({ id: 'beta.email' })}
              />
              <ButtonStyle
                onClick={() => submit(formData => subscribe(formData))}
              >
                <FormattedMessage id="beta.submit" />
              </ButtonStyle>
            </div>
            <div className="Msg">
              { status === 'error' &&
                <div className="Msg__error">
                  <FormattedMessage id="beta.invalid_email" />
                </div>
              }
              { status === 'success' &&
                <div className="Msg__success">
                  <span role="img" aria-label="success">✅</span>
                  <FormattedMessage id="beta.success" />
                </div>
              }
            </div>
          </div>
        )}
      />
    </BetaRegistrationStyle>
  )
}

export default injectIntl(BetaRegistration)
