import '../module_css/profile.css';
import { Link } from 'react-router-dom';
import UserImage from '../images/user/user.png';

const Profiles = () => {
    document.addEventListener('DOMContentLoaded', function (event) {
        const showNavbar = (toggleId, navId, bodyId, headerId) => {
            const toggle = document.getElementById(toggleId),
                nav = document.getElementById(navId),
                bodypd = document.getElementById(bodyId),
                headerpd = document.getElementById(headerId);

            // Validate that all variables exist
            if (toggle && nav && bodypd && headerpd) {
                toggle.addEventListener('click', () => {
                    // show navbar
                    nav.classList.toggle('show');
                    // change icon
                    toggle.classList.toggle('bi-x');
                    // add padding to body
                    bodypd.classList.toggle('body-pd');
                    // add padding to header
                    headerpd.classList.toggle('body-pd');
                });
            }
        };

        showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header');

        /*===== LINK ACTIVE =====*/
        const linkColor = document.querySelectorAll('.nav_link');

        function colorLink() {
            if (linkColor) {
                linkColor.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
            }
        }
        linkColor.forEach(l => l.addEventListener('click', colorLink));

        // Your code to run since DOM is loaded and ready
    });

    return (
        <div id='body-pd'>
            <header class='header' id='header'>
                <div class='header_toggle'>
                    <i class='bi bi-list' id='header-toggle'></i>
                </div>
                <div class='header_img'>
                    <img src={UserImage} alt='' />
                </div>
            </header>
            <div class='l-navbar' id='nav-bar'>
                <nav class='nav'>
                    <div>
                        <a href='#' class='nav_logo'>
                            <i class='bi bi-layer nav_logo-icon'></i>
                            <span class='nav_logo-name'>BBBootstrap</span>
                        </a>
                        <div class='nav_list'>
                            <a href='#' class='nav_link active'>
                                <i class='bi bi-grid nav_icon'></i>
                                <span class='nav_name'>Dashboard</span>
                            </a>
                            <a href='#' class='nav_link'>
                                <i class='bi bi-person nav_icon'></i>
                                <span class='nav_name'>Users</span>
                            </a>
                            <a href='#' class='nav_link'>
                                <i class='bi bi-chat-square nav_icon'></i>
                                <span class='nav_name'>Messages</span>
                            </a>
                            <a href='#' class='nav_link'>
                                <i class='bi bi-bookmark nav_icon'></i>
                                <span class='nav_name'>Bookmark</span>
                            </a>
                            <a href='#' class='nav_link'>
                                <i class='bi bi-folder2 nav_icon'></i>
                                <span class='nav_name'>Files</span>
                            </a>
                            <a href='#' class='nav_link'>
                                <i class='bi bi-bar-chart nav_icon'></i>
                                <span class='nav_name'>Stats</span>
                            </a>
                        </div>
                    </div>{' '}
                    <a href='#' class='nav_link'>
                        <i class='bi bi-box-arrow-left nav_icon'></i>
                        <span class='nav_name'>SignOut</span>
                    </a>
                </nav>
            </div>
            <div class='height-100 bg-light'>
                <h4>My Profile</h4>
            </div>
        </div>
    );
};

export default Profiles;
