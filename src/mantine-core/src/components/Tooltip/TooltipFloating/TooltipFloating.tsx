import React, { cloneElement } from 'react';
import { useMergedRef } from '@mantine/hooks';
import {
  Box,
  factory,
  getDefaultZIndex,
  isElement,
  useComponentDefaultProps,
  useStylesApi,
} from '../../../core';
import { OptionalPortal } from '../../Portal';
import {
  TooltipBaseProps,
  TooltipCssVariables,
  TooltipStylesNames,
  TooltipStylesParams,
} from '../Tooltip.types';
import classes from '../Tooltip.module.css';
import { useFloatingTooltip } from './use-floating-tooltip';

export interface TooltipFloatingProps extends TooltipBaseProps {
  /** Offset from mouse in px, `10` by default */
  offset?: number;
}

export interface TooltipFloatingFactory {
  props: TooltipFloatingProps;
  ref: HTMLDivElement;
  stylesNames: TooltipStylesNames;
  vars: TooltipCssVariables;
  stylesParams: TooltipStylesParams;
}

const defaultProps: Partial<TooltipFloatingProps> = {
  refProp: 'ref',
  withinPortal: true,
  offset: 10,
  position: 'right',
  zIndex: getDefaultZIndex('popover'),
};

export const TooltipFloating = factory<TooltipFloatingFactory>((props, ref) => {
  const {
    children,
    refProp,
    withinPortal,
    style,
    className,
    classNames,
    styles,
    unstyled,
    radius,
    color,
    label,
    offset,
    position,
    multiline,
    zIndex,
    disabled,
    variant,
    ...others
  } = useComponentDefaultProps('TooltipFloating', defaultProps, props);

  const getStyles = useStylesApi({
    name: 'TooltipFloating',
    className,
    style,
    classes,
    classNames,
    styles,
    unstyled,
    rootSelector: 'tooltip',
  });

  const { handleMouseMove, x, y, opened, boundaryRef, floating, setOpened } = useFloatingTooltip({
    offset: offset!,
    position: position!,
  });

  if (!isElement(children)) {
    throw new Error(
      '[@mantine/core] Tooltip.Floating component children should be an element or a component that accepts ref, fragments, strings, numbers and other primitive values are not supported'
    );
  }

  const targetRef = useMergedRef(boundaryRef, (children as any).ref, ref);

  const onMouseEnter = (event: React.MouseEvent<unknown, MouseEvent>) => {
    children.props.onMouseEnter?.(event);
    handleMouseMove(event);
    setOpened(true);
  };

  const onMouseLeave = (event: React.MouseEvent<unknown, MouseEvent>) => {
    children.props.onMouseLeave?.(event);
    setOpened(false);
  };

  return (
    <>
      <OptionalPortal withinPortal={withinPortal}>
        <Box
          {...others}
          {...getStyles('tooltip')}
          ref={floating}
          style={{
            ...style,
            zIndex,
            display: !disabled && opened ? 'block' : 'none',
            top: (y && Math.round(y)) ?? '',
            left: (x && Math.round(x)) ?? '',
          }}
        >
          {label}
        </Box>
      </OptionalPortal>

      {cloneElement(children, {
        ...children.props,
        [refProp!]: targetRef,
        onMouseEnter,
        onMouseLeave,
      })}
    </>
  );
});

TooltipFloating.displayName = '@mantine/core/TooltipFloating';