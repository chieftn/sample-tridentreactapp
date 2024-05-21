import * as React from 'react';
import { StandardLayout } from '../shared/components/standardLayout';
import { AreaToggle } from '../shared/components/areaToggle';

export const InsightsMainView: React.FC = () => {
    return (
        <StandardLayout
            header={<AreaToggle currentArea='insights'/>}
            body={
                <div>
                    Hello insights
                </div>
            }
        />
    )
};