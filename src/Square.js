import { useState } from 'react';

/**
 * Square组件：渲染单个游戏方格
 * @param {Object} props - 组件属性
 * @param {string|null} props.value - 方格的值('x', '0', 或null)
 * @param {Function} props.onSquareClick - 方格被点击时的回调函数
 */
function Square({value, onSquareClick}) {
    return (
        <button 
            className="square"
            onClick={onSquareClick}  // 点击时触发父组件传入的处理函数
        >
            {value}  {/* 显示方格当前的值：'x'、'0' 或空 */}
        </button>
    );
}

/**
 * Board组件：主游戏组件，管理整个井字棋游戏的状态和逻辑
 */
function Board({ xIsNext, squares, onPlay }) {
    
    function handleClick(i) {
        // 游戏规则检查：防止无效操作
        // 条件1：squares[i] - 检查该位置是否已被占用
        // 条件2：calculateWinner(squares) - 检查游戏是否已经结束
        // 使用逻辑或(||)实现"任一条件满足即拦截"的控制逻辑
        if (squares[i] || calculateWinner(squares)) {
            return; // 如果任一条件为真，则阻止进一步操作
        }
        
        // 状态更新流程：
        // 1. 创建当前方格数组的浅拷贝，遵循React不可变性原则
        const nextSquares = squares.slice();
        
        // 2. 根据当前玩家设置对应符号
        if (xIsNext) {
            nextSquares[i] = 'x';  // X玩家回合，放置'x'
        } else {
            nextSquares[i] = '0';  // O玩家回合，放置'0'
        }
        
        // 3. 批量更新状态
        onPlay(nextSquares);     // 更新棋盘状      // 切换玩家回合
    }
    
    // 游戏状态计算
    const winner = calculateWinner(squares);  // 检查是否有获胜者
    
    // 状态消息生成
    let status;
    if (winner) {
        // 游戏结束：显示获胜者信息
        status = "Winner: " + winner;
    } else {
        // 游戏进行中：显示下一位玩家
        status = "Next player: " + (xIsNext ? "X" : "O");
    }
    
    // 渲染游戏界面
    return (
        <>
            {/* 状态显示区域：显示当前游戏状态 */}
            <div className="status">{status}</div>
            
            {/* 游戏棋盘：3x3网格布局 */}
            {/* 第一行方格 (索引0-2) */}
            <div className="board-row">
                <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
            </div>
            
            {/* 第二行方格 (索引3-5) */}
            <div className="board-row">
                <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
            </div>
            
            {/* 第三行方格 (索引6-8) */}
            <div className="board-row">
                <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
            </div>
        </>
    );
}

/**
 * 获胜条件判断函数
 * @param {Array} squares - 当前棋盘状态数组
 * @returns {string|null} - 返回获胜玩家符号('x'或'0')，无获胜者返回null
 */
function calculateWinner(squares) {
    // 定义井字棋的所有获胜组合
    // 每个子数组代表一条直线上的三个位置索引
    const lines = [
        [0, 1, 2],  // 第一行横向
        [3, 4, 5],  // 第二行横向
        [6, 7, 8],  // 第三行横向
        [0, 3, 6],  // 第一列纵向
        [1, 4, 7],  // 第二列纵向
        [2, 5, 8],  // 第三列纵向
        [0, 4, 8],  // 主对角线(左上到右下)
        [2, 4, 6]   // 副对角线(右上到左下)
    ];
    
    // 遍历所有可能的获胜组合
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        
        // 获胜条件检查：
        // 1. squares[a] - 确保第一个位置非空(利用短路求值避免undefined错误)
        // 2. squares[a] === squares[b] - 第一个位置等于第二个位置
        // 3. squares[a] === squares[c] - 第一个位置等于第三个位置
        // 使用逻辑与(&&)实现"所有条件必须同时满足"的判定逻辑
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];  // 返回获胜玩家的符号
        }
    }
    
    return null;  // 所有组合检查完毕，没有获胜者
}
export default function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];
  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    setXIsNext(!xIsNext);
  }
  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
    setXIsNext(nextMove % 2 === 0);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });
  return (
    <div className="game">
      <div className="game-board">
      <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}