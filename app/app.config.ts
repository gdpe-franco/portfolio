export default defineAppConfig({
  ui: {
    container: {
      base: 'portfolio-container',
    },
    button: {
      slots: {
        base: 'rounded-[8px]',
      },
      defaultVariants: {
        size: 'lg',
      },
    },
    card: {
      slots: {
        root: 'portfolio-card',
        body: 'p-0 sm:p-0',
      },
    },
    header: {
      slots: {
        root: 'h-auto border-transparent bg-transparent backdrop-blur-none',
        container: 'py-[22px]',
        center: 'hidden',
        content: 'min-[701px]:hidden',
        overlay: 'min-[701px]:hidden',
        header: 'py-[22px]',
        body: 'flex flex-col gap-4',
      },
    },
  },
})
