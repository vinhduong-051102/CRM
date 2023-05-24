import React from 'react';
import PropTypes from 'prop-types';
import iconLoading from '../../../../images/icon/icon-loading.svg';
import iconAlert from '../../../../images/icon/iconAlert.svg';
import { ContainerLoading, Icon, IconLoading, TextAlert } from './style';
import ModalAlert from '../../../../res/components/ModalAlert';

const PopupGetInfoMST = ({ onCancel, isLoading, isAlert, textAlert }) => (
  <>
    {isLoading && (
      <ModalAlert width={500} onClickCancel={onCancel} isCustomFooter isModalLoading>
        <ContainerLoading>
          <IconLoading src={iconLoading} width={100} height={100} alt="" />
        </ContainerLoading>
      </ModalAlert>
    )}
    {isAlert && (
      <ModalAlert width={700} onClickCancel={onCancel} isCustomFooter>
        <ContainerLoading>
          <Icon src={iconAlert} alt="" />
          <TextAlert>
            <div dangerouslySetInnerHTML={{ __html: textAlert }} />
          </TextAlert>
        </ContainerLoading>
      </ModalAlert>
    )}
  </>
);

PopupGetInfoMST.propTypes = {
  onCancel: PropTypes.func,
  isLoading: PropTypes.bool,
  isAlert: PropTypes.bool,
  textAlert: PropTypes.string,
};

export default PopupGetInfoMST;
