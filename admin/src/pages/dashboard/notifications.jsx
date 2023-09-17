import React from "react";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  Alert,
} from "@material-tailwind/react";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

export function Notifications() {
  let [showAlerts, setShowAlerts] = React.useState({
    blue: true,
    green: true,
    orange: true,
    red: true,
  });
  let [showAlertsWithIcon, setShowAlertsWithIcon] = React.useState({
    blue: true,
    green: true,
    orange: true,
    red: true,
  });
  let alerts = ["blue", "green", "orange", "red"];

  return (
    <div className="mx-auto my-20 flex max-w-screen-lg flex-col gap-8">
      <Card>
        <CardHeader
          color="transparent"
          floated={false}
          shadow={false}
          className="m-0 p-4"
        >
          <Typography variant="h5" color="blue-gray">
            Alerts
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4 p-4">
          {alerts.map((item,index) => (
            <Alert
              // style={{ display: "flex", flexDirection: "row-reverse" }}
              key={index}
              open={showAlerts[item]}
              color={item}
              className="flex justify-end rotate-180"
              onClose= {()=>
                setShowAlerts((current) => ({ ...current, [item]: false }))}
              // dismissible={{
              //   onClose: {() =>
              //     setShowAlerts((current) => ({ ...current, [color]: false }))},
              // }}
            >
              <Typography className="rotate-180">
                A simple {item} alert with an <a href="#">example link</a>.
                Give it a click if you like.
              </Typography>
            </Alert>
          ))}
        </CardBody>
      </Card>
      <Card>
        <CardHeader
          color="transparent"
          floated={false}
          shadow={false}
          className="m-0 p-4"
        >
          <Typography variant="h5" color="blue-gray">
            Alerts with Icon
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4 p-4">
          {alerts.map((item, index) => (
            <Alert
              key={index}
              show={showAlertsWithIcon[item]}
              color={item}
              className="flex justify-end rotate-180"
              // icon={
              //
              // }
              onClose={() =>
            setShowAlertsWithIcon((current) => ({
            ...current,
            [item]: false,
          }))}
              // dismissible={{
              //   onClose: () =>
              //     setShowAlertsWithIcon((current) => ({
              //       ...current,
              //       [color]: false,
              //     })),
              // }}
            >
              <div className={"rotate-180 flex justify-start items-start"}>

              <InformationCircleIcon
                  strokeWidth={2}
                  className="h-7 w-7"
              />
              <Typography className={"mr-3"}>سيارة خارقة.</Typography>
              </div>
            </Alert>
          ))}
        </CardBody>
      </Card>
    </div>
  );
}

export default Notifications;
