import type { ButtonProps } from 'tdesign-vue-next'
import type { ExtractPropTypes, PropType } from 'vue'

export const cButtonProps = {
  /**
   * 增强点击事件
   */
  click: {
    type: [Function, Promise] as PropType<
      ((e: MouseEvent) => void) | ((e: MouseEvent) => Promise<void>)
    >,
  },
  /**
   * 点击加载延迟 ms，当使用 `:click` 代替 `@click` 时有效
   * @defaultValue 250
   */
  loadingDelay: {
    type: Number,
    default: 250,
  },
  /**
   * 节流延迟 ms
   * @defaultValue 350
   */
  throttleDelay: {
    type: Number,
    default: 350,
  },
  /**
   * 主题
   * @defaultValue default
   */
  theme: {
    type: String as PropType<
      'default' | 'primary' | 'danger' | 'warning' | 'success'
    >,
    default: 'default',
  },
  /**
   * 变体
   * @defaultValue base
   */
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
  /**
   * 默认点击事件
   */
  onClick: Function as PropType<(e: MouseEvent) => void>,
}

export type CButtonProps = ExtractPropTypes<typeof cButtonProps>
