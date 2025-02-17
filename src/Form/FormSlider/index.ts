import { FormSliderDefaultProps } from './props';
import createComponent from '../createComponent';
import fmtEvent from '../../_util/fmtEvent';

createComponent({
  props: FormSliderDefaultProps,
  methods: {
    onChange(value, e) {
      this.emit('onChange', value);
      if (this.props.onChange) {
        this.props.onChange(value, fmtEvent(this.props, e));
      }
    },
    onAfterChange(value, e) {
      // this.emit('onChange', value);
      if (this.props.onAfterChange) {
        this.props.onAfterChange(value, fmtEvent(this.props, e));
      }
    },
  }
});
