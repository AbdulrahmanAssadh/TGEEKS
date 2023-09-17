import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  Button,
  IconButton,
  Switch,
  Typography,
} from "@material-tailwind/react";
import {
  useMaterialTailwindController,
  setOpenConfigurator,
  setSidenavColor,
  setSidenavType,
  setFixedNavbar,
} from "@/context/user";

export function Configurator() {
  const [controller, dispatch] = useMaterialTailwindController();
  const { openConfigurator, sidenavColor, sidenavType, fixedNavbar } =
    controller;

  const sidenavColors = {
    purple: "from-purple-400 to-purple-600",
    blue: "from-blue-400 to-blue-600",
    "blue-gray": "from-blue-gray-800 to-blue-gray-900",
    green: "from-green-400 to-green-600",
    orange: "from-orange-400 to-orange-600",
    red: "from-red-400 to-red-600",
    pink: "from-pink-400 to-pink-600",
  };

  React.useEffect(() => {}, []);

  return (
    <aside
      className={`fixed top-0 left-0 z-50 h-screen w-96 bg-white px-2.5 shadow-lg transition-transform duration-300 ${
        openConfigurator ? "-translate-x-5" : "-translate-x-96"
      }`}
    >
      <div className="flex items-start justify-between px-6 pt-8 pb-6">
        <div>
          <Typography variant="h5" color="blue-gray">
            إعدادات لوحة التحكم
          </Typography>
          <Typography className="font-normal text-blue-gray-600">
            شاهد إعدادات لوحة التحكم
          </Typography>
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          onClick={() => setOpenConfigurator(dispatch, false)}
        >
          <XMarkIcon strokeWidth={2.5} className="h-5 w-5" />
        </IconButton>
      </div>
      <div className="py-4 px-6">
        <div className="mb-12">
          <Typography variant="h6" color="blue-gray">
            ألوان عمود التوجيه الجانبي
          </Typography>
          <Typography variant="small" color="gray">
            إختر من بين الألوان
          </Typography>
          <div className="mt-3 flex items-center gap-2">
            {Object.keys(sidenavColors).map((color) => (
              <span
                key={color}
                className={`h-6 w-6 cursor-pointer rounded-full bg-gradient-to-br ${sidenavColors[color]}`}
                onClick={() => setSidenavColor(dispatch, color)}
              />
            ))}
          </div>
        </div>
        <div className="mb-12">
          <Typography variant="h6" color="blue-gray">
            أنواع عمود التوجيه
          </Typography>
          <Typography variant="small" color="gray">
            إختر من بين النوعين
          </Typography>
          <div className="mt-3 flex items-center gap-2">
            <Button
              variant={sidenavType === "white" ? "gradient" : "outlined"}
              onClick={() => setSidenavType(dispatch, "white")}
            >
              مضيء
            </Button>
            <Button
              variant={sidenavType === "dark" ? "gradient" : "outlined"}
              onClick={() => setSidenavType(dispatch, "dark")}
            >
              مظلم
            </Button>
          </div>
        </div>
        <div className="mb-12">
          <hr />
          <div className="flex items-center justify-between py-5">
            <Typography variant="h6" color="blue-gray">
              Navbar Fixed
            </Typography>
            <Switch
              id="navbar-fixed"
              value={fixedNavbar}
              onChange={() => setFixedNavbar(dispatch, !fixedNavbar)}
            />
          </div>
        </div>
      </div>
    </aside>
  );
}

Configurator.displayName = "/src/widgets/layout/configurator.jsx";

export default Configurator;
