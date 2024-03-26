import { useFetch } from '../hooks/useFetch'
import { Table } from './Table/Table'

export const User = () => {
  const { data, isLoading, error } = useFetch(
    'https://jsonplaceholder.typicode.com/users'
  )
  return (
    <div>
      <h1>User</h1>
      {isLoading ? (
        <h1>Loading</h1>
      ) : error ? (
        <p>error{error.message}</p>
      ) : (
        <Table data={data} error={error} />
      )}
    </div>
  )
}
