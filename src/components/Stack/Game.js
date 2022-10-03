import { Physics } from '@react-three/cannon';
import { Canvas } from '@react-three/fiber';
import { useState } from 'react';
import Stacks from './Stacks';
function Game() {
    const [stackCount, setStackCount] = useState(1);
    const [isEnd, setIsEnd] = useState(false);
    const handleClick = () => setStackCount(current => current + 1)
    
    return (
        <Canvas
            style={{ height: '100vh' }}
            onMouseDown={isEnd ? null : handleClick}
            orthographic
            camera={{
                zoom: 50,
                position: [4, 4, 4]
            }}
        >
            <Physics>
                <color attach="background" args={['#050505']} />
                <ambientLight intensity={0.3} />
                <spotLight position={[7, 10, 1]} angle={Math.PI / 2}/>
                <Stacks stackCount={stackCount} setIsEnd={setIsEnd} />
            </Physics>
        </Canvas>
    )
}

export default Game;