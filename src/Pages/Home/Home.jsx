import Footer from "../Shared/Footer/Footer";
import NavBar from "../Shared/NavBar/NavBar";
import { FaAngleRight } from 'react-icons/fa';
import './Home.css';

const Home = () => {


    const handleArrow = (event) => {
        event.preventDefault()

    }
    const handleAddFolder = (event) => {
        event.preventDefault()
    }

    return (
        <div>
            <NavBar></NavBar>


            <section className="content-wraper">

                <div className="folder-str-content"></div>
                <h1 style={{ margin: 'auto', width: '50%' }}> Folder Structer Task (CRUD) Operation.</h1>

                <div onClick={handleArrow} className="mainContent">
                    <h3
                        style={{
                            marginLeft: '100px'
                        }}

                    ><FaAngleRight></FaAngleRight>Root Folder
                        <button onClick={handleAddFolder} className="btn">Add Folder</button>
                        <button className="btn">Delete Folder</button>
                    </h3>

                </div>



            </section >


            <Footer></Footer>

        </div >
    );
};

export default Home;