import React from 'react';
import { ISingleInputProps } from './types';
declare class SingleInput extends React.PureComponent<ISingleInputProps> {
    private input;
    constructor(props: ISingleInputProps);
    componentDidUpdate(prevProps: ISingleInputProps): void;
    private handleRef;
    render(): JSX.Element;
}
export default SingleInput;
