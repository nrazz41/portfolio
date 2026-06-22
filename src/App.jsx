import React, { useState, useEffect, useRef } from "react";
import {
  Terminal,
  Code2,
  Layers,
  Award,
  User,
  Briefcase,
  BookOpen,
  Mail,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  Zap,
  ExternalLink,
  ChevronRight,
} from "lucide-react";

// Custom hook untuk animasi scroll reveal
const useScrollReveal = (threshold = 0.1) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible];
};

export default function App() {
  const [activeTab, setActiveTab] = useState("internship");
  const [projectFilter, setProjectFilter] = useState("All");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const projects = [
    {
      title: "Sistem Monitoring SCADA",
      category: "Web Development",
      desc: "Rancang bangun sistem monitoring otomatis untuk deteksi pelanggaran SLA dan generasi Work Order semi-otomatis.",
      tags: ["Laravel", "MySQL", "SCADA Automation", "ETL"],
      company: "PT Mobilkom Telekomindo",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      link: "#",
    },
    {
      title: "Website Aksen Coffee",
      category: "Web Development",
      desc: "Pengembangan website bisnis kedai kopi berbasis framework Laravel untuk meningkatkan manajemen digital.",
      tags: ["Laravel", "Frontend", "Backend"],
      company: "Academic Project",
      image:
        "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&h=400&fit=crop",
      link: "#",
    },
    {
      title: "Sistem Peminjaman Ruangan PCR",
      category: "Enterprise System",
      desc: "Aplikasi internal manajemen dan peminjaman fasilitas ruangan di Politeknik Caltex Riau.",
      tags: ["Oracle APEX", "PL/SQL", "Database Design"],
      company: "Academic Project",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
      link: "#",
    },
    {
      title: "UI/UX App INNOSKILL",
      category: "UI/UX Design",
      desc: "Desain platform pengembangan keterampilan dengan fitur kursus online, simulasi, dan rekomendasi kerja.",
      tags: ["Figma", "Wireframing", "User Research", "Prototyping"],
      company: "Design Project",
      image:
        "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&h=400&fit=crop",
      link: "#",
    },
    {
      title: "Analisis Beban Tugas Akademik",
      category: "Data & Research",
      desc: "Riset statistika mengenai pengaruh beban kuliah terhadap minat organisasi non-akademik mahasiswa SI 2023.",
      tags: ["Data Analysis", "Probability", "Excel", "Statistics"],
      company: "Academic Research",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      link: "#",
    },
    {
      title: "Capstone Project: Surat Paket",
      category: "Web Development",
      desc: "Sistem tracking dan manajemen surat masuk atau paket berbasis arsitektur native web.",
      tags: ["PHP Native", "HTML", "CSS", "MySQL"],
      company: "Capstone",
      image:
        "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=600&h=400&fit=crop",
      link: "#",
    },
  ];

  const filteredProjects =
    projectFilter === "All"
      ? projects
      : projects.filter((p) => p.category === projectFilter);

  // Scroll Reveal Refs
  const [heroRef, heroVisible] = useScrollReveal(0.1);
  const [aboutRef, aboutVisible] = useScrollReveal(0.1);
  const [skillsRef, skillsVisible] = useScrollReveal(0.1);
  const [expRef, expVisible] = useScrollReveal(0.1);
  const [projRef, projVisible] = useScrollReveal(0.05);
  const [achRef, achVisible] = useScrollReveal(0.1);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50/30 text-gray-800 font-sans antialiased overflow-x-hidden">
      {/* MODERN GLASS NAVBAR */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl bg-white/70 backdrop-blur-2xl border border-gray-200/50 rounded-2xl z-50 px-6 py-3 flex justify-between items-center shadow-lg shadow-gray-200/50 transition-all duration-300">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200">
            <Terminal size={18} className="text-white" />
          </div>
          <span className="font-bold text-lg tracking-tight text-gray-800">
            Nur Azizha 
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1">
          {["About", "Skills", "Experience", "Projects"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200"
            >
              {item}
            </a>
          ))}
          <a
            href="mailto:nur23si@mahasiswa.pcr.ac.id"
            className="ml-2 px-5 py-2 bg-blue-600 text-white text-sm font-medium rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300 flex items-center gap-2"
          >
            Contact <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {isMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-20 left-4 right-4 bg-white border border-gray-200 rounded-2xl shadow-2xl z-40 p-4 md:hidden">
          {["About", "Skills", "Experience", "Projects"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors font-medium"
            >
              {item}
            </a>
          ))}
          <a
            href="mailto:nur23si@mahasiswa.pcr.ac.id"
            className="block mt-2 px-4 py-3 bg-blue-600 text-white text-center rounded-xl font-medium"
          >
            Contact Me
          </a>
        </div>
      )}

      {/* HERO SECTION */}
      <section
        ref={heroRef}
        className={`pt-40 pb-24 px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 min-h-[90vh] transition-all duration-1000 ${
          heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="flex-1 space-y-6 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-sm text-blue-600 font-medium">
            <Sparkles size={14} className="animate-pulse" /> Available for
            opportunities
          </div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-none">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Nur Azizha
            </span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-500 font-medium flex items-center gap-2 justify-center md:justify-start">
            <span className="text-blue-600">&lt;</span>
            Information Systems Student
            <span className="text-blue-600"> /&gt;</span>
          </h2>
          <p className="text-gray-500 max-w-lg text-lg leading-relaxed">
            An enthusiastic developer and system analyst based in Politeknik
            Caltex Riau. Specializing in{" "}
            <span className="text-blue-600 font-semibold">
              Full-Stack Web Dev
            </span>{" "}
            &{" "}
            <span className="text-blue-600 font-semibold">System Analysis</span>
            .
          </p>
          <div className="flex gap-4 justify-center md:justify-start pt-4">
            <a
              href="#projects"
              className="group px-6 py-3.5 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300 hover:-translate-y-0.5 flex items-center gap-2"
            >
              Explore Works
              <ChevronRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="mailto:nur23si@mahasiswa.pcr.ac.id"
              className="px-6 py-3.5 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:border-blue-300 hover:text-blue-600 transition-all flex items-center gap-2 group"
            >
              Get In Touch
              <ArrowUpRight
                size={16}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </a>
          </div>
        </div>

        {/* Hero Image / Avatar */}
        <div className="flex-1 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
            <div className="relative w-72 h-80 md:w-80 md:h-[28rem] bg-white border-2 border-gray-100 rounded-3xl overflow-hidden shadow-2xl shadow-gray-200 group hover:shadow-blue-200 transition-shadow duration-500">
              <img
                src="images/profile.jpg"
                alt="Nur Azizha"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <p className="text-white font-bold text-lg">Nur Azizha</p>
                <p className="text-blue-200 text-sm">Systems Engineer</p>
              </div>
            </div>
            {/* Floating GPA Badge */}
            <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 animate-bounce">
              <div className="flex items-center gap-2">
                <Award className="text-blue-600" size={20} />
                <div>
                  <p className="text-xs text-gray-500">GPA</p>
                  <p className="font-bold text-gray-800">3.88 / 4.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" ref={aboutRef} className="py-24 px-6">
        <div
          className={`max-w-6xl mx-auto transition-all duration-1000 ${
            aboutVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
              About Me
            </span>
            <h2 className="text-4xl font-bold mt-2 text-gray-800">
              Professional Profile
            </h2>
            <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
              Get to know more about my background and education
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed text-lg">
                Mahasiswa Sistem Informasi yang memiliki antusiasme tinggi
                terhadap perkembangan teknologi informasi. Memiliki pengalaman
                nyata dalam rekayasa aplikasi berbasis web/mobile, integrasi
                data, serta arsitektur jaringan komputer.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                Sangat menyukai tantangan baru. Mampu menyeimbangkan antara
                logika pemrograman tingkat lanjut dengan kecakapan komunikasi
                publik, manajemen proyek, serta kepemimpinan tim yang adaptif.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-lg shadow-gray-100 hover:shadow-xl transition-shadow duration-300">
              <h4 className="font-semibold text-blue-600 flex items-center gap-2 mb-6">
                <BookOpen size={18} /> Education Timeline
              </h4>
              <div className="space-y-6">
                {[
                  {
                    school: "Politeknik Caltex Riau",
                    degree: "D3 Sistem Informasi",
                    year: "2023 - Present",
                    gpa: "3.88",
                    active: true,
                  },
                  {
                    school: "SMA Negeri 1 Mandau",
                    degree: "MIPA",
                    year: "2020 - 2023",
                    active: false,
                  },
                  {
                    school: "SMP Negeri 2 Mandau",
                    degree: "Duri",
                    year: "2017 - 2020",
                    active: false,
                  },
                ].map((edu, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-3 h-3 rounded-full ${edu.active ? "bg-blue-600 ring-4 ring-blue-100" : "bg-gray-300"}`}
                      ></div>
                      {i < 2 && (
                        <div className="w-0.5 h-full bg-gray-200 mt-1"></div>
                      )}
                    </div>
                    <div className="pb-6">
                      <h5 className="font-semibold text-gray-800">
                        {edu.school}
                      </h5>
                      <p className="text-sm text-gray-500">{edu.degree}</p>
                      <p className="text-xs text-gray-400">{edu.year}</p>
                      {edu.gpa && (
                        <span className="inline-block mt-1 px-2 py-0.5 bg-blue-50 text-blue-600 text-xs font-medium rounded-lg">
                          GPA {edu.gpa}/4.00
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" ref={skillsRef} className="py-24 bg-gray-50 px-6">
        <div
          className={`max-w-6xl mx-auto transition-all duration-1000 ${
            skillsVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
              Skills
            </span>
            <h2 className="text-4xl font-bold mt-2 text-gray-800">
              Tech Stack & Tools
            </h2>
            <p className="text-gray-500 mt-2">
              Technologies I work with on a daily basis
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Code2 size={24} />,
                title: "Hard Skills",
                desc: "UI/UX Design, Full-Stack Dev, Data Visualization, ReactJS, Laravel, PHP Native, HTML, CSS",
                gradient: "from-blue-500 to-blue-600",
              },
              {
                icon: <Layers size={24} />,
                title: "Software Core",
                desc: "VSCode, Figma, Google Colab, Android Studio, Cisco Packet Tracer, Oracle APEX, Microsoft Office Suite",
                gradient: "from-blue-600 to-indigo-600",
              },
              {
                icon: <Zap size={24} />,
                title: "Interpersonal",
                desc: "Leadership, Problem Solving, Critical Thinking, Public Speaking, Time Management, Team Work",
                gradient: "from-indigo-600 to-violet-600",
              },
            ].map((skill, i) => (
              <div
                key={i}
                className="group bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-default"
              >
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${skill.gradient} flex items-center justify-center mb-5 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  {skill.icon}
                </div>
                <h4 className="font-semibold text-xl text-gray-800 mb-2">
                  {skill.title}
                </h4>
                <p className="text-gray-500 leading-relaxed">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" ref={expRef} className="py-24 px-6">
        <div
          className={`max-w-6xl mx-auto transition-all duration-1000 ${
            expVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
              Experience
            </span>
            <h2 className="text-4xl font-bold mt-2 text-gray-800">
              Work & Organizations
            </h2>
            <p className="text-gray-500 mt-2">
              My professional journey and community involvement
            </p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex p-1.5 bg-white border-2 border-gray-200 rounded-2xl shadow-sm">
              <button
                onClick={() => setActiveTab("internship")}
                className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  activeTab === "internship"
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                    : "text-gray-500 hover:text-gray-800"
                }`}
              >
                💼 Internship
              </button>
              <button
                onClick={() => setActiveTab("organization")}
                className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  activeTab === "organization"
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                    : "text-gray-500 hover:text-gray-800"
                }`}
              >
                👥 Organizations
              </button>
            </div>
          </div>

          {/* Internship Content */}
          {activeTab === "internship" && (
            <div className="bg-white rounded-3xl border border-gray-200 shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="grid md:grid-cols-5">
                <div className="md:col-span-2">
                  <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop"
                    alt="PT Mobilkom Telekomindo"
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:col-span-3 p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-2xl font-bold text-gray-800">
                        Web Developer & System Analyst
                      </h4>
                      <p className="text-blue-600 font-medium mt-1">
                        PT Mobilkom Telekomindo
                      </p>
                    </div>
                    <span className="px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-medium whitespace-nowrap">
                      Aug - Dec 2025
                    </span>
                  </div>
                  <div className="p-4 bg-blue-50 border-l-4 border-blue-600 rounded-r-xl mb-6">
                    <p className="text-gray-700 font-medium">
                      Project: Rancang Bangun Sistem Monitoring SCADA
                    </p>
                  </div>
                  <ul className="grid gap-3">
                    {[
                      "Merancang arsitektur sistem monitoring ketersediaan SCADA otomatis",
                      "Mendevelop modul Work Order semi-otomatis untuk akselerasi mitigasi",
                      "Membangun pipeline otomasi data ETL dari CSV SCADA ke MySQL",
                      "Menganalisis matriks status perangkat untuk validasi data",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2
                          size={18}
                          className="text-blue-600 shrink-0 mt-0.5"
                        />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Organization Content */}
          {activeTab === "organization" && (
            <div className="space-y-8">
              <div className="bg-white rounded-3xl border border-gray-200 shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="grid md:grid-cols-5">
                  <div className="md:col-span-2">
                    <img
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                      alt="Himasistifo"
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:col-span-3 p-8">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-2xl font-bold text-gray-800">
                          Himasistifo
                        </h4>
                        <p className="text-blue-600 font-medium mt-1">
                          Departemen Riset dan Teknologi
                        </p>
                      </div>
                      <span className="px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-medium whitespace-nowrap">
                        2024 - 2025
                      </span>
                    </div>
                    <p className="text-gray-600 mb-6">
                      Organisasi kemahasiswaan Sistem Informasi yang fokus pada
                      inkubasi kompetensi akademik dan riset teknologi.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Koordinator Hi-Tech 7 2025",
                        "Koordinator Capacity Building 2025",
                        "Pementor Workshop Business Plan",
                        "Koordinator WISNIGHT 2024",
                        "Anggota MUBES SI 2024",
                      ].map((role, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 bg-gray-50 text-gray-600 text-sm rounded-xl border border-gray-200 hover:border-blue-300 hover:text-blue-600 transition-all cursor-default"
                        >
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" ref={projRef} className="py-24 bg-gray-50 px-6">
        <div
          className={`max-w-6xl mx-auto transition-all duration-1000 ${
            projVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
              Portfolio
            </span>
            <h2 className="text-4xl font-bold mt-2 text-gray-800">
              Featured Projects
            </h2>
            <p className="text-gray-500 mt-2">
              Selected works and technical buildouts
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex justify-center mb-12">
            <div className="flex flex-wrap justify-center gap-2 p-1.5 bg-white border-2 border-gray-200 rounded-2xl shadow-sm">
              {[
                "All",
                "Web Development",
                "UI/UX Design",
                "Data & Research",
                "Enterprise System",
              ].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setProjectFilter(cat)}
                  className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                    projectFilter === cat
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                      : "text-gray-500 hover:text-gray-800 hover:bg-gray-50"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Project Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, i) => (
              <a
                key={i}
                href={project.link}
                className="group bg-white rounded-3xl border border-gray-200 shadow-sm hover:shadow-2xl hover:shadow-blue-100 hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col"
              >
                {/* Project Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white font-semibold flex items-center gap-1">
                      View Project <ExternalLink size={16} />
                    </span>
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-blue-600 text-xs font-semibold rounded-xl shadow-sm">
                      {project.category}
                    </span>
                  </div>
                </div>
                {/* Project Info */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h4>
                  </div>
                  <p className="text-gray-500 text-sm mb-4 flex-1 leading-relaxed">
                    {project.desc}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 3).map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 bg-gray-50 text-gray-500 text-xs rounded-lg border border-gray-100"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <ExternalLink
                      size={16}
                      className="text-gray-400 group-hover:text-blue-600 transition-colors"
                    />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ACHIEVEMENT & CONTACT */}
      <section ref={achRef} className="py-24 px-6">
        <div
          className={`max-w-6xl mx-auto transition-all duration-1000 ${
            achVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* Achievement Card */}
            <div className="bg-white rounded-3xl border border-gray-200 shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-2 mb-6">
                <Award className="text-blue-600" size={28} />
                <h3 className="text-2xl font-bold text-gray-800">
                  Achievement
                </h3>
              </div>
              <div className="flex gap-4 items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center text-white shadow-lg">
                  <Award size={32} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-800">
                    2nd Place Winner
                  </h4>
                  <p className="text-gray-500">
                    Business Plan Workshop — HIMASISTIFO, PCR
                  </p>
                  <p className="text-sm text-gray-400">2023/2024</p>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl shadow-xl shadow-blue-200 p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
              <p className="text-blue-100 mb-8 leading-relaxed">
                Open for internship, collaboration, or technical discussions.
                Feel free to reach out!
              </p>
              <div className="grid grid-cols-3 gap-3">
                {/* GitHub - SVG Inline */}
                <a
                  href="https://github.com/nrazz41"
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all flex flex-col items-center justify-center gap-2 text-sm border border-white/20"
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span className="text-xs">GitHub</span>
                </a>

                {/* LinkedIn - SVG Inline */}
                <a
                  href="https://linkedin.com/in/nur-azizha-5b095b286"
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all flex flex-col items-center justify-center gap-2 text-sm border border-white/20"
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <span className="text-xs">LinkedIn</span>
                </a>

                {/* Email */}
                <a
                  href="mailto:nur23si@mahasiswa.pcr.ac.id"
                  className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all flex flex-col items-center justify-center gap-2 text-sm border border-white/20"
                >
                  <Mail size={22} />
                  <span className="text-xs">Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 text-center border-t border-gray-100">
        <p className="text-gray-400 text-sm">
          © 2026 Nur Azizha. Crafted with ❤️ using React & Tailwind CSS.
        </p>
      </footer>
    </div>
  );
}
