import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { DEFAULT_LOCALE } from '@/i18n'

/**
 * Composable to load localized data files
 * @param {string} dataType - Type of data to load ('codes', 'blog', 'guides', 'emotes')
 * @returns {object} - { data, loading, error, reload }
 */
export function useLocalizedData(dataType) {
  const { locale } = useI18n()
  const data = ref(null)
  const loading = ref(false)
  const error = ref(null)

  const loadData = async () => {
    loading.value = true
    error.value = null

    try {
      const lang = locale.value || DEFAULT_LOCALE
      let module

      try {
        // Try to load data for current language
        module = await import(`@/data/${lang}/${dataType}.js`)
      } catch (err) {
        // Fallback to default language if current language data doesn't exist
        console.warn(`Data for ${dataType} in ${lang} not found, falling back to ${DEFAULT_LOCALE}`)
        module = await import(`@/data/${DEFAULT_LOCALE}/${dataType}.js`)
      }

      // Extract data based on file type
      switch (dataType) {
        case 'codes':
          data.value = module.codes
          break
        case 'blog':
          data.value = module.posts
          break
        case 'guides':
          data.value = module.guides
          break
        case 'emotes':
          data.value = module.emotes
          break
        default:
          data.value = module.default || module
      }
    } catch (err) {
      console.error(`Failed to load ${dataType} data:`, err)
      error.value = err
    } finally {
      loading.value = false
    }
  }

  // Watch for locale changes and reload data
  watch(locale, () => {
    loadData()
  }, { immediate: true })

  return {
    data,
    loading,
    error,
    reload: loadData
  }
}


