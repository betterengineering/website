
import React, { useEffect, useRef } from 'react';
import P5 from 'p5';
import Box from '@mui/material/Box';

const STEP = 16;

const VARIANCE_FACTOR = 100;
const MONOCHROME = [[0, 32, 63]];
const NOISE_SPEED = 0.003;
const NOISE_SCALE = 0.005;

function Generative() {
    const containerRef = useRef(null); // create a ref to bind p5 instance to

    useEffect(() => {
        const sketch = (p5, canvasParentRef) => {
            let t = 0;

            p5.setup = () => {
                const width = containerRef.current.clientWidth;
                const height = containerRef.current.clientHeight * 0.8;
                const cnv = p5.createCanvas(width, height);
                cnv.parent(canvasParentRef);

                p5.stroke(169, 251, 215);
                p5.strokeWeight(2);
                p5.frameRate(30);
            };

            p5.draw = () => {
                p5.clear();

                const width = containerRef.current.clientWidth;
                const height = containerRef.current.clientHeight * 0.8;
                const maxWidth = 600;

                const lines = [];
                for (let i = STEP; i < height - STEP; i += STEP) {
                    let line = [];
                    for (let j = STEP; j < width - STEP; j += STEP) {
                        let distanceToCenter = Math.abs(j - width / 2);
                        let foo = Math.min(width, maxWidth);
                        let variance = Math.max(foo / 2 - VARIANCE_FACTOR - distanceToCenter, 0);
                        let noiseVal = p5.noise(j * NOISE_SCALE, i * NOISE_SCALE, t);
                        let offset = (noiseVal - 0.5) * variance;
                        let point = { x: j, y: i + offset };
                        line.push(point);
                    }
                    lines.push(line);
                }

                // Draw
                for (let i = 5; i < lines.length; i++) {
                    p5.beginShape();
                    for (let j = 0; j < lines[i].length - 1; j += 2) {
                        p5.curveVertex(lines[i][j].x, lines[i][j].y);
                        let random_index = Math.floor(Math.random() * MONOCHROME.length);
                        const [r, g, b] = MONOCHROME[random_index];
                        p5.fill(r, g, b);
                        p5.curveVertex(lines[i][j + 1].x, lines[i][j + 1].y);
                    }
                    p5.endShape();
                }

                t += NOISE_SPEED;
            };

            p5.windowResized = () => {
                const width = containerRef.current.clientWidth;
                const height = containerRef.current.clientHeight * 0.8;

                p5.resizeCanvas(width, height);
            };
        };

        const p5Instance = new P5(sketch, containerRef.current);

        const handleResize = () => {
            p5Instance.windowResized();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            p5Instance.remove();
        };
    }, []);

    return (
        <Box sx={{ flex: 1, width: 1, height: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }} ref={containerRef} />
    );
}

export default Generative;
