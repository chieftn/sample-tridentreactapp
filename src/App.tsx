import React from "react";
// import { Route, Router, Switch } from "react-router-dom";
import { History } from "history";
import { ExtensionClientAPI } from "@trident/extension-client";
import { EnvironmentSetting } from "./environments";
import { useTranslation } from "react-i18next";
// import type { I18nKey } from 'i18next';
import type { TFunction } from "i18next";

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
            <div>{t('configure:plurals.me', { count: 1})}</div>
            <div>{t('configure:plurals.me', { count: 12})}</div>
            <div>{t('configure:plurals.me_underscore', { count: 1 })}</div>
            <div>{t('configure:plurals.me_underscore', { count: 10 })}</div>
            <div>{t('configure:interpolation.me_interpolated', { me: 'we'})}</div>
            <div>{t(`configure:typeInterpolation.me_${'one'}`)}</div>
        </>
    );
};

type TFunctionParameters = Parameters<TFunction>;
type Key = TFunctionParameters[0][3]
// type CommonDictionary = Pick<CustomTypeOptions, 'resources'>;
// type Me = keyof CommonDictionary;

export const me = (): Key => {
    return 'common:common.yesl';
}