import React from 'react';
import {app} from "../../firebase";

export default function PrimerCiclo() {

    const archivoHandler = async (e) => {

        const archivo = e.target.files[0];
        const storageRef = app.storage().ref();
        const archivoPath = storageRef.child(archivo.name);
        await archivoPath.put(archivo);
        console.log("archivo cargado:", archivo.name);
        const enlaceUrl = await archivoPath.getDownloadURL();
        setArchivoUrl(enlaceUrl);

    }
    return (
        <>
            <form>
                <input type="file" onChange={archivoHandler} />
                <input type="text" name="nombre" placeholder="nombra tu archivo" />
                <button>Enviar </button>
            </form>
        </>
    )
}
