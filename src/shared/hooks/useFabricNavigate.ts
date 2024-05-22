import type { ExtensionRoute } from '@trident/extension-client';
import { EXTENSION_NAMES } from '../constants/environmentConstants';
import { useFabricClient } from './useFabricClient';

export interface OpenPageParameters {
    extensionName?: string;
    path: string;
    queryParams?: Record<string,string>;
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
            const { extensionName, path, queryParams } = params;

            client.page.open({
                extensionName: extensionName || EXTENSION_NAMES.DigitalOperations,
                route: { path, queryParams }
            })
        },
        openDialog: params => {

        },
        openDialogPane: params => {

        }
    }
}