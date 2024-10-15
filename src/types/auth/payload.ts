export interface ILoginPayload {
  email: string;
  password: string;
}

export interface IRegisterPayload {
  email: string;
  password: string;
  phone_number: string;
  company_name: string;
  password_confirmation: string;
}
