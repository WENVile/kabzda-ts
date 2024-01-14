import type { Meta, StoryObj } from '@storybook/react';

import Accordion from './Accordion';

const meta: Meta<typeof Accordion> = {
    component: Accordion,
};




export default meta;

type Story = StoryObj<typeof Accordion>

export const FirstStory: Story = {
    args: {
        title: "ObjName"
    }
}

export const CollapsedAccordion = () => {
    return <div>Hello</div>
}

export const OpenedAccordion = () => {
    return <div>Open</div>
}

export const AccordionDemo = () => {
    return <Accordion title={'Name'} />
}