import React from "react";
// import { Route, Router, Switch } from "react-router-dom";
import { History } from "history";
import { ExtensionClientAPI } from "@trident/extension-client";
import { EnvironmentSetting } from "./environments";
import { useTranslation } from "react-i18next";
import type { Common } from "i18next";

interface AppProps {
    history: History;
    extensionClient: ExtensionClientAPI;
    environmentConfig: EnvironmentSetting;
}
export function App({ history, extensionClient, environmentConfig }: AppProps) {
    const { t, i18n } = useTranslation(['common', 'configure']);
    console.log(i18n.language);

    return (
        <>
            <div>{t('common:common.yes')}</div>
            <div>{t('configure:configure')}</div>
            <div>{t('configure:configure')}</div>
            <div>{t('configure:plurals.me_one')}</div>
            <div>{t('configure:plurals.me_other', { count: 12})}</div>
            <div>{t('configure:plurals.me_underscore_one')}</div>
            <div>{t('configure:plurals.me_underscore_other', { count: 1})}</div>
            <div>{t('configure:interpolation.me_interpolated', { me: 'we'})}</div>
            <div>{t(`configure:typeInterpolation.me_${'one'}`)}</div>
        </>
    );
};

export const me (): I18nKey<Namespace extends keyof Common>=> {
    return 'common'
}