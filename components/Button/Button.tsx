import Link from 'next/link';
import { ButtonProps } from '../../types';

export default function Button(props: ButtonProps) {
    return (
        <>
            {props.asLink ? (
                <Link href={props.linkTo} passHref>
                    <a>
                        <button
                            onClick={props.btnClick}
                            className={props.btnClassName}
                            style={props.styles}
                        >
                            {props.text}
                        </button>
                    </a>
                </Link>
            ) : (
                <button
                    onClick={props.btnClick}
                    className={props.btnClassName}
                    style={props.styles}
                    disabled={props.disabled}
                >
                    {props.text}
                </button>
            )}
            <style jsx>
                {`
                    background: ${props.bgColor};
                    height: ${props.height};
                    width: ${props.width};
                    color: ${props.color};
                    text-align: center;
                    font-family: 'raleway';
                `}
            </style>
        </>
    );
}
