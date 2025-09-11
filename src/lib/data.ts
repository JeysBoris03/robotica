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
    description: 'An advanced humanoid robot designed for a variety of search and rescue tasks. It exhibits remarkable balance and mobility.',
    image: getImage('humanoid-robot'),
    parts: [
      {
        id: 'p1',
        name: 'Head Unit',
        description: 'The head unit contains the primary sensor suite, including stereo cameras, LiDAR, and a neural processing unit for real-time environment mapping and object recognition.',
        image: getImage('robot-head'),
        position: { top: '12%', left: '50%' },
        learnMoreUrl: 'https://en.wikipedia.org/wiki/Computer_vision'
      },
      {
        id: 'p2',
        name: 'Articulated Arm',
        description: 'A highly flexible arm with 7 degrees of freedom, capable of complex manipulation tasks. It is equipped with force-torque sensors in each joint for precise control.',
        image: getImage('robot-arm-part'),
        position: { top: '35%', left: '25%' },
        learnMoreUrl: 'https://en.wikipedia.org/wiki/Robotic_arm'
      },
      {
        id: 'p3',
        name: 'Torso Core',
        description: 'The torso houses the primary power distribution system, hydraulic fluid reservoir, and the main CPU cluster for high-level decision making.',
        image: getImage('robot-torso'),
        position: { top: '40%', left: '50%' },
        learnMoreUrl: 'https://en.wikipedia.org/wiki/Central_processing_unit'
      },
      {
        id: 'p4',
        name: 'Bipedal Leg',
        description: 'A powerful hydraulic leg that allows the robot to walk, run, and traverse uneven terrain. Its design is inspired by human biomechanics for efficient locomotion.',
        image: getImage('robot-leg-part'),
        position: { top: '75%', left: '60%' },
        learnMoreUrl: 'https://en.wikipedia.org/wiki/Legged_robot'
      }
    ]
  },
  {
    id: '2',
    slug: 'kr-10',
    name: 'KR 10 Industrial Arm',
    description: 'A versatile and precise 6-axis industrial robot, ideal for manufacturing, assembly, and pick-and-place operations.',
    image: getImage('robotic-arm'),
    parts: [
        {
            id: 'p5',
            name: 'Robot Base',
            description: 'The foundation of the robot, which is mounted to the floor or a linear track. It houses the main controller and provides stability for the entire structure.',
            image: getImage('robotic-arm-base'),
            position: { top: '85%', left: '30%' },
            learnMoreUrl: 'https://en.wikipedia.org/wiki/Industrial_robot'
        },
        {
            id: 'p6',
            name: 'Axis 3 Joint',
            description: 'A major rotational joint that allows the arm to pivot and extend its reach. It is driven by a high-torque servo motor with a harmonic drive gearbox for zero-backlash movement.',
            image: getImage('robotic-arm-joint'),
            position: { top: '50%', left: '55%' },
            learnMoreUrl: 'https://en.wikipedia.org/wiki/Harmonic_drive'
        },
        {
            id: 'p7',
            name: 'End Effector (Gripper)',
            description: 'The "hand" of the robot, which can be customized for specific tasks. This pneumatic gripper is designed for securely handling small to medium-sized components.',
            image: getImage('robotic-arm-gripper'),
            position: { top: '15%', left: '80%' },
            learnMoreUrl: 'https://en.wikipedia.org/wiki/Robot_end_effector'
        }
    ]
  },
  {
    id: '3',
    slug: 'aero-drone',
    name: 'Aero-4 Quadcopter',
    description: 'A high-performance quadcopter drone designed for aerial photography and environmental monitoring.',
    image: getImage('drone-robot'),
    parts: [
        {
            id: 'p8',
            name: 'Brushless Motor & Propeller',
            description: 'The propulsion system of the drone. The high-RPM brushless motor drives a carbon-fiber propeller to generate lift with high efficiency and low noise.',
            image: getImage('drone-propeller'),
            position: { top: '40%', left: '20%' },
            learnMoreUrl: 'https://en.wikipedia.org/wiki/Unmanned_aerial_vehicle'
        },
        {
            id: 'p9',
            name: 'Gimbaled Camera',
            description: 'A 3-axis gimbal stabilizes the 4K camera, ensuring smooth video footage even during aggressive flight maneuvers. It is controlled by a dedicated image processor.',
            image: getImage('drone-camera'),
            position: { top: '75%', left: '50%' },
            learnMoreUrl: 'https://en.wikipedia.org/wiki/Gimbal'
        }
    ]
  }
];
