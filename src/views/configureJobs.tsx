import * as React from 'react';
import { Breadcrumb, BreadcrumbDivider, BreadcrumbItem } from '@fluentui/react-components';
import { StandardLayout } from '../shared/components/standardLayout';
import { StandardSection } from 'src/shared/components/standardSection';

export const ConfigureJobs: React.FC = () => {

    return (
        <StandardLayout
            header={
                <>
                    <Breadcrumb size={'large'}>
                        <BreadcrumbItem>Configure</BreadcrumbItem>
                        <BreadcrumbDivider/>
                        <BreadcrumbItem>Jobs</BreadcrumbItem>
                    </Breadcrumb>
                </>
            }
            body={
                <StandardSection>Hello world</StandardSection>
            }
        />
    )
};