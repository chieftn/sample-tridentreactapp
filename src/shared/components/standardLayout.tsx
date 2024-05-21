import * as React from 'react';

export interface StandardLayoutProps {
    header?: React.ReactNode;
    body?: React.ReactNode;
    footer?: React.ReactNode;
}
export const StandardLayout: React.FC<StandardLayoutProps> = ({ header, body, footer }) => {
    return (
        <>
            {header && <div>{header}</div>}
            {body && <div>{body}</div>}
            {footer && <div>{footer}</div>}
        </>
    );
};