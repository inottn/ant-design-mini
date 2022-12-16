function equal(a, b) {
  if (a === b) {
    return true;
  }
  if (a !== a && b !== b) {
    return true;
  }
  return false;
}

const component2 = my.canIUse('component2');

export default ({
  valueKey = 'value',
  defaultValueKey = 'defaultValue',
  scopeKey = 'mixin',
  transformValue = value => ({
    needUpdate: true,
    value,
  }),
}: {
  valueKey?: string;
  defaultValueKey?: string;
  scopeKey?: string;
  transformValue?: (this: any, value: any) => {
    needUpdate: boolean;
    value?: any;
  };
} = {}) => {
  return {
    data: {
      [scopeKey]: {
        value: undefined,
        updated: false,
        controlled: false,
      },
    },
    onInit() {
      const value = typeof this.props[valueKey] !== 'undefined' ? this.props[valueKey] : this.props[defaultValueKey];
      const { needUpdate } = this.update(value);
      if (!needUpdate) {
        this.updateControlled();
      }
    },
    didUpdate(prevProps) {
      if (!equal(prevProps[valueKey], this.props[valueKey])) {
        this.update(this.props[valueKey]);
      }
    },
    didMount() {
      if (component2) {
        return;
      }
      const value = typeof this.props[valueKey] !== 'undefined' ? this.props[valueKey] : this.props[defaultValueKey];
      const { needUpdate } = this.update(value);
      if (!needUpdate) {
        this.updateControlled();
      }
    },
    
    methods: {
      getValue(prevData?) {
        return (prevData || this.data)[scopeKey].value;
      },
      isEqualValue(prevData) {
        if (!prevData[scopeKey].updated) {
          return true;
        }
        return equal(this.getValue(prevData), this.getValue());
      },
      isControlled() {
        return [valueKey] in this.props;
      },
      updateControlled() {
        this.setData({
          [scopeKey]: {
            controlled: this.isControlled(),
          },
        });
      },
      update(val, ...args) {
        const { needUpdate, value } = transformValue.call(this, val, ...args) || {};
        if (needUpdate) {
          this.setData({
            [scopeKey]: {
              value,
              updated: true,
              controlled: this.isControlled(),
            },
          });
        }
        return {
          needUpdate,
          value,
        };
      },
    },
  }
};
