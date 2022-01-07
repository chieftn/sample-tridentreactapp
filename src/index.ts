import { bootstrap } from '@trident/extension-client';

bootstrap({
    initializeWorker: (params) =>
        import('./index.worker').then(({ initialize }) => initialize(params)),
    initializeUI: (params) =>
        import('./index.ui').then(({ initialize }) => initialize(params)),
});
