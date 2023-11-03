<script setup>
const body = ref("world");
const apiCall = await useFetch("/api/hello", {
  method: "POST",
  body: {
    // You can pass a ref here instead of a value and the value
    // will be read at the time of the API-call.
    name: body,
    // To see the difference, try this in comparison:
    // name: body.value,
  },
  // Set immediate and watch to false, to let the user enter
  // data, before making the API call.
  // The benefit of this is, that we can define watchers and
  // derive loading-states without any overhead at all.
  immediate: false,
  watch: false,
});
</script>

<template>
  <div>
    <input type="text" v-model="body" />
    <button @click="apiCall.execute">Make API Call</button>

    <p>Result of <code>/api/hello</code>:</p>

    <!-- Loading indicator -->
    <pre v-if="apiCall.status.value === 'pending'">Loading...</pre>
    <pre v-else>{{ apiCall.data }}</pre>
  </div>
</template>
