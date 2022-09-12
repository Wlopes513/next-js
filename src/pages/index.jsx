import Layout from '../components/layout'
import Table from '../components/table'
import Client from '../core/client'

export default function Home() {

  const clients = [
    new Client('Ana', 34, '1'),
    new Client('Bia', 45, '1'),
    new Client('Carlos', 23, '1'),
    new Client('Pedro', 54, '1'),
  ]

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-purple-500 to-blue-400">
      <Layout title="Cadastro Simples">
        <Table clients={clients} />
      </Layout>
    </div>
  )
}
