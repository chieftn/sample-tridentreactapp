import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import { History } from "history";
import { ExtensionClientAPI } from "@trident/extension-client";

interface AppProps {
    history: History;
    extensionClient: ExtensionClientAPI;
}

interface PageProps {
    extensionClient: ExtensionClientAPI;
}

export function App({ history, extensionClient }: AppProps) {
    return <Router history={history}>
        <Switch>
            <Route path="/page1">
                <Page1 extensionClient={extensionClient} />
            </Route>
            <Route path="/page2">
                <Page2 extensionClient={extensionClient} />
            </Route>
            <Route path="/dialog">
                <Dialog />
            </Route>
            <Route path="/panel">
                <Panel />
            </Route>
        </Switch>
    </Router>;
}

function Page1({ extensionClient }: PageProps) {
    return <>
        <div>
            Page 1 works!
        </div>
        <button
            onClick={() =>
                extensionClient.openDialog({
                    extensionName: "my-extension",
                    route: { path: "/dialog" }
                })
            }
        >
            Open Dialog
        </button>
    </>;
}

function Page2({ extensionClient }: PageProps) {
    return <>
        <div>
            Page 2 works!
        </div>
        <button
            onClick={() =>
                extensionClient.openPanel({
                    extensionName: "my-extension",
                    route: { path: "/panel" }
                })
            }
        >
            Open Panel
        </button>
    </>;
}

function Dialog() {
    return <div>
        Dialog works!
    </div>;
}

function Panel() {
    return <div>
        Panel works!
    </div>;
}
