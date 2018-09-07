import Vue from 'vue'
import VueI18n from 'vue-i18n'
import axios from 'axios'

Vue.use(VueI18n)

export const i18n = new VueI18n({
  locale: 'en', // set locale
  fallbackLocale: 'en'
})

const loadedLanguages = ['en'] // our default language that is preloaded 

function setI18nLanguage (lang) {
  i18n.locale = lang
  axios.defaults.headers.common['Accept-Language'] = lang
  document.querySelector('html').setAttribute('lang', lang)
  return lang
}

export function loadLanguageAsync (lang) {
  if (i18n.locale !== lang) {
    if (!loadedLanguages.includes(lang)) {
      return fetch('/locales/'  + lang + '.json', {
        method: 'get',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }).then((res) => {   
        return res.json()
      }).then((json) => {
        if (Object.keys(json).length === 0) {
          return Promise.reject(new Error('locale empty !!'))
        } else {
          console.log(json)
          return Promise.resolve(json)
        }
      }).then((message) => {
        i18n.setLocaleMessage(lang, message)
        loadedLanguages.push(lang)
        return setI18nLanguage(lang)
       
      }).catch((error) => {
        console.log(error)
        return
      })
    } 
    return Promise.resolve(setI18nLanguage(lang))
  }
  return Promise.resolve(lang)
}




