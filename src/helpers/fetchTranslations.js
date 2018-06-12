import fetch from 'unfetch'
import { addLocaleData } from 'react-intl'

const fetchTranslations = async locale => {
  const localeData = await import(`react-intl/locale-data/${locale}`)
  const request = await fetch(
    `https://api.zola.ink/cdn/031ebde201d7fe78c6d4c5e396b0867437ef8ee90c178b27fe01f2e268e92c36/${locale}`
  )

  addLocaleData(localeData)
  return request.json()
}

export default fetchTranslations
