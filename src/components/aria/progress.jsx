import { useMeter } from 'react-aria';
import styles from '../../style';

function Meter(props) {
    let {
        label,
        showValueLabel = !!label,
        value,
        minValue = 0,
        maxValue = 100
    } = props;
    let {
        meterProps,
        labelProps
    } = useMeter(props);

    // Calculate the width of the progress bar as a percentage
    let percentage = (value - minValue) / (maxValue - minValue);
    let barWidth = `${Math.round(percentage * 100)}%`;
    const makeRound = props.round ? 'rounded-full' : 'none';

    return (
        <div {...meterProps} style={{ width: 200 }} className='rounded-full pl-2 pr-6 pt-4 pb-4 text-white text-[15px] font-bold' >
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                {label &&
                    (
                        <span {...labelProps}>
                            {label}
                        </span>
                    )}
                {showValueLabel &&
                    (
                        <span>
                            {meterProps['aria-valuetext']}
                        </span>
                    )}
            </div>
            <div style={{ height: 10, background: 'lightgray' }} className={`mt-1 ${makeRound}`}>
                <div style={{ width: barWidth, height: 10, }} className={`${props.grd} ${makeRound}`} />
            </div>
        </div >
    );
}

export default Meter;