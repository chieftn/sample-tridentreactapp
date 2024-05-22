import * as  React from 'react';
import { useParams } from 'react-router-dom';
import { Menu, MenuTrigger, MenuButton, MenuList, MenuItem, MenuPopover } from '@fluentui/react-components';
import { useFabricNavigate } from '../hooks/useFabricNavigate';
import { getConfigureRoute, getExploreRoute, getInsightsRoute } from '../routing/router';

export interface AreaToggleProps {
    currentArea: 'configure' | 'explore' | 'insights';
}
export const AreaToggle: React.FC<AreaToggleProps> = ({ currentArea }) => {
    const { artifactId } = useParams();
    const { openPage } =  useFabricNavigate()


    const onConfigure = () => {
        openPage({ path: getConfigureRoute({ artifactId }) });
    };

    const onExplore =() => {
        openPage({ path: getExploreRoute({ artifactId }) });
    };

    const onInsights = () => {
        openPage({ path: getInsightsRoute({ artifactId }) } );
    };

    return (
        <Menu>
            <MenuTrigger disableButtonEnhancement>
            <MenuButton>{currentArea}</MenuButton>
            </MenuTrigger>

            <MenuPopover>
            <MenuList>
                <MenuItem disabled={currentArea === 'configure'} onClick={onConfigure}>Configure</MenuItem>
                <MenuItem disabled={currentArea === 'explore'} onClick={onExplore}>Explore</MenuItem>
                <MenuItem disabled={currentArea === 'insights'} onClick={onInsights}>Insights</MenuItem>
            </MenuList>
            </MenuPopover>
        </Menu>

    );
};