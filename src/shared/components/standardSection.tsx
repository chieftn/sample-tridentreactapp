import * as React from 'react';
import { makeStyles, shorthands } from '@fluentui/react-components';
import { tokens } from '@fluentui/react-theme';

export const useStandardSectionStyles = makeStyles({
    section: {
        background: tokens.colorNeutralBackground1,
        borderRadius: tokens.borderRadiusMedium,
        boxShadow: tokens.shadow8,
        paddingInlineStart: tokens.spacingVerticalS,
        ...shorthands.borderWidth('1px'),
        ...shorthands.borderStyle('solid'),
        ...shorthands.borderColor(tokens.colorNeutralStroke1),
    }
});

export interface StandardSectionProps {
    children: React.ReactNode;
}
export const StandardSection: React.FC<StandardSectionProps> = ({ children }) => {
    const { section } = useStandardSectionStyles();
    return (
        <section className={section}>
            {children}
        </section>
    )
};