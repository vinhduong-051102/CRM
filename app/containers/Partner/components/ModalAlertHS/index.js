import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import Button from '../../../../res/components/Button';
import { ContainerLoading, Icon } from '../popupGetInfoMST/style';
import iconAlert from '../../../../images/icon/iconAlert.svg';
import ErrorMessage from '../../../../res/components/ErrorMessage';
import ModalAlert from '../../../../res/components/ModalAlert';

const ModalAlertHS = ({ onClose }) => {
  const { t } = useTranslation();
  return (
    <ModalAlert
      width={550}
      onClickCancel={() => {
        onClose();
      }}
      isCustomFooter
      buttonCustom={
        <Button
          onClick={() => {
            onClose();
          }}
        >
          {t('common.closeModal')}
        </Button>
      }
    >
      <ContainerLoading style={{ paddingTop: 35 }}>
        <Icon src={iconAlert} alt="" />
        <ErrorMessage Message={t('profile.emptyListMHS')} />
        <div>{t('profile.contactAD')}</div>
      </ContainerLoading>
    </ModalAlert>
  );
};

ModalAlertHS.propTypes = {
  onClose: PropTypes.func,
};

export default ModalAlertHS;
