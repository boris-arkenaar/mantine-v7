import React from 'react';
import { tests, render, createContextContainer, screen } from '@mantine/tests';
import { Tabs } from '../Tabs';
import { TabsPanel, TabsPanelProps, TabsPanelStylesNames } from './TabsPanel';

const TestContainer = createContextContainer(TabsPanel, Tabs);

const defaultProps: TabsPanelProps = {
  children: 'test-panel',
  value: 'test',
};

describe('@mantine/core/TabsPanel', () => {
  tests.itSupportsSystemProps<TabsPanelProps, TabsPanelStylesNames>({
    component: TestContainer,
    props: defaultProps,
    refType: HTMLDivElement,
    displayName: '@mantine/core/TabsPanel',
    extend: true,
    styleProps: true,
    children: true,
    selector: '[role="tabpanel"]',
    stylesApiName: 'Tabs',
    stylesApiSelectors: ['panel'],
  });

  tests.itThrowsContextError({
    component: TabsPanel,
    props: defaultProps,
    error: 'Tabs component was not found in the tree',
  });

  it('sets data-orientation attribute based on context value', () => {
    const Vertical = createContextContainer(TabsPanel, Tabs, { orientation: 'vertical' });
    const Horizontal = createContextContainer(TabsPanel, Tabs, { orientation: 'horizontal' });

    const { rerender } = render(<Vertical {...defaultProps} />);
    expect(screen.getByRole('tabpanel')).toHaveAttribute('data-orientation', 'vertical');

    rerender(<Horizontal {...defaultProps} />);
    expect(screen.getByRole('tabpanel')).toHaveAttribute('data-orientation', 'horizontal');
  });

  it('sets data-hidden attribute based on context value if tab is not active', () => {
    const Hidden = createContextContainer(TabsPanel, Tabs, { value: 'test2' });
    const Visible = createContextContainer(TabsPanel, Tabs, { value: 'test' });

    const { rerender } = render(<Hidden {...defaultProps} value="test" />);
    expect(screen.getByRole('tabpanel')).toHaveAttribute('data-hidden', 'true');

    rerender(<Visible {...defaultProps} value="test" />);
    expect(screen.getByRole('tabpanel')).not.toHaveAttribute('data-hidden');
  });
});
