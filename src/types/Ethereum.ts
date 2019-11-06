export interface Ethereum {
  autoRefreshOnNetworkChange?: boolean;
  isMetaMask?: boolean;
  enable: () => Promise<void>;
  on?: (eventName: string, listener: Function) => void;
  removeListener?: (eventName: string, listener: Function) => void;
}
