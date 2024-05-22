import * as React from 'react';
import { makeStyles, shorthands } from '@fluentui/react-components';
import { tokens } from '@fluentui/react-theme';

export const useStandardSectionStyles = makeStyles({
    sectionStyle: {
        background: tokens.colorNeutralBackground1,
        borderRadius: tokens.borderRadiusMedium,
        boxShadow: tokens.shadow4,
        paddingInlineStart: tokens.spacingVerticalS,
        ...shorthands.borderWidth('1px'),
        ...shorthands.borderStyle('solid'),
        ...shorthands.borderColor(tokens.colorNeutralStroke1),
        overflowY: 'auto'
    }
});

export interface StandardSectionProps {
    children: React.ReactNode;
}
export const StandardSection: React.FC<StandardSectionProps> = ({ children }) => {
    const { sectionStyle } = useStandardSectionStyles();
    return (
        <section className={sectionStyle}>
            {children}
        </section>
    )
};