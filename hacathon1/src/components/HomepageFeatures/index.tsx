import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Learn the Basics',
    Svg: require('@site/static/img/academic-cap.svg').default,
    description: (
      <>
        Explore the fundamental concepts of ROS 2 and build a solid foundation
        for your robotics projects.
      </>
    ),
  },
  {
    title: 'Dive into the Docs',
    Svg: require('@site/static/img/book-open.svg').default,
    description: (
      <>
        Our comprehensive documentation provides detailed explanations and
        examples to help you get the most out of ROS 2.
      </>
    ),
  },
  {
    title: 'Code with Confidence',
    Svg: require('@site/static/img/code-bracket.svg').default,
    description: (
      <>
        Get up to speed quickly with our easy-to-follow tutorials and start
        building your own robotic applications.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
