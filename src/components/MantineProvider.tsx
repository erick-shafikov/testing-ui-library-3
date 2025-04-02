import '@mantine/core/styles.css';

import { MantineProvider as MantineProviderCore } from '@mantine/core';
import type { MantineProviderProps as MantineProviderCoreProps } from '@mantine/core';


type MantineProviderProps = MantineProviderCoreProps

export  function MantineProvider({ children } : MantineProviderProps) {
  return <MantineProviderCore>{children}</MantineProviderCore>;
}