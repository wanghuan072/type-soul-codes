<template>
  <div class="app">
    <router-view />

    <!-- PC-左侧广告1 -->
    <aside
      v-if="!isMobile"
      style="
        position: fixed;
        top: 50%;
        left: 10px;
        min-width: 200px;
        min-height: 400px;
        transform: translateY(-50%);
      "
    >
      <ins
        class="adsbygoogle"
        style="display: block"
        data-ad-client="ca-pub-4868776021979689"
        data-ad-slot="3939690132"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </aside>
    <!-- PC-右侧广告2 -->
    <aside
      v-if="!isMobile"
      style="
        position: fixed;
        top: 50%;
        right: 10px;
        min-width: 200px;
        min-height: 400px;
        transform: translateY(-50%);
      "
    >
      <ins
        class="adsbygoogle"
        style="display: block"
        data-ad-client="ca-pub-4868776021979689"
        data-ad-slot="3939690132"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </aside>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useDeviceDetection } from '@/utils/useDeviceDetection.js'
const { isMobile } = useDeviceDetection()

const loadAds = () => {
  if (window.adsbygoogle && typeof window.adsbygoogle.push === 'function') {
    try {
      const adElements = document.querySelectorAll('.adsbygoogle')
      console.log(`发现 ${adElements.length} 个广告位`)

      adElements.forEach((el, index) => {
        try {
          // 检查广告是否已经加载
          if (
            el.getAttribute('data-adsbygoogle-status') !== 'done' &&
            !el.querySelector('iframe') &&
            el.offsetParent !== null
          ) {
            // 确保元素可见
            ;(window.adsbygoogle = window.adsbygoogle || []).push({})
            console.log(`广告位 ${index + 1} 已触发加载`)
          }
        } catch (pushError) {
          console.error(`广告位 ${index + 1} 加载失败:`, pushError)
        }
      })
    } catch (e) {
      console.error('广告加载失败:', e)
    }
  } else {
    console.log('AdSense脚本还未加载完成')
  }
}

onMounted(() => {
  // 初始化Google AdSense广告
  setTimeout(() => {
    try {
      // 为所有设备加载广告，使用新的loadAds函数
      loadAds()
    } catch (e) {
      console.error('广告初始化失败:', e)
    }
  }, 2000)
})

</script>

<style></style>
