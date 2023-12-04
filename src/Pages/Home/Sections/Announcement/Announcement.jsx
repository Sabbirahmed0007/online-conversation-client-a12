import { Link, NavLink } from "react-router-dom";
import ShowAnnouncement from "./ShowAnnouncement/ShowAnnouncement";
import {FaPlus} from 'react-icons/fa'

const Announcement = () => {
    return (
        <div className="my-5">
            <div className="text-center">
                <div className="my-5 shadow-xl rounded-md w-3/4 lg:w-1/3 mx-auto">
                    <ShowAnnouncement></ShowAnnouncement>
                </div>
            </div>
        </div>
    );
};

export default Announcement;