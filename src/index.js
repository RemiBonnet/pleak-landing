import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { IntlProvider } from 'react-intl'
import Router from './components/Router'
import fetchTranslations from './helpers/fetchTranslations'
import { LanguageContext } from './state'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      locale: props.defaultLocale,
      translations: props.translations
    }
  }

  switchLanguage = async locale => {
    if (this.state.locale !== locale) {
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
    ? navigator.languages[0].slice(0, 2)
    : 'en'
  const translations = await fetchTranslations(defaultLocale)

  ReactDOM.render(
    <App translations={translations} defaultLocale={defaultLocale} />,
    document.getElementById('root')
  )
}

init()
