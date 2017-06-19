<template>
    <div id="hello-title">
        <p>{{hello}}</p>
    </div>
</template>

<script>
    export default {
        props: {
            // 基础类型检测 （`null` 意思是任何类型都可以）
            propA: {
                type: Number
            },
            // 多种类型
            propB: {
                type: [String, Number]
            },
            // 必传且是字符串
            propC: {
                type: String,
                required: true
            },
            // 数字 有默认值
            propD: {
                type: Number,
                default: 100
            },
            // 数组 / 对象的默认值应当由一个工厂函数返回
            propE: {
                type: Object,
                default: function () {
                    return {
                        message: 'Hello'
                    }
                }
            },
            // 自定义验证函数
            propF: {
                validator: function (value) {
                    return value > 10;
                }
            }

        },
        data() {
            return  {
                hello: 'hello vue.js'
            }
        }
    }
</script>
<style lang="scss">
    #hello-title {
        font-size: 24px;
    }
</style>