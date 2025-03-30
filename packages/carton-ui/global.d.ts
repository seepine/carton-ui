export {}

// Helper for Volar
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    CButton: typeof import('carton-ui')['CButton']
    CCheckbox: typeof import('carton-ui')['CCheckbox']
    CRow: typeof import('carton-ui')['CRow']
    CCol: typeof import('carton-ui')['CCol']
    CForm: typeof import('carton-ui')['CForm']
  }
}
