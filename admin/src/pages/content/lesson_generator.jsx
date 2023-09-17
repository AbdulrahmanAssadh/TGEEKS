import Header from "@/context/header";
import LazyLoadingSpinner from "@/widgets/animations/lazy_loading_spinner";
import LessonWriter from "@/widgets/editor/lesson_writer";
import LessonForm from "@/widgets/forms/lesson_form";
import HTMLRender from "@/widgets/render/html_render";
import { IconButton } from "@material-tailwind/react";
import axios from "axios";
import { Suspense, useEffect, useState } from "react";
import { MdArrowForward } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import Select from "react-select";

export default function LessonGenerator() {
  /////////////////////////////////////////////////////////////////////////////////////
  ///////////////////// Navigators ////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////

  // receive data from previous page
  const { index } = useParams();

  // to navigate to a new page
  const navigator = useNavigate();

  /////////////////////////////////////////////////////////////////////////////////////
  ///////////////////// States ////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////

  const lessonsInitState = {
    title: "",
    description: "",
    tags: "",
    course_id: -1,
    content: "",
    admin_id: 1,
  };

  // All Content of the fields in the page
  const [lessonData, setLessonData] = useState(lessonsInitState);

  // Required fields state object
  const [requiredFields, setRequiredFields] = useState({
    title: false,
    content: false,
    description: false,
    tags: false,
    course: true,
  });

  /////////////////////////////////////////////////////////////////////////////////////
  ///////////////////// Effects ///////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////

  // Bring data from database
  useEffect(() => {
    if (index > -1) {
      let sql = `SELECT title, description, tags, course_id, content, admin_id FROM lessons WHERE id = ${index}`;
      axios
        .get(`${import.meta.env.VITE_API_URL}/lessons/${sql}`)
        .then((response) => {
          if (response.status === 200) {
            setLessonData(...response.data);
            setRequiredFields({
              title: true,
              content: true,
              description: true,
              tags: true,
              course: true,
            });
          }
        })
        .catch((error) => console.log(error.message));
    }
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

  const saveButtonEvent = (e) => {
    e.preventDefault();
    if (
      requiredFields.title === true &&
      requiredFields.description === true &&
      requiredFields.tags === true &&
      requiredFields.course === true &&
      requiredFields.content === true
    ) {
      // console.log(lessonData);
      axios
        .post(`${import.meta.env.VITE_API_URL}/lesson`, lessonData)
        .then((response) => {
          setLessonData(lessonsInitState);
        })
        .catch((error) => console.log(error.message));
    }
  };

  const editButtonEvent = (e) => {
    e.preventDefault();
    console.log(requiredFields);
    if (
      requiredFields.title === true &&
      requiredFields.description === true &&
      requiredFields.tags === true &&
      requiredFields.course === true &&
      requiredFields.content === true
    ) {
      console.log("done");
      // axios
      //   .put(`${import.meta.env.VITE_API_URL}/lesson/${index}`, lessonData)
      //   .then((response) => {
      //     if (response.status === 200) {
      //       setLessonData(lessonsInitState);
      //       navigator(-1);
      //     }
      //   })
      //   .catch((error) => console.log(error.message));
    }
  };

  /////////////////////////////////////////////////////////////////////////////////////
  ///////////////////// Render ////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////

  return (
    <Suspense fallback={<LazyLoadingSpinner />}>
      <Header
        title={index > -1 ? "تعديل درس" : "إنشاء درس"}
        description={null}
      />
      <div className="flex h-screen w-screen items-center justify-evenly bg-blue-gray-900">
        <div className="my-16 flex w-1/4 flex-col items-center justify-start">
          <IconButton
            color="purple"
            ripple={true}
            className="mb-16 mr-8 w-1/6 self-start border-0 shadow-none hover:shadow-none"
            onClick={() => navigator(-1)}
          >
            <MdArrowForward className="h-6 w-6" />
          </IconButton>
          <LessonForm
            isNew={index > -1 ? false : true}
            buttonFun={index > -1 ? editButtonEvent : saveButtonEvent}
            title={lessonData.title}
            description={lessonData.description}
            tags={lessonData.tags}
            course_id={lessonData.course_id}
            stateFun={setLessonData}
            requiredFields={requiredFields}
            setRequiredFields={setRequiredFields}
          />
        </div>
        <div className="h-5/6 w-2/4 shadow shadow-purple-50">
          <LessonWriter
            data={lessonData.content}
            setData={setLessonData}
            setFieldsState={setRequiredFields}
          />
        </div>
        <div className="flex h-full w-1/4 items-center justify-center">
          <div className="word-break h-5/6 w-5/6 overflow-y-auto rounded-md bg-white p-2 text-black shadow shadow-purple-50">
            <HTMLRender data={lessonData.content} />
          </div>
        </div>
      </div>
    </Suspense>
  );
}
