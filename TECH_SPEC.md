This lib follows clean architecture and following is the directory structure,

```
lib
├── domain
│   ├── entities
│   │   ├── Base.entity.ts
│   │   ├── Offer.entity.ts
│   │   ├── Package.entity.ts
│   │   ├── Range.entity.ts
│   │   └── Vehicle.entity.ts
│   ├── enums
│   │   └── RangeUnit.enum.ts
│   ├── repositories
│   │   └── Offer.repository.ts
│   ├── useCases
│   │   ├── ApplyDiscountUseCase.ts
│   │   ├── CalcDeliverCostUseCase.ts
│   │   └── IUseCase.ts
│   └── validators
│       ├── IValidator.ts
│       └── Offer.validator.ts
├── infra
│   ├── data.ts
│   └── repositories
│       └── Offer.repository.ts
├── presentation
│   ├── kiki.ts
│   ├── output.ts
│   └── tombo.ts
└── shared
    ├── precision.ts
    └── processInput.ts
```

Clean Architecture applied to a software project, organized in a way that separates concerns and ensures that the business logic remains central, testable, and independent of frameworks, UI, and external resources. Here's an explanation of each part:

## Domain Layer

This is the of your application, containing the core business logic, entities, use cases, and interfaces for repositories and validators. It's framework-agnostic and reflects the business rules.

**Entities**: Simple objects representing business concepts and data structures (Base.entity.ts, Offer.entity.ts, Package.entity.ts, Range.entity.ts, Vehicle.entity.ts). These are the most stable parts of system, around which the use cases revolve.

**Enums**: Defines sets of named constants (RangeUnit.enum.ts), likely used across the domain layer to ensure consistency in values such as measurement units.

**Repositories**: Interfaces that describe the operations which can be performed on entities, typically involving data retrieval and persistence (Offer.repository.ts). Actual implementations are in the infrastructure layer but are dictated by these interfaces.

**UseCases**: Contains the application-specific business rules (ApplyDiscountUseCase.ts, CalcDeliverCostUseCase.ts). They orchestrate the flow of data to and from the entities, and direct those entities to use their enterprise-wide business rules to achieve the goals of the use case.

**Validators**: Interfaces and implementations for validating entities or data (IValidator.ts, Offer.validator.ts), ensuring that only valid data is processed by the use cases.

## Infrastructure Layer

This layer contains classes and components that are specific to certain technologies, frameworks, or external resources (like databases, web services, etc.).

**Data**: Module or service for managing application data, configurations, and possibly connections to external services or databases.

**Repositories**: Concrete implementations of the repository interfaces defined in the domain layer (Offer.repository.ts). These implementations would interact with databases or other persistence mechanisms.

## Presentation Layer

Responsible for handling all UI and presentation logic. This layer depends on the domain layer but not on the infrastructure, ensuring that changes to UI frameworks or styles do not affect the business rules.

Files like kiki.ts, output.ts, tombo.ts: Are entry points to CLI tools and can be web controllers, or other forms of UI interaction points that bootstrap and interact with the domain layer to perform operations and display results.

## Shared Layer

Contains code and functionality that is shared across multiple layers of the application, not fitting neatly into one of the above categories.

Utility or helper modules like precision.ts, processInput.ts: These provide common functions for handling precise calculations, processing input data, etc., used by various parts of the application.
This structure ensures that the application is organized in a way that separates concerns clearly, follows the Dependency Inversion Principle (entities and use cases defining interfaces that infrastructure and presentation layers implement), and makes the system more maintainable and adaptable to changes in technology or business requirements.
