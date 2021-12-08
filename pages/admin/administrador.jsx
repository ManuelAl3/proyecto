import Layout from "../../components/Layout";
import Link from 'next/link';
import {
    Card,
    CardHeader,
    Media,
    Table,
    Row,
  } from "reactstrap";

export default function Administrador () {
    return (
      <>
        <Layout>
          {/* Tabla de usuarios */}
          <Row className="mt-5">
            <div className="col">
              <Card className="bg-default shadow">
                <CardHeader className="bg-transparent border-0">
                  <h3 className="text-white mb-0">Modulo administrador</h3>
                </CardHeader>
                <Table
                  className="align-items-center table-dark table-flush"
                  responsive
                >
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Usuarios</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">
                        <Media className="align-items-center">
                          <a
                            className="avatar rounded-circle mr-3"
                          >
                            <i alt="..." className='bx bx-user'></i>
                          </a>
                          <Link href="/admin/viewsUsers">
                            <a>
                              <span className="mb-0 text-sm">
                                  Jonathan Moran Aguilar
                              </span>
                            </a>
                          </Link>
                        </Media>
                      </th>
                    </tr>
                  </tbody>
                </Table>
              </Card>
            </div>
          </Row>
        </Layout>
      </>
    );
}