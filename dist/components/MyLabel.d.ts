/// <reference types="react" />
import './myLabel.css';
export interface Props {
    /**
     * Label to show!
     */
    label: string;
    /**
     * Select the size!
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Capitalize all
     */
    allCaps?: boolean;
    /**
     * Select the color text
     */
    color?: 'primary' | 'secundary' | 'tertiary';
    /**
     * Select the font color
     */
    fontColor?: string;
    /**
     * Select the background color
     */
    backgroundColor?: string;
}
export declare const MyLabel: ({ allCaps, color, label, size, fontColor, backgroundColor }: Props) => JSX.Element;
