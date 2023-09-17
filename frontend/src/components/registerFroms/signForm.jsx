import axios from "axios";
import tw from 'twin.macro';
import { useRef, useState } from "react";
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
  ImageBox,
    Box,
} from "../../styles/register_components";


import PhotoPlus from '../../assets/img/photo-plus.png'

export default function SignForm({ fun }) {
  let date = new Date();
const DeleteButton = tw(Button)`!bg-red-600 rounded-t-none rounded-b-lg`

  const [data, setData] = useState({
    real_name: "",
    username: "",
    email: "",
    password: "",
    birthday: "",
    image: null,
    init_date: date.toLocaleDateString(),
  });
  const [img, setImg] = useState(null);
  const [checkedPassword, setCheckedPassword] = useState(false);

  const imagePickerRef = useRef();

  const deleteButtonEvent = (e) => {
    e.preventDefault();
    setImg(null)
    setData({...data, image: null})
  }

  const signSubmitEventHandler = (e) => {
    e.preventDefault();
    if (checkedPassword) {
      // console.log(data);
      axios
        .post(`${process.env.REACT_APP_API_URL}/account`, data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          if (response.status === 201) {
            // axios
            //     .post(`${process.env.REACT_APP_API_URL}/account/login`, {email: data.email, password: data.password})
            //     .then((response) => {
            //       if (response.status === 200) {
            //         setAuth(...response.data);
            //       } else {
            //         console.log("error");
            //       }
            //     })
            //     .catch((error) => console.log(error.message));
            //
            // navigate(-1); // Back to the previous page
            alert("Done");
          } else {
            console.log("error");
          }
        })
        .catch((error) => console.log(error.message));
    }
  };

  const checkPassword = (e) => {
    setCheckedPassword(data.password === e.target.value);
  };

  const uploadImageEventHandler = (e) => {
    if (e.target.files && e.target.files[0]) {
      setData({ ...data, image: e.target.files[0] });
      setImg(URL.createObjectURL(e.target.files[0]));
    }
    console.log(data);
  };

  document.title = "إنشاء حساب";

  return (
    <Container>
      <Card>
        <Head1>إنشاء حساب</Head1>
        <Form>
          <hr />
          <Row tw={"mb-2"}>
            <Label htmlFor="image">الصورة الشخصية</Label>
            <Box>
            <ImageBox
              src={img || PhotoPlus}
              onClick={() => imagePickerRef.current.click()}
            />
            <DeleteButton onClick={deleteButtonEvent}>حذف</DeleteButton>
            </Box>
            <input
              type="file"
              hidden={true}
              ref={imagePickerRef}
              accept="image/*"
              onChange={uploadImageEventHandler}
            />
          </Row>
          <Row tw={"mb-2"}>
            <Label htmlFor="name">الاسم</Label>
            <Input
              id="name"
              required
              onChange={(e) => setData({ ...data, real_name: e.target.value })}
              value={data.real_name}
              type="text"
            />
          </Row>
          <Row tw={"mb-2"}>
            <Label htmlFor="username">اسم المستخدم</Label>
            <Input
              id="username"
              required
              onChange={(e) => setData({ ...data, username: e.target.value })}
              value={data.username}
              type="text"
            />
          </Row>
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
            <Label htmlFor="email">كلمة المرور</Label>
            <Input
              id="password"
              required
              onChange={(e) => setData({ ...data, password: e.target.value })}
              value={data.password}
              type="password"
            />
          </Row>
          <Row tw={"mb-2"}>
            <Label htmlFor="co-pass">تأكيد كلمة المرور</Label>
            <Input
              id="co-pass"
              required
              onChange={checkPassword}
              type="password"
            />
          </Row>
          <Row tw={"mb-2"}>
            <Label htmlFor="birthday">تاريخ الميلاد</Label>
            <Input
              id="birthday"
              required
              onChange={(e) => setData({ ...data, birthday: e.target.value })}
              value={data.birthday}
              type="date"
            />
          </Row>
          <hr />
          <Row tw={"mt-12"}>
            <Button onClick={signSubmitEventHandler}>
              إنشاء
            </Button>
          </Row>
        </Form>
        <Text>
          {" "}
          لديك حساب بالفعل؟{" "}
          <LinkButton onClick={() => fun(true)}>تسجيل الدخول</LinkButton>
        </Text>
      </Card>
    </Container>
  );
}
