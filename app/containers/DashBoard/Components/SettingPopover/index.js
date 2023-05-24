import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu } from 'antd';
import { IconBox, IconButton, IconCheckBox } from '../CardNotification/styles';
import iconSetting from '../../../../images/icon/icon-setting-gray.svg';
import checkBox from '../../../../images/icon/icon-check_box.svg';
import { Text, TextBold, TitleBody } from '../../styledDashBoard';
import { DropdownCustom, MenuDropdown, MenuItemDropdown } from './styles';
const SettingPopover = () => {
  const { t } = useTranslation();
  const [showBackground /* setShowBackground */] = useState(1);
  const [showCard /* setShowCard */] = useState(4);

  const menu = (
    <MenuDropdown>
      <TextBold>{t('dashboard.backgroundNotification')}</TextBold>
      <Menu.Item key="1" style={{ padding: '5px 0' }}>
        <TitleBody>
          <IconBox>{showBackground === 1 ? <IconCheckBox src={checkBox} /> : null}</IconBox>
          <Text>{t('dashboard.showBackgroundImage')}</Text>
        </TitleBody>
      </Menu.Item>
      <MenuItemDropdown key="2">
        <TitleBody>
          <IconBox>{showBackground === 2 ? <IconCheckBox src={checkBox} /> : null}</IconBox>
          <Text>{t('dashboard.showBackgroundColor')}</Text>
        </TitleBody>
      </MenuItemDropdown>
      <MenuItemDropdown key="3">
        <TitleBody>
          <IconBox>{showBackground === 3 ? <IconCheckBox src={checkBox} /> : null}</IconBox>
          <Text>{t('dashboard.showBackgroundWhite')}</Text>
        </TitleBody>
      </MenuItemDropdown>
      <TextBold>{t('dashboard.hiddenNotification')}</TextBold>
      <MenuItemDropdown key="4">
        <TitleBody>
          <IconBox>{showCard === 4 ? <IconCheckBox src={checkBox} /> : null}</IconBox>
          <Text>{t('dashboard.default')}</Text>
        </TitleBody>
      </MenuItemDropdown>
      <MenuItemDropdown key="5">
        <TitleBody>
          <IconBox>{showCard === 5 ? <IconCheckBox src={checkBox} /> : null}</IconBox>
          <Text>{t('dashboard.handWork')}</Text>
        </TitleBody>
      </MenuItemDropdown>
    </MenuDropdown>
  );
  return (
    <DropdownCustom overlay={menu} trigger={['click']}>
      <IconButton src={iconSetting} />
    </DropdownCustom>
  );
};
export default SettingPopover;
