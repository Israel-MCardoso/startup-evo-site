import { useEffect, useRef, useState } from 'react';
import PortfolioCarousel from './components/PortfolioCarousel';
import ModernBackground from './components/ModernBackground';

const brand = {
  name: 'Startup Evo',
  label: 'Studio Digital | Sites, Sistemas, Apps e IA',
};

const services = [
  {
    title: 'Desenvolvimento de Sites',
    description: 'Sites institucionais premium com foco em presença digital, conversão e autoridade.',
    badge: 'WEB',
  },
  {
    title: 'Landing Pages',
    description: 'Páginas de campanha desenhadas para gerar leads, vendas e validação de ofertas.',
    badge: 'LP',
  },
  {
    title: 'Sistemas Web',
    description: 'Plataformas sob medida para processos internos, operação e gestão empresarial.',
    badge: 'SYS',
  },
  {
    title: 'Aplicativos Mobile',
    description: 'Experiências mobile para produtos, equipes comerciais e operações em campo.',
    badge: 'APP',
  },
  {
    title: 'Automações Empresariais',
    description: 'Fluxos inteligentes para reduzir trabalho manual e acelerar resultados.',
    badge: 'AUTO',
  },
  {
    title: 'Integrações com APIs',
    description: 'Conexão entre sistemas, ERPs, CRMs, gateways, IA e plataformas de terceiros.',
    badge: 'API',
  },
  {
    title: 'Dashboards',
    description: 'Painéis analíticos com dados claros para decisões rápidas e acompanhamento real.',
    badge: 'DATA',
  },
  {
    title: 'CRM e ERP Personalizados',
    description: 'Soluções operacionais moldadas ao processo da sua empresa, sem engessar o negócio.',
    badge: 'OPS',
  },
  {
    title: 'Hospedagem e Manutenção',
    description: 'Suporte contínuo, evolução técnica e monitoramento para manter tudo em alta performance.',
    badge: 'CARE',
  },
];

const processSteps = [
  {
    title: 'Reunião inicial',
    description: 'Entendemos objetivo, público, prioridade comercial e o nível de presença digital esperado.',
  },
  {
    title: 'Planejamento estratégico',
    description: 'Definimos escopo, arquitetura, etapas de entrega e o caminho mais seguro para construir.',
  },
  {
    title: 'Direção visual',
    description: 'Criamos a linguagem da interface com foco em autoridade, clareza e identidade forte.',
  },
  {
    title: 'Desenvolvimento',
    description: 'Transformamos design em produto funcional, responsivo e pronto para evoluir com o negócio.',
  },
  {
    title: 'Integrações e automações',
    description: 'Conectamos APIs, dados e fluxos inteligentes para reduzir trabalho manual e ganhar escala.',
  },
  {
    title: 'Testes e refinamento',
    description: 'Validamos experiência, performance, responsividade e detalhes antes da entrega final.',
  },
  {
    title: 'Entrega com suporte',
    description: 'Publicamos com segurança e mantemos acompanhamento para ajustes, melhorias e expansão.',
  },
];

const techStack = [
  'React',
  'Next.js',
  'TypeScript',
  'Flutter',
  'Node.js',
  'Mobile',
  'Python',
  'PostgreSQL',
  'Docker',
  'AWS',
  'Spring Boot',
  'Firebase',
];

const differentiators = [
  'Projetos 100% personalizados',
  'Design moderno com identidade forte',
  'Desenvolvimento rápido e escalável',
  'Integrações avançadas entre sistemas',
  'Automações inteligentes com foco em produtividade',
  'Atendimento próximo e estratégico',
  'Arquitetura pronta para crescer',
  'Suporte contínuo após a entrega',
];

const testimonials = [
  {
    name: 'Cliente parceiro',
    role: 'Experiência do projeto',
    text: 'Aqui entra o relato de quem acompanhou o processo, validou a entrega e percebeu impacto real na operação ou presença digital.',
  },
  {
    name: 'Gestor da empresa',
    role: 'Resultado entregue',
    text: 'Este espaço pode destacar ganhos como mais clareza comercial, automações, performance, organização de processos e evolução visual.',
  },
  {
    name: 'Time atendido',
    role: 'Parceria contínua',
    text: 'Use este card para mostrar como a Startup Evo acompanha melhorias após a entrega e mantém a solução pronta para crescer.',
  },
];

const faqs = [
  {
    question: 'Quanto custa um site ou sistema?',
    answer:
      'O investimento depende do escopo, integrações, prazo e nível de personalização. A Startup Evo trabalha com projetos sob medida para alinhar design, tecnologia e objetivo de negócio.',
  },
  {
    question: 'Quanto tempo leva para desenvolver?',
    answer:
      'Landing pages podem sair em poucas semanas. Sistemas, apps e plataformas maiores dependem do nível de complexidade, regras de negócio e integrações envolvidas.',
  },
  {
    question: 'Vocês fazem manutenção e evolução contínua?',
    answer:
      'Sim. Podemos seguir com suporte, melhorias, monitoramento, correções e novas entregas depois do lançamento.',
  },
  {
    question: 'Vocês criam aplicativos e automações?',
    answer:
      'Sim. Atuamos tanto em aplicações web e mobile quanto em automações empresariais, integrações com APIs e fluxos inteligentes.',
  },
  {
    question: 'É possível integrar com ERP, CRM e sistemas legados?',
    answer:
      'Sim. Projetamos integrações com APIs, bancos de dados, plataformas internas e serviços de terceiros para centralizar processos.',
  },
  {
    question: 'O projeto é personalizado ou usa template pronto?',
    answer:
      'A abordagem é personalizada. Estrutura, visual, experiência, automações e arquitetura são moldados ao contexto da empresa e à meta do projeto.',
  },
];

const socialLinks = [
  {
    title: 'LinkedIn',
    handle: '@startup-evo',
    detail: 'Rede profissional e relacionamento B2B',
    href: '#contact',
    icon: <LinkedInIcon />,
  },
  {
    title: 'GitHub',
    handle: '@startup-evo',
    detail: 'Projetos, stack e visão técnica',
    href: '#contact',
    icon: <GitHubIcon />,
  },
  {
    title: 'Instagram',
    handle: '@startup.evo',
    detail: 'Bastidores, novidades e portfólio visual',
    href: '#contact',
    icon: <InstagramIcon />,
  },
  {
    title: 'WhatsApp',
    handle: 'Orçamento direto',
    detail: 'Canal rápido para diagnóstico e proposta',
    href: '#contact',
    icon: <WhatsappIcon />,
  },
];

const layers = [
  'Diagnóstico',
  'Estratégia',
  'Design',
  'Front-end',
  'Back-end',
  'Integrações',
  'Automação',
  'Escala',
];

const aboutTags = [
  { label: 'Soluções sob medida', orbitClass: 'orbit-tag-1' },
  { label: 'Atendimento personalizado', orbitClass: 'orbit-tag-2' },
  { label: 'Tecnologia moderna', orbitClass: 'orbit-tag-3' },
  { label: 'Desenvolvimento rápido', orbitClass: 'orbit-tag-4' },
  { label: 'Escalabilidade real', orbitClass: 'orbit-tag-5' },
  { label: 'Design com identidade forte', orbitClass: 'orbit-tag-6' },
];

const panelModes = [
  {
    title: 'Sites',
    subtitle: 'Presença digital premium',
  },
  {
    title: 'Sistemas',
    subtitle: 'Operação inteligente',
  },
  {
    title: 'Automações',
    subtitle: 'Eficiência em escala',
  },
];

const serviceFlow = [
  'Entendimento do objetivo, do público e da estrutura necessária.',
  'Direção visual com foco em clareza, percepção premium e conversão.',
  'Desenvolvimento, integrações e suporte para publicar com segurança.',
];

const navItems = [
  { label: 'Sobre', href: '#about', glitch: '_Sobre_', code: 'n1' },
  { label: 'Serviços', href: '#services', glitch: '_Servicos_', code: 'n2' },
  { label: 'Projetos', href: '#portfolio', glitch: '_Projetos_', code: 'n3' },
  { label: 'Processo', href: '#process', glitch: '_Processo_', code: 'n4' },
  { label: 'Stack', href: '#tech', glitch: '_Stack_', code: 'n5' },
  { label: 'FAQ', href: '#faq', glitch: '_FAQ_', code: 'n6' },
];

let threeLoaderPromise;

function loadThreeJs() {
  if (typeof window === 'undefined') {
    return Promise.reject(new Error('Window indisponível.'));
  }

  if (window.THREE) {
    return Promise.resolve(window.THREE);
  }

  if (threeLoaderPromise) {
    return threeLoaderPromise;
  }

  threeLoaderPromise = new Promise((resolve, reject) => {
    const existingScript = document.querySelector('script[data-three-loader="true"]');

    if (existingScript) {
      existingScript.addEventListener('load', () => resolve(window.THREE), { once: true });
      existingScript.addEventListener('error', () => reject(new Error('Falha ao carregar Three.js.')), {
        once: true,
      });
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.min.js';
  script.async = true;
  script.dataset.threeLoader = 'true';
  script.onload = () => resolve(window.THREE);
  script.onerror = () => {
    threeLoaderPromise = undefined;
    reject(new Error('Falha ao carregar Three.js.'));
  };
  document.head.appendChild(script);
  });

  return threeLoaderPromise;
}

function mountInteractiveCube(canvas, shell, THREE) {
  if (!canvas || !shell || !THREE) {
    return () => {};
  }

  const getSize = () => {
    const rect = shell.getBoundingClientRect();

    return {
      width: Math.max(320, Math.round(rect.width || 480)),
      height: Math.max(360, Math.round(rect.height || 500)),
    };
  };

  const scene = new THREE.Scene();
  const { width, height } = getSize();
  const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
  camera.position.set(0, 0.2, 5.2);
  camera.lookAt(0, 0, 0);

  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
    powerPreference: 'high-performance',
  });
  renderer.setClearColor(0x000000, 0);
  renderer.setSize(width, height, false);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.4;

  const group = new THREE.Group();
  scene.add(group);

  const pmrem = new THREE.PMREMGenerator(renderer);
  const envScene = new THREE.Scene();

  const addEnvPanel = (widthValue, heightValue, color, position, rotation = [0, 0, 0]) => {
    const panel = new THREE.Mesh(
      new THREE.PlaneGeometry(widthValue, heightValue),
      new THREE.MeshBasicMaterial({ color }),
    );
    panel.position.set(...position);
    panel.rotation.set(...rotation);
    envScene.add(panel);
  };

  addEnvPanel(6, 2, 0xffffff, [0, 6, 0], [-Math.PI / 2, 0, 0]);
  addEnvPanel(4, 4, 0xdddddd, [0, 0, 6]);
  addEnvPanel(3, 3, 0xcccccc, [5, 0, 0], [0, -Math.PI / 2, 0]);
  addEnvPanel(3, 3, 0x999999, [-5, 0, 0], [0, Math.PI / 2, 0]);
  addEnvPanel(4, 3, 0xbbbbbb, [0, 0, -5], [0, Math.PI, 0]);

  const envMap = pmrem.fromScene(envScene, 0.04).texture;
  scene.environment = envMap;
  pmrem.dispose();

  const surfaceTexture = (() => {
    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 128;
    const context = canvas.getContext('2d');

    context.fillStyle = '#2d2d30';
    context.fillRect(0, 0, canvas.width, canvas.height);

    for (let index = 0; index < 220; index += 1) {
      const alpha = 0.055 + ((index * 17) % 7) * 0.012;
      context.fillStyle = index % 9 === 0 ? `rgba(255, 34, 56, ${alpha})` : `rgba(255, 255, 255, ${alpha})`;
      context.fillRect((index * 37) % 128, (index * 53) % 128, 1, 1);
    }

    context.strokeStyle = 'rgba(255, 255, 255, 0.12)';
    context.lineWidth = 1;
    for (let index = 0; index < 9; index += 1) {
      const start = 12 + index * 11;
      context.beginPath();
      context.moveTo(start, 18 + ((index * 19) % 76));
      context.lineTo(start + 18, 18 + ((index * 19) % 76));
      context.lineTo(start + 18, 28 + ((index * 13) % 70));
      context.stroke();
    }

    context.strokeStyle = 'rgba(255, 34, 56, 0.22)';
    context.beginPath();
    context.moveTo(18, 104);
    context.lineTo(56, 104);
    context.lineTo(56, 86);
    context.lineTo(104, 86);
    context.stroke();

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(1.6, 1.6);
    texture.anisotropy = Math.min(renderer.capabilities.getMaxAnisotropy?.() || 1, 4);
    texture.needsUpdate = true;

    return texture;
  })();

  const metalMat = (color) =>
    new THREE.MeshPhysicalMaterial({
      color,
      metalness: 0.97,
      roughness: 0.16,
      clearcoat: 0.9,
      clearcoatRoughness: 0.06,
      envMap,
      envMapIntensity: 3.25,
      map: surfaceTexture,
      bumpMap: surfaceTexture,
      bumpScale: 0.012,
    });
  const metalMaterialCache = new Map();
  const getMetalMaterial = (color) => {
    if (!metalMaterialCache.has(color)) {
      metalMaterialCache.set(color, metalMat(color));
    }

    return metalMaterialCache.get(color);
  };

  const GRID = 3;
  const BLOCK = 0.38;
  const GAP = 0.022;
  const half = (GRID - 1) / 2;
  const createRoundedBlockGeometry = (size, radius) => {
    const x = -size / 2;
    const y = -size / 2;
    const widthValue = size;
    const heightValue = size;
    const shape = new THREE.Shape();

    shape.moveTo(x + radius, y);
    shape.lineTo(x + widthValue - radius, y);
    shape.quadraticCurveTo(x + widthValue, y, x + widthValue, y + radius);
    shape.lineTo(x + widthValue, y + heightValue - radius);
    shape.quadraticCurveTo(x + widthValue, y + heightValue, x + widthValue - radius, y + heightValue);
    shape.lineTo(x + radius, y + heightValue);
    shape.quadraticCurveTo(x, y + heightValue, x, y + heightValue - radius);
    shape.lineTo(x, y + radius);
    shape.quadraticCurveTo(x, y, x + radius, y);

    const geometry = new THREE.ExtrudeGeometry(shape, {
      depth: size,
      bevelEnabled: true,
      bevelSegments: 4,
      bevelSize: radius * 0.34,
      bevelThickness: radius * 0.28,
      curveSegments: 8,
      steps: 1,
    });

    geometry.translate(0, 0, -size / 2);
    geometry.computeVertexNormals();

    return geometry;
  };
  const geo = createRoundedBlockGeometry(BLOCK, 0.07);
  const edgeGeo = new THREE.EdgesGeometry(geo, 32);
  const facePanelGeo = new THREE.PlaneGeometry(BLOCK * 0.68, BLOCK * 0.68);
  const blocks = [];

  const circuitLine = (offset, length, opacity = 0) => {
    const points = [
      new THREE.Vector3(offset, -length / 2, 0.002),
      new THREE.Vector3(offset, -0.02, 0.002),
      new THREE.Vector3(offset + 0.06, -0.02, 0.002),
      new THREE.Vector3(offset + 0.06, 0.04, 0.002),
      new THREE.Vector3(offset, 0.04, 0.002),
      new THREE.Vector3(offset, length / 2, 0.002),
    ];
    const geometry = new THREE.BufferGeometry().setFromPoints(points);

    return new THREE.Line(
      geometry,
      new THREE.LineBasicMaterial({
        color: 0xff2222,
        transparent: true,
        opacity,
        blending: THREE.AdditiveBlending,
      }),
    );
  };

  const addFacePanel = (mesh, axis, side, accentOpacity) => {
    const panel = new THREE.Mesh(
      facePanelGeo,
      new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.035,
        depthWrite: false,
      }),
    );
    const offset = (BLOCK / 2 + 0.004) * side;

    if (axis === 'x') {
      panel.position.x = offset;
      panel.rotation.y = side > 0 ? Math.PI / 2 : -Math.PI / 2;
    } else if (axis === 'y') {
      panel.position.y = offset;
      panel.rotation.x = side > 0 ? -Math.PI / 2 : Math.PI / 2;
    } else {
      panel.position.z = offset;
      panel.rotation.y = side > 0 ? 0 : Math.PI;
    }

    mesh.add(panel);

    const detailGroup = new THREE.Group();
    const detailMaterial = new THREE.LineBasicMaterial({
      color: 0xff3347,
      transparent: true,
      opacity: accentOpacity,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const detailPoints = [
      new THREE.Vector3(-0.08, -0.09, 0.004),
      new THREE.Vector3(0.06, -0.09, 0.004),
      new THREE.Vector3(0.06, -0.02, 0.004),
      new THREE.Vector3(0.12, -0.02, 0.004),
      new THREE.Vector3(0.12, 0.08, 0.004),
    ];
    const detail = new THREE.Line(new THREE.BufferGeometry().setFromPoints(detailPoints), detailMaterial);
    const node = new THREE.Mesh(
      new THREE.CircleGeometry(0.013, 12),
      new THREE.MeshBasicMaterial({
        color: 0xff3347,
        transparent: true,
        opacity: accentOpacity * 1.7,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      }),
    );
    node.position.set(0.12, 0.08, 0.004);
    detailGroup.add(detail, node);
    panel.add(detailGroup);

    return detailMaterial;
  };

  for (let ix = 0; ix < GRID; ix += 1) {
    for (let iy = 0; iy < GRID; iy += 1) {
      for (let iz = 0; iz < GRID; iz += 1) {
        const nx = ix - half;
        const ny = iy - half;
        const nz = iz - half;
        const isInner = Math.abs(nx) < half && Math.abs(ny) < half && Math.abs(nz) < half;
        const blockColor = isInner
          ? 0x58585a
          : Math.abs(nx) + Math.abs(ny) + Math.abs(nz) < half + 0.5
            ? 0x4a4a4d
            : 0x3f3f42;
        const mesh = new THREE.Mesh(geo, getMetalMaterial(blockColor));
        const rx = nx * (BLOCK + GAP);
        const ry = ny * (BLOCK + GAP);
        const rz = nz * (BLOCK + GAP);
        mesh.position.set(rx, ry, rz);
        group.add(mesh);

        const edgeMat = new THREE.LineBasicMaterial({
          color: 0xd4d4d6,
          transparent: true,
          opacity: 0.46,
          blending: THREE.NormalBlending,
        });
        const edgeLines = new THREE.LineSegments(edgeGeo, edgeMat);
        mesh.add(edgeLines);

        const circuitGroup = new THREE.Group();

        if (Math.abs(nx) >= half && Math.abs(nz) < half) {
          circuitGroup.add(circuitLine(0.12, BLOCK * 0.72, 0));
          circuitGroup.add(circuitLine(-0.12, BLOCK * 0.72, 0));
        }

        if (Math.abs(nz) >= half && Math.abs(nx) < half) {
          const leftCircuit = circuitLine(0.1, BLOCK * 0.72, 0);
          leftCircuit.rotation.y = Math.PI / 2;
          circuitGroup.add(leftCircuit);

          const rightCircuit = circuitLine(-0.1, BLOCK * 0.72, 0);
          rightCircuit.rotation.y = Math.PI / 2;
          circuitGroup.add(rightCircuit);
        }

        const panelMaterials = [];
        if (Math.abs(nx) >= half) {
          panelMaterials.push(addFacePanel(mesh, 'x', Math.sign(nx), 0.045));
        }
        if (Math.abs(ny) >= half) {
          panelMaterials.push(addFacePanel(mesh, 'y', Math.sign(ny), 0.035));
        }
        if (Math.abs(nz) >= half) {
          panelMaterials.push(addFacePanel(mesh, 'z', Math.sign(nz), 0.05));
        }

        mesh.add(circuitGroup);

        const lengthNorm = Math.hypot(nx, ny, nz) || 1;
        const spread = BLOCK * 0.85;
        blocks.push({
          mesh,
          rx,
          ry,
          rz,
          sx: rx + (nx / lengthNorm) * spread,
          sy: ry + (ny / lengthNorm) * spread,
          sz: rz + (nz / lengthNorm) * spread,
          edgeMat,
          circuitGroup,
          panelMaterials,
          blockColor,
          connectionMaterial: null,
        });
      }
    }
  }

  const coreGeo = new THREE.BoxGeometry(BLOCK * 0.5, BLOCK * 0.5, BLOCK * 0.5);
  const coreMat = new THREE.MeshPhysicalMaterial({
    color: 0xcc1111,
    emissive: 0xff1111,
    emissiveIntensity: 0,
    metalness: 0.3,
    roughness: 0.1,
    clearcoat: 1,
    transparent: true,
    opacity: 0,
    envMap,
    envMapIntensity: 2,
  });
  const core = new THREE.Mesh(coreGeo, coreMat);
  group.add(core);

  const nucleusLight = new THREE.PointLight(0xff2222, 0, 5);
  group.add(nucleusLight);

  const coreGlow = new THREE.Mesh(
    new THREE.SphereGeometry(BLOCK * 0.8, 16, 16),
    new THREE.MeshBasicMaterial({
      color: 0xff2222,
      transparent: true,
      opacity: 0,
      depthWrite: false,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending,
    }),
  );
  group.add(coreGlow);

  const scanLine = new THREE.Mesh(
    new THREE.PlaneGeometry(1.6, 0.003),
    new THREE.MeshBasicMaterial({
      color: 0xff2222,
      transparent: true,
      opacity: 0,
      depthWrite: false,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
    }),
  );
  scanLine.renderOrder = 10;
  group.add(scanLine);

  const scanGlow = new THREE.Mesh(
    new THREE.PlaneGeometry(1.8, 0.06),
    new THREE.MeshBasicMaterial({
      color: 0xff2222,
      transparent: true,
      opacity: 0,
      depthWrite: false,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
    }),
  );
  scanGlow.renderOrder = 9;
  group.add(scanGlow);

  const atomField = new THREE.Group();
  atomField.position.z = -0.35;
  atomField.scale.setScalar(1.08);
  group.add(atomField);

  const atomicOrbitGeometry = new THREE.TorusGeometry(1, 0.003, 6, 160);
  const atomicElectronGeometry = new THREE.SphereGeometry(0.018, 10, 10);
  const atomicElectronGlowGeometry = new THREE.SphereGeometry(0.05, 10, 10);
  const atomicOrbits = [
    { radius: 1.65, scaleY: 0.34, speed: 1.15, phase: 0, rotation: [0.25, 0.18, 0.12], opacity: 0.09 },
    { radius: 1.82, scaleY: 0.28, speed: -0.9, phase: 1.8, rotation: [1.08, -0.42, 1.16], opacity: 0.07 },
    { radius: 1.5, scaleY: 0.42, speed: 1.35, phase: 3.2, rotation: [-0.72, 0.64, -0.9], opacity: 0.06 },
  ].map((config) => {
    const orbitRoot = new THREE.Group();
    orbitRoot.rotation.set(...config.rotation);

    const orbit = new THREE.Mesh(
      atomicOrbitGeometry,
      new THREE.MeshBasicMaterial({
        color: 0x7a1822,
        transparent: true,
        opacity: config.opacity,
        depthWrite: false,
        side: THREE.DoubleSide,
        blending: THREE.NormalBlending,
      }),
    );
    orbit.scale.set(config.radius, config.radius * config.scaleY, config.radius);
    orbit.renderOrder = 6;
    orbitRoot.add(orbit);

    const electron = new THREE.Group();
    const electronCore = new THREE.Mesh(
      atomicElectronGeometry,
      new THREE.MeshBasicMaterial({
        color: 0xd73a4a,
        transparent: true,
        opacity: 0.12,
        depthWrite: false,
        blending: THREE.NormalBlending,
      }),
    );
    const electronGlow = new THREE.Mesh(
      atomicElectronGlowGeometry,
      new THREE.MeshBasicMaterial({
        color: 0x8a1b27,
        transparent: true,
        opacity: 0.02,
        depthWrite: false,
        blending: THREE.NormalBlending,
      }),
    );
    electron.add(electronGlow, electronCore);
    electron.renderOrder = 12;
    orbitRoot.add(electron);
    atomField.add(orbitRoot);

    return { ...config, orbitRoot, orbit, electron, electronCore, electronGlow };
  });

  const sparkGeometry = new THREE.SphereGeometry(0.012, 4, 4);
  const sparkPool = [];
  const createSpark = () => {
    const mesh = new THREE.Mesh(
      sparkGeometry,
      new THREE.MeshBasicMaterial({
        color: 0xff3333,
        transparent: true,
        opacity: 0,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
    );
    mesh.visible = false;
    scene.add(mesh);
    return { mesh, vx: 0, vy: 0, vz: 0, life: -1, maxLife: 1 };
  };

  for (let index = 0; index < 32; index += 1) {
    sparkPool.push(createSpark());
  }

  let lastSpark = 0;
  const emitSpark = (position, intensity, now) => {
    if (now - lastSpark < 40) {
      return;
    }

    const spark = sparkPool.find((item) => item.life <= 0);

    if (!spark) {
      return;
    }

    spark.mesh.position.copy(position);
    spark.mesh.position.x += (Math.random() - 0.5) * 0.6;
    spark.mesh.position.y += (Math.random() - 0.5) * 0.6;
    spark.mesh.position.z += (Math.random() - 0.5) * 0.6;
    spark.vx = (Math.random() - 0.5) * 0.008 * intensity;
    spark.vy = Math.random() * 0.006 * intensity + 0.003;
    spark.vz = (Math.random() - 0.5) * 0.008 * intensity;
    spark.life = 1;
    spark.maxLife = 0.6 + Math.random() * 0.6;
    spark.mesh.material.opacity = 0.6 + Math.random() * 0.4;
    spark.mesh.visible = true;
    lastSpark = now;
  };

  const connectionGroup = new THREE.Group();

  blocks.forEach((block) => {
    const distance = Math.hypot(block.rx, block.ry, block.rz);

    if (distance <= 0.001) {
      return;
    }

    const geometry = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(block.rx, block.ry, block.rz),
    ]);
    const material = new THREE.LineBasicMaterial({
      color: 0xff2222,
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending,
    });
    connectionGroup.add(new THREE.Line(geometry, material));
    block.connectionMaterial = material;
  });

  connectionGroup.visible = false;
  group.add(connectionGroup);

  scene.add(new THREE.AmbientLight(0xffffff, 0.8));

  const directionalLightOne = new THREE.DirectionalLight(0xffffff, 4.8);
  directionalLightOne.position.set(3.5, 5.5, 6);
  scene.add(directionalLightOne);

  const directionalLightTwo = new THREE.DirectionalLight(0xffffff, 2.4);
  directionalLightTwo.position.set(-4, 3, 4);
  scene.add(directionalLightTwo);

  const directionalLightThree = new THREE.DirectionalLight(0xf3f3f3, 1.6);
  directionalLightThree.position.set(0, -3, 4);
  scene.add(directionalLightThree);

  const pointLightOne = new THREE.PointLight(0xffffff, 1.45, 15);
  pointLightOne.position.set(1.7, 0.8, 3.6);
  scene.add(pointLightOne);

  const pointLightTwo = new THREE.PointLight(0xff2238, 0.85, 10);
  pointLightTwo.position.set(-2, 3, -2);
  scene.add(pointLightTwo);

  let isHovered = false;
  let isDragging = false;
  let prevX = 0;
  let prevY = 0;
  let animState = 0;
  let animTarget = 0;
  let velX = 0;
  let velY = 0;
  let autoRotate = true;
  let lastInteract = 0;
  let frameId = 0;
  const coreWorldPosition = new THREE.Vector3();

  const handleMouseEnter = () => {
    isHovered = true;
    autoRotate = false;
    lastInteract = 0;
    animTarget = 1;
    canvas.style.cursor = 'grab';
  };

  const handleMouseLeave = () => {
    isHovered = false;
    isDragging = false;
    lastInteract = Date.now();
    animTarget = 0;
    canvas.style.cursor = 'grab';
  };

  const handleMouseDown = (event) => {
    isDragging = true;
    prevX = event.clientX;
    prevY = event.clientY;
    canvas.style.cursor = 'grabbing';
  };

  const handleMouseMove = (event) => {
    if (!isDragging) {
      return;
    }

    const dx = (event.clientX - prevX) / Math.max(canvas.clientWidth, 1);
    const dy = (event.clientY - prevY) / Math.max(canvas.clientHeight, 1);
    velX = dy * 10;
    velY = dx * 10;
    group.rotation.x += velX;
    group.rotation.y += velY;
    prevX = event.clientX;
    prevY = event.clientY;

    for (let index = 0; index < 3; index += 1) {
      emitSpark(core.getWorldPosition(coreWorldPosition), 1.5, Date.now());
    }
  };

  const handleMouseUp = () => {
    if (!isDragging) {
      return;
    }

    isDragging = false;
    canvas.style.cursor = 'grab';
  };

  const handleTouchStart = (event) => {
    if (event.touches.length !== 1) {
      return;
    }

    isDragging = true;
    isHovered = true;
    autoRotate = false;
    animTarget = 1;
    prevX = event.touches[0].clientX;
    prevY = event.touches[0].clientY;
    canvas.style.cursor = 'grabbing';
  };

  const handleTouchMove = (event) => {
    if (!isDragging || event.touches.length !== 1) {
      return;
    }

    const dx = (event.touches[0].clientX - prevX) / Math.max(canvas.clientWidth, 1);
    const dy = (event.touches[0].clientY - prevY) / Math.max(canvas.clientHeight, 1);
    velX = dy * 8;
    velY = dx * 8;
    group.rotation.x += velX;
    group.rotation.y += velY;
    prevX = event.touches[0].clientX;
    prevY = event.touches[0].clientY;
  };

  const handleTouchEnd = () => {
    isDragging = false;
    isHovered = false;
    lastInteract = Date.now();
    animTarget = 0;
    canvas.style.cursor = 'grab';
  };

  const resize = () => {
    const next = getSize();
    renderer.setSize(next.width, next.height, false);
    camera.aspect = next.width / next.height;
    camera.updateProjectionMatrix();
  };

  canvas.addEventListener('mouseenter', handleMouseEnter);
  canvas.addEventListener('mouseleave', handleMouseLeave);
  canvas.addEventListener('mousedown', handleMouseDown);
  window.addEventListener('mousemove', handleMouseMove);
  window.addEventListener('mouseup', handleMouseUp);
  canvas.addEventListener('touchstart', handleTouchStart, { passive: true });
  window.addEventListener('touchmove', handleTouchMove, { passive: true });
  window.addEventListener('touchend', handleTouchEnd);
  window.addEventListener('resize', resize);

  const resizeObserver =
    typeof ResizeObserver !== 'undefined'
      ? new ResizeObserver(() => {
          resize();
        })
      : null;

  resizeObserver?.observe(shell);
  resize();

  const animate = (timestamp) => {
    frameId = window.requestAnimationFrame(animate);
    const time = timestamp * 0.001;
    const now = Date.now();

    animState += (animTarget - animState) * 0.06;

    blocks.forEach((block) => {
      const targetX = block.rx + (block.sx - block.rx) * animState;
      const targetY = block.ry + (block.sy - block.ry) * animState;
      const targetZ = block.rz + (block.sz - block.rz) * animState;
      block.mesh.position.x += (targetX - block.mesh.position.x) * 0.15;
      block.mesh.position.y += (targetY - block.mesh.position.y) * 0.15;
      block.mesh.position.z += (targetZ - block.mesh.position.z) * 0.15;

      block.edgeMat.color.set(animState > 0.01 ? 0xff3b4c : 0xd4d4d6);
      block.edgeMat.blending = animState > 0.01 ? THREE.AdditiveBlending : THREE.NormalBlending;
      block.edgeMat.opacity += ((0.5 + animState * 0.12) - block.edgeMat.opacity) * 0.06;

      const circuitTarget = isHovered ? 0.06 : 0;
      block.circuitGroup.children.forEach((child) => {
        if (child.material) {
          child.material.opacity += (circuitTarget - child.material.opacity) * 0.06;
        }
      });

      block.panelMaterials.forEach((material) => {
        const panelTarget = 0.035 + animState * 0.13 + (isHovered ? 0.04 : 0);
        material.opacity += (panelTarget - material.opacity) * 0.06;
      });

      if (block.connectionMaterial) {
        block.connectionMaterial.opacity += (animState * 0.08 - block.connectionMaterial.opacity) * 0.05;
      }
    });

    connectionGroup.visible = animState > 0.02;

    const corePulse = Math.sin(time * 3) * 0.15 + 0.85;
    coreMat.emissiveIntensity += (animState * 1.8 * corePulse - coreMat.emissiveIntensity) * 0.06;
    coreMat.opacity += (animState * 0.9 - coreMat.opacity) * 0.06;
    core.scale.setScalar(0.5 + animState * 0.5 * corePulse);
    core.rotation.y = time * 0.5;
    core.rotation.x = time * 0.3;
    nucleusLight.intensity += (animState * 2.5 - nucleusLight.intensity) * 0.06;
    coreGlow.material.opacity += (animState * 0.15 - coreGlow.material.opacity) * 0.06;

    scanLine.material.opacity += ((isHovered ? 0.15 : 0) - scanLine.material.opacity) * 0.06;
    scanGlow.material.opacity += ((isHovered ? 0.05 : 0) - scanGlow.material.opacity) * 0.06;
    const scanY = Math.sin(time * (isHovered ? 2.5 : 0.4)) * 1.4;
    scanLine.position.y = scanY;
    scanGlow.position.y = scanY;

    const atomPulse = 0.65 + Math.sin(time * 2.2) * 0.35;
    atomField.rotation.y = time * 0.18;
    atomField.rotation.x = Math.sin(time * 0.24) * 0.08;

    atomicOrbits.forEach((orbit, index) => {
      const orbitTime = time * orbit.speed + orbit.phase;
      const electronScale = 0.72 + atomPulse * 0.34 + index * 0.04;

      orbit.orbitRoot.rotation.z += 0.0018 * (index + 1);
      orbit.electron.position.set(
        Math.cos(orbitTime) * orbit.radius,
        Math.sin(orbitTime) * orbit.radius * orbit.scaleY,
        Math.sin(orbitTime * 0.5) * 0.035,
      );
      orbit.electronCore.scale.setScalar(electronScale);
      orbit.electronGlow.scale.setScalar(1 + atomPulse * 0.45);
      orbit.electronGlow.material.opacity = 0.015 + atomPulse * 0.018;
      orbit.orbit.material.opacity = orbit.opacity + atomPulse * 0.018;
    });

    if (isHovered && now - lastSpark > 80) {
      for (let index = 0; index < 2; index += 1) {
        emitSpark(core.getWorldPosition(coreWorldPosition), 1, now);
      }
    }

    sparkPool.forEach((spark) => {
      if (spark.life <= 0) {
        return;
      }

      spark.life -= 0.016 / spark.maxLife;
      spark.mesh.position.x += spark.vx;
      spark.mesh.position.y += spark.vy;
      spark.mesh.position.z += spark.vz;
      spark.vy *= 0.995;

      if (spark.life <= 0) {
        spark.mesh.visible = false;
        spark.mesh.material.opacity = 0;
      } else {
        spark.mesh.material.opacity = spark.life * 0.7;
      }
    });

    const scaleTarget = isHovered ? 1.16 : 1.06;
    group.scale.x += (scaleTarget - group.scale.x) * 0.08;
    group.scale.y += (scaleTarget - group.scale.y) * 0.08;
    group.scale.z += (scaleTarget - group.scale.z) * 0.08;

    if (autoRotate) {
      group.rotation.y += 0.004;
      group.rotation.x = Math.sin(time * 0.15) * 0.08 + 0.1;
      group.rotation.z += Math.sin(time * 0.12) * 0.001;
    } else if (!isDragging) {
      velX *= 0.97;
      velY *= 0.97;
      group.rotation.x += velX;
      group.rotation.y += velY;

      if (Math.abs(velX) < 0.0001 && Math.abs(velY) < 0.0001 && now - lastInteract > 3000) {
        autoRotate = true;
      }
    }

    renderer.render(scene, camera);
  };

  frameId = window.requestAnimationFrame(animate);

  return () => {
    window.cancelAnimationFrame(frameId);
    canvas.removeEventListener('mouseenter', handleMouseEnter);
    canvas.removeEventListener('mouseleave', handleMouseLeave);
    canvas.removeEventListener('mousedown', handleMouseDown);
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('mouseup', handleMouseUp);
    canvas.removeEventListener('touchstart', handleTouchStart);
    window.removeEventListener('touchmove', handleTouchMove);
    window.removeEventListener('touchend', handleTouchEnd);
    window.removeEventListener('resize', resize);
    resizeObserver?.disconnect();

    const geometries = new Set();
    const materials = new Set();

    scene.traverse((object) => {
      if (object.geometry) {
        geometries.add(object.geometry);
      }

      if (object.material) {
        if (Array.isArray(object.material)) {
          object.material.forEach((item) => materials.add(item));
        } else {
          materials.add(object.material);
        }
      }
    });

    geometries.forEach((geometry) => geometry.dispose?.());
    materials.forEach((material) => material.dispose?.());
    surfaceTexture.dispose?.();
    envMap.dispose?.();
    renderer.dispose();
  };
}

function App() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 760) {
        setIsMobileNavOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const closeMobileNav = () => setIsMobileNavOpen(false);

  return (
    <div className="page-shell">
      <ModernBackground />

      <header className="site-header">
        <div className={`nav-shell ${isMobileNavOpen ? 'mobile-nav-open' : ''}`}>
          <a className="brand" href="#top" aria-label={brand.name}>
            <span className="brand-text">{brand.name}</span>
            <span className="brand-glitch" aria-hidden>
              _Startup_Evo_
            </span>
            <span className="number brand-number">s0</span>
          </a>

          <button
            type="button"
            className="mobile-nav-toggle"
            aria-label={isMobileNavOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMobileNavOpen}
            aria-controls="site-navigation"
            onClick={() => setIsMobileNavOpen((current) => !current)}
          >
            <span className="mobile-nav-toggle-text">Menu</span>
            <span className="mobile-nav-toggle-icon" aria-hidden>
              <span />
              <span />
              <span />
            </span>
          </button>

          <div className="nav-panel" id="site-navigation">
            <nav className="nav-links">
              {navItems.map((item) => (
                <a className="nav-link-chip" href={item.href} key={item.label} onClick={closeMobileNav}>
                  <span className="nav-link-text">{item.label}</span>
                  <span className="nav-link-glitch" aria-hidden>
                    {item.glitch}
                  </span>
                  <span className="number">{item.code}</span>
                </a>
              ))}
            </nav>

            <a className="header-cta nav-link-chip nav-link-cta" href="#contact" onClick={closeMobileNav}>
              <span className="nav-link-text">Contato</span>
              <span className="nav-link-glitch" aria-hidden>
                _Contato_
              </span>
              <span className="number">c7</span>
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="section hero" id="top">
          <div className="hero-copy">
            <p className="eyebrow hero-kicker">WE ARE</p>
            <h1>STARTUP EVO</h1>
            <p className="lead">
              Desenvolvemos sites, sistemas, aplicativos e automações inteligentes para
              empresas que querem crescer com presença forte, operação fluida e tecnologia
              pronta para escalar.
            </p>

            <div className="cta-row">
              <QuoteButton href="#contact" />
            </div>
          </div>

          <div className="hero-visual">
            <HoloCube />
          </div>

          <HeroScrollBadge />
        </section>

        <section className="section about" id="about">
          <div className="section-heading">
            <p className="eyebrow">Sobre a Startup Evo</p>
            <h2>Autoridade visual, tecnologia moderna e execução sob medida.</h2>
            <p className="section-summary">
              A proposta aqui é simples: mostrar quem somos, como pensamos e por que a entrega
              é desenhada para parecer premium sem perder clareza.
            </p>
          </div>

          <div className="about-grid">
            <article className="story-card">
              <div className="about-orbit-composition">
                <span className="atom-orbit atom-orbit-1" aria-hidden="true" />
                <span className="atom-orbit atom-orbit-2" aria-hidden="true" />
                <span className="atom-orbit atom-orbit-3" aria-hidden="true" />
                <span className="atom-orbit atom-orbit-4" aria-hidden="true" />
                <span className="atom-orbit atom-orbit-5" aria-hidden="true" />

                <div className="bullet-grid">
                  {aboutTags.map((tag) => (
                    <div className={`bullet-card ${tag.orbitClass}`} key={tag.label}>
                      {tag.label}
                    </div>
                  ))}
                </div>

                <div className="about-story-copy">
                  <p>
                    A <strong>Startup Evo</strong> nasce com foco em criar soluções digitais que
                    unem design de alto nível, clareza estratégica e tecnologia escalável. A ideia
                    é simples: cada projeto precisa parecer premium, funcionar com precisão e gerar
                    valor real para o negócio.
                  </p>
                  <p>
                    Trabalhamos com visão de produto, atendimento personalizado e construção
                    orientada à performance. Não entregamos só páginas bonitas. Entregamos sistemas
                    que posicionam, organizam e fazem a empresa evoluir.
                  </p>
                </div>
              </div>
            </article>

            <div className="about-visuals">
              <div className="about-stack-shell">
                <p className="mini-label">Camadas de construção</p>
                <ArchitectureStack labels={layers} />
              </div>

              <article className="about-note-card">
                <p className="mini-label">O que orienta cada entrega</p>
                <div className="note-list">
                  <div className="note-item">
                    <strong>Clareza</strong>
                    <span>Cada seção precisa explicar algo útil para o cliente.</span>
                  </div>
                  <div className="note-item">
                    <strong>Precisão</strong>
                    <span>Design, copy e tecnologia são definidos em cima do objetivo real.</span>
                  </div>
                  <div className="note-item">
                    <strong>Escala</strong>
                    <span>O projeto nasce pronto para crescer, integrar e evoluir.</span>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section services" id="services">
          <div className="section-heading">
            <p className="eyebrow">Serviços</p>
            <h2>Estrutura completa para marcas que precisam vender, operar e escalar.</h2>
            <p className="section-summary">
              Nesta parte o objetivo é deixar claro o que a Startup Evo pode construir e como
              isso se organiza em frentes de entrega mais objetivas.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <div className="service-card-content">
                  <div className="service-face service-front">
                    <div className="service-orb service-orb-one" />
                    <div className="service-orb service-orb-two" />
                    <div className="service-orb service-orb-three" />
                    <h3>{service.title}</h3>
                  </div>

                  <div className="service-face service-back">
                    <div className="service-back-content">
                      <span className="service-badge">{service.badge}</span>
                      <p>{service.description}</p>
                      <a href="#contact" className="link-inline">
                        Saiba mais
                        <ArrowIcon />
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="services-experience">
            <div className="service-panels-shell">
              <p className="mini-label">Núcleos de entrega</p>
              <InteractivePanels items={panelModes} />
            </div>

            <article className="service-context-card">
              <div className="service-context-dot" />
              <div className="service-context-inner">
                <div className="service-context-ray" />
                <p className="mini-label">Como um projeto ganha forma</p>
                <h3>Processo com intenção em cada bloco.</h3>
                <p>
                  Cada entrega começa pelo objetivo, passa por direção visual e termina com uma
                  solução pronta para operar, integrar e evoluir.
                </p>
                <div className="service-context-list">
                  {serviceFlow.map((item) => (
                    <div className="service-context-item" key={item}>
                      {item}
                    </div>
                  ))}
                </div>
                <div className="service-context-line service-context-line-top" />
                <div className="service-context-line service-context-line-left" />
                <div className="service-context-line service-context-line-bottom" />
                <div className="service-context-line service-context-line-right" />
              </div>
            </article>
          </div>
        </section>

        <section className="section portfolio" id="portfolio">
          <div className="section-heading">
            <p className="eyebrow">Portfólio</p>
            <h2>Casos estruturados para mostrar profundidade técnica e resultado percebido.</h2>
            <p className="section-summary">
              Aqui a navegação deixa de ser conceitual e passa a mostrar entregas, tecnologia,
              tempo de execução e benefício gerado.
            </p>
          </div>

          <PortfolioCarousel />
        </section>

        <section className="section process" id="process">
          <div className="section-heading">
            <p className="eyebrow">Processo de trabalho</p>
            <h2>Um fluxo claro para transformar visão em entrega com confiança.</h2>
            <p className="section-summary">
              Esta seção existe para passar organização. O cliente precisa entender que existe
              método antes, durante e depois da entrega.
            </p>
          </div>

          <div className="process-layout">
            <div className="process-grid">
              {processSteps.map((step, index) => (
                <article className="process-card" key={step.title}>
                  <div className="process-card-inner">
                    <div className="process-card-date">
                      <span>Etapa</span>
                      <strong>0{index + 1}</strong>
                    </div>
                    <div className="process-card-copy">
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                    </div>
                    <span className="process-card-line" />
                  </div>
                </article>
              ))}
            </div>

            <div className="process-feature">
              <p className="mini-label">Pipeline ativo</p>
              <h3>Cada fase deixa a próxima mais inteligente.</h3>
              <p>
                O processo foi desenhado para transmitir organização, direção criativa e alto
                nível técnico desde o primeiro contato até a sustentação do produto.
              </p>
              <AssemblyLoader />
            </div>
          </div>
        </section>

        <section className="section tech" id="tech">
          <div className="section-heading">
            <p className="eyebrow">Tecnologias utilizadas</p>
            <h2>Stack moderna para front-end, back-end, cloud, mobile e automações.</h2>
          </div>

          <div className="tech-layout">
            <div className="tech-highlight">
              <p className="mini-label">Camadas de construção</p>
              <GlassCluster />
            </div>

            <div className="tech-cloud">
              <img
                className="tech-panel-image"
                src="/assets/tech-panel-neon.jpg"
                alt=""
                loading="lazy"
                decoding="async"
                aria-hidden="true"
              />
              <div className="tech-panel-overlay">
                {techStack.map((tech) => (
                  <span className="tech-pill" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section differentials" id="differentials">
          <div className="section-heading">
            <p className="eyebrow">Diferenciais</p>
            <h2>Por que empresas escolhem uma entrega sob medida em vez de uma solução genérica.</h2>
            <p className="section-summary">
              Um resumo direto do que diferencia a Startup Evo em experiência, tecnologia e
              acompanhamento.
            </p>
          </div>

          <div className="differentials-grid">
            {differentiators.map((item, index) => (
              <article className="differential-card" key={item}>
                <span className="differential-glow" />
                <div className="differential-top">
                  <span className="differential-index">0{index + 1}</span>
                  <span className="differential-mark" />
                </div>
                <p>{item}</p>
                <span className="differential-line" />
              </article>
            ))}
          </div>
        </section>

        <section className="section testimonials" id="testimonials">
          <div className="section-heading">
            <p className="eyebrow">Depoimentos</p>
            <h2>Resultados reais merecem uma vitrine com presença e credibilidade.</h2>
            <p className="section-summary">
              Este espaço foi pensado para reunir feedbacks de clientes, relatos de parceria e
              percepções sobre a evolução gerada por cada projeto entregue.
            </p>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((item) => (
              <article className="testimonial-card" key={item.name}>
                <span className="testimonial-quote" aria-hidden="true">“</span>
                <div className="testimonial-head">
                  <div className="testimonial-avatar">{item.name.slice(0, 2).toUpperCase()}</div>
                  <div>
                    <h3>{item.name}</h3>
                    <p className="mini-label">{item.role}</p>
                  </div>
                </div>
                <p>{item.text}</p>
                <span className="testimonial-status">Feedback reservado</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section faq" id="faq">
          <div className="section-heading">
            <p className="eyebrow">FAQ</p>
            <h2>Respostas objetivas para tirar dúvidas antes do primeiro contato.</h2>
            <p className="section-summary">
              Organizamos as perguntas mais comuns para deixar claro como orçamento, prazo,
              suporte e integrações funcionam dentro da Startup Evo.
            </p>
          </div>

          <div className="faq-grid">
            {faqs.map((item, index) => (
              <details className="faq-item" key={item.question} open={index === 0}>
                <summary>
                  <span className="faq-index">{String(index + 1).padStart(2, '0')}</span>
                  <span className="faq-question">{item.question}</span>
                </summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="section final-cta" id="contact">
          <div className="glass-panel final-shell">
            <div className="final-copy">
              <p className="eyebrow">Chamada final</p>
              <h2>Sua empresa precisa de tecnologia para crescer. Nós criamos a solução ideal para você.</h2>
              <p>
                Se a ideia é posicionar melhor sua marca, organizar sua operação ou automatizar
                processos com inteligência, a Startup Evo pode transformar isso em produto real.
              </p>
              <div className="cta-row">
                <QuoteButton href="#contact" />
                <a className="button secondary" href="#portfolio">
                  Ver projetos
                </a>
              </div>
            </div>

            <FinalAstronautCard />

            <div className="social-grid">
              {socialLinks.map((link) => (
                <SocialTooltipCard key={link.title} {...link} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function QuoteButton({ href }) {
  const first = 'Solicitar';
  const second = 'Orcamento';

  return (
    <a className="quote-button-link" href={href} aria-label="Solicitar orçamento">
      <span className="btn-wrapper">
        <span className="btn quote-btn-surface">
          <svg className="btn-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="txt-wrapper">
            <span className="txt-1" aria-hidden="true">
              {first.split('').map((letter, index) => (
                <span className="btn-letter" key={`first-${letter}-${index}`}>
                  {letter}
                </span>
              ))}
            </span>
            <span className="txt-2">
              {second.split('').map((letter, index) => (
                <span className="btn-letter" key={`second-${letter}-${index}`}>
                  {letter}
                </span>
              ))}
            </span>
          </span>
        </span>
      </span>
    </a>
  );
}

function HeroScrollBadge() {
  return (
    <a className="hero-scroll-badge" href="#about" aria-label="Scroll para baixo">
      <svg viewBox="0 0 140 140" aria-hidden="true">
        <defs>
          <path
            id="scrollBadgePath"
            d="M70,70 m-48,0 a48,48 0 1,1 96,0 a48,48 0 1,1 -96,0"
          />
        </defs>
        <text>
          <textPath href="#scrollBadgePath" startOffset="50%">
            SCROLL DOWN • STARTUP EVO • SCROLL DOWN •
          </textPath>
        </text>
      </svg>
      <span className="hero-scroll-center">
        <ArrowDownIcon />
      </span>
    </a>
  );
}

function HoloCube() {
  const shellRef = useRef(null);
  const canvasRef = useRef(null);
  const [hasError, setHasError] = useState(false);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    const node = shellRef.current;

    if (!node || typeof IntersectionObserver === 'undefined') {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsActive(entry.isIntersecting);
      },
      { rootMargin: '180px 0px', threshold: 0.02 },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isActive) {
      return undefined;
    }

    let cleanup = () => {};
    let cancelled = false;

    loadThreeJs()
      .then((THREE) => {
        if (cancelled) {
          return;
        }

        cleanup = mountInteractiveCube(canvasRef.current, shellRef.current, THREE);
      })
      .catch(() => {
        if (!cancelled) {
          setHasError(true);
        }
      });

    return () => {
      cancelled = true;
      cleanup();
    };
  }, [isActive]);

  return (
    <div className="cube-scene hero-cube-scene" ref={shellRef}>
      <div className="hero-atom-field" aria-hidden="true">
        <span className="hero-atom-orbit hero-atom-orbit-one">
          <span className="hero-atom-electron hero-atom-electron-one" />
        </span>
        <span className="hero-atom-orbit hero-atom-orbit-two">
          <span className="hero-atom-electron hero-atom-electron-two" />
        </span>
        <span className="hero-atom-orbit hero-atom-orbit-three">
          <span className="hero-atom-electron hero-atom-electron-three" />
        </span>
        <span className="hero-atom-node hero-atom-node-one" />
        <span className="hero-atom-node hero-atom-node-two" />
        <span className="hero-atom-node hero-atom-node-three" />
      </div>
      <canvas className="hero-cube-canvas" ref={canvasRef} aria-label="Cubo 3D interativo" />
      {hasError ? (
        <div className="hero-cube-fallback">
          <strong>Cubo 3D</strong>
          <span>Não foi possível carregar a visualização interativa.</span>
        </div>
      ) : null}
    </div>
  );
}

function AssemblyLoader() {
  const pipelineItems = [
    ['Briefing', 'Objetivo do projeto'],
    ['Design', 'Direção visual'],
    ['Build', 'Desenvolvimento'],
    ['Launch', 'Entrega e suporte'],
  ];

  return (
    <div className="assembly-loader assembly-iso" aria-label="Pipeline ativo da Startup Evo">
      <ul className="assembly-iso-stack">
        {pipelineItems.map(([title, detail], index) => (
          <li className="assembly-iso-layer" style={{ '--i': pipelineItems.length - index }} key={title}>
            <span className="assembly-iso-index">0{index + 1}</span>
            <strong>{title}</strong>
            <small>{detail}</small>
          </li>
        ))}
        <li className="assembly-iso-layer assembly-iso-action" style={{ '--i': 0 }}>
          <strong>Pipeline ativo</strong>
        </li>
      </ul>
    </div>
  );
}

function ArchitectureStack({ labels }) {
  return (
    <div className="stack-card">
      {labels.map((label, index) => (
        <div
          className="layer"
          key={label}
          style={{
            '--i': index,
            '--label': `"${label}"`,
          }}
        />
      ))}
    </div>
  );
}

function GlassCluster() {
  const items = [
    { label: 'React', rotation: -10, icon: <ReactGlyph /> },
    { label: 'Code', rotation: 0, icon: <CodeGlyph /> },
    { label: 'Scale', rotation: 10, icon: <ScaleGlyph /> },
  ];

  return (
    <div className="glass-cluster">
      {items.map((item) => (
        <div
          className="glass"
          data-text={item.label}
          style={{ '--r': item.rotation }}
          key={item.label}
        >
          {item.icon}
        </div>
      ))}
    </div>
  );
}

function InteractivePanels({ items }) {
  return (
    <div className="panel-card">
      {items.map((item) => (
        <div className="panel-item" key={item.title}>
          <p>{item.title}</p>
          <span>{item.subtitle}</span>
        </div>
      ))}
    </div>
  );
}

function FinalAstronautCard() {
  return (
    <div className="final-astronaut-card" aria-hidden="true">
      <img
        className="final-astronaut-image"
        src="/assets/astronauta-futurista-red-black.png"
        alt=""
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}

function SocialTooltipCard({ title, handle, detail, href, icon }) {
  return (
    <div className="tooltip-container">
      <div className="tooltip">
        <div className="profile">
          <div className="user">
            <div className="img">{title.slice(0, 2).toUpperCase()}</div>
            <div className="details">
              <div className="name">{title}</div>
              <div className="username">{handle}</div>
            </div>
          </div>
          <div className="about">{detail}</div>
        </div>
      </div>

      <a className="icon-card" href={href} aria-label={title}>
        <div className="social-layer">
          <span />
          <span />
          <span />
          <span />
          <span className="fab">{icon}</span>
        </div>
        <div className="text">{title}</div>
      </a>
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14M13 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowDownIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 5v14M6 13l6 6 6-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 448 512" aria-hidden="true">
      <path d="M100.28 448H7.4V148.9h92.88zm-46.49-340A53.79 53.79 0 1 1 53.8 0a53.79 53.79 0 0 1 0 107.59zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448H158.5V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 496 512" aria-hidden="true">
      <path d="M244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 448 512" aria-hidden="true">
      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9S160.5 370.8 224.1 370.8 339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.2 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.5 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8 0-14.9 12-26.8 26.8-26.8 14.8 0 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.3-9.8-66.7-35.7-92.5S354.8 13.4 319.5 11.7C283.3 9.6 164.7 9.6 128.5 11.7c-35.2 1.7-66.7 9.8-92.5 35.7S13.4 93.2 11.7 128.5C9.6 164.7 9.6 347.3 11.7 383.5c1.7 35.3 9.8 66.7 35.7 92.5s57.3 34 92.5 35.7c36.2 2.1 154.8 2.1 191 0 35.3-1.7 66.7-9.8 92.5-35.7s34-57.2 35.7-92.5c2.1-36.2 2.1-154.8 0-191zM398.8 388c-1.6 32.5-8.9 50.2-17 58.4-8.1 8.1-25.9 15.4-58.4 17-33.5 1.9-145.1 1.9-178.6 0-32.5-1.6-50.2-8.9-58.4-17-8.1-8.1-15.4-25.9-17-58.4-1.9-33.5-1.9-145.1 0-178.6 1.6-32.5 8.9-50.2 17-58.4 8.1-8.1 25.9-15.4 58.4-17 33.5-1.9 145.1-1.9 178.6 0 32.5 1.6 50.2 8.9 58.4 17 8.1 8.1 15.4 25.9 17 58.4 1.9 33.5 1.9 145.1 0 178.6z" />
    </svg>
  );
}

function WhatsappIcon() {
  return (
    <svg viewBox="0 0 448 512" aria-hidden="true">
      <path d="M380.9 97.1C339-6.8 201.7-31.4 117.8 34.4c-76.2 59.8-96.1 166-52.2 248.3L0 480l201.4-63.5c76.2 41.8 173.3 20.8 225.8-49.8 52.7-71 64.2-169.8-46.3-269.6zm-156.6 312c-33.8 0-67-9.2-95.8-26.4l-6.8-4-119.5 37.7 39.2-116.5-4.5-7.1C6 244.3 17.7 146.6 91.8 91.2c67.2-50.4 163.5-36.4 214.1 31.1 50.4 67.2 36.3 163.4-31.1 214-27.6 20.7-60.4 31.8-94.5 31.8zm92.1-121.5c-5-2.5-29.8-14.7-34.4-16.4-4.6-1.7-8-2.5-11.4 2.5-3.3 5-13 16.4-15.9 19.7-2.9 3.3-5.8 3.8-10.8 1.3-29.5-14.7-48.8-26.2-68.3-59.2-5.2-9 5.2-8.3 14.7-27.6 1.7-3.3.8-6.2-.4-8.7-1.3-2.5-11.3-27.3-15.5-37.3-4-9.6-8.1-8.3-11.4-8.5-2.9-.2-6.2-.2-9.6-.2-3.3 0-8.7 1.3-13.2 6.2-4.6 5-17.3 16.9-17.3 41.1 0 24.2 17.7 47.6 20.2 50.9 2.5 3.3 34.9 53.4 84.5 74.8 31.4 13.6 43.7 14.7 59.4 12.4 9.6-1.5 29.8-12.1 34-23.8 4.2-11.8 4.2-21.8 2.9-23.8-1.2-2.1-4.5-3.3-9.5-5.8z" />
    </svg>
  );
}

function ReactGlyph() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <circle cx="32" cy="32" r="4.5" />
      <ellipse cx="32" cy="32" rx="21" ry="8.5" fill="none" stroke="currentColor" strokeWidth="3" />
      <ellipse
        cx="32"
        cy="32"
        rx="21"
        ry="8.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        transform="rotate(60 32 32)"
      />
      <ellipse
        cx="32"
        cy="32"
        rx="21"
        ry="8.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        transform="rotate(120 32 32)"
      />
    </svg>
  );
}

function CodeGlyph() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M24 18 10 32l14 14M40 18l14 14-14 14M36 12 28 52" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ScaleGlyph() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M14 46h10V24H14zm20 0h10V14H34zm20 0h10V30H54z" transform="translate(-10)" />
      <path d="M10 50h44" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

export default App;
