import React from "react";
import "./Header.css";

const Header = () => {
    return (
        <div className="container-fluid p-0">
            <nav className="navbar navbar-expand-lg ">
                <div className="container">
                    <h1>Knowledge Cafe</h1>
                    <img
                        id="loggedInPersonImg"
                        src="https://img.freepik.com/free-photo/newcomer-get-know-teammates-pleased-good-looking-businesswoman-transparent-glasses-blue-collar-shirt-smiling-broadly-assuring-good-quality-product-gray-wall_176420-25024.jpg?w=996&t=st=1680369455~exp=1680370055~hmac=07f5c1e790dec6bec90e1ba4df71c35a5e58f0c4779b3ad75013ce88ed239152"
                        className="rounded-circle"
                        alt=""
                    />
                </div>
            </nav>
        </div>
    );
};

export default Header;
