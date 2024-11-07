import "./salwa-styles.css";
import Hero from "./components/hero";
import PersonalInfo from "./components/PersonalInfo";
import Skills from "./components/Skills";
import RiwayatPendidikan from "./components/riwayatPendidikan";
import RiwayatPekerjaan from "./components/riwayatPekerjaan";
import RowRiwayat from "./components/rowRiwayat";
import MyGallery from "./components/Gallery";
import WarnaFavorit from "./components/WarnaFavorit";
import ContactForm from "./components/ContackForm";



export default function CV() {
  return (
    <section>
      <Hero />
      <PersonalInfo/>
      <Skills/>
      <RiwayatPendidikan />
      <RiwayatPekerjaan />
      <MyGallery/>
      <WarnaFavorit/>
      <ContactForm />
    </section>
  );
}