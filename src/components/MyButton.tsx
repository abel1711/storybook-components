
export interface Props{
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

export const MyButton = ({label, colorFont, backgroundColor, size, border = false }:Props) => {
    return (
        <button
        style={{
            color: colorFont,
            backgroundColor,
            fontSize: size,
            borderRadius: border ? '15px' : '',
            border: 'none'
        }}
        >
            { label }
        </button>
    )
}

export default MyButton;