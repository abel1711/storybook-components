/// <reference types="react" />
export interface Props {
    /**
     * Write the label
     */
    label: string;
    /**
     * select de color font
     */
    colorFont?: string;
    /**
     * select de background color
     */
    backgroundColor?: string;
    /**
     * Select the size font
     */
    size?: '15px' | '20px' | '25px' | '30px';
    /**
     * selec border radious
     */
    border?: boolean;
}
export declare const MyButton: ({ label, colorFont, backgroundColor, size, border }: Props) => JSX.Element;
