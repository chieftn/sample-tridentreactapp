import React, { useContext } from "react";
import { createMemoryRouter, RouterProvider, useNavigate, Outlet, useParams } from 'react-router-dom';
import { History } from "history";
import { ExtensionClientAPI } from "@trident/extension-client";
import { EnvironmentSetting } from "./environments";

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

    // client.navigation.navigate()

    // console.log('here: ---------------------------------------------------------------------------------------------');
    // console.log(history.location.pathname);
    // console.log(history);
    // // console.log(window.parent.location.href);

    // const onClick1= () => {
    //     console.log('here click');
    //     extensionClient.navigation.navigate('extension', { path: "/page1"});
    // };

    // const onClick2 = () => {
    //     console.log('here click');
    //     extensionClient.navigation.navigate('extension', { path: "/page2"});
    // };


    // const me = useHistory();
    // extensionClient.
    // me.listen((you) => { console.log(you) })
    // return (
    //     <>
    //     <div>heya: {location}</div>
    //     <button onClick={onClick1}>page 1</button>
    //     <button onClick={onClick2}>page 2</button>
    //     </>

    // );

    // return <Router history={history}>
    //     <Switch>
    //         <Route path="/page1">
    //             <Page1
    //                 extensionClient={extensionClient}
    //                 environmentConfig={environmentConfig}
    //              />
    //         </Route>
    //         <Route path="/page2">
    //             <Page2 extensionClient={extensionClient} />
    //         </Route>
    //         <Route path="/dialog">
    //             <Dialog />
    //         </Route>
    //         <Route path="/panel">
    //             <Panel />
    //         </Route>
    //     </Switch>
    // </Router>;
}

// function Page1({ extensionClient, environmentConfig }: PageProps) {
//     const EnvironmentJson= JSON.stringify(environmentConfig)


//     return <>
//         <div>
//             Page 1 works!
//         </div>
//         <p> EnvironmentSettings: {EnvironmentJson} </p>
//         <button
//             onClick={() =>
//                 extensionClient.page.open({
//                     extensionName: "my-extension",
//                     route: { path: "/page2"}
//                 })

//                 // extensionClient.openDialog({
//                 //     extensionName: "my-extension",
//                 //     route: { path: "/dialog" }
//                 // })
//             }
//         >
//             Open Dialog
//         </button>
//     </>;
// }

// function Page2({ extensionClient }: PageProps) {
//     return <>
//         <div>
//             Page 2 works!
//         </div>
//         <button
//                 onClick={() =>
//                     extensionClient.page.open({
//                         extensionName: "my-extension",
//                         route: { path: "/page1"},
//                         // mode: OpenMode.ReplaceAll
//                     })
//                 }
//             // onClick={() =>
//             //     extensionClient.openPanel({
//             //         extensionName: "my-extension",
//             //         route: { path: "/panel" }
//             //     })
//             // }
//         >
//             Open Panel
//         </button>
//     </>;
// }

// function Dialog() {
//     return <div>
//         Dialog works!
//     </div>;
// }

// function Panel() {
//     return <div>
//         Panel works!
//     </div>;
// }

const Root: React.FC = () => {
    const navigate = useNavigate();
    const extensionClient = useContext(ExtensionContext);
    // const [, setLocation] = React.useState<string>('');

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

const Page3: React.FC = () => {
  const extensionClient = useContext(ExtensionContext);

  const close = () => {
    extensionClient.dialog.close({
      data: { hello: 'world'}
    })
  }

  return (
    <div>Page 3 --------
      <button onClick={close}>close</button>
    </div>
  )
};

const router = createMemoryRouter([
    {
      path: '/',
      element: <Root/>,
      children: [
        {
          path: "/operational-insights/:id",
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
              element: <Outlet/>,
              children: [
                {
                  path: 'page3',
                  element: <Page3/>
                }
              ]
            }
          ],
        }
      ]
    }
  ]) // { basename: '/operational-insights'});

