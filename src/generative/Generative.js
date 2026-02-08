
import React, { useEffect, useRef } from 'react';
import P5 from 'p5';
import Box from '@mui/material/Box';

const STEP = 16;

const VARIANCE_FACTOR = 100;
const MONOCHROME = [[0, 32, 63]];
const LERP_SPEED = 0.02;

function Generative() {
    const containerRef = useRef(null); // create a ref to bind p5 instance to

    useEffect(() => {
        const sketch = (p5, canvasParentRef) => {
            let currentLines = [];
            let targetLines = [];

            function generateLines() {
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
                        let random = (Math.random() * variance) / 2 * -1;
                        let point = { x: j, y: i + random };
                        line.push(point);
                    }
                    lines.push(line);
                }
                return lines;
            }

            p5.setup = () => {
                const width = containerRef.current.clientWidth;
                const height = containerRef.current.clientHeight * 0.8;
                const cnv = p5.createCanvas(width, height);
                cnv.parent(canvasParentRef);

                p5.stroke(169, 251, 215);
                p5.strokeWeight(2);
                p5.frameRate(30);

                currentLines = generateLines();
                targetLines = generateLines();
            };

            p5.draw = () => {
                p5.clear();

                // Lerp current points toward their targets
                let reachedTarget = true;
                for (let i = 0; i < currentLines.length; i++) {
                    for (let j = 0; j < currentLines[i].length; j++) {
                        currentLines[i][j].x = p5.lerp(currentLines[i][j].x, targetLines[i][j].x, LERP_SPEED);
                        currentLines[i][j].y = p5.lerp(currentLines[i][j].y, targetLines[i][j].y, LERP_SPEED);

                        if (Math.abs(currentLines[i][j].y - targetLines[i][j].y) > 0.5) {
                            reachedTarget = false;
                        }
                    }
                }

                if (reachedTarget) {
                    targetLines = generateLines();
                }

                // Draw
                for (let i = 5; i < currentLines.length; i++) {
                    p5.beginShape();
                    for (let j = 0; j < currentLines[i].length - 1; j += 2) {
                        p5.splineVertex(currentLines[i][j].x, currentLines[i][j].y);
                        let random_index = Math.floor(Math.random() * MONOCHROME.length);
                        const [r, g, b] = MONOCHROME[random_index];
                        p5.fill(r, g, b);
                        p5.splineVertex(currentLines[i][j + 1].x, currentLines[i][j + 1].y);
                    }
                    p5.endShape();
                }
            };

            p5.windowResized = () => {
                const width = containerRef.current.clientWidth;
                const height = containerRef.current.clientHeight * 0.8;

                p5.resizeCanvas(width, height);
                currentLines = generateLines();
                targetLines = generateLines();
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
