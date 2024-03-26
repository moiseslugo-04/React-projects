import { TableCell } from '../Table/TableCell'

export const Table = ({ data, error }) => {
  return (
    <table className='table'>
      <thead>
        <tr>
          <th scope='col'>Name</th>
          <th scope='col'>User Name</th>
          <th scope='col'>Email</th>
          <th scope='col'>Address</th>
        </tr>
      </thead>

      <tbody>
        {data.map((user) => {
          return (
            <TableCell
              key={user.id}
              name={user.name}
              username={user.username}
              email={user.email}
              city={user.address.city}
            />
          )
        })}
      </tbody>
    </table>
  )
}
