import { IForm } from "../types/form-item";

export const LoginFormData: IForm[] = [
  {
    title: "Đăng nhập",
    attributes: [
      {
        prop: "email",
        type: "text",
        label: "Email",
        col: 12,
      },
      {
        prop: "password",
        type: "text",
        label: "Mật khẩu",
        col: 12,
      },
    ],
  },
];
