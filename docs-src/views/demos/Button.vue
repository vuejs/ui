<template>
  <div class="demo">
    <div class="ui-test">
      <h2>VueButton</h2>

      <h3>Morphing action</h3>
      <div class="row">
        <VueButton
          @click="log('clicked')"
        >Button</VueButton>
        <VueButton
          href="https://vuejs.org/"
          target="_blank"
          icon-right="open_in_new"
        >vuejs.org</VueButton>
        <VueButton
          :to="{ name: 'home' }"
          active-class="active"
          icon-left="link"
        >Vue UI Framework Test</VueButton>
      </div>
      <div class="row">
        <VueButton
          disabled
          @click="log('should not be printed')"
        >Button</VueButton>
        <VueButton
          disabled
          href="https://vuejs.org/"
          target="_blank"
          icon-right="open_in_new"
        >vuejs.org</VueButton>
        <VueButton
          disabled
          :to="{ name: 'home' }"
          active-class="active"
          icon-left="link"
        >Vue UI Framework Test</VueButton>
      </div>

      <h3>Styles</h3>
      <div class="row">
        <VueButton icon-left="mic">Default</VueButton>
        <VueButton class="primary" icon-left="flag" tag="21">Primary</VueButton>
        <VueButton class="accent" icon-left="star">Accent</VueButton>
        <VueButton class="danger" icon-left="error">Danger</VueButton>
        <VueButton class="warning" icon-left="warning">Warning</VueButton>
        <VueButton class="info" icon-left="info">Info</VueButton>
        <VueButton class="success" icon-left="done">Success</VueButton>
      </div>
      <div class="row">
        <VueButton disabled icon-left="mic">Default</VueButton>
        <VueButton disabled class="primary" icon-left="flag">Primary</VueButton>
        <VueButton disabled class="accent" icon-left="star">Accent</VueButton>
        <VueButton disabled class="danger" icon-left="error">Danger</VueButton>
        <VueButton disabled class="warning" icon-left="warning">Warning</VueButton>
        <VueButton disabled class="info" icon-left="info">Info</VueButton>
        <VueButton disabled class="success" icon-left="done">Success</VueButton>
      </div>
      <div class="row">
        <VueButton loading icon-left="mic">Default</VueButton>
        <VueButton loading class="primary" icon-left="flag">Primary</VueButton>
        <VueButton loading class="accent" icon-left="star">Accent</VueButton>
        <VueButton loading class="danger" icon-left="error">Danger</VueButton>
        <VueButton loading class="warning" icon-left="warning">Warning</VueButton>
        <VueButton loading class="info" icon-left="info">Info</VueButton>
        <VueButton loading class="success" icon-left="done">Success</VueButton>
      </div>
      <div class="row">
        <VueButton loading-secondary icon-left="mic">Default</VueButton>
        <VueButton loading-secondary class="primary" icon-left="flag">Primary</VueButton>
        <VueButton loading-secondary class="accent" icon-left="star">Accent</VueButton>
        <VueButton loading-secondary class="danger" icon-left="error">Danger</VueButton>
        <VueButton loading-secondary class="warning" icon-left="warning">Warning</VueButton>
        <VueButton loading-secondary class="info" icon-left="info">Info</VueButton>
        <VueButton loading-secondary class="success" icon-left="done">Success</VueButton>
      </div>
      <div class="row">
        <VueButton class="flat" icon-left="mic">Default</VueButton>
        <VueButton class="flat primary" icon-left="flag">Primary</VueButton>
        <VueButton class="flat accent" icon-left="star">Accent</VueButton>
        <VueButton class="flat danger" icon-left="error">Danger</VueButton>
        <VueButton class="flat warning" icon-left="warning">Warning</VueButton>
        <VueButton class="flat info" icon-left="info">Info</VueButton>
        <VueButton class="flat success" icon-left="done">Success</VueButton>
      </div>
      <div class="row">
        <VueButton disabled class="flat" icon-left="mic">Default</VueButton>
        <VueButton disabled class="flat primary" icon-left="flag">Primary</VueButton>
        <VueButton disabled class="flat accent" icon-left="star">Accent</VueButton>
        <VueButton disabled class="flat danger" icon-left="error">Danger</VueButton>
        <VueButton disabled class="flat warning" icon-left="warning">Warning</VueButton>
        <VueButton disabled class="flat info" icon-left="info">Info</VueButton>
        <VueButton disabled class="flat success" icon-left="done">Success</VueButton>
      </div>
      <div class="row">
        <VueButton loading class="flat" icon-left="mic">Default</VueButton>
        <VueButton loading class="flat primary" icon-left="flag">Primary</VueButton>
        <VueButton loading class="flat accent" icon-left="star">Accent</VueButton>
        <VueButton loading class="flat danger" icon-left="error">Danger</VueButton>
        <VueButton loading class="flat warning" icon-left="warning">Warning</VueButton>
        <VueButton loading class="flat info" icon-left="info">Info</VueButton>
        <VueButton loading class="flat success" icon-left="done">Success</VueButton>
      </div>
      <div class="row">
        <VueButton loading-secondary class="flat" icon-left="mic">Default</VueButton>
        <VueButton loading-secondary class="flat primary" icon-left="flag">Primary</VueButton>
        <VueButton loading-secondary class="flat accent" icon-left="star">Accent</VueButton>
        <VueButton loading-secondary class="flat danger" icon-left="error">Danger</VueButton>
        <VueButton loading-secondary class="flat warning" icon-left="warning">Warning</VueButton>
        <VueButton loading-secondary class="flat info" icon-left="info">Info</VueButton>
        <VueButton loading-secondary class="flat success" icon-left="done">Success</VueButton>
      </div>
      <div class="row">
        <VueButton class="round" icon-left="mic">Default</VueButton>
        <VueButton class="round primary" icon-left="flag">Primary</VueButton>
        <VueButton class="round accent" icon-left="star">Accent</VueButton>
        <VueButton class="round danger" icon-left="error">Danger</VueButton>
        <VueButton class="round warning" icon-left="warning">Warning</VueButton>
        <VueButton class="round info" icon-left="info">Info</VueButton>
        <VueButton class="round success" icon-left="done">Success</VueButton>
      </div>
      <div class="row">
        <VueButton disabled class="round" icon-left="mic">Default</VueButton>
        <VueButton disabled class="round primary" icon-left="flag">Primary</VueButton>
        <VueButton disabled class="round accent" icon-left="star">Accent</VueButton>
        <VueButton disabled class="round danger" icon-left="error">Danger</VueButton>
        <VueButton disabled class="round warning" icon-left="warning">Warning</VueButton>
        <VueButton disabled class="round info" icon-left="info">Info</VueButton>
        <VueButton disabled class="round success" icon-left="done">Success</VueButton>
      </div>
      <div class="row">
        <VueButton loading class="round" icon-left="mic">Default</VueButton>
        <VueButton loading class="round primary" icon-left="flag">Primary</VueButton>
        <VueButton loading class="round accent" icon-left="star">Accent</VueButton>
        <VueButton loading class="round danger" icon-left="error">Danger</VueButton>
        <VueButton loading class="round warning" icon-left="warning">Warning</VueButton>
        <VueButton loading class="round info" icon-left="info">Info</VueButton>
        <VueButton loading class="round success" icon-left="done">Success</VueButton>
      </div>
      <div class="row">
        <VueButton loading-secondary class="round" icon-left="mic">Default</VueButton>
        <VueButton loading-secondary class="round primary" icon-left="flag">Primary</VueButton>
        <VueButton loading-secondary class="round accent" icon-left="star">Accent</VueButton>
        <VueButton loading-secondary class="round danger" icon-left="error">Danger</VueButton>
        <VueButton loading-secondary class="round warning" icon-left="warning">Warning</VueButton>
        <VueButton loading-secondary class="round info" icon-left="info">Info</VueButton>
        <VueButton loading-secondary class="round success" icon-left="done">Success</VueButton>
      </div>
      <div class="row">
        <VueButton class="round flat" icon-left="mic">Default</VueButton>
        <VueButton class="round flat primary" icon-left="flag">Primary</VueButton>
        <VueButton class="round flat accent" icon-left="star">Accent</VueButton>
        <VueButton class="round flat danger" icon-left="error">Danger</VueButton>
        <VueButton class="round flat warning" icon-left="warning">Warning</VueButton>
        <VueButton class="round flat info" icon-left="info">Info</VueButton>
        <VueButton class="round flat success" icon-left="done">Success</VueButton>
      </div>
      <div class="row">
        <VueButton disabled class="round flat" icon-left="mic">Default</VueButton>
        <VueButton disabled class="round flat primary" icon-left="flag">Primary</VueButton>
        <VueButton disabled class="round flat accent" icon-left="star">Accent</VueButton>
        <VueButton disabled class="round flat danger" icon-left="error">Danger</VueButton>
        <VueButton disabled class="round flat warning" icon-left="warning">Warning</VueButton>
        <VueButton disabled class="round flat info" icon-left="info">Info</VueButton>
        <VueButton disabled class="round flat success" icon-left="done">Success</VueButton>
      </div>
      <div class="row">
        <VueButton loading class="round flat" icon-left="mic">Default</VueButton>
        <VueButton loading class="round flat primary" icon-left="flag">Primary</VueButton>
        <VueButton loading class="round flat accent" icon-left="star">Accent</VueButton>
        <VueButton loading class="round flat danger" icon-left="error">Danger</VueButton>
        <VueButton loading class="round flat warning" icon-left="warning">Warning</VueButton>
        <VueButton loading class="round flat info" icon-left="info">Info</VueButton>
        <VueButton loading class="round flat success" icon-left="done">Success</VueButton>
      </div>
      <div class="row">
        <VueButton loading-secondary class="round flat" icon-left="mic">Default</VueButton>
        <VueButton loading-secondary class="round flat primary" icon-left="flag">Primary</VueButton>
        <VueButton loading-secondary class="round flat accent" icon-left="star">Accent</VueButton>
        <VueButton loading-secondary class="round flat danger" icon-left="error">Danger</VueButton>
        <VueButton loading-secondary class="round flat warning" icon-left="warning">Warning</VueButton>
        <VueButton loading-secondary class="round flat info" icon-left="info">Info</VueButton>
        <VueButton loading-secondary class="round flat success" icon-left="done">Success</VueButton>
      </div>
      <div class="row">
        <VueButton class="big" icon-left="mic">Default</VueButton>
        <VueButton class="big primary" icon-left="flag">Primary</VueButton>
        <VueButton class="big accent" icon-left="star">Accent</VueButton>
        <VueButton class="big danger" icon-left="error">Danger</VueButton>
        <VueButton class="big warning" icon-left="warning">Warning</VueButton>
        <VueButton class="big info" icon-left="info">Info</VueButton>
        <VueButton class="big success" icon-left="done">Success</VueButton>
      </div>
      <div class="row">
        <VueButton disabled class="big" icon-left="mic">Default</VueButton>
        <VueButton disabled class="big primary" icon-left="flag">Primary</VueButton>
        <VueButton disabled class="big accent" icon-left="star">Accent</VueButton>
        <VueButton disabled class="big danger" icon-left="error">Danger</VueButton>
        <VueButton disabled class="big warning" icon-left="warning">Warning</VueButton>
        <VueButton disabled class="big info" icon-left="info">Info</VueButton>
        <VueButton disabled class="big success" icon-left="done">Success</VueButton>
      </div>
      <div class="row">
        <VueButton loading class="big" icon-left="mic">Default</VueButton>
        <VueButton loading class="big primary" icon-left="flag">Primary</VueButton>
        <VueButton loading class="big accent" icon-left="star">Accent</VueButton>
        <VueButton loading class="big danger" icon-left="error">Danger</VueButton>
        <VueButton loading class="big warning" icon-left="warning">Warning</VueButton>
        <VueButton loading class="big info" icon-left="info">Info</VueButton>
        <VueButton loading class="big success" icon-left="done">Success</VueButton>
      </div>
      <div class="row">
        <VueButton loading-secondary class="big" icon-left="mic">Default</VueButton>
        <VueButton loading-secondary class="big primary" icon-left="flag">Primary</VueButton>
        <VueButton loading-secondary class="big accent" icon-left="star">Accent</VueButton>
        <VueButton loading-secondary class="big danger" icon-left="error">Danger</VueButton>
        <VueButton loading-secondary class="big warning" icon-left="warning">Warning</VueButton>
        <VueButton loading-secondary class="big info" icon-left="info">Info</VueButton>
        <VueButton loading-secondary class="big success" icon-left="done">Success</VueButton>
      </div>
      <div class="row">
        <VueButton class="big flat" icon-left="mic">Default</VueButton>
        <VueButton class="big flat primary" icon-left="flag">Primary</VueButton>
        <VueButton class="big flat accent" icon-left="star">Accent</VueButton>
        <VueButton class="big flat danger" icon-left="error">Danger</VueButton>
        <VueButton class="big flat warning" icon-left="warning">Warning</VueButton>
        <VueButton class="big flat info" icon-left="info">Info</VueButton>
        <VueButton class="big flat success" icon-left="done">Success</VueButton>
      </div>
      <div class="row">
        <VueButton disabled class="big flat" icon-left="mic">Default</VueButton>
        <VueButton disabled class="big flat primary" icon-left="flag">Primary</VueButton>
        <VueButton disabled class="big flat accent" icon-left="star">Accent</VueButton>
        <VueButton disabled class="big flat danger" icon-left="error">Danger</VueButton>
        <VueButton disabled class="big flat warning" icon-left="warning">Warning</VueButton>
        <VueButton disabled class="big flat info" icon-left="info">Info</VueButton>
        <VueButton disabled class="big flat success" icon-left="done">Success</VueButton>
      </div>
      <div class="row">
        <VueButton loading class="big flat" icon-left="mic">Default</VueButton>
        <VueButton loading class="big flat primary" icon-left="flag">Primary</VueButton>
        <VueButton loading class="big flat accent" icon-left="star">Accent</VueButton>
        <VueButton loading class="big flat danger" icon-left="error">Danger</VueButton>
        <VueButton loading class="big flat warning" icon-left="warning">Warning</VueButton>
        <VueButton loading class="big flat info" icon-left="info">Info</VueButton>
        <VueButton loading class="big flat success" icon-left="done">Success</VueButton>
      </div>
      <div class="row">
        <VueButton loading-secondary class="big flat" icon-left="mic">Default</VueButton>
        <VueButton loading-secondary class="big flat primary" icon-left="flag">Primary</VueButton>
        <VueButton loading-secondary class="big flat accent" icon-left="star">Accent</VueButton>
        <VueButton loading-secondary class="big flat danger" icon-left="error">Danger</VueButton>
        <VueButton loading-secondary class="big flat warning" icon-left="warning">Warning</VueButton>
        <VueButton loading-secondary class="big flat info" icon-left="info">Info</VueButton>
        <VueButton loading-secondary class="big flat success" icon-left="done">Success</VueButton>
      </div>
      <div class="row">
        <VueButton class="big round" icon-left="mic" tag="42">Default</VueButton>
        <VueButton class="big round primary" icon-left="flag">Primary</VueButton>
        <VueButton class="big round accent" icon-left="star">Accent</VueButton>
        <VueButton class="big round danger" icon-left="error">Danger</VueButton>
        <VueButton class="big round warning" icon-left="warning">Warning</VueButton>
        <VueButton class="big round info" icon-left="info">Info</VueButton>
        <VueButton class="big round success" icon-left="done">Success</VueButton>
      </div>
      <div class="row">
        <VueButton disabled class="big round" icon-left="mic">Default</VueButton>
        <VueButton disabled class="big round primary" icon-left="flag">Primary</VueButton>
        <VueButton disabled class="big round accent" icon-left="star">Accent</VueButton>
        <VueButton disabled class="big round danger" icon-left="error">Danger</VueButton>
        <VueButton disabled class="big round warning" icon-left="warning">Warning</VueButton>
        <VueButton disabled class="big round info" icon-left="info">Info</VueButton>
        <VueButton disabled class="big round success" icon-left="done">Success</VueButton>
      </div>
      <div class="row">
        <VueButton loading class="big round" icon-left="mic">Default</VueButton>
        <VueButton loading class="big round primary" icon-left="flag">Primary</VueButton>
        <VueButton loading class="big round accent" icon-left="star">Accent</VueButton>
        <VueButton loading class="big round danger" icon-left="error">Danger</VueButton>
        <VueButton loading class="big round warning" icon-left="warning">Warning</VueButton>
        <VueButton loading class="big round info" icon-left="info">Info</VueButton>
        <VueButton loading class="big round success" icon-left="done">Success</VueButton>
      </div>
      <div class="row">
        <VueButton loading-secondary class="big round" icon-left="mic">Default</VueButton>
        <VueButton loading-secondary class="big round primary" icon-left="flag">Primary</VueButton>
        <VueButton loading-secondary class="big round accent" icon-left="star">Accent</VueButton>
        <VueButton loading-secondary class="big round danger" icon-left="error">Danger</VueButton>
        <VueButton loading-secondary class="big round warning" icon-left="warning">Warning</VueButton>
        <VueButton loading-secondary class="big round info" icon-left="info">Info</VueButton>
        <VueButton loading-secondary class="big round success" icon-left="done">Success</VueButton>
      </div>
      <div class="row">
        <VueButton class="big round flat" icon-left="mic">Default</VueButton>
        <VueButton class="big round flat primary" icon-left="flag">Primary</VueButton>
        <VueButton class="big round flat accent" icon-left="star">Accent</VueButton>
        <VueButton class="big round flat danger" icon-left="error">Danger</VueButton>
        <VueButton class="big round flat warning" icon-left="warning">Warning</VueButton>
        <VueButton class="big round flat info" icon-left="info">Info</VueButton>
        <VueButton class="big round flat success" icon-left="done">Success</VueButton>
      </div>
      <div class="row">
        <VueButton disabled class="big round flat" icon-left="mic">Default</VueButton>
        <VueButton disabled class="big round flat primary" icon-left="flag">Primary</VueButton>
        <VueButton disabled class="big round flat accent" icon-left="star">Accent</VueButton>
        <VueButton disabled class="big round flat danger" icon-left="error">Danger</VueButton>
        <VueButton disabled class="big round flat warning" icon-left="warning">Warning</VueButton>
        <VueButton disabled class="big round flat info" icon-left="info">Info</VueButton>
        <VueButton disabled class="big round flat success" icon-left="done">Success</VueButton>
      </div>
      <div class="row">
        <VueButton loading class="big round flat" icon-left="mic">Default</VueButton>
        <VueButton loading class="big round flat primary" icon-left="flag">Primary</VueButton>
        <VueButton loading class="big round flat accent" icon-left="star">Accent</VueButton>
        <VueButton loading class="big round flat danger" icon-left="error">Danger</VueButton>
        <VueButton loading class="big round flat warning" icon-left="warning">Warning</VueButton>
        <VueButton loading class="big round flat info" icon-left="info">Info</VueButton>
        <VueButton loading class="big round flat success" icon-left="done">Success</VueButton>
      </div>
      <div class="row">
        <VueButton loading-secondary class="big round flat" icon-left="mic">Default</VueButton>
        <VueButton loading-secondary class="big round flat primary" icon-left="flag">Primary</VueButton>
        <VueButton loading-secondary class="big round flat accent" icon-left="star">Accent</VueButton>
        <VueButton loading-secondary class="big round flat danger" icon-left="error">Danger</VueButton>
        <VueButton loading-secondary class="big round flat warning" icon-left="warning">Warning</VueButton>
        <VueButton loading-secondary class="big round flat info" icon-left="info">Info</VueButton>
        <VueButton loading-secondary class="big round flat success" icon-left="done">Success</VueButton>
      </div>

      <h3>Icon button</h3>
      <div class="row">
        <VueButton class="icon-button" icon-left="mic"/>
        <VueButton class="icon-button primary" icon-left="flag" tag="5"/>
        <VueButton class="icon-button accent" icon-left="star"/>
        <VueButton class="icon-button danger" icon-left="error"/>
        <VueButton class="icon-button warning" icon-left="warning"/>
        <VueButton class="icon-button info" icon-left="info"/>
        <VueButton class="icon-button success" icon-left="done"/>
      </div>
      <div class="row">
        <VueButton disabled class="icon-button" icon-left="mic"/>
        <VueButton disabled class="icon-button primary" icon-left="flag" tag="5"/>
        <VueButton disabled class="icon-button accent" icon-left="star"/>
        <VueButton disabled class="icon-button danger" icon-left="error"/>
        <VueButton disabled class="icon-button warning" icon-left="warning"/>
        <VueButton disabled class="icon-button info" icon-left="info"/>
        <VueButton disabled class="icon-button success" icon-left="done"/>
      </div>
      <div class="row">
        <VueButton loading class="icon-button" icon-left="mic"/>
        <VueButton loading class="icon-button primary" icon-left="flag"/>
        <VueButton loading class="icon-button accent" icon-left="star"/>
        <VueButton loading class="icon-button danger" icon-left="error"/>
        <VueButton loading class="icon-button warning" icon-left="warning"/>
        <VueButton loading class="icon-button info" icon-left="info"/>
        <VueButton loading class="icon-button success" icon-left="done"/>
      </div>
      <div class="row">
        <VueButton loading-secondary class="icon-button" icon-left="mic"/>
        <VueButton loading-secondary class="icon-button primary" icon-left="flag"/>
        <VueButton loading-secondary class="icon-button accent" icon-left="star"/>
        <VueButton loading-secondary class="icon-button danger" icon-left="error"/>
        <VueButton loading-secondary class="icon-button warning" icon-left="warning"/>
        <VueButton loading-secondary class="icon-button info" icon-left="info"/>
        <VueButton loading-secondary class="icon-button success" icon-left="done"/>
      </div>
      <div class="row">
        <VueButton class="icon-button flat" icon-left="mic"/>
        <VueButton class="icon-button flat primary" icon-left="flag"/>
        <VueButton class="icon-button flat accent" icon-left="star"/>
        <VueButton class="icon-button flat danger" icon-left="error"/>
        <VueButton class="icon-button flat warning" icon-left="warning"/>
        <VueButton class="icon-button flat info" icon-left="info"/>
        <VueButton class="icon-button flat success" icon-left="done"/>
      </div>
      <div class="row">
        <VueButton disabled class="icon-button flat" icon-left="mic"/>
        <VueButton disabled class="icon-button flat primary" icon-left="flag"/>
        <VueButton disabled class="icon-button flat accent" icon-left="star"/>
        <VueButton disabled class="icon-button flat danger" icon-left="error"/>
        <VueButton disabled class="icon-button flat warning" icon-left="warning"/>
        <VueButton disabled class="icon-button flat info" icon-left="info"/>
        <VueButton disabled class="icon-button flat success" icon-left="done"/>
      </div>
      <div class="row">
        <VueButton loading class="icon-button flat" icon-left="mic"/>
        <VueButton loading class="icon-button flat primary" icon-left="flag"/>
        <VueButton loading class="icon-button flat accent" icon-left="star"/>
        <VueButton loading class="icon-button flat danger" icon-left="error"/>
        <VueButton loading class="icon-button flat warning" icon-left="warning"/>
        <VueButton loading class="icon-button flat info" icon-left="info"/>
        <VueButton loading class="icon-button flat success" icon-left="done"/>
      </div>
      <div class="row">
        <VueButton loading-secondary class="icon-button flat" icon-left="mic"/>
        <VueButton loading-secondary class="icon-button flat primary" icon-left="flag"/>
        <VueButton loading-secondary class="icon-button flat accent" icon-left="star"/>
        <VueButton loading-secondary class="icon-button flat danger" icon-left="error"/>
        <VueButton loading-secondary class="icon-button flat warning" icon-left="warning"/>
        <VueButton loading-secondary class="icon-button flat info" icon-left="info"/>
        <VueButton loading-secondary class="icon-button flat success" icon-left="done"/>
      </div>
      <div class="row">
        <VueButton class="icon-button round" icon-left="mic"/>
        <VueButton class="icon-button round primary" icon-left="flag"/>
        <VueButton class="icon-button round accent" icon-left="star"/>
        <VueButton class="icon-button round danger" icon-left="error"/>
        <VueButton class="icon-button round warning" icon-left="warning"/>
        <VueButton class="icon-button round info" icon-left="info"/>
        <VueButton class="icon-button round success" icon-left="done"/>
      </div>
      <div class="row">
        <VueButton disabled class="icon-button round" icon-left="mic"/>
        <VueButton disabled class="icon-button round primary" icon-left="flag"/>
        <VueButton disabled class="icon-button round accent" icon-left="star"/>
        <VueButton disabled class="icon-button round danger" icon-left="error"/>
        <VueButton disabled class="icon-button round warning" icon-left="warning"/>
        <VueButton disabled class="icon-button round info" icon-left="info"/>
        <VueButton disabled class="icon-button round success" icon-left="done"/>
      </div>
      <div class="row">
        <VueButton loading class="icon-button round" icon-left="mic"/>
        <VueButton loading class="icon-button round primary" icon-left="flag"/>
        <VueButton loading class="icon-button round accent" icon-left="star"/>
        <VueButton loading class="icon-button round danger" icon-left="error"/>
        <VueButton loading class="icon-button round warning" icon-left="warning"/>
        <VueButton loading class="icon-button round info" icon-left="info"/>
        <VueButton loading class="icon-button round success" icon-left="done"/>
      </div>
      <div class="row">
        <VueButton loading-secondary class="icon-button round" icon-left="mic"/>
        <VueButton loading-secondary class="icon-button round primary" icon-left="flag"/>
        <VueButton loading-secondary class="icon-button round accent" icon-left="star"/>
        <VueButton loading-secondary class="icon-button round danger" icon-left="error"/>
        <VueButton loading-secondary class="icon-button round warning" icon-left="warning"/>
        <VueButton loading-secondary class="icon-button round info" icon-left="info"/>
        <VueButton loading-secondary class="icon-button round success" icon-left="done"/>
      </div>
      <div class="row">
        <VueButton class="icon-button round flat" icon-left="mic" tag="14"/>
        <VueButton class="icon-button round flat primary" icon-left="flag" tag="14"/>
        <VueButton class="icon-button round flat accent" icon-left="star"/>
        <VueButton class="icon-button round flat danger" icon-left="error"/>
        <VueButton class="icon-button round flat warning" icon-left="warning"/>
        <VueButton class="icon-button round flat info" icon-left="info" tag="14"/>
        <VueButton class="icon-button round flat success" icon-left="done"/>
      </div>
      <div class="row">
        <VueButton disabled class="icon-button round flat" icon-left="mic"/>
        <VueButton disabled class="icon-button round flat primary" icon-left="flag"/>
        <VueButton disabled class="icon-button round flat accent" icon-left="star"/>
        <VueButton disabled class="icon-button round flat danger" icon-left="error"/>
        <VueButton disabled class="icon-button round flat warning" icon-left="warning"/>
        <VueButton disabled class="icon-button round flat info" icon-left="info"/>
        <VueButton disabled class="icon-button round flat success" icon-left="done"/>
      </div>
      <div class="row">
        <VueButton loading class="icon-button round flat" icon-left="mic"/>
        <VueButton loading class="icon-button round flat primary" icon-left="flag"/>
        <VueButton loading class="icon-button round flat accent" icon-left="star"/>
        <VueButton loading class="icon-button round flat danger" icon-left="error"/>
        <VueButton loading class="icon-button round flat warning" icon-left="warning"/>
        <VueButton loading class="icon-button round flat info" icon-left="info"/>
        <VueButton loading class="icon-button round flat success" icon-left="done"/>
      </div>
      <div class="row">
        <VueButton loading-secondary class="icon-button round flat" icon-left="mic"/>
        <VueButton loading-secondary class="icon-button round flat primary" icon-left="flag"/>
        <VueButton loading-secondary class="icon-button round flat accent" icon-left="star"/>
        <VueButton loading-secondary class="icon-button round flat danger" icon-left="error"/>
        <VueButton loading-secondary class="icon-button round flat warning" icon-left="warning"/>
        <VueButton loading-secondary class="icon-button round flat info" icon-left="info"/>
        <VueButton loading-secondary class="icon-button round flat success" icon-left="done"/>
      </div>
      <div class="row">
        <VueButton class="big icon-button" icon-left="mic"/>
        <VueButton class="big icon-button primary" icon-left="flag"/>
        <VueButton class="big icon-button accent" icon-left="star"/>
        <VueButton class="big icon-button danger" icon-left="error"/>
        <VueButton class="big icon-button warning" icon-left="warning"/>
        <VueButton class="big icon-button info" icon-left="info"/>
        <VueButton class="big icon-button success" icon-left="done"/>
      </div>
      <div class="row">
        <VueButton disabled class="big icon-button" icon-left="mic"/>
        <VueButton disabled class="big icon-button primary" icon-left="flag"/>
        <VueButton disabled class="big icon-button accent" icon-left="star"/>
        <VueButton disabled class="big icon-button danger" icon-left="error"/>
        <VueButton disabled class="big icon-button warning" icon-left="warning"/>
        <VueButton disabled class="big icon-button info" icon-left="info"/>
        <VueButton disabled class="big icon-button success" icon-left="done"/>
      </div>
      <div class="row">
        <VueButton loading class="big icon-button" icon-left="mic"/>
        <VueButton loading class="big icon-button primary" icon-left="flag"/>
        <VueButton loading class="big icon-button accent" icon-left="star"/>
        <VueButton loading class="big icon-button danger" icon-left="error"/>
        <VueButton loading class="big icon-button warning" icon-left="warning"/>
        <VueButton loading class="big icon-button info" icon-left="info"/>
        <VueButton loading class="big icon-button success" icon-left="done"/>
      </div>
      <div class="row">
        <VueButton loading-secondary class="big icon-button" icon-left="mic"/>
        <VueButton loading-secondary class="big icon-button primary" icon-left="flag"/>
        <VueButton loading-secondary class="big icon-button accent" icon-left="star"/>
        <VueButton loading-secondary class="big icon-button danger" icon-left="error"/>
        <VueButton loading-secondary class="big icon-button warning" icon-left="warning"/>
        <VueButton loading-secondary class="big icon-button info" icon-left="info"/>
        <VueButton loading-secondary class="big icon-button success" icon-left="done"/>
      </div>
      <div class="row">
        <VueButton class="big icon-button flat" icon-left="mic" tag="7"/>
        <VueButton class="big icon-button flat primary" icon-left="flag" tag="7"/>
        <VueButton class="big icon-button flat accent" icon-left="star" tag="7"/>
        <VueButton class="big icon-button flat danger" icon-left="error" tag="7"/>
        <VueButton class="big icon-button flat warning" icon-left="warning" tag="7"/>
        <VueButton class="big icon-button flat info" icon-left="info" tag="7"/>
        <VueButton class="big icon-button flat success" icon-left="done" tag="7"/>
      </div>
      <div class="row">
        <VueButton disabled class="big icon-button flat" icon-left="mic"/>
        <VueButton disabled class="big icon-button flat primary" icon-left="flag"/>
        <VueButton disabled class="big icon-button flat accent" icon-left="star"/>
        <VueButton disabled class="big icon-button flat danger" icon-left="error"/>
        <VueButton disabled class="big icon-button flat warning" icon-left="warning"/>
        <VueButton disabled class="big icon-button flat info" icon-left="info"/>
        <VueButton disabled class="big icon-button flat success" icon-left="done"/>
      </div>
      <div class="row">
        <VueButton loading class="big icon-button flat" icon-left="mic"/>
        <VueButton loading class="big icon-button flat primary" icon-left="flag"/>
        <VueButton loading class="big icon-button flat accent" icon-left="star"/>
        <VueButton loading class="big icon-button flat danger" icon-left="error"/>
        <VueButton loading class="big icon-button flat warning" icon-left="warning"/>
        <VueButton loading class="big icon-button flat info" icon-left="info"/>
        <VueButton loading class="big icon-button flat success" icon-left="done"/>
      </div>
      <div class="row">
        <VueButton loading-secondary class="big icon-button flat" icon-left="mic"/>
        <VueButton loading-secondary class="big icon-button flat primary" icon-left="flag"/>
        <VueButton loading-secondary class="big icon-button flat accent" icon-left="star"/>
        <VueButton loading-secondary class="big icon-button flat danger" icon-left="error"/>
        <VueButton loading-secondary class="big icon-button flat warning" icon-left="warning"/>
        <VueButton loading-secondary class="big icon-button flat info" icon-left="info"/>
        <VueButton loading-secondary class="big icon-button flat success" icon-left="done"/>
      </div>
      <div class="row">
        <VueButton class="big icon-button round" icon-left="mic"/>
        <VueButton class="big icon-button round primary" icon-left="flag"/>
        <VueButton class="big icon-button round accent" icon-left="star"/>
        <VueButton class="big icon-button round danger" icon-left="error"/>
        <VueButton class="big icon-button round warning" icon-left="warning"/>
        <VueButton class="big icon-button round info" icon-left="info"/>
        <VueButton class="big icon-button round success" icon-left="done"/>
      </div>
      <div class="row">
        <VueButton disabled class="big icon-button round" icon-left="mic"/>
        <VueButton disabled class="big icon-button round primary" icon-left="flag"/>
        <VueButton disabled class="big icon-button round accent" icon-left="star"/>
        <VueButton disabled class="big icon-button round danger" icon-left="error"/>
        <VueButton disabled class="big icon-button round warning" icon-left="warning"/>
        <VueButton disabled class="big icon-button round info" icon-left="info"/>
        <VueButton disabled class="big icon-button round success" icon-left="done"/>
      </div>
      <div class="row">
        <VueButton loading class="big icon-button round" icon-left="mic"/>
        <VueButton loading class="big icon-button round primary" icon-left="flag"/>
        <VueButton loading class="big icon-button round accent" icon-left="star"/>
        <VueButton loading class="big icon-button round danger" icon-left="error"/>
        <VueButton loading class="big icon-button round warning" icon-left="warning"/>
        <VueButton loading class="big icon-button round info" icon-left="info"/>
        <VueButton loading class="big icon-button round success" icon-left="done"/>
      </div>
      <div class="row">
        <VueButton loading-secondary class="big icon-button round" icon-left="mic"/>
        <VueButton loading-secondary class="big icon-button round primary" icon-left="flag"/>
        <VueButton loading-secondary class="big icon-button round accent" icon-left="star"/>
        <VueButton loading-secondary class="big icon-button round danger" icon-left="error"/>
        <VueButton loading-secondary class="big icon-button round warning" icon-left="warning"/>
        <VueButton loading-secondary class="big icon-button round info" icon-left="info"/>
        <VueButton loading-secondary class="big icon-button round success" icon-left="done"/>
      </div>
      <div class="row">
        <VueButton class="big icon-button round flat" icon-left="mic"/>
        <VueButton class="big icon-button round flat primary" icon-left="flag"/>
        <VueButton class="big icon-button round flat accent" icon-left="star"/>
        <VueButton class="big icon-button round flat danger" icon-left="error"/>
        <VueButton class="big icon-button round flat warning" icon-left="warning"/>
        <VueButton class="big icon-button round flat info" icon-left="info"/>
        <VueButton class="big icon-button round flat success" icon-left="done"/>
      </div>
      <div class="row">
        <VueButton disabled class="big icon-button round flat" icon-left="mic"/>
        <VueButton disabled class="big icon-button round flat primary" icon-left="flag"/>
        <VueButton disabled class="big icon-button round flat accent" icon-left="star"/>
        <VueButton disabled class="big icon-button round flat danger" icon-left="error"/>
        <VueButton disabled class="big icon-button round flat warning" icon-left="warning"/>
        <VueButton disabled class="big icon-button round flat info" icon-left="info"/>
        <VueButton disabled class="big icon-button round flat success" icon-left="done"/>
      </div>
      <div class="row">
        <VueButton loading class="big icon-button round flat" icon-left="mic"/>
        <VueButton loading class="big icon-button round flat primary" icon-left="flag"/>
        <VueButton loading class="big icon-button round flat accent" icon-left="star"/>
        <VueButton loading class="big icon-button round flat danger" icon-left="error"/>
        <VueButton loading class="big icon-button round flat warning" icon-left="warning"/>
        <VueButton loading class="big icon-button round flat info" icon-left="info"/>
        <VueButton loading class="big icon-button round flat success" icon-left="done"/>
      </div>
      <div class="row">
        <VueButton loading-secondary class="big icon-button round flat" icon-left="mic"/>
        <VueButton loading-secondary class="big icon-button round flat primary" icon-left="flag"/>
        <VueButton loading-secondary class="big icon-button round flat accent" icon-left="star"/>
        <VueButton loading-secondary class="big icon-button round flat danger" icon-left="error"/>
        <VueButton loading-secondary class="big icon-button round flat warning" icon-left="warning"/>
        <VueButton loading-secondary class="big icon-button round flat info" icon-left="info"/>
        <VueButton loading-secondary class="big icon-button round flat success" icon-left="done"/>
      </div>
    </div>
  </div>
</template>
