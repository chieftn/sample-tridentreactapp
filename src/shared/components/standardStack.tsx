import * as React from 'react';
import { makeStyles } from '@fluentui/react-components';

export const useStandardStackStyles = makeStyles({
    rootStyle: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    topPaneStyle: {

    },
    bottomPaneStyle: {

    },
})

export interface StandardStackProps {
    topPane: React.ReactNode;
    bottomPane?: React.ReactNode;
}
export const StandardStack: React.FC<StandardStackProps> = (props) => {
    const { rootStyle, topPaneStyle, bottomPaneStyle } = useStandardStackStyles();
    const { topPane, bottomPane } = props;

    return (
        <div className={rootStyle}>
            <div className={topPaneStyle}>{topPane}</div>
            {bottomPane && <div className={bottomPaneStyle}>{bottomPane}</div>}
        </div>
    );
};