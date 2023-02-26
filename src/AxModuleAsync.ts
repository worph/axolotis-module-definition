import type {AsyncContainerModule} from "inversify";

export interface AxModuleAsync{

    getModule():AsyncContainerModule;
}
