import { DataTableProps } from "@/interfaces/table"

export const dataTableMock: DataTableProps = {
  thead: {
    id: 'id',
    name: 'name',
  },
  tbody: [
    {
      id: 1,
      name: 'teste'
    }
  ]
}

export const dataTableEmptyMock: DataTableProps = {
  thead: {},
  tbody: []
}
