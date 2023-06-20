import React from 'react';

const RtlSidebar = () => {
    return (
        <>
            <div className='rtl-sidebar'>
                <ul>
                    <li>
                        <a href='/' title="English">EN</a>
                    </li>
                    <li>
                        <a href='/ar' title="Arabic">AR</a>
                    </li>
                    <li>
                        <a href='/fr' title="French">FR</a>
                    </li>
                    <li>
                        <a href='/nl' title="Netherlands">NL</a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default RtlSidebar;