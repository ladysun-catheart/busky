import i18next from 'i18next';
import es from './es';
import en from './en';

i18next
.init({
    interpolation: {
        escapeValue: false,
    },
    lng: 'en',
    resources: {
        en: {
            translation: en,
        },
        es: {
            translation: es,
        }
    }
})

export default i18next