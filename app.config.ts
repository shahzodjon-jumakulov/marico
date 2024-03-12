export default defineAppConfig({
  ui: {
    primary: "blue",
    gray: "cool",
    container: {
      constrained: "max-w-[120rem]",
      padding: "2xl:px-[8.75rem]",
    },
    button: {
      base: "transition-colors w-fit",
      font: "font-medium",
      rounded: "rounded-lg",
      size: {
        xs: "text-xl",
        sm: "text-xl",
      },
      padding: {
        xs: "px-5 py-3",
        sm: "px-5 py-4",
        md: "py-6",
        lg: "py-7",
      },
      color: {
        primary: {
          solid:
            "ring-0 text-white bg-primary hover:bg-primary-hover active:bg-primary-hover focus-visible:ring-0",
          outline:
            "text-secondary hover:bg-primary hover:text-white border border-secondary hover:border-transparent",
          ghost:
            "text-secondary hover:bg-primary hover:text-white active:bg-primary-hover active:text-white",
        },
      },
      default: {
        size: "sm",
        variant: "solid",
        color: "primary",
        loadingIcon: "i-heroicons-arrow-path-20-solid",
      },
    },
  },
});
