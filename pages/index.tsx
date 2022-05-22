import { useEffect, useState } from 'react'

export default function Home() {
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('api/list')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>

  return (
    <div>
      <ul>
        {data.map((x, index) => (
          <li key={index}>
            {x.name}
          </li>
        ))}
      </ul>
    </div>
  )
}
