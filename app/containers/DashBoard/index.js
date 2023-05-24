import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { List, Space } from 'antd';
import iconWarning from '../../images/icon/icon-warning.svg';
import { Content, ContentTitle, HeaderLeft, HeaderRight, TitleHeader } from '../../res/commonStyles';
import {
  BodyContent,
  ContainerTable,
  ContentWrappercustom,
  IconDashBoard,
  SelectCustom,
  Text,
  TextBold,
  TextBoldTable,
  TextTitleTable,
  TitleBody,
  TitleTable,
} from './styledDashBoard';
import ButtonCircle from '../../res/components/ButtonCircle';
import CardNotification from './Components/CardNotification';
import { HeaderContent } from './Components/CardNotification/styles';
import imgEfood from '../../images/pexels-ella-olsson-1640777 1.png';
import { CONTENT, DATA_CARD, DEADLINE, STATUS } from './ConstantsDashBoard';
import { defaultTheme } from '../../res/themes/defaultTheme';
import TableDashBoard from './Components/TableDashBoard';
import SettingPopover from './Components/SettingPopover';
import SvgComponent from './Components/icon';

const DashBoard = () => {
  const { t } = useTranslation();
  const [listContact] = useState([]);
  const options = [
    {
      value: 'TienCCT',
      label: 'TienCCT',
    },
    {
      value: 'NV_01',
      label: 'NV_01',
    },
    {
      value: 'NV_02',
      label: 'NV_02',
    },
    {
      value: 'NV_03',
      label: 'NV_03',
    },
    {
      value: 'NV_04',
      label: 'NV_04',
    },
  ];

  const options2 = [
    {
      value: 'Tất cả',
      label: 'Tất cả',
    },
    {
      value: 'Trong Ngày',
      label: 'Trong Ngày',
    },
    {
      value: 'Trong Tuần',
      label: 'Trong Tuần',
    },
  ];
  const columns = [
    {
      title: (
        <TitleTable>
          <TextBoldTable>{t('dashboard.file')}</TextBoldTable>
          <TextTitleTable>
            {t('dashboard.updateFiveM')} <ButtonCircle placement="top" iconName="refreshBlue" enable />
          </TextTitleTable>
        </TitleTable>
      ),
      dataIndex: CONTENT,
      width: '100%',
      children: [
        {
          title: t('common.stt'),
          width: 70,
          align: 'center',
          render: (text, record, index) => <div>{index + 1}</div>,
        },
        {
          title: t('dashboard.content'),
          dataIndex: CONTENT,
          width: '40%',
          render: val => <div>{val}</div>,
        },
        {
          title: t('dashboard.deadLine'),
          dataIndex: DEADLINE,
          width: '40%',
          render: text => <div dangerouslySetInnerHTML={{ __html: text }} />,
        },
        {
          title: t('dashboard.status'),
          dataIndex: STATUS,
          width: '15%',
          render: text => <div dangerouslySetInnerHTML={{ __html: text }} />,
        },
      ],
      render: val => <div>{val}</div>,
    },
  ];

  const columnsCustomer = [
    {
      title: (
        <TitleTable>
          <TextBoldTable>{t('dashboard.contactCustomer')}</TextBoldTable>
          <TextTitleTable>
            {t('dashboard.updateFiveM')} <ButtonCircle placement="top" iconName="refreshBlue" enable />
          </TextTitleTable>
        </TitleTable>
      ),
      dataIndex: CONTENT,
      width: '100%',
      children: [
        {
          title: t('common.stt'),
          width: 70,
          align: 'center',
          render: (text, record, index) => <div>{index + 1}</div>,
        },
        {
          title: t('dashboard.content'),
          dataIndex: CONTENT,
          width: '40%',
          render: val => <div>{val}</div>,
        },
        {
          title: t('dashboard.deadLine'),
          dataIndex: DEADLINE,
          width: '40%',
          render: text => <div dangerouslySetInnerHTML={{ __html: text }} />,
        },
        {
          title: t('dashboard.status'),
          dataIndex: STATUS,
          width: '15%',
          render: text => <div dangerouslySetInnerHTML={{ __html: text }} />,
        },
      ],
      render: val => <div>{val}</div>,
    },
  ];
  const handleChange = value => {
    console.log(`Selected: ${value}`);
  };

  return (
    <Content>
      <ContentWrappercustom>
        <HeaderContent>
          <TitleHeader>
            <HeaderLeft>
              <ContentTitle>
                {t('dashboard.notification')}
                <SettingPopover />
              </ContentTitle>
            </HeaderLeft>
            <HeaderRight>
              <IconDashBoard src={iconWarning} />
              <ButtonCircle placement="top" iconName="blue-circle" enable />
            </HeaderRight>
          </TitleHeader>
          <List
            grid={{
              gutter: 16,
              xs: 1,
              sm: 2,
              md: 3,
              lg: 4,
              xl: 4,
              xxl: 4,
            }}
            dataSource={DATA_CARD}
            renderItem={item => (
              <List.Item>
                <CardNotification
                  imgBackGround={imgEfood}
                  titleIcon={item.titleIcon}
                  iconTitle={item.iconTitle}
                  onValue={item.onValue}
                  onValue1={item.onValue1}
                  titleTime={item.titleTime}
                  lateTime={item.lateTime}
                  titleContent={item.titleContent}
                  titleContent1={item.titleContent1}
                  titleContent2={item.titleContent2}
                >
                  Card content
                </CardNotification>
              </List.Item>
            )}
          />
        </HeaderContent>
        <BodyContent>
          <TitleBody>
            <Space size={32}>
              <TextBold>{t('dashboard.workText')}</TextBold>
              <Text>{t('dashboard.ofAccount')}</Text>
              <SelectCustom
                clearIcon={SvgComponent}
                allowClear
                size="large"
                defaultValue={['TienCCT']}
                onChange={handleChange}
                style={{
                  minWidth: '120px',
                }}
                options={options}
              />
              <Text>{t('dashboard.show')}</Text>
              <SelectCustom
                size="large"
                defaultValue={t('dashboard.all')}
                onChange={handleChange}
                style={{
                  minWidth: '100px',
                }}
                options={options2}
              />
            </Space>
          </TitleBody>
          <ContainerTable>
            <TableDashBoard
              isTablePopup
              columns={columns}
              data={listContact}
              isLoading={false}
              pagination={false}
              minWidth={1000}
              headerBackgroundColor={defaultTheme.colors.primaryColor}
              isExpand
            />
          </ContainerTable>
          <ContainerTable>
            <TableDashBoard
              isTablePopup
              columns={columnsCustomer}
              data={listContact}
              isLoading={false}
              pagination={false}
              minWidth={1000}
              headerBackgroundColor={defaultTheme.colors.primaryColor}
              isExpand
            />
          </ContainerTable>
        </BodyContent>
      </ContentWrappercustom>
    </Content>
  );
};
export default DashBoard;
