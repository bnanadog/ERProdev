// 정유진
import React, { useEffect, useState } from "react";
import { Form, Input, Radio, DatePicker, Select } from "antd"
import fetchApi from "../../../../../../modules/api";

const filterOption = (input, option) =>
  (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

const OrdersForm = () => {
  const [list, setList] = useState([]);
  const [AccountBnoList, setAccountBnoList] = useState([]);

  const bnmChange = (value) => {
    fetchAccountBnoList(value);
  };

  useEffect(() => {
    fetchList();
  }, []);

  const fetchList = async () => {
    try {
      const response = await fetchApi.get("/account");
      setList(response.data.data);
    } catch (error) {
      console.error("거래처 목록 조회 에러 : ", error);
    }
  }

  const fetchAccountBnoList = async (value) => {
    try {
      const response = await fetchApi.get(`/account/bnm/${value}`);
      setAccountBnoList(response.data.data);
    } catch (error) {
      console.error("사업자 등록번호 조회 에러 : ", error);
    }
  }

  return (
    <div>
      <Form.Item name="id" noStyle>
        <Input type="hidden" />
      </Form.Item>
      <Form.Item
        label="유형"
        name="sort"
        rules={[
          {
            required: true,
            message: "유형을 선택해주세요",
          },
        ]}
      >
        <Radio.Group value="거래 구분">
          <Radio value="구매">구매</Radio>
          <Radio value="판매">판매</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item
        label="거래처명"
        name="bnm"
        rules={[
          {
            required: true,
            message: "거래처명을 입력해주세요",
          },
        ]}
      >
        <Select
          showSearch
          placeholder="거래처명"
          optionFilterProp="children"
          onChange={bnmChange}
          filterOption={filterOption}
        >
          {list.map((account) => (
            <Select.Option key={account.bnm} 
            value={account.bnm} label={account.bnm}>
              {account.bnm}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        label="사업자등록번호"
        name="bno"
        rules={[
          {
            required: true,
            message: "사업자등록번호를 입력해주세요",
          },
        ]}
      >
        <Select
          showSearch
          placeholder="사업자 등록번호"
          optionFilterProp="children"
        >
          {AccountBnoList.map((value) => (
            <Select.Option key={value.bno} value={value.bno} >
              {value.bno}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        label="예정일"
        name="dueDate"
        rules={[
          {
            required: true,
            message: "유형을 선택해주세요",
          },
        ]}
      >
        <DatePicker />
      </Form.Item>
      <Form.Item label="완료일" name="completionDate">
        <DatePicker />
      </Form.Item>
    </div>
  );
};

export default OrdersForm;