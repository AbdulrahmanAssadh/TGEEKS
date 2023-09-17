import {
  Input,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  IconButton,
  Button,
} from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import {
  MdSave,
  MdCancel,
  MdImageSearch,
  MdEdit,
  MdImage,
  MdDelete,
} from "react-icons/md";

export default function CourseForm({ id, show, setID, showFun, fun }) {
  /** Initial state of the from state */
  const initFormData = {
    title: "",
    description: "",
    tags: "",
    image: null,
    admin_id: 1,
    init_date: new Date().toLocaleString(),
  };

  /** Form state */
  const [formData, setFormData] = useState(initFormData);
  /** Image state of \<img\> tag of the form */
  const [image, setImage] = useState(null);

  /** Reference to the file picker */
  const uploadImageButtonRef = useRef();

  const clearData = () => {
    setFormData(initFormData);
    setImage(null);
    setID(-1);
    showFun(false);
  };

  /**
   *  Activate the ulpoad image picker
   */
  const uploadButtonActivatorEvent = (e) => {
    e.preventDefault();
    uploadImageButtonRef.current.click();
  };

  /**
   * Delete image from \<img\> tag and from the state of the form
   */
  const deleteImageButtonEvent = (e) => {
    e.preventDefault();
    setImage(() => null);
    setFormData((prefState) => {
      return { ...prefState, img: null };
    });
  };

  /**
   * Save image to the state and import image to img tag in the form
   */
  const uploadImagButtonEvent = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      if (image !== null) {
        setImage(() => null);
      }
      setFormData((prefState) => {
        return { ...prefState, image: e.target.files[0] };
      });
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  /**
   * Upload the content of the form stored on it's state to the server as new one
   * and after successfully uploading, clear state and hide the form
   */
  const saveButtonEvent = (e) => {
    e.preventDefault();
    axios
      .post(`${import.meta.env.VITE_API_URL}/course`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        if (response.status === 201) {
          // fun({ type: "insert", data: response.data });
          clearData();
        }
      })
      .catch((error) => console.log(error.message));
  };

  /**
   * Upload modified data to the server and after successfully
   * uploading it, clear it's state and hide the form
   */
  const editButtonEvent = (e) => {
    e.preventDefault();
    axios
      .put(`${import.meta.env.VITE_API_URL}/course/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        if (response.status === 200) {
          clearData();
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  /**
   * Clear all the data of the form and hide it
   */
  const hideDialog = (e) => {
    e.preventDefault();
    clearData();
  };

  /**
   * Execute on id parameter change to request data from server for editing only
   */
  useEffect(() => {
    if (id > -1) {
      axios
        .get(`${import.meta.env.VITE_API_URL}/course/${id}`)
        .then((response) => {
          if (response.status === 200) {
            setFormData(() => response.data);
          }
        })
        .catch((error) => console.log(error.message));
    }
  }, [id]);

  /**
   * Execute only on image state update to add image from server
   * to \<img\> tag of the form
   */
  useEffect(() => {
    if (typeof formData.image === "string") {
      let path = `${import.meta.env.VITE_API_URL}${formData.image}`;
      setImage(path);
    }
  }, [formData.image]);

  return (
    <>
      <Dialog size="xs" open={show}>
        <form>
          <DialogHeader
            className={`border-b-2 border-gray-100 ${
              id === -1 ? "bg-green-500" : "bg-orange-500"
            } text-white`}
          >
            {id > -1 ? "تعديل كورس موجود" : "إنشاء كورس جديد"}
          </DialogHeader>
          {/* //////////////////////////////////////////////////////////////////// */}
          <DialogBody className="flex flex-col justify-evenly gap-4">
            <div className="m-0 flex h-52 flex-col items-center justify-start rounded-md p-0 shadow-md shadow-gray-400">
              <div className="h-5/6 rounded-t-md">
                <img src={image} className="h-full" />
              </div>
              <div className="m-0 flex h-1/6 w-full justify-between rounded-b-md border-b-2 border-gray-100 p-0">
                <Button
                  type="button"
                  className="m-0 flex h-full w-1/2 items-center justify-center rounded-none rounded-br-md shadow-none hover:shadow-none"
                  onClick={uploadButtonActivatorEvent}
                  color="blue"
                  // ripple={false}
                >
                  <MdImage
                    // hidden={formData.img !== null ? true : false}
                    className="h-5 w-5 shadow-none"
                  />
                </Button>
                <Button
                  type="button"
                  // size={"xl"}
                  className="m-0 flex h-full w-1/2 items-center justify-center rounded-none rounded-bl-md shadow-none hover:shadow-none"
                  onClick={deleteImageButtonEvent}
                  color="red"
                  // ripple={false}
                >
                  <MdDelete
                    // hidden={formData.img !== null ? true : false}
                    className="h-5 w-5 shadow-none"
                  />
                </Button>
              </div>
            </div>
            <Input
              name="title"
              label="اسم الكورس"
              inputMode="text"
              variant="standard"
              value={formData.title}
              className="bg-gray-50 px-2 shadow-md shadow-gray-300"
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
            />
            <Input
              name="description"
              label="وصف الكورس"
              inputMode="text"
              variant="standard"
              value={formData.description}
              className="bg-gray-50 px-2 shadow-md shadow-gray-300"
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            />
            <Input
              name="tags"
              label="كلمات دلالية"
              inputMode="text"
              variant="standard"
              value={formData.tags}
              className="bg-gray-50 px-2 shadow-md shadow-gray-300"
              onChange={(e) =>
                setFormData({ ...formData, tags: e.target.value })
              }
            />
            <input
              name="image_file"
              hidden={true}
              type="file"
              accept="image/*"
              ref={uploadImageButtonRef}
              onChange={uploadImagButtonEvent}
            />
          </DialogBody>
          {/* ///////////////////////////////////////////////////////////////// */}
          <DialogFooter className="border-t-2 border-gray-100">
            {/* Save button */}
            <IconButton
              variant="text"
              className="ml-2"
              color="green"
              hidden={id > -1 ? true : false}
              // type="submit"
              onClick={saveButtonEvent}
            >
              <MdSave className="h-6 w-6 rounded" />
            </IconButton>
            {/* Edit button */}
            <IconButton
              variant="text"
              className="ml-2"
              color="orange"
              onClick={editButtonEvent}
              hidden={id > -1 ? false : true}
            >
              <MdEdit className="rounde h-6 w-6" />
            </IconButton>
            {/* Cancel button */}
            <IconButton onClick={hideDialog} color="red" variant="text">
              <MdCancel className="h-6 w-6 rounded" />
            </IconButton>
          </DialogFooter>
        </form>
      </Dialog>
    </>
  );
}
