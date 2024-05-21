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
}