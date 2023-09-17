import {Spinner} from "@material-tailwind/react";

export default function SpinnerPage () {
    return <div className={"w-screen h-screen flex justify-center items-center"}>
        <Spinner color={"purple"} className={"w-1/4 h-1/4"} />
    </div>
}