<template>
  <div class="toc">
    <div v-if="properties" class="table-of-contents">
      <ul>
        <li>
          <Collapse>
            <template v-slot:label>
              <a class="heading" href="#properties">Properties</a>
            </template>
            <template v-slot:body>
              <ul>
                <li v-for="(property, key) in properties" :key="key">
                  <a :href="`#${property.slug}`">{{ property.title.replace('.', '') }}</a>
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
              <a class="heading" href="#methods">Methods</a>
            </template>
            <template v-slot:body>
              <ul>
                <li v-for="(method, key) in methods" :key="key">
                  <a :href="`#${method.slug}`">{{ method.title.replace('.', '') }}</a>
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

const toc = page.value.headers.slice()

const propertyIndex = toc.indexOf(propertiesKey)
const methodIndex = toc.indexOf(methodsKey)


const properties = propertiesKey
  ? toc.slice(propertyIndex + 1, methodsKey ? methodIndex : toc.length )
  : undefined

const methods = propertiesKey
  ? methodsKey
    ? toc.slice(methodIndex + 1)
    : undefined
  : undefined

</script>

<style scoped>
.toc .heading {
  font-weight: 500;
}

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