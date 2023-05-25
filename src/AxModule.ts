import type {ContainerModule} from "inversify";

export type AxModuleGenerator = () => ContainerModule;
export interface AxModule{

    getModule():ContainerModule;
}
