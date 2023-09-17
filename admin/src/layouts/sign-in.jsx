import { useState, Suspense, lazy } from "react";
import { NavigationType, useNavigate } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
// import { LazyLoadImage } from "react-lazy-load-image-component";
import BackgroundImage from "@/assets/img/login_background.png";
import "react-lazy-load-image-component/src/effects/blur.css";
import Header from "@/context/header";
import LazyLoadingSpinner from "@/widgets/animations/lazy_loading_spinner.jsx";
import axios from "axios";
import { useMaterialTailwindController, login } from "@/context/user";
import GetColor from "@/workers/get_color";

export function SignIn() {
  const [controller, dispatch] = useMaterialTailwindController();
  const { account, sidenavColor } = controller;
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: null,
    password: null,
  });
  const [requiredFields, setRequiredFields] = useState({
    email: false,
    password: false,
  });

  function loginProcess() {
    if (requiredFields.email === true && requiredFields.password === true) {
      axios
        .post(`${import.meta.env.VITE_API_URL}/admin/login`, data)
        .then((response) => {
          if (response.status === 201) {
            login(dispatch, response.data[0]);
            navigate("/dashboard/home", NavigationType.Replace);
          }
        })
        .catch((error) => console.error(error.message));
    }
  }

  // When user clicks on Sign In button
  function signInButtonEvent(e) {
    e.preventDefault();
    loginProcess();
  }

  function emailInputChange(e) {
    e.preventDefault();
    setData({ ...data, email: e.target.value });
    if (e.target.value === "") {
      setRequiredFields({
        ...requiredFields,
        email: false,
      });
    } else {
      setRequiredFields({
        ...requiredFields,
        email: true,
      });
    }
  }

  function passwordInputChange(e) {
    e.preventDefault();
    setData({ ...data, password: e.target.value });
    if (e.target.value === "") {
      setRequiredFields({
        ...requiredFields,
        password: false,
      });
    } else {
      setRequiredFields({
        ...requiredFields,
        password: true,
      });
    }
  }

  function checkBoxChange(e) {
    if (e.target.value === true) {
      console.log("Check");
    }
  }

  return (
    <Suspense fallback={<LazyLoadingSpinner />}>
      <Header title={"T_GEEKS Admin Panel"} desc={null} />
      <img
        className="absolute inset-0 z-0 h-full w-full object-cover"
        src={BackgroundImage}
        effect="blur"
      />
      <div className="w-ful absolute inset-0 z-0 h-full" />
      <div className="container mx-auto p-4">
        <Card className="absolute top-2/4 left-3/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4">
          <CardHeader
            variant="gradient"
            color={GetColor(sidenavColor)}
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white" className={"font-bold"}>
              TGeeks
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input
              type="email"
              label="البريد الألكتروني"
              size="lg"
              variant="standard"
              onChange={emailInputChange}
              color={GetColor(sidenavColor)}
              value={data.email}
            />
            <Input
              type="password"
              label="كلمة المرور"
              size="lg"
              variant="standard"
              onChange={passwordInputChange}
              color={GetColor(sidenavColor)}
              value={data.password}
            />
            <div className="-ml-2.5 -mr-2.5">
              <Checkbox
                disabled={!requiredFields.email || !requiredFields.password}
                label="تذكرني"
                color={GetColor(sidenavColor)}
                onClick={checkBoxChange}
                // onChange={checkBoxChange}
              />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              variant="gradient"
              color={GetColor(sidenavColor)}
              fullWidth
              onClick={signInButtonEvent}
            >
              تسجيل الدخول
            </Button>
          </CardFooter>
        </Card>
      </div>
    </Suspense>
  );
}

export default SignIn;
