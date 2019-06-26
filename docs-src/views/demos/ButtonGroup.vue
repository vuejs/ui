<template>
  <div class="demo">
    <div class="ui-test">
      <h2>VueGroup + VueGroupButton</h2>

      <div class="row">
        Choice: {{ choice }}
        <VueButton icon-left="replay" @click="choice = null">Reset</VueButton>

        <VueSwitch v-model="showOrange">
          Show orange fruit
        </VueSwitch>
      </div>

      <div class="row">
        <VueGroup v-model="choice" class="inline">
          <VueGroupButton v-for="fruit of fruits" :key="fruit" :value="fruit">{{ fruit }}</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="inline">
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="round" :value="fruit">{{ fruit }}</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="inline">
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="icon-button" :value="fruit" :icon-left="icons[fruit]"/>
        </VueGroup>
        <VueGroup v-model="choice" class="inline">
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="round icon-button" :value="fruit" :icon-left="icons[fruit]"/>
        </VueGroup>
      </div>

      <h3>Vertical</h3>
      <div class="row">
        <VueGroup v-model="choice" class="inline vertical">
          <VueGroupButton v-for="fruit of fruits" :key="fruit" :value="fruit">{{ fruit }}</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="inline vertical">
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="round" :value="fruit">{{ fruit }}</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="inline vertical">
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="icon-button" :value="fruit" :icon-left="icons[fruit]"/>
        </VueGroup>
        <VueGroup v-model="choice" class="inline vertical">
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="round icon-button" :value="fruit" :icon-left="icons[fruit]"/>
        </VueGroup>
        <VueGroup v-model="choice" class="inline vertical">
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="primary" :value="fruit">{{ fruit }}</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="inline vertical">
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="primary round" :value="fruit">{{ fruit }}</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="inline vertical">
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="primary icon-button" :value="fruit" :icon-left="icons[fruit]"/>
        </VueGroup>
        <VueGroup v-model="choice" class="inline vertical">
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="primary round icon-button" :value="fruit" :icon-left="icons[fruit]"/>
        </VueGroup>
        <VueGroup v-model="choice" class="inline vertical">
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="accent" :value="fruit">{{ fruit }}</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="inline vertical">
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="accent round" :value="fruit">{{ fruit }}</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="inline vertical">
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="accent icon-button" :value="fruit" :icon-left="icons[fruit]"/>
        </VueGroup>
        <VueGroup v-model="choice" class="inline vertical">
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="accent round icon-button" :value="fruit" :icon-left="icons[fruit]"/>
        </VueGroup>
      </div>

      <h3>Styles</h3>
      <div class="grid col-4">
        <VueGroup v-model="choice">
          <VueGroupButton v-for="fruit of fruits" :key="fruit" :value="fruit" :icon-left="icons[fruit]">{{ fruit }}</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice">
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="primary" :value="fruit" :icon-left="icons[fruit]">{{ fruit }}</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice">
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="accent" :value="fruit" :icon-left="icons[fruit]">{{ fruit }}</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice">
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="danger" :value="fruit" :icon-left="icons[fruit]">{{ fruit }}</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice">
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="warning" :value="fruit" :icon-left="icons[fruit]">{{ fruit }}</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice">
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="info" :value="fruit" :icon-left="icons[fruit]">{{ fruit }}</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice">
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="success" :value="fruit" :icon-left="icons[fruit]">{{ fruit }}</VueGroupButton>
        </VueGroup>
      </div>

      <h3>With indicator</h3>
      <div class="row">
        <VueGroup v-model="choice" class="inline" indicator>
          <VueGroupButton v-for="fruit of fruits" :key="fruit" :value="fruit">{{ fruit }}</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="inline small-indicator" indicator>
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="round" :value="fruit">{{ fruit }}</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="inline" indicator>
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="icon-button" :value="fruit" :icon-left="icons[fruit]"/>
        </VueGroup>
        <VueGroup v-model="choice" class="inline small-indicator" indicator>
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="round icon-button" :value="fruit" :icon-left="icons[fruit]"/>
        </VueGroup>
        <!-- Top indicator -->
        <VueGroup v-model="choice" class="top-indicator inline" indicator>
          <VueGroupButton v-for="fruit of fruits" :key="fruit" :value="fruit">{{ fruit }}</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="top-indicator inline small-indicator" indicator>
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="round" :value="fruit">{{ fruit }}</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="top-indicator inline" indicator>
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="icon-button" :value="fruit" :icon-left="icons[fruit]"/>
        </VueGroup>
        <VueGroup v-model="choice" class="top-indicator inline small-indicator" indicator>
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="round icon-button" :value="fruit" :icon-left="icons[fruit]"/>
        </VueGroup>
      </div>
      <div class="row">
        <VueGroup v-model="choice" class="primary inline" indicator>
          <VueGroupButton v-for="fruit of fruits" :key="fruit" :value="fruit">{{ fruit }}</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="primary inline small-indicator" indicator>
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="round" :value="fruit">{{ fruit }}</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="primary inline" indicator>
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="icon-button" :value="fruit" :icon-left="icons[fruit]"/>
        </VueGroup>
        <VueGroup v-model="choice" class="primary inline small-indicator" indicator>
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="round icon-button" :value="fruit" :icon-left="icons[fruit]"/>
        </VueGroup>
        <!-- Top indicator -->
        <VueGroup v-model="choice" class="top-indicator primary inline" indicator>
          <VueGroupButton v-for="fruit of fruits" :key="fruit" :value="fruit">{{ fruit }}</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="top-indicator primary inline small-indicator" indicator>
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="round" :value="fruit">{{ fruit }}</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="top-indicator primary inline" indicator>
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="icon-button" :value="fruit" :icon-left="icons[fruit]"/>
        </VueGroup>
        <VueGroup v-model="choice" class="top-indicator primary inline small-indicator" indicator>
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="round icon-button" :value="fruit" :icon-left="icons[fruit]"/>
        </VueGroup>
      </div>
      <div class="row">
        <VueGroup v-model="choice" class="accent inline" indicator>
          <VueGroupButton v-for="fruit of fruits" :key="fruit" :value="fruit">{{ fruit }}</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="accent inline small-indicator" indicator>
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="round" :value="fruit">{{ fruit }}</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="accent inline" indicator>
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="icon-button" :value="fruit" :icon-left="icons[fruit]"/>
        </VueGroup>
        <VueGroup v-model="choice" class="accent inline small-indicator" indicator>
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="round icon-button" :value="fruit" :icon-left="icons[fruit]"/>
        </VueGroup>
        <!-- Top indicator -->
        <VueGroup v-model="choice" class="top-indicator accent inline" indicator>
          <VueGroupButton v-for="fruit of fruits" :key="fruit" :value="fruit">{{ fruit }}</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="top-indicator accent inline small-indicator" indicator>
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="round" :value="fruit">{{ fruit }}</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="top-indicator accent inline" indicator>
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="icon-button" :value="fruit" :icon-left="icons[fruit]"/>
        </VueGroup>
        <VueGroup v-model="choice" class="top-indicator accent inline small-indicator" indicator>
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="round icon-button" :value="fruit" :icon-left="icons[fruit]"/>
        </VueGroup>
      </div>
      <div class="row">
        <VueGroup v-model="choice" class="inline" indicator>
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="flat big" :value="fruit">{{ fruit }}</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="inline small-indicator" indicator>
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="flat big" :value="fruit">{{ fruit }}</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="inline" indicator>
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="flat big icon-button" :value="fruit" :icon-left="icons[fruit]"/>
        </VueGroup>
        <VueGroup v-model="choice" class="inline small-indicator" indicator>
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="flat big icon-button" :value="fruit" :icon-left="icons[fruit]"/>
        </VueGroup>
      </div>
      <div class="row">
        <!-- Top indicator -->
        <VueGroup v-model="choice" class="top-indicator inline" indicator>
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="flat big" :value="fruit">{{ fruit }}</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="top-indicator inline small-indicator" indicator>
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="flat big" :value="fruit">{{ fruit }}</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="top-indicator inline" indicator>
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="flat big icon-button" :value="fruit" :icon-left="icons[fruit]"/>
        </VueGroup>
        <VueGroup v-model="choice" class="top-indicator inline small-indicator" indicator>
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="flat big icon-button" :value="fruit" :icon-left="icons[fruit]"/>
        </VueGroup>
      </div>
      <div class="row">
        <VueGroup v-model="choice" class="primary inline" indicator>
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="flat big" :value="fruit">{{ fruit }}</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="primary inline small-indicator" indicator>
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="flat big" :value="fruit">{{ fruit }}</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="primary inline" indicator>
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="flat big icon-button" :value="fruit" :icon-left="icons[fruit]"/>
        </VueGroup>
        <VueGroup v-model="choice" class="primary inline small-indicator" indicator>
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="flat big icon-button" :value="fruit" :icon-left="icons[fruit]"/>
        </VueGroup>
      </div>
      <div class="row">
        <!-- Top indicator -->
        <VueGroup v-model="choice" class="top-indicator primary inline" indicator>
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="flat big" :value="fruit">{{ fruit }}</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="top-indicator primary inline small-indicator" indicator>
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="flat big" :value="fruit">{{ fruit }}</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="top-indicator primary inline" indicator>
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="flat big icon-button" :value="fruit" :icon-left="icons[fruit]"/>
        </VueGroup>
        <VueGroup v-model="choice" class="top-indicator primary inline small-indicator" indicator>
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="flat big icon-button" :value="fruit" :icon-left="icons[fruit]"/>
        </VueGroup>
      </div>
      <div class="row">
        <VueGroup v-model="choice" class="accent inline" indicator>
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="flat big" :value="fruit">{{ fruit }}</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="accent inline small-indicator" indicator>
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="flat big" :value="fruit">{{ fruit }}</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="accent inline" indicator>
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="flat big icon-button" :value="fruit" :icon-left="icons[fruit]"/>
        </VueGroup>
        <VueGroup v-model="choice" class="accent inline small-indicator" indicator>
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="flat big icon-button" :value="fruit" :icon-left="icons[fruit]"/>
        </VueGroup>
      </div>
      <div class="row">
        <!-- Top indicator -->
        <VueGroup v-model="choice" class="top-indicator accent inline" indicator>
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="flat big" :value="fruit">{{ fruit }}</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="top-indicator accent inline small-indicator" indicator>
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="flat big" :value="fruit">{{ fruit }}</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="top-indicator accent inline" indicator>
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="flat big icon-button" :value="fruit" :icon-left="icons[fruit]"/>
        </VueGroup>
        <VueGroup v-model="choice" class="top-indicator accent inline small-indicator" indicator>
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="flat big icon-button" :value="fruit" :icon-left="icons[fruit]"/>
        </VueGroup>
      </div>

      <h3>With indicator - Vertical</h3>
      <div class="row">
        <VueGroup v-model="choice" class="vertical inline" indicator>
          <VueGroupButton v-for="fruit of fruits" :key="fruit" :value="fruit">{{ fruit }}</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="vertical inline small-indicator" indicator>
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="round" :value="fruit">{{ fruit }}</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="vertical inline" indicator>
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="icon-button" :value="fruit" :icon-left="icons[fruit]"/>
        </VueGroup>
        <VueGroup v-model="choice" class="vertical inline small-indicator" indicator>
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="round icon-button" :value="fruit" :icon-left="icons[fruit]"/>
        </VueGroup>
      </div>
      <div class="row">
        <!-- Left indicator -->
        <VueGroup v-model="choice" class="vertical left-indicator inline" indicator>
          <VueGroupButton v-for="fruit of fruits" :key="fruit" :value="fruit">{{ fruit }}</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="vertical left-indicator inline small-indicator" indicator>
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="round" :value="fruit">{{ fruit }}</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="vertical left-indicator inline" indicator>
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="icon-button" :value="fruit" :icon-left="icons[fruit]"/>
        </VueGroup>
        <VueGroup v-model="choice" class="vertical left-indicator inline small-indicator" indicator>
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="round icon-button" :value="fruit" :icon-left="icons[fruit]"/>
        </VueGroup>
      </div>
      <div class="row">
        <VueGroup v-model="choice" class="vertical primary inline fixed-height" indicator>
          <VueGroupButton v-for="fruit of fruits" :key="fruit" :value="fruit">{{ fruit }}</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="vertical primary inline fixed-height small-indicator" indicator>
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="round" :value="fruit">{{ fruit }}</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="vertical primary inline fixed-height" indicator>
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="icon-button" :value="fruit" :icon-left="icons[fruit]"/>
        </VueGroup>
        <VueGroup v-model="choice" class="vertical primary inline fixed-height small-indicator" indicator>
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="round icon-button" :value="fruit" :icon-left="icons[fruit]"/>
        </VueGroup>
      </div>
      <div class="row">
        <!-- Left indicator -->
        <VueGroup v-model="choice" class="vertical left-indicator primary inline fixed-height" indicator>
          <VueGroupButton v-for="fruit of fruits" :key="fruit" :value="fruit">{{ fruit }}</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="vertical left-indicator primary inline fixed-height small-indicator" indicator>
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="round" :value="fruit">{{ fruit }}</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="vertical left-indicator primary inline fixed-height" indicator>
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="icon-button" :value="fruit" :icon-left="icons[fruit]"/>
        </VueGroup>
        <VueGroup v-model="choice" class="vertical left-indicator primary inline fixed-height small-indicator" indicator>
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="round icon-button" :value="fruit" :icon-left="icons[fruit]"/>
        </VueGroup>
      </div>
      <div class="row">
        <VueGroup v-model="choice" class="vertical accent inline" indicator>
          <VueGroupButton v-for="fruit of fruits" :key="fruit" :value="fruit">{{ fruit }}</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="vertical accent inline small-indicator" indicator>
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="round" :value="fruit">{{ fruit }}</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="vertical accent inline" indicator>
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="icon-button" :value="fruit" :icon-left="icons[fruit]"/>
        </VueGroup>
        <VueGroup v-model="choice" class="vertical accent inline small-indicator" indicator>
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="round icon-button" :value="fruit" :icon-left="icons[fruit]"/>
        </VueGroup>
        <!-- Left indicator -->
        <VueGroup v-model="choice" class="vertical left-indicator accent inline" indicator>
          <VueGroupButton v-for="fruit of fruits" :key="fruit" :value="fruit">{{ fruit }}</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="vertical left-indicator accent inline small-indicator" indicator>
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="round" :value="fruit">{{ fruit }}</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="vertical left-indicator accent inline" indicator>
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="icon-button" :value="fruit" :icon-left="icons[fruit]"/>
        </VueGroup>
        <VueGroup v-model="choice" class="vertical left-indicator accent inline small-indicator" indicator>
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="round icon-button" :value="fruit" :icon-left="icons[fruit]"/>
        </VueGroup>
      </div>
      <div class="row">
        <VueGroup v-model="choice" class="vertical inline" indicator>
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="flat big" :value="fruit">{{ fruit }}</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="vertical inline small-indicator" indicator>
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="flat big" :value="fruit">{{ fruit }}</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="vertical inline" indicator>
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="flat big icon-button" :value="fruit" :icon-left="icons[fruit]"/>
        </VueGroup>
        <VueGroup v-model="choice" class="vertical inline small-indicator" indicator>
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="flat big icon-button" :value="fruit" :icon-left="icons[fruit]"/>
        </VueGroup>
      </div>
      <div class="row">
        <!-- Left indicator -->
        <VueGroup v-model="choice" class="vertical left-indicator inline" indicator>
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="flat big" :value="fruit">{{ fruit }}</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="vertical left-indicator inline small-indicator" indicator>
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="flat big" :value="fruit">{{ fruit }}</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="vertical left-indicator inline" indicator>
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="flat big icon-button" :value="fruit" :icon-left="icons[fruit]"/>
        </VueGroup>
        <VueGroup v-model="choice" class="vertical left-indicator inline small-indicator" indicator>
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="flat big icon-button" :value="fruit" :icon-left="icons[fruit]"/>
        </VueGroup>
      </div>
      <div class="row">
        <VueGroup v-model="choice" class="vertical primary inline" indicator>
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="flat big" :value="fruit">{{ fruit }}</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="vertical primary inline small-indicator" indicator>
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="flat big" :value="fruit">{{ fruit }}</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="vertical primary inline" indicator>
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="flat big icon-button" :value="fruit" :icon-left="icons[fruit]"/>
        </VueGroup>
        <VueGroup v-model="choice" class="vertical primary inline small-indicator" indicator>
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="flat big icon-button" :value="fruit" :icon-left="icons[fruit]"/>
        </VueGroup>
      </div>
      <div class="row">
        <!-- Left indicator -->
        <VueGroup v-model="choice" class="vertical left-indicator primary inline" indicator>
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="flat big" :value="fruit">{{ fruit }}</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="vertical left-indicator primary inline small-indicator" indicator>
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="flat big" :value="fruit">{{ fruit }}</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="vertical left-indicator primary inline" indicator>
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="flat big icon-button" :value="fruit" :icon-left="icons[fruit]"/>
        </VueGroup>
        <VueGroup v-model="choice" class="vertical left-indicator primary inline small-indicator" indicator>
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="flat big icon-button" :value="fruit" :icon-left="icons[fruit]"/>
        </VueGroup>
      </div>
      <div class="row">
        <VueGroup v-model="choice" class="vertical accent inline" indicator>
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="flat big" :value="fruit">{{ fruit }}</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="vertical accent inline small-indicator" indicator>
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="flat big" :value="fruit">{{ fruit }}</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="vertical accent inline" indicator>
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="flat big icon-button" :value="fruit" :icon-left="icons[fruit]"/>
        </VueGroup>
        <VueGroup v-model="choice" class="vertical accent inline small-indicator" indicator>
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="flat big icon-button" :value="fruit" :icon-left="icons[fruit]"/>
        </VueGroup>
      </div>
      <div class="row">
        <!-- Left indicator -->
        <VueGroup v-model="choice" class="vertical accent inline" indicator>
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="flat big" :value="fruit">{{ fruit }}</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="vertical accent inline small-indicator" indicator>
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="flat big" :value="fruit">{{ fruit }}</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="vertical accent inline" indicator>
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="flat big icon-button" :value="fruit" :icon-left="icons[fruit]"/>
        </VueGroup>
        <VueGroup v-model="choice" class="vertical accent inline small-indicator" indicator>
          <VueGroupButton v-for="fruit of fruits" :key="fruit" class="flat big icon-button" :value="fruit" :icon-left="icons[fruit]"/>
        </VueGroup>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      choice: '',
      showOrange: true,
      icons: {
        apple: 'flag',
        orange: 'star',
        banana: 'build',
      },
    }
  },

  computed: {
    fruits () {
      return ['apple', 'orange', 'banana'].filter(
        fruit => fruit !== 'orange' || this.showOrange
      )
    },
  },
}
</script>

<style lang="stylus" scoped>
@import "~@style"

.fixed-height
  height 120px
  background rgba($vue-ui-color-primary, .07)
  padding 12px
  border-radius 6px
</style>
