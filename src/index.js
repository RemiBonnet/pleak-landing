import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Router from './components/Router'
import { IntlProvider } from 'react-intl'
import fetch from 'unfetch'

const fetchTranslations = async locale => {
  const request = await fetch(
    `https://api.zola.ink/cdn/031ebde201d7fe78c6d4c5e396b0867437ef8ee90c178b27fe01f2e268e92c36/${locale}`
  )

  return request.json()
}

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = { locale: props.defaultLocale }
  }

  handleLocaleChange = locale => {
    if (this.state.locale !== locale) {
      this.setState({ locale })
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Router>
          {Routes => (
            <IntlProvider
              locale={this.state.locale}
              messages={this.props.translations}
            >
              {Routes}
            </IntlProvider>
          )}
        </Router>
      </BrowserRouter>
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
