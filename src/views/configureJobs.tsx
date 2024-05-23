import * as React from 'react';
import { Breadcrumb, BreadcrumbDivider, BreadcrumbItem } from '@fluentui/react-components';
import { StandardLayout } from '../shared/components/standardLayout';
import { StandardSection } from 'src/shared/components/standardSection';
import { StandardCanvas } from 'src/shared/components/standardCanvas';
import { SamplePanel } from './samplePanel';

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
                            <SamplePanel color={'red'} name='navigation pane'/>
                        }
                        centerPane={
                            <SamplePanel color='blue' name='center'/>
                        }
                        drawerPane={
                            <SamplePanel color='green' name='persistent drawer'/>
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