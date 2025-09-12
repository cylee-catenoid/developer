import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

/*function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}*/

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Kollus 개발자 센터"
      description="Kollus 개발자 문서 허브"
    >
      {/* Hero */}
      <header className={styles.heroBanner}>
        <div className="container">
          <h2 className={styles.heroTitle}>Kollus 연동을 빠르게 시작하세요</h2>
        </div>
      </header>

      <main className="container">
        <div className={styles.grid2x2}>
          <Link to="https://cylee-catenoid.github.io/developer/docs" className={styles.cardLink}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>개발 가이드</h3>
              <p className={styles.cardSubtitle}></p>
            </div>
          </Link>

          <Link to="https://cylee-catenoid.github.io/developer/api" className={styles.cardLink}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>API 레퍼런스</h3>
              <p className={styles.cardSubtitle}></p>
            </div>
          </Link>

          <Link to="https://cylee-catenoid.github.io/developer/sdk" className={styles.cardLink}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>모바일 SDK</h3>
              <p className={styles.cardSubtitle}></p>
            </div>
          </Link>

          <Link to="https://cylee-catenoid.github.io/developer/demo" className={styles.cardLink}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>데모 Player</h3>
              <p className={styles.cardSubtitle}></p>
            </div>
          </Link>
        </div>
      </main>
    </Layout>
  );
}
