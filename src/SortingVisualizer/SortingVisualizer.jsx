import "./SortingVisualizer.css";
import {mergeSort} from "../sortingAlgorithms/sortingAlgorithms.js";
import React from 'react';

class SortingVisualizer extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = 
        {
            array: []
        };
    }
    componentDidMount()
    {
        this.resetArray();
    }
    resetArray()
    {
        const array = [];
        for (let i = 0; i < 310; i++)
        {
            array.push(randomIntFromInterval(5, 730));
        }
        this.setState({array});
    }
    mergeSort()
    {
        const animations = mergeSort(this.state.array);
        for (let i = 0; i < newAnimations.length; i++)
        {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if (isColorChange)
            {
                const [barOneIdx, barTwoIdx] = newAnimations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? 'red' : 'turquoise';
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * 5);
            }
            else
            {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = newAnimations[i];
                    const barOneStyle = arrayBars[barOneIdx].style
                    barOneStyle.height = `${newHeight}px`;
                }, i * 5);
            }
        }
    }
    quickSort()
    {}
    heapSort()
    {}
    bubbleSort()
    {}
    render()
    {
        const {array} = this.state;

        return (
            <div className="array-container">
                {array.map((value,idx) => (
                    <div className="array-bar" key={idx} style={{height: `${value}px`}}>
                    </div>
                ))}
                <button onClick={() => this.resetArray()}>Generate New Array</button>
                <button onClick={() => this.mergeSort()}>Merge Sort</button>
                <button onClick={() => this.quickSort()}>Quick Sort</button>
                <button onClick={() => this.heapSort()}>Heap Sort</button>
                <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
            </div>
        );
    }
}

function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export default SortingVisualizer;