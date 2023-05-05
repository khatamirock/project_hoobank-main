import { useSeparator } from 'react-aria';

function Separator(props) {
    let { separatorProps } = useSeparator(props);

    return (
        <div className='bg-white m-4'
            {...separatorProps}
            style={{
                background: 'red',
                width: props.orientation === 'vertical' ? '1px' : '100%',
                height: props.orientation === 'vertical' ? '100%' : '1px',
                margin: props.orientation === 'vertical' ? '0 5px' : '5px 0'
            }}
        />
    );
}

export default Separator;