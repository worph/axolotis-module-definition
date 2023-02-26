import type {ContainerModule} from "inversify";

export interface AxModule{

    getModule():ContainerModule;
}
