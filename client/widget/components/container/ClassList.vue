<template lang="html">
    <el-row>
        <el-row>
            <el-row style="padding: 10px 15px;background: #fff">
                <el-col :span="24">
                    <el-button size="small" type="primary" @click="addClass">添加分类</el-button>
                </el-col>
            </el-row>
        </el-row>
        <el-row>
            <el-col :span="24">
                <el-table style="width: 100%;"
                          align="center"
                          stripe
                          :data="lists"
                          v-loading="listLoading"
                          element-loading-text="拼命加载中">
                    <el-table-column type="index" width="60"></el-table-column>
                    <el-table-column prop="created_at" min-width="180" label="创建时间"></el-table-column>
                    <el-table-column prop="classify" min-width="180" label="分类名称"></el-table-column>
                    <el-table-column min-width="200" label="操作">
                        <template scope="scope">
                            <el-button size="small" type="primary" @click="editClass(scope.row)">
                                编辑
                            </el-button>
                            <el-button size="small" type="danger" @click="remove(scope.row._id)">
                                删除
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-col>
        </el-row>
        <!-- table end-->
        <el-row>
            <el-col :span="24">
                <el-dialog :title="formTitle" v-model="formVisible">
                    <el-form :model="classifyInf" label-width="120px" ref="classifyInf" :rules="formRule">
                        <el-form-item label="分类名称" prop="classify">
                            <el-input v-model="classifyInf.classify" auto-complete="off"></el-input>
                        </el-form-item>
                    </el-form>
                    <div slot="footer">
                        <el-button @click="formVisible = false">取消</el-button>
                        <el-button type="primary" @click="editSubmit" :loading="editLoading">{{ btnText }}</el-button>
                    </div>
                </el-dialog>
            </el-col>
        </el-row>
    </el-row>
</template>

<script type="text/ecmascript-6">
    import axios from 'axios';
    import api from '../../api/index';
    import NProgress from 'nprogress';
    export default {
        data() {
            return {
                lists: [],
                listLoading: false,
                formTitle: '',
                formVisible: false,
                classifyInf: {
                    id: 0,
                    classify: ''
                },
                formRule: {
                    classify: [
                        {
                            required: true,
                            message: '请输入分类名称',
                            trigger: 'blur'
                        }
                    ]
                },
                editLoading: false,
                btnText: '提交'
            }
        },
        methods: {
            getLists() {
                this.listLoading = true;
                NProgress.start();
                api.getClassify()
                        .then((result) => {
                            setTimeout(() => {
                                this.listLoading = false;
                                this.lists = result.data.lists;
                                NProgress.done();
                            },500);
                        });
            },
            remove(id) {
                this.$confirm('确认要删除吗?', '提醒', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'waring'
                }).then(() => {
                    this.listLoading = true;
                    NProgress.start();
                    api.removeClassifyList({id}).then(({data: {code, message}}) => {
                        this.listLoading = false;
                        NProgress.done();
                        if (code === 200) {
                            this.$notify({
                                title: '成功',
                                message,
                                type: 'success'
                            })
                        }
                        else if (code === 401) {
                            this.$notify({
                                title: '失败',
                                message,
                                type: 'error'
                            });
                            setTimeout(() => {
                                this.$router.replace({path: '/login'})
                            },500);
                            return false;
                        }
                    }).catch((err) => {
                        console.log(err);
                        this.$router.replace({path: '/error'});
                    });
                }).catch((err) => {
                    console.log(err);
                });
            },
            addClass() {
                this.formVisible = true;
                this.formTitle = '新增';
                this.classifyInf.classify = '';
            },
            editClass(row) {
                this.formVisible = true;
                this.formTitle = '编辑';
                this.classifyInf.classify = row.classify;
                this.classifyInf.id = row._id;
            },
            editSubmit() {
                this.$refs.classifyInf.validate(valid => {
                    if (valid) {
                        this.$confirm('确认提交吗?', '提示', {})
                                .then(() => {
                                    this.btnText = '提交中';
                                    this.editLoading = true;
                                    NProgress.start();
                                    switch (this.formTitle) {
                                        case '新增':
                                            api.addClassify({
                                                classify: this.classifyInf.classify
                                            }).then(({data: {code}}) => {
                                                NProgress.done();
                                                this.btnText = '提交';
                                                this.editLoading = false;
                                                if (code === 200) {
                                                    this.$notify({
                                                        title: '成功',
                                                        message: '提交成功',
                                                        type: 'success'
                                                    });
                                                }
                                                else if (code === 401) {
                                                    this.$notify({
                                                        title: '失败',
                                                        message,
                                                        type: 'error'
                                                    });
                                                    setTimeout(() => {
                                                        this.$router.replace({path: '/login'});
                                                    }, 500);
                                                    return  false;
                                                }
                                                this.formVisible = false;
                                                this.getLists();
                                            });
                                            break;
                                        case '编辑':
                                            api.editClassify({
                                                id: this.classifyInf.id,
                                                classify: this.classifyInf.classify
                                            }).then(({data: {code}}) => {
                                                NProgress.done();
                                                if (code === 200) {
                                                    this.$notify({
                                                        title: '成功',
                                                        message: '提交成功',
                                                        type: 'success'
                                                    });
                                                }
                                                else if (code === 401) {
                                                    this.$notify({
                                                        title: '失败',
                                                        message,
                                                        type: 'error'
                                                    });
                                                    setTimeout(() => {
                                                        this.$router.replace({path: '/login'});
                                                    }, 500);
                                                    return  false;
                                                }
                                                this.formVisible = false;
                                                this.getLists();
                                            })
                                    }
                                })
                                .catch(err => {

                                });
                    }
                });
            }
        },
        mounted() {
            this.getLists();
        }
    }
</script>

<style lang="scss" scoped>
    .page {
        padding: 10px;
        background: #fff;
    }
</style>