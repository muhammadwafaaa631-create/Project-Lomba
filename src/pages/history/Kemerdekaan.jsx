import HistoryPageLayout from "../../components/history/HistoryPageLayout";
import bandungLautanApiImg from "../../assets/history/Bandung Lautan API.jpg";
import ahNasutionImg from "../../assets/history/A.H Nasution.jpg";
import asiaAfrikaImg from "../../assets/history/Asia-Afrika.jpg";
import tohaImg from "../../assets/history/Mohammad Toha.jpg";
import soekarnoImg from "../../assets/history/Soekarno.jpg";

export default function Kemerdekaan() {
    const theme = {
        accentColor: "text-[#EF4444]",
        accentBg: "bg-[#EF4444]",
        accentBorder: "border-[#EF4444]/30",
        textColor: "text-[#DC2626]",
        mood: 'dramatic'
    };

    const content = {
        hero: {
            subtitle: "Peristiwa Penting",

            bgImage: bandungLautanApiImg
        },
        timeline: [
            {
                year: "1945",
                label: "Revolusi",
                title: "Pasca Proklamasi di Bandung",
                description: "Situasi di Bandung memanas pasca kemerdekaan dengan datangnya pasukan Sekutu dan kembalinya NICA.",
                longDescription: "Semangat perlawanan menyebar di kalangan pemuda Bandung. Markas-markas Jepang diserbu untuk mendapatkan senjata guna mempertahankan kemerdekaan yang baru diraih.",
                image: bandungLautanApiImg,
                impactText: "Mempersatukan berbagai elemen pejuang di Bandung dalam satu komando pertahanan.",
                impactPoints: [
                    { title: "Mobilisasi Massa", text: "Terbentuknya badan-badan perjuangan pemuda." },
                    { title: "Diplomasi Militer", text: "Gagalnya perundingan memicu ketegangan fisik di garis demarkasi." }
                ],
                figures: [
                    { name: "A.H. Nasution", role: "Komandan Siliwangi", desc: "Perencana strategi pertahanan di wilayah Jawa Barat.", image: ahNasutionImg }
                ],
                facts: [
                    { title: "Fun Fact: Pertempuran Gedung Sate", text: "Pada 3 Desember 1945, terjadi pertempuran heroik di mana 7 pemuda gugur mempertahankan Gedung Sate dari tentara Gurkha/Sekutu. Tugu peringatannya kini bisa dilihat di halaman depan gedung." }
                ],
                gallery: []
            },
            {
                year: "1946",
                label: "Lautan Api",
                title: "Tragedi Bandung Lautan Api",
                description: "Warga Bandung membakar rumah mereka sendiri dan meninggalkan kota demi mencegah pendudukan Sekutu.",
                longDescription: "Dalam waktu 7 jam, sekitar 200.000 penduduk Bandung Selatan membakar rumah dan harta benda mereka sebelum mengungsi ke pegunungan. Keputusan ini diambil agar Bandung tidak dijadikan basis militer musuh.",
                image: bandungLautanApiImg,
                impactText: "Menunjukkan kedaulatan moral bangsa: membuang harta demi menjaga harga diri negara.",
                impactPoints: [
                    { title: "Strategi Bumi Hangus", text: "Menghancurkan fasilitas vital agar tidak bisa digunakan lawan." },
                    { title: "Eksodus", text: "Salah satu pengungsian massa terbesar dalam sejarah revolusi Indonesia." }
                ],
                figures: [
                    { name: "Mohammad Toha", role: "Relawan Pejuang", desc: "Pahlawan muda yang meledakkan gudang amunisi musuh.", image: tohaImg }
                ],
                facts: [
                    { title: "Fun Fact: Lagu Halo-Halo Bandung", text: "Meski terkenal identik dengan peristiwa Bandung Lautan Api, sejatinya siapa pencipta asli lagu ini masih menjadi perdebatan, meski secara historis sering dikaitkan dengan Ismail Marzuki." }
                ],
                gallery: []
            },
            {
                year: "1955",
                label: "Dunia",
                title: "Konferensi Asia-Afrika",
                description: "Bandung menjadi pusat perhatian dunia saat menjadi tuan rumah konferensi bangsa-bangsa terjajah.",
                longDescription: "Gedung Merdeka menjadi saksi lahirnya Dasasila Bandung, yang menginspirasi kemerdekaan bangsa-bangsa di Asia dan Afrika dari kolonialisme.",
                image: asiaAfrikaImg,
                impactText: "Menegaskan posisi Bandung sebagai Kota Internasional dan simbol perdamaian dunia.",
                impactPoints: [
                    { title: "Diplomasi", text: "Lahirnya Blok Non-Blok sebagai alternatif kekuatan dunia." },
                    { title: "Prestise", text: "Dikenalnya nama Bandung di seluruh penjuru benua Asia dan Afrika." }
                ],
                figures: [
                    { name: "Soekarno", role: "Proklamator", desc: "Tokoh sentral yang menghidupkan semangat KAA di Bandung.", image: soekarnoImg }
                ],
                facts: [
                    { title: "Fun Fact: Grote Postweg Berganti Nama", text: "Untuk menyambut KAA perdana, sebagian Grote Postweg (Jalan Raya Pos) diubah namanya menjadi Jalan Asia Afrika, yang kini menjadi salah satu ruas ikonik Kota Bandung." }
                ],
                gallery: []
            }
        ],
        navigation: {
            prevLink: "/history/kolonial",
            prevLabel: "Masa Kolonial",
            nextLink: "/history/modern",
            nextLabel: "Bandung Modern"
        }

    };

    return <HistoryPageLayout theme={theme} content={content} />;
}
