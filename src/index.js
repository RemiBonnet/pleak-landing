import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { IntlProvider } from 'react-intl'
import { DEFAULT_LOCALE } from './constants/translations'
import isEnabledLocale from './helpers/isEnabledLocale'
import fetchEnabledLocales from './helpers/fetchEnabledLocales'
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
    if (
      this.state.locale !== locale &&
      isEnabledLocale(this.props.enabledLocales, locale)
    ) {
      const translations = await fetchTranslations(locale)

      this.setState({ locale, translations })
    }
  }

  render() {
    return (
      <LanguageContext.Provider
        value={{
          enabledLocales: this.props.enabledLocales,
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
  const enabledLocales = await fetchEnabledLocales()
  const translations = await fetchTranslations(DEFAULT_LOCALE)

  ReactDOM.render(
    <App
      enabledLocales={enabledLocales}
      locale={DEFAULT_LOCALE}
      translations={translations}
    />,
    document.getElementById('root')
  )
}

init()
