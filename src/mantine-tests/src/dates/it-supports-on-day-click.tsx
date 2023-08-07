import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

interface Options {
  component: React.ComponentType<any>;
  props: Record<string, any>;
}

export function itSupportsOnDayClick(options: Options, name = 'supports __onDayClick') {
  it(name, async () => {
    const spy = jest.fn();
    const { container } = render(
      <options.component
        {...options.props}
        __onDayClick={(_event: any, date: any) => {
          spy(date);
        }}
      />
    );

    await userEvent.click(container.querySelector('table button')!);
    expect(spy).toHaveBeenCalledWith(expect.any(Date));
  });
}
