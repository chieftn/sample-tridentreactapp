import { bootstrap } from '@trident/extension-client';

bootstrap({
    initializeWorker: () =>
        import('./index.worker').then(({ initialize }) => initialize()),
    initializeUI: () =>
        import('./index.ui').then(({ initialize }) => initialize()),
});
