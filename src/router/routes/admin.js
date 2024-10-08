export default [
  {
    path: '/users',
    name: 'users',
    component: () => import('@/views/admin/users/List.vue'),
    meta: {
      resource: 'User',
      action: 'read',
    },
  },
  {
    path: '/roles',
    name: 'roles',
    component: () => import('@/views/admin/users-roles/List.vue'),
    meta: {
      resource: 'Role',
      action: 'read',
    },
  },
  {
    path: '/roles/:id/set_permissions',
    name: 'roles.set_permissions',
    component: () => import('@/views/admin/users-roles/SetPermissions.vue'),
    meta: {
      resource: 'Role',
      action: 'set_permissions',
      pageTitle: 'Set Permissions',
      breadcrumb: [
        {
          text: 'Roles',
          to: '/roles',
        },
        {
          text: 'Set Permissions',
          active: true,
        },
      ],
    },
  },
  {
    path: '/parent_groups',
    name: 'parent_groups',
    component: () => import('@/views/admin/parent_groups/List.vue'),
    meta: {
      resource: 'ParentGroup',
      action: 'read',
    },
  },
  {
    path: '/clients',
    name: 'clients',
    component: () => import('@/views/admin/clients/List.vue'),
    meta: {
      resource: 'Client',
      action: 'read',
    },
  },
  {
    path: '/front_websites',
    name: 'front_websites',
    component: () => import('@/views/admin/front_websites/List.vue'),
    meta: {
      resource: 'Website',
      action: 'read',
    },
  },
  {
    path: '/front_websites/set_credit',
    name: 'front_websites.set_credit',
    component: () => import('@/views/admin/front_websites-set_credit/List.vue'),
    meta: {
      resource: 'Website',
      action: 'set_credit',
    },
  },
  {
    path: '/members/list',
    name: 'members.list',
    component: () => import('@/views/admin/members-list/List.vue'),
    meta: {
      resource: 'Member',
      action: 'read',
    },
  },
  {
    path: '/members/online',
    name: 'members.online',
    component: () => import('@/views/admin/members-online/List.vue'),
    meta: {
      resource: 'Member',
      action: 'read_online',
    },
  },
  {
    path: '/members/referrals',
    name: 'members.referrals',
    component: () => import('@/views/admin/members-referrals/List.vue'),
    meta: {
      resource: 'Member',
      action: 'read_referrals',
    },
  },
  {
    path: '/members/blacklist',
    name: 'members.blacklist',
    component: () => import('@/views/admin/members-blacklist/List.vue'),
    meta: {
      resource: 'Member',
      action: 'read_blacklist',
    },
  },
  {
    path: '/transactions/new_deposits',
    name: 'transactions.new_deposits',
    component: () => import('@/views/admin/transactions-new_deposits/List.vue'),
    meta: {
      resource: 'MemberTransaction',
      action: 'read_new_deposits',
    },
  },
  {
    path: '/transactions/new_withdrawals',
    name: 'transactions.new_withdrawals',
    component: () => import('@/views/admin/transactions-new_withdrawals/List.vue'),
    meta: {
      resource: 'MemberTransaction',
      action: 'read_new_withdrawals',
    },
  },
  {
    path: '/transactions/deposit_list',
    name: 'transactions.deposit_list',
    component: () => import('@/views/admin/transactions-deposit_list/List.vue'),
    meta: {
      resource: 'MemberTransaction',
      action: 'read_deposit_list',
    },
  },
  {
    path: '/transactions/withdrawal_list',
    name: 'transactions.withdrawal_list',
    component: () => import('@/views/admin/transactions-withdrawal_list/List.vue'),
    meta: {
      resource: 'MemberTransaction',
      action: 'read_withdrawal_list',
    },
  },
  {
    path: '/transactions/adjustments',
    name: 'transactions.adjustments',
    component: () => import('@/views/admin/transactions-adjustments/List.vue'),
    meta: {
      resource: 'MemberTransaction',
      action: 'read_adjustments',
    },
  },
  {
    path: '/transfer_logs',
    name: 'transfer_logs',
    component: () => import('@/views/admin/transfer_logs/List.vue'),
    meta: {
      resource: 'TransferLog',
      action: 'read',
    },
  },
  {
    path: '/user_logs',
    name: 'user_logs',
    component: () => import('@/views/admin/user_logs/List.vue'),
    meta: {
      resource: 'TransferLog',
      action: 'read',
    },
  },
  {
    path: '/promotions/list',
    name: 'promotions.index',
    component: () => import('@/views/admin/promotions/List.vue'),
    meta: {
      resource: 'Promotion',
      action: 'read',
    },
  },
  {
    path: '/promotions/:id/settings',
    name: 'promotions.settings',
    component: () => import('@/views/admin/promotions/Settings.vue'),
    meta: {
      resource: 'Promotion',
      action: 'setting',
    },
  },
  {
    path: '/promotions/manual',
    name: 'promotions.manual',
    component: () => import('@/views/admin/promotions-manual/List.vue'),
    meta: {
      resource: 'Promotion',
      action: 'read_manual',
    },
  },
  {
    path: '/promotions/summary',
    name: 'promotions.summary',
    component: () => import('@/views/admin/promotions-summary/List.vue'),
    meta: {
      resource: 'Promotion',
      action: 'read_summary',
    },
  },
  {
    path: '/promotions/release',
    name: 'promotions.release',
    component: () => import('@/views/admin/promotions-release/List.vue'),
    meta: {
      resource: 'Promotion',
      action: 'read_release',
    },
  },
  {
    path: '/rebate_settings',
    name: 'rebate_settings',
    component: () => import('@/views/admin/rebate_settings/Index.vue'),
    meta: {
      resource: 'RebateSetting',
      action: 'read',
    },
  },
  {
    path: '/rebate_logs',
    name: 'rebate_logs',
    component: () => import('@/views/admin/rebate_logs/List.vue'),
    meta: {
      resource: 'RebateLog',
      action: 'read',
    },
  },
  {
    path: '/referral_settings',
    name: 'referral_settings',
    component: () => import('@/views/admin/referral_settings/Index.vue'),
    meta: {
      resource: 'ReferralSetting',
      action: 'read',
    },
  },
  {
    path: '/referral_logs',
    name: 'referral_logs',
    component: () => import('@/views/admin/referral_logs/List.vue'),
    meta: {
      resource: 'ReferralLog',
      action: 'read',
    },
  },
  {
    path: '/banks/groups',
    name: 'banks.groups',
    component: () => import('@/views/admin/banks-groups/List.vue'),
    meta: {
      resource: 'BankGroup',
      action: 'read',
    },
  },
  {
    path: '/banks/list',
    name: 'banks.list',
    component: () => import('@/views/admin/banks-list/List.vue'),
    meta: {
      resource: 'Bank',
      action: 'read',
    },
  },
  {
    path: '/banks/accounts',
    name: 'banks.accounts',
    component: () => import('@/views/admin/banks-accounts/List.vue'),
    meta: {
      resource: 'CompanyBank',
      action: 'read',
    },
  },
  {
    path: '/website_settings',
    name: 'website_settings',
    component: () => import('@/views/admin/website_settings/Index.vue'),
    meta: {
      resource: 'WebsiteSetting',
      action: 'read',
    },
  },
  {
    path: '/page_contents',
    name: 'page_contents',
    component: () => import('@/views/admin/page_contents/List.vue'),
    meta: {
      resource: 'PageContent',
      action: 'read',
    },
  },
  {
    path: '/page_contents/new',
    name: 'page_contents.new',
    component: () => import('@/views/admin/page_contents/Form.vue'),
    meta: {
      resource: 'PageContent',
      action: 'create',
    },
  },
  {
    path: '/page_contents/:id/edit',
    name: 'page_contents.edit',
    component: () => import('@/views/admin/page_contents/Form.vue'),
    // eslint-disable-next-line radix
    props: route => ({ resourceId: parseInt(route.params.id) }),
    meta: {
      resource: 'PageContent',
      action: 'update',
    },
  },
  {
    path: '/contact_settings',
    name: 'contact_settings',
    component: () => import('@/views/admin/contact_settings/List.vue'),
    meta: {
      resource: 'ContactSetting',
      action: 'read',
    },
  },
  {
    path: '/guide_lists',
    name: 'guide_lists',
    component: () => import('@/views/admin/guide_lists/List.vue'),
    meta: {
      resource: 'GuideList',
      action: 'read',
    },
  },
  {
    path: '/guide_contents',
    name: 'guide_contents',
    component: () => import('@/views/admin/guide_contents/List.vue'),
    meta: {
      resource: 'GuideContent',
      action: 'read',
    },
  },
  {
    path: '/guide_contents/:id/edit',
    name: 'guide_contents.edit',
    component: () => import('@/views/admin/guide_contents/Form.vue'),
    // eslint-disable-next-line radix
    props: route => ({ resourceId: parseInt(route.params.id) }),
    meta: {
      resource: 'PageContent',
      action: 'update',
    },
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('@/views/admin/dashboard/Index.vue'),
    meta: {
      resource: 'Dashboard',
      action: 'view',
    },
  },
  {
    path: '/markets/list',
    name: 'markets',
    component: () => import('@/views/admin/markets/List.vue'),
    meta: {
      resource: 'Market',
      action: 'read',
    },
  },
  {
    path: '/markets/websites',
    name: 'market_websites',
    component: () => import('@/views/admin/market_websites/List.vue'),
    meta: {
      resource: 'MarketWebsite',
      action: 'read',
    },
  },
  {
    path: '/markets/limit_settings',
    name: 'market_limit_settings',
    component: () => import('@/views/admin/market_limit_settings/Index.vue'),
    meta: {
      resource: 'MarketLimitSetting',
      action: 'read',
    },
  },
  {
    path: '/games/settings',
    name: 'game_settings',
    component: () => import('@/views/admin/game_settings/Index.vue'),
    meta: {
      resource: 'GameSetting',
      action: 'read',
    },
  },
  {
    path: '/reports/pl',
    name: 'reports.profit_loss',
    component: () => import('@/views/admin/profit-loss/ProfitLoss.vue'),
    meta: {
      resource: 'ProfitLoss',
      action: 'read',
    },
  },
  {
    path: '/reports/profit_loss_by_member',
    name: 'reports.profit_loss_by_member',
    component: () => import('@/views/admin/reports-profit_loss_by_member/List.vue'),
    meta: {
      resource: 'ProfitLossByMember',
      action: 'read',
    },
  },
]
