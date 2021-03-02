import React, { ReactEventHandler } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RootState } from '../store/reducers';
import {
  loginModalOpen,
  requestLoginModalOpen,
} from '../store/actions/modalActions';
import { logoutUser } from '../store/actions/userActions';
import MobileSidebar from '../piececompo/MobileSidebar';
import removeDropDown from '../util/Nav/dropDown';
import NavToggleBtnSet from '../util/Nav/NavToggleBtnSet';
import onClickProfile from '../util/Nav/onClickProfile';

const Nav: React.FC = () => {
  window.onclick = removeDropDown;
  const history = useHistory();
  const dispatch = useDispatch();
  const openLoginModal = () => {
    dispatch(loginModalOpen());
  };
  const isLogin = useSelector((state: RootState) => state.userStatus.isLogin);

  const toAccountPage = () => {
    if (isLogin) {
      history.push('/selectaccount');
    } else {
      dispatch(requestLoginModalOpen());
    }
  };

  const toLogOutUser = () => {
    dispatch(logoutUser());
    history.push('/');
  };

  const userImage = useSelector(
    (state: RootState) => state.userStatus.userData?.thumbnail,
  );

  return (
    <nav className="navbar">
      <div
        onClick={() => {
          history.push('/mainpage');
        }}
        className="navbar__logo"
      >
        Weconomy
      </div>

      <ul className="navbar__menu">
        <li
          onClick={() => history.push('/createAccountPage')}
          className="navBtns"
        >
          가계부 작성하기
        </li>
        <li onClick={toAccountPage} className="navBtns">
          내 가계부
        </li>
        <li onClick={() => history.push('/helpdesk')} className="navBtns">
          문의하기
        </li>
      </ul>

      <div className="navbar__handleLogin">
        {isLogin ? (
          <>
            <img
              className="userProfileNav"
              src={userImage}
              alt="유저프로필"
              onClick={onClickProfile}
            ></img>
            <div className="profileDropDown">
              <button onClick={toLogOutUser} className="btnInProfileDrop">
                로그아웃
              </button>
              <button className="btnInProfileDrop">회원탈퇴</button>
            </div>
          </>
        ) : (
          <button onClick={openLoginModal} className="navbar__loginBtn">
            로그인
          </button>
        )}
      </div>
      <MobileSidebar></MobileSidebar>

      <div onClick={NavToggleBtnSet} className="navbar__toogleBtn">
        <i className="fas fa-bars"></i>
      </div>
    </nav>
  );
};

export default Nav;
