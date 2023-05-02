import { createContext, useContext } from 'react';
import { observable, action } from 'mobx';

export interface User {
  username: string;
  password: string;
}

export class LocalStore {
  @observable users: User[] = [
    { username: 'Cristi', password: '1111' },
    { username: 'utm', password: '2222' },
    { username: 'web', password: '3333' },
  ];
}

const StoreContext = createContext(new LocalStore());
export const useStore = () => useContext(StoreContext);