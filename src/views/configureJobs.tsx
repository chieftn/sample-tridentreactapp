import * as React from 'react';
import { Breadcrumb, BreadcrumbDivider, BreadcrumbItem } from '@fluentui/react-components';
import { StandardLayout } from '../shared/components/standardLayout';

export const ConfigureJobs: React.FC = () => {

    return (
        <StandardLayout
            header={
                <>
                    <Breadcrumb size={'large'}>
                        <BreadcrumbItem onClick={}>Configure</BreadcrumbItem>
                        <BreadcrumbDivider/>
                        <BreadcrumbItem>Jobs</BreadcrumbItem>
                    </Breadcrumb>
                </>
            }
            body={
                <span>Jobs history</span>
            }
        />
    )
};