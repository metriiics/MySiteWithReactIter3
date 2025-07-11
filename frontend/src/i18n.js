import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend) // загрузка переводов из файлов
  .use(initReactI18next) // интеграция с React
  .init({
    fallbackLng: 'en', // язык по умолчанию
    debug: false,
    interpolation: {
      escapeValue: false, // React уже экранирует
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // путь к файлам переводов
    },
    react: {
      useSuspense: true, // можно отключить, если не хотите Suspense
    },
  });

export default i18n;
