import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet, useNavigation } from 'react-router';
import Spinner from "../components/Spinner/Spinner";
const Layout = () => {
    const navigation = useNavigation();

    const isLoading = navigation.state === "loading";
    return (
        <>
           <div className=''>
              <Navbar></Navbar>
              {isLoading && <Spinner />}
              <Outlet></Outlet>
              <Footer></Footer>
             
           </div>
            
        </>
    );
};

export default Layout;