import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, MenuHandler, MenuItem, MenuList } from '@material-tailwind/react';
import Logo from '../../assets/Common/main_logo.png';
import MobileNav from './MobileNav';

const activeStyle = {
  color: '#81DAF5',
  fontWeight: '700',
  textDecoration: 'underline',
  textDecorationThickness: '4px',
  textUnderlinePosition: 'under',
  textUnderlineOffset: '23px',
};

const PublicNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isDropDownActive = ['/history', '/sooprint', '/mail', '/marazon', '/chip', '/medal', '/photowall'].includes(location.pathname);

  return (
    <div>
      <div className="bg-[#0B2161] flex h-full items-center relative z-20">
        <div className="z-10 ml-11">
          <Link to="/">
            <img
              src={Logo}
              alt="Logo"
              className="object-contain"
              style={{ width: '200px', height: '80px', minWidth: '200px', minHeight: '80px', maxWidth: '200px', maxHeight: '80px' }}
            />
          </Link>
        </div>
        <div className='flex justify-end w-full mr-3 dt:hidden'>
          <MobileNav/>
        </div>
        
        <div className="flex justify-center gap-20 w-full ph:hidden absolute">
          <Menu open={isMenuOpen} handler={toggleMenu}>
            <MenuHandler>
              <div
                className="font-bold text-xl text-white cursor-pointer w-32"
                style={isDropDownActive ? activeStyle : undefined}
                onClick={toggleMenu}
              >
                올댓 마라톤
              </div>
            </MenuHandler>
            <MenuList className="m-4 z-10">
              <NavLink to="/history">
                <MenuItem>
                  히스토리
                </MenuItem>
              </NavLink>
              <NavLink to="/sooprint">
                <MenuItem>
                  SOO 프린트
                </MenuItem>
              </NavLink>
              <NavLink to="/mail">
                <MenuItem>
                  마라톤 메일
                </MenuItem>
              </NavLink>
              <NavLink to="/marazon">
                <MenuItem>
                  마라존
                </MenuItem>
              </NavLink>
              <NavLink to="/chip">
                <MenuItem>
                  침 착용법
                </MenuItem>
              </NavLink>
              <NavLink to="/medal">
                <MenuItem>
                  메달각인
                </MenuItem>
              </NavLink>
              <NavLink to="/photowall">
                <MenuItem>
                  전광판 포토월
                </MenuItem>
              </NavLink>
            </MenuList>
          </Menu>
          <NavLink
            to="/schedule"
            className="font-bold text-xl text-white"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            대회 일정
          </NavLink>
          <NavLink
            to="/record"
            className="font-bold text-xl text-white"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            기록 조회
          </NavLink>
          <NavLink
            to="/register"
            className="font-bold text-xl text-white"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            대회 등록
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default PublicNav;
