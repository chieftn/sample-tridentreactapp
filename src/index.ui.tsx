import { createExtensionClient, InitParams } from "@trident/extension-client";
import { createBrowserHistory } from "history";
import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { environments } from "./environments";
import { initializationLocalization } from "./localization/i18n";

export function initialize(params: InitParams) {
    initializationLocalization();
    const client = createExtensionClient();
    const history = createBrowserHistory();
    const currentEnvironment = environments[params.environmentName] || environments.DEFAULT;
    // client.onNavigate(route => history.push(route.targetUrl));
    // const [location, setLocation] = React.useState<string>('');
    // client.navigation.onNavigate(route => {
    //     console.log('here we are');
    //     history.replace(route.targetUrl);
    //     setLocation(location);

    // });
    // client.navigation.navigate()

    ReactDOM.render(
        <App
            // location={location}
            history={history}
            extensionClient={client}
            environmentConfig={currentEnvironment}
        />,
        document.querySelector("#root")
    );
}
