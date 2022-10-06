import { ILoginFields } from '@/app/interfaces/ILoginFields';

export interface IRegisterFields extends ILoginFields {
	email: string;
	password_repeat: string;
}
