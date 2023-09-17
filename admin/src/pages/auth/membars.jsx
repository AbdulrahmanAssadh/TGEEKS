// import CourseForm from "@/widgets/forms/course_form";
// import CoursesTable from "@/widgets/tables/courses_table";
// import { useState, useEffect, useReducer } from "react";

import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  IconButton,
  Input,
} from "@material-tailwind/react";
import { MdAdd, MdSearch } from "react-icons/md";
// import DeleteCourse from "@/widgets/Dialogs/delete_course";
import axios from "axios";
import Header from "@/context/header";
import {
  searchStateByName,
  insertIntoState,
  deletefromState,
  updateContentOfTheState,
} from "@/workers/stateWorkers";

const initState = {
  index: -1,
  showFormDialog: false,
  showDeleteDialog: false,
  allData: [],
  searchData: [],
};

const coursesReducer = (state, action) => {
  switch (action.type) {
    case "load":
      return {
        allData: action.data,
        searchData: [],
      };
    // case "index":
    //   return changeStateIndex(action.id, state);
    // case "showDataForm":
    //   return setShowDataFormState(action.showForm, state);
    // case "showDeleteForm":
    //   return setShowDeleteFormState(action.showForm, state);
    case "insert":
      return insertIntoState(action.data, state);
    case "update":
      return updateContentOfTheState(action.data, state);
    case "delete":
      return deletefromState(action.data, state);
    case "search":
      return searchStateByName(action.text, state);
  }
};

export default function Membsers() {
  //   const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  //   const [coursesState, dispatchCourse] = useReducer(coursesReducer, initState);
  //   const [showFormDialog, setShowFormDialog] = useState(false);
  //   const [index, setIndex] = useState(-1);
  //   const [isSearching, setIsSearching] = useState(false);

  //   useEffect(() => {
  //     let sql =
  //       "SELECT id, title, description, tags, admin_id, image FROM courses WHERE deleted = false";
  //     axios
  //       .get(`${import.meta.env.VITE_API_URL}/courses/${sql}`)
  //       .then((response) => {
  //         if (response.status === 200) {
  //           dispatchCourse({ type: "load", data: response.data });
  //         }
  //       })
  //       .catch((error) => console.log(error.message));
  //   }, []);

  const editButtonEvent = (e, id) => {
    e.preventDefault();
    // setIndex(id);
    // setShowFormDialog(true);
    // dispatchCourse({ type: "index", id: index });
    // dispatchCourse({ type: "showDataForm", showForm: true });
  };

  const handleInsertDialog = (e) => {
    e.preventDefault();
    // setIndex(-1);
    // setShowFormDialog(true);
    // dispatchCourse({ type: "index", id: -1 });
    // dispatchCourse({ type: "showDataForm", showForm: true });
  };

  const searchFieldChangeEvent = (e) => {
    e.preventDefault();
    // if (e.target.value === "") {
    //   setIsSearching(false);
    // } else {
    //   setIsSearching(true);
    //   dispatchCourse({ type: "search", text: e.target.value });
    // }
  };

  const deleteButtonEvent = (e, id) => {
    e.preventDefault();
    // setIndex(id);
    // setShowDeleteDialog(true);
  };

  return (
    <>
      <Header title={"الأعضاء"} desc={null} />
      <div className="mt-12 mb-8 flex flex-col gap-12">
        <Card>
          <CardHeader
            variant="gradient"
            color="purple"
            className="sticky top-2 z-0 mb-8 flex items-center justify-between px-6 py-6"
          >
            <div className="w-1/2">
              <Typography variant="h4" color="white">
                جدول الأعضاء
              </Typography>
            </div>
            <div className="flex w-1/2 items-center justify-end">
              <div className="relative w-2/5 rounded-lg border-none text-gray-400 focus-within:text-gray-700">
                <MdSearch className="absolute mt-2 mr-1.5 text-2xl" />
                <input
                  placeholder="بحث"
                  className="rounded-lg py-2 pr-8 outline-none focus:placeholder-gray-700"
                  type={"text"}
                  onChange={searchFieldChangeEvent}
                  variant="standard"
                />
              </div>
              <IconButton
                onClick={handleInsertDialog}
                className="mr-4 rounded-full  "
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
                  {[
                    "اسم الكورس",
                    "وصف الكورس",
                    "منشئ الكورس",
                    "عدد الدروس",
                    "",
                    "",
                  ].map((el, i) => (
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
                {/* <CoursesTable
                  allData={
                    isSearching ? coursesState.searchData : coursesState.allData
                  } // All data of the table rows
                  editFun={editButtonEvent}
                  deleteFun={deleteButtonEvent}
                /> */}
              </tbody>
            </table>
          </CardBody>
        </Card>
      </div>
      {/* <CourseForm
        id={index}
        show={showFormDialog}
        setID={setIndex}
        showFun={setShowFormDialog}
        fun={dispatchCourse}
      />
      <DeleteCourse
        id={index}
        show={showDeleteDialog}
        setID={setIndex}
        showFun={setShowDeleteDialog}
        fun={dispatchCourse}
      /> */}
    </>
  );
}
