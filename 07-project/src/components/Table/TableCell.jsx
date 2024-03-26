export const TableCell = ({ id, name, username, email, city }) => {
  return (
    <tr key={id}>
      <th scope='row'>{name}</th>
      <td>{username}</td>
      <td>{email}</td>
      <td>{city}</td>
    </tr>
  )
}
