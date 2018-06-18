import React, { Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import Helmet from 'react-helmet'
import { injectIntl } from 'react-intl'
import { layoutGenerator } from 'react-break'
import { DEFAULT_LOCALE } from '../../constants/translations'
import isEnabledLocale from '../../helpers/isEnabledLocale'
import { sizes } from '../../styles/responsive.js'
import { LanguageContext } from '../../state'
import HomeContainer from '../../components/HomeContainer'
import Navigation from '../../components/Navigation'
import HeroBanner from '../../components/HeroBanner'
import Slider from '../../components/Slider'
import FeaturesMobile from '../../components/FeaturesMobile'
import Blocks from '../../components/Blocks'
import BlocksColor from '../../components/BlocksColor'
import BlockBeta from '../../components/BlockBeta'
import Footer from '../../components/Footer'

const layout = layoutGenerator({
  mobile: 0,
  desktop: sizes.tablet
})

const OnDesktop = layout.isAtLeast('desktop')
const OnMobile = layout.is('mobile')

const sliderContent = [
  {
    title: 'Easy to use dashboard',
    paragraph:
      'Consistently track the progress of all your key metrics in one place with efficiency and visibility.',
    img: ''
  },
  {
    title: 'Real time segmentation',
    paragraph:
      'Use Pleak to capture every interaction users have with your app and collect essential performance indicators.',
    img: ''
  },
  {
    title: 'Get alerted on your custom flows',
    paragraph:
      'Get alerted about what happened, where and when and take appropriate actions.',
    img: ''
  }
]

const blocksContent = [
  {
    title:
      'Understand how your application perform in complex real‑world environments',
    paragraph:
      'Get new key performance indicators from your apps in production and improve your customers user experience by measuring segmented performance.',
    img: ''
  },
  {
    title: 'Measure the link between technical performance and your business',
    paragraph:
      'Confront apps metrics with data from your marketing and business analytics platforms. Get a clear estimation of the impact of your app’s performance over time.',
    img: ''
  },
  {
    title:
      'Ensure your product sustainability by following the technical quality over time',
    paragraph:
      'Each release is an opportunity for new features update and performances check up. Be proactive and keep your product quality level at every key steps of its evolution.',
    img: ''
  }
]

class Home extends React.Component {
  constructor(props) {
    super(props)

    const { locale, match, history } = this.props

    // If the user tries to access the homepage with a locale that isn’t
    // supported, redirect to the index page so that they see the page in the
    // default language.
    if (this.shouldRedirectToIndex()) {
      return history.replace('/')
    }

    // Redirect the user to the correct page in case their browser’s locale
    // doesn’t match the locale of the page they’re trying to access.
    if (locale && match.params.locale !== locale) {
      history.replace('/' + locale)
    }
  }

  componentDidUpdate() {
    // Switch the language on subsequent renders in case the locale in the URL
    // has changed.
    this.props.switchLanguage(this.props.match.params.locale)
  }

  shouldRedirectToIndex() {
    const routerLocale = this.props.match.params.locale

    return (
      routerLocale && !isEnabledLocale(this.props.enabledLocales, routerLocale)
    )
  }

  render() {
    return (
      <Fragment>
        <HomeContainer>
          <Navigation />
          <HeroBanner />
          <Blocks content={blocksContent} />
          <OnDesktop>
            <Slider content={sliderContent} />
          </OnDesktop>
          <OnMobile>
            <FeaturesMobile content={sliderContent} />
          </OnMobile>
          <BlocksColor />
          <BlockBeta />
          <Footer />
        </HomeContainer>

        {/* Helmet expects strings and not React components, so we need to use
            `props.intl.formatMessage` passed by the `injectIntl` HOC. */}
        <Helmet titleTemplate="Pleak – %s">
          <html lang={this.props.locale} />

          <title>
            {this.props.intl.formatMessage({ id: 'landing.title' })}
          </title>

          <meta
            name="description"
            content={this.props.intl.formatMessage({
              id: 'landing.description'
            })}
          />
          <meta
            property="og:title"
            content={this.props.intl.formatMessage({ id: 'landing.title' })}
          />
          <meta property="og:url" content={window.location.href} />

          {this.props.enabledLocales.map(({ code: localeCode }) => {
            // If we don’t have a locale in the URL, that means we’re already
            // on the default locale page. We don’t need to add an `alternate`
            // meta tag.
            const hasNoLocale = !this.props.match.params.locale
            const isDefaultLocale = hasNoLocale && localeCode === DEFAULT_LOCALE
            const isCurrentLocale = localeCode === this.props.locale
            const shouldAddAlternateLink = !isDefaultLocale && !isCurrentLocale

            return (
              shouldAddAlternateLink && (
                <link
                  key={localeCode}
                  rel="alternate"
                  href={`${window.location.origin}/${localeCode}`}
                  hrefLang={localeCode}
                />
              )
            )
          })}
        </Helmet>
      </Fragment>
    )
  }
}

export default withRouter(
  injectIntl(props => (
    <LanguageContext.Consumer>
      {languageContext => <Home {...props} {...languageContext} />}
    </LanguageContext.Consumer>
  ))
)
