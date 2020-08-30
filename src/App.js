import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Bar } from 'react-chartjs-2';
import {beepSound} from './service/Utility';

function App() {
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    let [isVisible, setIsVisible] = useState(true);
    let list = [];
    for (var i = 0; i < 20; i++) {
        let randomNumber = getRandomInt(100);
        list.push(randomNumber);
    }

    let [data, setData] = useState({
        labels: [...list],
        datasets: [
            {
                label: 'Insertion Sort',
                data: [...list]
            }
        ]
    });

    function triggerSorting(i) {
        // for (let i = k; i < list.length; i++) {
        console.log(i)
        // debugger

        let j = i - 1;
        let key = list[i];

        while (j >= 0 && list[j] > key) {
            list[j + 1] = list[j];
            j--;
        }
        list[j + 1] = key;

        i++;
        data.labels = [...list];
        data.datasets[0].data = [...list];
        setData(data);
        setIsVisible(true);
        if (i < list.length) {
            setTimeout(() => {
                setIsVisible(false);
                triggerSorting(i);
                beepSound();
            }, 10);
        } else {
            setIsVisible(true);
        }
    }
    useEffect(() => {
        triggerSorting(1);
    }, []);




    // console.log('yyu');

    return (
        <div className="App" className="chart-box">
            {isVisible &&
                <Bar
                    data={data}
                    width={100}
                    height={50}
                    animation={false}
                />
            }
        </div>
    );
}

export default App;
