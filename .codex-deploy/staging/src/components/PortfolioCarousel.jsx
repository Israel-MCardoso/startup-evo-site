import { useState, useRef, useEffect } from 'react';
import MockupIphone from './MobileMockup';

const appProjects = [
  {
    title: 'Carga & Descarga',
    category: 'Aplicativo Mobile',
    description:
      'Aplicativo para gestão de operações de carga e descarga com acompanhamento em tempo real, notificações e controle de logística.',
    stack: ['React', 'Mobile', 'Flutter', 'Node.js'],
    result: 'Operação mais organizada, rastreamento em tempo real e redução de atrasos.',
    timeline: '6 semanas',
    before: 'Processos manuais, planilhas e comunicação por WhatsApp.',
    after: 'Fluxo centralizado com tracking, alertas e histórico completo.',
    screenshots: [
      '/celular/cargaDescarga/print_CD1.jpeg',
      '/celular/cargaDescarga/print_CD2.jpeg',
      '/celular/cargaDescarga/print_CD3.jpeg',
      '/celular/cargaDescarga/print_CD4.jpeg',
    ],
  },
  {
    title: 'SaaS EVO CORE',
    category: 'Aplicativo Mobile',
    description:
      'Aplicativo para o setor elétrico com gestão de serviços, ordens de trabalho, relatórios e automações em campo.',
    stack: ['React', 'Mobile', 'Flutter', 'Node.js', 'Firebase', 'PostgreSQL'],
    result: 'Equipe mais produtiva, menos retrabalho e visão completa dos serviços.',
    timeline: '8 semanas',
    before: 'Ordens em papel, retrabalhos frequentes e sem controle de tempo em campo.',
    after: 'Gestão digital com ordens, fotos, relatórios e indicadores de performance.',
    screenshots: [
      '/celular/saasEvoCore/1.jfif',
      '/celular/saasEvoCore/2.mp4',
      '/celular/saasEvoCore/3.mp4',
      '/celular/saasEvoCore/4.jfif',
      '/celular/saasEvoCore/5.mp4',
      '/celular/saasEvoCore/6.jfif',
      '/celular/saasEvoCore/7.mp4',
      '/celular/saasEvoCore/8.mp4',
    ],
  },
];

function PortfolioCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const trackRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % appProjects.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index) => setCurrentIndex(index);
  const prev = () => goTo((currentIndex - 1 + appProjects.length) % appProjects.length);
  const next = () => goTo((currentIndex + 1) % appProjects.length);

  const handlePointerDown = (e) => {
    setStartX(e.clientX || e.touches?.[0]?.clientX || 0);
  };

  const handlePointerUp = (e) => {
    const endX = e.clientX || e.changedTouches?.[0]?.clientX || 0;
    const diff = startX - endX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next();
      else prev();
    }
  };

  return (
    <div className="portfolio-carousel">
      <div className="phone-showcase">
        <p className="phone-showcase-label">Apps em destaque</p>
        <div className="phones-row">
          {appProjects.map((app) => (
            <MockupIphone
              key={app.title}
              screenshots={app.screenshots}
              label={`App: ${app.title}`}
            />
          ))}
        </div>
      </div>

      <div
        ref={trackRef}
        className="carousel-track"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
      >
        {appProjects.map((project, index) => (
          <article className="carousel-slide glass-panel project-card" key={project.title}>
            <div className={`carousel-visual carousel-visual-${index + 1}`}>
              <div className="carousel-visual-grid" />
              <div className="carousel-orb" />
              <div className="carousel-orb-title">{project.category}</div>
            </div>

            <div className="project-body">
              <div className="project-header">
                <div>
                  <p className="mini-label">{project.category}</p>
                  <h3>{project.title}</h3>
                </div>
                <span className="timeline-chip">{project.timeline}</span>
              </div>

              <p>{project.description}</p>

              <div className="project-stack">
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <div className="project-compare">
                <div>
                  <strong>Antes</strong>
                  <p>{project.before}</p>
                </div>
                <div>
                  <strong>Depois</strong>
                  <p>{project.after}</p>
                </div>
              </div>

              <p className="project-result">{project.result}</p>

              <a className="link-inline" href="#contact">
                Ver estratégia do projeto
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="carousel-controls">
        <button className="carousel-btn carousel-prev" onClick={prev} aria-label="Anterior">
          <svg viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>

        <div className="carousel-dots">
          {appProjects.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goTo(index)}
              aria-label={`Ir para projeto ${index + 1}`}
            />
          ))}
        </div>

        <button className="carousel-btn carousel-next" onClick={next} aria-label="Próximo">
          <svg viewBox="0 0 24 24"><path d="M9 18l6-6-6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
      </div>
    </div>
  );
}

export default PortfolioCarousel;
