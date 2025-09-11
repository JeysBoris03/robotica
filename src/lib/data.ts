import { PlaceHolderImages } from './placeholder-images';
import type { Robot } from './types';

const getImage = (id: string) => {
  const img = PlaceHolderImages.find((img) => img.id === id);
  if (!img) {
    throw new Error(`Image with id "${id}" not found.`);
  }
  return img;
};

export const robots: Robot[] = [
  {
    id: '1',
    slug: 'atlas-v',
    name: 'Atlas V',
    description: 'Un robot humanoide avanzado diseñado para una variedad de tareas de búsqueda y rescate. Exhibe un equilibrio y movilidad notables.',
    image: getImage('humanoid-robot'),
    parts: [
      {
        id: 'p1',
        name: 'Unidad de Cabeza',
        description: 'La unidad de cabeza contiene el conjunto de sensores primarios, incluidas cámaras estéreo, LiDAR y una unidad de procesamiento neuronal para el mapeo del entorno en tiempo real y el reconocimiento de objetos.',
        image: getImage('robot-head'),
        position: { top: '12%', left: '50%' },
        learnMoreUrl: 'https://es.wikipedia.org/wiki/Visi%C3%B3n_artificial'
      },
      {
        id: 'p2',
        name: 'Brazo Articulado',
        description: 'Un brazo altamente flexible con 7 grados de libertad, capaz de realizar tareas complejas de manipulación. Está equipado con sensores de fuerza-par en cada articulación para un control preciso.',
        image: getImage('robot-arm-part'),
        position: { top: '35%', left: '25%' },
        learnMoreUrl: 'https://es.wikipedia.org/wiki/Brazo_rob%C3%B3tico'
      },
      {
        id: 'p3',
        name: 'Núcleo del Torso',
        description: 'El torso alberga el sistema principal de distribución de energía, el depósito de fluido hidráulico y el clúster principal de CPU para la toma de decisiones de alto nivel.',
        image: getImage('robot-torso'),
        position: { top: '40%', left: '50%' },
        learnMoreUrl: 'https://es.wikipedia.org/wiki/Unidad_central_de_procesamiento'
      },
      {
        id: 'p4',
        name: 'Pierna Bípeda',
        description: 'Una potente pierna hidráulica que permite al robot caminar, correr y atravesar terrenos irregulares. Su diseño está inspirado en la biomecánica humana para una locomoción eficiente.',
        image: getImage('robot-leg-part'),
        position: { top: '75%', left: '60%' },
        learnMoreUrl: 'https://es.wikipedia.org/wiki/Robot_caminante'
      }
    ]
  },
  {
    id: '2',
    slug: 'kr-10',
    name: 'Brazo Industrial KR 10',
    description: 'Un robot industrial de 6 ejes, versátil y preciso, ideal para operaciones de fabricación, ensamblaje y pick-and-place.',
    image: getImage('robotic-arm'),
    parts: [
        {
            id: 'p5',
            name: 'Base del Robot',
            description: 'La base del robot, que se monta en el suelo o en una pista lineal. Alberga el controlador principal y proporciona estabilidad a toda la estructura.',
            image: getImage('robotic-arm-base'),
            position: { top: '85%', left: '30%' },
            learnMoreUrl: 'https://es.wikipedia.org/wiki/Robot_industrial'
        },
        {
            id: 'p6',
            name: 'Articulación del Eje 3',
            description: 'Una importante articulación giratoria que permite que el brazo pivote y extienda su alcance. Es accionada por un servomotor de alto par con una caja de engranajes de accionamiento armónico para un movimiento sin juego.',
            image: getImage('robotic-arm-joint'),
            position: { top: '50%', left: '55%' },
            learnMoreUrl: 'https://es.wikipedia.org/wiki/Reductor_de_onda_de_deformaci%C3%B3n'
        },
        {
            id: 'p7',
            name: 'Efector Final (Pinza)',
            description: 'La "mano" del robot, que se puede personalizar para tareas específicas. Esta pinza neumática está diseñada para manipular de forma segura componentes de tamaño pequeño a mediano.',
            image: getImage('robotic-arm-gripper'),
            position: { top: '15%', left: '80%' },
            learnMoreUrl: 'https://es.wikipedia.org/wiki/Efector_final'
        }
    ]
  },
  {
    id: '3',
    slug: 'aero-drone',
    name: 'Cuadricóptero Aero-4',
    description: 'Un dron cuadricóptero de alto rendimiento diseñado para fotografía aérea y monitoreo ambiental.',
    image: getImage('drone-robot'),
    parts: [
        {
            id: 'p8',
            name: 'Motor sin Escobillas y Hélice',
            description: 'El sistema de propulsión del dron. El motor sin escobillas de altas RPM impulsa una hélice de fibra de carbono para generar sustentación con alta eficiencia y bajo ruido.',
            image: getImage('drone-propeller'),
            position: { top: '40%', left: '20%' },
            learnMoreUrl: 'https://es.wikipedia.org/wiki/Veh%C3%ADculo_a%C3%A9reo_no_tripulado'
        },
        {
            id: 'p9',
            name: 'Cámara con Gimbal',
            description: 'Un gimbal de 3 ejes estabiliza la cámara 4K, asegurando imágenes de video fluidas incluso durante maniobras de vuelo agresivas. Es controlado por un procesador de imagen dedicado.',
            image: getImage('drone-camera'),
            position: { top: '75%', left: '50%' },
            learnMoreUrl: 'https://es.wikipedia.org/wiki/Gimbal'
        }
    ]
  }
];
