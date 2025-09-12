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

      {/* Cards */}
      <main className="container">
        <div className={`row ${styles.cardRow}`}>
          {/* 개발 가이드 */}
          <div className="col col--4">
            <Link to="/docs/guide/intro" className={styles.cardLink}>
              <div className={`card ${styles.card}`}>
                <div className="card__header">
                  <h3 className={styles.cardTitle}>개발 가이드</h3>
                </div>
                <div className="card__body">
                </div>
              </div>
            </Link>
          </div>

          {/* API 레퍼런스 */}
          <div className="col col--4">
            <Link to="/docs/api/overview" className={styles.cardLink}>
              <div className={`card ${styles.card}`}>
                <div className="card__header">
                  <h3 className={styles.cardTitle}>API 레퍼런스</h3>
                </div>
                <div className="card__body">
                </div>
              </div>
            </Link>
          </div>

          {/* 모바일 SDK */}
          <div className="col col--4">
            <Link to="/demo/player" className={styles.cardLink}>
              <div className={`card ${styles.card}`}>
                <div className="card__header">
                  <h3 className={styles.cardTitle}>모바일 SDK</h3>
                </div>
                <div className="card__body">
                </div>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}
