import { registerPlugin } from '@capacitor/core';
const VideoPlayer = registerPlugin('VideoPlayer', {
    web: () => import('./web').then((m) => new m.VideoPlayerWeb()),
});
export * from './definitions';
export { VideoPlayer };
//# sourceMappingURL=index.js.map