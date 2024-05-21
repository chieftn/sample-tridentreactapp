import * as  React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Menu, MenuTrigger, MenuButton, MenuList, MenuItem, MenuPopover } from '@fluentui/react-components';
import { getConfigureRoute, getExploreRoute, getInsightsRoute } from '../routing/navigator';

export interface AreaToggleProps {
    currentArea: 'configure' | 'explore' | 'insights';
}
export const AreaToggle: React.FC<AreaToggleProps> = ({ currentArea }) => {
    const { artifactId } = useParams();
    const navigate =  useNavigate()


    const onConfigure = () => {
        navigate(getConfigureRoute({ artifactId }));
    };

    const onExplore =() => {
        navigate(getExploreRoute({ artifactId }));
    };

    const onInsights = () => {
        navigate(getInsightsRoute({ artifactId }))
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