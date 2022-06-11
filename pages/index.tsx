import { useEffect, useState } from 'react'
import { ListResponse } from './api/models/ListResponse';
import { sortFunc } from '../src/functions/sort'
import { MyTable } from '../src/components/MyTable';

export default function Home() {
  const [data, setData] = useState<ListResponse[]>([])
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
      <MyTable list={data} />
    </div>
  )
}
