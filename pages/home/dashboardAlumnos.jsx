import Layout from "../../components/Layout";
import CardEmployers from "../../components/cardsDashboard/cardEmployers";
import CardQuizzes from "../../components/cardsDashboard/cardQuizzes";
import Loading from "../../components/Loading";

export default function DashboardAlumnos() {
    return (
        <>
            <Layout title="Inicio | Alumnos">
                <CardQuizzes />
                {/*<CardEmployers/>*/}
            </Layout>
        </>
    )
}
