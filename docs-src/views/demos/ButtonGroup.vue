<template>
  <div class="demo">
    <div class="ui-test">
      <h2>VueGroup + VueGroupButton</h2>

      <div class="row">
        Choice: {{ choice }}
        <VueButton icon-left="replay" @click="choice = null">Reset</VueButton>
      </div>

      <div class="row">
        <VueGroup v-model="choice" class="inline">
          <VueGroupButton value="apple">Apple</VueGroupButton>
          <VueGroupButton value="orange">Orange</VueGroupButton>
          <VueGroupButton value="pear">Pear</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="inline">
          <VueGroupButton class="round" value="apple">Apple</VueGroupButton>
          <VueGroupButton class="round" value="orange">Orange</VueGroupButton>
          <VueGroupButton class="round" value="pear">Pear</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="inline">
          <VueGroupButton class="icon-button" value="apple" icon-left="flag"/>
          <VueGroupButton class="icon-button" value="orange" icon-left="star"/>
          <VueGroupButton class="icon-button" value="pear" icon-left="build"/>
        </VueGroup>
        <VueGroup v-model="choice" class="inline">
          <VueGroupButton class="round icon-button" value="apple" icon-left="flag"/>
          <VueGroupButton class="round icon-button" value="orange" icon-left="star"/>
          <VueGroupButton class="round icon-button" value="pear" icon-left="build"/>
        </VueGroup>
      </div>

      <h3>Vertical</h3>
      <div class="row">
        <VueGroup v-model="choice" class="inline vertical">
          <VueGroupButton value="apple">Apple</VueGroupButton>
          <VueGroupButton value="orange">Orange</VueGroupButton>
          <VueGroupButton value="pear">Pear</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="inline vertical">
          <VueGroupButton class="round" value="apple">Apple</VueGroupButton>
          <VueGroupButton class="round" value="orange">Orange</VueGroupButton>
          <VueGroupButton class="round" value="pear">Pear</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="inline vertical">
          <VueGroupButton class="icon-button" value="apple" icon-left="flag"/>
          <VueGroupButton class="icon-button" value="orange" icon-left="star"/>
          <VueGroupButton class="icon-button" value="pear" icon-left="build"/>
        </VueGroup>
        <VueGroup v-model="choice" class="inline vertical">
          <VueGroupButton class="round icon-button" value="apple" icon-left="flag"/>
          <VueGroupButton class="round icon-button" value="orange" icon-left="star"/>
          <VueGroupButton class="round icon-button" value="pear" icon-left="build"/>
        </VueGroup>
        <VueGroup v-model="choice" class="inline vertical">
          <VueGroupButton class="primary" value="apple">Apple</VueGroupButton>
          <VueGroupButton class="primary" value="orange">Orange</VueGroupButton>
          <VueGroupButton class="primary" value="pear">Pear</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="inline vertical">
          <VueGroupButton class="primary round" value="apple">Apple</VueGroupButton>
          <VueGroupButton class="primary round" value="orange">Orange</VueGroupButton>
          <VueGroupButton class="primary round" value="pear">Pear</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="inline vertical">
          <VueGroupButton class="primary icon-button" value="apple" icon-left="flag"/>
          <VueGroupButton class="primary icon-button" value="orange" icon-left="star"/>
          <VueGroupButton class="primary icon-button" value="pear" icon-left="build"/>
        </VueGroup>
        <VueGroup v-model="choice" class="inline vertical">
          <VueGroupButton class="primary round icon-button" value="apple" icon-left="flag"/>
          <VueGroupButton class="primary round icon-button" value="orange" icon-left="star"/>
          <VueGroupButton class="primary round icon-button" value="pear" icon-left="build"/>
        </VueGroup>
        <VueGroup v-model="choice" class="inline vertical">
          <VueGroupButton class="accent" value="apple">Apple</VueGroupButton>
          <VueGroupButton class="accent" value="orange">Orange</VueGroupButton>
          <VueGroupButton class="accent" value="pear">Pear</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="inline vertical">
          <VueGroupButton class="accent round" value="apple">Apple</VueGroupButton>
          <VueGroupButton class="accent round" value="orange">Orange</VueGroupButton>
          <VueGroupButton class="accent round" value="pear">Pear</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="inline vertical">
          <VueGroupButton class="accent icon-button" value="apple" icon-left="flag"/>
          <VueGroupButton class="accent icon-button" value="orange" icon-left="star"/>
          <VueGroupButton class="accent icon-button" value="pear" icon-left="build"/>
        </VueGroup>
        <VueGroup v-model="choice" class="inline vertical">
          <VueGroupButton class="accent round icon-button" value="apple" icon-left="flag"/>
          <VueGroupButton class="accent round icon-button" value="orange" icon-left="star"/>
          <VueGroupButton class="accent round icon-button" value="pear" icon-left="build"/>
        </VueGroup>
      </div>

      <h3>Styles</h3>
      <div class="grid col-4">
        <VueGroup v-model="choice">
          <VueGroupButton value="apple" icon-left="flag">Apple</VueGroupButton>
          <VueGroupButton value="orange" icon-left="star">Orange</VueGroupButton>
          <VueGroupButton value="pear" icon-left="build">Pear</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice">
          <VueGroupButton class="primary" value="apple" icon-left="flag">Apple</VueGroupButton>
          <VueGroupButton class="primary" value="orange" icon-left="star">Orange</VueGroupButton>
          <VueGroupButton class="primary" value="pear" icon-left="build">Pear</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice">
          <VueGroupButton class="accent" value="apple" icon-left="flag">Apple</VueGroupButton>
          <VueGroupButton class="accent" value="orange" icon-left="star">Orange</VueGroupButton>
          <VueGroupButton class="accent" value="pear" icon-left="build">Pear</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice">
          <VueGroupButton class="danger" value="apple" icon-left="flag">Apple</VueGroupButton>
          <VueGroupButton class="danger" value="orange" icon-left="star">Orange</VueGroupButton>
          <VueGroupButton class="danger" value="pear" icon-left="build">Pear</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice">
          <VueGroupButton class="warning" value="apple" icon-left="flag">Apple</VueGroupButton>
          <VueGroupButton class="warning" value="orange" icon-left="star">Orange</VueGroupButton>
          <VueGroupButton class="warning" value="pear" icon-left="build">Pear</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice">
          <VueGroupButton class="info" value="apple" icon-left="flag">Apple</VueGroupButton>
          <VueGroupButton class="info" value="orange" icon-left="star">Orange</VueGroupButton>
          <VueGroupButton class="info" value="pear" icon-left="build">Pear</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice">
          <VueGroupButton class="success" value="apple" icon-left="flag">Apple</VueGroupButton>
          <VueGroupButton class="success" value="orange" icon-left="star">Orange</VueGroupButton>
          <VueGroupButton class="success" value="pear" icon-left="build">Pear</VueGroupButton>
        </VueGroup>
      </div>

      <h3>With indicator</h3>
      <div class="row">
        <VueGroup v-model="choice" class="inline" indicator>
          <VueGroupButton value="apple">Apple</VueGroupButton>
          <VueGroupButton value="orange">Orange</VueGroupButton>
          <VueGroupButton value="pear">Pear</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="inline small-indicator" indicator>
          <VueGroupButton class="round" value="apple">Apple</VueGroupButton>
          <VueGroupButton class="round" value="orange">Orange</VueGroupButton>
          <VueGroupButton class="round" value="pear">Pear</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="inline" indicator>
          <VueGroupButton class="icon-button" value="apple" icon-left="flag"/>
          <VueGroupButton class="icon-button" value="orange" icon-left="star"/>
          <VueGroupButton class="icon-button" value="pear" icon-left="build"/>
        </VueGroup>
        <VueGroup v-model="choice" class="inline small-indicator" indicator>
          <VueGroupButton class="round icon-button" value="apple" icon-left="flag"/>
          <VueGroupButton class="round icon-button" value="orange" icon-left="star"/>
          <VueGroupButton class="round icon-button" value="pear" icon-left="build"/>
        </VueGroup>
        <!-- Top indicator -->
        <VueGroup v-model="choice" class="top-indicator inline" indicator>
          <VueGroupButton value="apple">Apple</VueGroupButton>
          <VueGroupButton value="orange">Orange</VueGroupButton>
          <VueGroupButton value="pear">Pear</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="top-indicator inline small-indicator" indicator>
          <VueGroupButton class="round" value="apple">Apple</VueGroupButton>
          <VueGroupButton class="round" value="orange">Orange</VueGroupButton>
          <VueGroupButton class="round" value="pear">Pear</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="top-indicator inline" indicator>
          <VueGroupButton class="icon-button" value="apple" icon-left="flag"/>
          <VueGroupButton class="icon-button" value="orange" icon-left="star"/>
          <VueGroupButton class="icon-button" value="pear" icon-left="build"/>
        </VueGroup>
        <VueGroup v-model="choice" class="top-indicator inline small-indicator" indicator>
          <VueGroupButton class="round icon-button" value="apple" icon-left="flag"/>
          <VueGroupButton class="round icon-button" value="orange" icon-left="star"/>
          <VueGroupButton class="round icon-button" value="pear" icon-left="build"/>
        </VueGroup>
      </div>
      <div class="row">
        <VueGroup v-model="choice" class="primary inline" indicator>
          <VueGroupButton value="apple">Apple</VueGroupButton>
          <VueGroupButton value="orange">Orange</VueGroupButton>
          <VueGroupButton value="pear">Pear</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="primary inline small-indicator" indicator>
          <VueGroupButton class="round" value="apple">Apple</VueGroupButton>
          <VueGroupButton class="round" value="orange">Orange</VueGroupButton>
          <VueGroupButton class="round" value="pear">Pear</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="primary inline" indicator>
          <VueGroupButton class="icon-button" value="apple" icon-left="flag"/>
          <VueGroupButton class="icon-button" value="orange" icon-left="star"/>
          <VueGroupButton class="icon-button" value="pear" icon-left="build"/>
        </VueGroup>
        <VueGroup v-model="choice" class="primary inline small-indicator" indicator>
          <VueGroupButton class="round icon-button" value="apple" icon-left="flag"/>
          <VueGroupButton class="round icon-button" value="orange" icon-left="star"/>
          <VueGroupButton class="round icon-button" value="pear" icon-left="build"/>
        </VueGroup>
        <!-- Top indicator -->
        <VueGroup v-model="choice" class="top-indicator primary inline" indicator>
          <VueGroupButton value="apple">Apple</VueGroupButton>
          <VueGroupButton value="orange">Orange</VueGroupButton>
          <VueGroupButton value="pear">Pear</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="top-indicator primary inline small-indicator" indicator>
          <VueGroupButton class="round" value="apple">Apple</VueGroupButton>
          <VueGroupButton class="round" value="orange">Orange</VueGroupButton>
          <VueGroupButton class="round" value="pear">Pear</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="top-indicator primary inline" indicator>
          <VueGroupButton class="icon-button" value="apple" icon-left="flag"/>
          <VueGroupButton class="icon-button" value="orange" icon-left="star"/>
          <VueGroupButton class="icon-button" value="pear" icon-left="build"/>
        </VueGroup>
        <VueGroup v-model="choice" class="top-indicator primary inline small-indicator" indicator>
          <VueGroupButton class="round icon-button" value="apple" icon-left="flag"/>
          <VueGroupButton class="round icon-button" value="orange" icon-left="star"/>
          <VueGroupButton class="round icon-button" value="pear" icon-left="build"/>
        </VueGroup>
      </div>
      <div class="row">
        <VueGroup v-model="choice" class="accent inline" indicator>
          <VueGroupButton value="apple">Apple</VueGroupButton>
          <VueGroupButton value="orange">Orange</VueGroupButton>
          <VueGroupButton value="pear">Pear</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="accent inline small-indicator" indicator>
          <VueGroupButton class="round" value="apple">Apple</VueGroupButton>
          <VueGroupButton class="round" value="orange">Orange</VueGroupButton>
          <VueGroupButton class="round" value="pear">Pear</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="accent inline" indicator>
          <VueGroupButton class="icon-button" value="apple" icon-left="flag"/>
          <VueGroupButton class="icon-button" value="orange" icon-left="star"/>
          <VueGroupButton class="icon-button" value="pear" icon-left="build"/>
        </VueGroup>
        <VueGroup v-model="choice" class="accent inline small-indicator" indicator>
          <VueGroupButton class="round icon-button" value="apple" icon-left="flag"/>
          <VueGroupButton class="round icon-button" value="orange" icon-left="star"/>
          <VueGroupButton class="round icon-button" value="pear" icon-left="build"/>
        </VueGroup>
        <!-- Top indicator -->
        <VueGroup v-model="choice" class="top-indicator accent inline" indicator>
          <VueGroupButton value="apple">Apple</VueGroupButton>
          <VueGroupButton value="orange">Orange</VueGroupButton>
          <VueGroupButton value="pear">Pear</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="top-indicator accent inline small-indicator" indicator>
          <VueGroupButton class="round" value="apple">Apple</VueGroupButton>
          <VueGroupButton class="round" value="orange">Orange</VueGroupButton>
          <VueGroupButton class="round" value="pear">Pear</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="top-indicator accent inline" indicator>
          <VueGroupButton class="icon-button" value="apple" icon-left="flag"/>
          <VueGroupButton class="icon-button" value="orange" icon-left="star"/>
          <VueGroupButton class="icon-button" value="pear" icon-left="build"/>
        </VueGroup>
        <VueGroup v-model="choice" class="top-indicator accent inline small-indicator" indicator>
          <VueGroupButton class="round icon-button" value="apple" icon-left="flag"/>
          <VueGroupButton class="round icon-button" value="orange" icon-left="star"/>
          <VueGroupButton class="round icon-button" value="pear" icon-left="build"/>
        </VueGroup>
      </div>
      <div class="row">
        <VueGroup v-model="choice" class="inline" indicator>
          <VueGroupButton class="flat" value="apple">Apple</VueGroupButton>
          <VueGroupButton class="flat" value="orange">Orange</VueGroupButton>
          <VueGroupButton class="flat" value="pear">Pear</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="inline small-indicator" indicator>
          <VueGroupButton class="flat" value="apple">Apple</VueGroupButton>
          <VueGroupButton class="flat" value="orange">Orange</VueGroupButton>
          <VueGroupButton class="flat" value="pear">Pear</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="inline" indicator>
          <VueGroupButton class="flat icon-button" value="apple" icon-left="flag"/>
          <VueGroupButton class="flat icon-button" value="orange" icon-left="star"/>
          <VueGroupButton class="flat icon-button" value="pear" icon-left="build"/>
        </VueGroup>
        <VueGroup v-model="choice" class="inline small-indicator" indicator>
          <VueGroupButton class="flat icon-button" value="apple" icon-left="flag"/>
          <VueGroupButton class="flat icon-button" value="orange" icon-left="star"/>
          <VueGroupButton class="flat icon-button" value="pear" icon-left="build"/>
        </VueGroup>
        <!-- Top indicator -->
        <VueGroup v-model="choice" class="top-indicator inline" indicator>
          <VueGroupButton class="flat" value="apple">Apple</VueGroupButton>
          <VueGroupButton class="flat" value="orange">Orange</VueGroupButton>
          <VueGroupButton class="flat" value="pear">Pear</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="top-indicator inline small-indicator" indicator>
          <VueGroupButton class="flat" value="apple">Apple</VueGroupButton>
          <VueGroupButton class="flat" value="orange">Orange</VueGroupButton>
          <VueGroupButton class="flat" value="pear">Pear</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="top-indicator inline" indicator>
          <VueGroupButton class="flat icon-button" value="apple" icon-left="flag"/>
          <VueGroupButton class="flat icon-button" value="orange" icon-left="star"/>
          <VueGroupButton class="flat icon-button" value="pear" icon-left="build"/>
        </VueGroup>
        <VueGroup v-model="choice" class="top-indicator inline small-indicator" indicator>
          <VueGroupButton class="flat icon-button" value="apple" icon-left="flag"/>
          <VueGroupButton class="flat icon-button" value="orange" icon-left="star"/>
          <VueGroupButton class="flat icon-button" value="pear" icon-left="build"/>
        </VueGroup>
      </div>
      <div class="row">
        <VueGroup v-model="choice" class="primary inline" indicator>
          <VueGroupButton class="flat" value="apple">Apple</VueGroupButton>
          <VueGroupButton class="flat" value="orange">Orange</VueGroupButton>
          <VueGroupButton class="flat" value="pear">Pear</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="primary inline small-indicator" indicator>
          <VueGroupButton class="flat" value="apple">Apple</VueGroupButton>
          <VueGroupButton class="flat" value="orange">Orange</VueGroupButton>
          <VueGroupButton class="flat" value="pear">Pear</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="primary inline" indicator>
          <VueGroupButton class="flat icon-button" value="apple" icon-left="flag"/>
          <VueGroupButton class="flat icon-button" value="orange" icon-left="star"/>
          <VueGroupButton class="flat icon-button" value="pear" icon-left="build"/>
        </VueGroup>
        <VueGroup v-model="choice" class="primary inline small-indicator" indicator>
          <VueGroupButton class="flat icon-button" value="apple" icon-left="flag"/>
          <VueGroupButton class="flat icon-button" value="orange" icon-left="star"/>
          <VueGroupButton class="flat icon-button" value="pear" icon-left="build"/>
        </VueGroup>
        <!-- Top indicator -->
        <VueGroup v-model="choice" class="top-indicator primary inline" indicator>
          <VueGroupButton class="flat" value="apple">Apple</VueGroupButton>
          <VueGroupButton class="flat" value="orange">Orange</VueGroupButton>
          <VueGroupButton class="flat" value="pear">Pear</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="top-indicator primary inline small-indicator" indicator>
          <VueGroupButton class="flat" value="apple">Apple</VueGroupButton>
          <VueGroupButton class="flat" value="orange">Orange</VueGroupButton>
          <VueGroupButton class="flat" value="pear">Pear</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="top-indicator primary inline" indicator>
          <VueGroupButton class="flat icon-button" value="apple" icon-left="flag"/>
          <VueGroupButton class="flat icon-button" value="orange" icon-left="star"/>
          <VueGroupButton class="flat icon-button" value="pear" icon-left="build"/>
        </VueGroup>
        <VueGroup v-model="choice" class="top-indicator primary inline small-indicator" indicator>
          <VueGroupButton class="flat icon-button" value="apple" icon-left="flag"/>
          <VueGroupButton class="flat icon-button" value="orange" icon-left="star"/>
          <VueGroupButton class="flat icon-button" value="pear" icon-left="build"/>
        </VueGroup>
      </div>
      <div class="row">
        <VueGroup v-model="choice" class="accent inline" indicator>
          <VueGroupButton class="flat" value="apple">Apple</VueGroupButton>
          <VueGroupButton class="flat" value="orange">Orange</VueGroupButton>
          <VueGroupButton class="flat" value="pear">Pear</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="accent inline small-indicator" indicator>
          <VueGroupButton class="flat" value="apple">Apple</VueGroupButton>
          <VueGroupButton class="flat" value="orange">Orange</VueGroupButton>
          <VueGroupButton class="flat" value="pear">Pear</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="accent inline" indicator>
          <VueGroupButton class="flat icon-button" value="apple" icon-left="flag"/>
          <VueGroupButton class="flat icon-button" value="orange" icon-left="star"/>
          <VueGroupButton class="flat icon-button" value="pear" icon-left="build"/>
        </VueGroup>
        <VueGroup v-model="choice" class="accent inline small-indicator" indicator>
          <VueGroupButton class="flat icon-button" value="apple" icon-left="flag"/>
          <VueGroupButton class="flat icon-button" value="orange" icon-left="star"/>
          <VueGroupButton class="flat icon-button" value="pear" icon-left="build"/>
        </VueGroup>
        <!-- Top indicator -->
        <VueGroup v-model="choice" class="top-indicator accent inline" indicator>
          <VueGroupButton class="flat" value="apple">Apple</VueGroupButton>
          <VueGroupButton class="flat" value="orange">Orange</VueGroupButton>
          <VueGroupButton class="flat" value="pear">Pear</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="top-indicator accent inline small-indicator" indicator>
          <VueGroupButton class="flat" value="apple">Apple</VueGroupButton>
          <VueGroupButton class="flat" value="orange">Orange</VueGroupButton>
          <VueGroupButton class="flat" value="pear">Pear</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="top-indicator accent inline" indicator>
          <VueGroupButton class="flat icon-button" value="apple" icon-left="flag"/>
          <VueGroupButton class="flat icon-button" value="orange" icon-left="star"/>
          <VueGroupButton class="flat icon-button" value="pear" icon-left="build"/>
        </VueGroup>
        <VueGroup v-model="choice" class="top-indicator accent inline small-indicator" indicator>
          <VueGroupButton class="flat icon-button" value="apple" icon-left="flag"/>
          <VueGroupButton class="flat icon-button" value="orange" icon-left="star"/>
          <VueGroupButton class="flat icon-button" value="pear" icon-left="build"/>
        </VueGroup>
      </div>

      <h3>With indicator - Vertical</h3>
      <div class="row">
        <VueGroup v-model="choice" class="vertical inline" indicator>
          <VueGroupButton value="apple">Apple</VueGroupButton>
          <VueGroupButton value="orange">Orange</VueGroupButton>
          <VueGroupButton value="pear">Pear</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="vertical inline small-indicator" indicator>
          <VueGroupButton class="round" value="apple">Apple</VueGroupButton>
          <VueGroupButton class="round" value="orange">Orange</VueGroupButton>
          <VueGroupButton class="round" value="pear">Pear</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="vertical inline" indicator>
          <VueGroupButton class="icon-button" value="apple" icon-left="flag"/>
          <VueGroupButton class="icon-button" value="orange" icon-left="star"/>
          <VueGroupButton class="icon-button" value="pear" icon-left="build"/>
        </VueGroup>
        <VueGroup v-model="choice" class="vertical inline small-indicator" indicator>
          <VueGroupButton class="round icon-button" value="apple" icon-left="flag"/>
          <VueGroupButton class="round icon-button" value="orange" icon-left="star"/>
          <VueGroupButton class="round icon-button" value="pear" icon-left="build"/>
        </VueGroup>
        <!-- Left indicator -->
        <VueGroup v-model="choice" class="vertical left-indicator inline" indicator>
          <VueGroupButton value="apple">Apple</VueGroupButton>
          <VueGroupButton value="orange">Orange</VueGroupButton>
          <VueGroupButton value="pear">Pear</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="vertical left-indicator inline small-indicator" indicator>
          <VueGroupButton class="round" value="apple">Apple</VueGroupButton>
          <VueGroupButton class="round" value="orange">Orange</VueGroupButton>
          <VueGroupButton class="round" value="pear">Pear</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="vertical left-indicator inline" indicator>
          <VueGroupButton class="icon-button" value="apple" icon-left="flag"/>
          <VueGroupButton class="icon-button" value="orange" icon-left="star"/>
          <VueGroupButton class="icon-button" value="pear" icon-left="build"/>
        </VueGroup>
        <VueGroup v-model="choice" class="vertical left-indicator inline small-indicator" indicator>
          <VueGroupButton class="round icon-button" value="apple" icon-left="flag"/>
          <VueGroupButton class="round icon-button" value="orange" icon-left="star"/>
          <VueGroupButton class="round icon-button" value="pear" icon-left="build"/>
        </VueGroup>
      </div>
      <div class="row">
        <VueGroup v-model="choice" class="vertical primary inline" indicator>
          <VueGroupButton value="apple">Apple</VueGroupButton>
          <VueGroupButton value="orange">Orange</VueGroupButton>
          <VueGroupButton value="pear">Pear</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="vertical primary inline small-indicator" indicator>
          <VueGroupButton class="round" value="apple">Apple</VueGroupButton>
          <VueGroupButton class="round" value="orange">Orange</VueGroupButton>
          <VueGroupButton class="round" value="pear">Pear</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="vertical primary inline" indicator>
          <VueGroupButton class="icon-button" value="apple" icon-left="flag"/>
          <VueGroupButton class="icon-button" value="orange" icon-left="star"/>
          <VueGroupButton class="icon-button" value="pear" icon-left="build"/>
        </VueGroup>
        <VueGroup v-model="choice" class="vertical primary inline small-indicator" indicator>
          <VueGroupButton class="round icon-button" value="apple" icon-left="flag"/>
          <VueGroupButton class="round icon-button" value="orange" icon-left="star"/>
          <VueGroupButton class="round icon-button" value="pear" icon-left="build"/>
        </VueGroup>
        <!-- Left indicator -->
        <VueGroup v-model="choice" class="vertical left-indicator primary inline" indicator>
          <VueGroupButton value="apple">Apple</VueGroupButton>
          <VueGroupButton value="orange">Orange</VueGroupButton>
          <VueGroupButton value="pear">Pear</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="vertical left-indicator primary inline small-indicator" indicator>
          <VueGroupButton class="round" value="apple">Apple</VueGroupButton>
          <VueGroupButton class="round" value="orange">Orange</VueGroupButton>
          <VueGroupButton class="round" value="pear">Pear</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="vertical left-indicator primary inline" indicator>
          <VueGroupButton class="icon-button" value="apple" icon-left="flag"/>
          <VueGroupButton class="icon-button" value="orange" icon-left="star"/>
          <VueGroupButton class="icon-button" value="pear" icon-left="build"/>
        </VueGroup>
        <VueGroup v-model="choice" class="vertical left-indicator primary inline small-indicator" indicator>
          <VueGroupButton class="round icon-button" value="apple" icon-left="flag"/>
          <VueGroupButton class="round icon-button" value="orange" icon-left="star"/>
          <VueGroupButton class="round icon-button" value="pear" icon-left="build"/>
        </VueGroup>
      </div>
      <div class="row">
        <VueGroup v-model="choice" class="vertical accent inline" indicator>
          <VueGroupButton value="apple">Apple</VueGroupButton>
          <VueGroupButton value="orange">Orange</VueGroupButton>
          <VueGroupButton value="pear">Pear</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="vertical accent inline small-indicator" indicator>
          <VueGroupButton class="round" value="apple">Apple</VueGroupButton>
          <VueGroupButton class="round" value="orange">Orange</VueGroupButton>
          <VueGroupButton class="round" value="pear">Pear</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="vertical accent inline" indicator>
          <VueGroupButton class="icon-button" value="apple" icon-left="flag"/>
          <VueGroupButton class="icon-button" value="orange" icon-left="star"/>
          <VueGroupButton class="icon-button" value="pear" icon-left="build"/>
        </VueGroup>
        <VueGroup v-model="choice" class="vertical accent inline small-indicator" indicator>
          <VueGroupButton class="round icon-button" value="apple" icon-left="flag"/>
          <VueGroupButton class="round icon-button" value="orange" icon-left="star"/>
          <VueGroupButton class="round icon-button" value="pear" icon-left="build"/>
        </VueGroup>
        <!-- Left indicator -->
        <VueGroup v-model="choice" class="vertical left-indicator accent inline" indicator>
          <VueGroupButton value="apple">Apple</VueGroupButton>
          <VueGroupButton value="orange">Orange</VueGroupButton>
          <VueGroupButton value="pear">Pear</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="vertical left-indicator accent inline small-indicator" indicator>
          <VueGroupButton class="round" value="apple">Apple</VueGroupButton>
          <VueGroupButton class="round" value="orange">Orange</VueGroupButton>
          <VueGroupButton class="round" value="pear">Pear</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="vertical left-indicator accent inline" indicator>
          <VueGroupButton class="icon-button" value="apple" icon-left="flag"/>
          <VueGroupButton class="icon-button" value="orange" icon-left="star"/>
          <VueGroupButton class="icon-button" value="pear" icon-left="build"/>
        </VueGroup>
        <VueGroup v-model="choice" class="vertical left-indicator accent inline small-indicator" indicator>
          <VueGroupButton class="round icon-button" value="apple" icon-left="flag"/>
          <VueGroupButton class="round icon-button" value="orange" icon-left="star"/>
          <VueGroupButton class="round icon-button" value="pear" icon-left="build"/>
        </VueGroup>
      </div>
      <div class="row">
        <VueGroup v-model="choice" class="vertical inline" indicator>
          <VueGroupButton class="flat" value="apple">Apple</VueGroupButton>
          <VueGroupButton class="flat" value="orange">Orange</VueGroupButton>
          <VueGroupButton class="flat" value="pear">Pear</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="vertical inline small-indicator" indicator>
          <VueGroupButton class="flat" value="apple">Apple</VueGroupButton>
          <VueGroupButton class="flat" value="orange">Orange</VueGroupButton>
          <VueGroupButton class="flat" value="pear">Pear</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="vertical inline" indicator>
          <VueGroupButton class="flat icon-button" value="apple" icon-left="flag"/>
          <VueGroupButton class="flat icon-button" value="orange" icon-left="star"/>
          <VueGroupButton class="flat icon-button" value="pear" icon-left="build"/>
        </VueGroup>
        <VueGroup v-model="choice" class="vertical inline small-indicator" indicator>
          <VueGroupButton class="flat icon-button" value="apple" icon-left="flag"/>
          <VueGroupButton class="flat icon-button" value="orange" icon-left="star"/>
          <VueGroupButton class="flat icon-button" value="pear" icon-left="build"/>
        </VueGroup>
        <!-- Left indicator -->
        <VueGroup v-model="choice" class="vertical left-indicator inline" indicator>
          <VueGroupButton class="flat" value="apple">Apple</VueGroupButton>
          <VueGroupButton class="flat" value="orange">Orange</VueGroupButton>
          <VueGroupButton class="flat" value="pear">Pear</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="vertical left-indicator inline small-indicator" indicator>
          <VueGroupButton class="flat" value="apple">Apple</VueGroupButton>
          <VueGroupButton class="flat" value="orange">Orange</VueGroupButton>
          <VueGroupButton class="flat" value="pear">Pear</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="vertical left-indicator inline" indicator>
          <VueGroupButton class="flat icon-button" value="apple" icon-left="flag"/>
          <VueGroupButton class="flat icon-button" value="orange" icon-left="star"/>
          <VueGroupButton class="flat icon-button" value="pear" icon-left="build"/>
        </VueGroup>
        <VueGroup v-model="choice" class="vertical left-indicator inline small-indicator" indicator>
          <VueGroupButton class="flat icon-button" value="apple" icon-left="flag"/>
          <VueGroupButton class="flat icon-button" value="orange" icon-left="star"/>
          <VueGroupButton class="flat icon-button" value="pear" icon-left="build"/>
        </VueGroup>
      </div>
      <div class="row">
        <VueGroup v-model="choice" class="vertical primary inline" indicator>
          <VueGroupButton class="flat" value="apple">Apple</VueGroupButton>
          <VueGroupButton class="flat" value="orange">Orange</VueGroupButton>
          <VueGroupButton class="flat" value="pear">Pear</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="vertical primary inline small-indicator" indicator>
          <VueGroupButton class="flat" value="apple">Apple</VueGroupButton>
          <VueGroupButton class="flat" value="orange">Orange</VueGroupButton>
          <VueGroupButton class="flat" value="pear">Pear</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="vertical primary inline" indicator>
          <VueGroupButton class="flat icon-button" value="apple" icon-left="flag"/>
          <VueGroupButton class="flat icon-button" value="orange" icon-left="star"/>
          <VueGroupButton class="flat icon-button" value="pear" icon-left="build"/>
        </VueGroup>
        <VueGroup v-model="choice" class="vertical primary inline small-indicator" indicator>
          <VueGroupButton class="flat icon-button" value="apple" icon-left="flag"/>
          <VueGroupButton class="flat icon-button" value="orange" icon-left="star"/>
          <VueGroupButton class="flat icon-button" value="pear" icon-left="build"/>
        </VueGroup>
        <!-- Left indicator -->
        <VueGroup v-model="choice" class="vertical left-indicator primary inline" indicator>
          <VueGroupButton class="flat" value="apple">Apple</VueGroupButton>
          <VueGroupButton class="flat" value="orange">Orange</VueGroupButton>
          <VueGroupButton class="flat" value="pear">Pear</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="vertical left-indicator primary inline small-indicator" indicator>
          <VueGroupButton class="flat" value="apple">Apple</VueGroupButton>
          <VueGroupButton class="flat" value="orange">Orange</VueGroupButton>
          <VueGroupButton class="flat" value="pear">Pear</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="vertical left-indicator primary inline" indicator>
          <VueGroupButton class="flat icon-button" value="apple" icon-left="flag"/>
          <VueGroupButton class="flat icon-button" value="orange" icon-left="star"/>
          <VueGroupButton class="flat icon-button" value="pear" icon-left="build"/>
        </VueGroup>
        <VueGroup v-model="choice" class="vertical left-indicator primary inline small-indicator" indicator>
          <VueGroupButton class="flat icon-button" value="apple" icon-left="flag"/>
          <VueGroupButton class="flat icon-button" value="orange" icon-left="star"/>
          <VueGroupButton class="flat icon-button" value="pear" icon-left="build"/>
        </VueGroup>
      </div>
      <div class="row">
        <VueGroup v-model="choice" class="vertical accent inline" indicator>
          <VueGroupButton class="flat" value="apple">Apple</VueGroupButton>
          <VueGroupButton class="flat" value="orange">Orange</VueGroupButton>
          <VueGroupButton class="flat" value="pear">Pear</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="vertical accent inline small-indicator" indicator>
          <VueGroupButton class="flat" value="apple">Apple</VueGroupButton>
          <VueGroupButton class="flat" value="orange">Orange</VueGroupButton>
          <VueGroupButton class="flat" value="pear">Pear</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="vertical accent inline" indicator>
          <VueGroupButton class="flat icon-button" value="apple" icon-left="flag"/>
          <VueGroupButton class="flat icon-button" value="orange" icon-left="star"/>
          <VueGroupButton class="flat icon-button" value="pear" icon-left="build"/>
        </VueGroup>
        <VueGroup v-model="choice" class="vertical accent inline small-indicator" indicator>
          <VueGroupButton class="flat icon-button" value="apple" icon-left="flag"/>
          <VueGroupButton class="flat icon-button" value="orange" icon-left="star"/>
          <VueGroupButton class="flat icon-button" value="pear" icon-left="build"/>
        </VueGroup>
        <!-- Left indicator -->
        <VueGroup v-model="choice" class="vertical accent inline" indicator>
          <VueGroupButton class="flat" value="apple">Apple</VueGroupButton>
          <VueGroupButton class="flat" value="orange">Orange</VueGroupButton>
          <VueGroupButton class="flat" value="pear">Pear</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="vertical accent inline small-indicator" indicator>
          <VueGroupButton class="flat" value="apple">Apple</VueGroupButton>
          <VueGroupButton class="flat" value="orange">Orange</VueGroupButton>
          <VueGroupButton class="flat" value="pear">Pear</VueGroupButton>
        </VueGroup>
        <VueGroup v-model="choice" class="vertical accent inline" indicator>
          <VueGroupButton class="flat icon-button" value="apple" icon-left="flag"/>
          <VueGroupButton class="flat icon-button" value="orange" icon-left="star"/>
          <VueGroupButton class="flat icon-button" value="pear" icon-left="build"/>
        </VueGroup>
        <VueGroup v-model="choice" class="vertical accent inline small-indicator" indicator>
          <VueGroupButton class="flat icon-button" value="apple" icon-left="flag"/>
          <VueGroupButton class="flat icon-button" value="orange" icon-left="star"/>
          <VueGroupButton class="flat icon-button" value="pear" icon-left="build"/>
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
    }
  },
}
</script>

