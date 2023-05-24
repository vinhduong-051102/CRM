/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { useTranslation } from 'react-i18next';
import Login from '../Login/LoadableLogin';
import Partner from '../Partner/LoadablePartner';
import Profile from '../Profile/LoadableProfile';
import System from '../System/LoadableSystem';
import Position from '../System/components/PositionManagement';
import Role from '../System/components/RoleManagement';
import UserManagement from '../System/components/User';
import ErrorPage from '../../res/components/ErrorPage';

import GlobalStyle from '../../global-styles';
import { defaultTheme } from '../../res/themes/defaultTheme';
import { PATH_DASH_BOARD, PATH_LOGIN, PATH_PARTNER, PATH_PROFILE, PATH_ROOT, PATH_SYSTEM } from '../../utils/constants';
import LayoutNotLogin from '../../layout/LayoutNotLogin';
import LayoutLogged from '../../layout/LayoutLogged';
import DashBoard from '../DashBoard/LoadableDashBoard';

export default function App() {
  const { t } = useTranslation();
  return (
    <ThemeProvider theme={defaultTheme}>
      <>
        <Switch>
          <LayoutNotLogin exact path={PATH_ROOT} component={Login} />
          <LayoutNotLogin exact path={PATH_LOGIN} component={Login} />
          <LayoutLogged
            exact
            path={PATH_PARTNER}
            component={Partner}
            showSearch
            placeholderSearch={t('partner.placeholderSearch')}
            pathSuggestSearch="/Partner/SuggestSearch"
          />
          <LayoutLogged
            exact
            path={PATH_PROFILE}
            component={Profile}
            showSearch
            placeholderSearch={t('profile.placeholderSearch')}
            pathSuggestSearch="/ProfileExtension/SuggestSearch"
          />
          <LayoutLogged
            exact
            path={PATH_SYSTEM}
            component={System}
            showSearch
            placeholderSearch={t('system.placeholderSearch')}
            // pathSuggestSearch="/ProfileExtension/SuggestSearch"
          />

          <LayoutLogged
            exact
            path="/position"
            component={Position}
            showSearch
            placeholderSearch={t('system.placeholderSearch')}
            // pathSuggestSearch="/ProfileExtension/SuggestSearch"
          />

          <LayoutLogged
            exact
            path="/role"
            component={Role}
            showSearch
            placeholderSearch={t('system.placeholderSearch')}
            // pathSuggestSearch="/ProfileExtension/SuggestSearch"
          />

          <LayoutLogged
            exact
            path="/user"
            component={UserManagement}
            showSearch
            placeholderSearch={t('system.placeholderSearch')}
            // pathSuggestSearch="/ProfileExtension/SuggestSearch"
          />
          <LayoutLogged
            exact
            path={PATH_DASH_BOARD}
            component={DashBoard}
            showSearch
            placeholderSearch={t('system.placeholderSearch')}
            // pathSuggestSearch="/ProfileExtension/SuggestSearch"
          />
          <Route path="" render={() => <ErrorPage code="404" />} />
        </Switch>
        <GlobalStyle />
      </>
    </ThemeProvider>
  );
}
