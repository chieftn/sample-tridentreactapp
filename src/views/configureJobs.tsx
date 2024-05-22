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
                        <BreadcrumbItem>Jo  bs</BreadcrumbItem>
                    </Breadcrumb>
                    <StandardSection>Hello Ribbon</StandardSection>
                    <StandardSection><div style={{ margin: 12}}>hello ribbon 2</div></StandardSection>
                </>
            }
            body={
               <StandardSection>
                    <StandardCanvas>
                        <ul>
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