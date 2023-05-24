import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import {
  AvatarView,
  ButtonChangePasswordLayout,
  ButtonClose,
  ButtonEditAvatarLayout,
  ButtonLogoutLayout,
  ButtonUploadAvatar,
  Container,
  FullNameView,
  IconUploadView,
  ImgIconEditAvatar,
  PositionAccount,
  TextButtonView,
  TitleView,
  UserNameView,
} from './style';
import defaultAvatar from '../../../images/avatarDefault.svg';
import Button from '../../../res/components/Button';
import ChangePassword from '../../App/Component/ChangePassword';
import IconClose from '../../../images/icon/icon-close.svg';
import IconTakePhoto from '../../../images/icon/icon-camera.svg';
import IconEditAvatar from '../../../images/icon/icon-edit-avatar.svg';

const InformationAccount = ({ accountInfo, onClickChangePassword, onClickSignOut, onClosePopover }) => {
  const { t } = useTranslation();
  const [visibleEditAvatar, setVisibleEditAvatar] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <Container>
      {visibleEditAvatar ? (
        <div>
          <TitleView>{t('common.imgAvatar')}</TitleView>
          <ButtonClose
            onClick={() => {
              setVisibleEditAvatar(false);
              onClosePopover();
            }}
          >
            <img alt="" src={IconClose} />
          </ButtonClose>
          <AvatarView style={{ marginTop: '47px' }}>
            <img width={118} height={116} alt="" src={defaultAvatar} />
          </AvatarView>
          <ButtonChangePasswordLayout style={{ marginTop: '67px' }}>
            <Button btnType="bg-white">
              <TextButtonView>{t('common.deleteAvatar')}</TextButtonView>
            </Button>
          </ButtonChangePasswordLayout>
          <ButtonLogoutLayout>
            <Button type="primary">
              <ButtonEditAvatarLayout>
                <span>{t('common.edit')}</span>
                <ImgIconEditAvatar src={IconEditAvatar} />
              </ButtonEditAvatarLayout>
            </Button>
          </ButtonLogoutLayout>
        </div>
      ) : (
        <div>
          <TitleView>{t('common.accountManagement')}</TitleView>
          <ButtonClose onClick={() => onClosePopover()}>
            <img alt="" src={IconClose} />
          </ButtonClose>
          <AvatarView onClick={() => setVisibleEditAvatar(true)}>
            <img width={118} height={116} alt="" src={defaultAvatar} />
            <ButtonUploadAvatar>
              <IconUploadView src={IconTakePhoto} />
            </ButtonUploadAvatar>
          </AvatarView>
          <UserNameView>{accountInfo.username}</UserNameView>
          <FullNameView>{accountInfo.fullName}</FullNameView>
          <PositionAccount>
            ({accountInfo.positionName} - {accountInfo.departmentName})
          </PositionAccount>
          <ButtonChangePasswordLayout>
            <Button
              btnType="bg-white"
              onClick={() => {
                setOpen(true);
                onClickChangePassword();
              }}
            >
              <TextButtonView>{t('common.changePassword')}</TextButtonView>
            </Button>
          </ButtonChangePasswordLayout>
          <ButtonLogoutLayout>
            <Button type="primary" onClick={onClickSignOut}>
              <TextButtonView>{t('common.logout')}</TextButtonView>
            </Button>
          </ButtonLogoutLayout>
        </div>
      )}
      {open && (
        <ChangePassword
          onClose={() => {
            setOpen(false);
          }}
        />
      )}
    </Container>
  );
};

InformationAccount.propTypes = {
  accountInfo: PropTypes.object,
  onClickChangePassword: PropTypes.func,
  onClickSignOut: PropTypes.func,
  onClosePopover: PropTypes.func,
};

export default InformationAccount;
