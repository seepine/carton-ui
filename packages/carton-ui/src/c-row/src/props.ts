import type { ExtractPropTypes, PropType } from 'vue'
import type { ResponsiveValue } from '../../types'

export const cRowProps = {
  /**
   * flex 布局下的水平排列方式。
   */
  justify: {
    type: String as PropType<
      'start' | 'end' | 'center' | 'space-around' | 'space-between'
    >,
    default: 'start',
  },
  /**
   * 纵向对齐方式，CSS 属性 align-items 值。其中 top 和 start 等效；middle 和 center 等效；bottom 和 end 等效
   * @defaultValue top
   */
  align: {
    type: String as PropType<
      | 'start'
      | 'end'
      | 'center'
      | 'stretch'
      | 'baseline'
      | 'top'
      | 'middle'
      | 'bottom'
    >,
    default: 'top',
  },
  /**
   * 栅格间隔，示例：{ xs: 8, sm: 16, md: 24, lg: 32, xl: 32, xxl: 40 }。
   * 当数据类型为 Number 和 Object 时，用于指定横向间隔。当数据类型为数组时，第一个参数为横向间隔，第二个参数为纵向间隔
   */
  gutter: {
    type: [Number, Object, Array] as PropType<
      number | ResponsiveValue | Array<ResponsiveValue | number>
    >,
  },
  /**
   * 自定义元素标签
   * @defaultValue div
   */
  tag: {
    type: String,
  },
}

export type CRowProps = ExtractPropTypes<typeof cRowProps>
