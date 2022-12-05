import Button from "react-bootstrap/Button";
import TasksLogo from "./Logos/TasksLogo.svg";
import FmyLogo from "./Logos/FmyLogo.svg";
import "./SideTaskBar.css";

function SideTaskBar() {
    
    return (
        <div className="sideTaskBar">

            <img src={FmyLogo} className="fmyLogo" alt="fmyLogo"></img>

            <div className="taskBarPagesButtons">

                <Button className="taskBarButton active">
                    <img src={TasksLogo} alt=""></img>
                    Lorem Ipsum
                </Button>
                <Button className="taskBarButton">
                    <img src={TasksLogo} alt=""></img>
                    Lorem Ipsum
                </Button>


                <div className="dividerLine"></div>


                <Button className="taskBarButton">
                    <img src={TasksLogo} alt=""></img>
                    Lorem Ipsum
                </Button>
                <Button className="taskBarButton">
                    <img src={TasksLogo} alt=""></img>
                    Lorem Ipsum
                </Button>
                <Button className="taskBarButton">
                    <img src={TasksLogo} alt=""></img>
                    Lorem Ipsum
                </Button>
                <Button className="taskBarButton">
                    <img src={TasksLogo} alt=""></img>
                    Lorem Ipsum
                </Button>
                <Button className="taskBarButton">
                    <img src={TasksLogo} alt=""></img>
                    Lorem Ipsum
                </Button>
                <Button className="taskBarButton">
                    <img src={TasksLogo} alt=""></img>
                    Lorem Ipsum
                </Button>
                <Button className="taskBarButton">
                    <img src={TasksLogo} alt=""></img>
                    Lorem Ipsum
                </Button>


                <div className="dividerLine"></div>


                <Button className="taskBarButton">
                    <img src={TasksLogo} alt=""></img>
                    Lorem Ipsum
                </Button>
                <Button className="taskBarButton">
                    <img src={TasksLogo} alt=""></img>
                    Lorem Ipsum
                </Button>

                <div className="dividerLine"></div>

                <div className="bottomSideBar">
                    <div className="dividerLine"></div>

                    <Button className="taskBarButton">
                        <img src={TasksLogo} alt=""></img>
                        Lorem Ipsum
                    </Button>
                    <Button className="taskBarButton">
                        <img src={TasksLogo} alt=""></img>
                        Lorem Ipsum
                    </Button>
                </div>
            </div>
        </div>
    );

}

export default SideTaskBar;