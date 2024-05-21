
import React from 'react';
import ReactDOM from 'react-dom';
import { RouterProvider } from 'react-router-dom';
import { createExtensionClient, InitParams } from '@trident/extension-client';
import { environments } from './environments';
import { router } from './apps/shared/routing/router';

export function initialize(params: InitParams) {
    const client = createExtensionClient();
    const currentEnvironment = environments[params.environmentName] || environments.DEFAULT;
    // client.onNavigate(route => history.push(route.targetUrl));
    // const [location, setLocation] = React.useState<string>('');
    client.navigation.onNavigate(route => {
        router.set
    //     console.log('here we are');
    //     history.replace(route.targetUrl);
    //     setLocation(location);

    });
    // client.navigation.navigate()

    ReactDOM.render(
        <React.StrictMode>
             <RouterProvider router={router} />


        </React.StrictMode>,
        document.querySelector('#root')
    );
}
