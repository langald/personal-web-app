import Vue from 'vue'
import VueI18n from 'vue-i18n'
import axios from 'axios'
import { i18nAPIService } from '@/common/api.service'

Vue.use(VueI18n)

export const defaultLocale = 'en'

export const i18n = new VueI18n({
  locale: defaultLocale, // set locale
  fallbackLocale: defaultLocale
})

const loadedLanguages = [defaultLocale] // our default language that is preloaded 

function setI18nLanguage (lang) {
  i18n.locale = lang
  axios.defaults.headers.common['Accept-Language'] = lang
  document.querySelector('html').setAttribute('lang', lang)
  return lang
}

export function loadLanguageAsync (lang) {
  if (i18n.locale !== lang) {
    if (!loadedLanguages.includes(lang)) {

      /* example with fetch DO NOT DELETE !!!
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
      */

      return i18nAPIService.get(lang)
        .then(({ data }) => {				
          console.log(JSON.stringify(data))
          if (Object.keys(data).length === 0) {
            return Promise.reject(new Error('locale empty !!'))
          } else {            
            return Promise.resolve(data)
          }
        })
        .then((message) => {
          i18n.setLocaleMessage(lang, message)
          loadedLanguages.push(lang)
          return setI18nLanguage(lang)       
        })			
        .catch(error => {
          console.log(error.message)         	  
        })
    } 
    return Promise.resolve(setI18nLanguage(lang))
  }
  return Promise.resolve(lang)
}
