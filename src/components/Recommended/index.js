import React, { useEffect, useState } from 'react';
import { ToastsStore } from 'react-toasts';
import './Recommended.scss';

const Recommended = ({rebalance}) => {
    const [text, setText] = useState();

    useEffect(() => {
        if (rebalance) {
            setResult(rebalance);
        }
    }, [rebalance])

    const setResult = () => {
        let newRebalance = Object.assign([], rebalance);
        let result = [];
        if (!newRebalance.some((item) => item.value !== 0)) {
            ToastsStore.success('All values ​​are correct !');
            setText(null);
        } else {
            for (let i=0; i < newRebalance.length; i++) {
                if (newRebalance[i].value > 0) {
                    for (let j=0; j < newRebalance.length; j++) {
                        if (newRebalance[j].value < 0) {
                            if((newRebalance[j].value*-1) <=  newRebalance[i].value) {
                                let dif = newRebalance[i].value - (newRebalance[j].value * -1);
                                result.push(`Transfer $${newRebalance[j].value * -1} from ${newRebalance[i].field} to ${newRebalance[j].field}`);
                                newRebalance[j].value = 0;
                                newRebalance[i].value = dif;
                            } else {
                                newRebalance[j].value = newRebalance[j].value + newRebalance[i].value;
                                result.push(`Transfer $${newRebalance[i].value} from ${newRebalance[i].field} to ${newRebalance[j].field}`);
                                newRebalance[i].value = 0;
                            }
                        }
                    }
                }
            }
            setText(result);
        }
    }
    
    return (
        <div className="area">
            <ul>
                {text && text.map((t) => {
                    return(
                        <li key={t}>{t}</li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Recommended;