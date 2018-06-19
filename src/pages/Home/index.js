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
    title: 'slider.title.0',
    paragraph: 'slider.paragraph.0',
    img: ''
  },
  {
    title: 'slider.title.1',
    paragraph: 'slider.paragraph.1',
    img: ''
  },
  {
    title: 'slider.title.2',
    paragraph: 'slider.paragraph.2',
    img: ''
  }
]

const blocksContent = [
  {
    title: 'blocks.title.0',
    paragraph: 'blocks.paragraph.0',
    img: ''
  },
  {
    title: 'blocks.title.1',
    paragraph: 'blocks.paragraph.1',
    img: ''
  },
  {
    title: 'blocks.title.2',
    paragraph: 'blocks.paragraph.2',
    img: ''
  }
]

class Home extends React.Component {
  constructor(props) {
    super(props)

    // If the user tries to access the homepage with a locale that isn’t
    // supported, redirect to the index page so that they see the page in the
    // default language.
    if (this.shouldRedirectToIndex()) {
      return this.props.history.replace('/' + DEFAULT_LOCALE)
    }

    // Switch the language on first render in case the user isn’t accessing the
    // page in the default language.
    this.props.switchLanguage(this.props.match.params.locale)
  }

  componentDidUpdate() {
    // Switch the language on subsequent renders in case the locale in the URL
    // has changed.
    this.props.switchLanguage(this.props.match.params.locale)
  }

  shouldRedirectToIndex() {
    const routerLocale = this.props.match.params.locale

    return (
      !routerLocale || !isEnabledLocale(this.props.enabledLocales, routerLocale)
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
          <Footer
            lang={this.props.location.pathname}
          />
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
