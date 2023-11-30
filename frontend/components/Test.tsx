function Test(){
    return(
        <>
            <nav id="menu" className="mm-menu mm-menu--offcanvas mm-menu--position-left-front mm-menu--theme-light mm-menu--opened" aria-label="Menu" aria-modal="true" role="dialog">
                
                <div className="mm-panels">
                    <div className="mm-panel mm-panel--noanimation mm-panel--opened" id="mm-1"><div className="mm-navbar"><a className="mm-navbar__title" tabIndex={1} aria-hidden="true"><span className="">Menu</span></a></div><ul className="mm-listview">
                        <li className="mm-listitem" >
                            <a className="mm-btn mm-btn--next mm-listitem__btn mm-listitem__text" aria-label="Open submenu" href="#mm-3">Home</a>
                        </li>
                        <li className="mm-listitem" >
                            <a className="mm-btn mm-btn--next mm-listitem__btn mm-listitem__text" aria-label="Open submenu" href="#mm-5">Browse Jobs</a>
                        </li>
                        <li className="mm-listitem">
                            <a className="mm-btn mm-btn--next mm-listitem__btn mm-listitem__text" aria-label="Open submenu" href="#mm-13">Users</a>
                        </li>
                        <li className="mm-listitem">
                            <a className="mm-btn mm-btn--next mm-listitem__btn mm-listitem__text" aria-label="Open submenu" href="#mm-21">Pages</a>
                        </li>
                        <li className="mm-listitem" >
                            <a className="mm-btn mm-btn--next mm-listitem__btn mm-listitem__text" aria-label="Open submenu" href="#mm-27">Blog</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Test