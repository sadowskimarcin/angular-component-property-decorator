export type ClassMixinDecorator = <T extends new (...args: any[]) => {}>(
  constructor: T
) => any;

export interface UiPlaceholder {
  placeholder: string;
}
export const UiPlaceholder: ClassMixinDecorator = constructor => {
  return class extends constructor {
    placeholder = 'placeholder should be overriden!!';
  };
};

export interface UiReadonly {
  readonly: boolean;
}
export const UiReadonly: ClassMixinDecorator = constructor => {
  return class extends constructor {
    readonly = false;
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
