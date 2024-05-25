import common from './localization/locales/en/common.json';
import configure from './localization/locales/en/configure.json';
import explore from './localization/locales/en/explore.json';
import insights from './localization/locales/en/insights.json';


declare module 'i18next' {
  type Common = typeof common;
  interface CustomTypeOptions {
    defaultNS: 'common';
    resources: {
      common: Common;
      configure: typeof configure;
      explore: typeof explore;
      insights: typeof insights
    };
  }
}