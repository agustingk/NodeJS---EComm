"use client";

export function UserDropdown({logoutHandler}) {
    return (
        <div className="dropdown dropdown-end dropdown-hover">
            <div tabIndex={0} role="button" className="btn m-1">
                Menu ⬇️
            </div>
            <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow"
            >
                <li><a className="cursor-pointer">Profile</a></li>
                <li onClick={logoutHandler}><a className="cursor-pointer">Sign Out</a></li>
            </ul>
        </div>
    );
}
