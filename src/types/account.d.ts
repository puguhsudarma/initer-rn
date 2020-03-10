import { IError } from './responseApi';

export interface IProfile {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    mobile: string;
}

export interface IAccessToken {
    token_type: 'Bearer';
    expires_in: number;
    access_token: string;
    refresh_token: string;
}

export interface IAccountState extends IAccessToken {
    isLoggedIn: boolean;
    profile: IProfile;
    error: Partial<IError>;
}
