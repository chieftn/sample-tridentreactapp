import * as React from 'react';
import { createMemoryRouter, Outlet } from "react-router-dom";
import { ConfigureMainView } from '../../views/configureMainView';
import { ExploreMainView } from '../../views/exploreMainView';
import { InsightsMainView } from '../../views/insightsMainView';
import { ConfigureJobs } from '../../views/configureJobs';

export const routeSegments: Record<string, string> = {
  operationInsights: 'operational-insights',
  create: 'create',
  configure: '',
  explore: 'explore',
  insights: 'insights',
  jobs: 'jobs'
}

export const routeParameters: Record<string, string> = {
  artifactId: 'artifactId',
  workspaceId: 'workspaceId'
}

export interface GetAreaRouteParameters {
  artifactId: string;
}

export const getConfigureRoute = (params: GetAreaRouteParameters): string => {
  return `/${routeSegments.operationInsights}/${params.artifactId}/${routeSegments.configure}`;
};

export const getConfigureJobsRoute = (params: GetAreaRouteParameters): string => {
  return `/${routeSegments.operationInsights}/${params.artifactId}/${routeSegments.configure}/${routeSegments.jobs}`;
}

export const getExploreRoute = (params: GetAreaRouteParameters): string => {
  return  `/${routeSegments.operationInsights}/${params.artifactId}/${routeSegments.explore}`;
};

export const getInsightsRoute = (params: GetAreaRouteParameters): string => {
  return `/${routeSegments.operationInsights}/${params.artifactId}/${routeSegments.insights}`;
};

export const router = createMemoryRouter([
    {
      path: '/',
      element: <Outlet/>,
      children: [
        {
          path: routeSegments.create,
          element: <span>create</span>
        },
        {
          path: `/${routeSegments.operationInsights}/:${routeParameters.artifactId}`,
          children: [
            {
              path: routeSegments.configure,
              element: <Outlet/>,
              children: [
                {
                  path: '',
                  element: <ConfigureMainView/>
                },
                {
                  path: routeSegments.jobs,
                  element: <ConfigureJobs/>
                }
              ]
            },
            {
              path: routeSegments.explore,
              element: <ExploreMainView/>
            },
            {
              path: routeSegments.insights,
              element: <Outlet/>,
              children: [
                {
                  path: '',
                  element: <InsightsMainView/>
                },
                {
                  path: 'hello',
                  element: <span>hello create</span>
                }
              ]
            },
          ],
        }
      ]
    }
  ])