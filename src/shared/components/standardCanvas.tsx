import * as React from 'react';
import { makeStyles } from '@fluentui/react-components';

export const useStandardCanvasStyles = makeStyles({
    rootStyle: {
        height: 'calc(100% - 8px)',
        display: 'flex',
        alignItems: 'stretch'
    },
    navigationPaneStyle: {
        height: '100%',
        overflowY: 'auto',
    },
    centerPaneStyle: {
        height: '100%',
        overflowY: 'auto',
        flex: 3,
        display: 'flex',
    },
    drawerPaneStyle: {
        height: '100%',
        overflowY: 'auto',
    }
})

export interface StandardCanvasProps {
    bottomPane?: React.ReactNode;
    drawerPane?: React.ReactNode;
    centerPane: React.ReactNode;
    navigationPane?: React.ReactNode;
}
export const StandardCanvas: React.FC<StandardCanvasProps> = (props) => {
    const { rootStyle, navigationPaneStyle, centerPaneStyle, drawerPaneStyle } = useStandardCanvasStyles();
    const { navigationPane, drawerPane, centerPane } = props;

    return (
        <div className={rootStyle}>
            {navigationPane && <div className={navigationPaneStyle}>{navigationPane}</div>}
            <div className={centerPaneStyle}>
                {centerPane}
            </div>
            {drawerPane && <div className={drawerPaneStyle}>{drawerPane}</div>}
        </div>
    );
};