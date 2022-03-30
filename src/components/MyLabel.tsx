import { CSSProperties } from 'react';
import { UrlWithStringQuery } from 'url';
import './myLabel.css';

interface Props{
    /**
     * Label to show!
     */
    label: string;
    /**
     * Select the size!
     */
    size: 'normal'|'h1'|'h2'|'h3';
    /**
     * Capitalize all
     */
    allCaps?: boolean;
    /**
     * Select the color text
     */
    color?: 'primary'|'secundary'|'tertiary';
    /**
     * Select the font color
     */
    fontColor?: string;
}

export const MyLabel = ( {
    allCaps = false,
    color = 'primary',
    label = 'No Label',
    size = 'normal',
    fontColor = ''
}: Props) => {
    return (
        <span
            className={ `label ${ size } text-${ color }`}
            style={ {
                color: fontColor
            } }
        >
            { allCaps ? label.toUpperCase() : label }
        </span>
    )
}
