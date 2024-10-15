import { useForm } from "react-hook-form";
import GroupItem from "../components/Form/GroupItem";
import { IRegisterPayload } from "../types/auth/payload";
import { Button } from "primereact/button";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterForm } from "../dataForm/register";
import { Link } from "react-router-dom";

const schema = yup
  .object()
  .shape({
    email: yup.string().email("Sai format email").required("Email là bắt buộc"),
    password: yup.string().required("Mật khẩu là bắt buộc"),
    company_name: yup.string().required("Tên doanh nghiệp là bắt buộc"),
    phone_number: yup
      .string()
      .matches(/^[0-9]+$/, "Số định dạng sai")
      .required("Số định dạng sai"),
    password_confirmation: yup.string().required("Mật không là bắt buộc"),
  })
  .required();

const Register = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<IRegisterPayload>({
    defaultValues: {
      email: "",
      password: "",
      company_name: "",
      phone_number: "",
      password_confirmation: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: IRegisterPayload) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {RegisterForm?.map((form, index) => (
        <GroupItem
          key={index}
          attributes={form.attributes}
          title={form.title}
          control={control}
          errors={errors}
        >
          <Button
            disabled={false}
            loading={false}
            className="tw-w-full tw-text-center"
            label="Sign Up"
          />

          <p>
            Đã có tài khoản ?{" "}
            <Link className="hover:tw-underline" to="/auth/login">
              Đăng nhập
            </Link>
          </p>
        </GroupItem>
      ))}
    </form>
  );
};

export default Register;
