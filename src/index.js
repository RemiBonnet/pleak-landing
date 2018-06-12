import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { IntlProvider } from 'react-intl'
import { DEFAULT_LOCALE, ENABLED_LOCALES } from './constants/locales'
import fetchTranslations from './helpers/fetchTranslations'
import { LanguageContext } from './state'
import Router from './components/Router'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      locale: props.locale,
      translations: props.translations
    }
  }

  switchLanguage = async (locale = DEFAULT_LOCALE) => {
    if (this.state.locale !== locale && ENABLED_LOCALES.includes(locale)) {
      const translations = await fetchTranslations(locale)

      this.setState({ locale, translations })
    }
  }

  render() {
    return (
      <LanguageContext.Provider
        value={{
          locale: this.state.locale,
          switchLanguage: this.switchLanguage
        }}
      >
        <BrowserRouter>
          <Router>
            {Routes => (
              <IntlProvider
                locale={this.state.locale}
                messages={this.state.translations}
              >
                {Routes}
              </IntlProvider>
            )}
          </Router>
        </BrowserRouter>
      </LanguageContext.Provider>
    )
  }
}

const init = async () => {
  const defaultLocale = !!navigator.languages
    ? navigator.languages[0].slice(0, 2) // Slice to only retrieve the 2 characters locale from locales such as `en_EN`
    : DEFAULT_LOCALE
  const translations = await fetchTranslations(defaultLocale)

  ReactDOM.render(
    <App translations={translations} locale={defaultLocale} />,
    document.getElementById('root')
  )
}

init()
