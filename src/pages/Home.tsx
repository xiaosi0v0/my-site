import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">首页</h1>
      <p className="mt-4">欢迎来到主页</p>
      <Link to="/admin" className="text-blue-500 underline mt-2 inline-block">去管理页</Link>
    </div>
  )
}
