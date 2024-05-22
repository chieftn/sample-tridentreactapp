import * as React from 'react';
import { makeStyles, tokens } from '@fluentui/react-components';

export const useStandardLayoutStyles = makeStyles({
    rootStyle: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        '@media (max-height: 500px)': {
            height: 'auto',
        },
        backgroundColor: tokens.colorNeutralBackground3,
        rowGap: tokens.spacingVerticalS,
        paddingInline: tokens.spacingVerticalL
    },
    headerStyle: {
        flexGrow: 0,
        flexShrink: 0,
    },
    bodyStyle: {
        overflowY: 'auto',
        flexGrow: 2
    },
    footerStyle: {
        flexGrow: 0,
        flexShrink: 0,
    }
})

export interface StandardLayoutProps {
    header?: React.ReactNode;
    body?: React.ReactNode;
    footer?: React.ReactNode;
}
export const StandardLayout: React.FC<StandardLayoutProps> = ({ header, body, footer }) => {
    const { rootStyle, headerStyle, bodyStyle, footerStyle } = useStandardLayoutStyles();
    return (
        <div className={rootStyle}>
            {header && <div className={headerStyle}>{header}</div>}
            {body && <div className={bodyStyle}>{body}</div>}
            {footer && <div className={footerStyle}>{footer}</div>}
        </div>
    );
};