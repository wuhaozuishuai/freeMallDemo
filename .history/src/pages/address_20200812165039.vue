<template>
    <div>
        <nav-header></nav-header>
        <!-- 面包屑 -->
        <div class="nav-breadcrumb-wrap">
            <div class="container">
                <nav class="nav-breadcrumb">
                    <a href="/">首页</a>
                    <span>地址</span>
                </nav>
            </div>
        </div>
        <!-- 地址确认 -->
        <div class="checkout-page">
            <svg style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1"
                 xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <defs>
                    <symbol id="icon-add" viewBox="0 0 31 32">
                        <title>add</title>
                        <path class="path1"
                              d="M30.745 15.152h-14.382v-14.596c0-0.308-0.243-0.557-0.543-0.557s-0.543 0.249-0.543 0.557v14.596h-14.665c-0.3 0-0.543 0.249-0.543 0.557s0.243 0.557 0.543 0.557h14.665v15.177c0 0.307 0.243 0.557 0.543 0.557s0.543-0.249 0.543-0.557v-15.177h14.382c0.3 0 0.543-0.249 0.543-0.557s-0.243-0.557-0.543-0.557z">
                        </path>
                    </symbol>
                    <symbol id="icon-edit" viewBox="0 0 32 32">
                        <title>edit</title>
                        <path class="path1"
                              d="M28.287 8.51l-4.805-4.806 0.831-0.831c0.472-0.472 1.086-0.777 1.564-0.777 0.248 0 0.452 0.082 0.622 0.253l3.143 3.144c0.539 0.54 0.133 1.529-0.524 2.186l-0.831 0.831zM26.805 9.992l-1.138 1.138-4.805-4.806 1.138-1.138 4.805 4.806zM24.186 12.612l-14.758 14.762-4.805-4.806 14.758-14.762 4.805 4.806zM7.379 28.288l-4.892 1.224 1.223-4.894 3.669 3.67zM31.123 4.011l-3.143-3.144c-0.567-0.567-1.294-0.867-2.103-0.867-1.036 0-2.174 0.52-3.045 1.391l-20.429 20.436c-0.135 0.134-0.23 0.302-0.276 0.487l-2.095 8.385c-0.089 0.355 0.017 0.736 0.276 0.995 0.198 0.198 0.461 0.307 0.741 0.307 0.085 0 0.171-0.010 0.254-0.031l8.381-2.096c0.185-0.047 0.354-0.142 0.487-0.276l20.43-20.436c1.409-1.41 2.042-3.632 0.524-5.15v0z">
                        </path>
                    </symbol>
                    <symbol id="icon-del" viewBox="0 0 32 32">
                        <title>delete</title>
                        <path class="path1"
                              d="M11.355 4.129v-2.065h9.29v2.065h-9.29zM6.194 29.935v-23.742h19.613v23.742h-19.613zM30.968 4.129h-8.258v-3.097c0-0.569-0.463-1.032-1.032-1.032h-11.355c-0.569 0-1.032 0.463-1.032 1.032v3.097h-8.258c-0.569 0-1.032 0.463-1.032 1.032s0.463 1.032 1.032 1.032h3.097v24.774c0 0.569 0.463 1.032 1.032 1.032h21.677c0.569 0 1.032-0.463 1.032-1.032v-24.774h3.097c0.569 0 1.032-0.463 1.032-1.032s-0.463-1.032-1.032-1.032v0z">
                        </path>
                        <path class="path2"
                              d="M10.323 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z">
                        </path>
                        <path class="path3"
                              d="M16 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z">
                        </path>
                        <path class="path4"
                              d="M21.677 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z">
                        </path>
                    </symbol>
                </defs>
            </svg>
            <div class="container">
                <div class="checkout-addr">
                    <div class="page-title-normal">
                        <h2 class="page-title-h2"><span>结算</span></h2>
                    </div>
                    <!-- process step -->
                    <div class="check-step">
                        <ul>
                            <li class="cur">确认地址</li>
                            <li>查看订单</li>
                            <li>支付</li>
                            <li>订单 确认</li>
                        </ul>
                    </div>

                    <!-- address list -->
                    <div class="page-title-normal checkout-title">
                        <h2><span>配送地址</span></h2>
                    </div>
                    <div class="addr-list-wrap">
                        <div class="addr-list">
                            <ul>
                                <li  :class="{'check':checkIndex==index}" v-for="(item,index) in addressFilter" :key="item.addressId"
                                     @click="
                                           checkIndex = index;
                                     ">
                                    <dl>
                                        <dt>{{item.userName}}</dt>
                                        <dd class="address">{{item.streetName}}</dd>
                                        <dd class="tel">{{item.tel}}</dd>
                                    </dl>
                                    <div class="addr-opration addr-del">
                                        <!-- 删除地址 -->
                                        <a href="javascript:;" class="addr-del-btn" v-on:click="delAddressConfirm(item),confirmType=2">
                                            <svg class="icon icon-del">
                                                <use xlink:href="#icon-del"></use>
                                            </svg>
                                        </a>
                                    </div>
                                    <div class="addr-opration addr-set-default"  >
                                        <a href="javascript:;" class="addr-set-default-btn" v-if="!item.isDefault" v-on:click="checkAddress(item.addressId,index)"><i>设为默认</i></a>
                                    </div>
                                    <div class="addr-opration addr-default" v-if="item.isDefault">默认地址</div>
                                </li>

                                <li class="addr-new">
                                    <div class="add-new-inner">
                                        <i class="icon-add" v-on:click="delAddressConfirm(type = 2),confirmType=1">
                                            <svg class="icon icon-add">
                                                <use xlink:href="#icon-add"></use>
                                            </svg>
                                        </i>
                                        <p>添加地址</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div class="shipping-addr-more">
                            <a class="addr-more-btn up-down-btn" href="javascript:;" @click="repand" :class="{'open':limit>3}">
                                查看更多
                                <i class="i-up-down">
                                    <i class="i-up-down-l"></i>
                                    <i class="i-up-down-r"></i>
                                </i>
                            </a>
                        </div>
                    </div>

                    <!-- shipping method-->
                    <div class="page-title-normal checkout-title">
                        <h2><span>配送方式</span></h2>
                    </div>
                    <div class="shipping-method-wrap">
                        <div class="shipping-method">
                            <ul>
                                <li class="check">
                                    <div class="name">标准配送</div>
                                    <div class="price">免费配送</div>
                                    <div class="shipping-tips">
                                        <p>一旦发货，订单应在1-7个工作日内到达目的地</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="next-btn-wrap">
                        <a class="btn btn--m btn--red" href="#">下一步</a>
                    </div>
                </div>
            </div>
        </div>
        <nav-footer></nav-footer>
        <modal v-bind:mdShow='modalConfirm' @close="closeModal">
            <!--           旧版语法-->
            <!--            <p slot="message">你确认要删除此条数据吗</p>-->
            <!--            <div slot="btnGroup">-->
            <!--                <a  class="btn btn&#45;&#45;m" href="javascript:;">确认</a>-->
            <!--                <a  class="btn btn&#45;&#45;m btn&#45;&#45;red" href="javascript:;" @click="modalConfirm=false">关闭</a>-->
            <!--            </div>-->


            <template v-slot:message>
                <template v-if="confirmType===1">
                    <input placeholder="姓名" ref="name" type="text" style="display: block ;width: 100%;margin-top: 10px;">
                    <input placeholder="地址" ref="address" type="text" style="display: block;width: 100%;margin-top: 10px;">
                    <input placeholder="电话" ref="telephone" type="text" style="display: block;width: 100%;margin-top: 10px;">
                </template>
                <template v-else>
                    <p slot="message">你确认要删除当前地址吗？</p>
                </template>
            </template>
            <template v-slot:btnGroup>
                <template v-if="confirmType===1">
                    <a class="btn btn--m" href="javascript:;" @click="addAddress">确认</a>
                    <a class="btn btn--m btn--red" href="javascript:;" @click="modalConfirm=false">关闭</a>
                </template>
                <template v-else>
                    <a class="btn btn--m" href="javascript:;" @click="delAddress">确认</a>
                    <a class="btn btn--m btn--red" href="javascript:;" @click="modalConfirm=false">关闭</a>
                </template>

            </template>
        </modal>

    </div>

</template>

<script>
    import NavHeader from './../components/Header.vue'
    import NavFooter from './../components/Footer.vue'
    import Modal from './../components/Modal.vue'
    export default {
        name: "addr",
        data(){
            return{
                addressList:[],
                limit:3,//控制默认展示3个
                checkIndex:0,//控制默认选中
                delItem:'',//删除对象
                modalConfirm: false,//弹窗显示属性
                confirmType:0
            }
        },
        components:{
            NavHeader,
            NavFooter,
            Modal
        },
        //计算属性
        computed:{
            //显示数量
            addressFilter(){
                // return this.reFilter();
                // eslint-disable-next-line vue/no-side-effects-in-computed-properties
                return this.addressList.slice(0,this.limit);
            }
        },
        //过滤器
        // filters: {
        //     //控制物品总价为两位小数
        //     currency(value) {
        //         if (!value) {
        //             return 0.00
        //         }
        //         return '￥' + value.toFixed(2) + "元";
        //     }
        // },
        mounted() {
            this.init();//初始化地址列表
        },
        methods:{
            //初始化地址列表
            init(){
                this.axios.get('/address.json').then((res)=>{
                    let data = res.data ;
                    this.addressList = data.data;
                    this.addressList.forEach((item,index)=>{
                        if (item.isDefault){
                            console.log(index)
                            this.checkIndex = index;
                        }
                    })
                })
            },
            //查看更多
            repand(){
                if (this.limit===3){
                    this.limit=this.addressList.length;

                }else {
                    this.limit=3;
                }
            },
            //设置默认地址
            checkAddress(id){
                this.addressList.map((item)=>{
                   if (id === item.addressId) {
                        item.isDefault = true;
                   }else {
                       item.isDefault = false;
                   }
                })
            },
            //弹出确认弹窗
            delAddressConfirm(item){

                if (item !==2){
                    this.delItem = item
                }
                this.modalConfirm = true;
            },
            //确认删除改地址
            delAddress(){
                let delItem = this.delItem;
                this.addressList.forEach((item, index) => {

                    if (delItem.addressId === item.addressId) {
                        this.addressList.splice(index, 1);
                        this.modalConfirm = false;
                    }
                })
            },
            //关闭弹窗
            closeModal() {
                this.modalConfirm = false;
            },
            // reFilter(){
            //     // eslint-disable-next-line no-unused-vars
            //     let  add =0;
            //     console.log(add)
            //     this.addressList.splice(0,this.limit)
            //     console.log()
            //     add++
            // }
            addAddress(){
                this.name = this.$refs.name.value;
                this.address = this.$refs.address.value;
                this.telephone = this.$refs.telephone.value;
                if (this.name!=='' && this.address!==''&&this.telephone!==''){
                    let addItem ={
                        userName:this.name,
                        streetName:this.address,
                        tel:this.telephone
                    }
                    console.log(addItem)
                    this.addressList.push(addItem)
                    this.modalConfirm=false
                }else {
                   alert('清将信息填写完整！！')

                }

            }
        }
    }
</script>

<style scoped>

</style>
