
//Write your code here, if needed, create more componnents
import { Chart } from "./Chart";
import { CircleChart } from "./CircleChart";
import "./WebAnalysistems.css"

function WebAnalysisItems() {

    return (
        <div className="modal-container">

            <div className="modal-headers">
                <div className="header-title-left">
                    <p>Database items</p>
                    <div className="button-items">
                        <div className="button-item">
                            <p>Show:</p>
                            <p>This Week</p>
                            <i className="fa fa-caret-down"></i>
                        </div>
                        <div className="button-item">
                            <p>Compare</p>
                            <i className="fa fa-caret-down"></i>
                        </div>
                    </div>
                </div>
                <div className="header-title-right">
                    <p>Cases</p>
                </div>
            </div>
            <div className="chart-box">
                <div className="chart-box-left" style={{"gap": "50px"}}>
                    <div className="c_left">
                        <div className="item">
                            <h3>Total items this week</h3>
                            <p>10,324</p>
                            <h2></h2>
                        </div>
                        <div className="item">
                            <h3>Changes from last week</h3>
                            <p style={{"color": "#0FDF63"}}>+12%</p>
                            <h2></h2>
                        </div>
                        <div className="item">
                            <h3>Total items in DB</h3>
                            <p style={{"color": "#ffffff"}}>5,403</p>
                        </div>
                    </div>
                    <div className="c_right" style={{"width": "75%"}}>
                        <Chart />
                    </div>
                </div>
                <div className="chart-box-right" style={{ "gap": "40px"}}>
                    <div className="c_left col-3">
                        <div className="item">
                            <h3>Lorem ipsum</h3>
                            <p style={{"color": "#ffffff"}}>53</p>
                            <h2></h2>
                        </div>
                        <div className="item">
                            <h3>Lorem ipsum</h3>
                            <p style={{"color": "#ffffff"}}>+2</p>
                            <h2></h2>
                        </div>
                        <div className="item">
                            <h3>Lorem ipsum</h3>
                            <p style={{"color": "#ffffff"}}>Lorem ipsum</p>
                        </div>
                    </div>
                    <div className="c_center col-3">
                        <CircleChart />
                        <p>86%</p>
                    </div>
                    <div className="c_right col-3">
                        <div className="list-item">
                            <div className="circle"></div>
                            <p>Lorem ipsum</p>
                        </div>
                        <div className="list-item">
                            <div className="circle" style={{"backgroundColor": "#12327C"}}></div>
                            <p>Lorem ipsum</p>
                        </div>
                        <div className="list-item">
                            <div className="circle" style={{"backgroundColor": "#93ECA6"}}></div>
                            <p>Lorem ipsum</p>
                        </div>
                        <div className="list-item">
                            <div className="circle" style={{"backgroundColor": "#004AFE"}}></div>
                            <p>Lorem ipsum</p>
                        </div>
                        <div className="list-item">
                            <div className="circle" style={{"backgroundColor": "#C6A6FF"}}></div>
                            <p>Lorem ipsum</p>
                        </div>
                        <div className="list-item">
                            <div className="circle" style={{"backgroundColor": "#FEBD42"}}></div>
                            <p>Other</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WebAnalysisItems;