<template>
	<div id="card_type" class="pt20">
		<el-form :inline="true" :model="formInline" class="demo-form-inline">
			<el-form-item label="会 员 卡 号">
				<el-input v-model="formInline.card_number" placeholder="请输入会员卡号	"></el-input>
			</el-form-item>
			<el-form-item label="会员姓名">
				<el-input v-model="formInline.name" placeholder="请输入会员姓名"></el-input>
			</el-form-item>
			<el-form-item label="车牌号码">
				<el-input v-model="formInline.car_number" placeholder="请输入车牌号码"></el-input>
			</el-form-item>
			<el-form-item label="手机号">
				<el-input v-model="formInline.phone" placeholder="请输入会员或手机号"></el-input>
			</el-form-item>
			<div class="flex_sb">
				<el-button type="primary">发放会员卡</el-button>
				<div>
					<el-form-item label="会员卡类型">
						<el-select v-model="formInline.type" placeholder="活动区域">
							<el-option label="充值卡" value="shanghai"></el-option>
							<el-option label="套餐卡" value="beijing"></el-option>
							<el-option label="充值卡+套餐卡" value="beijing"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="onSubmit()">搜索</el-button>
					</el-form-item>
				</div>
			</div>
		</el-form>
		<p class="ptb10 plr10 colw border1 card_title">会员卡基本信息</p>
		<template>
			<el-table :data="tableData" border style="width: 100%">
				<el-table-column type="index" label="序号">
				</el-table-column>
				<el-table-column prop="date" label="会员卡号">
				</el-table-column>
				<el-table-column prop="name" label="会员姓名">
				</el-table-column>
				<el-table-column prop="province" label="会员手机号">
				</el-table-column>
				<el-table-column prop="city" label="卡状态">
				</el-table-column>
				<el-table-column prop="address" label="卡余额">
				</el-table-column>
				<el-table-column prop="zip" label="售卡人">
				</el-table-column>
				<el-table-column prop="zip" label="创建人">
				</el-table-column>
				<el-table-column prop="zip" label="创建日期">
				</el-table-column>
				<el-table-column prop="zip" label="卡有效期">
				</el-table-column>
				<el-table-column prop="zip" label="状态">
				</el-table-column>
				<el-table-column fixed="right" label="操作" width="300">
					<template slot-scope="scope">
						<el-button @click="handleClick(scope.row)" type="primary" size="small">绑定多车</el-button>
						<el-button @click="handleClick(scope.row)" type="warning" size="small">卡延期</el-button>
						<el-button @click="handleClick(scope.row)" type="danger" size="small">作废</el-button>
						<el-button @click="handleClick(scope.row)" type="success" size="small">查看</el-button>
					</template>
				</el-table-column>
			</el-table>
		</template>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				formInline: {
					card_number: '',
					name: '',
					car_number: '',
					phone: '',
					type: ''
				},
				tableData: [{
					date: '2016-05-03',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1518 弄',
					zip: 200333
				}, {
					date: '2016-05-02',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1518 弄',
					zip: 200333
				}, {
					date: '2016-05-04',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1518 弄',
					zip: 200333
				}, {
					date: '2016-05-01',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1518 弄',
					zip: 200333
				}]
			}
		},
		created() {

		},
		mounted() {

		},
		methods: {
			//搜索
			onSubmit() {
				const that = this;
				console.log(this.formInline)
			},
			//查看编辑
			handleClick(row) {
				console.log(row);
			}
		},
	}
</script>

<style scoped lang="scss">
	@import '~scss_vars';

	.card_title {
		background: $text_color;
	}
</style>
