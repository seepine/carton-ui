import type {
  ComponentResolver,
  SideEffectsInfo,
} from 'unplugin-vue-components/types'
import { kebabCase } from 'unplugin-vue-components'

const isSSR = Boolean(
  process.env.SSR ||
    process.env.SSG ||
    process.env.VITE_SSR ||
    process.env.VITE_SSG
)

const moduleType = isSSR ? 'lib' : 'es'

export interface CartonUiResolverOptions {
  /**
   * import style css or scss along with components
   *
   * @default true
   */
  importStyle?: boolean | 'css' | 'scss'
}

function getSideEffects(
  dirName: string,
  options: CartonUiResolverOptions
): SideEffectsInfo | undefined {
  const { importStyle = true } = options

  if (!importStyle || isSSR) return

  if (importStyle === 'scss') {
    return `carton-ui/${moduleType}/${dirName}/style/index.scss`
  } else {
    return `carton-ui/${moduleType}/${dirName}/style/index.css`
  }
}

/**
 * Resolver
 *
 */
export function CartonUiResolver(
  options: CartonUiResolverOptions = {}
): ComponentResolver {
  return {
    type: 'component',
    resolve: (name: string) => {
      if (name.startsWith('C')) {
        const partialName = name
        return {
          name: partialName,
          from: `carton-ui/${moduleType}`,
          sideEffects: getSideEffects(kebabCase(partialName), options),
        }
      }
    },
  }
}
