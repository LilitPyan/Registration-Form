import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
 
i18n
  .use(LanguageDetector)
  .init({
    resources: {
      en: {
        translations: {
          "Log In": "Log In",
          "E-mail or phone used": "E-mail or phone used",
          "Password": "Password",
          "Sign Up": "Sign Up",
          "Are you here for the firts time": "Are you here for the firts time",
          "Enter your E-mail": "Enter your E-mail",
          "Enter your Password": "Enter your Password",
          "Confirm Password": "Confirm Password",
          "Enter your name" : "Enter your name",
          "Already registered" : "Already registered"
        }
      },
      ru: {
        translations: {
          "Log In": "Войти",
          "E-mail or phone used": "Почта или номер телефона",
          "Password": "Пароль",
          "Sign Up": "Зарегистрироватся",
          "Are you here for the firts time": "Вы здесь впервые",
          "Enter your E-mail": "Введите адрес почты или номер",
          "Enter your Password": "Введите пароль",
          "Confirm Password": "Подтвердите пароль",
          "Enter your name": "Введите ваше имя",
          "Already registered" : "Вы уже зарегистрированы"
        }
      }
    },
    
    fallbackLng: 'en',
    debug: true,
 
    ns: ['translations'],
    defaultNS: 'translations',
 
    keySeparator: false, 

    react: {
      wait: true
    }
  });
 
export default i18n;