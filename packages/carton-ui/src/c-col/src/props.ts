import type { ExtractPropTypes, PropType } from 'vue'
import type { ResponsiveValue } from '../../types'

export const cColProps = {
  /**
   * flex 布局填充。CSS 属性 flex 值。示例：2 / 3 / '100px' / 'auto' / '1 1 200px'
   * 支持响应式，例如{ xs: 8, sm: 16, md: 24, lg: 32, xl: 32, xxl: 40 }。
   */
  flex: {
    type: [Number, String, Object] as PropType<number | ResponsiveValue>,
  },
  /**
   * 栅格占位格数，为 0 时相当于 display: none
   * 支持响应式，例如{ xs: 8, sm: 16, md: 24, lg: 32, xl: 32, xxl: 40 }。
   */
  span: {
    type: [Number, Object] as PropType<number | ResponsiveValue>,
  },
  /**
   * 栅格左侧的间隔格数，间隔内不可以有栅格
   * 支持响应式，例如{ xs: 8, sm: 16, md: 24, lg: 32, xl: 32, xxl: 40 }。
   */
  offset: {
    type: [Number, Object] as PropType<number | ResponsiveValue>,
  },
  /**
   * 栅格顺序，flex 布局模式下有效
   * 支持响应式，例如{ xs: 8, sm: 16, md: 24, lg: 32, xl: 32, xxl: 40 }。
   */
  order: {
    type: [Number, Object] as PropType<number | ResponsiveValue>,
  },
  /**
   * 栅格向左移动格数
   * 支持响应式，例如{ xs: 8, sm: 16, md: 24, lg: 32, xl: 32, xxl: 40 }。
   */
  pull: {
    type: [Number, Object] as PropType<number | ResponsiveValue>,
  },
  /**
   * 栅格向右移动格数
   * 支持响应式，例如{ xs: 8, sm: 16, md: 24, lg: 32, xl: 32, xxl: 40 }。
   */
  push: {
    type: [Number, Object] as PropType<number | ResponsiveValue>,
  },
  /**
   * 自定义元素标签
   * @defaultValue div
   */
  tag: {
    type: String,
  },
}

export type CColProps = ExtractPropTypes<typeof cColProps>
