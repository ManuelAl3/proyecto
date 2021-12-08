import Styles from '../../styles/styles.module.css';

export default function cardQuizzes() {

    return (
        <>
            <div className={Styles.mLeft}>
                <div className="title-main-quizz block">
                    <label className="title is-1">Encuestas por contestar</label>
                </div>
                <div className="quizz-main m-auto">
                    <div className={Styles.cardStyles}>
                        <a href="/quizzes/income-survey">
                            <span className={Styles.mas}>Realizar encuesta</span>
                            <button className={Styles.cardStylesButton} id='work' type="button" name="Hover">
                                Encuesta de ingreso
                            </button>
                        </a>
                    </div>
                    <div className={Styles.cardStyles} >
                        <a href="/quizzes/income-survey">
                            <span className={Styles.mas}>Realizar encuesta</span>
                            <button className={Styles.cardStylesButton} id='work' type="button" name="Hover">
                                Ficha de identificación de alumnos
                            </button>
                        </a>
                    </div>
                    <div className={Styles.cardStyles} >
                        <a href="/quizzes/income-survey">
                            <span className={Styles.mas}>Realizar encuesta</span>
                            <button className={Styles.cardStylesButton} id='work' type="button" name="Hover">
                                Estudio socio económico
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
