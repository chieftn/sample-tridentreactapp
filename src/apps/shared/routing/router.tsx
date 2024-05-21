import * as React from 'react';
import { createMemoryRouter, Outlet } from "react-router-dom";
import { StandardLayout } from '../components/standardLayout';

export const router = createMemoryRouter([
    {
      path: '/',
      element: <Outlet/>,
      children: [
        {
          path: 'groups/:workgroupId/operational-insights/:digitalTwinsId',
          children: [
            {
              path: '',
              element: <StandardLayout body={<span>explore</span>}/>
            },
            {
              path: 'configure',
              element: <StandardLayout body={<span>configure</span>}/>
            },
            {
              path: "insights",
              element: <StandardLayout body={<span>insights</span>}/>
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