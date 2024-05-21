import * as React from 'react';
import { StandardLayout } from '../shared/components/standardLayout';
import { AreaToggle } from '../shared/components/areaToggle';

export const ConfigureMainView: React.FC = () => {
    return (
        <StandardLayout
            header={<AreaToggle currentArea='configure'/>}
            body={
                <div>
                    Hello configure
                </div>
            }
        />
    )
};