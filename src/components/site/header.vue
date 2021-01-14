<template>
  <v-toolbar-title>
    {{ title }}
    <v-btn icon @click="openDialog"><v-icon>mdi-pencil</v-icon></v-btn>

    <v-dialog v-model="dialog" width="420">
      <v-card>
        <v-card-title class="title">
          사이트 제목 수정
          <v-spacer></v-spacer>
          <v-btn icon @click="save"><v-icon>mdi-content-save</v-icon></v-btn>
        </v-card-title>

        <v-card-text>
          <v-text-field label="사이트 제목" v-model="text" @keyup.enter="save"></v-text-field>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-toolbar-title>
</template>
<script>
export default {
  props: ['title'],
  data() {
    return {
      dialog: false,
      text: this.title
    }
  },
  methods: {
    openDialog() {
      this.dialog = true
      this.text = this.title
    },
    save() {
      this.$firebase
        .database()
        .ref()
        .child('site')
        .update({ title: this.text })

      this.dialog = false
    }
  }
}
</script>
