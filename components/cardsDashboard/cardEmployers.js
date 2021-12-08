import Image from 'next/image';
import Styles from '../../styles/styles.module.css';

export default function cardEmployers() {
    return (
        <>
            <div className={Styles.mLeft}>
                <label className="title is-1">Empleos recientes</label>
                <div className="card">
                    <div className="card-image">
                        <figure className="image is-4by3">
                            <Image
                                alt="..."
                                priority
                                src="/uploads/google.png"
                                width="100%"
                                height="100%"
                            />
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Phasellus nec iaculis mauris.
                            <br />
                            <time datetime="2016-1-1">11: 09 PM - 1 Jan 2016</time>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
