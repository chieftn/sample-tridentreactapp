import * as React from 'react';
import { createMemoryRouter } from "react-router-dom";

export const router = createMemoryRouter([
    {
      path: '/',
      element: <div>Hello</div>,
      children: [
        {
          path: "operational-insights/:id",
          children: [
            {
              path: '',
              element: <div>Hello ''</div>
            },
            {
              path: "page1",
              element: <div>Hello page1</div>
            },
            {
              path: "page2",
              element: <div>Hello page2</div>
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