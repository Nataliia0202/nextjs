import Image from 'next/image'
import styles from './page.module.scss'
import TabsContainer from '@/components/TabsContainer';



export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.wrapperTab}>
            <TabsContainer />
          </div>
        </div>
      </div>
    </>
  );
}
