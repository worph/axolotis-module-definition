import type {AsyncContainerModule} from "inversify";

export type AxModuleGeneratorAsync = () => AsyncContainerModule;
export interface AxModuleAsync{

    getModule():AsyncContainerModule;
}
