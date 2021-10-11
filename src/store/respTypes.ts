import { ActionPayload } from './index'


export interface RespData<T = {}> {
    errno: number;
    data: T;
    message?: string;
    payload?: ActionPayload;
}
  export interface ListData<T> {
    list: T[];
    count: number;
}

export type RespListData<T> = RespData<ListData<T>>