import tw from 'twin.macro'
import {RingLoader} from "react-spinners";

const Page = tw.div`w-full h-screen -m-2 grid place-items-center`
const Container = tw.div`w-56 h-56 flex justify-center items-center bg-purple-100 rounded-2xl`
const LazyLoadingSpinner = () => {
    return (<Page>
        <Container>
        <RingLoader color={'purple'} />
        </Container>
    </Page>);
}

export default LazyLoadingSpinner;