import { tests, createContextContainer } from '@mantine/tests';
import {
  PopoverDropdown,
  PopoverDropdownProps,
  PopoverDropdownStylesNames,
} from './PopoverDropdown';
import { Popover } from '../Popover';

const defaultProps: PopoverDropdownProps = {};

const TestContainer = createContextContainer(PopoverDropdown, Popover, {
  opened: true,
  withArrow: true,
  withinPortal: false,
});

describe('@mantine/core/PopoverDropdown', () => {
  tests.itSupportsSystemProps<PopoverDropdownProps, PopoverDropdownStylesNames>({
    component: TestContainer,
    props: defaultProps,
    styleProps: true,
    children: true,
    extend: true,
    refType: HTMLDivElement,
    displayName: '@mantine/core/PopoverDropdown',
    stylesApiName: 'Popover',
    stylesApiSelectors: ['dropdown', 'arrow'],
  });

  tests.itThrowsContextError({
    component: PopoverDropdown,
    props: defaultProps,
    error: 'Popover component was not found in the tree',
  });
});