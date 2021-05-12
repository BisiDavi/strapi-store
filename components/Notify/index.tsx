import React, { FC } from 'react';
import { Alert } from 'react-bootstrap';
import { NotifyProps } from '../../types';

const Notify: FC<NotifyProps> = ({ variant, text }): JSX.Element => {
    return <Alert variant={variant}>{text}</Alert>;
};

export default Notify;
