import axios from 'axios';
import { IProfile } from './account';
import { IState } from './state';

export interface IDependencies {
    getState: () => IState;
    httpClient: typeof axios;
}

export interface IError {
    error: any;
    type: string;
}

export interface IErrorValidation {
    field: string;
    constraints: string;
}

export interface IFailedResponse {
    message: string;
    error_code: string;
    error_details: IErrorValidation[] | string;
}

export interface ISuccessLoginData {
    access_token: string;
    profile: IProfile;
}

export interface ISuccessLoginResponse {
    data: ISuccessLoginData;
    message: string;
}

export interface ISuccessGetProfileResponse {
    data: IProfile;
    message: string;
}
