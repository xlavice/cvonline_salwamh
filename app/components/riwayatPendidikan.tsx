import RowRiwayat from "./rowRiwayat";

export default function RiwayatPendidikan(){
    return(
        <div className="container mx-auto p-2 text-center">
            <div className="container mx-auto p-2 text-center pt-20">
        <h2  className="text2x1">Riwayat Pendidikan</h2>
        </div>
        <RowRiwayat jenjang="SD" sekolah="SDN 2 Sribasuki" tahun="2010-2016"/>
        <RowRiwayat jenjang="SMP" sekolah="MTSN 2 Lampung Utara" tahun="2016-2019"/>
        <RowRiwayat jenjang="SMA" sekolah="SMAN 1 Kotabumi" tahun="2019-2022"/>
        <RowRiwayat jenjang="Sarjana" sekolah="Ma'soem University" tahun="2022-Sekarang"/>
        </div>
    );
}