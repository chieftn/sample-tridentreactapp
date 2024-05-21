import { createContext, useContext } from 'react';
import { ExtensionClientAPI } from '@trident/extension-client';

export const FabricClientContext = createContext<ExtensionClientAPI>(undefined);
export const useFabricClient = (): ExtensionClientAPI => useContext(FabricClientContext);


