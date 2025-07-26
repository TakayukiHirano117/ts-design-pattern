export { }

import { bubbleSort, insertionSort } from "./sortAlgorithms";

interface SortStrategy {
    sort(list: number[]): number[];
}

class BubbleSort implements SortStrategy {
    sort(list: number[]): number[] {
        console.log('BubbleSort');
        return bubbleSort(list);
    }
}

class InsertionSort implements SortStrategy {
    sort(list: number[]): number[] {
        console.log('InsertionSort');
        return insertionSort(list);
    }
}

class SortContext {
    constructor(private strategy: SortStrategy) { }

    sort(list: number[]): number[] {
        return this.strategy.sort(list);
    }
}

function run() {
    const list = [1, 3, 2, 4, 5, 8, 124];

    const strategy1 = new BubbleSort();
    const context1 = new SortContext(strategy1);
    console.log(context1.sort(list));


    const list2 = [1, 3, 2, 4, 5, 8, 124];
    const strategy2 = new InsertionSort();
    const context2 = new SortContext(strategy2);
    console.log(context2.sort(list2));
}

run();