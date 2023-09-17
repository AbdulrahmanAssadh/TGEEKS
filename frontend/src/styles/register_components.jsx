import tw from "twin.macro";

export const Container = tw.div`relative h-auto overflow-hidden grid place-items-center`;
export const Card = tw.div`w-2/3 sm:w-3/5 md:w-1/2 lg:w-5/12 xl:w-1/4 p-6 m-auto bg-gray-100 rounded-md shadow-md shadow-gray-400 lg:max-w-xl my-8`;
export const Head1 = tw.h1`text-3xl font-semibold text-center text-purple-700`;
export const Form = tw.form`mt-6`;
export const Row = tw.div`text-right my-3`;
export const Label = tw.label`block text-sm font-semibold text-gray-800`;
export const Input = tw.input`block w-full px-4 py-2 my-4 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-5`;
export const LinkButton = tw.a`text-xs text-purple-600 hover:underline`;
export const Button = tw.button`w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600`;
export const Text = tw.p`mt-4 text-xs font-light text-center text-gray-700`;
export const TabContainer = tw.div`container mx-auto mt-12`;
export const TabCard = tw.div`flex flex-col items-center justify-center max-w-xl`;
export const TabList = tw.ul`flex space-x-2`;
export const TabButton = tw.button`inline-block px-4 py-2 text-gray-600 bg-white rounded shadow`;
export const RegisterContainerTheme = tw.div`h-auto`;
export const Box = tw.div`w-full mt-2 h-auto border-2 shadow-none rounded-xl flex flex-col items-center`
export const ImageBox = tw.img`h-56 object-contain`