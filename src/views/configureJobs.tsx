import * as React from 'react';
import { Breadcrumb, BreadcrumbDivider, BreadcrumbItem } from '@fluentui/react-components';
import { StandardLayout } from '../shared/components/standardLayout';
import { StandardSection } from 'src/shared/components/standardSection';
import { StandardCanvas } from 'src/shared/components/standardCanvas';

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
                    <StandardSection>Hello Ribbon</StandardSection>
                </>
            }
            body={
               <StandardSection>
                    <StandardCanvas>
                        <ul style={{ overflowY: 'auto'}}>
                            <li>hello</li>
                            <li>hello</li>
                            <li>hello</li>
                            <li>hello</li>
                            <li>hello</li>
                            <li>hello</li>
                            <li>hello</li>
                            <li>hello</li>
                            <li>hello</li>
                            <li>hello</li>
                            <li>hello</li>
                            <li>hello</li>
                            <li>hello</li>
                            <li>hello</li>
                            <li>hello</li>
                            <li>hello</li>
                            <li>hello</li>
                            <li>hello</li>
                            <li>hello</li>
                            <li>hello</li>
                            <li>hello</li>
                            <li>hello</li>
                        </ul>
                    </StandardCanvas>
               </StandardSection>
            }
            footer={
                <>Hello footer</>
            }
        />
    )
};