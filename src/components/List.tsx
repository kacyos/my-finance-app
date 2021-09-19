export default function List({ children }: any) {
  return (
    <table className="w-auto m-auto divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Data
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Valor
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">{children}</tbody>
    </table>
  );
}
