import salwa from "../salwanih.jpeg"
import RiwayatPendidikan from "./riwayatPendidikan";
import "../salwa-styles.css";

export default function Hero(){
    return(
    <div className="container mx-auto p-2 text-center">
    <h1 className="text-black-300 font-bold">CV Online</h1>
    <h2 className="text-5x1"> Salwa May Hanifah</h2>

    <Profile/>
  
    <p>
    Saya adalah mahasiswa semester 5, Jurusan sistem informasi di Universitas Ma'soem,
lahir di Lampung dan bercita-cita S2 di Chulalongkorn Univesity
        </p>
        </div>
    );
    function Profile(){
        return <img src={salwa.src} alt="Salwa May Hanifah" className="fotoku"/>;
};
  }


