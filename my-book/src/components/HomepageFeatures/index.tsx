import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  icon: string;
  description: ReactNode;
  status: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'ROS 2 MIDDLEWARE',
    icon: '⬢',
    status: 'OPERATIONAL',
    description: (
      <>
        Distributed communication framework enabling modular robotics systems
        with real-time message passing, service calls, and action protocols.
      </>
    ),
  },
  {
    title: 'NVIDIA ISAAC SIMULATION',
    icon: '⚙',
    status: 'READY',
    description: (
      <>
        Physics-accurate digital twin environment for testing humanoid behaviors,
        sensor integration, and control algorithms before physical deployment.
      </>
    ),
  },
  {
    title: 'VISION-LANGUAGE-ACTION',
    icon: '▣',
    status: 'ACTIVE',
    description: (
      <>
        Advanced VLA models combining visual perception, natural language understanding,
        and robotic action generation for embodied AI systems.
      </>
    ),
  },
];

function Feature({title, icon, description, status}: FeatureItem) {
  return (
    <div className={clsx('col col--4', styles.featureCol)}>
      <div className={`technical-panel ${styles.featureCard}`}>
        <div className={styles.featureIcon}>{icon}</div>
        <div className={styles.featureHeader}>
          <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
          <span className={styles.featureStatus}>[{status}]</span>
        </div>
        <div className={styles.separator}></div>
        <p className={styles.featureDescription}>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>CORE TECHNOLOGY STACK</h2>
          <div className={styles.sectionLine}></div>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
