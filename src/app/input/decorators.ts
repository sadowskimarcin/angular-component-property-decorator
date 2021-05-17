export type ClassMixinDecorator = <T extends new (...args: any[]) => {}>(
  constructor: T
) => any;

export interface UiPlaceholder {
  placeholder: string;
}
export const UiPlaceholder: ClassMixinDecorator = constructor => {
  class ClassMixin extends constructor {
    placeholder = 'placeholder should be overriden!!';
  }

  return ClassMixin;
};

export interface UiReadonly {
  readonly: boolean;
}
export const UiReadonly: ClassMixinDecorator = constructor => {
  class ClassMixin extends constructor {
    readonly = false;
  }

  return ClassMixin;
};