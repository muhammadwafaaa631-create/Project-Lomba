import HistoryPageLayout from "../../components/history/HistoryPageLayout";

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

            bgImage: "https://images.unsplash.com/photo-1555655523-83262d142b9c?auto=format&fit=crop&q=80&w=2000"
        },
        timeline: [
            {
                year: "1990",
                label: "Urban",
                title: "Pertumbuhan Metropolitan",
                description: "Bandung bertransformasi menjadi pusat pendidikan dan jasa terbesar di Jawa Barat.",
                longDescription: "Pembangunan infrastruktur besar-besaran seperti Jembatan Pasupati dan pengembangan pusat perbelanjaan mengubah wajah kota dari 'Garden City' menjadi 'Metropolitan'.",
                image: "https://images.unsplash.com/photo-1596431941219-c188b8e843f5?auto=format&fit=crop&q=80&w=1200",
                impactText: "Mendorong pergeseran ekonomi dari industri ke sektor jasa dan pariwisata.",
                impactPoints: [
                    { title: "Kepadatan", text: "Terjadinya urbanisasi pesat yang menantang tata ruang kota." },
                    { title: "Gaya Hidup", text: "Lahirnya pusat-pusat belanja dan kuliner modern." }
                ],
                figures: [
                    { name: "Pemerintah Jabar", role: "Administrator", desc: "Pengelola pembangunan infrastruktur regional Bandung Raya.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" }
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
                image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
                impactText: "Efisiensi birokrasi dan peningkatan transparansi pemerintahan.",
                impactPoints: [
                    { title: "Digitalisasi", text: "Hampir seluruh layanan publik dapat diakses melalui ponsel." },
                    { title: "Interaksi", text: "Warga dapat langsung melaporkan masalah kota melalui media sosial." }
                ],
                figures: [
                    { name: "Ridwan Kamil", role: "Arsitek/Wali Kota", desc: "Pencetus konsep Smart City dan desain taman tematik.", image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&q=80&w=200" }
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
                image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800",
                impactText: "Memperkuat identitas Bandung sebagai kota pendidikan dan kreativitas global.",
                impactPoints: [
                    { title: "Ekonomi Baru", text: "Sektor kreatif menyumbang porsi besar terhadap PDRB kota." },
                    { title: "Networking", text: "Koneksi global dengan kota-kota kreatif lain di seluruh dunia." }
                ],
                figures: [
                    { name: "Pelaku Kreatif", role: "Inovator", desc: "Ribuan desainer, musisi, dan teknokrat muda Bandung.", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200" }
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
