import React from 'react';
import { t } from 'i18next';
import iconAddNewDepartment from '../../../../images/IconAddOnline.svg';
import iconUpload from '../../../../images/iconUpLoad.svg';

import { LineDiv, Wrapper, Icon, Content } from './styled';

const ContentPopOver = () => (
  <Wrapper>
    <LineDiv>
      <Icon
        src={iconAddNewDepartment}
        alt=""
        onClick={() => {
          console.log('add online');
        }}
      />
      <Content>{t('system.addDepartmentOnline')}</Content>
    </LineDiv>
    <LineDiv style={{ marginTop: 10 }}>
      <Icon
        src={iconUpload}
        alt=""
        onClick={() => {
          console.log('add excel');
        }}
      />
      <Content>{t('system.addDepartmentByExcelFile')}</Content>
    </LineDiv>
  </Wrapper>
);

export default ContentPopOver;
