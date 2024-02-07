// 정유진
import { Form, Input, Radio, DatePicker } from "antd"
import fetchApi from "../../../../../../modules/api";

const OrdersForm = () => {
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
          <Input />
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
          <Input readOnly />
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
