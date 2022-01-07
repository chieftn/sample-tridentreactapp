import { createExtensionClient, InitParams } from "@trident/extension-client";
import { createBrowserHistory } from "history";
import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { environments } from "./environments";

export function initialize(params: InitParams) {
    const client = createExtensionClient();
    const history = createBrowserHistory();
    const currentEnvironment = environments[params.environmentName] || environments.DEFAULT;
    client.onNavigate(route => history.push(route.targetUrl));
    
    ReactDOM.render(
        <App
            history={history}
            extensionClient={client}
            environmentConfig={currentEnvironment}
        />,
        document.querySelector("#root")
    );
}
