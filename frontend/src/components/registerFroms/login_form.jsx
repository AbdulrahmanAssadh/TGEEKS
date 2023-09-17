import { useState, useContext } from "react";
import AuthContext from "context/auth_provider";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Head1,
  Card,
  Text,
  Label,
  LinkButton,
  Input,
  Button,
  Row,
  Form,
} from "../../styles/register_components";

export default function LoginForm({ fun }) {
  const { setAuth } = useContext(AuthContext);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  let navigate = useNavigate();

  const loginFormSubmitEventHandler = (e) => {
    e.preventDefault();

    console.log("befor request");
    axios
      .post(`${process.env.REACT_APP_API_URL}/account/login`, data)
      .then(response => {
        if (response.status === 200) {
          console.log("login success");
          setAuth(response.data);
        }
      })
      .catch(error => console.log(error.message));
    console.log("after login");
    navigate(-1); // Back to the previous page
  };

  document.title = "تسجيل الدخول";

  return (
    <Container>
      <Card>
        <Head1>تسجيل الدخول</Head1>
        <Form >
          <hr />
          <Row tw={"mb-2"}>
            <Label htmlFor="email">البريد الالكتروني</Label>
            <Input
              id="email"
              required
              onChange={(e) => setData({ ...data, email: e.target.value })}
              value={data.email}
              type="email"
            />
          </Row>
          <Row tw={"mb-2"}>
            <Label htmlFor="password">كلمة المرور</Label>
            <Input
              id="password"
              required
              onChange={(e) => setData({ ...data, password: e.target.value })}
              value={data.password}
              type="password"
            />
          </Row>
          <Row>
            <LinkButton tw={"text-right"}>
              نسيت كلمة المرور؟
            </LinkButton>
          </Row>
          <Row tw={"mt-12"}>
            <Button onClick={loginFormSubmitEventHandler}>تسجيل</Button>
          </Row>
        </Form>
        <hr />
        <Text>
          {" "}
          ليس لديك حساب؟{" "}
          <LinkButton onClick={() => fun(false)}>
            إنشاء حساب
          </LinkButton>
        </Text>
      </Card>
    </Container>
  );
}
