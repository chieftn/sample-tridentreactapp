import * as React from 'react';
import { StandardLayout } from '../shared/components/standardLayout';
import { AreaToggle } from '../shared/components/areaToggle';

export const ExploreMainView: React.FC = () => {
    return (
        <StandardLayout
            header={<AreaToggle currentArea='explore'/>}
            body={
                <div>
                    Hello explore
                </div>
            }
        />
    )
};