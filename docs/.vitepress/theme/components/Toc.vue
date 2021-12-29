<template>
  <div class="toc">
    <div v-if="properties" class="table-of-contents">
      <ul>
        <li>
          <Collapse>
            <template v-slot:label>
              <a href="#properties">Properties</a>
            </template>
            <template v-slot:body>
              <ul>
                <li v-for="(property, key) in properties">
                  <a :href="`#${property.slug}`">{{ property.title }}</a>
                </li>
              </ul>
            </template>
          </Collapse>
        </li>
      </ul>
    </div>
    <div v-if="methods" class="table-of-contents">
      <ul>
        <li>
          <Collapse>
            <template v-slot:label>
              <a href="#methods">Methods</a>
            </template>
            <template v-slot:body>
              <ul>
                <li v-for="(method, key) in methods">
                  <a :href="`#${method.slug}`">{{ method.title }}</a>
                </li>
              </ul>
            </template>
          </Collapse>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { useData } from 'vitepress'
import Collapse from './Collapse.vue'

const { page } = useData()

const [propertiesKey, methodsKey] = page.value.headers.filter((item) => {
  return item.level == 2
})

const propertyIndex = page.value.headers.indexOf(propertiesKey)
const methodIndex = page.value.headers.indexOf(methodsKey)

const properties = propertiesKey
  ? page.value.headers.slice(propertyIndex + 1, methodIndex)
  : undefined

const methods = propertiesKey
  ? methodsKey
    ? page.value.headers.slice(methodIndex + 1)
    : undefined
  : undefined

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