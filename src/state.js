import React from 'react'

export const LanguageContext = React.createContext({
  locale: 'en',
  switchLanguage: () => {}
})
