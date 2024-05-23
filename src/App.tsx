import React from "react";
// import { Route, Router, Switch } from "react-router-dom";
import { History } from "history";
import { ExtensionClientAPI } from "@trident/extension-client";
import { EnvironmentSetting } from "./environments";
import { useTranslation } from "react-i18next";

interface AppProps {
    history: History;
    extensionClient: ExtensionClientAPI;
    environmentConfig: EnvironmentSetting;
}
export function App({ history, extensionClient, environmentConfig }: AppProps) {
    const { t } = useTranslation(['common', 'configure']);
    return (
        <>
            <span>{t('common.yes')}</span>
            <span>{t('configure:configure')}</span>
        </>
    );
};
