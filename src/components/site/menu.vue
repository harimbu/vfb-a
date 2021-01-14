<template lang="">
  <div>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title">Application</v-list-item-title>
        <v-list-item-subtitle>subtext</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list>
      <v-list-group v-for="(item, i) in site.menus" :key="i" v-model="item.active" :prepend-icon="item.icon" no-action>
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
          <v-btn icon @click="openDialog(i)"><v-icon>mdi-pencil</v-icon></v-btn>
        </template>

        <v-list-item v-for="(subItem, j) in item.subItems" :key="j" :to="item.to">
          <v-list-item-content>
            <v-list-item-title v-text="subItem.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-icon><v-icon>mdi-plus</v-icon></v-list-item-icon>
          <v-list-item-content><v-list-item-title>서브 추가하기</v-list-item-title></v-list-item-content>
        </v-list-item>
      </v-list-group>

      <v-list-item @click="openDialog(-1)">
        <v-list-item-icon><v-icon>mdi-plus</v-icon></v-list-item-icon>
        <v-list-item-content><v-list-item-title>추가하기</v-list-item-title></v-list-item-content>
      </v-list-item>
    </v-list>

    <v-dialog v-model="dialogItem" max-width="420px">
      <v-card>
        <v-card-title class="title">
          메뉴
          <v-spacer></v-spacer>
          <v-btn icon @click="saveItem"><v-icon>mdi-content-save</v-icon></v-btn>
        </v-card-title>

        <v-card-text>
          <v-text-field v-model="formItem.title" @keyup.enter="saveItem"></v-text-field>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  props: ['site'],
  data() {
    return {
      dialogItem: false,
      formItem: {
        icon: '',
        title: ''
      },
      selectedIndex: null
    }
  },
  methods: {
    openDialog(index) {
      this.selectedIndex = index
      this.dialogItem = true
      if (index < 0) {
        this.formItem.title = ''
      } else {
        this.formItem.title = this.site.menus[index].title
      }
    },
    saveItem() {
      if (this.selectedIndex < 0) {
        this.site.menus.push(this.formItem)
        console.log(this.site)
      } else {
        this.site.menus[this.selectedIndex].title = this.formItem.title
        console.log(this.site)
      }
      this.save()
    },
    async save() {
      try {
        await this.$firebase
          .database()
          .ref()
          .child('site')
          .set(this.site)
      } catch (error) {
        console.log(this.site)
        console.log(error.message)
      } finally {
        this.dialogItem = false
      }
    }
  }
}
</script>
