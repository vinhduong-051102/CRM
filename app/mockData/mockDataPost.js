export const MOCK_DATA_POST = {
  '/products/3': {
    switch: false,
    data: {
      email: 'abc@gmail.com',
      name: 'Abc',
    },
  },
  '/message/4': {
    switch: true,
    data: {
      id: '123456',
      content: 'Abc Def',
    },
  },
};

export const FAKE_DATA_TREE_PB = [
  {
    title: 'Công ty cổ phần BKAV',
    key: '0-0',
    children: [
      {
        title: 'ITS - Công ty BKAV-ITS',
        key: '0-0-0',
        children: [
          {
            title: 'Phong 1',
            key: '0-0-0-0',
          },
          {
            title: 'Phong 2',
            key: '0-0-0-1',
          },
          {
            title: 'Phong 2',
            key: '0-0-0-1',
          },
        ],
      },
      {
        title: 'DBCL - Ban Đảm bảo chất lượng',
        key: '0-0-1',
        children: [
          {
            title: 'Phong 1',
            key: '0-0-1-0',
          },
          {
            title: 'Phong 2',
            key: '0-0-1-1',
          },
          {
            title: 'Phong 2',
            key: '0-0-1-2',
          },
        ],
      },
      {
        title: 'Ban kiểm soát nội bộ',
        key: '0-0-2',
        children: [
          {
            title: 'Phong 1',
            key: '0-0-2-0',
          },
          {
            title: 'Phong 2',
            key: '0-0-2-1',
          },
          {
            title: 'Phong 2',
            key: '0-0-2-2',
          },
        ],
      },
    ],
  },
];
