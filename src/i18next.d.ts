import common from './localization/locales/en/common.json';
import configure from './localization/locales/en/configure.json';
import explore from './localization/locales/en/explore.json';
import insights from './localization/locales/en/insights.json';

interface Resources {
      common: typeof common;
      configure: typeof configure;
      explore: typeof explore;
      insights: typeof insights
}

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'common';
    resources: Resources
  }
}