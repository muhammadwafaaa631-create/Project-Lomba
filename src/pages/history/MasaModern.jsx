import HistoryPageLayout from "../../components/history/HistoryPageLayout";
import bandungModernBg from "../../assets/history/Bandung Modern.jpg";
import metropolitan from "../../assets/history/Metropolitan.jpg";
import bandungModernNow from "../../assets/history/Bandung modern Now.jpg";
import zamanEmas from "../../assets/history/Zaman Emas.jpg";
import ridwanKamil from "../../assets/history/Ridwan Kamil.jpg";
import zakyMuhammadSyah from "../../assets/history/Zaky Muhammad Syah.jpg";
import raWiranatakusumah from "../../assets/history/R.A. Wiranatakusumah II.webp";

export default function MasaModern() {
    const theme = {
        accentColor: "text-[#8B5CF6]",
        accentBg: "bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4]",
        accentBorder: "border-[#8B5CF6]/30",
        textColor: "text-[#A78BFA]",
        mood: 'futuristic'
    };

    const content = {
        hero: {
            subtitle: "Bandung Modern",

            bgImage: bandungModernBg
        },
        timeline: [
            {
                year: "1990",
                label: "Urban",
                title: "Pertumbuhan Metropolitan",
                description: "Bandung bertransformasi menjadi pusat pendidikan dan jasa terbesar di Jawa Barat.",
                longDescription: "Pembangunan infrastruktur besar-besaran seperti Jembatan Pasupati dan pengembangan pusat perbelanjaan mengubah wajah kota dari 'Garden City' menjadi 'Metropolitan'.",
                image: metropolitan,
                impactText: "Mendorong pergeseran ekonomi dari industri ke sektor jasa dan pariwisata.",
                impactPoints: [
                    { title: "Kepadatan", text: "Terjadinya urbanisasi pesat yang menantang tata ruang kota." },
                    { title: "Gaya Hidup", text: "Lahirnya pusat-pusat belanja dan kuliner modern." }
                ],
                figures: [
                    { name: "R.A. Wiranatakusumah II", role: "Administrator", desc: "Pengelola pembangunan infrastruktur regional Bandung Raya.", image: raWiranatakusumah }
                ],
                facts: [
                    { title: "Fun Fact: Jembatan Raksasa", text: "Jembatan Pasupati adalah salah satu jembatan pilar tunggal (cable-stayed) pertama yang dibangun di Indonesia, membentang sepanjang 2,8 km melintasi lebak Cikapundung." }
                ],
                gallery: []
            },
            {
                year: "2014",
                label: "Smart",
                title: "Inovasi Smart City",
                description: "Implementasi teknologi informasi dalam tata kelola kota untuk meningkatkan layanan publik.",
                longDescription: "Bandung Command Center diluncurkan sebagai pusat data dan pengawasan kota real-time. Ribuan aplikasi digital dikembangkan untuk mempermudah urusan warga.",
                image: zamanEmas,
                impactText: "Efisiensi birokrasi dan peningkatan transparansi pemerintahan.",
                impactPoints: [
                    { title: "Digitalisasi", text: "Hampir seluruh layanan publik dapat diakses melalui ponsel." },
                    { title: "Interaksi", text: "Warga dapat langsung melaporkan masalah kota melalui media sosial." }
                ],
                figures: [
                    { name: "Ridwan Kamil", role: "Arsitek/Wali Kota", desc: "Pencetus konsep Smart City dan desain taman tematik.", image: ridwanKamil }
                ],
                facts: [
                    { title: "Fun Fact: Command Center ala Star Trek", text: "Bandung Command Center didesain secara unik dan futuristik menyerupai pesawat antariksa USS Enterprise di film Star Trek." }
                ],
                gallery: []
            },
            {
                year: "Now",
                label: "Creative",
                title: "UNESCO Creative City",
                description: "Penetapan Bandung sebagai bagian dari jaringan kota kreatif dunia oleh UNESCO.",
                longDescription: "Pengakuan ini diberikan atas kontribusi besar Bandung dalam bidang desain. Ekonomi kreatif kini menjadi tulang punggung pertumbuhan kota bagi talenta muda.",
                image: bandungModernNow,
                impactText: "Memperkuat identitas Bandung sebagai kota pendidikan dan kreativitas global.",
                impactPoints: [
                    { title: "Ekonomi Baru", text: "Sektor kreatif menyumbang porsi besar terhadap PDRB kota." },
                    { title: "Networking", text: "Koneksi global dengan kota-kota kreatif lain di seluruh dunia." }
                ],
                figures: [
                    { name: "Zaky Muhammad Syah", role: "Inovator", desc: "Ribuan desainer, musisi, dan teknokrat muda Bandung.", image: zakyMuhammadSyah }
                ],
                facts: [
                    { title: "Fun Fact: Kota Desain Pertama", text: "Bandung adalah kota pertama di Asia Tenggara yang secara resmi dianugerahi gelar 'City of Design' dalam Jaringan Kota Kreatif (UCCN) oleh UNESCO." }
                ],
                gallery: []
            }
        ],
        navigation: {
            prevLink: "/history/peristiwa-penting",
            prevLabel: "Peristiwa Penting"
        }

    };

    return <HistoryPageLayout theme={theme} content={content} />;
}
