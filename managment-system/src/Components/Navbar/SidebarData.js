import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
    // {
    //     title: 'Home',
    //     path: '/',
    //     icon: <AiIcons.AiFillHome />,
    //     cName: 'nav-text'
    // },
    {
        title: 'Add new user',
        path: '/addUser',
        icon: <AiIcons.AiOutlineUserAdd />,
        cName: 'nav-text'
    },
    {
        title: 'All users',
        path: '/allUsers',
        icon: <AiIcons.AiOutlineFileSearch />,
        cName: 'nav-text'
    }
]