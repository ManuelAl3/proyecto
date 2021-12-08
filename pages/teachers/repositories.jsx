import LayoutTeacher from "../../components/layouts/layoutTeacher";
import MainRepositories from "../../components/Repository/index";

export default function repositories() {
    return (
        <>
            <LayoutTeacher title="Repositorios | Docentes">
                <div className="title-main-quizz main-repo-box">
                    <MainRepositories/>
                </div>
            </LayoutTeacher>
            <style jsx>{`
                .main-repo-box {
                    width: 60%;
                    background-color: #ffffff;
                    border-radius: 10px;
                    margin-top: 50px;
                }
            `}</style>
        </>
    )
}
