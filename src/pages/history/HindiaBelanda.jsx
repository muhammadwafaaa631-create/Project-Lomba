import HistoryPageLayout from "../../components/history/HistoryPageLayout";

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
            subtitle: "Hindia Belanda",
            bgImage: "https://images.unsplash.com/photo-1596431940175-3bb7242c163b?auto=format&fit=crop&q=80&w=2000"
        },
        timeline: [
            {
                year: "1906",
                label: "Gemeente",
                title: "Otonomi Kotapraja Bandung",
                description: "Bandung secara resmi ditetapkan sebagai kotamadya (gemeente) yang mandiri, memulai pembangunan kota modern.",
                longDescription: "Status ini memungkinkan pemerintah lokal mengelola anggaran sendiri untuk infrastruktur, penerangan jalan, dan sanitasi yang mengubah Bandung menjadi kota paling bersih di Hindia Belanda.",
                image: "https://images.unsplash.com/photo-1605335133642-45452d9a33bb?auto=format&fit=crop&q=80&w=800",
                impactText: "Meluncurkan standar perencanaan kota skala besar pertama di Indonesia.",
                impactPoints: [
                    { title: "Infrastruktur", text: "Pembangunan sistem drainase dan jaringan jalan modern." },
                    { title: "Eropa Kecil", text: "Dimulainya pembangunan kawasan pemukiman elit bergaya Barat." }
                ],
                figures: [
                    { name: "Roth", role: "Pengusaha", desc: "Seseorang yang mempromosikan keindahan Bandung ke dunia luar.", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200" }
                ],
                facts: [
                    { title: "Paris van Java", text: "Julukan ini pertama kali digunakan untuk menarik wisatawan Eropa ke pasar malam tahunan di Bandung." }
                ],
                gallery: []
            },
            {
                year: "1920",
                label: "Ibukota",
                title: "Rencana Menjadi Ibukota Kolonial",
                description: "Pemerintah Belanda sempat merencanakan pemindahan ibukota dari Batavia ke Bandung karena udaranya yang lebih sejuk.",
                longDescription: "Gedung Sate dibangun sebagai kantor Departemen Pekerjaan Umum, bagian dari megaproyek pemindahan pusat administrasi negara ke dataran tinggi yang lebih sehat.",
                image: "https://images.unsplash.com/photo-1590424600649-ceb5b31e9233?auto=format&fit=crop&q=80&w=800",
                impactText: "Mewariskan gedung-gedung monumental berskala nasional di Bandung.",
                impactPoints: [
                    { title: "Sentra Intelektual", text: "Berdirinya ITB sebagai institusi teknik tertua di Indonesia." },
                    { title: "Pusat Militer", text: "Relokasi pusat komando militer ke wilayah Cimahi dan Bandung." }
                ],
                figures: [
                    { name: "J. Gerber", role: "Arsitek", desc: "Perancang utama Gedung Sate yang ikonik.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" }
                ],
                facts: [
                    { title: "Gulden & Sate", text: "Puncak Gedung Sate dengan 6 buah tusuk sate melambangkan biaya 6 juta gulden yang dikeluarkan." }
                ],
                gallery: []
            },
            {
                year: "1930",
                label: "Art Deco",
                title: "Zaman Emas Arsitektur Modern",
                description: "Periode dimana gaya arsitektur Art Deco memuncak, menghadirkan mahakarya seperti Villa Isola dan Savoy Homann.",
                longDescription: "Bandung menjadi laboratorium arsitektur dunia. Para arsitek Belanda menggabungkan teknologi modern dengan elemen tropis, menciptakan gaya ssitektur 'Indisch' yang unik.",
                image: "https://images.unsplash.com/photo-1612470659837-14283b9c9ca3?auto=format&fit=crop&q=80&w=800",
                impactText: "Menjadikan Bandung sebagai salah satu kota dengan koleksi Art Deco terbanyak di dunia.",
                impactPoints: [
                    { title: "Gaya Hidup", text: "Jalan Braga menjadi pusat fesyen dan hiburan kelas atas." },
                    { title: "Turisme", text: "Bandung mulai dikenal secara internasional sebagai destinasi wisata tropis premium." }
                ],
                figures: [
                    { name: "Wolff Schoemaker", role: "Arsitek Jenius", desc: "Guru dari Ir. Soekarno yang banyak merancang gedung Art Deco di Bandung.", image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&q=80&w=200" }
                ],
                facts: [
                    { title: "Braga Fashion", text: "Braga adalah tempat mode Paris terbaru dijual hanya berselang seminggu setelah peluncuran di Prancis." }
                ],
                gallery: []
            }
        ],
        navigation: {
            prevLink: "/history/pendirian-kota",
            prevLabel: "Pendirian Kota",
            nextLink: "/history/kemerdekaan",
            nextLabel: "Masa Kemerdekaan"
        }
    };

    return <HistoryPageLayout theme={theme} content={content} />;
}
