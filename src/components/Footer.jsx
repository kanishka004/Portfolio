import React from "react";
import {
    AiFillGithub,
    AiFillInstagram,
    AiFillYoutube,
    AiOutlineArrowUp,
} from "react-icons/ai";
import kanu from "../assets/footer_img.jpeg";

const Footer = () => {
    return (
        <footer>
            <div>
                <img src={kanu}
                    
                    alt="Founder"
                />

                <h2>Kanishka Adhikari</h2>
                <p>The number one skill in Life is not giving up.</p>
            </div>

            <aside>
                <h2>Social Media</h2>

                <article>
                    <a href="https://youtube.com" target={"blank"}>
                        <AiFillYoutube />
                    </a>
                    <a href="https://instagram.com" target={"blank"}>
                        <AiFillInstagram />
                    </a>
                    <a href="https://github.com/kanishka004" target={"blank"}>
                        <AiFillGithub />
                    </a>
                </article>
            </aside>
            <a href="#home">
                <AiOutlineArrowUp />
            </a>
        </footer>
    );
};

export default Footer;