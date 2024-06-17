import { useState, useMemo } from 'react'
import { Table, Button, Input, Select } from 'antd'
import { useStore } from '../Store/useStore'

type ListTaskProps = {
  setIsModalOpen: (visible: boolean) => void
}

const ListTask = ({ setIsModalOpen }: ListTaskProps) => {
  const { data, setEditingTask } = useStore()
  const [searchText, setSearchText] = useState('')
  const [filterCategory, setFilterCategory] = useState<string | undefined>(
    undefined
  )

  const handleEdit = (task: any) => {
    setEditingTask(task)
    setIsModalOpen(true)
  }

  const handleSearch = (value: string) => {
    setSearchText(value)
  }

  const handleReset = () => {
    setSearchText('')
    setFilterCategory(undefined)
  }

  const filteredData = useMemo(() => {
    return data.filter((item: any) => {
      const matchesCategory = filterCategory
        ? item.category === filterCategory
        : true
      const matchesSearchText = searchText
        ? item.task.toLowerCase().includes(searchText.toLowerCase())
        : true
      return matchesCategory && matchesSearchText
    })
  }, [data, filterCategory, searchText])

  const columns = [
    {
      title: 'Nombre Tarea',
      dataIndex: 'task',
      key: 'task',
      defaultSortOrder: 'descend',
      sorter: (a: any, b: any) => a.name.length - b.name.length,
    },
    {
      title: 'Categoría',
      dataIndex: 'category',
      key: 'category',
      filters: [
        { text: 'cat1', value: 'cat1' },
        { text: 'cat2', value: 'cat2' },
        { text: 'cat3', value: 'cat3' },
      ],
      filteredValue: filterCategory ? [filterCategory] : undefined,
      onFilter: (value: any, record: any) => record.category === value,
    },
    {
      title: 'Estado',
      dataIndex: 'status',
      key: 'status',
      render: (status: boolean) => (status ? 'Activo' : 'Inactivo'),
    },
    {
      title: 'Detalle',
      dataIndex: 'details',
      key: 'details',
    },
    {
      title: 'Acciones',
      key: 'actions',
      render: (_text: string, record: any) => (
        <Button onClick={() => handleEdit(record)}>Editar</Button>
      ),
    },
  ]

  return (
    <div>
      <div className="flex justify-end">
        <Input.Search
          placeholder="Buscar por nombre de tarea"
          allowClear
          className="mr-5"
          value={searchText}
          onChange={e => handleSearch(e.target.value)}
          onSearch={handleSearch}
          style={{ marginBottom: 16, maxWidth: 400 }}
        />
        <Select
          allowClear
          placeholder="Filtrar por categoría"
          className="mr-5"
          style={{ width: 200, marginBottom: 16, marginRight: 16 }}
          onChange={value => setFilterCategory(value)}
          value={filterCategory}
        >
          <Select.Option value="cat1">cat1</Select.Option>
          <Select.Option value="cat2">cat2</Select.Option>
          <Select.Option value="cat3">cat3</Select.Option>
        </Select>
        <Button onClick={handleReset}>Eliminar Filtros</Button>
      </div>

      <Table
        // @ts-ignore
        columns={columns}
        dataSource={filteredData}
      />
    </div>
  )
}

export default ListTask
