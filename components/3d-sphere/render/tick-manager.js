import { getComposer, getControls, getRenderer } from './init.js';

// animation params
const localData = {
    timestamp: 0,
    timeDiff: 0,
    frame: null,
};
const localFrameOpts = {
    data: localData,
};

const frameEvent = new MessageEvent('tick', localFrameOpts);

class TickManager extends EventTarget {
    constructor({ timestamp, timeDiff, frame } = localData) {
        super();

        this.timestamp = timestamp;
        this.timeDiff = timeDiff;
        this.frame = frame;
    }
    startLoop() {
        const composer = getComposer();
        const renderer = getRenderer();
        const controls = getControls();

        if (!renderer) {
            throw new Error('Updating Frame Failed : Uninitialized Renderer');
        }

        let lastTimestamp = performance.now();

        const animate = (timestamp, frame) => {
            this.timestamp = timestamp ?? performance.now();
            this.timeDiff = timestamp - lastTimestamp;

            const timeDiffCapped = Math.min(Math.max(this.timeDiff, 0), 100);

            // performance tracker start

            controls.update();

            composer.render();
            // renderer.render(scene, camera);

            this.tick(timestamp, timeDiffCapped, frame);

            // performance tracker end
        };

        renderer.setAnimationLoop(animate);
    }
    tick(timestamp, timeDiff, frame) {
        localData.timestamp = timestamp;
        localData.frame = frame;
        localData.timeDiff = timeDiff;
        this.dispatchEvent(frameEvent);
    }
}

export default TickManager;