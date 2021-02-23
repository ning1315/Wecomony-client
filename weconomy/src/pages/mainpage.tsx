import * as React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { successLogin } from '../store/actions/userActions';
import useMedia from '../customhooks/useMedia';
import LoginModal from '../component/loginmodal';

const MainPage: React.FC = () => {
  const { isMobile } = useMedia();

  return (
    <div className="mainContainer">
      <LoginModal></LoginModal>
      <div className="section1">
        <div className="textBox">
          {isMobile ? (
            <h1 className="MainTitleLogo animate__animated animate__fadeInDown">
              Weconomy
            </h1>
          ) : null}
          <h1 className="MainTitle animate__animated animate__fadeInDown">
            아직도 <span className="textPoint">가계부</span>가 멀게만
            느껴지시나요?
          </h1>
          <span className="MainDesc animate__animated animate__fadeInDown">
            Weconomy와 함께 편리한 <span className="textPoint">가계부</span>를
            작성해보세요!
          </span>
          {isMobile ? (
            <button className="mainMobileBtn">Weconomy 시작하기</button>
          ) : (
            <button className="mainTopBtn">Weconomy 시작하기</button>
          )}
        </div>
        <div className="imageBox">
          <img
            className="caculator"
            src="https://ifh.cc/g/4963pQ.jpg"
            alt="계산기"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
