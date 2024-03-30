import startApp from './app';
import { initEngine } from './render/init';

export const initSphere = async (sphereRef) => {
    await initEngine(sphereRef)
    startApp()
}