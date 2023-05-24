import React from 'react';
import PropTypes from 'prop-types';
import { t } from 'i18next';
import { ContainerLoading, Icon } from '../popupGetInfoMST/style';
import iconAlert from '../../../../images/icon/iconAlert.svg';
import ErrorMessage from '../../../../res/components/ErrorMessage';
import { ButtonClose } from '../../../App/Component/ChangePassword/style';
import Button from '../../../../res/components/Button';
import { ModalAlertCustom, DivFooter } from './style';

const ModalEmptyLSH = ({ onClose, width }) => (
  <ModalAlertCustom
    visible
    centered
    width={width}
    onClickCancel={() => {
      onClose();
    }}
    footer={null}
  >
    <ContainerLoading style={{ paddingTop: 35 }}>
      <Icon src={iconAlert} alt="" />
      <ErrorMessage Message={t('profile.emptyListLHS')} />
      <div>{t('profile.addNewLHS')}</div>
      <DivFooter>
        <ButtonClose
          onClick={() => {
            onClose();
          }}
        >
          {t('common.closeModal')}
        </ButtonClose>

        <Button
          onClick={() => {
            onClose();
          }}
        >
          {t('profile.addNewTypeHS')}
        </Button>
      </DivFooter>
    </ContainerLoading>
  </ModalAlertCustom>
);

ModalEmptyLSH.propTypes = {
  width: PropTypes.number,
  onClose: PropTypes.func,
};

export default ModalEmptyLSH;
