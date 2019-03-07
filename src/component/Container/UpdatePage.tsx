import React, { Component } from 'react';
import { List, Button, InputItem } from 'antd-mobile';
import { createForm } from 'rc-form';

export interface UpdatePageProps {
  onBack?: () => void;
  config: Array<any>;
  dataItem: any;
  status: string;
  form: any;
}
export interface UpdatePageState {}

function noop() {}

class UpdatePage extends Component<UpdatePageProps, UpdatePageState> {
  static defaultProps = {
    onBack: noop,
    config: [],
    dataItem: {},
    status: 'add',
  };

  renderEditItem = (dataItem: any, config: Array<any>) => {
    const { form, status } = this.props;
    const { getFieldProps, getFieldError } = form;
    let element = [];
    for (let i = 0; i < config.length - 1; i++) {
      const { key, type, name, maxLength, minLength, isNull } = config[i];
      const value = dataItem[key];
      switch (type) {
        case 'input':
          element.push(
            <List.Item
              key={`update-page-input-item-${i}`}
              extra={
                <InputItem
                  {...getFieldProps(name, {
                    initialValue: status === 'add' ? '' : value,
                    rules: [
                      { required: isNull, message: '该值不能为空' },
                      {
                        max: maxLength,
                        message: `长度太长，最多为${maxLength}个字符`,
                      },
                      {
                        min: minLength,
                        message: `长度太短，最少为${minLength}个字符`,
                      },
                    ],
                  })}
                  clear
                  placeholder="请输入"
                  error={getFieldError(name)}
                  onErrorClick={() => console.log(name)}
                  style={{ textAlign: 'right' }}
                />
              }
            >
              {name}
            </List.Item>,
          );
          break;

        default:
          break;
      }
    }
    return element;
  };

  render = () => {
    const { onBack, dataItem, config } = this.props;
    return (
      <List>
        {this.renderEditItem(dataItem, config) as any}
        <List.Item>
          <Button
            type="primary"
            // onClick={this.save}
            inline
            style={{ marginRight: 4, width: 'calc(50% - 4px)' }}
          >
            保存
          </Button>
          <Button inline onClick={onBack} style={{ width: '50%' }}>
            返回
          </Button>
        </List.Item>
      </List>
    );
  };
}

export default createForm()(UpdatePage);
