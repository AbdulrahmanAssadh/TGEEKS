import {
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Button,
  Typography,
} from "@material-tailwind/react";
import axios from "axios";
import React from "react";

export default function DeleteCourse({ id, show, setID, showFun }) {
  function clearData() {
    setID(-1);
    showFun(false);
  }

  const okButtonEvent = (e) => {
    e.preventDefault();
    axios
      .delete(`${import.meta.env.VITE_API_URL}/course/${id}`)
      .then((response) => {
        if (response.status === 200) {
          clearData();
        }
      })
      .catch((error) => console.log(error.message));
  };

  const hideDeleteDialog = (e) => {
    clearData();
    e.preventDefault();
  };

  return (
    <Dialog open={show} size={"xs"}>
      <DialogHeader className="bg-red-500 text-white">
        <Typography variant="h4">تأكيد حذف الكورس</Typography>
      </DialogHeader>
      <DialogBody>
        <Typography variant="h5">
          قم بتأكيد حذف الكورس في حال أردت ذلك
        </Typography>
      </DialogBody>
      <DialogFooter className="border-t-2 p-2">
        <Button variant="text" color="red" size="sm" onClick={okButtonEvent}>
          <Typography variant="h6">تأكيد</Typography>
        </Button>
        <Button
          variant="text"
          color="green"
          size="sm"
          onClick={hideDeleteDialog}
        >
          <Typography variant="h6">الغاء</Typography>
        </Button>
      </DialogFooter>
    </Dialog>
  );
}
