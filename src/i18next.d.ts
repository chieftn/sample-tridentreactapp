import common from './localization/en/common.json';
import configure from './localization/en/configure.json';
import explore from './localization/explore.json';
import insights from './localization/insights.json';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'common';
    resources: {
      common: typeof common;
      configure: typeof configure;
      explore: typeof explore;
      insights: typeof insights
    };
  }
}