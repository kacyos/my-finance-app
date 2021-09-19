interface IListItem {
  value: string;
  date: string;
}

export default function ListItem({ value, date }: IListItem) {
  return (
    <tr key={"person.email"}>
      <td className="text-center p-2 whitespace-nowrap">{date}</td>
      <td className="text-center p-2 whitespace-nowrap">{value}</td>
    </tr>
  );
}
