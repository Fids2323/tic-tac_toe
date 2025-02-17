import {MOVE_ORDER} from './constants'

export 	const getNextMove = (currentMove, playersCount, playersTimeOver) => {
    const slicedMoveOrder = MOVE_ORDER.slice(0, playersCount).filter(symbol => !playersTimeOver.includes(symbol));

    const indexMove = slicedMoveOrder.indexOf(currentMove) + 1;
    return slicedMoveOrder[indexMove] ?? slicedMoveOrder[0];
};

export 	function computeWinner (cells, sequenceSize = 5, fieldSize = 19)
{
    const gap = Math.floor(sequenceSize / 2)

    function compareElements(indexes){
        let result = true;

        for(let i = 1 ; i < indexes.length; i++){
            result &&= !!cells[indexes[i]];						//Not Empty element
            result &&= cells[indexes[i]] === cells[indexes[i-1]]	//Compare with prev elem
        }
        return result;
    }

    // get 4 array sequence
    function getSequenceIndexes(i){
        const res = [
            [],  // -
            [],	 // \
            [],	 // /
            []   // |
        ]
        for(let j = 0 ; j < sequenceSize ; j ++)
        {
            res[0].push(j - gap + i),
            res[1].push(fieldSize * (j - gap) + (j - gap) + i), 
            res[2].push( - fieldSize * (j - gap) + (j - gap) + i),
            res[3].push(fieldSize * (j - gap) + i)
        }

        //exception handling
        const x = i % fieldSize;
        if(x < gap || x >= fieldSize - gap){
            res.shift()
            res.shift()
            res.shift()
        }

        return res
    }


    for(let i = 0 ; i < cells.length ; i ++)
    {
        if(cells[i])
        {
            const indexRows = getSequenceIndexes(i); // output [Arrays]
            const winnerIndexes  = indexRows.find((row)=> compareElements(row)) //Array win

            if(winnerIndexes)
                return winnerIndexes;
        }
    }
    return undefined;
}
