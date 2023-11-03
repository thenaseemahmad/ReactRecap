import React from "react";
import "./Sidepane.css";

function Sidepane() {
    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary" id="sidepane">
            
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <a href="#" className="nav-link active" aria-current="page">
                        {/* <svg className="bi pe-none me-2" width="16" height="16"><use xlink: href="#home"></use></svg> */}
                        Home
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link link-body-emphasis">
                        {/* <svg className="bi pe-none me-2" width="16" height="16"><use xlink: href="#speedometer2"></use></svg> */}
                        Dashboard
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link link-body-emphasis">
                        {/* <svg className="bi pe-none me-2" width="16" height="16"><use xlink: href="#table"></use></svg> */}
                        Orders
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link link-body-emphasis">
                        {/* <svg className="bi pe-none me-2" width="16" height="16"><use xlink: href="#grid"></use></svg> */}
                        Products
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link link-body-emphasis">
                        {/* <svg className="bi pe-none me-2" width="16" height="16"><use xlink: href="#people-circle"></use></svg> */}
                        Customers
                    </a>
                </li>
            </ul>
            <hr />
        </div>
    )
}

export default Sidepane