import * as React from 'react';

export interface SamplePanelProps {
    name: string;
    color: string
}
export const SamplePanel: React.FC<SamplePanelProps> = ({ name, color}) => {
    return (
        <div style={{ backgroundColor: color }}>
        {name}
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


    );


}