import { ContainerModule, AsyncContainerModule } from 'inversify';

type AxModuleGenerator = () => ContainerModule;
interface AxModule {
    getModule(): ContainerModule;
}

type AxModuleGeneratorAsync = () => AsyncContainerModule;
interface AxModuleAsync {
    getModule(): AsyncContainerModule;
}

export { AxModule, AxModuleAsync, AxModuleGenerator, AxModuleGeneratorAsync };
