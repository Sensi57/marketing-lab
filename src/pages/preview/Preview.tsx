import styles from './Preview.module.scss';
import { Flex } from '@/shared/ui/Flex/ui/Flex';

/**
 * @file Preview.jsx
 * @description Страница для обученик
 */
const Preview = () => {
    console.log('Preview was rendered');
    return (
        <div className={styles.wrapper}>
            {/* <Flex direction="column" className={styles.container}>
                <div tabIndex={0} className={styles.outer}>
                    Che yam Kak <div className={styles.inner}>fdfs</div>dela?
                </div>
                <button title={'Закрыть окно'} className={styles['button-preview']}>
                    Che yam <span> Kak dela</span> chti
                </button>
                <button aria-label={'Нажми'} className={styles['button-preview']}>
                    Click
                </button>
            </Flex> */}
            <Component1 />
        </div>
    );
};

export default Preview;

const Component1 = () => {
    return (
        <Flex direction="column" align="center" justify="center">
            <div>
                <div>
                    <p>p1</p>
                </div>
                <p>p2</p>
            </div>

            <ul>
                <li>li1</li>
                <div>
                    <li>li in div</li>
                </div>
            </ul>
            <h1>h1</h1>
            <p>p1</p>
            <p>p2</p>
            <h2>h2</h2>
            <p>p1</p>
            <p>p2</p>
            <section>
                <p>p in section</p>
            </section>
        </Flex>
    );
};
