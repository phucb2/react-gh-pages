import React from 'react';
import './js/Board.css'

function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            isXNext: true
        }
    }

    renderSquare(i) {
        return <Square 
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)} />;
    }

    handleClick(i) {
        const squares= this.state.squares.slice()
        if (calculateWinner(this.state.squares) || squares[i]) {
            return
        }
        squares[i] = this.state.isXNext ? 'X' : 'O'
        this.setState({squares: squares, isXNext: !this.state.isXNext})
    }

    render() {
        const winner = calculateWinner(this.state.squares)
        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.state.isXNext ? 'X': 'O')
        }

        return (
           <div className='board'>
               <div className='status'>{status}</div>
               <div className='board-row'>
                   {this.renderSquare(0)}
                   {this.renderSquare(1)}
                   {this.renderSquare(2)}
               </div>
               <div className='board-row'>
                   {this.renderSquare(3)}
                   {this.renderSquare(4)}
                   {this.renderSquare(5)}
               </div>
               <div className='board-row'>
                   {this.renderSquare(6)}
                   {this.renderSquare(7)}
                   {this.renderSquare(8)}
               </div>
           </div>
        )
    }
}

class Square extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: null
        };
    }
    render() {
        return (
            <button className="square" 
            onClick={() => this.props.onClick()}>
                {this.props.value}
            </button>
        )
    }
}

export default Board;