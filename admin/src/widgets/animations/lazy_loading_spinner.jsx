import { Spinner } from "@material-tailwind/react";
export default function LazyLoadingSpinner() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-blue-gray-900">
      <Spinner className="h-24 w-24" color="purple" />
    </div>
  );
}
