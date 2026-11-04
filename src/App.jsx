import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)
  return (
    <main className="card">
      <p className="tag">React + Vite · GitHub · Vercel</p>
      <h1>Website đầu tiên của Thông</h1>
      <p>Trang này được đưa lên mạng miễn phí bằng GitHub và Vercel.</p>
      <button onClick={() => setCount((c) => c + 1)}>
        Đã bấm {count} lần
      </button>
      <p className="hint">Sửa file <code>src/App.jsx</code>, rồi <code>git push</code> để cập nhật trang.</p>
    </main>
  )
}
