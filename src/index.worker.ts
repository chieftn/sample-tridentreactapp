import { createExtensionClient, InitParams, type ArtifactCreateContext } from '@trident/extension-client';
import { routeParameters, routeSegments } from './shared/routing/router';
import { EXTENSION_NAMES } from './shared/constants/environmentConstants';

export function initialize(params: InitParams) {
    const extensionClient = createExtensionClient();

    extensionClient.action.onAction((message) => {
        switch (message.action) {
            case 'create.operational-insight': {
                const data = message.data as ArtifactCreateContext;
                return extensionClient.dialog.open({
                  extensionName: EXTENSION_NAMES.DigitalOperations,
                  options: {
                    height: 175,
                    width: 400,
                  },
                  route: {
                    path: routeSegments.create,
                    queryParams: {
                      [routeParameters.workspaceObjectId]: data.workspaceObjectId || '',
                    },
                  },
                });
            }
            default: {
                return Promise.resolve();
            }
        }
    });
}
