import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner, 'blueprint-grid-large')}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.bookLabel}>TECHNICAL MANUAL</div>
          <Heading as="h1" className={styles.heroTitle}>
            PHYSICAL AI & HUMANOID ROBOTICS
          </Heading>
          <p className={styles.heroSubtitle}>From Digital Intelligence to Embodied Action</p>
          <div className={styles.metaInfo}>
            <span className={styles.metaItem}>ROS 2 • Gazebo • NVIDIA Isaac • VLA</span>
          </div>
          <div className={styles.buttons}>
            <Link
              className="button button--primary button--lg"
              to="/docs/intro">
              START READING →
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="https://github.com/your-org/physical-ai-humanoid-robotics">
              VIEW SOURCE
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

function BookIntro() {
  return (
    <section className={styles.introSection}>
      <div className="container">
        <div className={styles.introGrid}>
          <div className={styles.introMain}>
            <h2 className={styles.sectionHeading}>OVERVIEW</h2>
            <div className={styles.separator}></div>
            <p className={styles.introParagraph}>
              This comprehensive technical manual explores the convergence of artificial intelligence
              and physical robotics systems. Learn to build embodied AI agents that perceive, reason,
              and act in the physical world through advanced vision-language-action models.
            </p>
            <p className={styles.introParagraph}>
              Master the complete stack from middleware communication (ROS 2) to physics simulation
              (Gazebo, NVIDIA Isaac) and cutting-edge VLA architectures for humanoid control.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>WHAT YOU WILL LEARN</h3>
              <ul className={styles.learningList}>
                <li>Design and implement distributed robotics systems using ROS 2</li>
                <li>Create physics-accurate digital twins with Gazebo and NVIDIA Isaac Sim</li>
                <li>Build vision-language-action models for embodied intelligence</li>
                <li>Deploy humanoid control systems for locomotion and manipulation</li>
              </ul>
            </div>
          </div>

          <div className={styles.introSidebar}>
            <div className={`technical-panel ${styles.statsPanel}`}>
              <div className="technical-panel__header">BOOK STATISTICS</div>
              <div className={styles.statsList}>
                <div className={styles.statRow}>
                  <span className={styles.statLabel}>MODULES</span>
                  <span className={styles.statValue}>04</span>
                </div>
                <div className={styles.statRow}>
                  <span className={styles.statLabel}>CHAPTERS</span>
                  <span className={styles.statValue}>12+</span>
                </div>
                <div className={styles.statRow}>
                  <span className={styles.statLabel}>CODE EXAMPLES</span>
                  <span className={styles.statValue}>50+</span>
                </div>
                <div className={styles.statRow}>
                  <span className={styles.statLabel}>DIFFICULTY</span>
                  <span className={styles.statDifficulty}>ADVANCED</span>
                </div>
              </div>
            </div>

            <div className={`technical-panel ${styles.techPanel}`}>
              <div className="technical-panel__header">PREREQUISITES</div>
              <ul className={styles.prereqList}>
                <li>Python programming</li>
                <li>Basic robotics concepts</li>
                <li>Linux/Ubuntu environment</li>
                <li>Machine learning fundamentals</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ModulesOverview() {
  const modules = [
    {
      number: '01',
      title: 'ROS 2 Middleware',
      description: 'Distributed communication framework for modular robotics systems',
      topics: ['Nodes & Topics', 'Services & Actions', 'Launch Files', 'Python & C++ APIs'],
      status: 'CORE'
    },
    {
      number: '02',
      title: 'Digital Twin Simulation',
      description: 'Physics-accurate virtual environments for robot testing',
      topics: ['Gazebo Basics', 'URDF Modeling', 'Sensor Simulation', 'World Building'],
      status: 'CORE'
    },
    {
      number: '03',
      title: 'NVIDIA Isaac Platform',
      description: 'GPU-accelerated simulation and synthetic data generation',
      topics: ['Isaac Sim', 'Isaac ROS', 'VSLAM', 'Path Planning'],
      status: 'ADVANCED'
    },
    {
      number: '04',
      title: 'VLA Robotics',
      description: 'Vision-Language-Action models for embodied AI',
      topics: ['VLA Architecture', 'Voice Control', 'Autonomous Agents', 'Multimodal Learning'],
      status: 'RESEARCH'
    }
  ];

  return (
    <section className={styles.modulesSection}>
      <div className="container">
        <h2 className={styles.sectionHeading}>CORE MODULES</h2>
        <div className={styles.separator}></div>
        <div className={styles.modulesGrid}>
          {modules.map((module) => (
            <div key={module.number} className={`technical-panel ${styles.moduleCard}`}>
              <div className={styles.moduleHeader}>
                <span className={styles.moduleNumber}>{module.number}</span>
                <span className={`${styles.moduleStatus} ${styles[`status${module.status}`]}`}>
                  [{module.status}]
                </span>
              </div>
              <h3 className={styles.moduleTitle}>{module.title}</h3>
              <p className={styles.moduleDesc}>{module.description}</p>
              <div className={styles.topicsList}>
                {module.topics.map((topic, idx) => (
                  <span key={idx} className={styles.topicTag}>
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className={styles.ctaSection}>
      <div className="container">
        <div className={`technical-panel ${styles.ctaPanel}`}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>BEGIN YOUR JOURNEY</h2>
            <p className={styles.ctaText}>
              Start building intelligent physical systems that bridge the gap between
              digital AI and real-world robotics applications.
            </p>
            <Link
              className="button button--primary button--lg"
              to="/docs/intro">
              READ INTRODUCTION →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Physical AI & Humanoid Robotics - From Digital Intelligence to Embodied Action">
      <HomepageHeader />
      <main>
        <BookIntro />
        <ModulesOverview />
        <CTASection />
      </main>
    </Layout>
  );
}
