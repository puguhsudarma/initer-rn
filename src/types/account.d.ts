import { IError } from './responseApi';

export interface IProfile {
    id: number;
    email: string;
    full_name: string;
}

export interface IAccountState {
    access_token: string;
    isLoggedIn: boolean;
    profile: Partial<IProfile>;
    error: Partial<IError>;
}
