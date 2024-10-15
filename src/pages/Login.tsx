import { useForm } from "react-hook-form";
import GroupItem from "../components/Form/GroupItem";
import { LoginFormData } from "../dataForm/login";
import { ILoginPayload } from "../types/auth/payload";
import { Button } from "primereact/button";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";

const schema = yup
  .object()
  .shape({
    email: yup.string().required("Email là bắt buộc"),
    password: yup.string().required("Mật khẩu là bắt buộc"),
  })
  .required();

const Login = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<ILoginPayload>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const login = (data: ILoginPayload) => {
    console.log(data);
  };

  const onSubmit = async (data: ILoginPayload) => {
    return login(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {LoginFormData?.map((form, index) => (
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
            label="Login"
          />

          <p>
            Chưa có tài khoản ?{" "}
            <Link className="hover:tw-underline" to="/auth/register">
              Đăng ký
            </Link>
          </p>
        </GroupItem>
      ))}
    </form>
  );
};

export default Login;
