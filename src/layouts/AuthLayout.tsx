import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="tw-w-full tw-h-svh">
      <div className="tw-bg-gray-100 tw-w-[750px] tw-h-full tw-max-w-full tw-flex tw-justify-center tw-items-center tw-p-4">
        <div className="tw-w-[450px] tw-max-w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
