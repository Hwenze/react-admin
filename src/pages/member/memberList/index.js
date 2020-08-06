import React, { Component, Fragment } from 'react';
import SearchFrom from '../../../components/SearchFrom';
import TableFrom from '../../../components/Table';
import { Divider, Icon, Tag } from 'antd';
import { connect } from 'react-redux';
import action from './state/action';
const searchFrom = [
  {
    key: 'countryCode',
    type: 'select',
    label: 'Country',
    value: 'CN',
    data: [
      {
        label: 'China',
        value: 'CN'
      },
      {
        label: 'USA',
        value: 'US',
        disabled: true,
      },
    ]
  },
  {
    key: 'orderId',
    type: 'input',
    label: 'Order ID',
  },
  {
    key: 'username',
    type: 'input',
    label: 'Username',
    placeholder: '搜索框空白内容'
  },
  {
    key: 'createTime',
    type: 'monthPicker',
    label: 'Create Time'
  }
];
const tableList = [
  {
    id: '215537936',
    level: 'Admin',
    username: 'Joker',
    gender: '1',
    phone: '13226627208',
    countryCode: 'CN',
    note: 'Hi! My name is Joker',
    sellerType: 'online',
    sellerSince: '2020-1-16',
    address: '广州码农炒饭有限公司',
    shopSite: '100',
    trafficOrFollower: '255'
  },
  {
    id: '123456789',
    level: 'VIP',
    username: '小饭',
    gender: '2',
    phone: '13226617552',
    countryCode: 'CN',
    note: 'Hi! My name is 小饭',
    sellerType: 'underline',
    sellerSince: '2019-8-16',
    address: '广州澳鹏科技有限公司',
    shopSite: '50',
    trafficOrFollower: '255'
  },
  {
    id: '11111110',
    level: 'Admin',
    username: 'FHK',
    gender: '1',
    phone: '13226627208',
    countryCode: 'US',
    note: 'Hi! My name is FHK',
    sellerType: 'online',
    sellerSince: '2018-5-16',
    address: '广东广通医药公司',
    shopSite: '100',
    trafficOrFollower: '255'
  },
  {
    id: '110119120',
    level: 'Manager',
    username: '范鸿楷',
    gender: '1',
    phone: '13226627208',
    countryCode: 'CN',
    note: 'Hi! My name is 范鸿楷',
    sellerType: 'online',
    sellerSince: '2018-9-16',
    address: '潮汕码农猪脚饭有限公司',
    shopSite: '100',
    trafficOrFollower: '255'
  },
]


class Member extends Component {
  constructor(props) {
    super(props);
  }
  search = (fromData) => {
    console.log(fromData);
  }
  openDetails = (record) => {
    this.props.changeInfo(record);
    this.props.history.push(`/member/details/${record.id}`)
  }
  render() {
    const col = [
      {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: 'Name',
        dataIndex: 'username',
        key: 'username',
      },
      {
        title: 'Phone',
        dataIndex: 'phone',
        key: 'phone',
      },
      {
        title: 'Gender',
        dataIndex: 'gender',
        key: 'gender',
        render: (text, record) => (
          <span>
            {record.gender == 1 ?
              <Icon type="man" /> :
              <Icon type="woman" />}
          </span>
        ),
      },
      {
        title: 'Country',
        dataIndex: 'countryCode',
        key: 'countryCode',
      },
      {
        title: 'Job Year',
        dataIndex: 'sellerSince',
        key: 'sellerSince',
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
      },
      {
        title: 'Level',
        dataIndex: 'level',
        key: 'level',
        render: (text, record) => (
          <Tag>{record.level}</Tag>
        ),
      },
      {
        title: 'Action',
        dataIndex: 'action',
        key: 'action',
        render: (text, record) => (
          <span>
            <Icon type="edit" onClick={() => { this.openDetails(record) }} />
            <Divider type="vertical" />
            <Icon type="delete"></Icon>
          </span>
        ),
      },
    ]
    return (
      <Fragment>
        <SearchFrom data={searchFrom} search={this.search} />
        <div className="main-wrapper">
          <TableFrom rowKey={(r, i) => (i)} data={tableList} col={col} ></TableFrom>
        </div>
      </Fragment>
    )
  }
}
const toState = (state) => {
  return {

  }
}
const toProps = (dispatch) => {
  return {
    changeInfo(item) {
      console.log('1');
      dispatch(action.CHANEG_MEMBER_INFO(item));
    }
  }
}
export default connect(toState, toProps)(Member);