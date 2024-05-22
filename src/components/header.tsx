import { For } from 'solid-js'
import { cn } from '@/utils/cn'
import { linksNavbar } from '@/utils/constants'

export default function Header() {
  const shouldRenderSocialIcon = 'X'
  return (
    <header class="flex max-w-fit fixed top-10 inset-x-0 mx-auto border rounded-full bg-background [&:has(a)]:font-medium z-10 pr-2 pl-8 py-2 items-center justify-center space-x-4">
      <For each={linksNavbar}>
        {({ name, url, type }) => (
          <a href={url} class={cn('relative items-center flex space-x-1', type === shouldRenderSocialIcon ? 'border text-sm font-medium relative px-4 py-2 rounded-full flex items-center gap-1' : '')}>
            {name}
            {type === shouldRenderSocialIcon && (
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-brand-x inline">
                <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
              </svg>
            )}
          </a>
        )}
      </For>
    </header>
  )
}
