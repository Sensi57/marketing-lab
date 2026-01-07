/**
 * @file Button.tsx
 * @description Универсальная кнопка с вариантами, размерами, шириной/высотой,
 * поддержкой бейджа, иконок слева/справа (prefix/suffix).
 */

import { forwardRef } from 'react';
import clsx from 'clsx';
import { ButtonProps } from '../model/types';
import styles from './Button.module.scss';

/**
 * Button — универсальная кнопка для текста, иконок и уведомлений.
 *
 * @param variant — визуальный стиль кнопки: primary, secondary, ghost, territory и др.
 * @param size — размер кнопки: s, m, l
 * @param fullWidth — растянуть кнопку на всю ширину
 * @param fullHeight — растянуть кнопку на всю высоту контейнера
 * @param badge — дополнительный элемент (например, уведомление)
 * @param prefix — элемент перед текстом кнопки (иконка слева)
 * @param suffix — элемент после текста кнопки (иконка справа)
 * @param children — основной контент кнопки
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            variant = 'primary',
            size = 'm',
            className = '',
            fullWidth = false,
            fullHeight = false,
            badge,
            rounded = 'normal',
            prefix,
            suffix,
            children,
            ...props
        },
        ref,
    ): React.JSX.Element => {
        return (
            <button
                ref={ref}
                className={clsx(
                    styles.button, // базовый стиль
                    styles[variant], // стиль по варианту
                    styles[`size-${size}`], // размер кнопки
                    styles[`border-${rounded}`],
                    { [styles.fullWidth]: fullWidth }, // растянуть по ширине
                    { [styles.fullHeight]: fullHeight }, // растянуть по высоте
                    className, // дополнительные классы
                )}
                {...props}>
                {/* Префикс (иконка слева) */}
                {prefix && <span className={styles.prefix}>{prefix}</span>}

                {/* Основной контент кнопки */}
                <span className={styles.content}>{children}</span>

                {/* Суффикс (иконка справа) */}
                {suffix && <span className={styles.suffix}>{suffix}</span>}

                {/* Бейдж (например, количество уведомлений) */}
                {badge && <span className={styles.badge}>{badge}</span>}
            </button>
        );
    },
);

Button.displayName = 'Button';
