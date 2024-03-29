export interface ISignUpData {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface ILoginData {
  email: string;
  password: string;
  image?: string;
}

export interface ILoginResponseData {
  id: string;
  fullName: string;
  email: string;
  activated: boolean;
  langKey: "en" | "np";
  imageUrl: string | null;
  userType: string;
  isFirstLogin: boolean;
  hasUserChangedPassword: null | boolean;
  bank?: {
    id: number;
    bankName: string;
    email: string;
    contactPersonName: string;
    contactPersonPhoneNumber: string;
    bankIdentifier: null | string;
  };
}

export interface ILoginResponse {
  accessToken: string;
  message: string;
  type: string;
  refreshToken: string;
  data: ILoginResponseData;
}
