<template>
  <div class="demo">
    <div class="ui-test">
      <h2>VTooltip</h2>
      <div class="row">
        <VueButton v-tooltip="`Detailed explanation here`">Hover me!</VueButton>
        <VueButton disabled v-tooltip="`Here is why I'm disabled...`">Disabled button</VueButton>
      </div>
    </div>
  </div>
</template>
