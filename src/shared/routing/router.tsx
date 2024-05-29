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

// export const router = createMemoryRouter([
//   {
//     path: '/',
//     children: [
//       {
//         path: '/operational-insights/',
//         children: [
//           {
//             path: 'create',
//             element: <span>create</span>,
//           },
//           {
//             path: ':artifactId',
//             children: [
//               {
//                 element: <div>Outlet with nav <Outlet/></div>,
//                 children: [
//                   {
//                     path: '',
//                     element: <span>home</span>
//                   },
//                   {
//                     path: 'explore',
//                     element: <div>Outlet of explore: <Outlet/></div>,
//                     children: [
//                       {
//                         path: '',
//                         element: <span>twin</span>
//                       },
//                       {
//                         path: 'events',
//                         element: <span>events</span>
//                       },
//                       {
//                         path: 'timeseries',
//                         element: <span>time series</span>
//                       }
//                     ]
//                   },
//                   {
//                     path: 'prepare',
//                     element: <div>Outlet of prepare <Outlet/></div>,
//                     children: [
//                       {
//                         path: '',
//                         element: <span>prepare links</span>
//                       },
//                       {
//                         path: 'mapping',
//                         children: [
//                             {
//                               path: '',
//                               element: <span>jobs empty</span>
//                             },
//                             {
//                               path: 'jobs',
//                               element: <span>jobs</span>
//                             },
//                             {
//                               path: 'history',
//                               element: <span>History</span>
//                             }
//                         ]
//                       },
//                       {
//                         path: 'contextualize',
//                         element: <span>Contextualize</span>
//                       },
//                       {
//                         path: 'models',
//                         children: [
//                           {
//                             path: '',
//                             element: <span>group jobs</span>
//                           },
//                           {
//                             path: 'models',
//                             element: <span>groups</span>
//                           },
//                           {
//                             path: 'twins',
//                             element: <span>twins</span>
//                           }
//                         ]
//                       }
//                     ]
//                   },
//                   {
//                     path: 'insights',
//                     element: <span>Insights</span>
//                   }
//                 ]
//               },
//               {
//                 path: 'explore/twins/details/:twinId',
//                 element: <div>time series with outlet <Outlet/></div>,
//                 children: [
//                   {
//                     path: 'timeseries',
//                     element: <span>time series</span>
//                   },
//                   {
//                     path: 'events',
//                     element: <span>events</span>
//                   },
//                   {
//                     path: 'relatedTwins',
//                     element: <span>related twins</span>
//                   }
//                 ]
//               },
//             ],
//           },
//         ],
//       },
//     ],
//   },
// ]);

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
          element: <Outlet/>,
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