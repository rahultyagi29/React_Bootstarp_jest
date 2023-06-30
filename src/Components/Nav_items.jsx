import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
    return (
    
                        <li className={props.listclass}>
                            <a className={props.class} href={props.PageLink}>
                                {props.Pagename}
                            </a>
                    

                        </li>


    );
}

export default Navbar;
