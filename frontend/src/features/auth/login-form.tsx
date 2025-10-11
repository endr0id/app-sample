import Button from "../../components/ui/button/Button";
import Form from "../../components/ui/form/Form";
import Input from "../../components/ui/form/input/Input";

const LoginForm = () => {
  return (
    <Form>
      <Input type="email" placeholder="sample@example.com" />
      <Input type="password" />
      <Button>Log in</Button>
    </Form>
  );
};

export default LoginForm;
