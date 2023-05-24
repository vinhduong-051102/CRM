import React, { useEffect, useState } from 'react';
import { Redirect, Route, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';
import { useTranslation } from 'react-i18next';
import { Layout } from 'antd';
import { isEmpty, get } from 'lodash';
import { useDispatch } from 'react-redux';
import { useInjectReducer } from '../../utils/injectReducer';
import { useInjectSaga } from '../../utils/injectSaga';
import {
  COOKIES,
  MENU_DASH_BOARD_PERMISSION,
  MENU_PARTNER_PERMISSION,
  MENU_PROFILE_PERMISSION,
  MENU_SYSTEM_PERMISSION,
  PATH_DASH_BOARD,
  PATH_LOGIN,
  PATH_PARTNER,
  PATH_PROFILE,
  PATH_SYSTEM,
  PATH_USER,
  PATH_POSITION,
  PATH_ROLE,
  REDUX_KEY,
  STORAGE,
  SUB_MENU_DEPARTMENT,
  SUB_MENU_POSITION,
  SUB_MENU_ROLE,
  SUB_MENU_USER,
} from '../../utils/constants';
import iconMenuPartner from '../../images/menuPartner.svg';
import iconMenuProfile from '../../images/menuProfile.svg';
import iconMenuSystem from '../../images/menuSystem.svg';
import iconMenuDashBoard from '../../images/menuDashboard.svg';
import Sidebar from '../../res/components/Sidebar';
import ErrorPage from '../../res/components/ErrorPage';
import Header from '../../res/components/Header';
import InformationAccount from '../../containers/Account/InformationAccount';
import avatarDefault from '../../images/avatarDefault.svg';
import iconMenu from '../../images/iconMenu.svg';
import logo from '../../images/logoLogged.svg';

import reducer from '../../containers/App/reducer';
import saga from '../../containers/App/saga';
import * as actions from '../../containers/App/actions';
import { getMsgClient, logOut } from '../../res/commonFunction';
import { FullNameView, PositionAccount, UserNameView } from '../../containers/Account/InformationAccount/style';
import { AvatarHoverLayout } from './styles';
const { Content } = Layout;

const LayoutLogged = ({ /* path, */ component: Component, id, showSearch, placeholderSearch, pathSuggestSearch }) => {
  const key = REDUX_KEY.app;
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  const { t } = useTranslation();
  const history = useHistory();
  const dispatch = useDispatch();

  const { pathname } = history.location;
  const token = Cookies.get(COOKIES.accessToken);
  const [menuExpand, setMenuExpand] = useState(true);
  const [openPopoverAccount, setOpenPopoverAccount] = useState(false);
  const [isShowSearch, setIsShowSearch] = useState(showSearch);
  const [easyTextSearch, setEasyTextSearch] = useState('');
  const [categoryId, setCategoryId] = useState(0);
  const [objectId, setObjectId] = useState(0);
  const permission = [PATH_PARTNER];

  useEffect(() => {
    if (token) {
      if (!localStorage.getItem(STORAGE.expandMenu)) {
        setMenuExpand(true);
      } else {
        setMenuExpand(localStorage.getItem(STORAGE.expandMenu) === '1');
      }
    }
    setIsShowSearch(showSearch);
  }, [Component]);

  if (!token) return <Redirect to={PATH_LOGIN} />;

  const MENU_DATA = [
    {
      key: MENU_DASH_BOARD_PERMISSION,
      path: PATH_DASH_BOARD,
      icon: iconMenuDashBoard,
      label: t('common.dashBoard'),
    },
    {
      key: MENU_PARTNER_PERMISSION,
      path: PATH_PARTNER,
      icon: iconMenuPartner,
      label: t('common.partnerManagement'),
    },
    {
      key: MENU_PROFILE_PERMISSION,
      path: PATH_PROFILE,
      icon: iconMenuProfile,
      label: t('common.profileManagement'),
    },
    {
      key: MENU_SYSTEM_PERMISSION,
      icon: iconMenuSystem,
      label: t('common.profileSystem'),
      child: [
        {
          key: SUB_MENU_DEPARTMENT,
          path: PATH_SYSTEM,
          icon: iconMenuSystem,
          label: t('system.departmentManagement'),
        },
        {
          key: SUB_MENU_POSITION,
          icon: iconMenuSystem,
          path: PATH_POSITION,
          label: t('system.positionManagement'),
        },
        {
          key: SUB_MENU_ROLE,
          icon: iconMenuSystem,
          path: PATH_ROLE,
          label: t('system.rollManagement'),
        },
        {
          key: SUB_MENU_USER,
          path: PATH_USER,
          icon: iconMenuSystem,
          label: t('system.userManagement'),
        },
      ],
    },
  ];

  const PERMISSION_MENU = [
    MENU_DASH_BOARD_PERMISSION,
    MENU_PARTNER_PERMISSION,
    MENU_PROFILE_PERMISSION,
    MENU_SYSTEM_PERMISSION,
    SUB_MENU_DEPARTMENT,
    SUB_MENU_POSITION,
    SUB_MENU_ROLE,
    SUB_MENU_USER,
  ];

  const ACCOUNT_INFO = {
    image: avatarDefault,
    username: JSON.parse(localStorage.getItem(STORAGE.userInfo)).username,
    fullName: JSON.parse(localStorage.getItem(STORAGE.userInfo)).fullName,
    departmentName: JSON.parse(localStorage.getItem(STORAGE.userInfo)).departmentName,
    positionName: JSON.parse(localStorage.getItem(STORAGE.userInfo)).positionName,
  };

  const onLogout = () => {
    setOpenPopoverAccount(false);
    dispatch(
      actions.logout(() => {
        logOut();
      }),
    );
  };

  const onChangePassword = () => {
    setOpenPopoverAccount(false);
  };

  const onClickMenu = () => {
    setMenuExpand(!menuExpand);
    localStorage.setItem(STORAGE.expandMenu, !menuExpand ? '1' : '0');
  };

  const onPressEnter = e => {
    setEasyTextSearch(e.target.value);
    setCategoryId(0);
    setObjectId(0);
  };

  const onSelectSearch = (value, option) => {
    if (option.categoryid !== 0 && option.objectid === 0) {
      setEasyTextSearch(option.text_search);
      setCategoryId(option.categoryid);
      setObjectId(option.categoryid);
    } else {
      setEasyTextSearch(getMsgClient(value || ''));
      setCategoryId(option.categoryid);
      setObjectId(option.objectid);
    }
  };

  const contentHoverAvatar = () => (
    <AvatarHoverLayout>
      <UserNameView style={{ marginTop: '0px' }}>{ACCOUNT_INFO.username}</UserNameView>
      <FullNameView>{ACCOUNT_INFO.fullName}</FullNameView>
      <PositionAccount>
        ({ACCOUNT_INFO.positionName} - {ACCOUNT_INFO.departmentName})
      </PositionAccount>
    </AvatarHoverLayout>
  );
  const onClosePopover = () => {
    setOpenPopoverAccount(false);
  };
  return (
    <Route
      render={() =>
        permission.includes(id) || !id ? (
          <Layout style={{ height: '100%' }}>
            <Header
              iconMenu={iconMenu}
              logo={logo}
              userData={ACCOUNT_INFO}
              onClickMenu={onClickMenu}
              onClickLogo={() => history.push('/')}
              content={
                <InformationAccount
                  onClickChangePassword={onChangePassword}
                  accountInfo={ACCOUNT_INFO}
                  onClickSignOut={onLogout}
                  onClosePopover={onClosePopover}
                />
              }
              visible={openPopoverAccount}
              onVisibleChange={visible => setOpenPopoverAccount(visible)}
              showSearch={isShowSearch}
              placeholderSearch={placeholderSearch}
              pathSuggestSearch={pathSuggestSearch}
              searchSimple={{
                isSearchSimple: false,
                value: easyTextSearch,
                onChange: e => {
                  if (isEmpty(get(e, 'target.value', '').trim())) {
                    setEasyTextSearch('');
                    setCategoryId(0);
                    setObjectId(0);
                  }
                },
              }}
              onPressEnter={onPressEnter}
              onSelectSearch={onSelectSearch}
              onClickFilterBtn={() => setIsShowSearch(false)}
              contentHoverAvatar={contentHoverAvatar}
            />
            <Layout style={{ backgroundColor: 'white' }}>
              <Sidebar
                isExpand={menuExpand}
                minWidth="64px"
                maxWidth="270px"
                permissionArray={PERMISSION_MENU}
                dataMenu={MENU_DATA}
                pathname={pathname}
                onClickMenu={data => history.push(data.path)}
              />
              <Content>
                <Component
                  textSearch={easyTextSearch}
                  objectId={objectId}
                  categoryId={categoryId}
                  showAdvanceSearch={!isShowSearch}
                  onCloseAdvanceSearch={() => setIsShowSearch(true)}
                />
              </Content>
            </Layout>
          </Layout>
        ) : (
          <ErrorPage code="404" />
        )
      }
    />
  );
};
LayoutLogged.propTypes = {
  // path: PropTypes.string,
  component: PropTypes.node,
  id: PropTypes.string,
  showSearch: PropTypes.bool,
  placeholderSearch: PropTypes.string,
  pathSuggestSearch: PropTypes.string,
};

export default LayoutLogged;
