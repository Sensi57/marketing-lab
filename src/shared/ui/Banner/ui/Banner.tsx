import { ImgHTMLAttributes } from 'react';
import styles from './Banner.module.scss';

interface BannerProps {
    imgs: React.ReactNode;
}

const Banner = () => {
    return (
        <div className={styles.banner}>
            <div className="banner-list">
                <div className="banner-list-info"></div>
            </div>
            <div className="banner-pagination">
                <div className="banner-pagination-list"></div>
            </div>
        </div>
    );
};

export default Banner;
