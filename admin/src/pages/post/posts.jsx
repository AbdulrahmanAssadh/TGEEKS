// import { useState, useEffect, useReducer } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  IconButton,
  Input,
} from "@material-tailwind/react";
import { MdAdd } from "react-icons/md";
// import axios from "axios";
// import Header from "@/context/header";
// import {
//   filter,
//   insertIntoState,
//   deletefromState,
//   updateContentOfTheState,
//   loadCourses,
// } from "@/workers/stateWorkers";
// import { useNavigate } from "react-router-dom";
// import DeleteLesson from "@/widgets/Dialogs/delete_lesson";
// import LessonsTable from "@/widgets/tables/lessons_table";

// const initState = {
//   index: -1,
//   allLessons: [],
//   allCourses: [],
//   isFiltered: false,
//   // filterID: -1,
//   filteredLessons: null,
// };

// const lessonsReducer = (state, action) => {
//   switch (action.type) {
//     case "load":
//       return {
//         ...state,
//         allLessons: action.data,
//       };
//     // case "index":
//     //   return changeStateIndex(action.id, state);
//     // case "showDataForm":
//     //   return setShowDataFormState(action.showForm, state);
//     // case "showDeleteForm":
//     //   return setShowDeleteFormState(action.showForm, state);
//     case "insert":
//       return insertIntoState(action.data, state);
//     case "update":
//       return updateContentOfTheState(action.data, state);
//     case "delete":
//       return deletefromState(action.data, state);
//     case "filter":
//       return filter(action.id, state);
//     case "courses":
//       return {
//         ...state,
//         allCourses: action.data,
//       };
//     case "prepare":
//       return loadCourses(state);
//   }
// };

export default function Posts() {
  // const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  // const [lessonsState, dispatchLessons] = useReducer(lessonsReducer, initState);
  // const [index, setIndex] = useState(-1);
  // const navigator = useNavigate();

  // useEffect(() => {
  //   let sql = "SELECT id, title, admin_id, course_id, init_date FROM lessons";
  //   axios
  //     .get(`${import.meta.env.VITE_API_URL}/lessons/${sql}`)
  //     .then((response) => {
  //       if (response.status === 200) {
  //         dispatchLessons({ type: "load", data: response.data });
  //         console.log("done");
  //       }
  //     })
  //     .catch((error) => console.log(error.message));
  //   sql = "SELECT id, title FROM courses WHERE deleted = false";
  //   axios
  //     .get(`${import.meta.env.VITE_API_URL}/courses/${sql}`)
  //     .then((response) => {
  //       if (response.status === 200) {
  //         dispatchLessons({ type: "courses", data: response.data });
  //       }
  //     })
  //     .catch((error) => console.log(error.message));
  // }, []);

  // const editButtonEvent = (e, id) => {
  //   e.preventDefault();
  //   navigator(`/content/lesson/lesson_gen/${id}`);
  // };

  // const insertButtonEvent = (e) => {
  //   e.preventDefault();
  //   navigator(`/content/lesson/lesson_gen/-1`);
  // };

  // const selectCourseChangeEvent = (e) => {
  //   e.preventDefault();
  //   // console.log(e.target.value);
  //   dispatchLessons({ type: "filter", id: e.target.value });
  // };

  // const deleteButtonEvent = (e, id) => {
  //   e.preventDefault();
  //   setIndex(id);
  //   setShowDeleteDialog(true);
  // };

  return (
    <>
      {/* <Header title={"المنشورات"} desc={null} /> */}
      <div className={"mt-12 mb-8 flex flex-col gap-12"}>
        <Card>
          <CardHeader
            variant="gradient"
            color="blue"
            className="sticky top-2 z-0 mb-8 flex items-center justify-between px-6 py-6"
          >
            <div className="w-1/2">
              <Typography variant="h4" color="white">
                جدول المنشورات
              </Typography>
            </div>
            <div className="flex w-1/2 items-center justify-end">
              <select
                // defaultValue={lessonsState.filterID}
                className={
                  "w-2/5 rounded-lg border-b-2 py-2 px-1 text-black outline-none"
                }
                // onChange={selectCourseChangeEvent}
              >
                <option value={-1} key={-1}>
                  الكل
                </option>
                {/* {lessonsState.allCourses.map((course, index) => (
                  <option value={course.id} key={index}>
                    {course.title}
                  </option>
                ))} */}
              </select>
              <IconButton
                // onClick={insertButtonEvent}
                className="mr-6 rounded-full"
                color="white"
                ripple={true}
              >
                <MdAdd className="h-8 w-8 font-bold text-green-500" />
              </IconButton>
            </div>
          </CardHeader>
          <CardBody className="px-0 pt-0 pb-2">
            <table className="w-full min-w-[640px] table-auto">
              <thead key={"table_header"}>
                <tr key={"table_head"}>
                  {["اسم المنشور", "التاريخ", "الكاتب", ""].map((el, i) => (
                    <th
                      key={`${el}-${i}`}
                      className="border-b border-blue-gray-50 py-3 px-5 text-right"
                    >
                      <Typography
                        variant="small"
                        className="text-[14px] font-bold text-blue-gray-400"
                      >
                        {el}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {/* <LessonsTable
                  allData={
                    lessonsState.isFiltered
                      ? lessonsState.filteredLessons
                      : lessonsState.allLessons
                  }
                  deleteFun={deleteButtonEvent}
                  editFun={editButtonEvent}
                /> */}
              </tbody>
            </table>
          </CardBody>
        </Card>
      </div>
      {/* <DeleteLesson
        id={index}
        setID={setIndex}
        show={showDeleteDialog}
        showFun={setShowDeleteDialog}
      /> */}
    </>
  );
}
