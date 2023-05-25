import type {interfaces} from "../inversify/src/interfaces/interfaces";

export type ModuleGenerator = () => interfaces.ContainerModule;
export interface AxModule{

    getModule():interfaces.ContainerModule;
}
