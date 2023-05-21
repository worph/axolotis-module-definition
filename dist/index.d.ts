import { ContainerModule, AsyncContainerModule } from 'inversify';

interface AxModule {
    getModule(): ContainerModule;
}

interface AxModuleAsync {
    getModule(): AsyncContainerModule;
}

export { AxModule, AxModuleAsync };
