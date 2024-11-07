import RowPekerjaan from "./rowPekerjaan";
import RowRiwayat from "./rowRiwayat";

export default function RiwayatPekerjaan() {
    return (
        <div className="container mx-auto p-2 text-center">
            <div className="container mx-auto p-2 text-center pt-20">
                <h2 className="text-2xl font-bold mb-4">Riwayat Pekerjaan</h2>
            </div>
            <RowPekerjaan tahun="2023" instansi="RA.Istiqomah Baskara" sebagai="Guru TK" />
            <RowPekerjaan tahun="2024" instansi="PT. Growth Hub Indonesia" sebagai="Magang asContent crator" />
            <RowPekerjaan tahun="2024" instansi="PT. Insaba" sebagai="Magang as Associate" />
        </div>
    );
}