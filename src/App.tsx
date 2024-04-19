import React, { useContext } from "react";
import { createMemoryRouter, RouterProvider, useNavigate, Outlet, useParams } from 'react-router-dom';
import { History } from "history";
import { ExtensionClientAPI } from "@trident/extension-client";
import { EnvironmentSetting } from "./environments";
import { Client } from './Client';

interface AppProps {
    history: History;
    extensionClient: ExtensionClientAPI;
    environmentConfig: EnvironmentSetting;
}

// interface PageProps {
//     extensionClient: ExtensionClientAPI;
//     environmentConfig?: EnvironmentSetting;
// }
const ExtensionContext = React.createContext<ExtensionClientAPI>(undefined);
export function App({ history, extensionClient, environmentConfig }: AppProps) {


    return <ExtensionContext.Provider value={extensionClient}><RouterProvider router={router}/></ExtensionContext.Provider>
}

const Root: React.FC = () => {
    const navigate = useNavigate();
    const extensionClient = useContext(ExtensionContext);
    // const [, setLocation] = React.useState<string>('');

    React.useEffect(() => {
      const me = async () => {
        const client = new Client();
        await client.fetch({});
      }

      void me();
    }, []);


    React.useEffect(() => {
        extensionClient.navigation.onNavigate(route => {
          console.log('hereeereerer');
            console.log(route.targetUrl);
            // history.replace(route.targetUrl);
            // setLocation(route.targetUrl);
            navigate(route.targetUrl);

        });
    }, [])


    return (
        <Outlet/>
    )
};


const PageHello: React.FC = () => {
  const extensionClient = useContext(ExtensionContext);
  const { id } = useParams();
  const path1 = `/operational-insights/${id}/page1`;
  const path2= `/operational-insights/${id}/page2`;

  const navigate1 = () => {
    extensionClient.page.open({
      extensionName: "digital-operations",
      route: { path: path1 },
    })
  }

  const navigate2 = () => {
    extensionClient.page.open({
      extensionName: "digital-operations",
      route: { path: path2 },
    })
  }

  return (
    <div>Hello world
       <button onClick={navigate1}>Page1</button>;
       <button onClick={navigate2}>Page2</button>;
    </div>
  )

};

const Page1: React.FC = () => {
    console.log('page1');
    const extensionClient = useContext(ExtensionContext);
    const { id } = useParams();
    const path2= `/operational-insights/${id}/page2`;


    const navigate = () => {
      extensionClient.page.open({
        extensionName: "digital-operations",
        route: { path: path2},
      })
    }

    return (
        <div>Page 1<button onClick={navigate}>Page2</button></div>
    );
}



const Page2: React.FC = () => {
  console.log('page 2')
  const extensionClient = useContext(ExtensionContext);
  const { id } = useParams();
  const path1 = `/operational-insights/${id}/subpages/page3`;

  const navigate = () => {
    extensionClient.page.open({
      extensionName: "digital-operations",
      route: { path: path1 },
    })
  }

  const panel = () => {
    // extensionClient.dialog.open
    extensionClient.dialog.open({
        extensionName: "digital-operations",
        route: { path: path1 },
        // options: {
        //   isLightDismiss: false
        // }
    }).then((result) => {
      console.log(result);
    })
  }

  return (
    <div>Page 2 --------
      <button onClick={navigate}>page 1</button>
      <button onClick={panel}>panel</button>
    </div>
  )
}

interface PanelProps {
  children: React.ReactNode;
}

const PageFrame: React.FC<PanelProps> = ({ children }) => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%'}}>
        <div>
          <span>ribbon</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', gap: 10, overflow: 'auto' }}>
            <div style={{ flexShrink: 2, flexGrow: 1, overflow: 'auto' }}>
                <div style={{ backgroundColor: 'gray' }}>{children}</div>
            </div>
            <Outlet/>
          </div>

      </div>
    );
};

const RightPanel: React.FC<PanelProps> = ({ children }) => {
  return (
      <div style={{ flexGrow: 2, display: 'flex', flexDirection: "column", gap: 10, overflow: 'auto' }}>
        <div style={{backgroundColor: 'red', flexGrow: 4, overflow: 'auto' }}>
          {children}
        </div>
        <Outlet/>
      </div>
  )
};

const BottomPanel: React.FC<PanelProps> = ({ children }) => {
  return (
      <div style={{ backgroundColor: 'pink', flexGrow: 3, overflow: 'auto'}}>
        {children}
      </div>
  )
};

const Page3: React.FC = () => {
  // const extensionClient = useContext(ExtensionContext);
  const entries = React.useMemo(() => {
    return new Array(400).fill(null).map((s , i) => `hello ${i}`);
  }, []);

  // const close = () => {
  //   extensionClient.dialog.close({
  //     data: { hello: 'world'}
  //   })
  // }

  return (
    <ul>{entries.map(s => <li>{s}</li>)}
    </ul>
  )
};

const router = createMemoryRouter([
    {
      path: '/',
      element: <Root/>,
      children: [
        {
          path: "operational-insights/:id",
         //  element: <></>,
          children: [
            {
              path: '',
              element: <PageHello/>
            },
            {
              path: "page1",
              element: <Page1/>
              // loader: teamLoader,
            },
            {
              path: "page2",
              element: <Page2/>,
              // loader: teamLoader,
            },
            {
              path: 'subpages',
              element: <PageFrame><Page3/></PageFrame>,
              children: [
                {
                  path: 'page3',
                  element: <RightPanel><Page3/></RightPanel>,

                  children: [
                    {
                      path: 'detail1',
                      element: <BottomPanel><Page3/></BottomPanel>
                    }
                  ]
                },
              ]
            }
          ],
        }
      ]
    }
  ]) // { basename: '/operational-insights'});

