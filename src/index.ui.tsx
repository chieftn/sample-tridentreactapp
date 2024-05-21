
import React from 'react';
import ReactDOM from 'react-dom';
import { RouterProvider } from 'react-router-dom';
import { createExtensionClient, InitParams } from '@trident/extension-client';
import { router } from './shared/routing/router';

export function initialize(params: InitParams) {
    const client = createExtensionClient();
    client.navigation.onNavigate(route => {
        console.log(route);
        router.navigate(route.targetUrl);
    });

    ReactDOM.render(
        <React.StrictMode>
             <RouterProvider router={router} />
        </React.StrictMode>,
        document.querySelector('#root')
    );
}
