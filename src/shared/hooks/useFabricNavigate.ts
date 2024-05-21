import { useFabricClient } from './useFabricClient';
import type { ExtensionRoute } from '@trident/extension-client';

export interface OpenPageParameters {
    extensionName?: string;
    route: ExtensionRoute;
}

export interface OpenDialogParameters {
    extensionName?: string;
    route: ExtensionRoute;
}

export interface FabricNavigator {
    openDialog: (params: OpenDialogParameters) => void;
    openDialogPane: (params: OpenDialogParameters) => void;
    openPage: (params: OpenPageParameters) => void;
}

export const useFabricNavigate = (): FabricNavigator => {
    const client = useFabricClient();

    return {
        openPage: params => {
            const { extensionName, route } = params;

            client.page.open({
                extensionName: extensionName || 'digitaloperations',
                route
            })
        },
        openDialog: params => {

        },
        openDialogPane: params => {

        }
    }
}