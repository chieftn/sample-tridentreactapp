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
                    {/* <StandardSection><div style={{ margin: 12}}>hello ribbon 2</div></StandardSection>
                    <div style={{margin: 100}}>hello big</div> */}
                </>
            }
            body={
               <StandardSection>
                    <StandardCanvas
                        navigationPane={
                            <div>
                                navigationPane
                                <ul>
                                    <li>hello nav</li>
                                    <li>hello</li>
                                    <li>hello</li>
                                    <li>hello</li>
                                    <li>hello</li>
                                    <li>hello</li>
                                    <li>hello</li>
                                    <li>hello</li>
                                    <li>hello</li>
                                    <li>hello</li>
                                    <li>hello asdf as asdfasdf a asdf asdf asdf asdf asdf asdf asdf asdf asf </li>
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
                            </div>
                        }
                        centerPane={
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
                    }
                    bottomPane={
                        <div>bottom pane</div>
                    }
                    drawerPane={
                        <div>
                            Hello drawer
                        </div>
                    }

                    />
               </StandardSection>
            }
            footer={
                <>Hello footer</>
            }
        />
    )
};