import { useEffect, useState } from 'react'

const sortFunc = function(a, b) {
  if(a.name < b.name) { return -1; }
  if(a.name > b.name) { return 1; }
  return 0;
}

export default function Home() {
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('api/list')
      .then((res) => res.json())
      .then((data) => {
        setData(data.sort(sortFunc))
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
