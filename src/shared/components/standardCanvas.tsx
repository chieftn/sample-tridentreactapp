import * as React from 'react';
import { makeStyles } from '@fluentui/react-components';

export const useStandardCanvasStyles = makeStyles({
    rootStyle: {
        height: '100%'
    }
})

export interface StandardCanvasProps {
    children: React.ReactNode;
}
export const StandardCanvas: React.FC<StandardCanvasProps> = ({ children }) => {
    const { rootStyle } = useStandardCanvasStyles();

    return (
        <div className={rootStyle}>
            {children}
        </div>
    );
};