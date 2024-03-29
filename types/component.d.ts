import type { ComponentProps, ReactNode } from 'react'

/**
 * path is URL Link component
 * @example
 *
 * <LinkItem path='URL'/>
 *
 * @default
 * @type {boolean}
 * target
 *
 * @example
 * <LinkItem target />
 */
export type LinkProps = { path: string; target?: boolean; children: ReactNode }

type Props = {
  children: ReactNode
  params: { locale: string }
}
