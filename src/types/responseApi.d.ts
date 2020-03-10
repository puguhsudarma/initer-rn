import axios from 'axios';
import { Subject } from 'rxjs';
import { IState } from './state';
import { IProfile, IAccessToken } from './account';

export interface IDependencies<T = any> {
    getState: () => IState;
    httpClient: typeof axios;
    action: T;
    cancelled$: Subject<void>;
}

export interface IError {
    error: any;
    type: string;
}

export interface IPhoto {
    uri: string;
    name: string;
    type: 'image/jpeg';
}

export interface ILink {
    first: string;
    last: string;
    prev: null | string;
    next: null | string;
}

export interface IMeta {
    current_page: number;
    from: number;
    last_page: number;
    path: string;
    per_page: number;
    to: number;
    total: number;
}

export interface IFailedResponse {
    message: string;
    errors?: {
        [field: string]: string[];
    };
}

export interface ISuccessLoginResponse extends IAccessToken {}
