/**
 * ...
 */

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { Form, Row, Tooltip } from 'antd';
import ReCAPTCHA from 'react-google-recaptcha';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import FlInput from '../../res/components/FloatingLabel/Input';
import {
  BodyContent,
  ContentCenter,
  ForgotPassTitle,
  FormLogin,
  HeaderBar,
  IconHelper,
  InputHelper,
  LoginStyled,
  LoginWrapper,
  NotAccountView,
  OrderedLink,
  SubTitle,
  SubTitleLayout,
  Title,
  TitleLogin,
} from './stylesLogin';
import * as actions from './actionsLogin';
import * as selectors from './selectorsLogin';
import { useInjectSaga } from '../../utils/injectSaga';
import { useInjectReducer } from '../../utils/injectReducer';
import reducer from './reducerLogin';
import saga from './sagaLogin';
import Button from '../../res/components/Button';
import iconCheck from '../../images/iconCheckWhite.svg';
import logo from '../../images/logo.svg';
import QrCode from '../../res/components/QrCode';
import Notice from '../../res/components/Notice';
import { COOKIES, PATH_ROLE_GROUP, PATH_ROOT, REDUX_KEY, STORAGE } from '../../utils/constants';
import { LINK_CONTACT, LINK_GUIDE, LINK_INTRODUCE, LINK_ORDERED } from './constantsLogin';
import ForgotPassword from './components/ForgotPassword';

const key = REDUX_KEY.login;
const Login = () => {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  const { t } = useTranslation();
  const history = useHistory();
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const [isShowForgotPassword, setIsShowForgotPassword] = useState(false);
  const loading = useSelector(selectors.selectLoading());
  const [recapcha, setRecapcha] = useState('');

  const onFinish = values => {
    const body = {
      username: values.username,
      password: values.password,
      recaptchaResponse: recapcha ? recapcha.secretKey : '',
    };
    dispatch(
      actions.login(body, res => {
        if (res.status === -2) {
          setRecapcha({
            recaptchaSitekey: res.object.recaptchaSitekey,
          });
          return;
        }
        if (res.status === 0) {
          Cookies.set(COOKIES.accessToken, res.object.accessToken);
          Cookies.set(COOKIES.refreshToken, res.object.refreshToken);
          localStorage.setItem(STORAGE.userInfo, JSON.stringify(res.object));
          const path = res.object.isSuperAdmin ? PATH_ROLE_GROUP : PATH_ROOT;
          history.push(path);
          Notice({ msg: t('login.msgLoginSuccess') });
        }
        setRecapcha(null);
      }),
    );
  };

  return (
    <LoginStyled>
      <LoginWrapper>
        <HeaderBar>
          <img height="80%" alt="" src={logo} />
          <Row>
            <a className="btn" target="_blank" href={LINK_INTRODUCE}>
              {t('login.introduce')}
            </a>

            <a className="btn" target="_blank" href={LINK_GUIDE}>
              {t('login.guide')}
            </a>

            <a className="btn" target="_blank" href={LINK_ORDERED}>
              {t('login.ordered')}
            </a>
            <a className="btn" target="_blank" href={LINK_CONTACT}>
              {t('login.contact')}
            </a>
          </Row>
        </HeaderBar>

        <BodyContent>
          <ContentCenter style={{ marginRight: 130 }}>
            <Title>{t('login.title')}</Title>
            <SubTitleLayout>
              <img alt="" src={iconCheck} />
              <SubTitle>{t('login.subTitle1')}</SubTitle>
            </SubTitleLayout>
            <SubTitleLayout>
              <img alt="" src={iconCheck} />
              <SubTitle>{t('login.subTitle2')}</SubTitle>
            </SubTitleLayout>
            <QrCode />
          </ContentCenter>

          <ContentCenter style={{ marginTop: 50 }}>
            <FormLogin>
              <TitleLogin>{t('login.login')}</TitleLogin>
              <Form
                name="login-form"
                form={form}
                initialValues={{
                  remember: false,
                }}
                onFinish={onFinish}
              >
                <InputHelper>
                  <Form.Item
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: t('login.textRequireUsername'),
                      },
                    ]}
                  >
                    <FlInput style={{ width: 300 }} label={t('login.labelUsername')} name="Username" isRequired autoFocus />
                  </Form.Item>
                  <Tooltip placement="topRight" overlayStyle={{ maxWidth: 600 }} title={t('login.tooltipUsername')}>
                    <IconHelper>{/* <SvgIcon name="helper" /> */}</IconHelper>
                  </Tooltip>
                </InputHelper>
                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: t('login.textRequirePassword'),
                    },
                  ]}
                >
                  <FlInput style={{ width: 300, marginTop: '8px' }} label={t('login.labelPassword')} isPass isRequired />
                </Form.Item>
                {recapcha.recaptchaSitekey && (
                  <ReCAPTCHA
                    className="mb-4"
                    hl="vi"
                    sitekey={recapcha.recaptchaSitekey}
                    onChange={secretKey =>
                      setRecapcha({
                        recaptchaSitekey: recapcha.recaptchaSitekey,
                        secretKey,
                      })
                    }
                  />
                )}
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ width: 300 }}
                  loading={loading}
                  disabled={recapcha && !recapcha.secretKey}
                  allowDisabled={recapcha && !recapcha.secretKey}
                >
                  {t('login.login')}
                </Button>
                <ForgotPassTitle onClick={() => setIsShowForgotPassword(true)}>{t('login.forgotPassword')}</ForgotPassTitle>
                <NotAccountView>
                  {t('login.notAccount')}{' '}
                  <OrderedLink target="_blank" href="https://econtract.vn/dat-mua">
                    {t('login.order')}
                  </OrderedLink>
                </NotAccountView>
              </Form>
            </FormLogin>
          </ContentCenter>
        </BodyContent>
      </LoginWrapper>
      {isShowForgotPassword ? <ForgotPassword onClose={() => setIsShowForgotPassword(false)} /> : null}

      {/* <ModalUnit */}
      {/*  unitDefault={unitDefault} */}
      {/*  onCancel={() => setData([])} */}
      {/*  isOpen={!!data?.length} */}
      {/*  data={data} */}
      {/*  onLogin={onLogin} */}
      {/* /> */}
      {/* <ModalLoginUSB isOpen={loginUSB} onCancel={() => setLoginUSB(false)} /> */}
      {/* <ModalNotice */}
      {/*  setOpenModal={setOpenModal} */}
      {/*  setRecapcha={setRecapcha} */}
      {/*  setUser={setUser} */}
      {/*  setUnitDefault={setUnitDefault} */}
      {/*  setData={setData} */}
      {/*  isOpen={openModal} */}
      {/*  tabSelect={tabSelect} */}
      {/*  onCancel={() => setOpenModal(false)} */}
      {/* /> */}
      {/* {!!openChangePass?.visible && ( */}
      {/*  <ChangePassWord */}
      {/*    visible={!!openChangePass?.visible} */}
      {/*    onCancel={onClearStore} */}
      {/*    user={openChangePass} */}
      {/*    onOk={onChangePassSuccess} */}
      {/*  /> */}
      {/* )} */}
      {/* {!!openNoticeChangePass && ( */}
      {/*  <ModalNoticeChangePass */}
      {/*    visible={openNoticeChangePass} */}
      {/*    onCancel={onClearStore} */}
      {/*    onOk={() => { */}
      {/*      setNoticeOpenChangePass(false); */}
      {/*      setOpenChangePass(e => ({ ...e, visible: true })); */}
      {/*    }} */}
      {/*  /> */}
      {/* )} */}
    </LoginStyled>
  );
};

export default Login;
