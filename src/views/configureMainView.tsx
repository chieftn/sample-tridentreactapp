import * as React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from '@fluentui/react-components';
import { StandardLayout } from '../shared/components/standardLayout';
import { useFabricNavigate } from '../shared/hooks/useFabricNavigate';
import { getConfigureJobsRoute } from '../shared/routing/router';
import { AreaToggle } from '../shared/components/areaToggle';

export const ConfigureMainView: React.FC = () => {
    const { artifactId } = useParams();
    const { openPage } =  useFabricNavigate()

    const onClick = () => {
        openPage({ path: getConfigureJobsRoute({ artifactId }) });
    };

    return (
        <StandardLayout
            header={<AreaToggle currentArea='configure'/>}
            body={
                <div>
                    Hello configure
                    <Link onClick={onClick}>jobs</Link>
                </div>
            }
        />
    )
};