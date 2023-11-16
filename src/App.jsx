import { useEffect } from 'react'
import './App.scss'
import { fetDataFromAPI } from './utils/api'
import { useSelector , useDispatch } from 'react-redux'
import {getApiConfiguration} from "./store/homeSlice"


function App() {

  const dispatch = useDispatch();
  // state.home vì state lưu trữ state của nhiều slide reducer nên cần chỉ ra chính xác lấy state của reducer nào
  const {url} = useSelector(state => state.home)
  useEffect(()=>
  {
    apiTesting()
  })
  const apiTesting = async ()=>
  {
    // Redux Toolkit đã tự động xử lý việc chuyển tham số truyền vào thành payload của action 
    dispatch(getApiConfiguration(await fetDataFromAPI("/movie/popular")))
  }
  return (
    <>
      {url.page}
    </>
  )
}

export default App
