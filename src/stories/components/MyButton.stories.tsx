import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MyButton } from '../../components/MyButton';


export default {

    title: 'UI/MyButton',
    component: MyButton,
    argTypes:{
        size:{
            control: 'select'
        },
        backgroundColor:{
            control: 'color'
        },
        colorFont:{
            control: 'color'
        }
    }

} as ComponentMeta<typeof MyButton>;

const Template: ComponentStory<typeof MyButton> = (args) => <MyButton {...args} />;

export const Basic = Template.bind({});
Basic.args={
    label : 'Basic clicks',
};

