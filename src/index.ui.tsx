
import React from 'react';
import ReactDOM from 'react-dom';
import { RouterProvider } from 'react-router-dom';
import { createExtensionClient, InitParams } from '@trident/extension-client';
import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import { router } from './shared/routing/router';

export function initialize(params: InitParams) {
    const client = createExtensionClient();
    client.navigation.onNavigate(route => {
        router.navigate(route.targetUrl);
    });

    ReactDOM.render(
        <React.StrictMode>
            <FluentProvider theme={webLightTheme}>
                <RouterProvider router={router} />
             </FluentProvider>
        </React.StrictMode>,
        document.querySelector('#root')
    );
}
