<template>
  <div class="toc">
    <div class="table-of-contents">
      <ul>
        <li>
          <a href="#properties">Properties</a>
          <ul>
            <li v-for="(property, key) in properties">
              <a :href="`#${property.slug}`">{{ property.title }}</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="table-of-contents">
      <ul>
        <li>
          <a href="#methods">Methods</a>
          <ul>
            <li v-for="(method, key) in methods">
              <a :href="`#${method.slug}`">{{ method.title }}</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { useData } from 'vitepress'
const { page } = useData()

const [propertiesKey, methodsKey] = page.value.headers.filter((item) => {
  return item.level == 2
})

const properties = page.value.headers.slice(page.value.headers.indexOf(propertiesKey) + 1, page.value.headers.indexOf(methodsKey))
const methods = page.value.headers.slice(page.value.headers.indexOf(methodsKey) + 1)

</script>

<style scoped>
@media screen and (min-width: 1024px) {
  .toc {
    display: flex;
    width: 100%;
  }

  .toc > div {
    width: 50%;
  }
}
</style>