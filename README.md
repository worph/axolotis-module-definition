# Axolotis Module Definition

## Overview

This library is a module-based interface standard for Dependency Injection systems, particularly tailored for Inversify. It exports two types, `ModuleGeneratorAsync` and `ModuleGenerator`, that define the function signatures for generating `ContainerModule` and `AsyncContainerModule` objects, respectively.

## Installation

You can install this library directly from GitHub:

```bash
npm install --save https://github.com/worph/axolotis-module-definition.git
```

Add the following dependencies to your `package.json`:

```json
"dependencies": {
  "axolotis-module-definition": "https://github.com/worph/axolotis-module-definition.git",
  "inversify": "^6.0.1"
}
```

Then install dependencies via npm:

```bash
npm install
```

## Usage

To use this library, import the types from it in your code and define functions that conform to them.

Example usage:

```typescript
import { ContainerModule, interfaces } from 'inversify';
import { ModuleGenerator } from 'axolotis-module-definition';
import { MyService, MyServiceName } from './services/MyService';

export const MyModuleGenerator: ModuleGenerator = () => {
    return new ContainerModule((bind: interfaces.Bind) => {
        bind(MyServiceName).toDynamicValue(() => {
            return new MyService();
        }).inSingletonScope();
    });
};
```

For Async modules:

```typescript
import { AsyncContainerModule, interfaces } from 'inversify';
import { ModuleGeneratorAsync } from 'axolotis-module-definition';
import { MyServiceName } from './services/MyService';

export const MyModuleGeneratorAsync: ModuleGeneratorAsync = () => {
    return new AsyncContainerModule(async (bind: interfaces.Bind) => {
        bind(MyServiceName).toDynamicValue(async () => {
            let module = await import("./services/MyService");
            return new module.MyService();
        }).inSingletonScope();
    });
};
```

Please replace `MyService`, `MyServiceName`, and `"./services/MyService"` with your actual service class, service name, and path to the service module, respectively.

---
