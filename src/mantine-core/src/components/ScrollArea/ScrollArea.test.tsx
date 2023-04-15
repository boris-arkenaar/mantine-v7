import { tests } from '@mantine/tests';
import { ScrollArea, ScrollAreaProps, ScrollAreaStylesNames } from './ScrollArea';

const defaultProps: ScrollAreaProps = {
  type: 'always',
  children: 'test',
};

describe('@mantine/core/ScrollArea', () => {
  tests.itSupportsSystemProps<ScrollAreaProps, ScrollAreaStylesNames>({
    component: ScrollArea,
    props: defaultProps,
    polymorphic: true,
    styleProps: true,
    children: true,
    extend: true,
    variant: true,
    size: true,
    refType: HTMLDivElement,
    displayName: '@mantine/core/ScrollArea',
    stylesApiSelectors: ['root', 'viewport'],
  });
});

describe('@mantine/core/ScrollAreaAutosize', () => {
  tests.itSupportsSystemProps<ScrollAreaProps, ScrollAreaStylesNames>({
    component: ScrollArea.Autosize,
    props: defaultProps,
    polymorphic: true,
    styleProps: true,
    children: true,
    extend: true,
    refType: HTMLDivElement,
    displayName: '@mantine/core/ScrollAreaAutosize',
  });
});