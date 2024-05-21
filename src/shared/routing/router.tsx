import * as React from 'react';
import { createMemoryRouter, Outlet } from "react-router-dom";
import { ConfigureMainView } from '../../views/configureMainView';
import { ExploreMainView } from '../../views/exploreMainView';
import { InsightsMainView } from '../../views/insightsMainView';

export const routeSegments = {
  operationInsights: 'operational-insights',
  configure: '',
  explore: 'explore',
  insights: 'insights'
}

export const routeParameters = {
  artifactId: 'artifactId'
}

export interface GetAreaRouteParameters {
  artifactId: string;
}

export const getConfigureRoute = (params: GetAreaRouteParameters): string => {
  return `/${routeSegments.operationInsights}/${params.artifactId}/${routeSegments.configure}`;
};

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
          path: `/${routeSegments.operationInsights}/:${routeParameters.artifactId}`,
          children: [
            {
              path: routeSegments.configure,
              element: <ConfigureMainView/>
            },
            {
              path: routeSegments.explore,
              element: <ExploreMainView/>
            },
            {
              path: routeSegments.insights,
              element: <InsightsMainView/>
            },
            // {
            //   path: 'subpages',
            //   element: <PageFrame/>,
            //   children: [
            //     {
            //       path: 'page3',
            //       element: <RightPanel><Page3/></RightPanel>,

            //       children: [
            //         {
            //           path: 'detail1',
            //           element: <BottomPanel><Page3/></BottomPanel>
            //         }
            //       ]
            //     },
            //   ]
            // }
          ],
        }
      ]
    }
  ])