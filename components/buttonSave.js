import { useRouter } from 'next/router';

export default function ButtonSave() {
    return(
        <div className="btn-section block">
            <label className="label">
                <p className="control">
                    <button className="button is-purple-quizz-save"
                        type="submit"  >
                        Guardar
                    </button>
                </p>
            </label>
        </div>
    );
}