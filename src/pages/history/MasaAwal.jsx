import HistoryPageLayout from "../../components/history/HistoryPageLayout";
import tatarUkurImg from "../../assets/history/tatar_ukur.png";
import dayeuhkolotImg from "../../assets/history/dayeuhkolot.png";

export default function MasaAwal() {
    const theme = {
        accentColor: "text-[#D97706]",
        accentBg: "bg-[#D97706]",
        accentBorder: "border-[#D97706]/30",
        textColor: "text-[#F59E0B]",
        mood: 'ancient'
    };

    const content = {
        hero: {
            subtitle: "Asal-usul Nama Bandung",
            bgImage: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=2000"
        },

        timeline: [
            {
                year: "Purba",
                label: "Danau Bandung",
                title: "Terbentuknya Cekungan Purba",
                description: "Ribuan tahun lalu, dataran Bandung adalah sebuah danau raksasa yang dikenal sebagai Danau Purba Bandung, hasil dari letusan dahsyat Gunung Sunda.",
                longDescription: "Secara geologis, letusan ini membendung Sungai Citarum, menciptakan kaldera besar yang terisi air. Wilayah ini menjadi embrio kehidupan di pegunungan Jawa Barat.",
                image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800",
                impactText: "Transformasi geologis ini menciptakan tanah vulkanik yang sangat subur bagi peradaban mendatang.",
                impactPoints: [
                    { title: "Kesuburan Tanah", text: "Endapan dasar danau menciptakan lahan pertanian terbaik di Jawa." },
                    { title: "Mitologi Lokal", text: "Melahirkan legenda Sangkuriang sebagai memori kolektif masyarakat." }
                ],
                figures: [
                    { name: "Manusia Purba", role: "Pionir", desc: "Komunitas awal yang mendiami gua-gua di perbukitan sekitar danau.", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200" }
                ],
                facts: [
                    { title: "Sangkuriang", text: "Legenda ini dianggap sebagai rekaman lisan peristiwa jebolnya bendungan alami sungai Citarum." }
                ],
                gallery: [
                    { image: "https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?auto=format&fit=crop&q=80&w=800", caption: "Perbukitan Purba" }
                ]
            },
            {
                year: "1400-an",
                label: "Tatar Ukur",
                title: "Era Kerajaan Pajajaran",
                description: "Wilayah Bandung menjadi bagian dari Tatar Ukur, sebuah daerah penyangga strategis di bawah kekuasaan Kerajaan Pajajaran.",
                longDescription: "Masyarakat mulai membangun pemukiman semi-permanen. Tatar Ukur dikenal sebagai penghasil sumber daya alam yang melimpah bagi keraton di Bogor.",
                image: tatarUkurImg,
                impactText: "Status sebagai daerah penyangga memperkuat posisi administratif wilayah ini sejak dini.",
                impactPoints: [
                    { title: "Struktur Sosial", text: "Mulai terbentuknya sistem kepemimpinan lokal (Ukur)." },
                    { title: "Jalur Upeti", text: "Terbentuknya jalur distribusi tradisional ke pusat kerajaan." }
                ],
                figures: [
                    { name: "Prabu Geusan Ulun", role: "Raja Sumedang Larang", desc: "Pemimpin yang mewarisi kekuasaan Pajajaran di wilayah ini.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" }
                ],
                facts: [
                    { title: "Benteng Alami", text: "Hutan lebat dan pegunungan menjadikan Bandung benteng perlindungan alami kerajaan." }
                ],
                gallery: []
            },
            {
                year: "1641",
                label: "Kabupaten",
                title: "Lahirnya Kabupaten Bandung",
                description: "Tumenggung Wiraangunangun diangkat sebagai Bupati Bandung pertama dengan pusat pemerintahan di Krapyak (Dayeuhkolot).",
                longDescription: "Pemilihan Krapyak karena letaknya yang strategis di pinggir sungai Citarum, meskipun pada akhirnya wilayah ini terbukti rawan banjir.",
                image: dayeuhkolotImg,
                impactText: "Resminya status Kabupaten menandai lahirnya birokrasi pemerintahan terpadu di Bandung.",
                impactPoints: [
                    { title: "Ibukota Pertama", text: "Krapyak ditetapkan sebagai pusat administratif dan budaya." },
                    { title: "Hubungan Mataram", text: "Pengaruh politik Mataram mulai memperkuat struktur pemerintahan lokal." }
                ],
                figures: [
                    { name: "Wiraangunangun", role: "Bupati I", desc: "Peletak dasar birokrasi pemerintahan Kabupaten Bandung.", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200" }
                ],
                facts: [
                    { title: "Arti Krapyak", text: "Krapyak berarti pagar kayu atau kandang, merujuk pada area perburuan raja yang dipagari." }
                ],
                gallery: [
                    { image: dayeuhkolotImg, caption: "Sketsa Dayeuhkolot Kuno" }
                ]
            }
        ],
        navigation: {
            nextLink: "/history/kolonial",
            nextLabel: "Masa Kolonial"
        }

    };

    return <HistoryPageLayout theme={theme} content={content} />;
}
