import AuthLayout from "../components/Layouts/AuthLayout";
import RegisterForm from "../components/fragments/registerform";
const RegisterPage = () => {
  return (
    <AuthLayout title="Register">
      <RegisterForm />
    </AuthLayout>
  );
};

export default RegisterPage;
