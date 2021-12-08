import Image  from 'next/image';
import styles from '../../styles/employers.module.css';

export default function Job(){
    return(
        <>
            <div className="card">
                <div className={styles.imgEmployers} >
                    <div className={styles.imgMain}>
                        <Image
                            alt="..."
                            priority
                            src="/uploads/google.png"
                            width="100%"
                            height="100%"
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label title is-2">Desarrollador Frontend</label>
                </div>
                <div className="field">
                    <label className="label">Google Company ©</label>
                </div>
                <div className="card-content">
                    <div className="content">
                        Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at eros. Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras mattis consectetur purus sit amet fermentum.
                    </div>
                </div>
            </div>
        </>
    );
}