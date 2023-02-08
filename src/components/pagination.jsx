import React from "react";

export default function Pagination(props) {

    return(
        <>
            <div>
                <ul className="pagination text-center"  style={{display:'flex', justifyContent:'center', marginTop:'50px'}}>
                    <li className="page-item disabled">
                    <a className="page-link" href="#">&laquo;</a>
                    </li>
                    <li className="page-item active">
                    <a className="page-link" href="#">1</a>
                    </li>
                    <li className="page-item">
                    <a className="page-link" href="#">2</a>
                    </li>
                    <li className="page-item">
                    <a className="page-link" href="#">3</a>
                    </li>
                    <li className="page-item">
                    <a className="page-link" href="#">4</a>
                    </li>
                    <li className="page-item">
                    <a className="page-link" href="#">5</a>
                    </li>
                    <li className="page-item">
                    <a className="page-link" href="#">&raquo;</a>
                    </li>
                </ul>
            </div>
        </>
    )
}