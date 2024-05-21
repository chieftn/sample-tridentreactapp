import * as React from 'react';
import { createMemoryRouter, Outlet } from "react-router-dom";
import { ConfigureMainView } from '../../views/configureMainView';
import { ExploreMainView } from '../../views/exploreMainView';
import { InsightsMainView } from '../../views/insightsMainView';

export const router = createMemoryRouter([
    {
      path: '/',
      element: <Outlet/>,
      children: [
        {
          path: '/operational-insights/:artifactId',
          children: [
            {
              path: '',
              element: <ConfigureMainView/>
            },
            {
              path: 'explore',
              element: <ExploreMainView/>
            },
            {
              path: "insights",
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