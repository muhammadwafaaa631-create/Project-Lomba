import HistoryPageLayout from "../../components/history/HistoryPageLayout";
import jalanRayaPosImg from "../../assets/history/jalan_raya_pos.png";

export default function PendirianKota() {
    const theme = {
        accentColor: "text-[#92400E]",
        accentBg: "bg-[#92400E]",
        accentBorder: "border-[#92400E]/30",
        textColor: "text-[#B45309]",
        mood: 'colonial'
    };

    const content = {
        hero: {
            subtitle: "Pendirian Kota",
            bgImage: "https://images.unsplash.com/photo-1596431940175-3bb7242c163b?auto=format&fit=crop&q=80&w=2000"
        },
        timeline: [
            {
                year: "1808",
                label: "Postweg",
                title: "Pembangunan Jalan Raya Pos",
                description: "Daendels memulai proyek raksasa jalan sepanjang 1.000 km dari Anyer ke Panarukan, melewati pedalaman Priangan.",
                longDescription: "Proyek ambisius ini bertujuan untuk mempermudah pertahanan militer dan pengiriman logistik. Tanpa jalan ini, Bandung mungkin akan tetap menjadi wilayah pedalaman yang terisolasi.",
                image: jalanRayaPosImg,
                impactText: "Membuka isolasi geografis Bandung dan menjadikannya titik singgah logistik utama di Jawa.",
                impactPoints: [
                    { title: "Aksesibilitas", text: "Menghubungkan Bandung langsung dengan pusat ekonomi di pesisir utara." },
                    { title: "Modernisasi", text: "Memperkenalkan metode konstruksi jalan modern ala Eropa ke pedalaman." }
                ],
                figures: [
                    { name: "Daendels", role: "Gubernur Jenderal", desc: "Arsitek 'Grote Postweg' yang keras dan disiplin.", image: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?auto=format&fit=crop&q=80&w=200" }
                ],
                facts: [
                    { title: "Fun Fact: Grote Postweg", text: "Proyek jalan ini sangat panjang. Di Bandung masa kini, sisa Grote Postweg menjadi nama jalan protokol utama seperti Jl. Jenderal Sudirman dan Jl. Asia Afrika." }
                ],
                gallery: []
            },
            {
                year: "1810",
                label: "Relokasi",
                title: "Instruksi Pemindahan Ibukota",
                description: "Daendels menancapkan tongkatnya di tepi Cikapundung dan memerintahkan pembangunan sebuah kota di sisi Jalan Raya Pos.",
                longDescription: "Bupati Bandung R.A. Wiranatakusumah II secara strategis memilih lokasi yang kini menjadi Alun-alun untuk menghindari banjir tahunan di Krapyak.",
                image: "https://images.unsplash.com/photo-1510563800743-aed236490d08?auto=format&fit=crop&q=80&w=800",
                impactText: "Menetapkan standar tata ruang kota kolonial yang bertahan selama berabad-abad.",
                impactPoints: [
                    { title: "Tata Kota", text: "Pembagian wilayah Alun-alun, Pendopo, dan Masjid sesuai pola tradisional Sunda-Eropa." },
                    { title: "Titik Nol", text: "Ditetapkannya Kilometer Nol sebagai jantung administrasi baru." }
                ],
                figures: [
                    { name: "Wiranatakusumah II", role: "Bupati Bandung", desc: "Sang pendiri yang visioner memilih lokasi strategis di dataran tinggi.", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200" }
                ],
                facts: [
                    { title: "Fun Fact: Tongkat Daendels", text: "Lokasi persis Daendels menancapkan tongkat saat berucap 'Zorg, dat als ik terug kom hier een stad is gebouwd' kini ditandai dengan monumen Stoomwals (mesin giling) di dekat Gedung Merdeka." }
                ],
                gallery: []
            },
            {
                year: "25 Sep",
                label: "HUT Kota",
                title: "Peresmian Nama Bandung",
                description: "Tanggal bersejarah dimana ibukota resmi dipindahkan dan wilayah baru mulai dihuni secara administratif.",
                longDescription: "Dengan peresmian ini, Bandung resmi menjadi 'Gemeente' atau kotapraja yang memiliki otonomi dalam pembangunan infrastruktur.",
                image: "https://images.unsplash.com/photo-1611603221171-8bc4f3954605?auto=format&fit=crop&q=80&w=800",
                impactText: "Menandai perubahan status Bandung dari sekadar persinggahan menjadi pusat pemerintahan.",
                impactPoints: [
                    { title: "Kedaulatan", text: "Bandung mulai memiliki struktur pemerintahan mandiri." },
                    { title: "Identitas", text: "Lahirnya identitas 'Warga Bandung' yang modern." }
                ],
                figures: [
                    { name: "Wiranatakusumah II", role: "Dalem Kaum", desc: "Dikenal sangat dicintai rakyatnya hingga dimakamkan di Masjid Agung.", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200" }
                ],
                facts: [
                    { title: "Fun Fact: Hari Jadi Kota", text: "Tanggal 25 September 1810 merujuk pada dikeluarkannya 'besluit' (surat keputusan) Daendels mengenai status hukum Kota Bandung, menjadikannya hari ulang tahun resmi." }
                ],
                gallery: []
            }
        ],
        navigation: {
            prevLink: "/history/masa-awal",
            prevLabel: "Masa Awal",
            nextLink: "/history/hindia-belanda",
            nextLabel: "Hindia Belanda"
        }
    };

    return <HistoryPageLayout theme={theme} content={content} />;
}
