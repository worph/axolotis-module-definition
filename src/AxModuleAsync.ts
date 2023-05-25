import type {interfaces} from "../inversify/src/interfaces/interfaces";

export type ModuleGeneratorAsync = () => interfaces.AsyncContainerModule;
export interface AxModuleAsync{

    getModule():interfaces.AsyncContainerModule;
}
