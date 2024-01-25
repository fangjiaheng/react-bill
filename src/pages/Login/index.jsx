import './index.scss'
import { Card, Form, Input, Button, message } from 'antd'
import useStore from '@/store'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const { fetchLogin } = useStore()
  const navigate = useNavigate()
  const onFinish = async (val) => {
    console.log("hai", val)
    // 调用登录接口
    await fetchLogin(val)
    // 路由跳转
    navigate('/')
    // 提示
    message.success('登录成功')
  }
  return (
    <div className="login">
      <Card className="login-container">
        {/* 登录表单 */}
        <Form
            name="basic"
            initialValues={{
              mobile: '17826808246',
              code: '246810',
            }}
            onFinish={onFinish}
            autoComplete="off">
          <Form.Item
            label="手机号"
            name="mobile"
            rules={[
              { required: true, message: '请输入手机号' },
              {
                pattern: /^1[3-9]\d{9}$/,
                message: '手机号码格式不对'
              }
            ]}
          >
            <Input size="large" placeholder="请输入手机号" />
          </Form.Item>
          <Form.Item
            label="验证码"
            name="code"
            rules={[
              { required: true, message: '请输入验证码' },
            ]}
          >
            <Input size="large" placeholder="请输入验证码" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default Login