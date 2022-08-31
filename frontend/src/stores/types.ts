export interface Store<T> {
  subscribe: (run: (value: T) => any, invalidate?: any) => any;
}

export interface Props_StoreSelected extends Store<string[]> {
  add: (x: string) => void;
  remove: (x: string) => void;
}
