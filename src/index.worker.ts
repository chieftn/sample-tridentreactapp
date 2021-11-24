import { ExtensionClient } from '@trident/extension-client';

export function initialize() {
    const extensionClient = new ExtensionClient();

    extensionClient.on('action', (message) => {
        switch (message.action) {
            case 'open.page1':
                extensionClient.openPage({
                    extensionName: 'my-extension',
                    route: { path: '/page1' },
                });
                break;
            case 'open.page2':
                extensionClient.openPage({
                    extensionName: 'my-extension',
                    route: { path: '/page2' },
                });
                break;
            default:
                throw new Error('Unknown action received');
        }
    });
}
