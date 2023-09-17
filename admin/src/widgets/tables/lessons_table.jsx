import { Avatar, Chip, IconButton, Typography } from "@material-tailwind/react";
import { MdEdit, MdDelete } from "react-icons/md";

export default function LessonsTable({ allData, editFun, deleteFun }) {
  const getTags = (text) => {
    let temp = text.toString();
    temp = text.split(" ");
    return temp.map((item) => (
      <div className="flex gap-2">
        <Chip
          variant="ghost"
          color={"purple"}
          value={item}
          className="py-0.5 px-2 text-[11px] font-medium"
        />
      </div>
    ));
  };
  return (
    <>
      {allData.map((data, index) => {
        const className = `py-3 px-5 ${
          index === allData.length - 1 ? "" : "border-b border-blue-gray-100"
        }`;
        return (
          <tr key={`index-${index}`}>
            <td className={className} key={`title-${index}`}>
              <div className="flex items-center gap-4">
                {/* <Avatar
                  src={`${import.meta.env.VITE_API_URL}${data.image}`}
                  //   src={data.image}
                  alt={data.image}
                  size="sm"
                /> */}
                <div>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-semibold capitalize"
                  >
                    {data.title}
                  </Typography>
                  {/* <Typography className="text-xs font-normal text-blue-gray-500">
                {data.tags}
              </Typography> */}
                </div>
              </div>
            </td>
            <td className={className} key={`ta-${index}`}>
              <Typography className="text-xs font-semibold text-blue-gray-600">
                {data.tags}
              </Typography>
              <Typography className="text-xs font-normal text-blue-gray-500">
                {data.admin_id}
              </Typography>
            </td>
            <td className={className} key={`t3-${index}`}>
              <div className="flex gap-2">
                <Chip
                  variant="ghost"
                  color={"purple"}
                  value={data.id}
                  className="py-0.5 px-2 text-[11px] font-medium"
                />
              </div>
              {/* {getTags(data.tags)} */}
              <Chip
                variant="ghost"
                color={"purple"}
                value={data.admin_id}
                className="py-0.5 px-2 text-[11px] font-medium"
              />
            </td>
            <td className={className} key={`t4-${index}`}>
              <Typography className="text-xs font-semibold text-blue-gray-600">
                {data.course_id}
              </Typography>
            </td>
            <td className={className} key={`t5-${index}`}>
              <IconButton
                variant="text"
                color="orange"
                onClick={(e) => editFun(e, data.id)}
              >
                <MdEdit className="h-6 w-6" />
              </IconButton>
            </td>
            <td className={className} key={`t6-${index}`}>
              <IconButton
                variant="text"
                color="red"
                onClick={(e) => deleteFun(e, data.id)}
              >
                <MdDelete className="h-6 w-6" />
              </IconButton>
            </td>
          </tr>
        );
      })}
    </>
  );
}
