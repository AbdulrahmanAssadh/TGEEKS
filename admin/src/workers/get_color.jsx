const colors = {
  purple: "from-purple-400 to-purple-600",
  blue: "from-blue-400 to-blue-600",
  "blue-gray": "from-blue-gray-800 to-blue-gray-900",
  green: "from-green-400 to-green-600",
  orange: "from-orange-400 to-orange-600",
  red: "from-red-400 to-red-600",
  pink: "from-pink-400 to-pink-600",
};

export default function GetColor(value) {
  let keys = Object.keys(colors);
  for (let temp in keys) {
    // temp get index means that first item temp = 0
    if (colors[keys[temp]] === value) {
      return keys[temp];
    }
  }
  //   return colors;
}
