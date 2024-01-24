import { Button } from 'antd'
import useStore from "@/store/index"
import { useEffect } from "react"

const Layout = () => {
  const { bears, fetchGetList, channelList } = useStore()
  useEffect(() => {
    fetchGetList()
  }, [])
  return (
    <div>
      <Button type='primary'>{bears}</Button>
      <ul>
        {
          channelList.map((item) => <li key={item.id}>{item.name}</li>)
        }
      </ul>
    </div>
  )
}
export default Layout