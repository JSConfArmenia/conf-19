import React, {useState, useRef} from 'react';
import {Link} from "react-router-dom";
import FocusLock from 'react-focus-lock';
import './header.css';
import logo from '../../images/logo.png'
import Burger from './burger';
import Menu from './menu';
import {useOnClickOutside} from '../../hooks';

const Header = () => {
  const initialState = false;
  const [open, setOpen] = useState(initialState);
  const node = useRef();
  const menuId = 'main-menu';

  useOnClickOutside(node, () => setOpen(false));

  return (
        <div>
            <div className={'wrapper'}>
                <div className={'header'}>
                    <div>
                        <Link to={'/'}>
                            <img src={logo} alt="img"/>
                        </Link>
                    </div>

                    <div ref={node}>
                        <FocusLock disabled={!open}>
                            <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
                            <Menu open={open} setOpen={setOpen} id={menuId} />
                        </FocusLock>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
