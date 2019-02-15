import React, { Component } from 'react';

import { Modal, List } from 'antd-mobile';

import './css/popup.css';

export default class popup extends Component {
  render = () => {
    const { info } = this.props;
    const { lng, lat, address } = info;

    return (
      <Modal popup animationType="slide-up" visible>
        <List renderHeader={() => <div>坐标信息</div>}>
          <List.Item extra={parseFloat(lng).toFixed(6)}>经度</List.Item>
          <List.Item extra={parseFloat(lat).toFixed(6)}>纬度</List.Item>
          <List.Item extra={address}>地址</List.Item>
        </List>
      </Modal>
    );
  };
}