import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { useState, useEffect } from "react";
import Axios from "axios";
import T_Editor from "my/ready/t_editor";
// import Select from "react-select/dist/declarations/src/Select";

function AdminWriter({ index = 0 }) {
    const date = new Date().toLocaleDateString();
    const [lesson, setLesson] = useState({
        title: "",
        course_id: 0,
        admin_id: 0,
        description: "",
        content: "",
        init_date: date,
    }); // Lesson data state object
    const [courses, setCourses] = useState([]); // courses list
    const [requiredFields, setRequiredFields] = useState({
        title: false,
        content: false,
        description: false,
    }); // Required fields state object

    useEffect(() => {
        const date = new Date().toLocaleDateString();
        returnCourses();
        setRequiredFields({ name: false, department: false, content: false });
        setLesson({
            ...lesson,
            course_id: 0,
            admin_id: 1,
            init_date: date,
            description: "none",
        });
        if (index !== 0) {
            Axios.get(`${process.env.REACT_APP_API_URL}lesson/${index}`)
                .then((response) => {
                    if (response.status == 200) {
                        setLesson(response.data);
                    } else {
                        console.log("error");
                    }
                })
                .catch((error) => console.log(error.message));
        }
    }, []);

    const returnCourses = () => {
        // Return all courses
        const sql = "SELECT id, title FROM courses ORDER BY id";
        // Start Load all courses from database
        Axios.get(`${process.env.REACT_APP_API_URL}courses/${sql}`)
            .then(async (response) => {
                if (response.status == 200) {
                    await setCourses(response.data);
                } else {
                    Promise.reject();
                }
            })
            .catch((err) => console.log("Something went wrong " + err.message));
        // End Load all courses from database
    };

    // Check if fields filled with data
    const checkRequiredFields = () => {
        if (requiredFields.title === false) return false;
        if (requiredFields.content === false) return false;
        if (requiredFields.department === false) return false;
        return true;
    };

    // Save button click event handler \save content to lessons table
    const saveButtonEventHandler = (e) => {
        e.preventDefault();
        setLesson({ ...lesson });
        if (checkRequiredFields()) {
            Axios.post(`${process.env.REACT_APP_API_URL}lesson`, lesson)
                .then((response) => {
                    if (response.status === 201) {
                        console.log("done");
                    } else {
                        console.log("failed");
                    }
                })
                .catch((error) => console.log(error.message));
        } else {
            alert("one field is empty");
        }
    };

    // Save button click event handler \save content to lessons table
    const editButtonEventHandler = (e) => {
        e.preventDefault();
        setLesson({ ...lesson });
        if (checkRequiredFields()) {
            Axios.put(`${process.env.REACT_APP_API_URL}lesson/${index}`, lesson)
                .then((response) => {
                    if (response.status === 200) {
                        console.log("done");
                    } else {
                        console.log("failed");
                    }
                })
                .catch((error) => console.log(error.message));
        } else {
            alert("one field is empty");
        }
    };

    const onEditorChanges = (content, editor) => {
        setLesson({ ...lesson, content: content });
        if (content == "") {
            setRequiredFields({ ...requiredFields, content: false });
        } else {
            setRequiredFields({ ...requiredFields, content: true });
        }
    };

    return (
        <div dir="rtl">
            <table>
                <tbody style={{ width: "100%" }}>
                    <tr>
                        {/* Title field*/}
                        <td style={{ width: "25%", textAlign: "center" }}>
                            <label htmlFor="title">عنوان الدرس</label>
                        </td>
                        <td style={{ width: "75%" }}>
                            <input
                                id="title"
                                type="text"
                                value={lesson.title}
                                onChange={(e) => {
                                    setLesson({
                                        ...lesson,
                                        title: e.target.value,
                                    });
                                    if (e.target.value == "") {
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
                                }}
                                required
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="select">تابع لكورس</label>
                        </td>
                        <td>
                            {/* <Select value={null} onChange={null} options={null} /> */}
                            <select
                                required
                                id="select"
                                onChange={(e) => {
                                    setLesson({
                                        ...lesson,
                                        course_id: e.target.value,
                                    });
                                    if (e.target.value == "") {
                                        setRequiredFields({
                                            ...requiredFields,
                                            department: false,
                                        });
                                    } else {
                                        setRequiredFields({
                                            ...requiredFields,
                                            department: true,
                                        });
                                    }
                                }}
                            >
                                {courses.map((item, index) => {
                                    return (
                                        <option
                                            key={index}
                                            value={item.id}
                                            // selected={index == 0 ? true : false}
                                        >
                                            {item.title}
                                        </option>
                                    );
                                })}
                            </select>
                            <input
                                defaultValue={
                                    lesson.description === "none"
                                        ? ""
                                        : lesson.description
                                }
                                multiple={true}
                                placeholder="اكتب الوصف هنا"
                                onChange={(e) => {
                                    setLesson({
                                        ...lesson,
                                        description: e.target.value,
                                    });
                                }}
                            />
                        </td>
                    </tr>
                    <tr hidden={index != 0 ? true : false}>
                        <td colSpan={2}>
                            <button onClick={saveButtonEventHandler}>
                                حفظ
                            </button>
                        </td>
                    </tr>
                    <tr hidden={index == 0 ? true : false}>
                        <td colSpan={2}>
                            <button onClick={editButtonEventHandler}>
                                تعديل
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div>
                <T_Editor fun={onEditorChanges} content={lesson.content} />
            </div>
        </div>
    );
}

export default AdminWriter;
