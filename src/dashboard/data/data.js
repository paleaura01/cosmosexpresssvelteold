import MdiNewspaperVariantMultipleOutline from '../sidenavigation/icons/MdiNewspaperVariantMultipleOutline.svelte';


const data = [
	{
		section: 'Documents',
		icon: MdiNewspaperVariantMultipleOutline,
		content: [
			{
				title: 'Taxes',
				link: '/documents/taxes'
			},
			{
				title: 'Travel',
				link: '/documents/travel'
			},
			{
				title: 'Insurance',
				link: '/documents/insurance'
			}
		]
	},
	{
		section: 'Messages',
		icon: MdiNewspaperVariantMultipleOutline,
		content: [
			{
				title: 'Unbox',
				link: '/messages/unbox'
			},
			{
				title: 'Unread',
				link: '/messages/unread'
			},
			{
				title: 'Archived',
				link: '/messages/archived'
			}
		]
	},
	{
		section: 'Pictures',
		icon: MdiNewspaperVariantMultipleOutline,
		content: [
			{
				title: 'Vacations',
				link: '/pictures/vacations'
			},
			{
				title: 'Anniversary',
				link: '/pictures/anniversary'
			},
			{
				title: 'University',
				link: '/pictures/university'
			}
		]
	},
	{
		section: 'Statistics',
		icon: MdiNewspaperVariantMultipleOutline,
		content: [
			{
				title: 'Finances',
				link: '/statistics/finances'
			},
			{
				title: 'Call Stats',
				link: '/statistics/call-stats'
			},
			{
				title: 'Trip Logs',
				link: '/statistics/trip-logs'
			}
		]
	},
	{
		section: 'Events',
		icon: MdiNewspaperVariantMultipleOutline,
		content: [
			{
				title: 'Weddings',
				link: '/events/weddings'
			},
			{
				title: 'Networking',
				link: '/events/networking'
			}
		]
	},
	{
		section: 'Guides',
		icon: MdiNewspaperVariantMultipleOutline,
		content: [
			{
				title: 'Documentation',
				link: '/guides/documentation'
			}
		]
	}
];

export default data;