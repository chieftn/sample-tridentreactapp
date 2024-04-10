import React from "react";
// import { Route, Router, Switch } from "react-router-dom";
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

export function App({ history, extensionClient, environmentConfig }: AppProps) {
    const [location, setLocation] = React.useState<string>('');
    extensionClient.navigation.onNavigate(route => {
        console.log(route.targetUrl);
        // history.replace(route.targetUrl);
        setLocation(route.targetUrl);

    });
    // client.navigation.navigate()

    console.log('here: ---------------------------------------------------------------------------------------------');
    console.log(history.location.pathname);
    console.log(history);
    // console.log(window.parent.location.href);

    const onClick1= () => {
        console.log('here click');
        extensionClient.navigation.navigate('extension', { path: "/page1"});
    };

    const onClick2 = () => {
        console.log('here click');
        extensionClient.navigation.navigate('extension', { path: "/page2"});
    };


    // const me = useHistory();
    // extensionClient.
    // me.listen((you) => { console.log(you) })
    return (
        <>
        <div>heya: {location}</div>
        <button onClick={onClick1}>page 1</button>
        <button onClick={onClick2}>page 2</button>
        </>

    );

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
