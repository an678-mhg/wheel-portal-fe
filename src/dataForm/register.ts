import { IForm } from "../types/form-item";

export const RegisterForm: IForm[] = [
  {
    title: "Sign Up",
    attributes: [
      {
        prop: "company_name",
        type: "text",
        label: "Tên doanh nghiệp",
        col: 12,
      },
      {
        prop: "phone_number",
        type: "text",
        label: "Số điện thoại",
        col: 12,
      },
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
      {
        prop: "password_confirmation",
        type: "text",
        label: "Xác nhận mật khẩu",
        col: 12,
      },
    ],
  },
];
