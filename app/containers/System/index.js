import React, { useState } from 'react';
import { t } from 'i18next';
import { Col, Pagination, Row, Select, Space } from 'antd';
import { Content, ContentHeader, ContentTitle, ContentWrapper, HeaderLeft, HeaderRight } from '../../res/commonStyles';
import ButtonCircle from '../../res/components/ButtonCircle';
import Button from '../../res/components/Button';
import { CustomTree } from './styled';
import { PopoverCustom } from '../../res/components/Header/style';
import ContentPopOver from './components/ContentPopoverButtonAdd';
import { ContainerPagination } from '../../res/components/Table/style';

const System = () => {
  const [page, setPage] = useState(1);
  const [size, setPageSize] = useState(50);
  const countSystem = 20;
  const onClickExport = () => {};

  // Fake data
  const treeData = [
    {
      title: 'Công ty cổ phần BKAV',
      key: '1',
      children: [
        {
          title: 'ITS - Công ty BKAV-ITS',
          key: '11',
          children: [
            {
              title: 'Phong 1',
              key: '111',
            },
            {
              title: 'Phong 2',
              key: '112',
            },
            {
              title: 'Phong 3',
              key: '113',
            },
          ],
        },
        {
          title: 'DBCL - Ban Đảm bảo chất lượng',
          key: '12',
          children: [
            {
              title: 'Phong1',
              key: '121',
            },
            {
              title: 'Phong 2',
              key: '122',
            },
            {
              title: 'Phong 3',
              key: '123',
            },
          ],
        },
        {
          title: 'Ban kiểm soát nội bộ',
          key: '13',
          children: [
            {
              title: 'Phong 1',
              key: '131',
            },
            {
              title: 'Phong 2',
              key: '132',
            },
            {
              title: 'Phong 3',
              key: '133',
            },
          ],
        },
      ],
    },
  ];

  return (
    <Content>
      <ContentWrapper>
        <ContentHeader>
          <HeaderLeft>
            <ContentTitle>
              {t('system.listDepartment')}
              {countSystem}
            </ContentTitle>
            <ButtonCircle
              title={t('system.tooltipExport')}
              placement="top"
              iconName="download"
              onClick={onClickExport}
              enable
            />
          </HeaderLeft>

          <HeaderRight>
            <PopoverCustom content={ContentPopOver} title="" placement="bottomRight">
              <Button iconName="add" type="primary">
                {t('common.addNew')}
              </Button>
            </PopoverCustom>
          </HeaderRight>
        </ContentHeader>
        {treeData.length ? (
          <CustomTree
            height={700}
            defaultExpandAll
            treeData={treeData}
            titleRender={treeNode => (
              <Row align="middle">
                <Col span={4}>{treeNode.title}</Col>
                <Col span={3} push={17} className="listButton">
                  <Space>
                    <ButtonCircle
                      onClick={() => {
                        console.log(treeNode.key);
                      }}
                      title=""
                      iconName="addDepartment"
                      enable
                    />
                    <ButtonCircle
                      onClick={() => {
                        console.log(treeNode.key);
                      }}
                      title=""
                      iconName="edit"
                      enable
                    />
                    <ButtonCircle
                      onClick={() => {
                        console.log(treeNode.key);
                      }}
                      title=""
                      iconName="history"
                      enable
                    />
                  </Space>
                </Col>
              </Row>
            )}
          />
        ) : (
          'loading tree'
        )}
        <ContainerPagination>
          <Select
            value={size}
            onChange={selected => {
              setPageSize(selected);
              setPage(1);
            }}
          />
          <Pagination
            simple
            defaultCurrent={1}
            total={500}
            showTotal={total => `Tổng số: ${total} `}
            current={page}
            pageSize={size}
            onChange={(current, pageSize) => {
              setPage(current);
              setPageSize(pageSize);
            }}
          />
        </ContainerPagination>
      </ContentWrapper>
    </Content>
  );
};

export default System;
