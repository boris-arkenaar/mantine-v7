import './styles/css-reset.css';
import './styles/global-styles.css';

import React from 'react';
import { MantineCssVariables, defaultCssVariablesResolver } from './MantineCssVariables';
import { MantineThemeProvider } from './MantineThemeProvider';
import type { MantineColorScheme, MantineTheme, MantineThemeOverride } from './theme.types';
import { localStorageColorSchemeManager, MantineColorSchemeManager } from './color-scheme-managers';
import { MantineContext } from './Mantine.context';
import { useProviderColorScheme } from './use-mantine-color-scheme';
import { useRespectReduceMotion } from './use-respect-reduce-motion';
import { ConvertCSSVariablesInput } from './convert-css-variables';

export interface MantineProviderProps {
  /** Theme override object */
  theme?: MantineThemeOverride;

  /** Used to retrieve/set color scheme value in external storage, by default uses `window.localStorage` */
  colorSchemeManager?: MantineColorSchemeManager;

  /** Default value used when colorSchemeManager cannot retrieve value from external storage, `auto` by default */
  defaultColorScheme?: MantineColorScheme;

  /** CSS selector to which css variables should be added, `:root` by default */
  cssVariablesSelector?: string;

  /** Determines whether theme css variables should be added to given `cssVariablesSelector`, `true` by default */
  withCssVariables?: boolean;

  /** Function ro resolve root element to set `data-mantine-color-scheme` attribute, must return undefined on server, `() => document.documentElement` by default */
  getRootElement?: () => HTMLElement | undefined;

  /** A prefix for components static classNames (for example {selector}-Text-root), `mantine` by default */
  classNamesPrefix?: string;

  /** nonce attribute added to all generated `<style />` tags */
  styleNonce?: string;

  /** Function to generate CSS variables styles based on theme object */
  cssVariablesResolver?(theme: MantineTheme): ConvertCSSVariablesInput;

  /** Your application */
  children?: React.ReactNode;
}

export function MantineProvider({
  theme,
  children,
  styleNonce,
  withCssVariables = true,
  cssVariablesSelector = ':root',
  classNamesPrefix = 'mantine',
  colorSchemeManager = localStorageColorSchemeManager(),
  defaultColorScheme = 'auto',
  getRootElement = () => document.documentElement,
  cssVariablesResolver = defaultCssVariablesResolver,
}: MantineProviderProps) {
  const { colorScheme, setColorScheme, clearColorScheme } = useProviderColorScheme({
    defaultColorScheme,
    manager: colorSchemeManager,
    getRootElement,
  });

  useRespectReduceMotion({
    respectReducedMotion: theme?.respectReducedMotion || false,
    getRootElement,
  });

  return (
    <MantineContext.Provider
      value={{
        colorSchemeManager,
        colorScheme,
        setColorScheme,
        clearColorScheme,
        getRootElement,
        classNamesPrefix,
        styleNonce,
        cssVariablesResolver,
      }}
    >
      <MantineThemeProvider theme={theme}>
        {withCssVariables && <MantineCssVariables cssVariablesSelector={cssVariablesSelector} />}
        {children}
      </MantineThemeProvider>
    </MantineContext.Provider>
  );
}

MantineProvider.displayName = '@mantine/core/MantineProvider';
