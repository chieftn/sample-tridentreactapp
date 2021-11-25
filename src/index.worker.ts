import { ExtensionClient } from '@trident/extension-client';

export function initialize() {
    const extensionClient = new ExtensionClient();

    extensionClient.onAction((message) => {
        switch (message.action) {
            case 'open.page1':
                return extensionClient.openPage({
                    extensionName: 'my-extension',
                    route: { path: '/page1' },
                });
            case 'open.page2':
                return extensionClient.openPage({
                    extensionName: 'my-extension',
                    route: { path: '/page2' },
                });
            default:
                throw new Error('Unknown action received');
        }
    });
}
