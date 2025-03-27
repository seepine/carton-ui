export {}

// Helper for Volar
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    CButton: typeof import('carton-ui')['CButton']
    CCheckbox: typeof import('carton-ui')['CCheckbox']
  }
}
