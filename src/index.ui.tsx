import { ExtensionClient } from "@trident/extension-client";
import { createBrowserHistory } from "history";
import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

export function initialize() {
    const client = new ExtensionClient();
    const history = createBrowserHistory();
    client.onNavigate(route => history.push(route.path));

    ReactDOM.render(
        <App
            history={history}
            extensionClient={client}
        />,
        document.querySelector("#root")
    );
}
