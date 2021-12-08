import Layout from '../../components/Layout';
import Statistics from '../../components/Analystics/index';
import Statistics2 from '../../components/Analystics/index2';
import styles from '../../styles/analystics.module.css';

export default function analystics() {
    return (
      <>
        <Layout title="Admin | Estadisticas">
          <div className="title-main-quizz block">
            <p className="title is-2">Estadísticas</p>
          </div>
          <div className={styles.container}>
            <Statistics />
          </div>
          <div className={styles.container}>
            <Statistics2 />
          </div>
        </Layout>
      </>
    );
}
