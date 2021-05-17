export type ClassMixinDecorator = <T extends new (...args: any[]) => {}>(
  constructor: T
) => any;

export interface UiPlaceholder {
  placeholder: string;
}
export const UiPlaceholder: ClassMixinDecorator = constructor => {
  return class extends constructor {
    public placeholder: string;
  };
};

export interface UiReadonly {
  readonly: boolean;
}
export const UiReadonly: ClassMixinDecorator = constructor => {
  return class extends constructor {
    public readonly = false;
  };
};

/*

// to use Decorator inside mixin you should create proxy for class inside mixin:

export const UiReadonly: ClassMixinDecorator = constructor => {
  class MixinClass extends constructor {
    @optional() readonly = false;
  }

  return MixinClass;
};

*/
