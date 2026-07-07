import Link from '@docusaurus/Link';
import { useVersions } from '@docusaurus/plugin-content-docs/client';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import type { ReactNode } from 'react';
import clsx from 'clsx';
import styles from './index.module.css';

function HomepageHeader() {
  const versions = useVersions('default');
  // Find the 'current' (next) version, which is the unreleased version corresponding to the docs/ folder
  const currentVersion = versions.find((v) => v.name === 'current') || versions[0];
  
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Smart Workflow
        </Heading>
        <p className="hero__subtitle">
          Bring AI directly into Axon Ivy
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to={`${currentVersion.path}/overview`}>
            Explore Overview
          </Link>
        </div>
      </div>
    </header>
  );
}

const FeatureList = [
  {
    title: 'Familiar Setup',
    description: (
      <>
        Drop AI agents into BPMN processes with no structural changes and configure everything through Axon Ivy’s standard interfaces.
      </>
    ),
  },
  {
    title: 'Enterprise-ready',
    description: (
      <>
        Built for enterprise needs with logging, monitoring, and configuration controls natively supported out of the box.
      </>
    ),
  },
  {
    title: 'Flexible Tools',
    description: (
      <>
        Turn any callable process into an AI-discoverable tool, empowering agents to act autonomously.
      </>
    ),
  },
  {
    title: 'Multi-model Support',
    description: (
      <>
        Use lightweight or advanced language models seamlessly depending on the complexity of the task at hand.
      </>
    ),
  },
  {
    title: 'Type-safe Outputs',
    description: (
      <>
        Produce structured Java objects directly from AI responses for immediate and predictable use in your workflow.
      </>
    ),
  },
  {
    title: 'Natural Language Handling',
    description: (
      <>
        Accept unstructured, conversational input and return human-friendly, synthesized output.
      </>
    ),
  },
];

function HomepageFeatures() {
  return (
    <section className="padding-vert--xl">
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <div key={idx} className={clsx('col col--4', 'margin-bottom--lg')}>
              <div className="text--center padding-horiz--md">
                <Heading as="h3">{props.title}</Heading>
                <p>{props.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Smart Workflow"
      description="Smart Workflow brings AI directly into Axon Ivy">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
