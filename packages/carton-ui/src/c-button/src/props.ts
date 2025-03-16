import type { ButtonProps } from 'tdesign-vue-next'
import type { ExtractPropTypes, PropType } from 'vue'

export const cButtonProps = {
  /**
   * 点击事件
   */
  click: {
    type: Function as PropType<
      ((e?: MouseEvent) => void) | ((e?: MouseEvent) => Promise<void>)
    >,
  },
  /**
   * 点击加载延时，当使用 `:click` 代替 `@click` 时有效
   */
  loadingDelay: {
    type: Number,
    default: 250,
  },
  throttleDelay: {
    type: Number,
    default: 350,
  },
  theme: {
    type: String as PropType<
      'default' | 'primary' | 'danger' | 'warning' | 'success'
    >,
    default: 'default',
  },

  variant: {
    type: String as PropType<'base' | 'outline' | 'dashed' | 'text'>,
    default: 'base',
  },
  /**
   * 原 t-button 属性
   */
  props: {
    type: Object as PropType<ButtonProps>,
  },
}

export type CButtonProps = ExtractPropTypes<typeof cButtonProps>
