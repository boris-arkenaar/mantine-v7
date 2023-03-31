import React from 'react';
import { screen } from '@testing-library/react';
import { tests, render } from '@mantine/tests';
import { Box, BoxProps } from './Box';

const defaultProps: BoxProps = {};

describe('@mantine/core/Box', () => {
  tests.itSupportsSystemProps<BoxProps>({
    component: Box,
    props: defaultProps,
    polymorphic: true,
    styleProps: true,
    children: true,
    refType: HTMLDivElement,
    displayName: '@mantine/core/Box',
    providerName: null,
  });

  it('sets data-variant attribute based on variant prop', () => {
    render(<Box variant="test">test</Box>);
    expect(screen.getByText('test')).toHaveAttribute('data-variant', 'test');
  });

  it('supports mod prop', () => {
    const { rerender } = render(<Box mod={{ 'data-test': 'test' }}>test</Box>);
    expect(screen.getByText('test')).toHaveAttribute('data-test', 'test');

    rerender(
      <Box
        mod={[
          { 'data-test': 'test' },
          { 'data-test-2': 'test-2' },
          { 'data-test-2': false, 'data-test-3': null },
        ]}
      >
        test
      </Box>
    );
    expect(screen.getByText('test')).toHaveAttribute('data-test', 'test');
    expect(screen.getByText('test')).toHaveAttribute('data-test-2', 'test-2');
    expect(screen.getByText('test')).not.toHaveAttribute('data-test-3');
  });
});
