<template>
  <div class="demo">
    <div class="ui-test">
      <h2>VueIcon</h2>

      <div class="row">
        <VueIcon icon="backup" class="small"/>
        <VueIcon icon="star"/>
        <VueIcon icon="feedback" class="medium"/>
        <VueIcon icon="settings" class="big"/>
        <VueIcon icon="verified_user" class="large"/>
        <VueIcon icon="mood" class="huge"/>
        <VueIcon icon="fingerprint" class="gigantic"/>
      </div>

      <div class="row">
        500
        <VueIcon icon="star" class="medium top"/>
        on GitHub
      </div>

      <div class="row" style="font-size: 26px">
        500
        <VueIcon icon="star" class="large top"/>
        on GitHub
      </div>
    </div>
  </div>
</template>
