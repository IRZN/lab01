import { useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  Code2,
  ArrowUpRight,
  GraduationCap,
  BriefcaseBusiness,
  Smartphone,
} from "lucide-react";

const perfil = {
  nome: "Iury Emanuel Alves da Silva",
  cargo: "Estudante de Tecnologia",
  email: "1582237@pucminas.edu.com",
  github: "https://github.com/IRZN",
  linkedin: "https://linkedin.com/Iury Emanuel",
  whatsapp: "https://wa.me/+31988776655",
  sobre:
    "Sou estudante de tecnologia, interessado em desenvolvimento web, programação e inovação. Busco desenvolver minhas habilidades por meio de projetos práticos e aprendizado contínuo.",
  about:
    "I am a technology student interested in web development, programming, and innovation. I aim to improve my skills through practical projects and continuous learning.",
};

const projetos = [
  {
    nome: "Primeiro Projeto",
    ano: 2024,
    descricao: "Projeto para praticar HTML, CSS e JavaScript.",
    tecnologias: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/",
  },
  {
    nome: "Aplicação Web",
    ano: 2025,
    descricao: "Aplicação web com interface responsiva.",
    tecnologias: ["React", "CSS", "JavaScript"],
    github: "https://github.com/",
  },
  {
    nome: "Portfólio Profissional",
    ano: 2026,
    descricao: "Site para apresentar projetos e experiências.",
    tecnologias: ["React", "Vite", "CSS"],
    github: "https://github.com/",
  },
];

const experiencias = [
  {
    cargo: "Estudante de Tecnologia",
    empresa: "Formação acadêmica",
    periodo: "2024 – Atual",
    descricao:
      "Estudos de programação, lógica computacional e desenvolvimento web.",
  },
  {
    cargo: "Desenvolvedor em formação",
    empresa: "Projetos pessoais",
    periodo: "2025 – Atual",
    descricao:
      "Prática de desenvolvimento de aplicações e utilização do Git e GitHub.",
  },
];

const habilidades = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "Vite",
  "Git e GitHub",
];

export default function App() {
  const [idioma, setIdioma] = useState("pt");
  const [menuAberto, setMenuAberto] = useState(false);

  const ingles = idioma === "en";

  const textos = ingles
    ? {
        sobre: "About Me",
        projetos: "Projects",
        experiencias: "Experience",
        contato: "Contact",
        inicio: "HELLO! I'M",
        chamada: "Turning ideas into",
        destaque: "digital solutions.",
        descricao:
          "Technology student and aspiring developer passionate about creating digital solutions.",
        botao: "View projects",
        resumo: "ABOUT ME",
        habilidades: "Technical Skills",
        tecnologia: "Technologies I study and use in my projects.",
        meusProjetos: "MY WORK",
        projetosDesc: "A timeline of my personal and academic projects.",
        minhaExperiencia: "MY JOURNEY",
        experienciaDesc: "My academic and practical experience.",
        vamosConversar: "LET'S TALK",
        contatoDesc: "Get in touch through my professional channels.",
        repositorio: "View repository",
        formacao: "Academic education",
        interesses: "Interests",
        rodape: "Professional portfolio — Academic project.",
      }
    : {
        sobre: "Sobre Mim",
        projetos: "Projetos",
        experiencias: "Experiências",
        contato: "Contato",
        inicio: "OLÁ! EU SOU",
        chamada: "Transformando ideias em",
        destaque: "soluções digitais.",
        descricao:
          "Estudante de tecnologia e desenvolvedor em formação, interessado em criar soluções digitais.",
        botao: "Ver projetos",
        resumo: "SOBRE MIM",
        habilidades: "Habilidades técnicas",
        tecnologia: "Tecnologias que estudo e utilizo nos meus projetos.",
        meusProjetos: "MEU TRABALHO",
        projetosDesc: "Uma linha do tempo dos meus projetos pessoais e acadêmicos.",
        minhaExperiencia: "MINHA TRAJETÓRIA",
        experienciaDesc: "Minha evolução acadêmica e prática.",
        vamosConversar: "VAMOS CONVERSAR?",
        contatoDesc: "Entre em contato pelos meus canais profissionais.",
        repositorio: "Ver repositório",
        formacao: "Formação acadêmica",
        interesses: "Interesses",
        rodape: "Portfólio profissional — Projeto acadêmico.",
      };

  return (
    <>
      <header className="header">
        <a className="logo" href="#inicio">
          Meu<span>Portfólio.</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuAberto(!menuAberto)}
          aria-label="Abrir ou fechar menu"
        >
          {menuAberto ? <X /> : <Menu />}
        </button>

        <nav className={menuAberto ? "nav nav-open" : "nav"}>
          <a href="#sobre" onClick={() => setMenuAberto(false)}>
            {textos.sobre}
          </a>
          <a href="#projetos" onClick={() => setMenuAberto(false)}>
            {textos.projetos}
          </a>
          <a href="#experiencias" onClick={() => setMenuAberto(false)}>
            {textos.experiencias}
          </a>
          <a href="#contato" onClick={() => setMenuAberto(false)}>
            {textos.contato}
          </a>
        </nav>

        <button
          className="language-button"
          onClick={() => setIdioma(ingles ? "pt" : "en")}
        >
          {ingles ? "PT" : "EN"}
        </button>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-content">
            <span className="eyebrow">{textos.inicio}</span>
            <h1>
              {perfil.nome}
              <br />
              {textos.chamada}
              <br />
              <span className="gradient-text">{textos.destaque}</span>
            </h1>

            <p className="hero-description">{textos.descricao}</p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projetos">
                {textos.botao} <ArrowUpRight size={18} />
              </a>
              <a className="button button-secondary" href="#contato">
                {textos.contato}
              </a>
            </div>

            <div className="hero-meta">
              <a href={perfil.github} target="_blank" rel="noreferrer">
                <Github size={18} /> GitHub
              </a>
              <a href={perfil.linkedin} target="_blank" rel="noreferrer">
                <Linkedin size={18} /> LinkedIn
              </a>
            </div>
          </div>

          <div className="code-card">
            <div className="code-header">
              <span className="dot red" />
              <span className="dot yellow" />
              <span className="dot green" />
              <span>developer.js</span>
            </div>
            <pre>
              <span className="code-purple">const developer = {"{"}</span>
              {"\n  "}nome: <span className="code-green">"{perfil.nome}"</span>,
              {"\n  "}área: <span className="code-green">"Tecnologia"</span>,
              {"\n  "}skills: [<span className="code-green">"React"</span>,{" "}
              <span className="code-green">"JavaScript"</span>],
              {"\n  "}objetivo: <span className="code-green">"Aprender"</span>
              {"\n"}
              <span className="code-purple">{"};"}</span>
            </pre>
          </div>
        </section>

        <section className="section" id="sobre">
          <div className="section-heading">
            <span className="eyebrow">{textos.resumo}</span>
            <h2>{textos.sobre}</h2>
          </div>

          <div className="about-grid">
            <article className="panel about-panel">
              <h3>🇧🇷 Português</h3>
              <p>{perfil.sobre}</p>
            </article>
            <article className="panel about-panel">
              <h3>🌎 English</h3>
              <p>{perfil.about}</p>
            </article>
          </div>

          <div className="about-details">
            <article className="panel detail-panel">
              <span className="detail-label">{textos.formacao}</span>
              <strong>Engenharia de Software</strong>
            </article>
            <article className="panel detail-panel">
              <span className="detail-label">{textos.interesses}</span>
              <div className="tag-list">
                <span className="tag">Desenvolvimento Web</span>
                <span className="tag">Programação</span>
                <span className="tag">Inovação</span>
              </div>
            </article>
          </div>
        </section>

        <section className="section section-alt" id="habilidades">
          <div className="section-heading">
            <span className="eyebrow">TECNOLOGIAS</span>
            <h2>{textos.habilidades}</h2>
            <p className="section-subtitle">{textos.tecnologia}</p>
          </div>

          <div className="skills-grid">
            {habilidades.map((habilidade) => (
              <article className="skill-card" key={habilidade}>
                <Code2 size={24} />
                <h3>{habilidade}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="projetos">
          <div className="section-heading">
            <span className="eyebrow">{textos.meusProjetos}</span>
            <h2>{textos.projetos}</h2>
            <p className="section-subtitle">{textos.projetosDesc}</p>
          </div>

          <div className="projects-timeline">
            {projetos.map((projeto) => (
              <article className="project-card" key={projeto.nome}>
                <div className="project-preview">
                  <Code2 size={40} />
                  <span className="project-year">{projeto.ano}</span>
                </div>
                <div className="project-body">
                  <h3>{projeto.nome}</h3>
                  <p>{projeto.descricao}</p>
                  <div className="tag-list">
                    {projeto.tecnologias.map((tec) => (
                      <span className="tag" key={tec}>
                        {tec}
                      </span>
                    ))}
                  </div>
                  <a
                    className="text-link"
                    href={projeto.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {textos.repositorio} <ArrowUpRight size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-alt" id="experiencias">
          <div className="section-heading">
            <span className="eyebrow">{textos.minhaExperiencia}</span>
            <h2>{textos.experiencias}</h2>
            <p className="section-subtitle">{textos.experienciaDesc}</p>
          </div>

          <div className="timeline">
            {experiencias.map((experiencia, index) => (
              <article className="timeline-item" key={experiencia.cargo}>
                <div className="timeline-icon">
                  {index === 0 ? (
                    <GraduationCap size={20} />
                  ) : (
                    <BriefcaseBusiness size={20} />
                  )}
                </div>
                <div className="experience-card">
                  <span className="experience-period">
                    {experiencia.periodo}
                  </span>
                  <h3>{experiencia.cargo}</h3>
                  <p className="experience-company">{experiencia.empresa}</p>
                  <p>{experiencia.descricao}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="contato">
          <div className="section-heading">
            <span className="eyebrow">{textos.vamosConversar}</span>
            <h2>{textos.contato}</h2>
            <p className="section-subtitle">{textos.contatoDesc}</p>
          </div>

          <div className="contact-grid">
            <a className="contact-card" href={`mailto:${perfil.email}`}>
              <Mail size={24} />
              <span>
                <small>{textos.contato}</small>
                <strong>{perfil.email}</strong>
              </span>
              <ArrowUpRight size={18} />
            </a>

            <a
              className="contact-card"
              href={perfil.github}
              target="_blank"
              rel="noreferrer"
            >
              <Github size={24} />
              <span>
                <small>GitHub</small>
                <strong>Meu perfil</strong>
              </span>
              <ArrowUpRight size={18} />
            </a>

            <a
              className="contact-card"
              href={perfil.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={24} />
              <span>
                <small>LinkedIn</small>
                <strong>Meu perfil</strong>
              </span>
              <ArrowUpRight size={18} />
            </a>

            <a
              className="contact-card"
              href={perfil.whatsapp}
              target="_blank"
              rel="noreferrer"
            >
              <Smartphone size={24} />
              <span>
                <small>WhatsApp</small>
                <strong>Enviar mensagem</strong>
              </span>
              <ArrowUpRight size={18} />
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="logo" href="#inicio">
          Meu<span>Portfólio.</span>
        </a>
        <p>
          © {new Date().getFullYear()} {perfil.nome}. {textos.rodape}
        </p>
        <a className="back-top" href="#inicio">
          Voltar ao topo ↑
        </a>
      </footer>
    </>
  );
}