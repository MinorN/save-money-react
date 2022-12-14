import React from 'react';
import cs from 'classnames';

let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {
    importAll(require.context('icons', true, /\.svg$/));
} catch (error) {
    console.log(error);
}

type Props = {
    name?: string,
    fill?: string
} & React.SVGAttributes<SVGElement>

const Icon = (props: Props) => {
    const {name, fill, children, className, ...rest} = props;
    return (
        <svg className={cs('icon', className)} fill={props.fill} {...rest}>
            {props.name && <use xlinkHref={'#' + props.name}/>}
        </svg>
    );
};

export default Icon;