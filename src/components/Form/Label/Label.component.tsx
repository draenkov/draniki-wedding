import { FC } from 'react';
import { LabelProps } from 'components/Form/Label/Label.types';

const Label: FC<LabelProps> = ({ name, label }) => <label htmlFor={name}>{label}</label>;

export default Label;
