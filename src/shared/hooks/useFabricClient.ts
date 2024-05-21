import { createContext, useContext } from 'react';
import { ExtensionClient } from '@trident/extension-client';

export const FabricClientContext = createContext<ExtensionClient>(undefined);
export const useFabricClient = (): ExtensionClient => useContext(FabricClientContext);


