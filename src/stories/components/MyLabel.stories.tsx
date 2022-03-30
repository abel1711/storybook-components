import { MyLabel } from '../../components/MyLabel';
import { ComponentMeta, ComponentStory } from '@storybook/react';


export default {

    title: 'UI/MyLabel',
    component: MyLabel,
    argTypes:{
        size:{
            control: 'select'
        },
        color:{
            control: 'select'
        },
        fontColor:{
            control: 'color'
        }
    }

} as ComponentMeta<typeof MyLabel>;

const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel {...args} />;

export const Basic = Template.bind({});
Basic.args={
    color: 'primary',
    label : 'Basic',
    size: 'normal'
};

export const AllCaps = Template.bind({});
AllCaps.args={
    allCaps: true,
    size:'normal'
};

export const Secundary = Template.bind({});
Secundary.args={
    color: 'secundary',
    size: 'normal'
};

export const Tertiary = Template.bind({});
Tertiary.args={
    color: 'tertiary',
    size: 'normal'
};

export const CustomFontColor = Template.bind({});
CustomFontColor.args={
    fontColor: '#f3005d',
    size: 'h1',
};
