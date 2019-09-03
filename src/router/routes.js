
import Home from '@/views/Home.vue'
import Page4 from '@/views/nav2/Page4.vue'
import Page5 from '@/views/nav2/Page5.vue'
import Page6 from '@/views/nav3/Page6.vue'
import echarts from '@/views/charts/echarts.vue'

let routes = [{
		path: '/login',
		component: resolve => require(['@/views/Login.vue'],resolve),
		name: '',
		hidden: true
	},
	{
		path: '/404',
		component: resolve => require(['@/views/404.vue'],resolve),
		name: '',
		hidden: true
	},
	//{ path: '/main', component: Main },
	{
		path: '/',
		component: Home,
		name: '会员管理',
		iconCls: 'el-icon-menu', //图标样式class
		children: [{
				path: '/main',
				component: resolve => require(['@/views/Main.vue'],resolve),
				name: '设置会员卡种'
			},
			{
				path: '/table',
				component: resolve => require(['@/views/menber/card_type'],resolve),
				name: '会员卡发放管理'
			},
			{
				path: '/form',
				component: resolve => require(['@/views/menber/Form.vue'],resolve),
				name: '会员卡充值管理'
			},
			{
				path: '/user',
				component: resolve => require(['@/views/menber/user.vue'],resolve),
				name: '会员卡消费记录'
			},
		]
	},
	// {
	//     path: '/',
	//     component: Home,
	//     name: '导航二',
	//     iconCls: 'fa fa-id-card-o',
	//     children: [
	//         { path: '/page4', component: Page4, name: '页面4' },
	//         { path: '/page5', component: Page5, name: '页面5' }
	//     ]
	// },
	// {
	//     path: '/',
	//     component: Home,
	//     name: '',
	//     iconCls: 'fa fa-address-card',
	//     leaf: true,//只有一个节点
	//     children: [
	//         { path: '/page6', component: Page6, name: '导航三' }
	//     ]
	// },
	// {
	//     path: '/',
	//     component: Home,
	//     name: 'Charts',
	//     iconCls: 'fa fa-bar-chart',
	//     children: [
	//         { path: '/echarts', component: echarts, name: 'echarts' }
	//     ]
	// },
	{
		path: '*',
		hidden: true,
		redirect: {
			path: '/404'
		}
	}
];

export default routes;
