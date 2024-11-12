import React, { FC } from 'react';
import styles from 'components/DressCode/DressCode.module.scss';
import photo from 'assets/img/photo2.jpg';
import Image from 'next/image';

const colors = ['#333D51', '#D3AC2B', '#F4F3EA', 'aqua', 'pink'];

const DressCode: FC = () => (
    <div className={styles.wrap}>
        <div className={styles.container}>
            <h3 className={styles.title}>Дресс-код</h3>
            <div className={styles.dressCode}>
                <p>
                    Если вам сложно определиться с нарядом на праздник, то вы можете поддержать
                    цветовую гамму нашей свадьбы
                </p>
                <div className={styles.colorsWrap}>
                    {colors.map(colorItem => (
                        <div
                            className={styles.color}
                            key={colorItem}
                            style={{ backgroundColor: colorItem }}
                        />
                    ))}
                </div>
                <div className={styles.line} />
                <Image
                    src={photo as string}
                    alt="Третье лучшее фото молодых"
                    className={styles.photo}
                />
            </div>
        </div>
    </div>
);

export default DressCode;
