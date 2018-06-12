import React from 'react'
import { DEFAULT_LOCALE } from './constants/locales'

export const LanguageContext = React.createContext({
  locale: DEFAULT_LOCALE,
  switchLanguage: () => {}
})
