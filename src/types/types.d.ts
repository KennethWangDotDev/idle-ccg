import { RootAction } from 'store/actions';

declare module 'typesafe-actions' {
    interface Types {
        RootAction: RootAction;
    }
}
