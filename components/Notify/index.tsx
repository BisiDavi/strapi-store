import React from 'react';
import { Alert } from 'react-bootstrap';
import { NotifyProps } from '../../types';

export default function Notify({ variant, text }: NotifyProps): JSX.Element {
    return <Alert variant={variant}>{text}</Alert>;
}
