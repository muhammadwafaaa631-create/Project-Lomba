import HistoryPageLayout from "../../components/history/HistoryPageLayout";
import bandungKolonialImg from "../../assets/history/Bandung-Kolonial.jpg";
import rothImg from "../../assets/history/roth.jpg";
import gerberImg from "../../assets/history/J. Gerber.jpg";
import schoemakerImg from "../../assets/history/Wolff Schoemaker.webp";
import zamanEmasImg from "../../assets/history/Zaman Emas.jpg";

export default function HindiaBelanda() {
    const theme = {
        accentColor: "text-[#0369A1]",
        accentBg: "bg-[#0369A1]",
        accentBorder: "border-[#0369A1]/30",
        textColor: "text-[#0EA5E9]",
        mood: 'elegant'
    };

    const content = {
        hero: {
            subtitle: "Masa Kolonial",

            bgImage: bandungKolonialImg
        },
        timeline: [
            {
                year: "1906",
                label: "Gemeente",
                title: "Otonomi Kotapraja Bandung",
                description: "Bandung secara resmi ditetapkan sebagai kotamadya (gemeente) yang mandiri, memulai pembangunan kota modern.",
                longDescription: "Status ini memungkinkan pemerintah lokal mengelola anggaran sendiri untuk infrastruktur, penerangan jalan, dan sanitasi yang mengubah Bandung menjadi kota paling bersih di Hindia Belanda.",
                image: bandungKolonialImg,
                impactText: "Meluncurkan standar perencanaan kota skala besar pertama di Indonesia.",
                impactPoints: [
                    { title: "Infrastruktur", text: "Pembangunan sistem drainase dan jaringan jalan modern." },
                    { title: "Eropa Kecil", text: "Dimulainya pembangunan kawasan pemukiman elit bergaya Barat." }
                ],
                figures: [
                    { name: "Roth", role: "Pengusaha", desc: "Seseorang yang mempromosikan keindahan Bandung ke dunia luar.", image: rothImg }
                ],
                facts: [
                    { title: "Fun Fact: Paris van Java", text: "Julukan 'Paris van Java' awalnya disematkan bukan murni karena fesyen, melainkan untuk menarik wisatawan Eropa ke pasar malam jaarbeurs tahunan di Bandung agar terasa se-glamor Paris." }
                ],
                gallery: []
            },
            {
                year: "1920",
                label: "Ibukota",
                title: "Rencana Menjadi Ibukota Kolonial",
                description: "Pemerintah Belanda sempat merencanakan pemindahan ibukota dari Batavia ke Bandung karena udaranya yang lebih sejuk.",
                longDescription: "Gedung Sate dibangun sebagai kantor Departemen Pekerjaan Umum, bagian dari megaproyek pemindahan pusat administrasi negara ke dataran tinggi yang lebih sehat.",
                image: bandungKolonialImg,
                impactText: "Mewariskan gedung-gedung monumental berskala nasional di Bandung.",
                impactPoints: [
                    { title: "Sentra Intelektual", text: "Berdirinya ITB (Technische Hoogeschool) sebagai institusi teknik tertua di Indonesia." },
                    { title: "Pusat Militer", text: "Relokasi pusat komando militer ke wilayah Cimahi dan Bandung." }
                ],
                figures: [
                    { name: "J. Gerber", role: "Arsitek", desc: "Perancang utama Gedung Sate yang ikonik.", image: gerberImg }
                ],
                facts: [
                    { title: "Fun Fact: Ornamen Sate", text: "Enam buah 'tusuk sate' pada puncak Gedung Sate konon melambangkan biaya 6 juta gulden yang dihabiskan untuk pembangunannya." }
                ],
                gallery: []
            },
            {
                year: "1930",
                label: "Art Deco",
                title: "Zaman Emas Arsitektur Modern",
                description: "Periode dimana gaya arsitektur Art Deco memuncak, menghadirkan mahakarya seperti Villa Isola dan Savoy Homann.",
                longDescription: "Bandung menjadi laboratorium arsitektur dunia. Para arsitek Belanda menggabungkan teknologi modern dengan elemen tropis, menciptakan gaya ssitektur 'Indisch' yang unik.",
                image: zamanEmasImg,
                impactText: "Menjadikan Bandung sebagai salah satu kota dengan koleksi Art Deco terbanyak di dunia.",
                impactPoints: [
                    { title: "Gaya Hidup", text: "Jalan Braga menjadi pusat fesyen dan hiburan kelas atas." },
                    { title: "Turisme", text: "Bandung mulai dikenal secara internasional sebagai destinasi wisata tropis premium." }
                ],
                figures: [
                    { name: "Wolff Schoemaker", role: "Arsitek Jenius", desc: "Guru dari Ir. Soekarno yang banyak merancang gedung Art Deco di Bandung.", image: schoemakerImg }
                ],
                facts: [
                    { title: "Fun Fact: Braga Fashion", text: "Di era ini, pakaian mode terbaru dari Paris konon langsung dipajang di etalase toko-toko Jalan Braga hanya berselang seminggu setelah diluncurkan." }
                ],
                gallery: []
            }
        ],
        navigation: {
            prevLink: "/history/asal-usul",
            prevLabel: "Asal-usul",
            nextLink: "/history/peristiwa-penting",
            nextLabel: "Peristiwa Penting"
        }

    };

    return <HistoryPageLayout theme={theme} content={content} />;
}
