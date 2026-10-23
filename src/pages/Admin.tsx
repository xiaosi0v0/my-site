import { Link } from 'react-router-dom'

export default function Admin() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">管理页面</h1>
      <p className="mt-4">后台管理内容</p>
      <Link to="/" className="text-blue-500 underline mt-2 inline-block">返回首页</Link>
    </div>
  )
}

