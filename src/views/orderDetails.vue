<template>
  <div>
    <!-- 地址栏卡片 -->
    <van-contact-card
      :type="cardType"
      :name="currentContact.name"
      :tel="currentContact.mobile"
      @click="showList = true"
    />

    <!-- 地址栏列表 -->
    <van-popup v-model="showList" position="bottom">
      <van-address-list
        v-model="chosenContactId"
        :list="list"
        @add="onAdd"
        @edit="onEdit"
        @select="onSelect"
      />
    </van-popup>
    <!-- 地址栏编辑 -->
    <van-popup v-model="showEdit" position="bottom">
      <van-address-edit
        :contact-info="editingContact"
        :is-edit="isEdit"
        @save="onSave"
        @delete="onDelete"
      />
    </van-popup>
  </div>
</template>

<script>
  import {orderDetailAction,getListAction,saveAction} from '../api/api'
  export default {
    data(){
      return{
        chosenContactId: null,
        editingContact: {},
        showList: false,
        showEdit: false,
        isEdit: false,
        list: [],
        params: {
          openId: 'oQmbb4sNZdxaUQZ0sfYgvtOP2S7c',
        }
      }
    },
    computed: {
      cardType() {
        return this.chosenContactId !== null ? 'edit' : 'add';
      },

      currentContact() {
        const id = this.chosenContactId;
        return id !== null ? this.list.filter((item) => item.id === id)[0] : {};
      },
    },
    created() {
      this.getAddress();
    },
    methods: {
      //获取地址
      getAddress() {
        getListAction(this.params).then(res => {
          this.list = res.data.data;
        })
      },
      // 添加联系人
      onAdd() {
        this.editingContact = { id: this.list.length };
        this.isEdit = false;
        this.showEdit = true;
      },
      // 编辑联系人
      onEdit(item) {
        this.isEdit = true;
        this.showEdit = true;
        this.editingContact = item;
      },

      // 选中联系人
      onSelect() {
        this.showList = false;
      },

      // 保存联系人
      onSave(info) {
        this.showEdit = false;
        this.showList = false;

        if (this.isEdit) {
          this.list = this.list.map((item) =>
            item.id === info.id ? info : item
          );
        } else {
          this.list.push(info);
        }
        this.chosenContactId = info.id;
      },

      // 删除联系人
      onDelete(info) {
        this.showEdit = false;
        this.list = this.list.filter((item) => item.id !== info.id);
        if (this.chosenContactId === info.id) {
          this.chosenContactId = null;
        }
      },
    },
  }
</script>

<style scoped>

</style>
