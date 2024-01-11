import { component$ } from '@builder.io/qwik'

export const Code = component$((props) => {
  return (
    <>
      <svg
        {...props}
        xmlns='http://www.w3.org/2000/svg'
        class='icon icon-tabler icon-tabler-code'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        stroke-width='2'
        stroke='currentColor'
        fill='none'
        stroke-linecap='round'
        stroke-linejoin='round'
      >
        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
        <path d='M7 8l-4 4l4 4' />
        <path d='M17 8l4 4l-4 4' />
        <path d='M14 4l-4 16' />
      </svg>
    </>
  )
})