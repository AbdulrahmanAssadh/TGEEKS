import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
  Typography,
} from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { MdEdit, MdSave } from "react-icons/md";
// import Select from "react-select";

export default function LessonForm({
  isNew,
  title,
  description,
  tags,
  course_id,
  buttonFun,
  stateFun,
  requiredFields,
  setRequiredFields,
}) {
  /////////////////////////////////////////////////////////////////////////////////////
  ///////////////////// States ////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////

  // All courses in the database
  const [allCourses, setAllCourses] = useState([]);

  /////////////////////////////////////////////////////////////////////////////////////
  ///////////////////// Effects ///////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////

  // Bring courses from database
  useEffect(() => {
    // setRequiredFields({
    //   // title: title === "" ? false : true,
    //   // description: description === "" ? false : true,
    //   // tags: tags === "" ? false : true,
    //   title: false,
    //   description: false,
    //   tags: tags === "" ? false : true,
    //   course: true,
    // });

    const sql = "SELECT id, title FROM courses";
    axios
      .get(`${import.meta.env.VITE_API_URL}/courses/${sql}`)
      .then((response) => {
        if (response.status === 200) {
          setAllCourses(response.data);
          if (course_id === -1) {
            stateFun((prevState) => {
              return { ...prevState, course_id: response.data[0].id };
            });
          }
        }
      });
  }, []);

  /////////////////////////////////////////////////////////////////////////////////////
  ///////////////////// Events ////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////

  // const getCourses = () => {
  //   const temp = [];
  //   let dat = {};
  //   allCourses.map((element) => {
  //     temp.push({ value: element.id, label: element.title });
  //   });
  //   return temp;
  // };
  const titleChangeEvent = (e) => {
    stateFun((prevState) => {
      return { ...prevState, title: e.target.value };
    });
    if (e.target.value === "") {
      setRequiredFields({
        ...requiredFields,
        title: false,
      });
    } else {
      setRequiredFields({
        ...requiredFields,
        title: true,
      });
    }
  };

  const descriptionChangeEvent = (e) => {
    stateFun((prevState) => {
      return { ...prevState, description: e.target.value };
    });
    if (e.target.value === "") {
      setRequiredFields({
        ...requiredFields,
        description: false,
      });
    } else {
      setRequiredFields({
        ...requiredFields,
        description: true,
      });
    }
  };

  const tagsChangeEvent = (e) => {
    stateFun((prevState) => {
      return { ...prevState, tags: e.target.value };
    });
    if (e.target.value === "") {
      setRequiredFields({
        ...requiredFields,
        tags: false,
      });
    } else {
      setRequiredFields({
        ...requiredFields,
        tags: true,
      });
    }
  };

  const selectChange = (e) => {
    // setSelectedOption(e);
    stateFun((prevState) => {
      return { ...prevState, course_id: e.target.value };
    });
  };

  return (
    <Card className="w-5/6 shadow shadow-purple-50">
      <CardHeader className="mb-4 grid h-20 place-items-center bg-purple-500">
        {isNew ? (
          <Typography color="white" className="text-center" variant="h4">
            إضافة
          </Typography>
        ) : (
          <Typography color="white" className="text-center" variant="h4">
            تعديل
          </Typography>
        )}
      </CardHeader>
      <CardBody className="flex h-auto w-full flex-col gap-y-4">
        <Input
          required
          color="purple"
          variant="standard"
          className="w-full"
          label="اسم الدرس"
          value={title}
          onChange={titleChangeEvent}
        />
        <Input
          required
          color="purple"
          variant="standard"
          className="w-full p-1 pb-2"
          label="وصف الدرس"
          value={description}
          onChange={descriptionChangeEvent}
        />
        <Input
          required
          color="purple"
          variant="standard"
          className="w-full p-1 pb-2"
          label="كلمات دلالية"
          value={tags}
          onChange={tagsChangeEvent}
        />
        {/* <Select options={getCourses()} onChange={selectChange} /> */}
        <select
          required
          placeholder="اختر كورس"
          className="border-b-2 border-gray-300 py-2.5 outline-0"
          value={course_id}
          onChange={selectChange}
        >
          {allCourses.map((element, index) => (
            <option value={element.id} key={index}>
              {element.title}
            </option>
          ))}
        </select>
      </CardBody>
      <CardFooter className="w-full">
        {isNew ? (
          <Button
            color="purple"
            className="grid place-items-center rounded-full shadow-lg shadow-gray-400"
            fullWidth
            onClick={buttonFun}
          >
            <div className="flex w-1/2 justify-center gap-2">
              <MdSave className="h-7 w-7 text-white" />
              {/* <Typography variant="h5">حفظ</Typography> */}
            </div>
          </Button>
        ) : (
          <Button
            color="purple"
            className="grid place-items-center rounded-full shadow-lg shadow-gray-400"
            fullWidth
            onClick={buttonFun}
          >
            <div className="flex w-1/2 justify-center gap-2">
              <MdEdit className="h-7 w-7 text-white" />
              {/* <Typography variant="h5">حفظ</Typography> */}
            </div>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
