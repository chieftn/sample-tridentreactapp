import type { ExtensionClient, ExtensionRoute } from '@trident/extension-client';

export const routeSegments = {
    operationInsights: 'operational-insights',
    configure: '',
    explore: 'explore',
    insights: 'insights'
}

export interface GetAreaRouteParameters {
    artifactId: string;
}

export const getConfigureRoute = (params: GetAreaRouteParameters): string => {
    return `${routeSegments.operationInsights}/${params.artifactId}/${routeSegments.configure}`;
};

export const getExploreRoute = (params: GetAreaRouteParameters): string => {
    return  `${routeSegments.operationInsights}/${params.artifactId}/${routeSegments.explore}`;
};

export const getInsightsRoute = (params: GetAreaRouteParameters): string => {
    return `${routeSegments.operationInsights}/${params.artifactId}/${routeSegments.insights}`;
};

interface PageNavigationProps {
    extensionName?: string;
    route: ExtensionRoute
}
export class Navigator {
    private client: ExtensionClient;

    constructor(client: ExtensionClient) {
        this.client = client;
    }

    public navigateToPage(params: PageNavigationProps) {
        const { extensionName, route } = params;

        this.client.page.open({
            extensionName: extensionName || 'digitaloperations',
            route
        })
    }
}

