import { createExtensionClient } from "@trident/extension-client";
import { createBrowserHistory } from "history";
import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

export function initialize() {
    const client = createExtensionClient();
    const history = createBrowserHistory();
    client.onNavigate(route => history.push(route.targetUrl));

    ReactDOM.render(
        <App
            history={history}
            extensionClient={client}
        />,
        document.querySelector("#root")
    );
}
