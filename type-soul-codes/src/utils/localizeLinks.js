// 自动本地化所有链接的工具函数
export function localizeAllLinks() {
  // 获取当前语言 - 优先从localStorage获取，然后从HTML lang属性获取
  const currentLang = localStorage.getItem('language') || document.documentElement.lang || 'en'

  // 查找所有内部链接
  const links = document.querySelectorAll('a[href^="/"]')

  links.forEach(link => {
    const href = link.getAttribute('href')

    // 如果是默认语言(英语)，不需要添加前缀
    if (currentLang === 'en') {
      // 移除可能存在的其他语言前缀
      const cleanHref = href.replace(/^\/(de|fr|es|ja|ko|ru)(\/|$)/, '/$2')
      if (cleanHref !== href) {
        link.setAttribute('href', cleanHref)
      }
      return
    }

    // 跳过已经有正确语言前缀的链接
    if (href.startsWith(`/${currentLang}/`) || href === `/${currentLang}`) {
      return
    }

    // 跳过外部链接、特殊协议链接
    if (href.startsWith('http') ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:') ||
        href.startsWith('#') ||
        href.startsWith('javascript:')) {
      return
    }

    // 移除其他语言前缀（如果存在）
    let cleanHref = href.replace(/^\/(de|fr|es|ja|ko|ru)(\/|$)/, '/$2')
    
    // 确保路径以 / 开头
    if (!cleanHref.startsWith('/')) {
      cleanHref = '/' + cleanHref
    }

    // 为链接添加当前语言前缀
    const localizedHref = cleanHref === '/' ? `/${currentLang}` : `/${currentLang}${cleanHref}`
    link.setAttribute('href', localizedHref)
  })
}

// 监听语言变化，重新处理链接
export function watchLanguageChange() {
  // 使用MutationObserver监听DOM变化
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
        // 当DOM发生变化时，重新处理链接
        setTimeout(localizeAllLinks, 50)
      }
    })
  })

  // 开始观察
  observer.observe(document.body, {
    childList: true,
    subtree: true
  })

  return observer
}

