/**
 * ...
 */

import styled from 'styled-components';
import loginBackground from '../../images/backgroundLogin.png';

export const CheckBoxWrapper = styled.div`
  .ant-checkbox-wrapper .ant-checkbox .ant-checkbox-inner {
    width: 18px;
    height: 18px;
    border: 2px solid #323232;
    border-radius: 0;
  }
`;

export const CustomSelectBox = styled.div`
  .ant-form-item {
    margin-bottom: 0 !important;
  }
`;

export const MobileLoginStyled = styled.div`
  float: bottom;
`;

export const LoginStyled = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${loginBackground});
  background-repeat: no-repeat;
  background-size: 100vw 100vh;

  .forgot-pass {
    text-align: center;
    margin-top: 20px;
    color: #08b7dd;
    cursor: pointer;
  }
  .ant-form-item-explain-error {
    margin-bottom: 0 !important;
  }
  .input-helper {
    display: flex;
    position: relative;
  }
  .icon-helper {
    position: absolute;
    right: -30px;
    top: 12px;
  }
  .not-acc {
    text-align: center;
    color: #626262;
    margin-top: 20px;
  }

  .ant-menu-submenu-popup {
    left: 606px !important;
  }

  .login-wrapper {
    width: 100%;
    height: 100%;
    background: rgba(9, 44, 52, 0.4);
    padding: 20px 60px 20px 60px;
    display: flex;
    flex-direction: column;
  }
  .header-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .btn {
    color: #ffffff;
  }

  .body-content {
    display: flex;
    flex: 1 1 auto;
    justify-content: flex-end;
    color: white;
  }
  .font-tahoma {
  }
  .content-center {
    display: flex;
    align-items: center;
    margin-top: 160px;
    flex-direction: column;
  }
  .form-login {
    background: white;
    padding: 80px 50px;
    border-radius: 12px;
  }

  .login-text {
    text-align: center;
    color: #08b7dd;
    font-weight: 600;
    font-size: 28px;
    margin-bottom: 50px;
  }
`;

export const LoginWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(9, 44, 52, 0.4);
  padding: 20px 60px 20px 60px;
  display: flex;
  flex-direction: column;
`;

export const HeaderBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BodyContent = styled.div`
  display: flex;
  flex: 1 1 auto;
  justify-content: flex-end;
  color: white;
`;

export const ContentCenter = styled.div`
  display: flex;
  align-items: center;
  margin-top: 160px;
  flex-direction: column;
`;

export const Title = styled.div`
  font-size: 36px;
  line-height: 49px;
`;

export const SubTitleLayout = styled.div`
  display: flex !important;
  align-items: center !important;
  margin-top: 16px;
`;

export const SubTitle = styled.div`
  font-size: 26px;
  margin-left: 10px;
  text-align: center;
  line-height: 35px;
`;

export const FormLogin = styled.div`
  background: white;
  padding: 80px 50px;
  border-radius: 12px;
`;

export const TitleLogin = styled.div`
  text-align: center;
  color: ${props => props.theme.primaryColor};
  font-weight: 600;
  font-size: 28px;
  margin-bottom: 50px;
  line-height: 38px;
`;

export const InputHelper = styled.div`
  display: flex;
  position: relative;
`;

export const IconHelper = styled.div`
  position: absolute;
  right: -30px;
  top: 12px;
`;

export const ForgotPassTitle = styled.div`
  text-align: center;
  color: ${props => props.theme.primaryColor};
  cursor: pointer;
  margin-top: 88px;
`;

export const NotAccountView = styled.p`
  text-align: center;
  color: #626262;
  margin-top: 20px;
`;

export const OrderedLink = styled.a`
  color: ${props => props.theme.primaryColor};
`;
