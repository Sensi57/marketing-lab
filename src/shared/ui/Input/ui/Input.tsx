import React, { forwardRef, InputHTMLAttributes, useEffect, useId, useRef, useState } from 'react';
import clsx from 'clsx';
import styles from './Input.module.scss';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    label?: string;
    error?: string;
    iconLeft?: React.ReactNode;
    iconRight?: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outlined';
    size?: 's' | 'm' | 'l';
    fullWidth?: boolean;
    className?: string;
    id?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const {
        id,
        label,
        error,
        iconLeft,
        iconRight,
        variant = 'primary',
        size = 'm',
        fullWidth = false,
        disabled = false,
        className,
        value,
        defaultValue,
        onFocus,
        onBlur,
        onChange,
        ...rest
    } = props;

    const reactId = useId();
    const inputId = id ?? `input-${reactId}`;

    const [focused, setFocused] = useState(false);
    const innerRef = useRef<HTMLInputElement | null>(null);
    const isControlled = value !== undefined;

    useEffect(() => {
        if (isControlled && onChange === undefined) {
            if (process.env.NODE_ENV !== 'production') {
                // eslint-disable-next-line no-console
                console.warn('Input: provided `value` without `onChange` (read-only).');
            }
        }
    }, [isControlled, onChange]);

    useEffect(() => {
        // если uncontrolled и defaultValue задан — синхронизируем DOM значение (редкий кейс)
        if (!isControlled && innerRef.current && defaultValue !== undefined) {
            innerRef.current.value = String(defaultValue);
        }
    }, [defaultValue, isControlled]);

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        setFocused(true);
        onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        setFocused(false);
        onBlur?.(e);
    };

    // вычисляем есть ли значение
    const hasValue =
        (isControlled && value !== null && value !== '') ||
        (!isControlled && defaultValue !== undefined && defaultValue !== '') ||
        (!!innerRef.current && innerRef.current.value !== '');

    return (
        <div
            className={clsx(
                styles.input,
                fullWidth && styles['input--full'],
                styles[`input--${size}`],
                styles[`input--root`], // базовый root (для scss удобства)
                className,
            )}>
            <div
                className={clsx(
                    styles['input__wrapper'],
                    styles[`input__wrapper--${variant}`], // variant применяется к wrapper
                    focused && styles['input__wrapper--focused'],
                    iconLeft && styles['input__has-icon-left'],
                    iconRight && styles['input__has-icon-right'],
                    disabled && styles['input__wrapper--disabled'],
                    error && styles['input__wrapper--error'],
                )}>
                {iconLeft && <span className={styles['input__icon-left']}>{iconLeft}</span>}

                <input
                    id={inputId}
                    ref={(node) => {
                        if (typeof ref === 'function') ref(node);
                        else if (ref)
                            (ref as React.MutableRefObject<HTMLInputElement | null>).current = node;
                        innerRef.current = node;
                    }}
                    className={styles['input__field']}
                    disabled={disabled}
                    {...(value !== undefined ? { value } : {})}
                    defaultValue={defaultValue}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onChange={onChange}
                    {...rest}
                />

                {label && (
                    <label
                        htmlFor={inputId}
                        className={clsx(
                            styles['input__label'],
                            (focused || hasValue) && styles['input__label--active'],
                        )}>
                        {label}
                    </label>
                )}

                {iconRight && <span className={styles['input__icon-right']}>{iconRight}</span>}
            </div>

            {error && <div className={styles['input__error']}>{error}</div>}
        </div>
    );
});

Input.displayName = 'Input';
