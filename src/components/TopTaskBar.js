import { Col, Row } from "react-bootstrap";
import SearchLogo from "./Logos/SearchLogo.svg";
import "./TopTaskBar.css";

function TopTaskBar() {
    return (
        <div className="topTaskBar">
            <div className="topTaskBarContent">
                <Row>
                    <Col>
                        <form onSubmit={(e) => e.preventDefault()} style={{display: "flex"}}>
                            <input placeholder="Search Here..." className="searchInput"></input>
                            <img src={SearchLogo} alt="" className="searchLogo" type="submit"></img>
                        </form>
                    </Col>
                </Row>
            </div>
        </div>
    );

}

export default TopTaskBar;